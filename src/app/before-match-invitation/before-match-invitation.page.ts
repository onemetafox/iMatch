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
  filesPath: any;
  filesName: any;
  filesType: any;

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
      var matchid = res['matchid'];
          this.fileArray.forEach(item => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            fileTransfer.onProgress((e) =>
            {
              let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
              this.common.presentToast('Uploaded ' + prg + '% of file');
            });
            let options: FileUploadOptions = {
              fileKey: 'matchfile',
              fileName: item.name,
              httpMethod: 'POST',
              mimeType: 'multipart/form-data',
              chunkedMode: false,
              params: {
                match_id: matchid,
                userid: this.userDetails.userid
              },
              headers: {
                Connection: 'close'
              }
            }
            fileTransfer.upload(item.filePath, BaseConfig.baseUrl + 'iMatch/api/v1/MatchFileUpload', options)
              .then((data) => {
                console.dir('*****************' + data);

              }, (err) => {
                console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));

            });
          });
          
          this.common.presentToast('File Uploaded Successful');
          this.common.router.navigate(['tabs/tab6']);
          this.common.hideLoader();
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
          text: 'Capture Audio',
          icon: 'mic',
            handler: () => {
              this.CaptureAudio();
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

  CaptureImage() {
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'jpg'
          })
        },
        (err: CaptureError) => console.error(err)
      );
  }

  CaptureVideo() {
    const options: CaptureVideoOptions = { limit: 1, duration:120, quality: 80 };
    this.mediaCapture.captureVideo(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'mp4'
          })
        },
        (err: CaptureError) => console.error(err)
      );

  }

  CaptureAudio() {
    const options: CaptureAudioOptions = { limit: 1 };
    this.mediaCapture.captureAudio(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'mp3'
          })
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
  async PickDocuments() {
    await this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        this.filesPath = filePath;
        this.filesName   = this.filesPath.substring(this.filesPath.lastIndexOf("/") + 1);
        this.filesType   = this.filesName.substring(this.filesName.lastIndexOf(".") + 1);
        this.Add('file');
        this.fileArray.push({
          name: this.filesName,
          type: this.filesType,
          uri: uri,
          filePath: filePath
        })
      },err => {
        console.log(err);
        throw err;
      });
    },err => {
      console.log(err);
      throw err;
    });
  }
}