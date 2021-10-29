(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-hundred-top-hundred-module"],{

/***/ "EcHf":
/*!***************************************************!*\
  !*** ./src/app/top-hundred/top-hundred.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n  height: 50px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n/* PAGE CONTENT */\n.page-background-image {\n  background-color: #d8e0e0;\n  background-image: url('bg1.png');\n  background-attachment: fixed;\n  padding-top: 10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100%;\n}\n.page-background-div {\n  padding: 10px 60px;\n  background-image: url('top100_bg.png');\n  /* background-position: center; */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: 60px;\n  background-attachment: fixed;\n}\n.logo-div {\n  text-align: center;\n  margin-top: 25px;\n}\n.logo-div img {\n  width: 70px;\n  border: 0.5px solid #aeb4b5;\n  padding: 5px;\n}\n.logo-div h6 {\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 0px;\n}\n.logo-div p {\n  font-size: 11px;\n  font-weight: 700;\n}\n.tot-num {\n  background-color: #f21908;\n  text-align: center;\n}\n.tot-num p {\n  color: #ffffff;\n  line-height: 22px;\n  font-size: 12px;\n}\n.list-items ol {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.list-items ol li {\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 3px;\n}\n.list-items ol li span {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvcC1odW5kcmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBLGlCQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBS0o7QUFIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUpBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU9KO0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNSjtBQUpBO0VBQ0ksWUFBQTtBQU9KIiwiZmlsZSI6InRvcC1odW5kcmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbi50YWJvbmVfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXJfbGVmdCB7XHJcbiAgICBcclxufVxyXG4udGFib25lX2hlYWRlcl9yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4vKiBQQUdFIENPTlRFTlQgKi9cclxuLnBhZ2UtYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlMGUwOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vdG9wMTAwL2JnMS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG4ucGFnZS1iYWNrZ3JvdW5kLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3RvcDEwMC90b3AxMDBfYmcucG5nJyk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNjBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmxvZ28tZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmxvZ28tZGl2IGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2FlYjRiNTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubG9nby1kaXYgaDYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbn1cclxuLmxvZ28tZGl2IHAge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4udG90LW51bSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjIxOTA4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b3QtbnVtIHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubGlzdC1pdGVtcyB7XHJcblxyXG59XHJcbi5saXN0LWl0ZW1zIG9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmxpc3QtaXRlbXMgb2wgbGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4ubGlzdC1pdGVtcyBvbCBsaSBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");

/***/ }),

/***/ "UQK3":
/*!*************************************************!*\
  !*** ./src/app/top-hundred/top-hundred.page.ts ***!
  \*************************************************/
/*! exports provided: TopHundredPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHundredPage", function() { return TopHundredPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_top_hundred_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./top-hundred.page.html */ "XBtn");
/* harmony import */ var _top_hundred_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-hundred.page.scss */ "EcHf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let TopHundredPage = class TopHundredPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('Entered into Top Hundred Page');
        let params = {
            userid: this.userDetails.userid
        };
        console.log('params:', params);
        this.common.postMethod('Top100', params).then((res) => {
            console.log('res:', res);
            this.TopHundred = res.details;
        });
    }
};
TopHundredPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
TopHundredPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-top-hundred',
        template: _raw_loader_top_hundred_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_top_hundred_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopHundredPage);



/***/ }),

/***/ "VcNi":
/*!***************************************************!*\
  !*** ./src/app/top-hundred/top-hundred.module.ts ***!
  \***************************************************/
/*! exports provided: TopHundredPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHundredPageModule", function() { return TopHundredPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _top_hundred_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-hundred-routing.module */ "ZuMH");
/* harmony import */ var _top_hundred_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-hundred.page */ "UQK3");







let TopHundredPageModule = class TopHundredPageModule {
};
TopHundredPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _top_hundred_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopHundredPageRoutingModule"]
        ],
        declarations: [_top_hundred_page__WEBPACK_IMPORTED_MODULE_6__["TopHundredPage"]]
    })
], TopHundredPageModule);



/***/ }),

/***/ "XBtn":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-hundred/top-hundred.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">FLIP BOARD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content>\r\n  <div class=\"page-background-image\">\r\n    <div class=\"page-background-div\">\r\n      <div class=\"logo-div\">\r\n        <img src=\"../../assets/icon/what_would/logo.png\" alt=\"\">\r\n        <h6>TOP 100</h6>\r\n        <p>WE HEART YOU</p>\r\n      </div>\r\n\r\n      <div style=\"margin-top: 30px; overflow: scroll; height: 55vh;\">\r\n        <div class=\"tot-num\">\r\n          <p>01 - 10</p>\r\n        </div>\r\n\r\n        <div class=\"list-items\" >\r\n          <ol>\r\n            <div *ngFor=\"let top of TopHundred\">\r\n            <li> {{top.username}} <span> {{top.fan_count}} </span> </li>\r\n          </div>\r\n\r\n            <!-- <div style=\"margin-top: 10px; margin-left: -20px;\">\r\n              <div class=\"tot-num\">\r\n                <p>11 - 20</p>\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li>\r\n            <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li> -->\r\n\r\n            <!-- <div style=\"margin-top: 10px; margin-left: -20px;\">\r\n              <div class=\"tot-num\">\r\n                <p>21 - 30</p>\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li>\r\n            <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li> -->\r\n\r\n            <!-- <div style=\"margin-top: 10px; margin-left: -20px;\">\r\n              <div class=\"tot-num\">\r\n                <p>21 - 30</p>\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li>\r\n            <li>James <span>100k Fans</span> </li>\r\n            <li>Elizabeth <span>100k Fans</span> </li>\r\n            <li>James Albert <span>100k Fans</span> </li>\r\n            <li>Andrew <span>100k Fans</span> </li>\r\n            <li>Martyn <span>100k Fans</span> </li> -->\r\n\r\n          </ol>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "ZuMH":
/*!***********************************************************!*\
  !*** ./src/app/top-hundred/top-hundred-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TopHundredPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHundredPageRoutingModule", function() { return TopHundredPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _top_hundred_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-hundred.page */ "UQK3");




const routes = [
    {
        path: '',
        component: _top_hundred_page__WEBPACK_IMPORTED_MODULE_3__["TopHundredPage"]
    }
];
let TopHundredPageRoutingModule = class TopHundredPageRoutingModule {
};
TopHundredPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopHundredPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=top-hundred-top-hundred-module-es2015.js.map