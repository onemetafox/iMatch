import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { CommonService } from './../services/common.service';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { FormBuilder,	FormGroup, Validators, AbstractControl} from '@angular/forms';
// import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import * as BaseConfig from '../services/config';
// const { Camera, Filesystem } = Plugins;
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-before-match-invitation',
  templateUrl: './before-match-invitation.page.html',
  styleUrls: ['./before-match-invitation.page.scss'],
})
export class BeforeMatchInvitationPage implements OnInit {

  FormSubmit : boolean = false;
  showUploadSection = false;
  isLink: boolean = false;
  isWording: boolean = false;
  hideImageSpace: boolean = true;

  public invitation: FormGroup;
  public LinkInputForm: FormGroup;
  public WordingInputForm: FormGroup;

  description: AbstractControl;
  duration: AbstractControl;
  caption: AbstractControl;
  link: AbstractControl;
  wording: AbstractControl;

  userData = {
    "description":"",
    "duration":"",
    "caption":""
    };

    userWording = {
      "wording": ""
    }

    userLink = {
      "link": ""
    }

  opponentDetails: any = [];
  anArray: any = [];
  wordArray: any = [];
  linkArray: any = [];
  userDetails: any = [];
  MatchDetails: any = [];
  ImageDetails: any = [];
  statusId: any = [];
  FileTransferResponse: any = [];
  isMedia: boolean = false;
  isVideo: boolean = false;
  isAudio: boolean = false;
  isImage: boolean = false;
  isDummyImage: boolean = true;
  fileArray: any [] = [];

  constructor(

    public common: CommonService,
    public formbuilder: FormBuilder,
    public storageservice: StorageService,
    public actionSheetController: ActionSheetController,
    private androidPermissions: AndroidPermissions,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private mediaCapture: MediaCapture,
    private camera: Camera,
    private platform: Platform
  ) {

    this.invitation = formbuilder.group({
      description : ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      duration : ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])],
      caption : ['', Validators.compose([
        Validators.minLength(2),
      ])],
    });

    this.LinkInputForm = formbuilder.group({
      link : ['', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
      ])], 
    });


    this.WordingInputForm = formbuilder.group({
      wording : ['', Validators.compose([
        Validators.required,
      ])], 
    });

    this.link = this.LinkInputForm.controls['link'];
    this.wording = this.WordingInputForm.controls['wording'];

    this.description = this.invitation.controls['description'];
    this.duration = this.invitation.controls['duration'];
    this.caption = this.invitation.controls['caption'];

    this.common.route.queryParams.subscribe(resp => {
      this.opponentDetails = JSON.parse(resp.selectUsers);
    });

  }

  ngOnInit() {
    if (this.common.platform.is("cordova" || "capacitor")) {
      this.common.platform.ready().then(() => {
        this.filePermission();
      });
    }
  }

  ionViewWillEnter(){
    this.storageservice.storage.get('userDetails').then ((val) => {
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

  toCallForAMatch() {
    let params = {
      texts : JSON.stringify(this.wordArray),
      links : JSON.stringify(this.linkArray),
      sub_captions: JSON.stringify(this.anArray),
      rival_id : this.userDetails.userid,
      opponent_id : JSON.stringify(this.opponentDetails),
      description : this.userData.description,
      time_duration : this.userData.duration,
      caption : this.userData.caption,
      category : 'Personalized',
    }

    this.common.postMethod('CreateOpenMatch',params).then((res:any) => {
      this.common.router.navigate(['/tabs/tab6']);
    }, (err) => {
      this.common.hideLoader();
      console.log('Error:',err);
    });
  }

  ForLinkWordingSubmit () {
    let params = {
      rival_id : this.userDetails.userid,
      opponent_id : this.opponentDetails.userid,
      description : this.userData.description,
      time_duration : this.userData.duration,
      caption : this.userData.caption,
      category : 'Personalized',
      uploaded_id : this.statusId,
    }

    this.common.showLoader();
    this.common.postMethod('MatchInvitation',params).then((res:any) => {
      if (res.status == true) {
        this.invitation.reset();
        this.common.presentToast(' You have successfully sent a match invitation to ' + this.opponentDetails.name);
        this.common.router.navigate(['/tabs/tab3']);
      } else {
        this.common.presentToast(' Match Invitation Sending Failed ! ');
      }

      this.MatchDetails = res;
      this.common.hideLoader();
    }, (err) => {
      console.log('Error:',err);
    });

  }

  Add(type){
    if(this.anArray.length >= 4){
      this.common.showAlert('Maximum is 4 items');
      return;
    }
    if(type == 'link'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'link'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
    if(type == 'file'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'file'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
    if(type == 'text'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'text'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
  }
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: ' File format must be MP4, AAC, Mp3, PNG, JPG ',
      buttons: [
        {
          text: 'Share Wording',
          icon: 'text',
            handler: () => {
              this.wordArray.push({value: ''});
              this.Add('text');
          }
        }, 

        {
          text: 'Share Links',
          icon: 'link',
            handler: () => {
              this.linkArray.push({value: 'http://'});
              this.Add('link');
          }
        }, 
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
              this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },

        {
          text: 'Capture Video',
          icon: 'videocam',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },

        {
          text: 'Capture Audio',
          icon: 'mic',
            handler: () => {
              this.captureAudio();
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

  captureImage() {
    this.isMedia = true;
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options).then(
      (data: MediaFile[]) => {
          this.isImage = true;
          this.uploadFile2(data[0], 'image');
        },
      (err: CaptureError) => console.error(err)
    ); 
  }
        
  captureVideo() {
    this.isMedia = true;
    const options: CaptureVideoOptions = { limit: 1 , duration: 2, quality: 80};
      this.mediaCapture.captureVideo(options)
        .then(
          (data: MediaFile[]) => {
            this.isVideo = true;
            this.uploadFile2(data[0], 'video');
        },
      (err: CaptureError) => console.error(err)
    );
  }
        
  captureAudio() {
    this.isMedia = true;
    const options: CaptureAudioOptions = { limit: 1};
    this.mediaCapture.captureAudio(options)
      .then(
        (data: MediaFile[]) => {
        this.isAudio = true;
        this.uploadFile2(data[0], 'audio');
      },
      (err: CaptureError) => console.error(err)
    );
  }

  pickWording() {
    this.isLink = false;
    this.isWording = true;
    this.hideImageSpace = false;
  }

  async pickLinks() {
    this.isLink = true;
    this.hideImageSpace = false;
  }
  PickDocuments() {
    let file: any;

    this.fileChooser.open()
    .then((fileData)=>{
      file = {
        name: fileData.substr(fileData.lastIndexOf('/') + 1),
      }
      // this.base64.encodeFile(fileData).then((base64File:string) => {        
      //   file.data.push(base64File.substr(base64File.indexOf(',') + 1));
      // }, (err) => {
      //   console.log(err);
      // });
      this.fileArray.push(file);
    })
    .catch(e => console.log(e));

  }
  // async pickDocuments() {
  //   this.isMedia = true;
  //   let file: any;
  //   this.fileChooser.open().then(uri => {
  //     this.filePath.resolveNativePath(uri).then(filePath => {
  //       let fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
  //       let currentName = uri.substring(uri.lastIndexOf('/') + 1, uri.lastIndexOf('?'));
  //       file = {
  //         name: fileNameFromPath,
  //         fullPath: filePath
  //       };
  //       this.uploadFile2(file, 'file');
  //     })
  //     .catch(err => console.log(err));
  //   }).catch(e => console.log(e));
  // }

  uploadFile2(file: any, type: string) {
    this.isDummyImage = false;
    let options: FileUploadOptions;
    options = {
      fileKey: 'matchfile',
      fileName: file.name,
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      params: {
        matchid: '',
        userid: this.userDetails.userid,
        upload_id: 0,
      },
      headers: {
        Connection: 'close'
      }
    };
    let filePath: any;
    if (type !== 'audio') {
      filePath = encodeURI(file.fullPath);
    } else {
      filePath = file.fullPath;
    }

    this.common.showLoader();
    const fileTransfer: FileTransferObject = this.transfer.create();

    const fileUplaodUrl = BaseConfig.baseUrl + '/iMatch/api/v1/MatchFileUpload';

    fileTransfer.onProgress((e) =>
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
      this.common.presentToast('Uploaded ' + prg + '% of file');
    });

    fileTransfer.upload(filePath, fileUplaodUrl, options).then((data) => {
      let res = JSON.parse(data.response);
      if (res.file_extension === 'mp4') {
        this.isVideo = true;
        this.isDummyImage = false;

      } else if (res.file_extension === 'aac') {
        this.isAudio = true;
        this.isDummyImage = false;

      } else if (res.file_extension === 'png') {
        this.isImage = true;
        this.isDummyImage = false;

      } else if (res.file_extension === 'jpg') {
        this.isImage = true;
        this.isDummyImage = false;

      } else if (res.file_extension === 'mp3') {
        this.isAudio = true;
        this.isDummyImage = false;
      }

      if (res.status == true) {
        this.FileTransferResponse = res.upload_details;
      }
      this.common.hideLoader();
    }, (err) => {
      console.log('Error:', err);
    });
  }

}