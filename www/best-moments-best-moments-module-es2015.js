(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["best-moments-best-moments-module"],{

/***/ "9/G4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/best-moments/best-moments.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 40px;\">BEST MOMENTS</ion-title>\r\n          <div style=\"position: absolute; bottom: 13px; width: 35px; display: flex; right: 100px; text-align: center;\">\r\n            <span style=\"margin-left: 10px; background-color: #ececed; color: #707072; padding: 4px; border-radius: 50%; font-size: 13px; position: relative; bottom: 3px; height: 25px; width: 25px; right: 10px;\"> \r\n              0{{this.BestMoments?.length}} </span>\r\n            </div>\r\n              <img *ngIf=\"userDetails\" [src]=\"userDetails.profile_pic\" alt=\"\" style=\"    height: 46px; width: 46px; border-radius: 50%; border: 1px solid white; position: absolute; right: 28px; bottom: 6px;\" (click)=\"gotoUserProfile()\">\r\n        <ion-icon name=\"caret-down-outline\" style=\"position: absolute; right: 10px; color: white; bottom: 15px;\"></ion-icon>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"float: right; margin-right: 10px;\">\r\n    <div style=\"background-color: #7070726b; margin-top: 15px; padding: 5px; border-radius: 20px; display: flex; width: 185px;\" (click)=\"gotoAddBestMoments()\">\r\n      <img src=\"../../assets/icon/chat-message/add.png\" alt=\"\" style=\"width: 20px; height: 20px; margin-right: 5px;\">\r\n      <span style=\"font-size: 12px; position: relative; top: 2px;\">Add Best Moments </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"padding: 30px; margin-top: 60px; text-align: center;\" *ngIf=\"BestMoments==null\">\r\n    <div style=\"background-color: #c3c3c4; border-radius: 50%;\">\r\n      <img src=\"../../assets/icon/hand-with-camera.png\" alt=\"\" style=\"border-radius: 50%; padding: 25px;\">\r\n    </div>\r\n    <h5 style=\"font-weight: 600; margin-top: 45px; line-height: 30px; letter-spacing: 1px;\">No Best / Worst Moment Medias Available !!!</h5>\r\n  </div>\r\n\r\n  <div style=\"padding: 65px 20px 20px 20px;\">\r\n\r\n    <div *ngFor=\"let moments of BestMoments, let i = index\" style=\"box-shadow: 1px 1px 5px 1px grey; border-radius: 5px; margin-bottom: 20px;\" class=\"animate__animated animate__fadeIn\">\r\n      <div>\r\n\r\n        <div style=\"position: absolute; right: 10px; background: #f1d948; margin-top: 20px; padding: 3px 10px;\">\r\n          <img src=\"../../assets/icon/blog/alnd.png\" alt=\"\" style=\"height: 18px; width: 18px;\">\r\n          <span style=\"font-size: 13px; position: relative; bottom: 3px; font-weight: 600; letter-spacing: 1px; margin-left: 5px;\"> {{moments.created_at | date}} - {{moments.created_at | date:'shortTime'}} </span>\r\n        </div>\r\n\r\n          <img [src]=\"moments.file\" onerror=\"this.src='../../assets/icon/no-img.jpg';\" alt=\"\" style=\"height: 260px; width: -webkit-fill-available;\">\r\n\r\n        <div style=\"position: relative; bottom: 31px; background-color: #707072; opacity: 60%; padding: 2px 15px;\">\r\n          <img src=\"../../assets/icon/img1.png\" alt=\"\" style=\"height: 15px; width: 20px;\">\r\n          <span slot=\"start\" style=\"font-size: 13px; font-weight: 600; margin-left: 5px; position: relative; bottom: 2px; color: white;\"> {{moments.media_count}}</span>\r\n        </div>\r\n\r\n      </div>\r\n  \r\n      <div style=\"padding: 10px; position: relative; bottom: 25px; height: 70px;\">\r\n        <p style=\"margin-top: 1px; font-weight: 600;\"> {{moments.caption}} </p>\r\n\r\n        <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\"width: 23px; height: 20px;\" (click)=\"ToLikeBestMoment($event,moments)\"> \r\n        <span style=\"font-size: 14px; position: relative; bottom: 5px; margin-left: 5px; color: #707072; font-weight: 600;\"> {{moments.Like_count}} </span>\r\n        <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\"width: 25px; height: 20px; margin-left: 15px;\" (click)=\"gotoBestMomentComments($event,moments)\">\r\n        <span style=\"font-size: 14px; position: relative; bottom: 5px; margin-left: 5px; color: #707072; font-weight: 600;\" (click)=\"gotoBestMomentComments($event,moments)\"> {{moments.comment_count}} </span>\r\n\r\n        <div slot=\"end\" style=\"text-align: end; position: relative; bottom: 5px; float: right;\">\r\n          <img src=\"../../assets/icon/add.png\" alt=\"\" style=\"width: 43px; height: 43px; position: relative; bottom: 5px;\" (click)=\"toAddMedia($event,moments)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "bGR8":
/*!***************************************************!*\
  !*** ./src/app/best-moments/best-moments.page.ts ***!
  \***************************************************/
/*! exports provided: BestMomentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsPage", function() { return BestMomentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_best_moments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./best-moments.page.html */ "9/G4");
/* harmony import */ var _best_moments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./best-moments.page.scss */ "wons");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let BestMomentsPage = class BestMomentsPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.BestMoments = [];
        this.BestMomentsImages = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //  this.common.showLoader();
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
            let params = {
                userid: this.userDetails.userid
            };
            this.common.postMethod('GetBestMoment', params).then((res) => {
                // this.common.presentToast
                this.common.presentLoading();
                this.BestMoments = res.details.moments;
                this.BestMomentsImages = res.details.moments_files;
            });
        });
    }
    gotoAddBestMoments() {
        this.common.router.navigate(['/best-moments-add']);
    }
    gotoUserProfile() {
        this.common.router.navigate(['tabs/tab7'], { queryParams: this.userDetails });
    }
    toAddMedia(event, moments) {
        this.common.navCtrl.navigateForward(['/best-moments-add'], { queryParams: moments });
    }
    gotoBestMomentComments(e, moments) {
        this.common.navCtrl.navigateForward(['/best-moment-comment'], { queryParams: moments });
    }
    ToLikeBestMoment(e, moments) {
        let params = {
            userid: this.userDetails.userid,
            momentid: moments.momentid
        };
        this.common.postMethod('MomentLike', params).then((res) => {
            if (res.status == true) {
                this.ionViewWillEnter();
            }
        }, err => {
            console.log('Error:', err);
        });
    }
};
BestMomentsPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
BestMomentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-best-moments',
        template: _raw_loader_best_moments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_best_moments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BestMomentsPage);



/***/ }),

/***/ "e0kb":
/*!*************************************************************!*\
  !*** ./src/app/best-moments/best-moments-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BestMomentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsPageRoutingModule", function() { return BestMomentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _best_moments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./best-moments.page */ "bGR8");




const routes = [
    {
        path: '',
        component: _best_moments_page__WEBPACK_IMPORTED_MODULE_3__["BestMomentsPage"]
    }
];
let BestMomentsPageRoutingModule = class BestMomentsPageRoutingModule {
};
BestMomentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BestMomentsPageRoutingModule);



/***/ }),

/***/ "wons":
/*!*****************************************************!*\
  !*** ./src/app/best-moments/best-moments.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZXN0LW1vbWVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "y2n3":
/*!*****************************************************!*\
  !*** ./src/app/best-moments/best-moments.module.ts ***!
  \*****************************************************/
/*! exports provided: BestMomentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentsPageModule", function() { return BestMomentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _best_moments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-moments-routing.module */ "e0kb");
/* harmony import */ var _best_moments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./best-moments.page */ "bGR8");







let BestMomentsPageModule = class BestMomentsPageModule {
};
BestMomentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _best_moments_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestMomentsPageRoutingModule"]
        ],
        declarations: [_best_moments_page__WEBPACK_IMPORTED_MODULE_6__["BestMomentsPage"]]
    })
], BestMomentsPageModule);



/***/ })

}]);
//# sourceMappingURL=best-moments-best-moments-module-es2015.js.map