import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,	FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Platform } from '@ionic/angular';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx'
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import * as BaseConfig from '../services/config';
import { Camera, CameraOptions, PictureSourceType  } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-personal-match-media-upload',
  templateUrl: './personal-match-media-upload.page.html',
  styleUrls: ['./personal-match-media-upload.page.scss'],
})

export class PersonalMatchMediaUploadPage implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  myFiles:string [] = [];
  FormSubmit : boolean = false;
  isLink: boolean = false;
  hideImageSpace: boolean = true;
  anArray: any [] = [];
  linkArray: any [] = [];
  wordArray: any [] = [];

  LinkInputForm: FormGroup;
  TextInputForm: FormGroup;
  Invitation: FormGroup;

  description: AbstractControl;
  caption: AbstractControl;
  link1: AbstractControl;
  link2: AbstractControl;
  fileArray: any [] = [];
  Text1: AbstractControl;
  Text2: AbstractControl;
  currentImage: string;
  userData = {
    "caption" :"",
    // "file" : "",
  };


  userDetails: any;
  MatchDetails: any;
  statusId: any;
  MediaArray: any = [];
  FileTransferResponse: any = [];
  zufall: number;
  isWordings: boolean = false;
  MediaFiles = [];
  MediaCaptions = [];
  imgURL: any;
  progressInfos = [];
  selectedFiles: FileList;
  message : string;
  Links = [];
  images = [];
  imgURL2: any;
  urls = new Array<string>();
  Text = [];
  isCaptureImage: boolean = false;
  FolderClicked: boolean = false;
  CaptureClicked: boolean = false;
  filesPath: any;
  filesType: any;
  filesName: any;

  constructor(
    public common: CommonService,
    public formbuilder: FormBuilder,
    public storageservice: StorageService,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private mediaCapture: MediaCapture,
    private actionSheetCtrl: ActionSheetController,
    private http : HttpClient,
    private camera: Camera,
    private platform: Platform,
    private storage: Storage,
    private webview : WebView,
    private file: File,
  ) {

    this.Invitation = formbuilder.group({
      caption : ['', Validators.compose([
        Validators.minLength(0),
      ])],
      file : ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
   });

    this.LinkInputForm = formbuilder.group({
      caption : ['', Validators.compose([
        Validators.minLength(0),
      ])],
      link1 : ['', Validators.compose([
        // Validators.required,
        Validators.minLength(10),
        Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
      ])],
      link2 : ['', Validators.compose([
        // Validators.required,
        Validators.minLength(10),
        Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
      ])],
    });

    this.TextInputForm = formbuilder.group({
      caption : ['', Validators.compose([
        Validators.minLength(0),
      ])],
      text1 : ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])],
      text2 : ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])],
    });                                 
    this.caption = this.LinkInputForm.controls['caption'];
    this.link1 = this.LinkInputForm.controls['link1'];
    this.link2 = this.LinkInputForm.controls['link2'];

    this.caption = this.TextInputForm.controls['caption'];
    this.Text1 = this.TextInputForm.controls['text1'];
    this.Text2 = this.TextInputForm.controls['text2'];

    this.caption = this.Invitation.controls['caption'];
  }
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = [newEntry, ...this.images];
    });
  }

  takePicture() {
    const sourceType = this.camera.PictureSourceType.CAMERA;
    const options: CameraOptions = {
      quality: 100,
      // destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imagePath) => {
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
    }, (err) => {
      this.common.presentToast(err);
      console.log("Camera issue:" + err);
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

  ngOnInit() {

  }

  ionViewWillEnter(){
   this.storageservice.storage.get('userDetails').then ((val) => {
      this.userDetails = val;
    });
  }

  toShowLinkInputFiled() {
    this.linkArray.push({value: 'http://'});
    this.Add('link');
  }

  toShowTextArea() {
    this.wordArray.push({value: ''});
    this.Add('text');
  }
  toSubmitLinkField() {
    if (this.LinkInputForm.valid) {
      let params = {
        filetype : 'link',
        userid : this.userDetails.userid

      }
      this.common.postMethod('MatchUpload',params).then((res:any) => {
        this.statusId = res.details.uploaded_id;
      }, (err) => {
        console.log('Error:',err);
      });

    } else if (this.isLink==true && this.LinkInputForm.dirty) {
      this.common.presentToast('Please Input A Valid Link');
      this.LinkInputForm.reset();
    }
  }

  SendWordings() {
    this.isWordings = true;
    this.hideImageSpace = false;
    this.isLink = false;

    let params = {
      userid : this.userDetails.userid,
      word1 : '',
      word2 : ''
    }
    this.common.postMethod('',params).then((res:any) => {
    }, err => {
      console.log(err);
    });
  }

  CaptureImage() {
    this.isCaptureImage = true;
    const options: CaptureImageOptions = { limit: 2 };
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          this.MediaFiles[0] = data[0].name;
          this.MediaFiles[1] = data[1].name;
          for (let i=0; i<this.MediaFiles.length; i++) {
            this.myFiles.push(this.MediaFiles[i]);
          }
        },
        (err: CaptureError) => console.error(err)
      );
  }

  CaptureVideo() {
    const options: CaptureImageOptions = { limit: 2 };
    this.mediaCapture.captureVideo(options)
    .then(
      (data: MediaFile[]) => {
        this.uploadFile2(data[0], 'video');
      },
      (err: CaptureError) => console.error(err)
    );

  }

  CaptureAudio() {
    const options: CaptureImageOptions = { limit: 2 };
    this.mediaCapture.captureAudio(options)
    .then(
      (data: MediaFile[]) => {
        this.uploadFile2(data[0], 'audio');
      },
      (err: CaptureError) => console.error(err)
    );

  }

  PickLinks() {
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
          uri: uri
        })
        // this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
        //   let files = fileInfo as FileEntry;
        //   files.file(success => {
        //     this.filesType   = success.type;
        //     this.filesName  = success.name;
        //     this.fileArray.push({
        //       name: this.filesName,
        //       type: this.filesType,
        //       uri: uri
        //     })
        //     this.Add('file');
        //   });
        // },err => {
        //   console.log(err);
        //   throw err;
        // });
      },err => {
        console.log(err);
        throw err;
      });
    },err => {
      console.log(err);
      throw err;
    });
  }
  fileChangeEvent(e, type) {
    if (type==='folder') {
      this.FolderClicked = true;
      if (e.target.files === 0) {
        this.common.presentToast('You Have Selected No File !!!');
        return;
      }
      this.selectedFiles = e.target.files;
      for (let i=0; i<e.target.files.length; i++) {
        this.myFiles.push(e.target.files[i]);
        this.Add('file');
      }

      this.urls = [];
      let files = e.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          var error = reader.error
          reader.onload = (e:any) => {
            this.urls.push(e.target.result);
          }

          reader.readAsDataURL(file);
        }
      }

    } else if (type==='image') {
      this.FolderClicked = true;
      // if (e.target.files.length>2) {
      //   this.Invitation.reset();
      //   this.common.presentToast('Your are not allowed to choose more than two images');
      // } 

      if (e.target.files === 0) {
        this.common.presentToast('You Have Selected No File !!!');
        return;
      }

      // if (e.target.files.length===1) {
      //   this.Invitation.reset();
      //   this.common.showAlert('Try to choose maximum 2 media');
      // } 

      this.selectedFiles = e.target.files;
      for (let i=0; i<e.target.files.length; i++) {
        this.myFiles.push(e.target.files[i]);
        this.Add('file');
      }

      this.urls = [];
      let files = e.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          var error = reader.error
          reader.onload = (e:any) => {
            this.urls.push(e.target.result);
          }

          reader.readAsDataURL(file);
        }
      }

      } else if (type==='audio') {
        this.FolderClicked = false;
        if (this.MediaFiles.length===0) {
          this.MediaFiles[0] = e.target.files[0];
          this.common.showAlert('Try to capture maximum 2 audio');
        } else {
          this.MediaFiles[1] = e.target.files[0];
          for (let i=0; i<this.MediaFiles.length; i++) {
            this.myFiles.push(this.MediaFiles[i]);
          }
        }

      } else if (type==='video') {

        this.FolderClicked = false;
        if (this.MediaFiles.length===0) {
        this.MediaFiles[0] = e.target.files[0];
        this.common.showAlert('Try to capture maximum 2 video');

        } else {
          this.MediaFiles[1] = e.target.files[0];
            for (let i=0; i<this.MediaFiles.length; i++) {
              this.myFiles.push(this.MediaFiles[i]);
            }
          }

      }
    }

  submit() {
    if(this.anArray.length >= 2) {
      const formData = new FormData();
      for( let i=0;i<this.fileArray.length; i++) 
      {
        this.filePath.resolveNativePath(this.fileArray[i].uri).then(filePath => {
          this.filesPath = filePath;
          
          this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
            let files = fileInfo as FileEntry;
            files.file(success => {
              formData.append('filename[]', success);
            });
          },err => {
            console.log(err);
            throw err;
          });
        },err => {
          console.log(err);
          throw err;
        });
      }
      formData.append("caption", this.userData.caption);
      formData.append("userid", this.userDetails.userid);
      formData.append("sub_caption", JSON.stringify(this.anArray));
      formData.append("links", JSON.stringify(this.linkArray));
      formData.append("texts", JSON.stringify(this.wordArray));
      this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_personalmatch',formData 
      ).subscribe((res) => {
        if (res['message']==='Successfully uploaded') {
          this.Invitation.reset();
          this.common.presentToast('File Uploaded Successful');
          this.common.router.navigate(['tabs/tab6']);
          this.common.hideLoader();
        } else {
          this.common.hideLoader();
          this.common.presentToast('File Upload Failed !!!');
        }
      }, err => {
        this.common.hideLoader();
        console.log('err',err);
      });
    }else if(this.anArray.length < 2){
      this.common.showAlert("Maximum media more than 2");
    }
  }

  uploadFile2(file:any, type: string) {

    var arr = new Array (file[0]['name'],file[1]['name']);
    var str = arr.toString();

    let options: FileUploadOptions;

    options = {
      fileKey: "filename[]",
      fileName: str,
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      params: {
        caption: this.userData.caption,
        userid: this.userDetails.userid,
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
    const fileTransfer: FileTransferObject = this.transfer.create();
    const fileUplaodUrl = BaseConfig.baseUrl + '/iMatch/api/v1/create_personalmatch';
    fileTransfer.onProgress((e) => 
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
    });

    fileTransfer.upload(filePath, fileUplaodUrl, options)
      .then((data) => {
        this.FileTransferResponse = data;
      }, (err) => {
        console.log('File Transfer Error:', err);
    });
  }

  ToLaunchAMatch(e) {
    if (e.type=='click' && this.FileTransferResponse.responseCode!=undefined) {
      if (this.FileTransferResponse.response===true) {
        this.common.presentLoading();
        this.common.showLoader();
        setTimeout(() => {
          this.common.presentToast('Your Personal Match is Uploaded Successfully');
          this.common.router.navigate(['tabs/tab6']);
        },3000);
        this.common.hideLoader();
      } else {
        this.common.presentLoading();
        this.common.presentToast('Your Personal Match Upload Failed');
      }
    } else {
      this.common.showLoader();
      this.common.presentToast('Submit with valid details... and wait for a while to gets uploaded to our server ...');
      this.common.hideLoader();
    }
  }

}
