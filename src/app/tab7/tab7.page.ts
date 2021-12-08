import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import * as BaseConfig from '../services/config';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  userDetails : any = [];

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
    public actionSheetController: ActionSheetController,
    private androidPermissions: AndroidPermissions,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private mediaCapture: MediaCapture,
  ) { }

  ngOnInit() {
    if (this.common.platform.is("cordova" || "capacitor")) {
      this.common.platform.ready().then(() => {
        this.filePermission();
      });
    }
  }

  ionViewWillEnter(){
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });
  }
  async filePermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
  togoBack() {
    this.common.router.navigate(['/tabs/tab6']);
  }
  CaptureImage() {
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options)
      .then(
        (data) => {
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.onProgress((e) =>
          {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
            this.common.presentToast('Uploaded ' + prg + '% of file');
          });
          let options: FileUploadOptions = {
            fileKey: 'matchfile',
            fileName: data[0].name,
            httpMethod: 'POST',
            mimeType: 'multipart/form-data',
            chunkedMode: false,
            params: {
              id: this.userDetails.userid,
              file_type: 'jpg'
            },
            headers: {
              Connection: 'close'
            }
          }
          fileTransfer.upload(data[0].fullPath, BaseConfig.baseUrl + 'iMatch/api/v1/UploadAvatar', options)
            .then((data) => {
              console.dir('*****************' + data);
            }, (err) => {
              console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));

          });
        },
        (err: CaptureError) => console.error(err)
      );
  }

  CaptureVideo() {
    const options: CaptureVideoOptions = { limit: 1, duration:120, quality: 80 };
    this.mediaCapture.captureVideo(options)
      .then(
        (data) => {
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.onProgress((e) =>
          {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
            this.common.presentToast('Uploaded ' + prg + '% of file');
          });
          let options: FileUploadOptions = {
            fileKey: 'matchfile',
            fileName: data[0].name,
            httpMethod: 'POST',
            mimeType: 'multipart/form-data',
            chunkedMode: false,
            params: {
              id: this.userDetails.userid,
              file_type: 'mp4'
            },
            headers: {
              Connection: 'close'
            }
          }
          fileTransfer.upload(data[0].fullPath, BaseConfig.baseUrl + 'iMatch/api/v1/UploadAvatar', options)
            .then((data) => {
              console.dir('*****************' + data);
            }, (err) => {
              console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));

          });
        },
        (err: CaptureError) => console.error(err)
      );

  }
  async PickDocuments() {
    await this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        const fileName   = filePath.substring(filePath.lastIndexOf("/") + 1);
        const fileType   = fileName.substring(fileName.lastIndexOf(".") + 1);
        if(fileType != "jpg" && fileType != 'jpeg' && fileType != 'mp4'){
          this.common.presentToast('Selected invalid file');
        }else{
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.onProgress((e) =>
          {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
            this.common.presentToast('Uploaded ' + prg + '% of file');
          });
          let options: FileUploadOptions = {
            fileKey: 'matchfile',
            fileName: filePath.substring(filePath.lastIndexOf("/") + 1),
            httpMethod: 'POST',
            mimeType: 'multipart/form-data',
            chunkedMode: false,
            params: {
              id: this.userDetails.userid,
              file_type: fileType
            },
            headers: {
              Connection: 'close'
            }
          }
          fileTransfer.upload(filePath, BaseConfig.baseUrl + 'iMatch/api/v1/UploadAvatar', options)
            .then((data) => {
              console.dir('*****************' + data);
            }, (err) => {
              console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));

          });
        }
        
      },err => {
        console.log(err);
        throw err;
      });
    },err => {
      console.log(err);
      throw err;
    });
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: ' File format must be MP4, AAC, Mp3, PNG, JPG ',
      buttons: [
        {
          text: 'Other Files',
          icon: 'folder-open',
          handler: () => {
            this.PickDocuments()
          }
        }, 
        {
          text: 'Capture Image',
          icon: 'camera',
            handler: () => {
              this.CaptureImage()
          }
        },
        {
          text: 'Capture Video',
          icon: 'videocam',
            handler: () => {
              this.CaptureVideo()
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
            handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
