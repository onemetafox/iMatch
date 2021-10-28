(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "/6n6":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "h79p");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "LRt8");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "2NHs":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>FAQs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Outermost Container -->\r\n\r\n  <div style=\"margin-top: 15px;\">\r\n\r\n    <!-- Heading -->\r\n    \r\n    <div class=\"heading\">WHAT DO YOU WANT TO KNOW</div>\r\n\r\n    <!-- Heading Ends -->\r\n\r\n    <!-- FAQ Section -->\r\n\r\n    <div style=\"position: relative; margin-top: 25px;\">\r\n\r\n      <div class=\"box\" style=\"position: absolute; left: 25px; background-color: #f21908\">About iMatch</div>\r\n      <div class=\"box\" style=\"position: absolute; right: 25px; background-color: #fcbb3b;\">iMatch Rules</div>\r\n        <div style=\"position: absolute; border-top: 2.5px solid #707072; width: 15px; left: 139.5px; top: 44px;\"></div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 63px; left: 153.5px; top: 44px;\"></div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 13px; right: 77px; top: 75px;\"></div>\r\n        <span class=\"dot\" style=\"left: 150px; top: 88px;\"></span>\r\n        <span class=\"dot\" style=\"right: 74px; top: 87px;\"></span>\r\n     \r\n      <div class=\"box\" style=\"position: absolute; left: 70px; top: 95px; background-color: #707072; padding-top: 17px; padding-left: 2px;\">How to Participate</div>\r\n      <div class=\"box\" style=\"position: absolute; right: 25px; top: 95px; background-color: #f21908; padding-top: 17px; padding-left: 2px;\">Subscription Details</div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 132px; left: 54.5px; top: 75px;\"></div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 54px; right: 162px; top: 133px;\"></div>\r\n        <div style=\"position: absolute; border-top: 2.5px solid #707072; width: 100px; right: 164px; top: 133px;\"></div>\r\n        <span class=\"dot\" style=\"left: 52px; top: 187px;\"></span>\r\n        <span class=\"dot\" style=\"right: 159px; top: 187px;\"></span>\r\n      \r\n      <div class=\"box\" style=\"position: absolute; left: 25px; top: 195px; background-color: #fcbb3b; padding-top: 17px; padding-left: 2px;\">Subscription Details</div>\r\n      <div class=\"box\" style=\"position: absolute; right: 80px; top: 195px; background-color: black; padding-top: 17px; padding-left: 2px;\">Terms and Services</div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 22px; left: 77.5px; top: 270px;\"></div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 22px; right: 102px; top: 270px;\"></div> \r\n        <span class=\"dot\" style=\"left: 75px; top: 282px;\"></span>\r\n        <span class=\"dot\" style=\"right: 100px; top: 282px;\"></span>\r\n      <div class=\"box\" style=\"position: absolute; left: 25px; top: 290px; background-color: #707072; padding-top: 17px; padding-left: 2px;\">Benefits of Winners</div>\r\n      <div class=\"box\" style=\"position: absolute; right: 25px; top: 290px; background-color: #f21908;\">Winners</div>\r\n        <div style=\"position: absolute; border-top: 2.5px solid #707072; width: 100px; left: 93px; top: 326px;\"></div>\r\n        <div style=\"position: absolute; border-left: 2.5px solid #707072; height: 65px; left: 190px; top: 328px;\"></div>\r\n        <span class=\"dot\" style=\"left: 187px; top: 382px;\"></span>\r\n      <div class=\"box\" style=\"position: absolute; left: 28%; top: 390px; background-color: black; padding-top: 17px; padding-left: 2px; width: 150px;\">How to apply for promotion code</div>\r\n\r\n      <!-- Input Section -->\r\n\r\n      <div>\r\n        <ion-input placeholder=\"Please Enter Your Questions Here\" type=\"text\" class=\"input-box\"></ion-input>\r\n      </div>\r\n\r\n      <!-- Input Section Ends -->\r\n      \r\n    </div>\r\n\r\n    <!-- FAQ Section Ends -->\r\n\r\n    \r\n  </div>\r\n\r\n  <!-- Outermost Container Ends -->\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "LRt8":
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.page.html */ "2NHs");
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.page.scss */ "x1ky");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FaqPage = class FaqPage {
    constructor() { }
    ngOnInit() {
    }
};
FaqPage.ctorParameters = () => [];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqPage);



/***/ }),

/***/ "h79p":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "LRt8");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "x1ky":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  font-family: OpenSansBold;\n  font-size: 1em;\n  text-align: center;\n}\n\n.box {\n  font-family: OpenSansRegular;\n  font-size: 14px;\n  width: 115px;\n  height: 75px;\n  border-radius: 4px;\n  text-align: center;\n  padding-top: 25px;\n  color: white;\n}\n\n.dot {\n  height: 8px;\n  width: 8px;\n  background-color: #707072;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.input-box {\n  position: absolute;\n  margin-top: 530px;\n  border-radius: 20px;\n  margin-bottom: 30px;\n  box-shadow: 0px 0px 5px 2px gainsboro;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-family: OpenSansSemiBold;\n  font-size: 13px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: 1;\n  width: 94%;\n  --padding-start: 20px;\n  --padding-top: 12px;\n  --padding-bottom: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKIiwiZmlsZSI6ImZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0JvbGQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IGdhaW5zYm9ybztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAuc2MtaW9uLWlucHV0LW1kLWh7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=faq-faq-module-es2015.js.map