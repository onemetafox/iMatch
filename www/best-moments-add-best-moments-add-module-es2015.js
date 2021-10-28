(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["best-moments-add-best-moments-add-module"],{

/***/ "/1Xh":
/*!*********************************************************************!*\
  !*** ./src/app/best-moments-add/best-moments-add-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BestMomentsAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsAddPageRoutingModule", function() { return BestMomentsAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _best_moments_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./best-moments-add.page */ "9Aru");




const routes = [
    {
        path: '',
        component: _best_moments_add_page__WEBPACK_IMPORTED_MODULE_3__["BestMomentsAddPage"]
    }
];
let BestMomentsAddPageRoutingModule = class BestMomentsAddPageRoutingModule {
};
BestMomentsAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BestMomentsAddPageRoutingModule);



/***/ }),

/***/ "/BaG":
/*!*************************************************************!*\
  !*** ./src/app/best-moments-add/best-moments-add.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3QtbW9tZW50cy1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOERBQUE7QUFDSiIsImZpbGUiOiJiZXN0LW1vbWVudHMtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hlbHAtaW52aXRhdGlvbi10ZXJtcy9pbnZpdGF0aW9uLWJnLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

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

/***/ "9Aru":
/*!***********************************************************!*\
  !*** ./src/app/best-moments-add/best-moments-add.page.ts ***!
  \***********************************************************/
/*! exports provided: BestMomentsAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsAddPage", function() { return BestMomentsAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_best_moments_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./best-moments-add.page.html */ "Lhb7");
/* harmony import */ var _best_moments_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./best-moments-add.page.scss */ "/BaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/config */ "82od");









const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let BestMomentsAddPage = class BestMomentsAddPage {
    constructor(common, storageservice, formbuilder) {
        this.common = common;
        this.storageservice = storageservice;
        this.formbuilder = formbuilder;
        this.FormSubmit = false;
        this.ShowButtons = false;
        this.userDetails = [];
        this.BestMomentDetails = [];
        this.userCaption = {
            "caption": ""
        };
        this.BestMomentForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)])]
        });
        this.caption = this.BestMomentForm.controls['caption'];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
        this.common.route.queryParams.subscribe(resp => {
            this.BestMomentDetails = resp;
            console.log('BestMomentDetails for Best Moment page:', this.BestMomentDetails);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('Entered Into Best Moment Add Page');
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
        this.momentid = this.BestMomentDetails.momentid;
        console.log('momentid:', this.momentid);
    }
    toAddCaption() {
        console.log('Add Caption Button Clicked');
        this.FormSubmit = true;
        if (this.BestMomentForm.valid) {
            let params = {
                userid: this.userDetails.userid,
                Caption: this.userCaption.caption
            };
            console.log('params:', params);
            this.common.postMethod('BestMoment', params).then((res) => {
                console.log('res:', res);
                if (res.status == true) {
                    console.log('MomentId:', res.moment_id);
                    this.momentid = res.moment_id;
                    console.log('momentid:', this.momentid);
                    this.common.presentToast(' ✅  Best Moment Caption Added Successfully');
                }
                else {
                    this.common.presentToast(' 🛑 Something went wrong !!! ');
                }
            }, (err) => {
                console.log('Error:', err);
            });
        }
    }
    toUploadFromGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.BestMomentForm.valid) {
                const image = yield Camera.getPhoto({
                    quality: 50,
                    height: 200,
                    width: 200,
                    correctOrientation: true,
                    saveToGallery: true,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Base64,
                    source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Photos,
                });
                console.log('image:', image);
                const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
                this.uploadImage(blobData, image.format).subscribe((newImage) => {
                    console.log('newImage:', newImage);
                    this.common.router.navigate(['/best-moments']);
                }, err => {
                    console.log(err);
                });
            }
            else {
                this.common.showAlert('Please upload a caption for your <strong> Best Moments </strong>');
                // this.common.alertCtrl.create({
                //   header: 'Message',
                //   message: 'Please upload a caption for your <strong> Best Moments </strong>',
                //   buttons: ['OK']
                // });
            }
        });
    }
    toUploadFromCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.BestMomentForm.valid) {
                const image = yield Camera.getPhoto({
                    quality: 50,
                    height: 200,
                    width: 200,
                    allowEditing: true,
                    correctOrientation: true,
                    saveToGallery: true,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Base64,
                    source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Camera,
                });
                console.log('image:', image);
                const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
                this.uploadImage(blobData, image.format).subscribe((newImage) => {
                    console.log('newImage:', newImage);
                    this.common.router.navigate(['/best-moments']);
                }, err => {
                    console.log(err);
                });
            }
            else {
                this.common.showAlert('Please upload a caption for your <strong> Best Moments </strong>');
                // this.common.alertCtrl.create({
                //   header: 'Alert',
                //   message: 'Please upload a caption for your <strong> Best Moments </strong>',
                //   buttons: ['OK']
                // });
            }
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
        formData.append('userfile', blobData, `myimage.${ext}`);
        formData.append('momentid', this.momentid);
        this.common.presentLoading();
        return this.common.http.post(`${_services_config__WEBPACK_IMPORTED_MODULE_8__["baseUrl"] + '/iMatch/api/v1/UploadBestieMomentFile'}`, formData);
    }
    toShowButtons() {
        console.log('To Show Buttons Clicked');
        this.ShowButtons = !this.ShowButtons;
        console.log('toShowButtons:', this.ShowButtons);
    }
};
BestMomentsAddPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BestMomentsAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-best-moments-add',
        template: _raw_loader_best_moments_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_best_moments_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BestMomentsAddPage);



/***/ }),

/***/ "Lhb7":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/best-moments-add/best-moments-add.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 20px;\">ADD BEST MOMENTS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"padding: 15px; background-color: #707072; margin: 20px; \">\r\n    <div style=\"border: 1px solid #ffffff8f; padding: 15px; border-radius: 4px; color: #dcdcdc;\">\r\n\r\n      <form [formGroup]=\"BestMomentForm\" (ngSubmit)=\"toAddCaption()\">\r\n\r\n        <div>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <ion-textarea formControlName=\"caption\" [value]=\"BestMomentDetails.caption\" [readonly]=\"BestMomentDetails.caption != '' && BestMomentDetails.caption != null\" [(ngModel)]=\"userCaption.caption\" autocapitalize=\"true\" placeholder=\"Enter Your Caption\" style=\"background-color: grey; border-radius: 10px; padding: 5px; margin-top: 20px; margin-bottom: 5px;\"> </ion-textarea>\r\n            <ion-button style=\"text-transform: none; margin-bottom: 30px;\" size=\"small\" shape=\"round\" [disabled]=\"!BestMomentForm.valid\" type=\"submit\">Upload Caption</ion-button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n    </form>\r\n\r\n      <div style=\"padding: 25px; background-color: #ededed; border-radius: 20px; text-align: center;\">\r\n\r\n      <img src=\"../../assets/icon/newspaper.png\" onerror=\"this.src='../../assets/icon/newspaper.png';\" alt=\"\"  style=\"border-radius: 50%;\" (click)=\"toShowButtons()\">\r\n\r\n      <div style=\"display: flex; margin: 15px 0px 10px 0px;\" *ngIf=\"ShowButtons\" class=\"animate__animated animate__slideInUp\">\r\n\r\n        <div>\r\n          <ion-button style=\"text-transform: none;\" size=\"small\" shape=\"round\" (click)=\"toUploadFromGallery()\">\r\n            Gallery Upload</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button style=\"text-transform: none;\" size=\"small\" shape=\"round\" (click)=\"toUploadFromCamera()\">\r\n            Camera Upload</ion-button>\r\n        </div>\r\n\r\n      </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "uWXi":
/*!*************************************************************!*\
  !*** ./src/app/best-moments-add/best-moments-add.module.ts ***!
  \*************************************************************/
/*! exports provided: BestMomentsAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsAddPageModule", function() { return BestMomentsAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _best_moments_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-moments-add-routing.module */ "/1Xh");
/* harmony import */ var _best_moments_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./best-moments-add.page */ "9Aru");







let BestMomentsAddPageModule = class BestMomentsAddPageModule {
};
BestMomentsAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _best_moments_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestMomentsAddPageRoutingModule"]
        ],
        declarations: [_best_moments_add_page__WEBPACK_IMPORTED_MODULE_6__["BestMomentsAddPage"]]
    })
], BestMomentsAddPageModule);



/***/ })

}]);
//# sourceMappingURL=best-moments-add-best-moments-add-module-es2015.js.map