(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letter-letter-module"],{

/***/ "/0Hq":
/*!*****************************************!*\
  !*** ./src/app/letter/letter.module.ts ***!
  \*****************************************/
/*! exports provided: LetterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterPageModule", function() { return LetterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _letter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./letter-routing.module */ "p0m6");
/* harmony import */ var _letter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letter.page */ "ThTM");







let LetterPageModule = class LetterPageModule {
};
LetterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _letter_routing_module__WEBPACK_IMPORTED_MODULE_5__["LetterPageRoutingModule"]
        ],
        declarations: [_letter_page__WEBPACK_IMPORTED_MODULE_6__["LetterPage"]]
    })
], LetterPageModule);



/***/ }),

/***/ "BjNu":
/*!*****************************************!*\
  !*** ./src/app/letter/letter.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textarea {\n  padding: 8px;\n  background-color: #a9a9a985;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxldHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImxldHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTg1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC8vIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "OxlA":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/letter/letter.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <div style=\"text-align: center;\">\r\n      <ion-title style=\"position: relative;right: 5%;\">A LETTER TO MY BEST FRIEND</ion-title>\r\n    </div>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n\r\n    <div style=\"margin: 20px;\">\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"userLetter\" autocapitalize=\"true\" auto-grow=\"true\" class=\"textarea\" placeholder=\"What is on your mind .....\"></ion-textarea>\r\n    </div>\r\n\r\n    <div style=\"text-align: center;\">\r\n    <ion-button size=\"small\" shape=\"round\" style=\"text-transform: none;\" (click)=\"SubmitUserLetter()\">Save</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "ThTM":
/*!***************************************!*\
  !*** ./src/app/letter/letter.page.ts ***!
  \***************************************/
/*! exports provided: LetterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterPage", function() { return LetterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_letter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./letter.page.html */ "OxlA");
/* harmony import */ var _letter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter.page.scss */ "BjNu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let LetterPage = class LetterPage {
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
            this.GetUserStory();
        });
    }
    GetUserStory() {
        let params = {
            userid: this.userDetails.userid,
            senderid: this.bestieDetails.userid,
        };
        console.log("params:", params);
        this.common.postMethod("GetStatus", params).then((res) => {
            var _a;
            console.log("res:", res);
            this.userLetter = (_a = res.details.letter[0]) === null || _a === void 0 ? void 0 : _a.text;
        }, (err) => {
            console.log("Error:", err);
        });
    }
    SubmitUserLetter() {
        if (this.userLetter != "" && this.userLetter != undefined) {
            let params = {
                userid: this.userDetails.userid,
                category: "letter",
                text: this.userLetter,
                send_to: this.bestieDetails.userid,
            };
            console.log("params:", params);
            this.common.postMethod("statusbar", params).then((res) => {
                console.log("res:", res);
                if (res.status == true) {
                    this.userLetter = "";
                    this.common.presentToast(" ✅  Your Our Letter Content Updated Successfully ...");
                    this.common.router.navigate(["besties"], {
                        queryParams: this.bestieDetails,
                    });
                }
            }, (err) => {
                console.log("Error:", err);
            });
        }
        else {
            this.common.showAlert("You cannot send an empty Letter!");
        }
    }
};
LetterPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
LetterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-letter',
        template: _raw_loader_letter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_letter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LetterPage);



/***/ }),

/***/ "p0m6":
/*!*************************************************!*\
  !*** ./src/app/letter/letter-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LetterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterPageRoutingModule", function() { return LetterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _letter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./letter.page */ "ThTM");




const routes = [
    {
        path: '',
        component: _letter_page__WEBPACK_IMPORTED_MODULE_3__["LetterPage"]
    }
];
let LetterPageRoutingModule = class LetterPageRoutingModule {
};
LetterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LetterPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=letter-letter-module-es2015.js.map