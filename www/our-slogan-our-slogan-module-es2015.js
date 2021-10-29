(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-slogan-our-slogan-module"],{

/***/ "FA6K":
/*!*************************************************!*\
  !*** ./src/app/our-slogan/our-slogan.module.ts ***!
  \*************************************************/
/*! exports provided: OurSloganPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurSloganPageModule", function() { return OurSloganPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _our_slogan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-slogan-routing.module */ "vEy0");
/* harmony import */ var _our_slogan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-slogan.page */ "FVrN");







let OurSloganPageModule = class OurSloganPageModule {
};
OurSloganPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _our_slogan_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurSloganPageRoutingModule"]
        ],
        declarations: [_our_slogan_page__WEBPACK_IMPORTED_MODULE_6__["OurSloganPage"]]
    })
], OurSloganPageModule);



/***/ }),

/***/ "FVrN":
/*!***********************************************!*\
  !*** ./src/app/our-slogan/our-slogan.page.ts ***!
  \***********************************************/
/*! exports provided: OurSloganPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurSloganPage", function() { return OurSloganPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_our_slogan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./our-slogan.page.html */ "QftB");
/* harmony import */ var _our_slogan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our-slogan.page.scss */ "QlmI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let OurSloganPage = class OurSloganPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.bestieDetails = [];
        this.common.route.queryParams.subscribe((resp) => {
            this.bestieDetails = resp;
            console.log("BestiesDetails:", this.bestieDetails);
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.GetStoredUserDetails();
    }
    GetStoredUserDetails() {
        this.storageservice.storage.get("userDetails").then((val) => {
            console.log("Storage Value of userDetails:", val);
            this.userDetails = val;
            this.GetUserSlogan();
        });
    }
    GetUserSlogan() {
        let params = {
            userid: this.userDetails.userid,
            senderid: this.bestieDetails.userid,
        };
        console.log("params:", params);
        this.common.postMethod("GetStatus", params).then((res) => {
            var _a;
            console.log("res:", res);
            this.userSlogan = (_a = res.details.slogan[0]) === null || _a === void 0 ? void 0 : _a.text;
        }, (err) => {
            console.log("Error:", err);
        });
    }
    SubmitUserSlogan() {
        if (this.userSlogan != "" && this.userSlogan != undefined) {
            let params = {
                userid: this.userDetails.userid,
                category: "slogan",
                text: this.userSlogan,
                send_to: this.bestieDetails.userid,
            };
            console.log("params:", params);
            this.common.postMethod("statusbar", params).then((res) => {
                console.log("res:", res);
                if (res.status == true) {
                    this.userSlogan = "";
                    this.common.presentToast(" ✅  Your Our Slogan Content Updated Successfully ...");
                    this.common.router.navigate(["besties"], {
                        queryParams: this.bestieDetails,
                    });
                }
            }, (err) => {
                console.log("Error:", err);
            });
        }
        else {
            this.common.showAlert("You cannot send an empty slogan!");
        }
    }
};
OurSloganPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
OurSloganPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-our-slogan",
        template: _raw_loader_our_slogan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_our_slogan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OurSloganPage);



/***/ }),

/***/ "QftB":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-slogan/our-slogan.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <div style=\"text-align: center;\">\r\n    <ion-title style=\"position: relative;right: 5%;\">OUR FAVOURITE WORD / SLOGAN</ion-title>\r\n    </div>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n    <div style=\"margin: 20px;\">\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"userSlogan\" autocapitalize=\"true\" auto-grow=\"true\" class=\"textarea\" placeholder=\"What is on your mind .....\"></ion-textarea>\r\n    </div>\r\n\r\n    <div style=\"text-align: center;\">\r\n    <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none;\" (click)=\"SubmitUserSlogan()\">Save</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "QlmI":
/*!*************************************************!*\
  !*** ./src/app/our-slogan/our-slogan.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textarea {\n  padding: 8px;\n  background-color: #a9a9a985;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG91ci1zbG9nYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJvdXItc2xvZ2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5ODU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "vEy0":
/*!*********************************************************!*\
  !*** ./src/app/our-slogan/our-slogan-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OurSloganPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurSloganPageRoutingModule", function() { return OurSloganPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _our_slogan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-slogan.page */ "FVrN");




const routes = [
    {
        path: '',
        component: _our_slogan_page__WEBPACK_IMPORTED_MODULE_3__["OurSloganPage"]
    }
];
let OurSloganPageRoutingModule = class OurSloganPageRoutingModule {
};
OurSloganPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OurSloganPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=our-slogan-our-slogan-module-es2015.js.map