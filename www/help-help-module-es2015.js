(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "7XJi":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "UlJl");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "DZkv");







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "BX3c":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-section {\n  height: 30%;\n}\n\n.bottom-section {\n  background-image: url('help-bg.png');\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 10px;\n}\n\n.contact-us {\n  height: 190px;\n  width: 190px;\n  background-image: url('bx.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  top: 55px;\n  left: 85px;\n  position: relative;\n}\n\n.make-imatch-better {\n  background-image: url('bx1.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 190px;\n  width: 190px;\n  position: relative;\n  left: 85px;\n}\n\n.envelope {\n  background-image: url('envlp.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 375px;\n  width: 292px;\n  margin: 34px 0 -15px 38px;\n  padding-top: 2px;\n}\n\n.feedback {\n  height: 320px;\n  width: 255px;\n  background-color: #fcbb3b;\n  margin-left: 50px;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoiaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuXHJcbn1cclxuXHJcbi5ib3R0b20tc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaGVscC1pbnZpdGF0aW9uLXRlcm1zL2hlbHAtYmcucG5nJyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXVze1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaGVscC1pbnZpdGF0aW9uLXRlcm1zL2J4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGxlZnQ6IDg1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLm1ha2UtaW1hdGNoLWJldHRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vaGVscC1pbnZpdGF0aW9uLXRlcm1zL2J4MS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogODVweDtcclxufVxyXG5cclxuLmVudmVsb3Ble1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWxwLWludml0YXRpb24tdGVybXMvZW52bHAucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgaGVpZ2h0OiAzNzVweDtcclxuICAgIHdpZHRoOiAyOTJweDtcclxuICAgIG1hcmdpbjogMzRweCAwIC0xNXB4IDM4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uZmVlZGJhY2t7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgd2lkdGg6IDI1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYmIzYjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "DZkv":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help.page.html */ "uL5U");
/* harmony import */ var _help_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.page.scss */ "BX3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");





let HelpPage = class HelpPage {
    constructor() {
        this.showContactUs = false;
        this.showFeedback = false;
    }
    ngOnInit() {
    }
    openContactUs(elementId) {
        this.showContactUs = !this.showContactUs;
        const y = document.getElementById(elementId).offsetTop - 123;
        console.log(y);
        this.content.scrollByPoint(0, y, 300);
    }
    openFeedback(elementId) {
        this.showFeedback = !this.showFeedback;
        // const y = document.getElementById(elementId).offsetTop;
        this.content.scrollToBottom();
    }
};
HelpPage.ctorParameters = () => [];
HelpPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false },] }]
};
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-help',
        template: _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelpPage);



/***/ }),

/***/ "UlJl":
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "DZkv");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "uL5U":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>HELP</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"top-section\">\r\n    <div style=\"font-family: OpenSansBold; font-size: 20px; margin: 20px 0 0px 62px;\">How Can We Help You?</div>\r\n  </div>\r\n\r\n  <div style=\"margin: -120px 0 0 0;\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <div style=\"height: 35px; margin-left: 10px; margin-right: -18px; font-size: 15px; font-family: OpenSansRegular;\">\r\n                <img style=\"width: 15px; margin: 0 0 -10px 8px;\" src=\"../../assets/icon/help-invitation-terms/help-search.png\">\r\n                <ion-input style=\"border: 0.5px solid #707072; margin-top: -20px; height: 40px; --padding-start: 30px; --placeholder-opacity: 1;\" placeholder=\"Enter Here\" type=\"text\">\r\n                    <!-- <img src=\"../../assets/icon/lock.png\"> -->\r\n         \r\n                  </ion-input>\r\n            <!-- Enter Here -->\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <div style=\"height: 40px; margin-left: 8px; margin-right: 10px; background-color: #f21908; padding: 9px 0 0px 25px; color: white; font-size: 15px; font-family: OpenSansRegular;\">\r\n                SEND\r\n              </div>\r\n            </ion-col>\r\n           \r\n          </ion-row>\r\n        </ion-grid>\r\n  </div>\r\n  <div class=\"bottom-section\">\r\n    <div class=\"contact-us\" (click)=\"openContactUs('contact')\">\r\n        <img style=\"width: 45px; margin: 40px 0 8px 72px;\" src=\"../../assets/icon/help-invitation-terms/mag.png\">\r\n        <div style=\"font-size: 18px; margin: 0 0 0 47px; font-family: OpenSansSemiBold; color: white;\">Contact Us</div>      \r\n    </div>\r\n\r\n    <div class=\"envelope\" *ngIf=\"showContactUs\">\r\n      <div>\r\n        <div style=\"color: #f21908; font-family: OpenSansBold; margin: 25px 0 0 85px; font-size: 18px;\">Contact Us</div>\r\n        <div style=\"margin: 12px 0 0 33px; color: #f21908; font-family: OpenSansBold; font-size: 12px;\">Name*</div>\r\n        <ion-input style=\"margin: -18px 0 0 90px; border: 0.5px solid #7070724d; height: 20px; width: 155px;\"></ion-input>\r\n        <div style=\"margin: 12px 0 0 33px; color: #f21908; font-family: OpenSansBold; font-size: 12px;\">Name*</div>\r\n        <ion-input style=\"margin: -18px 0 0 90px; border: 0.5px solid #7070724d; height: 20px; width: 155px;\"></ion-input>\r\n        <div style=\"margin: 12px 0 0 33px; color: #f21908; font-family: OpenSansBold; font-size: 12px;\">Name*</div>\r\n        <ion-input style=\"margin: -18px 0 0 90px; border: 0.5px solid #7070724d; height: 20px; width: 155px;\"></ion-input>\r\n        <div style=\"margin: 12px 0 0 33px; color: #f21908; font-family: OpenSansBold; font-size: 12px;\">Name*</div>\r\n        <ion-textarea style=\"margin: -18px 0 0 90px; border: 0.5px solid #7070724d; width: 155px;\"></ion-textarea>\r\n        <ion-button shape=\"round\" expand=\"block\" style=\"margin: 20px 0 0 85px; color: white; font-size: 10px; width: 110px; height: 30px\">SEND NOW</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"contact\" class=\"make-imatch-better\" (click)=\"openFeedback('feedback')\">\r\n      <div style=\"font-family: OpenSansSemiBold; font-size: 14px; color: white; margin: 25px 0 0 30px; padding-top: 35px;\">Make iMatch Better</div>\r\n      <div style=\"font-family: OpenSansRegular; font-size: 10px; color: white; margin: 15px 0 0 30px; padding-right: 20px;\">Do you have any suggestions to help iMatch be more user friendly or exciting? Please share with us</div>\r\n    </div>\r\n\r\n    <div class=\"feedback\" *ngIf=\"showFeedback\">\r\n      <div style=\"width: 400px\">\r\n          <img style=\"width: 280px; margin-top: 20px; margin-left: -9px;\" src=\"../../assets/icon/help-invitation-terms/help-ribbon.png\">\r\n      </div>\r\n      <ion-textarea style=\"height: 195px; width: 240px; --padding-bottom: 135px; margin-bottom: 10px; --padding-top: 0px; margin-left: 5px;\"></ion-textarea>\r\n      <span style=\"font-family: OpenSansRegular; color: #707072; margin-left: 146px; font-size: 15px;\">Thank you</span>\r\n    </div>\r\n    <div id=\"feedback\" *ngIf=\"showFeedback\" style=\"background-color: #707072; height: 20px;\"></div>\r\n  </div>  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=help-help-module-es2015.js.map