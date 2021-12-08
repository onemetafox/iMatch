(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["best-moment-comment-best-moment-comment-module"],{

/***/ "0bWo":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/best-moment-comment/best-moment-comment.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>BEST MOMENTS COMMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: #707072;\">\r\n\r\n  <form [formGroup]=\"BestMomentCommentForm\" (ngSubmit)=\"toAddComment()\">\r\n    <div>\r\n\r\n      <ion-item class=\"top-container-item\" lines=\"none\" *ngIf=\"userDetails\">\r\n        <ion-input placeholder=\"Write a comment .....\" type=\"text\" style=\"color:white;\" formControlName=\"comment\" [(ngModel)]=\"userComment.comment\" autocapitalize=\"true\"></ion-input>\r\n        <img [src]=\"userDetails.profile_pic\" alt=\"\" slot=\"end\" class=\"top-person-img\">\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n      <ion-item lines=\"none\" style=\"--background: #707072;\">\r\n        <p class=\"top-left-text\" *ngIf=\"commentDetails\"> {{commentDetails.length}} Comments</p>\r\n        <ion-button slot=\"end\" class=\"top-right-red-button\" (click)=\"toAddComment()\" [disabled]=\"!BestMomentCommentForm.valid\">\r\n          <ion-icon name=\"add-outline\" class=\"add-icon\"></ion-icon>\r\n          ADD YOUR COMMENT</ion-button>\r\n      </ion-item>\r\n    </form>\r\n\r\n    <div style=\"padding: 5px\" *ngFor=\"let comment of commentDetails\">\r\n\r\n      <p style=\"padding-left: 20px; background-color: #9e9e9e; height: 45px; padding-top: 10px;\" *ngIf=\"commentDetails?.length==0\" >Be the first person to leave a comment ....</p>\r\n\r\n      <div style=\"display: flex;\">\r\n        <div style=\"height: 45px; width: 45px; margin-right: 10px; text-align: center; border-radius: 5px;\">\r\n          <img style=\"border-radius: 5px;\" [src]=\"comment.commented_userprofile\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n        </div>\r\n\r\n        <div style=\"background-color: white; width: -webkit-fill-available; border-radius: 5px;\">\r\n          <div style=\"background-color: #a9a9a969; padding: 7px;\">\r\n            \r\n            <span> <strong> {{comment.commented_username}} </strong> </span> <span style=\"font-size: 11px; margin-left: 10px;\"> said on {{comment.commented_at | date}} @ {{comment.commented_at | date:'shortTime'}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding: 15px;\">\r\n            <span> {{comment.comment}} </span>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "3AG3":
/*!***************************************************************************!*\
  !*** ./src/app/best-moment-comment/best-moment-comment-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: BestMomentCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentCommentPageRoutingModule", function() { return BestMomentCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _best_moment_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./best-moment-comment.page */ "8t2y");




const routes = [
    {
        path: '',
        component: _best_moment_comment_page__WEBPACK_IMPORTED_MODULE_3__["BestMomentCommentPage"]
    }
];
let BestMomentCommentPageRoutingModule = class BestMomentCommentPageRoutingModule {
};
BestMomentCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BestMomentCommentPageRoutingModule);



/***/ }),

/***/ "8t2y":
/*!*****************************************************************!*\
  !*** ./src/app/best-moment-comment/best-moment-comment.page.ts ***!
  \*****************************************************************/
/*! exports provided: BestMomentCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentCommentPage", function() { return BestMomentCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_best_moment_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./best-moment-comment.page.html */ "0bWo");
/* harmony import */ var _best_moment_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./best-moment-comment.page.scss */ "XMvl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");







let BestMomentCommentPage = class BestMomentCommentPage {
    constructor(common, storageservice, formbuilder) {
        this.common = common;
        this.storageservice = storageservice;
        this.formbuilder = formbuilder;
        this.FormSubmit = false;
        this.userComment = {
            "comment": ""
        };
        this.userDetails = [];
        this.MomentDetails = [];
        this.commentDetails = [];
        this.BestMomentCommentForm = formbuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
        });
        this.comment = this.BestMomentCommentForm.controls['comment'];
    }
    ngOnInit() {
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
        this.common.route.queryParams.subscribe((resp) => {
            this.MomentDetails = resp;
        });
    }
    ionViewWillEnter() {
        let params = {
            momentid: this.MomentDetails.momentid
        };
        this.common.postMethod('GetMomentComment', params).then((res) => {
            this.commentDetails = res.details;
        }, (err) => {
            console.log('Error:', err);
        });
    }
    toAddComment() {
        let params = {
            userid: this.userDetails.userid,
            momentid: this.MomentDetails.momentid,
            comment: this.userComment.comment
        };
        this.common.postMethod('MomentComment', params).then((res) => {
            if (res.status == true) {
                this.BestMomentCommentForm.reset();
                this.ionViewWillEnter();
            }
            else {
                this.common.presentToast(' 🛑  You Cannot send An Empty Comment !!! ');
            }
        }, (err) => {
            console.log('Error:', err);
        });
    }
};
BestMomentCommentPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
BestMomentCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-best-moment-comment',
        template: _raw_loader_best_moment_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_best_moment_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BestMomentCommentPage);



/***/ }),

/***/ "XMvl":
/*!*******************************************************************!*\
  !*** ./src/app/best-moment-comment/best-moment-comment.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-container-item {\n  --background: #79797b;\n}\n\n.top-person-img {\n  border-radius: 50%;\n  border: 1px solid white;\n  height: 40px;\n  width: 39px;\n  margin-top: 10px;\n  margin-bottom: 8px;\n  background-color: #cac9cb;\n}\n\nh5 {\n  color: white;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.top-left-text {\n  color: white;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.top-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  height: 33px;\n  width: 143px;\n  position: relative;\n  left: 10px;\n}\n\n.add-icon {\n  color: white;\n  font-size: 16px;\n  margin-right: 4px;\n  font-weight: bolder;\n}\n\n.left-profile-img {\n  height: 50px;\n  width: 45px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n  background-color: #eeecedb8;\n}\n\n.container {\n  width: 320px;\n  height: 150px;\n  position: relative;\n  float: right;\n  margin-right: 5px;\n}\n\n.top-item {\n  --background: #eeeced;\n  width: -webkit-fill-available;\n  height: 35px;\n}\n\n.person-name-text {\n  font-weight: 600;\n  font-size: 13px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  padding-bottom: 16px;\n  background-color: #eeeced;\n}\n\n.time-text {\n  font-size: 10px;\n  margin-left: 10px;\n  color: black;\n  padding-bottom: 15px;\n}\n\n.content-text {\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.bottom-small-img-icons {\n  height: 13px;\n  width: 15px;\n}\n\n.bottom-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3QtbW9tZW50LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBY0oiLCJmaWxlIjoiYmVzdC1tb21lbnQtY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lci1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3OTdiO1xyXG59XHJcbi50b3AtcGVyc29uLWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhYzljYjtcclxufVxyXG5oNXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnRvcC1sZWZ0LXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi50b3AtcmlnaHQtcmVkLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmFkZC1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sZWZ0LXByb2ZpbGUtaW1ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2VkYjg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4udG9wLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZWVjZWQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4ucGVyc29uLW5hbWUtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2VkO1xyXG59XHJcbi50aW1lLXRleHR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jb250ZW50LXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYm90dG9tLXNtYWxsLWltZy1pY29uc3tcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcbi5ib3R0b20tcmlnaHQtcmVkLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "tZhb":
/*!*******************************************************************!*\
  !*** ./src/app/best-moment-comment/best-moment-comment.module.ts ***!
  \*******************************************************************/
/*! exports provided: BestMomentCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestMomentCommentPageModule", function() { return BestMomentCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _best_moment_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-moment-comment-routing.module */ "3AG3");
/* harmony import */ var _best_moment_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./best-moment-comment.page */ "8t2y");







let BestMomentCommentPageModule = class BestMomentCommentPageModule {
};
BestMomentCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _best_moment_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestMomentCommentPageRoutingModule"]
        ],
        declarations: [_best_moment_comment_page__WEBPACK_IMPORTED_MODULE_6__["BestMomentCommentPage"]]
    })
], BestMomentCommentPageModule);



/***/ })

}]);
//# sourceMappingURL=best-moment-comment-best-moment-comment-module-es2015.js.map