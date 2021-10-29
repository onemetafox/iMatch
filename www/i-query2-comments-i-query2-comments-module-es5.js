(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i-query2-comments-i-query2-comments-module"], {
    /***/
    "/EmT":
    /*!***********************************************************************!*\
      !*** ./src/app/i-query2-comments/i-query2-comments-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: IQuery2CommentsPageRoutingModule */

    /***/
    function EmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IQuery2CommentsPageRoutingModule", function () {
        return IQuery2CommentsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _i_query2_comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./i-query2-comments.page */
      "q/0E");

      var routes = [{
        path: '',
        component: _i_query2_comments_page__WEBPACK_IMPORTED_MODULE_3__["IQuery2CommentsPage"]
      }];

      var IQuery2CommentsPageRoutingModule = function IQuery2CommentsPageRoutingModule() {
        _classCallCheck(this, IQuery2CommentsPageRoutingModule);
      };

      IQuery2CommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IQuery2CommentsPageRoutingModule);
      /***/
    },

    /***/
    "In4u":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/i-query2-comments/i-query2-comments.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function In4u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">iQuery COMMENTS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: #707072\">\r\n\r\n  <form [formGroup]=\"iQueryCommentForm\" (ngSubmit)=\"toAddComment()\">\r\n    <div>\r\n\r\n      <ion-item class=\"top-container-item\" lines=\"none\" *ngIf=\"userDetails\">\r\n        <ion-input placeholder=\"Write a comment .....\" type=\"text\" style=\"color:white;\" formControlName=\"comment\" [(ngModel)]=\"userComment.comment\" autocapitalize=\"true\"></ion-input>\r\n        <img [src]=\"userDetails.profile_pic\" alt=\"\" slot=\"end\" class=\"top-person-img\">\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n      <ion-item lines=\"none\" style=\"--background: #707072;\">\r\n        <p class=\"top-left-text\" *ngIf=\"commentDetails\"> {{commentDetails.length}} Comments</p>\r\n        <ion-button slot=\"end\" class=\"top-right-red-button\" (click)=\"toAddComment()\" [disabled]=\"!iQueryCommentForm.valid\">\r\n          <ion-icon name=\"add-outline\" class=\"add-icon\"></ion-icon>\r\n          ADD YOUR COMMENT</ion-button>\r\n      </ion-item>\r\n    </form>\r\n\r\n    <div>\r\n      <p style=\"padding-left: 20px; background-color: #9e9e9e; height: 45px; padding-top: 10px;\" *ngIf=\"commentDetails?.length==0\" >Be the first person to leave a comment ....</p>\r\n    <div style=\"background: #707072; height: 152px;\" *ngFor=\"let comment of commentDetails\" class=\"animate__animated animate__fadeIn\">\r\n      <img [src]=\"comment.commented_userprofile\" alt=\"\" class=\"left-profile-img\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <ion-row>\r\n          <ion-item lines=\"none\" class=\"top-item\">\r\n            <h6 class=\"person-name-text\"> {{comment.commented_username}} </h6>\r\n            <p class=\"time-text\">said on {{comment.commented_at | date}} @ {{comment.commented_at | date:'shortTime'}} </p>\r\n          </ion-item>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"background-color: white; height: 60px; width: 320px; border-bottom: 0.5px solid #80808070\">\r\n          <p class=\"content-text\"> {{comment.comment}} </p>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row>\r\n          <ion-item lines=\"none\" style=\"width: -webkit-fill-available; height: 41px;\">\r\n            <p style=\"font-size: 12px;\">\r\n              <img src=\"../../assets/icon/comments/heart.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n              0\r\n            </p>\r\n\r\n            <p style=\"font-size: 12px; margin-left: 15px;\">\r\n              <img src=\"../../assets/icon/comments/heart.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n              0\r\n            </p>\r\n\r\n            <p style=\"font-size: 12px;\">\r\n              <img src=\"../../assets/icon/comments/blog.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n              0\r\n            </p>\r\n\r\n            <ion-button slot=\"end\" size=\"small\" shape=\"round\" class=\"bottom-right-red-button\">REPLY</ion-button>\r\n          </ion-item>\r\n        </ion-row> -->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "XOIJ":
    /*!***************************************************************!*\
      !*** ./src/app/i-query2-comments/i-query2-comments.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function XOIJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-container-item {\n  --background: #79797b;\n}\n\n.top-person-img {\n  border-radius: 50%;\n  border: 1px solid white;\n  height: 40px;\n  width: 39px;\n  margin-top: 10px;\n  margin-bottom: 8px;\n  background-color: #cac9cb;\n}\n\nh5 {\n  color: white;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.top-left-text {\n  color: white;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.top-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  height: 33px;\n  width: 143px;\n  position: relative;\n  left: 10px;\n}\n\n.add-icon {\n  color: white;\n  font-size: 16px;\n  margin-right: 4px;\n  font-weight: bolder;\n}\n\n.left-profile-img {\n  height: 50px;\n  width: 45px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n  background-color: #eeecedb8;\n}\n\n.container {\n  width: 320px;\n  height: 150px;\n  position: relative;\n  float: right;\n  margin-right: 5px;\n}\n\n.top-item {\n  --background: #eeeced;\n  width: -webkit-fill-available;\n  height: 35px;\n}\n\n.person-name-text {\n  font-weight: 600;\n  font-size: 13px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  padding-bottom: 16px;\n  background-color: #eeeced;\n}\n\n.time-text {\n  font-size: 10px;\n  margin-left: 10px;\n  color: black;\n  padding-bottom: 15px;\n}\n\n.content-text {\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.bottom-small-img-icons {\n  height: 13px;\n  width: 15px;\n}\n\n.bottom-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGktcXVlcnkyLWNvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBV0o7O0FBVEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQWNKIiwiZmlsZSI6ImktcXVlcnkyLWNvbW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVyLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3OTc5N2I7XHJcbn1cclxuLnRvcC1wZXJzb24taW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMzlweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjOWNiO1xyXG59XHJcbmg1e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4udG9wLWxlZnQtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnRvcC1yaWdodC1yZWQtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgd2lkdGg6IDE0M3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG4uYWRkLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmxlZnQtcHJvZmlsZS1pbWd7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWRiODtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi50b3AtaXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogI2VlZWNlZDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5wZXJzb24tbmFtZS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWQ7XHJcbn1cclxuLnRpbWUtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNvbnRlbnQtdGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ib3R0b20tc21hbGwtaW1nLWljb25ze1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLmJvdHRvbS1yaWdodC1yZWQtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIGhlaWdodDogMjJweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "aJGD":
    /*!***************************************************************!*\
      !*** ./src/app/i-query2-comments/i-query2-comments.module.ts ***!
      \***************************************************************/

    /*! exports provided: IQuery2CommentsPageModule */

    /***/
    function aJGD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IQuery2CommentsPageModule", function () {
        return IQuery2CommentsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _i_query2_comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./i-query2-comments-routing.module */
      "/EmT");
      /* harmony import */


      var _i_query2_comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./i-query2-comments.page */
      "q/0E");

      var IQuery2CommentsPageModule = function IQuery2CommentsPageModule() {
        _classCallCheck(this, IQuery2CommentsPageModule);
      };

      IQuery2CommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _i_query2_comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["IQuery2CommentsPageRoutingModule"]],
        declarations: [_i_query2_comments_page__WEBPACK_IMPORTED_MODULE_6__["IQuery2CommentsPage"]]
      })], IQuery2CommentsPageModule);
      /***/
    },

    /***/
    "q/0E":
    /*!*************************************************************!*\
      !*** ./src/app/i-query2-comments/i-query2-comments.page.ts ***!
      \*************************************************************/

    /*! exports provided: IQuery2CommentsPage */

    /***/
    function q0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IQuery2CommentsPage", function () {
        return IQuery2CommentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_i_query2_comments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./i-query2-comments.page.html */
      "In4u");
      /* harmony import */


      var _i_query2_comments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./i-query2-comments.page.scss */
      "XOIJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var IQuery2CommentsPage = /*#__PURE__*/function () {
        function IQuery2CommentsPage(storageservice, common, formbuilder) {
          var _this = this;

          _classCallCheck(this, IQuery2CommentsPage);

          this.storageservice = storageservice;
          this.common = common;
          this.formbuilder = formbuilder;
          this.FormSubmit = false;
          this.userDetails = [];
          this.QueryDetails = [];
          this.commentDetails = [];
          this.userComment = {
            "comment": ""
          };
          this.iQueryCommentForm = formbuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
          });
          this.comment = this.iQueryCommentForm.controls['comment'];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.QueryDetails = resp;
            console.log('QueryDetails for comment page:', _this.QueryDetails);
          });
        }

        _createClass(IQuery2CommentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered into iQuery Comment Page');
            var params = {
              queryid: this.QueryDetails.queryid
            };
            console.log('params:', params);
            this.common.postMethod('GetMyiQueryComment', params).then(function (res) {
              console.log('res:', res);
              _this2.commentDetails = res.details.query2;
            });
          }
        }, {
          key: "toAddComment",
          value: function toAddComment() {
            var _this3 = this;

            console.log('Send iQuery Comment Button Clicked');
            var params = {
              userid: this.userDetails.userid,
              queryid: this.QueryDetails.queryid,
              querynum: 'query2',
              comment: this.userComment.comment
            };
            console.log('params:', params);
            this.common.postMethod('Iquerycomment', params).then(function (res) {
              console.log('res:', res);

              _this3.ionViewWillEnter();
            });
          }
        }]);

        return IQuery2CommentsPage;
      }();

      IQuery2CommentsPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      IQuery2CommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-i-query2-comments',
        template: _raw_loader_i_query2_comments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_i_query2_comments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IQuery2CommentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=i-query2-comments-i-query2-comments-module-es5.js.map