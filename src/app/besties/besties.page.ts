import { CommonService } from "./../services/common.service";
import { StorageService } from "./../services/storage.service";
import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import * as BaseConfig from '../services/config';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
const { Camera, Filesystem } = Plugins;
import { ActionSheetController } from "@ionic/angular";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  FilesystemDirectory,
  CameraPhoto,
  Capacitor,
  PhotosAlbumType,
  FilesystemEncoding,
} from "@capacitor/core";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,
  CaptureVideoOptions,
  CaptureAudioOptions,
} from "@ionic-native/media-capture/ngx";
// import { copyFileSync } from 'fs';
@Component({
  selector: "app-besties",
  templateUrl: "./besties.page.html",
  styleUrls: ["./besties.page.scss"],
})
export class BestiesPage implements OnInit {
  userDetails: any = [];
  ourStory: any = [];
  ourSlogan: any = [];
  ourLetter: any = [];
  bestieDetails: any = [];
  MediaFiles: any = [];
  isDisable: boolean = true;
  CountDetails: any = [];
  CommentStatus: any = [];

  constructor(
    public storageservice: StorageService,
    public popoverController: PopoverController,
    public actionSheetController: ActionSheetController,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private mediaCapture: MediaCapture,
    public formbuilder: FormBuilder,
    public common: CommonService
  ) {
    this.common.route.queryParams.subscribe((resp) => {
      this.bestieDetails = resp;
    });

    // this.showTextContent();
  }

  ngOnInit() {
    // this.storageservice.setStorage('isDisable',1);
  }

  ionViewWillEnter() {
    this.GetStorageDetails();
    this.GetEnableDisableCommStatus();
  }

  GetStorageDetails() {
    this.storageservice.storage.get("userDetails").then((val) => {
      this.userDetails = val;
      this.GetPageContent();
    });
  }

  GetPageContent() {
    let params = {
      userid: this.userDetails.userid,
      senderid: this.bestieDetails.userid
    };
    this.common.postMethod("GetStatus", params).then(
      (res: any) => {
        if (res.message === "success") {
          this.CountDetails = res;
          this.ourStory = res.details.story;
          this.ourSlogan = res.details.slogan;
          this.ourLetter = res.details.letter;
          this.MediaFiles = res.link;
          return;
        }
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  GetEnableDisableCommStatus() {
    this.storageservice.storage.get("isDisable").then((val) => {
      this.CommentStatus = val;

      if (this.CommentStatus == 0) {
        this.isDisable = false;
        return;
      }

      if (this.CommentStatus == 1) {
        this.isDisable = true;
        return;
      }
    });
  }
  showTextContent() {
    this.storageservice.storage.get("userDetails").then((val) => {
      this.userDetails = val;

      if (this.userDetails.userid != "") {
        this.common.presentToast(
          "⏳ Please wait . we are fetching your updates"
        );
        let params = {
          userid: this.userDetails.userid,
          senderid: this.bestieDetails.userid,
        };

        this.common.postMethod("GetStatus", params).then((res: any) => {
          if (res.message == "success") {
            this.CountDetails = res;
            this.ourStory = res.details.story;
            this.ourSlogan = res.details.slogan;
            this.ourLetter = res.details.letter;
            this.MediaFiles = res.link;
          } else if ((res.message = "failed")) {
            this.ourStory = res.details;
            this.ourSlogan = res.details;
            this.ourLetter = res.details;
          }
        });
      } else {
        this.common.presentToast("❗️ Something went wrong ...");
      }
    });
  }

  ToLikeBesties() {
    let params = {
      userid: this.userDetails.userid,
      bestieid: this.bestieDetails.userid,
    };
    this.common.postMethod("bestielike", params).then(
      (res: any) => {
        if (res.status == true) {
          this.GetPageContent();
        }
      },
      (err) => {
        console.log("err:", err);
      }
    );
  }

  ToDisableComment(e, status) {
    if (status === "disable") {
      this.isDisable = false;
      this.storageservice.setStorage("isDisable", 0);
    } else {
      this.isDisable = true;
    }
  }

  GoToBestiesComment() {
    this.common.navCtrl.navigateForward(["besties-comment"], {
      queryParams: this.bestieDetails,
    });
  }

  addMoreBesties() {
    this.common.navCtrl.navigateForward(["/besties-search"], {
      queryParams: this.bestieDetails,
    });
  }

  gotoBestiesCount() {
    this.common.navCtrl.navigateForward(["/besties-before"]);
  }

  gotoOurStory() {
    this.common.navCtrl.navigateForward(["/our-story"], {
      queryParams: this.bestieDetails,
    });
  }

  gotoOurSlogan() {
    this.common.navCtrl.navigateForward(["/our-slogan"], {
      queryParams: this.bestieDetails,
    });
  }

  gotoLetter() {
    this.common.navCtrl.navigateForward(["/letter"], {
      queryParams: this.bestieDetails,
    });
  }

  gotoProfile() {
    this.common.router.navigate(["/tabs/tab7"]);
  }

  async PresentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: "my-custom-class",
      header: " File format must be MP4, PNG, JPG , JPEG",
      buttons: [
        {
          text: "Other Files",
          icon: "folder-open",
          handler: () => {
            this.pickDocuments();
          },
        },

        {
          text: "Capture Image",
          icon: "camera",
          handler: () => {
            this.captureImage();
            // this.isImage = true;
          },
        },

        {
          text: "Capture Video",
          icon: "videocam",
          handler: () => {
            this.captureVideo();
            // this.isVideo = true;
          },
        },

        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
          },
        },
      ],
    });
    await actionSheet.present();
  }

  captureImage() {
    // this.isMedia = true;
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options).then(
      (data: MediaFile[]) => {
        // this.isImage = true;
        this.uploadFile2(data[0], "image");
      },
      (err: CaptureError) => console.error(err)
    );
  }

  captureVideo() {
    // this.isMedia = true;
    const options: CaptureVideoOptions = { limit: 1, duration: 2, quality: 80 };
    this.mediaCapture.captureVideo(options).then(
      (data: MediaFile[]) => {
        // this.isVideo = true;
        this.uploadFile2(data[0], "video");
      },
      (err: CaptureError) => console.error(err)
    );
  }

  async pickDocuments() {
    // this.isMedia = true;
    let file: any;

    this.fileChooser
      .open()
      .then((uri) => {
        this.filePath
          .resolveNativePath(uri)
          .then((filePath) => {
            let fileNameFromPath = filePath.substring(
              filePath.lastIndexOf("/") + 1
            );
            let currentName = uri.substring(
              uri.lastIndexOf("/") + 1,
              uri.lastIndexOf("?")
            );
            file = {
              name: fileNameFromPath,
              fullPath: filePath,
            };

            this.uploadFile2(file, "file");
          })
          .catch((err) => console.log(err));
      })
      .catch((e) => console.log(e));
  }

  uploadFile2(file: any, type: string) {
    // this.isDummyImage = false;

    let options: FileUploadOptions;

    options = {
      fileKey: "matchfile",
      fileName: file.name,
      httpMethod: "POST",
      mimeType: "multipart/form-data",
      chunkedMode: false,
      params: {
        matchid: "",
        userid: this.userDetails.userid,
        upload_id: 0,
      },
      headers: {
        Connection: "close",
      },
    };
    let filePath: any;
    if (type !== "audio") {
      filePath = encodeURI(file.fullPath);
    } else {
      filePath = file.fullPath;
    }

    this.common.showLoader();
    const fileTransfer: FileTransferObject = this.transfer.create();

    const fileUplaodUrl =
      BaseConfig.baseUrl + "iMatch/api/v1/MatchFileUpload";

    fileTransfer.onProgress((e) => {
      let prg = e.lengthComputable
        ? Math.round((e.loaded / e.total) * 100)
        : -1;
      this.common.presentToast("Uploaded " + prg + "% of file");
    });

    fileTransfer.upload(filePath, fileUplaodUrl, options).then(
      (data) => {
        let res = JSON.parse(data.response);

        if (res.status == true) {
          this.ionViewWillEnter();
          // this.FileTransferResponse = res.upload_details;
        } else {
          console.log("File Transfer Error");
        }
        this.common.hideLoader();
      },
      (err) => {
        console.log("File Transfer Error:", err);
      }
    );
  }

  async toUploadImage() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    const blobData = this.b64toBlob(
      image.base64String,
      `image/${image.format}`
    );

    this.uploadImage(blobData, image.format).subscribe(
      (newImage) => {
        this.showTextContent();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  b64toBlob(b64Data, contentType = "", sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  uploadImage(blobData, ext) {
    const formData = new FormData();
    formData.append("userfile", blobData, `myimage.${ext}`);
    formData.append("userid", this.userDetails.userid);
    formData.append("send_to", this.bestieDetails.userid);

    this.common.presentLoading();
    return this.common.http.post(
      `${BaseConfig.baseUrl + "iMatch/api/v1/Upload_File"}`,
      formData
    );
  }
}
