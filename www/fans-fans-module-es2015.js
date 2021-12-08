(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fans-fans-module"],{

/***/ "64TC":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fans/fans.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">FANS</ion-title>\r\n    <ion-icon name=\"search\" class=\"top-search-icon\" slot=\"end\" (click)=\"gotoSearchFans()\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <div>\r\n    <div style=\"padding: 10px; display: flex; border-bottom: 2.5px solid #808080a1;\" *ngIf=\"userDetails\">\r\n      <ion-avatar style=\"height: 57px; width: 57px;border: 1px solid; margin-left: 15px;\">\r\n        <img [src]=\"userDetails.profile_pic\" alt=\"\" (click)=\"gotoProfile()\">\r\n      </ion-avatar>\r\n      <ion-label style=\"margin-left: 15px; font-weight: 600; margin-top: 5px; position: relative; top: 10px;\">{{userDetails.name}}</ion-label>\r\n      <p class=\"be-a-fan-text\" *ngIf=\"userDetails.userType=='VISITOR'\">BE A FAN</p>\r\n      <img src=\"../../assets/icon/activity/011.png\" alt=\"\" style=\"position: relative; left: 40%;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"padding-left: 25px; font-weight: 600; letter-spacing: 1px;\">\r\n    <p *ngIf=\"myfans\">FANS {{this.myfans.length}} </p>\r\n  </div>\r\n\r\n<ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\" *ngFor=\"let fan of myfans\">\r\n  <ion-avatar style=\"height: 50px; width: 50px;\">\r\n    <img [src]=\"fan.pic\" alt=\"\">\r\n  </ion-avatar>\r\n  <ion-label style=\"margin-left: 15px;\">{{fan.name}}</ion-label>\r\n  <img src=\"../../assets/icon/cls.png\" alt=\"\" style=\"height: 30px; width: 30px;\" (click)=\"toRemoveFan($event,fan)\">\r\n</ion-item>\r\n\r\n</ion-content>");

/***/ }),

/***/ "IzeT":
/*!***********************************!*\
  !*** ./src/app/fans/fans.page.ts ***!
  \***********************************/
/*! exports provided: FansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FansPage", function() { return FansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fans.page.html */ "64TC");
/* harmony import */ var _fans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fans.page.scss */ "iSaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let FansPage = class FansPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.myfans = [];
        this.common.route.queryParams.subscribe(resp => {
            this.userDetails = resp;
        });
        // this.storageservice.storage.get('userDetails').then((val) => {
        //   console.log('Storage Value of userDetails:', val);
        //   this.userDetails = val;
        // });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.common.showLoader();
        // this.storageservice.storage.get('userDetails').then((val) => {
        //   this.userDetails = val;
        // if (this.userDetails.userid != '') {
        let params = {
            id: this.userDetails.userid
        };
        // this.common.presentLoading();
        this.common.postMethod('getBestieList', params).then((res) => {
            this.myfans = res.details.fan;
            this.common.hideLoader();
            if (this.myfans.length == 0) {
                this.common.presentToast('You are having no `Fans` to show');
            }
            else {
                this.common.presentToast('You are having ' + res.details.fan.length + ' fan list members to show');
            }
        }, err => {
            this.ionViewWillEnter();
            console.log('Error:', err);
        });
        // } else {
        //   this.common.presentToast('Something Went Wrong !!!');
        // }
        // });
    }
    gotoSearchFans() {
        this.common.navCtrl.navigateForward(['/search-fans'], { queryParams: this.userDetails });
    }
    gotoProfile() {
        this.common.navCtrl.navigateForward(['/tabs/tab7'], { queryParams: this.userDetails });
    }
    toRemoveFan(event, fan) {
        let params = {
            fanid: fan.tableid,
        };
        this.common.postMethod('RemoveFans', params).then((res) => {
            if (res.status == true) {
                this.common.presentToast('✅ ' + fan.name + ' is successfully removed from your fans list ');
                this.ionViewWillEnter();
            }
            else {
                // this.common.presentToast(' 🛑 Something went wrong ');
                this.ionViewWillEnter();
            }
        });
    }
};
FansPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
FansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fans',
        template: _raw_loader_fans_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fans_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FansPage);



/***/ }),

/***/ "SG1D":
/*!*********************************************!*\
  !*** ./src/app/fans/fans-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FansPageRoutingModule", function() { return FansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _fans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fans.page */ "IzeT");




const routes = [
    {
        path: '',
        component: _fans_page__WEBPACK_IMPORTED_MODULE_3__["FansPage"]
    }
];
let FansPageRoutingModule = class FansPageRoutingModule {
};
FansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FansPageRoutingModule);



/***/ }),

/***/ "iSaP":
/*!*************************************!*\
  !*** ./src/app/fans/fans.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".be-a-fan-text {\n  position: absolute;\n  left: 95px;\n  top: 40px;\n  background-color: #afafaf5c;\n  height: 22px;\n  padding-left: 5px;\n  padding-top: 2px;\n  width: 60px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #39393cad;\n  border-radius: 5px;\n}\n\n.top-search-icon {\n  position: absolute;\n  right: 30px;\n  color: white;\n  font-size: 1.5rem;\n}\n\n.item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFHSiIsImZpbGUiOiJmYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZS1hLWZhbi10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDk1cHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmNWM7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM5MzkzY2FkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi50b3Atc2VhcmNoLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5pdGVtLXN0eWxlc3tcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2JjYmNiYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggI2NjY2NjZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwMzg7XHJcbn0iXX0= */");

/***/ }),

/***/ "lBs6":
/*!*************************************!*\
  !*** ./src/app/fans/fans.module.ts ***!
  \*************************************/
/*! exports provided: FansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FansPageModule", function() { return FansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _fans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fans-routing.module */ "SG1D");
/* harmony import */ var _fans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fans.page */ "IzeT");







let FansPageModule = class FansPageModule {
};
FansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fans_routing_module__WEBPACK_IMPORTED_MODULE_5__["FansPageRoutingModule"]
        ],
        declarations: [_fans_page__WEBPACK_IMPORTED_MODULE_6__["FansPage"]]
    })
], FansPageModule);



/***/ })

}]);
//# sourceMappingURL=fans-fans-module-es2015.js.map