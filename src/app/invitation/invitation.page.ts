import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from './../services/common.service';
import { ActionSheetController, IonSlides } from '@ionic/angular';
import { FormBuilder,	FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import * as BaseConfig from '../services/config';

const { Camera, Filesystem } = Plugins;

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {

  showUploadSection = false;
  FormSubmit : boolean = false;
  // isLink: boolean = false;
  isLink:  {[key: number]: boolean} = {};
  // hideImageSpace: boolean = true;
  hideImageSpace: {[key: number]: boolean} = {};

  anArray: any = [];
  wordArray: any = [];
  linkArray: any = [];
  myFiles: any = [];

  userDetails: any = [];
  invitationDetails: any = [];
  invite: any = [];
  MatchFiles: any = [];
  ImageDetails: any = [];
  statusId: any ;

  public LinkInputForm: FormGroup;
  link: AbstractControl;
  InvitationWording: string;

  userLink = {
    "link": ""
  }

  // @ViewChild('slides', {static: true}) slides: IonSlides;
  personalMatchSlideIndex: any;
  FileTransferResponse: any = [];
  isWording: {[key: number]: boolean} = {};
  isVideo: {[key: number]: boolean} = {};
  isAudio: {[key: number]: boolean} = {};
  isImage: {[key: number]: boolean} = {};
  Links: any;
  // isImage: boolean = false;
  // isAudio: boolean = false;
  // isVideo: boolean = false;

  constructor(
    public storageservice: StorageService,
    public actionSheetController: ActionSheetController,
    public common: CommonService,
    public formbuilder: FormBuilder,
    private mediaCapture: MediaCapture,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private http : HttpClient,
  ) {
    
    this.LinkInputForm = formbuilder.group({
      link : ['', Validators.compose([
                                      Validators.required,
                                      Validators.minLength(7),
                                      Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                                        ])]
   });

   this.link = this.LinkInputForm.controls['link'];

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe((resp:any) => {
      this.userDetails = resp;
      this.personalMatchSlideIndex = this.userDetails.personalMatchSlideIndex;
    });

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.common.showLoader();
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val ;

      if ( this.userDetails.userid != '' ) {

    const params = {
      userid : this.userDetails.userid
    };

    this.common.postMethod('AllInvitation', params).then(async (res: any) => {
      this.invitationDetails = res.details;
      this.MatchFiles = res.details.files;
      for (let i = 0; i < this.invitationDetails.length; i++) {
          this.hideImageSpace[i] = true;
      }
      await this.common.hideLoader();

    }, async err => {
      
      await this.common.hideLoader();
      console.log('Error:', err);
    });

    } else {
    }

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

  openUploadSection(e,invite) {
    this.showUploadSection = !this.showUploadSection;
  }

  closeUploadSection(e, invite, i) {
    this.showUploadSection = false;
    let params = {
      matchid : invite.match_id,
      status : 'reject',
      userid: this.userDetails.userid
    }

    this.common.postMethod('Match_reply',params).then((res:any) => {

      if (res.status == true) {
        // this.RefreshInvitaionList(i);
        // this.common.presentToast('You had rejected ' + invite.sender_name + '`s match ');
        // this.common.navCtrl.navigateForward(['tabs/tab5'], {queryParams: this.userDetails});
        this.common.router.navigate(['tabs/tab6']);
      } else {
        this.common.presentToast('You had already replied to '+ invite.sender_name + '`s invitation ');
        this.common.router.navigate(['tabs/tab6']);
      }

    });

  }

  RefreshInvitaionList (i:number) {
    this.FileTransferResponse = [];
    this.hideImageSpace[i] = true;
    this.isImage[i] = false;
    this.isAudio[i] = false;
    this.isVideo[i] = false;
    this.isLink[i] = false;
    this.isWording[i] = false;
    let params = {
      userid : this.userDetails.userid
    }
    this.common.postMethod('AllInvitation',params).then((res:any) => {
      this.invitationDetails = res.details;
    }, err => {
      console.log('Error:',err);
    });
  }

  acceptInvitation(e, invite, i) {
    if(this.anArray.length > 0){
      this.common.showLoader();
      const formData = new FormData();
      for( let i=0;i<this.myFiles.length; i++) 
      {
        formData.append("filename[]",this.myFiles[i]);
      }
      formData.append("matchid", invite.match_id);
      formData.append("userid", this.userDetails.userid);
      formData.append("sub_caption", JSON.stringify(this.anArray));
      formData.append("links", JSON.stringify(this.linkArray));
      formData.append("texts", JSON.stringify(this.wordArray));
      this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/acceptInvitation',formData 
      ).subscribe((res) => {
        if (res['message']==='Successfully uploaded') {
          // this.common.presentToast('File Uploaded Successful');
          this.common.router.navigate(['tabs/tab6']);
          this.common.hideLoader();
        } else {
          this.common.router.navigate(['tabs/tab6']);
          this.common.hideLoader();
        }
      }, err => {
        this.common.hideLoader();
        this.common.router.navigate(['tabs/tab6']);
        console.log('err',err);
      });
    }else{
      this.common.showAlert('You must select file or word or link');
    }
  }

  async presentActionSheet(e, invite, i) {
    this.invite = invite;
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: ' File format must be MP4, AAC, Mp3, PNG, JPG ',
      buttons: [
        {
          text: 'Send Wordings',
          icon: 'text',
          handler: () => {
            // this.SendWordings(i);
            this.wordArray.push({value: ''});
            this.Add('text');
          }
        },
        {
          text: 'Share Links',
          icon: 'link',
          handler: () => {
            // this.pickLinks(i);
            this.linkArray.push({value: 'http://'});
            this.Add('link');
          }
        },
        {
          text: 'Capture Image',
          icon: 'camera',
          handler: () => {
            this.CaptureImage(i);
          }
        }, 

        {
          text: 'Capture Video',
          icon: 'videocam',

          handler: () => {
            this.CaptureVideo(i);
          }
        },
        {
          text: 'Capture Audio',
          icon: 'mic-circle',

          handler: () => {
            this.CaptureAudio(i);
          }
        },

        {
          text: 'Other Files',
          icon: 'folder-open',
          handler: () => {
            this.PickDocuments(i);
          }
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }]
    });
    await actionSheet.present();
  }
  BringItOn() {
    if (this.FileTransferResponse?.length != 0 || this.statusId != undefined) {
      let params = {
        request_id : this.invite.match_id,
        status : 'accept'
      }
      this.common.postMethod('Match_reply',params).then((res:any) => {
        if (res.status == true) {
          this.ionViewWillEnter();
          this.common.router.navigate(['/tabs/tab8']);
          this.common.presentToast('You have successfully accepted ' + this.invite.sender_name + '`s match ');
        } else {
          this.common.presentToast('You had already replied to '+ this.invite.sender_name + '`s invitation ');
        }
  
      }, err => {
        console.log('Error:',err);
      });

    } else {

      this.common.presentToast('Please upload a media , and then click `Bring It On!` ');
    
    }

  }

  async pickLinks(i:number) {
    this.isLink[i] = true;
    this.hideImageSpace[i] = false;
    this.isWording[i] = false;
  }

  SendWordings(i:number) {
    this.isLink[i] = false;
    this.hideImageSpace[i] = false;
    this.isWording[i] = true;
  }

  CaptureImage(i:number) {
    this.hideImageSpace[i] = true;
    this.isWording[i] = false;
    this.isLink[i] = false;
    // this.isCaptureImage = true;
    const options: CaptureImageOptions = { limit: 1};
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          this.isImage[i] = true;
          this.uploadFile2(data[0], 'image', i);
        },
        (err: CaptureError) => console.error(err)
      );
  }

  CaptureAudio(i:number) {
    this.hideImageSpace[i] = true;
    this.isWording[i] = false;
    this.isLink[i] = false;
    const options: CaptureAudioOptions = { limit: 1, duration: 2};
    this.mediaCapture.captureAudio(options)
    .then(
      (data: MediaFile[]) => {
        this.isAudio[i] = true;
        this.uploadFile2(data[0], 'audio', i);
      },
      (err: CaptureError) => console.error(err)
    );
  }

  CaptureVideo(i:number) {
    this.hideImageSpace[i] = true;
    this.isWording[i] = false;
    this.isLink[i] = false;
    const options: CaptureVideoOptions = { limit: 1 , duration: 2, quality: 80};
    this.mediaCapture.captureVideo(options)
    .then(
      (data: MediaFile[]) => {
        this.isVideo[i] = true;
        this.uploadFile2(data[0], 'video', i);
      },
      (err: CaptureError) => console.error(err)
    );

  }

  PickDocuments(i:number) {
    this.hideImageSpace[i] = true;
    this.isWording[i] = false;
    this.isLink[i] = false;

    let file: any;

    this.fileChooser.open()
    .then(uri => {

      this.filePath.resolveNativePath(uri)
      .then(filePath => {
        let fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);

        file = {
          name: fileNameFromPath,
          fullPath: filePath
        };

        this.isImage[i] = true;
        this.uploadFile2(file, 'file', i);
      })
      .catch(err => console.log(err));

    })
    .catch(e => console.log(e));

  }

  uploadFile2(file:any, type: string, i:number) {

    let options: FileUploadOptions;

    options = {
      fileKey: "matchfile",
      fileName: file.name,
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      params: {
        matchid: this.invite.match_id,
        userid: this.userDetails.userid,
        upload_id: 0
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

    const fileUplaodUrl = 'http://192.168.107.183/iMatch/api/v1/MatchFileUpload';

    fileTransfer.onProgress((e) => 
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
      this.common.presentToast('Uploaded ' + prg + '% of file');
    });

    fileTransfer.upload(filePath, fileUplaodUrl, options)
      .then((data) => {
        let res = JSON.parse(data.response);
        if (res.file_extension === 'mp4') {
          this.isVideo[i] = true;
          // this.isDummyImage = false;

        } else if (res.file_extension === 'aac') {
          this.isAudio[i] = true;
          // this.isDummyImage = false;

        } else if (res.file_extension === 'png') {
          this.isImage[i] = true;
          // this.isDummyImage = false;

        } else if (res.file_extension === 'jpg') {
          this.isImage[i] = true;
          // this.isDummyImage = false;

        } else if (res.file_extension === 'mp3') {
          this.isAudio[i] = true;
          // this.isDummyImage = false;

        }

        if (res.status == true) {
          this.common.showAlertSuccess('Match File Upload Successful');
          this.FileTransferResponse = res.upload_details;
            this.common.hideLoader();
        } else {
          this.common.presentToast('File upload Failed');
        }

        this.common.hideLoader();
      }, (err) => {
        console.log('File Transfer Error:', err);
      }
    );
  }


}