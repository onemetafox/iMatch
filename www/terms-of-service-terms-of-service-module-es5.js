(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-of-service-terms-of-service-module"], {
    /***/
    "9Sie":
    /*!*************************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Sie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".check-box {\n  --checkmark-color: #2dd36f;\n  --background-checked: white;\n  --checkmark-width: 5px;\n  --border-radius: 3px;\n  --border-width: 1.5px;\n  position: absolute;\n  margin-left: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlcm1zLW9mLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ0ZXJtcy1vZi1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVjay1ib3h7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzJkZDM2ZjtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZTtcclxuICAgIC0tY2hlY2ttYXJrLXdpZHRoOiA1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Itpn":
    /*!*********************************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: TermsOfServicePageRoutingModule */

    /***/
    function Itpn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServicePageRoutingModule", function () {
        return TermsOfServicePageRoutingModule;
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


      var _terms_of_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./terms-of-service.page */
      "XXTH");

      var routes = [{
        path: '',
        component: _terms_of_service_page__WEBPACK_IMPORTED_MODULE_3__["TermsOfServicePage"]
      }];

      var TermsOfServicePageRoutingModule = function TermsOfServicePageRoutingModule() {
        _classCallCheck(this, TermsOfServicePageRoutingModule);
      };

      TermsOfServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsOfServicePageRoutingModule);
      /***/
    },

    /***/
    "N1TY":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-of-service/terms-of-service.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N1TY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">TERMS OF SERVICE</ion-title>\r\n  </ion-toolbar>\r\n  <div style=\"background-color: #70707221; font-family: OpenSansExtraBold; font-size: 18px; color: #707072; height: 75px;\">\r\n    <img style=\"width: 45px; margin: 18px 0 0 30px;\" src=\"../../assets/icon/help-invitation-terms/terms.png\">\r\n  <div style=\"margin: -48px 0 5px 92px;\">Terms of Service</div>\r\n  \r\n  <div style=\" font-family: OpenSansSemiBold; font-size: 13px; color: #707072; margin: -2px 0 0 96px;\">Updated 10/12/2020</div>\r\n</div>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div>\r\n\r\n      <div style=\"margin-top: 15px; font-family: OpenSansBold; margin-left: 20px; font-size: 12px; margin-right: 5px;\">\r\n        <strong style=\"font-size: 14px;\">1- Terms and Conditions</strong>\r\n        <p style=\"font-family: OpenSansRegular; color:#707072\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat \r\n          scelerisque varius morbi. Praesent semper feugiat nibh sed pulvinar. In est ante in nibh mauris.\r\n        </p>\r\n      \r\n        <strong style=\"font-size: 14px;\">2- Terms and Conditions</strong>\r\n        <p style=\"font-family: OpenSansRegular; color:#707072\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat \r\n          scelerisque varius morbi. Praesent semper feugiat nibh sed pulvinar. In est ante in nibh mauris.\r\n        </p>\r\n      \r\n        <strong style=\"font-size: 14px;\">3- Terms and Conditions</strong>\r\n        <p style=\"font-family: OpenSansRegular; color:#707072\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat \r\n          scelerisque varius morbi. Praesent semper feugiat nibh sed pulvinar. In est ante in nibh mauris.\r\n        </p>\r\n      \r\n      </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" style=\"height: 130px; margin-top: 30px; margin-bottom: -10px;\">\r\n  <ion-checkbox color=\"success\" class=\"check-box\" [(ngModel)]=\"myBoolean_Terms\" (ionChange)=\"onMyBooleanChange()\" ></ion-checkbox>\r\n  <div style=\"font-family: OpenSansRegular; color: #707072; font-size: 12px; margin-left: 47px;\">I agree with the <b style=\"color: black; font-family: OpenSansBold\">Terms and Conditions</b> </div>\r\n  <ion-checkbox color=\"success\" class=\"check-box\" style=\"margin-top: 10px;\" [(ngModel)]=\"myBoolean_Policy\" (ionChange)=\"onMyBooleanChange()\" ></ion-checkbox>\r\n  <div style=\"font-family: OpenSansRegular; color: #707072; font-size: 12px; margin-top: 9px; margin-left: 47px; margin-bottom: 25px;\">I agree with the <b style=\"color: black; font-family: OpenSansBold\">Privacy Policy</b> </div>\r\n  <ion-button shape=\"round\" expand=\"block\" color=\"primary\" style=\"color: white; margin-left: 18px; font-size: 14px; width: 135px; font-family: OpenSansExtraBold;\" (click)=\"onDecline()\">DECLINE</ion-button> \r\n  <ion-button shape=\"round\" expand=\"block\" color=\"warning\" style=\"color: black; margin-top: -40px ;margin-left: 205px; font-size: 14px; width: 135px; font-family: OpenSansExtraBold;\" [disabled]=\"!checkedbtn\" (click)=\"onAccept()\" >ACCEPT</ion-button> \r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "R7o1":
    /*!*************************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service.module.ts ***!
      \*************************************************************/

    /*! exports provided: TermsOfServicePageModule */

    /***/
    function R7o1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServicePageModule", function () {
        return TermsOfServicePageModule;
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


      var _terms_of_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./terms-of-service-routing.module */
      "Itpn");
      /* harmony import */


      var _terms_of_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms-of-service.page */
      "XXTH");

      var TermsOfServicePageModule = function TermsOfServicePageModule() {
        _classCallCheck(this, TermsOfServicePageModule);
      };

      TermsOfServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_of_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsOfServicePageRoutingModule"]],
        declarations: [_terms_of_service_page__WEBPACK_IMPORTED_MODULE_6__["TermsOfServicePage"]]
      })], TermsOfServicePageModule);
      /***/
    },

    /***/
    "XXTH":
    /*!***********************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service.page.ts ***!
      \***********************************************************/

    /*! exports provided: TermsOfServicePage */

    /***/
    function XXTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServicePage", function () {
        return TermsOfServicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_of_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms-of-service.page.html */
      "N1TY");
      /* harmony import */


      var _terms_of_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms-of-service.page.scss */
      "9Sie");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var TermsOfServicePage = /*#__PURE__*/function () {
        function TermsOfServicePage(common) {
          _classCallCheck(this, TermsOfServicePage);

          this.common = common;
          this.checkedbtn = false;
        }

        _createClass(TermsOfServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log('Entered into Terms and Conditions Page');
            document.addEventListener("backbutton", function (e) {// Do nothing
            }, false);
            this.common.menu.swipeGesture(false);
          }
        }, {
          key: "onMyBooleanChange",
          value: function onMyBooleanChange(event) {
            if (this.myBoolean_Terms && this.myBoolean_Policy == true) {
              // this.common.presentToast('You have successfully registered , Please SIGN In to continue to app ...');
              console.log(this.myBoolean_Terms);
              console.log(this.myBoolean_Policy);
              this.checkedbtn = true;
              console.log(this.checkedbtn);
            } else {
              console.log(this.myBoolean_Terms);
              console.log(this.myBoolean_Policy);
              this.checkedbtn = false;
              console.log(this.checkedbtn);
            }
          }
        }, {
          key: "onDecline",
          value: function onDecline() {
            this.common.presentToast('Please read and confirm Terms of service');
          }
        }, {
          key: "onAccept",
          value: function onAccept() {
            this.common.router.navigate(['/login']);
            this.common.presentToast('You have successfully registered , Please SIGN In to continue to app ...');
          }
        }]);

        return TermsOfServicePage;
      }();

      TermsOfServicePage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      TermsOfServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-of-service',
        template: _raw_loader_terms_of_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_of_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsOfServicePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=terms-of-service-terms-of-service-module-es5.js.map