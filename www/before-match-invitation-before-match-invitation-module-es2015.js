(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["before-match-invitation-before-match-invitation-module"],{

/***/ "/Cuf":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/before-match-invitation/before-match-invitation.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 25px;\">INVITATION</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"box\">\r\n    <div  class=\"inner-box\">\r\n      <div style=\"display: flex; justify-content: space-between\">\r\n          <ion-img src=\"../../assets/icon/help-invitation-terms/bar.png\" (click)=\"presentActionSheet()\"></ion-img>\r\n          <div style=\"display: flex; justify-content:space-between;\">\r\n            <div *ngFor=\"let opponent of opponentDetails\" style=\"display:flex; justify-content: center; width: 80px;margin-top: 12px;\">\r\n              <div style=\"padding: 5px;text-align: center;\">\r\n                <img *ngIf=\"opponent\" [src]=\"opponent.profile_pic\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/Quser.jpg';\" style=\"width: 80px; border-radius: 50%;\">\r\n                <span *ngIf=\"opponent\">{{opponent.name}}</span>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div *ngFor=\"let att of this.anArray; let idx = index\">\r\n        <div *ngIf=\"att.type=='file'\">\r\n            <p style=\"font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;\"> {{this.fileArray[att.position].name}} </p>\r\n        </div>\r\n        <div *ngIf=\"att.type=='text'\">\r\n          <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"wordArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n        </div>\r\n        <div *ngIf=\"att.type=='link'\">\r\n          <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"linkArray[att.position].value\" class=\"input-field\"></ion-input>  \r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"invitation\">\r\n\r\n      <div style=\"font-size: 13px; margin-left: 5%; margin-top: 10%; margin-right: 5%; color: #fcfcfc;\">\r\n        <ion-textarea formControlName=\"description\" [(ngModel)]=\"userData.description\" placeholder=\"Enter Match Description\" class=\"input-textarea\" autocapitalize=\"true\"></ion-textarea>\r\n      </div>\r\n\r\n      <div style=\"background-color: #444446; margin-top: 5%; padding: 20px 10px 10px 10px; border-right: 1px solid #e0e0e0; text-align: center;\">\r\n        <div>\r\n\r\n          <div style=\"display: flex;\">\r\n\r\n            <div style=\"font-size: 16px; color: white; font-weight: 900; margin-bottom: 25px;\">Duration of Contest</div>\r\n\r\n            <div>\r\n              <img src=\"../../assets/icon/i.png\" alt=\"\" style=\"height: 30px; width: 33px; position: relative; left: 7px;\">\r\n            </div>\r\n\r\n            <div>\r\n              <ion-select placeholder=\"Time\" formControlName=\"duration\" [(ngModel)]=\"userData.duration\">\r\n                <ion-select-option value=\"1 hour\">1 Hour</ion-select-option>\r\n                <ion-select-option value=\"2 hour\">2 Hours</ion-select-option>\r\n                <ion-select-option value=\"3 hour\">3 Hours</ion-select-option>\r\n                <ion-select-option value=\"4 hour\">4 Hours</ion-select-option>\r\n                <ion-select-option value=\"5 hour\">5 Hours</ion-select-option>\r\n                <ion-select-option value=\"6 hour\">6 Hours</ion-select-option>\r\n                <ion-select-option value=\"7 hour\">7 Hours</ion-select-option>\r\n                <ion-select-option value=\"8 hour\">8 Hours</ion-select-option>\r\n                <ion-select-option value=\"9 hour\">9 Hours</ion-select-option>\r\n                <ion-select-option value=\"10 hour\">10 Hours</ion-select-option>\r\n                <ion-select-option value=\"11 hour\">11 Hours</ion-select-option>\r\n                <ion-select-option value=\"12 hour\">12 Hours</ion-select-option>\r\n                <ion-select-option value=\"13 hour\">13 Hours</ion-select-option>\r\n                <ion-select-option value=\"14 hour\">14 Hours</ion-select-option>\r\n                <ion-select-option value=\"15 hour\">15 Hours</ion-select-option>\r\n                <ion-select-option value=\"16 hour\">16 Hours</ion-select-option>\r\n                <ion-select-option value=\"17 hour\">17 Hours</ion-select-option>\r\n                <ion-select-option value=\"18 hour\">18 Hours</ion-select-option>\r\n                <ion-select-option value=\"19 hour\">19 Hours</ion-select-option>\r\n                <ion-select-option value=\"20 hour\">20 Hours</ion-select-option>\r\n                <ion-select-option value=\"21 hour\">21 Hours</ion-select-option>\r\n                <ion-select-option value=\"22 hour\">22 Hours</ion-select-option>\r\n                <ion-select-option value=\"23 hour\">23 Hours</ion-select-option>\r\n                <ion-select-option value=\"1 day\">1 Day</ion-select-option>\r\n                <ion-select-option value=\"2 day\">2 Days</ion-select-option>\r\n                <ion-select-option value=\"3 day\">3 Days</ion-select-option>\r\n                <ion-select-option value=\"4 day\">4 Days</ion-select-option>\r\n                <ion-select-option value=\"5 day\">5 Days</ion-select-option>\r\n                <ion-select-option value=\"6 day\">6 Days</ion-select-option>\r\n                <ion-select-option value=\"7 day\">7 Days</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"hideImageSpace==true\">\r\n            \r\n            <img *ngIf=\"isDummyImage==true\" style=\"height: 165px; width: 155px;\" src=\"../../assets/icon/bg2new.png\" alt=\"\" (click)=\"presentActionSheet()\">\r\n            <img *ngIf=\"isImage==true\" type='image/jpeg' style=\"height: 165px; width: 155px;\" [src]=\"FileTransferResponse.filename\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\">\r\n            <video *ngIf=\"isVideo==true\" style=\"height: 165px; width: 155px;\" [src]=\"FileTransferResponse.filename\" controls controlsList=\"nodownload\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\">\r\n            </video>\r\n            <audio *ngIf=\"isAudio==true\" style=\"height: 165px; width: 155px;\" [src]=\"FileTransferResponse.filename\" controls controlsList=\"nodownload\" onerror=\"this.onerror=null;this.src='../../assets/icon/loader.gif';\">\r\n            </audio>\r\n          </div>\r\n          <div *ngIf=\"isLink==true\">\r\n            <form [formGroup]=\"LinkInputForm\">\r\n            <ion-textarea formControlName=\"link\" [(ngModel)]=\"userLink.link\" placeholder=\"Enter Your Link\" class=\"input-field\" auto-grow=\"true\" type=\"url\"></ion-textarea>\r\n            </form>\r\n          </div>\r\n          <div *ngIf=\"isWording==true\">\r\n            <form [formGroup]=\"WordingInputForm\">\r\n            <ion-textarea formControlName=\"wording\" [(ngModel)]=\"userWording.wording\" placeholder=\"Enter Your Wording\" class=\"input-field\" auto-grow=\"true\" type=\"text\"></ion-textarea>\r\n            </form>\r\n          </div>\r\n          <div>\r\n            <ion-input formControlName=\"caption\" [(ngModel)]=\"userData.caption\" placeholder=\"Enter Caption\" class=\"input-field\" autocapitalize=\"true\"></ion-input>\r\n          </div>\r\n        </div>\r\n        <ion-button type=\"submit\" color=\"warning\" style=\"font-family: OpenSansBold;\" type=\"submit\" (click)=\"toCallForAMatch()\">CALL FOR A MATCH</ion-button>\r\n      </div>\r\n  </form>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "CwYS":
/*!*************************************************************************!*\
  !*** ./src/app/before-match-invitation/before-match-invitation.page.ts ***!
  \*************************************************************************/
/*! exports provided: BeforeMatchInvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeMatchInvitationPage", function() { return BeforeMatchInvitationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_before_match_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./before-match-invitation.page.html */ "/Cuf");
/* harmony import */ var _before_match_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./before-match-invitation.page.scss */ "fDrl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "4zgz");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/config */ "82od");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "Pn9U");








// import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';






// const { Camera, Filesystem } = Plugins;

let BeforeMatchInvitationPage = class BeforeMatchInvitationPage {
    constructor(common, formbuilder, storageservice, actionSheetController, androidPermissions, fileChooser, transfer, filePath, mediaCapture, camera, platform) {
        this.common = common;
        this.formbuilder = formbuilder;
        this.storageservice = storageservice;
        this.actionSheetController = actionSheetController;
        this.androidPermissions = androidPermissions;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.mediaCapture = mediaCapture;
        this.camera = camera;
        this.platform = platform;
        this.FormSubmit = false;
        this.showUploadSection = false;
        this.isLink = false;
        this.isWording = false;
        this.hideImageSpace = true;
        this.userData = {
            "description": "",
            "duration": "",
            "caption": ""
        };
        this.userWording = {
            "wording": ""
        };
        this.userLink = {
            "link": ""
        };
        this.opponentDetails = [];
        this.anArray = [];
        this.wordArray = [];
        this.linkArray = [];
        this.userDetails = [];
        this.MatchDetails = [];
        this.ImageDetails = [];
        this.statusId = [];
        this.FileTransferResponse = [];
        this.isMedia = false;
        this.isVideo = false;
        this.isAudio = false;
        this.isImage = false;
        this.isDummyImage = true;
        this.fileArray = [];
        this.invitation = formbuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2),
                ])],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
                ])],
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2),
                ])],
        });
        this.LinkInputForm = formbuilder.group({
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(9),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                ])],
        });
        this.WordingInputForm = formbuilder.group({
            wording: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
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
        if (this.common.platform.is("cordova" || false)) {
            this.common.platform.ready().then(() => {
                this.filePermission();
            });
        }
    }
    ionViewWillEnter() {
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    filePermission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE));
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        });
    }
    toCallForAMatch() {
        let params = {
            texts: JSON.stringify(this.wordArray),
            links: JSON.stringify(this.linkArray),
            sub_captions: JSON.stringify(this.anArray),
            rival_id: this.userDetails.userid,
            opponent_id: JSON.stringify(this.opponentDetails),
            description: this.userData.description,
            time_duration: this.userData.duration,
            caption: this.userData.caption,
            category: 'Personalized',
        };
        this.common.postMethod('CreateOpenMatch', params).then((res) => {
            var matchid = res['matchid'];
            this.fileArray.forEach(item => {
                const fileTransfer = this.transfer.create();
                fileTransfer.onProgress((e) => {
                    let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
                    this.common.presentToast('Uploaded ' + prg + '% of file');
                });
                let options = {
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
                };
                fileTransfer.upload(item.filePath, _services_config__WEBPACK_IMPORTED_MODULE_13__["baseUrl"] + 'iMatch/api/v1/MatchFileUpload', options)
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
            console.log('Error:', err);
        });
    }
    ForLinkWordingSubmit() {
        let params = {
            rival_id: this.userDetails.userid,
            opponent_id: this.opponentDetails.userid,
            description: this.userData.description,
            time_duration: this.userData.duration,
            caption: this.userData.caption,
            category: 'Personalized',
            uploaded_id: this.statusId,
        };
        this.common.showLoader();
        this.common.postMethod('MatchInvitation', params).then((res) => {
            if (res.status == true) {
                this.invitation.reset();
                this.common.presentToast(' You have successfully sent a match invitation to ' + this.opponentDetails.name);
                this.common.router.navigate(['/tabs/tab3']);
            }
            else {
                this.common.presentToast(' Match Invitation Sending Failed ! ');
            }
            this.MatchDetails = res;
            this.common.hideLoader();
        }, (err) => {
            console.log('Error:', err);
        });
    }
    Add(type) {
        if (this.anArray.length >= 4) {
            this.common.showAlert('Maximum is 4 items');
            return;
        }
        if (type == 'link') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'link') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'file') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'file') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'text') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'text') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'my-custom-class',
                header: ' File format must be MP4, AAC, Mp3, PNG, JPG ',
                buttons: [
                    {
                        text: 'Share Wording',
                        icon: 'text',
                        handler: () => {
                            this.wordArray.push({ value: '' });
                            this.Add('text');
                        }
                    },
                    {
                        text: 'Share Links',
                        icon: 'link',
                        handler: () => {
                            this.linkArray.push({ value: 'http://' });
                            this.Add('link');
                        }
                    },
                    {
                        text: 'Other Files',
                        icon: 'folder-open',
                        handler: () => {
                            this.PickDocuments();
                        }
                    },
                    {
                        text: 'Capture Image',
                        icon: 'camera',
                        handler: () => {
                            this.CaptureImage();
                        }
                    },
                    {
                        text: 'Capture Video',
                        icon: 'videocam',
                        handler: () => {
                            this.CaptureVideo();
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
            yield actionSheet.present();
        });
    }
    CaptureImage() {
        const options = { limit: 1 };
        this.mediaCapture.captureImage(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'jpg'
            });
        }, (err) => console.error(err));
    }
    CaptureVideo() {
        const options = { limit: 1, duration: 120, quality: 80 };
        this.mediaCapture.captureVideo(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp4'
            });
        }, (err) => console.error(err));
    }
    CaptureAudio() {
        const options = { limit: 1 };
        this.mediaCapture.captureAudio(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp3'
            });
        }, (err) => console.error(err));
    }
    pickWording() {
        this.isLink = false;
        this.isWording = true;
        this.hideImageSpace = false;
    }
    pickLinks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLink = true;
            this.hideImageSpace = false;
        });
    }
    PickDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fileChooser.open().then(uri => {
                this.filePath.resolveNativePath(uri).then(filePath => {
                    this.filesPath = filePath;
                    this.filesName = this.filesPath.substring(this.filesPath.lastIndexOf("/") + 1);
                    this.filesType = this.filesName.substring(this.filesName.lastIndexOf(".") + 1);
                    this.Add('file');
                    this.fileArray.push({
                        name: this.filesName,
                        type: this.filesType,
                        uri: uri,
                        filePath: filePath
                    });
                }, err => {
                    console.log(err);
                    throw err;
                });
            }, err => {
                console.log(err);
                throw err;
            });
        });
    }
};
BeforeMatchInvitationPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
BeforeMatchInvitationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-before-match-invitation',
        template: _raw_loader_before_match_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_before_match_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BeforeMatchInvitationPage);



/***/ }),

/***/ "SBZo":
/*!***************************************************************************!*\
  !*** ./src/app/before-match-invitation/before-match-invitation.module.ts ***!
  \***************************************************************************/
/*! exports provided: BeforeMatchInvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeMatchInvitationPageModule", function() { return BeforeMatchInvitationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _before_match_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./before-match-invitation-routing.module */ "eu/e");
/* harmony import */ var _before_match_invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./before-match-invitation.page */ "CwYS");







let BeforeMatchInvitationPageModule = class BeforeMatchInvitationPageModule {
};
BeforeMatchInvitationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _before_match_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeforeMatchInvitationPageRoutingModule"]
        ],
        declarations: [_before_match_invitation_page__WEBPACK_IMPORTED_MODULE_6__["BeforeMatchInvitationPage"]]
    })
], BeforeMatchInvitationPageModule);



/***/ }),

/***/ "eu/e":
/*!***********************************************************************************!*\
  !*** ./src/app/before-match-invitation/before-match-invitation-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BeforeMatchInvitationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeMatchInvitationPageRoutingModule", function() { return BeforeMatchInvitationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _before_match_invitation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./before-match-invitation.page */ "CwYS");




const routes = [
    {
        path: '',
        component: _before_match_invitation_page__WEBPACK_IMPORTED_MODULE_3__["BeforeMatchInvitationPage"]
    }
];
let BeforeMatchInvitationPageRoutingModule = class BeforeMatchInvitationPageRoutingModule {
};
BeforeMatchInvitationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeforeMatchInvitationPageRoutingModule);



/***/ }),

/***/ "fDrl":
/*!***************************************************************************!*\
  !*** ./src/app/before-match-invitation/before-match-invitation.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.box {\n  width: 88%;\n  border: 1px solid transparent;\n  background-color: #707072;\n  margin-left: 6%;\n  margin-top: 6%;\n  border-radius: 5px;\n}\n\n.inner-box {\n  border: 1px solid #e0e0e0;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  margin: 5%;\n  border-radius: 5px;\n}\n\n.inner-box div {\n  position: relative;\n}\n\n.inner-box div ion-img {\n  width: 45%;\n}\n\n.inner-box div ion-thumbnail {\n  border: 1px solid #fcbb3b;\n  position: absolute;\n  right: 4%;\n  top: 12%;\n  height: 65px;\n  width: 65px;\n}\n\n.inner-box div span {\n  font-size: 13px;\n  text-align: center;\n  color: #fcbb3b;\n  font-family: OpenSansRegular;\n}\n\n.inner-box div .input-textarea {\n  border: 0.5px solid;\n  color: white;\n}\n\n.inner-box div .input-field {\n  border: 1px solid #b6b6b7;\n  background: #cdcdce30;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.inner-box div ion-select::part(icon) {\n  display: none !important;\n}\n\n.inner-box div ion-select {\n  border: 0.5px solid #ffffff8a;\n  background: #707072;\n  padding: 2px 10px 2px 10px;\n  margin-left: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlZm9yZS1tYXRjaC1pbnZpdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhEQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBRUEsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFJSTtFQUNJLFVBQUE7QUFGUjs7QUFJSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlI7O0FBSUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFGUjs7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUhSOztBQU1JO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFPSTtFQUNJLHdCQUFBO0FBTFI7O0FBUUk7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFOUiIsImZpbGUiOiJiZWZvcmUtbWF0Y2gtaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWxwLWludml0YXRpb24tdGVybXMvaW52aXRhdGlvbi1iZy5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJveHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICAvLyBoZWlnaHQ6IDI0M3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbm5lci1ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuLmlubmVyLWJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpb24taW1ne1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2JiM2I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmY2JiM2I7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zUmVndWxhcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmI3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjZGNkY2UzMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmZmZmZmOGE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTBweCAycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=before-match-invitation-before-match-invitation-module-es2015.js.map