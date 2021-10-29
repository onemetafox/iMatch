(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "82od":
/*!************************************!*\
  !*** ./src/app/services/config.ts ***!
  \************************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
let baseUrl = "http://192.168.107.183/";


/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/config */ "82od");










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let ProfilePage = class ProfilePage {
    constructor(common, formbuilder, storageservice, actionSheetController) {
        this.common = common;
        this.formbuilder = formbuilder;
        this.storageservice = storageservice;
        this.actionSheetController = actionSheetController;
        this.FormSubmit = false;
        this.isLoading = false;
        this.userDetails = [];
        this.userData = {
            "name": "",
            "bio": "",
            "phone": "",
            "email": "",
            "gender": "",
        };
        this.formgroup = formbuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(0)],
            bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(0)],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(0)],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(0)],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(0)],
        });
        this.name = this.formgroup.controls['name'];
        this.bio = this.formgroup.controls['bio'];
        this.phone = this.formgroup.controls['phone'];
        this.email = this.formgroup.controls['email'];
        this.gender = this.formgroup.controls['gender'];
        // this.university = this.formgroup.controls['university'];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ngOnInit() {
        this.common.presentLoading();
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
            if (this.userDetails) {
                this.getProfileImg();
            }
            else {
                this.common.presentToast(' 🛑  Something went wrong !!!');
            }
        });
    }
    onSubmit() {
        this.FormSubmit = true;
        console.log('FormSubmit:', this.FormSubmit);
        console.log('formgroup:', this.formgroup.value);
        if (this.formgroup.valid) {
            this.common.presentLoading();
            let params = {
                name: this.userDetails.name,
                bio: this.userData.bio,
                phone: this.userData.phone,
                email: this.userDetails.email,
                gender: this.userData.gender,
                // university: this.userData.university
                university: ''
            };
            console.log('params:', params);
            this.common.postMethod('profile', this.formgroup.value).then((res) => {
                console.log('res:', res);
                if (res.message == 'success') {
                    this.common.presentToast('Profile details updated successful');
                    this.responseData = res.details[0];
                    console.log('response:', res.details[0]);
                    this.storageservice.setStorage('userDetails', res.details[0]);
                    console.log('Profile updated details successfully stored');
                }
                else {
                    this.common.presentToast('Profile details update failed !');
                }
            });
        }
        else {
            this.common.presentToast(' 🛑  Something went wrong !!!');
        }
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Change profile photo',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Choose from gallery',
                        icon: 'images',
                        handler: () => {
                            this.pickImageGallery();
                            console.log('Gallery clicked');
                        }
                    },
                    {
                        text: 'Capture Image',
                        icon: 'camera',
                        handler: () => {
                            this.pickImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera);
                            console.log('Camera clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    pickImage(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 50,
                height: 130,
                width: 130,
                source,
                allowEditing: true,
                saveToGallery: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Base64,
            });
            console.log('image:', image);
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            this.uploadImage(blobData, image.format).subscribe((newImage) => {
                console.log('newImage:', newImage);
                this.common.presentLoading();
                this.getProfileImg();
            }, err => {
                console.log(err);
                this.common.presentLoading();
                this.common.presentToast('Profile Image Uploading Failed !!!');
            });
        });
    }
    pickImageGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 50,
                height: 130,
                width: 130,
                saveToGallery: true,
                correctOrientation: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Photos,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Base64,
            });
            console.log('image:', image);
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            this.uploadImage(blobData, image.format).subscribe((newImage) => {
                console.log('newImage:', newImage);
                this.common.presentLoading();
                this.getProfileImg();
            }, err => {
                console.log(err);
                this.common.presentLoading();
                this.common.presentToast('Profile Image Uploading Failed !!!');
            });
        });
    }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
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
        formData.append('profile_pic', blobData, `myimage.${ext}`);
        formData.append('userid', this.userDetails.userid);
        this.common.presentLoading();
        return this.common.http.post(`${_services_config__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + 'iMatch/api/v1/profile_pic'}`, formData);
    }
    getProfileImg() {
        this.isLoading = true;
        console.log('getProfileImg');
        let params = {
            userid: this.userDetails.userid
        };
        console.log('params:', params);
        this.common.profilepicget('get_profile_pic/' + params.userid).subscribe((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.userDetails = res.details[0];
                this.common.presentToast('Profile image loaded successfully...');
                this.storageservice.setStorage('userDetails', res.details[0]);
                this.isLoading = false;
                console.log('userDetails:', this.userDetails);
            }
            else {
                this.common.presentToast(' 🛑 Something went wrong !!!');
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 20px;\">EDIT PROFILE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"profile-content\"  *ngIf=\"userDetails\">\r\n    <div style=\"padding: 25px; text-align: -webkit-center;\">\r\n    <ion-spinner style=\"position: absolute; top: 55px; left: 46%;\" *ngIf=\"isLoading==true\"></ion-spinner>\r\n      <div style=\"border: 1px solid #000000bf; height: 95px; width: 95px; border-radius: 50%; background-color: white;\">\r\n        <img *ngIf=\"userDetails\" [src]=userDetails.profile_pic onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\" alt=\"\" class=\"profile-img , animate__animated animate__fadeIn animate__delay-1s\" (click)=\"presentActionSheet()\">\r\n      </div>\r\n        <p class=\"profile-img-text\" (click)=\"presentActionSheet()\">Cancel the profile image</p>\r\n    </div>\r\n    \r\n    <div class=\"text-field-div\">\r\n      <form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <ion-label position=\"fixed\" class=\"input-field-label\">User Name</ion-label>\r\n\r\n      <ion-input class=\"input-field\" formControlName=\"name\" type=\"text\" [readonly]=\"true\" [(ngModel)]=\"userDetails.name\" autocapitalize=\"true\"></ion-input>\r\n\r\n      <ion-label position=\"fixed\" class=\"input-field-label\">Bio</ion-label>\r\n      <ion-textarea class=\"input-field\" formControlName=\"bio\" [(ngModel)]=\"userData.bio\" value=\"{{userDetails.bio}}\" autocapitalize=\"true\" autoGrow=\"true\"></ion-textarea>\r\n\r\n      <ion-label position=\"fixed\" class=\"input-field-label\">Phone Number</ion-label>\r\n      <ion-input class=\"input-field\" formControlName=\"phone\" [(ngModel)]=\"userData.phone\" type=\"number\" value=\"{{userDetails.phone_number}}\"></ion-input>\r\n\r\n      <ion-label position=\"fixed\" class=\"input-field-label\">Email</ion-label>\r\n      <ion-input class=\"input-field\" formControlName=\"email\" [readonly]=\"true\" [(ngModel)]=\"userDetails.email\" autocapitalize=\"true\"></ion-input>\r\n\r\n      <ion-item class=\"input-field\" style=\"--padding-start: 7px;\" lines=\"none\">\r\n        <ion-label position=\"fixed\" style=\"color: grey;\" slot=\"start\">Gender</ion-label>\r\n      <ion-select formControlName=\"gender\" [(ngModel)]=\"userData.gender\" style=\"--padding-start: 0px;\" value=\"{{userDetails.gender}}\">\r\n        <ion-label>Gender</ion-label>\r\n        <ion-select-option>Male</ion-select-option>\r\n        <ion-select-option>Female</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n      <!-- <ion-label position=\"University Name\" class=\"input-field-label\">University Name</ion-label>\r\n      <ion-input class=\"input-field\" formControlName=\"university\" [(ngModel)]=\"userData.university\" type=\"text\" value=\"{{userDetails.university_name}}\" autocapitalize=\"true\"></ion-input> -->\r\n\r\n      <div style=\"text-align: center;\">\r\n        <ion-button style=\"text-transform:none;\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!formgroup.dirty\">Submit</ion-button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-content {\n  text-align: center;\n  background-color: #707072;\n}\n\n.profile-img {\n  border: 1px solid #000000bf;\n  height: 95px;\n  width: 100px;\n  border-radius: 50%;\n  padding: 0px;\n  background-color: white;\n}\n\n.profile-img-text {\n  color: white;\n  margin: 0px;\n}\n\n.text-field-div {\n  padding: 25px;\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  text-align: left;\n}\n\n.input-field-label {\n  color: grey;\n  margin-left: 5px;\n}\n\n.input-field {\n  border: 1px solid #9E9E9E;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\nion-checkbox {\n  margin-left: 25px;\n  position: relative;\n  top: 5px;\n}\n\n.native-input:disabled {\n  opacity: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBT0o7O0FBTEE7RUFDSSxxQkFBQTtBQVFKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI7XHJcbn1cclxuLnByb2ZpbGUtaW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMGJmO1xyXG4gICAgaGVpZ2h0OiA5NXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnByb2ZpbGUtaW1nLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udGV4dC1maWVsZC1kaXZ7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmlucHV0LWZpZWxkLWxhYmVse1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pbnB1dC1maWVsZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5RTlFOUU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5pb24tY2hlY2tib3h7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcbi5uYXRpdmUtaW5wdXQ6ZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OjAgIWltcG9ydGFudDtcclxuIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map