(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["what-would-i-do-visitor-what-would-i-do-visitor-module"], {
    /***/
    "3TFh":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/what-would-i-do-visitor/what-would-i-do-visitor.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TFh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">WHAT WOULD I DO IF..</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content>\r\n  <div class=\"page-content\">\r\n    <div style=\"text-align: center;\">\r\n    </div>\r\n\r\n    <h4 style=\"font-size: 16px; font-weight: 700;\">This week's iQuery</h4>\r\n    <div class=\"comment-div\">\r\n      <div class=\"comment-box-bg\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"message\"> {{message.message1}}</p>\r\n      </div>\r\n      <div class=\"comment-box-bg\" style=\"margin-left: 10px;\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"message\"> {{message.message2}} </p>\r\n      </div>\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n    </div>\r\n\r\n    <h4 style=\"font-size: 16px; font-weight: 700; margin-top: 35px;\">WHAT WOULD YOU DO IF</h4>\r\n\r\n    <div *ngIf=\"answers!=''\">\r\n    <div class=\"comment-div\">\r\n      <div class=\"comment-box-bg\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"answers\"> {{answers.answer1}} </p>\r\n      </div>\r\n      <div class=\"comment-box-bg\" style=\"margin-left: 10px;\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"answers\"> {{answers.answer2}} </p>\r\n      </div>\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n    </div>\r\n\r\n    <div style=\"display: flex; font-size: 12px; font-weight: 600; justify-content: center; margin-bottom: 15px\" *ngFor=\"let Query of MyiQuery\">\r\n      <div>\r\n        <p> {{Query.query1}} </p>\r\n        <img *ngIf=\"Query.total_likecount_query1=='0'\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toLikeiQuery1($event,Query)\">\r\n        <img *ngIf=\"Query.total_likecount_query1!='0'\" src=\"../../assets/icon/what_would/shoot.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toLikeiQuery1($event,Query)\"> <span style=\"position: relative; bottom: 5px; left: 2px;\"> {{Query.total_likecount_query1}} </span>\r\n        <img src=\"../../assets/icon/besties/comment.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toCommentiQuery1($event,Query)\"> <span style=\"position: relative; bottom: 6px; left: 2px;\"> {{Query.total_commentcount_query1}} </span>\r\n      </div>\r\n\r\n      <div>\r\n        <p> {{Query.query2}} </p>\r\n            <img *ngIf=\"Query.total_likecount_query2=='0'\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toLikeiQuery2($event,Query)\">\r\n            <img *ngIf=\"Query.total_likecount_query2!='0'\"src=\"../../assets/icon/what_would/shoot.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toLikeiQuery2($event,Query)\"> <span style=\"position: relative; bottom: 5px; left: 2px;\"> {{Query.total_likecount_query2}} </span>\r\n            <img src=\"../../assets/icon/besties/comment.png\" alt=\"\" style=\"height: 20px; width: 25px; margin-left: 15px;\" (click)=\"toCommentiQuery2($event,Query)\"> <span style=\"position: relative; bottom: 6px; left: 5px;\"> {{Query.total_commentcount_query2}} </span>\r\n          </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "8uHp":
    /*!***********************************************************************************!*\
      !*** ./src/app/what-would-i-do-visitor/what-would-i-do-visitor-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: WhatWouldIDoVisitorPageRoutingModule */

    /***/
    function uHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoVisitorPageRoutingModule", function () {
        return WhatWouldIDoVisitorPageRoutingModule;
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


      var _what_would_i_do_visitor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./what-would-i-do-visitor.page */
      "bg0I");

      var routes = [{
        path: '',
        component: _what_would_i_do_visitor_page__WEBPACK_IMPORTED_MODULE_3__["WhatWouldIDoVisitorPage"]
      }];

      var WhatWouldIDoVisitorPageRoutingModule = function WhatWouldIDoVisitorPageRoutingModule() {
        _classCallCheck(this, WhatWouldIDoVisitorPageRoutingModule);
      };

      WhatWouldIDoVisitorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WhatWouldIDoVisitorPageRoutingModule);
      /***/
    },

    /***/
    "Lf6p":
    /*!***************************************************************************!*\
      !*** ./src/app/what-would-i-do-visitor/what-would-i-do-visitor.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Lf6p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n  height: 50px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n/* PAGE CONTENT */\n.page-content {\n  padding: 10px;\n}\n.comment-div {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n.comment-box {\n  padding: 15px;\n  background: #f3f3f3;\n  box-shadow: 0.5px 0.5px 4.5px -0.5px;\n  border-radius: 5px;\n  font-size: 11px;\n  width: 50%;\n  height: 110px;\n  line-height: 17px;\n  font-weight: 700;\n}\n.comment-box-bg {\n  padding: 15px;\n  background-image: url('w-bg.png');\n  box-shadow: 0.5px 0.5px 4.5px -0.5px;\n  border-radius: 5px;\n  font-size: 11px;\n  width: 50%;\n  height: 110px;\n  line-height: 17px;\n  font-weight: 700;\n  background-size: contain;\n}\n.box-image {\n  position: absolute;\n  width: 28px;\n  height: 25px;\n  top: 87px;\n  left: 10px;\n  border: 1px solid #9eacad;\n  padding: 3px;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.box-image_two {\n  position: absolute;\n  width: 28px;\n  height: 25px;\n  top: 87px;\n  left: 200px;\n  border: 1px solid #9eacad;\n  padding: 3px;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.add-button {\n  font-size: 9px;\n  margin-left: 5px;\n  background: #919292;\n  border-radius: 20px;\n  color: #ffffff;\n  padding-left: 0;\n  height: 25px;\n  text-transform: capitalize;\n}\n.comment-area {\n  margin: 0 auto;\n  border-radius: 20px;\n  width: 200px;\n  display: flex;\n  border: 1px solid #919292;\n  align-items: center;\n  font-size: 12px;\n  height: 30px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdoYXQtd291bGQtaS1kby12aXNpdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBLGlCQUFBO0FBQ0E7RUFDSSxhQUFBO0FBQUo7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBR0o7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFNSjtBQUpBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU9KIiwiZmlsZSI6IndoYXQtd291bGQtaS1kby12aXNpdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbi50YWJvbmVfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXJfbGVmdCB7XHJcbiAgICBcclxufVxyXG4udGFib25lX2hlYWRlcl9yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4vKiBQQUdFIENPTlRFTlQgKi9cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jb21tZW50LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29tbWVudC1ib3gge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA0LjVweCAtMC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uY29tbWVudC1ib3gtYmcge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vd2hhdF93b3VsZC93LWJnLnBuZycpO1xyXG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggNC41cHggLTAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLmJveC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRvcDogODdweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWVhY2FkO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uYm94LWltYWdlX3R3byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRvcDogODdweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzllYWNhZDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmFkZC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkxOTI5MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5jb21tZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MTkyOTI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "R+Sz":
    /*!***************************************************************************!*\
      !*** ./src/app/what-would-i-do-visitor/what-would-i-do-visitor.module.ts ***!
      \***************************************************************************/

    /*! exports provided: WhatWouldIDoVisitorPageModule */

    /***/
    function RSz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoVisitorPageModule", function () {
        return WhatWouldIDoVisitorPageModule;
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


      var _what_would_i_do_visitor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./what-would-i-do-visitor-routing.module */
      "8uHp");
      /* harmony import */


      var _what_would_i_do_visitor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./what-would-i-do-visitor.page */
      "bg0I");

      var WhatWouldIDoVisitorPageModule = function WhatWouldIDoVisitorPageModule() {
        _classCallCheck(this, WhatWouldIDoVisitorPageModule);
      };

      WhatWouldIDoVisitorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _what_would_i_do_visitor_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhatWouldIDoVisitorPageRoutingModule"]],
        declarations: [_what_would_i_do_visitor_page__WEBPACK_IMPORTED_MODULE_6__["WhatWouldIDoVisitorPage"]]
      })], WhatWouldIDoVisitorPageModule);
      /***/
    },

    /***/
    "bg0I":
    /*!*************************************************************************!*\
      !*** ./src/app/what-would-i-do-visitor/what-would-i-do-visitor.page.ts ***!
      \*************************************************************************/

    /*! exports provided: WhatWouldIDoVisitorPage */

    /***/
    function bg0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoVisitorPage", function () {
        return WhatWouldIDoVisitorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_what_would_i_do_visitor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./what-would-i-do-visitor.page.html */
      "3TFh");
      /* harmony import */


      var _what_would_i_do_visitor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./what-would-i-do-visitor.page.scss */
      "Lf6p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");

      var WhatWouldIDoVisitorPage = /*#__PURE__*/function () {
        function WhatWouldIDoVisitorPage(common) {
          var _this = this;

          _classCallCheck(this, WhatWouldIDoVisitorPage);

          this.common = common;
          this.userArray = [];
          this.showCommentBox = false;
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userArray = resp;
            console.log('userArray:', _this.userArray);
          });
        }

        _createClass(WhatWouldIDoVisitorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered into What Would I Do If Visitors page');
            var params = {
              userid: this.userArray.userid
            };
            console.log('params:', params);
            this.common.postMethod('GetAdminMessage', params).then(function (res) {
              console.log('res:', res);
              _this2.message = res.details.adminmessage;
              _this2.answers = res.details.answers;
              _this2.MyiQuery = res.details.MyiQuery;
              console.log('MyiQuery:', _this2.MyiQuery);
            });
          }
        }, {
          key: "toCommentiQuery1",
          value: function toCommentiQuery1(event, Query) {
            console.log('Comment iQuery 1 Clicked');
            console.log('Query:', Query);
            this.common.navCtrl.navigateForward(['/i-query-comments'], {
              queryParams: Query
            });
          }
        }, {
          key: "toCommentiQuery2",
          value: function toCommentiQuery2(event, Query) {
            console.log('Comment iQuery 2 Clicked');
            console.log('Query:', Query);
            this.common.navCtrl.navigateForward(['/i-query2-comments'], {
              queryParams: Query
            });
          }
        }, {
          key: "toLikeiQuery1",
          value: function toLikeiQuery1(event, Query) {
            var _this3 = this;

            console.log('Like iQuery 1 Clicked');
            var params = {
              userid: this.userArray.userid,
              queryid: Query.queryid,
              querynum: 'query1',
              status: 'like'
            };
            console.log('params:', params);
            console.log('Query:', Query);
            this.common.postMethod('Myiquerylike', params).then(function (res) {
              console.log('res:', res);

              _this3.ionViewWillEnter();
            });
          }
        }, {
          key: "toLikeiQuery2",
          value: function toLikeiQuery2(event, Query) {
            var _this4 = this;

            console.log('Like iQuery 2 Clicked');
            var params = {
              userid: this.userArray.userid,
              queryid: Query.queryid,
              querynum: 'query2',
              status: 'like'
            };
            console.log('params:', params);
            console.log('Query:', Query);
            this.common.postMethod('Myiquerylike', params).then(function (res) {
              console.log('res:', res);

              _this4.ionViewWillEnter();
            });
          }
        }]);

        return WhatWouldIDoVisitorPage;
      }();

      WhatWouldIDoVisitorPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      WhatWouldIDoVisitorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-what-would-i-do-visitor',
        template: _raw_loader_what_would_i_do_visitor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_what_would_i_do_visitor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WhatWouldIDoVisitorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=what-would-i-do-visitor-what-would-i-do-visitor-module-es5.js.map