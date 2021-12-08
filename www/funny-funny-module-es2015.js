(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funny-funny-module"],{

/***/ "3CP3":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funny/funny.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 25px;\">FUNNY</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"background-color: #707072; padding: 10px; margin: 15px; border-radius: 10px;\" *ngFor=\"let fun of FunnyDetails\" class=\"animate__animated animate__fadeIn\">\r\n\r\n    <div style=\"display: flex; margin-bottom: 10px;\">\r\n      <ion-avatar style=\"border: 1px solid yellow; padding: 2px; background-color: white; width: 45px; height: 45px;\">\r\n        <img [src]=\"fun.sender_profile\" alt=\"\">\r\n      </ion-avatar>\r\n      <span style=\"margin: 10px; color: white;\"> {{fun.sender_name}}</span>\r\n    </div>\r\n\r\n    <div style=\"display: flex; height: 300px;\">\r\n\r\n      <div style=\"padding-right: 2px;\">\r\n        <img [src]=\"fun.receiver_image\" alt=\"\" style=\"height: 300px; border-radius: 10px;\">\r\n      </div>\r\n\r\n      <img src=\"../../assets/icon/vs.png\" alt=\"\" style=\"position: absolute; left: 45%; top: 34%; height: 35px; width: 35px;\">\r\n      \r\n      <div style=\"padding-left: 2px;\">\r\n        <img [src]=\"fun.sender_image\" alt=\"\" style=\"height: 300px; border-radius: 10px;\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n      <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{fun.total_likecount}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{fun.total_comment}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{fun.total_commoncomments}} </span>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "8MfF":
/*!***************************************!*\
  !*** ./src/app/funny/funny.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5ueS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "EsPy":
/*!***************************************!*\
  !*** ./src/app/funny/funny.module.ts ***!
  \***************************************/
/*! exports provided: FunnyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyPageModule", function() { return FunnyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _funny_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funny-routing.module */ "V9jD");
/* harmony import */ var _funny_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./funny.page */ "sFt2");







let FunnyPageModule = class FunnyPageModule {
};
FunnyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _funny_routing_module__WEBPACK_IMPORTED_MODULE_5__["FunnyPageRoutingModule"]
        ],
        declarations: [_funny_page__WEBPACK_IMPORTED_MODULE_6__["FunnyPage"]]
    })
], FunnyPageModule);



/***/ }),

/***/ "V9jD":
/*!***********************************************!*\
  !*** ./src/app/funny/funny-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FunnyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyPageRoutingModule", function() { return FunnyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _funny_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funny.page */ "sFt2");




const routes = [
    {
        path: '',
        component: _funny_page__WEBPACK_IMPORTED_MODULE_3__["FunnyPage"]
    }
];
let FunnyPageRoutingModule = class FunnyPageRoutingModule {
};
FunnyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FunnyPageRoutingModule);



/***/ }),

/***/ "sFt2":
/*!*************************************!*\
  !*** ./src/app/funny/funny.page.ts ***!
  \*************************************/
/*! exports provided: FunnyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyPage", function() { return FunnyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_funny_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./funny.page.html */ "3CP3");
/* harmony import */ var _funny_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funny.page.scss */ "8MfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let FunnyPage = class FunnyPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.FunnyDetails = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
        let params = {
            userid: this.userDetails.userid,
            category: 'funny',
        };
        this.common.postMethod('BannerSearch', params).then((res) => {
            this.FunnyDetails = res.details;
        }, (err) => {
            console.log('Error:', err);
        });
    }
};
FunnyPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
FunnyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-funny',
        template: _raw_loader_funny_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_funny_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FunnyPage);



/***/ })

}]);
//# sourceMappingURL=funny-funny-module-es2015.js.map