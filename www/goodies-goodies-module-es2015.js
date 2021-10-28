(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goodies-goodies-module"],{

/***/ "AuIw":
/*!*******************************************!*\
  !*** ./src/app/goodies/goodies.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('goodies-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.view-more-button {\n  width: 50px;\n  height: 16px;\n  font-size: 5px;\n  margin-left: -1%;\n  font-family: OpenSansRegular;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #e0dfe4;\n  width: 90%;\n  margin-left: 17px;\n  margin-top: -14px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n  margin-top: 154px;\n}\n\nion-item {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  font-family: OpenSansRegular;\n  font-size: 13px;\n  margin: 0 10px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdvb2RpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUVBLHVCQUFBO0FBREoiLCJmaWxlIjoiZ29vZGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9ub3RpZmljYXRpb25zLWdvb2RpZXMvZ29vZGllcy1iZy5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnZpZXctbW9yZS1idXR0b257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9te1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGRmZTQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnJpcHBsZS1wYXJlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDE1NHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNSZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "Cf2b":
/*!*****************************************!*\
  !*** ./src/app/goodies/goodies.page.ts ***!
  \*****************************************/
/*! exports provided: GoodiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodiesPage", function() { return GoodiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_goodies_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./goodies.page.html */ "rbAF");
/* harmony import */ var _goodies_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodies.page.scss */ "AuIw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let GoodiesPage = class GoodiesPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.showWinners = false;
        this.headliners = [{
                name: 'Ebond Gold'
            },
            {
                name: 'Sally Brint'
            },
            {
                name: 'Pritty Kavitha'
            },
            {
                name: 'Linne Craig'
            },
            {
                name: 'Layla'
            },
        ];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('Entered Into Goodies Of The Moment Page');
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
        let params = {
            userid: this.userDetails.userid,
        };
        console.log('params:', params);
        this.common.postMethod('winners_of_the_moment', params).then((res) => {
            console.log('res:', res);
            this.WinnerDetails = res.details;
        });
    }
    winnersMoment() {
        this.showWinners = !this.showWinners;
    }
};
GoodiesPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
GoodiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-goodies',
        template: _raw_loader_goodies_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_goodies_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoodiesPage);



/***/ }),

/***/ "cefT":
/*!***************************************************!*\
  !*** ./src/app/goodies/goodies-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GoodiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodiesPageRoutingModule", function() { return GoodiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _goodies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goodies.page */ "Cf2b");




const routes = [
    {
        path: '',
        component: _goodies_page__WEBPACK_IMPORTED_MODULE_3__["GoodiesPage"]
    }
];
let GoodiesPageRoutingModule = class GoodiesPageRoutingModule {
};
GoodiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoodiesPageRoutingModule);



/***/ }),

/***/ "rbAF":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goodies/goodies.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">GOODIES OF THE MOMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Cards -->\r\n\r\n  <div style=\"margin-top: 25px;\">\r\n\r\n    <!-- LHS -->\r\n\r\n    <div style=\"position: relative; width: 43%; float: left; border: 1px solid transparent; height: 109px; background-color: white; border-radius: 5px; margin: 0 23px 20px 12px;\">\r\n      <div style=\"margin: 9px 0 0 9px;\">\r\n        <span style=\"font-family: OpenSansSemiBold; font-size: 8px; color: #707072;\">iMATCH</span>\r\n        <div style=\"font-family: OpenSansBold; font-size: 11px;\" class=\"ion-text-uppercase\">Expense</div>\r\n        <p style=\"font-family: OpenSansRegular; font-size: 7px; width: 100px; color: #707072;\">Get cashless paybill, transfer money to anyone, avail offers and more.</p>\r\n        <ion-button shape=\"round\" expand=\"block\" class=\"view-more-button\" >View More</ion-button>\r\n      </div>\r\n       \r\n      <div style=\"width: 50px; margin: -85px 0 0 112px; position: absolute; right: -10px;\">\r\n        <img src=\"../../assets//icon/notifications-goodies/card-1.png\">\r\n      </div>\r\n      <ion-icon style=\"position: absolute; right: 4px; bottom: 2px;\" name=\"heart\" color=\"warning\" ></ion-icon>\r\n     \r\n    </div >\r\n\r\n    <!-- LHS Ends -->\r\n\r\n    <!-- RHS -->\r\n  \r\n    <div style=\"position: relative; width: 43%; float: left; border: 1px solid transparent; height: 109px; background-color: white; border-radius: 5px;\">\r\n      <div style=\"margin: 9px 0 0 9px;\">\r\n        <span style=\"font-family: OpenSansSemiBold; font-size: 8px; color: #707072;\">iMATCH</span>\r\n        <div style=\"font-family: OpenSansBold; font-size: 11px;\" class=\"ion-text-uppercase\">Expense</div>\r\n        <p style=\"font-family: OpenSansRegular; font-size: 7px; width: 100px; color: #707072;\">Get cashless paybill, transfer money to anyone, avail offers and more.</p>\r\n        <ion-button shape=\"round\" expand=\"block\" class=\"view-more-button\" >View More</ion-button>\r\n      </div>\r\n       \r\n      <div style=\"width: 50px; margin: -85px 0 0 112px; position: absolute; right: -10px;\">\r\n        <img src=\"../../assets/icon/notifications-goodies/card-1.png\">\r\n      </div>\r\n      <ion-icon style=\"position: absolute; right: 4px; bottom: 2px;\" name=\"heart\" color=\"warning\" ></ion-icon>\r\n\r\n    </div >\r\n\r\n    <!-- RHS Ends -->\r\n\r\n  </div>\r\n\r\n  <!-- Cards Ends -->\r\n\r\n  <!-- Winners of the Momemt Heading -->\r\n\r\n  <div (click)=\"winnersMoment()\" class=\"ion-activatable ripple-parent\">\r\n    <ion-card style=\"width: 92%; height: 37px; margin-left: 12px;\">\r\n        <div style=\"color: black; font-family: OpenSansSemiBold; margin-left: 10px; margin-top: 6px;\">Winners of the Moment\r\n            <ion-icon *ngIf=\"!showWinners\" name=\"caret-down-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n            <ion-icon *ngIf=\"showWinners\" name=\"caret-up-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n        \r\n        </div>\r\n        \r\n    </ion-card>\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </div>\r\n\r\n  <!-- Winners of the Momemt Heading Ends -->\r\n\r\n\r\n  <!-- Winners of the Momemt Content -->\r\n\r\n  <div *ngIf=\"showWinners\" style=\"width: 92%; padding-top: 25px; background-color: #f0eff4;; margin-left: 12px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; margin-top: -30px;\">\r\n    \r\n    <div *ngFor=\"let winner of WinnerDetails\" >\r\n\r\n      <ion-item  lines=\"none\">\r\n\r\n        <ion-avatar slot=\"start\">\r\n          <img style=\"border: 1px solid #707072; height: 35px;\" [src]=\"winner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label>{{winner.winner_name}}</ion-label>\r\n        <img style=\"width: 25px; margin-right: 10px;\" src=\"../../assets/icon/notifications-goodies/ICFedu6-512.png\">\r\n      \r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Winners of the Momemt Content Ends -->\r\n\r\n  <!-- Past Winners Heading -->\r\n\r\n  <div class=\"ion-activatable ripple-parent\" style=\"margin-top: -5px;\">\r\n    <ion-card style=\"width: 92%; height: 37px; margin-left: 12px;\">\r\n      <div style=\"color: black; font-family: OpenSansSemiBold; margin-left: 10px; margin-top: 6px;\">Past Winners\r\n        <ion-icon *ngIf=\"!showWinners\" name=\"caret-down-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n        <ion-icon *ngIf=\"showWinners\" name=\"caret-up-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n      </div>\r\n        \r\n    </ion-card>\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </div>\r\n  \r\n  <!-- Past Winners -->\r\n\r\n  <!-- Winners Testimonials -->\r\n\r\n  <div class=\"ion-activatable ripple-parent\" style=\"margin-top: -5px;\">\r\n    <ion-card style=\"width: 92%; height: 37px; margin-left: 12px;\">\r\n      <div style=\"color: black; font-family: OpenSansSemiBold; margin-left: 10px; margin-top: 6px;\">Winners Testimonials\r\n        <ion-icon *ngIf=\"!showWinners\" name=\"caret-down-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n        <ion-icon *ngIf=\"showWinners\" name=\"caret-up-circle\" size=\"large\" color=\"dark\" style=\"margin-top: -4px; position: absolute; right: 10px;\"></ion-icon>\r\n      </div>\r\n        \r\n    </ion-card>\r\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n  </div>\r\n    \r\n  <!-- Winners Testimonials Ends -->\r\n\r\n  <!-- </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "zjWB":
/*!*******************************************!*\
  !*** ./src/app/goodies/goodies.module.ts ***!
  \*******************************************/
/*! exports provided: GoodiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodiesPageModule", function() { return GoodiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _goodies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goodies-routing.module */ "cefT");
/* harmony import */ var _goodies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goodies.page */ "Cf2b");







let GoodiesPageModule = class GoodiesPageModule {
};
GoodiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _goodies_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoodiesPageRoutingModule"]
        ],
        declarations: [_goodies_page__WEBPACK_IMPORTED_MODULE_6__["GoodiesPage"]]
    })
], GoodiesPageModule);



/***/ })

}]);
//# sourceMappingURL=goodies-goodies-module-es2015.js.map