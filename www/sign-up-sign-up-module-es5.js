(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
    /***/
    "kEuc":
    /*!*******************************************!*\
      !*** ./src/app/sign-up/sign-up.module.ts ***!
      \*******************************************/

    /*! exports provided: SignUpPageModule */

    /***/
    function kEuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
        return SignUpPageModule;
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


      var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-up-routing.module */
      "tUD1");
      /* harmony import */


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sign-up.page */
      "v2PJ");

      var SignUpPageModule = function SignUpPageModule() {
        _classCallCheck(this, SignUpPageModule);
      };

      SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
      })], SignUpPageModule);
      /***/
    },

    /***/
    "mydc":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function mydc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-content class=\"bg\">\r\n\r\n  <div style=\"text-align: center; margin-top: 80px;\">\r\n    <img src=\"../../assets/icon/sign-up/logo.png\" alt=\"\" class=\"logo-img\">\r\n  </div>\r\n\r\n    <div style=\"padding:30px; margin-top: 30px;\">\r\n\r\n      <form [formGroup]=\"formgroup\" (ngSubmit)=\"signUp()\"> \r\n\r\n    <ion-row>\r\n      <ion-input formControlName=\"name\" [(ngModel)]=\"userData.name\" placeholder=\"Name\" class=\"input-field\" type=\"text\" autocapitalize=\"true\">\r\n        <img src=\"../../assets/icon/sign-up/user.png\" alt=\"\" class=\"text-field-icons\">\r\n        </ion-input>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-input formControlName=\"phone\" [(ngModel)]=\"userData.phone\" placeholder=\"Phone Number\" class=\"input-field\" type=\"number\">\r\n        <img src=\"../../assets/icon/sign-up/phone.png\" alt=\"\" class=\"text-field-icons\">\r\n\r\n      <ion-select  type=\"text\" formControlName=\"code\" [(ngModel)]=\"userData.code\" style=\"padding: 0px;\" placeholder=\"🇳🇬NG+234\" class=\"select-code\" value=\"🇳🇬 NG +234\"> \r\n        <ion-select-option *ngFor=\"let flag of flags\" value=\"{{flag.dial_code}}\"><span>{{flag.flag}}</span>  <span>({{flag.code}})</span> <span>{{flag.dial_code}}</span></ion-select-option>\r\n      </ion-select>\r\n        </ion-input>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-input formControlName=\"email\" [(ngModel)]=\"userData.email\" placeholder=\"Email   (eg: Example@gmail.com)\" class=\"input-field\" autocapitalize=\"true\">\r\n        <img src=\"../../assets/icon/sign-up/email.png\" alt=\"\" class=\"text-field-icons\">\r\n        </ion-input>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-input formControlName=\"password\" [(ngModel)]=\"userData.password\" placeholder=\"Password   (eg: Example01)\" class=\"input-field\" type=\"Password\">\r\n        <img src=\"../../assets/icon/sign-up/lock.png\" alt=\"\" class=\"text-field-icons\">\r\n        </ion-input>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row>\r\n      <ion-input formControlName=\"university\" [(ngModel)]=\"userData.university\" placeholder=\"University Name\" class=\"input-field\" type=\"text\" autocapitalize=\"true\">\r\n        <img src=\"../../assets/icon/sign-up/university.png\" alt=\"\" class=\"text-field-icons\">\r\n        </ion-input>\r\n    </ion-row> -->\r\n\r\n      <ion-button type=\"submit\" shape=\"round\" expand=\"block\" class=\"button-sign-up\"> SIGN UP </ion-button>\r\n\r\n      <div>\r\n        <p style=\"color: #c0bfc0;margin-left: 24px;font-size: 13px;text-align: center;\">Already have an account ? \r\n          <ion-button fill=\"clear\" style=\"color: #ea6850;margin-bottom: 15px;margin-left: -10px;\" [routerLink]=\"['/login']\" value=\"refresh\">Sign in</ion-button> </p>\r\n      </div>\r\n\r\n      </form>\r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "p7nS":
    /*!*******************************************!*\
      !*** ./src/app/sign-up/sign-up.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function p7nS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg {\n  --background: #fff url('bg3.jpg') no-repeat center center / cover;\n}\n\n.logo-img {\n  height: 55px;\n  max-width: 195px;\n}\n\n.input-field {\n  border: 1px solid white;\n  border-radius: 25px;\n  background: #36343585;\n  height: 42px;\n  margin-bottom: 15px;\n  color: white;\n  font-size: 15px;\n}\n\n.button-sign-up {\n  --background: #fcbb3b;\n  height: 45px;\n  margin-top: 15px;\n  color: black;\n  font-weight: 800;\n  font-size: small;\n}\n\n.text-field-icons {\n  height: 16px;\n  width: 16px;\n  margin-left: 15px;\n  margin-right: 7px;\n}\n\nion-button {\n  text-transform: none;\n}\n\n.validation {\n  color: white;\n  text-align: center;\n  font-size: 10px;\n}\n\n.select-code {\n  --placeholder-color: #878686 !important;\n  --placeholder-opacity: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksb0JBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRztFQUNDLHVDQUFBO0VBQ0EsMEJBQUE7QUFNSiIsImZpbGUiOiJzaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2xhbmRpbmcvYmczLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLmxvZ28taW1ne1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxOTVweDtcclxufVxyXG4uaW5wdXQtZmllbGR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYzNDM1ODU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBcclxufVxyXG4uYnV0dG9uLXNpZ24tdXB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmY2JiM2I7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLnRleHQtZmllbGQtaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgfVxyXG5cclxuLnZhbGlkYXRpb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgIH1cclxuICAgLnNlbGVjdC1jb2Rle1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzg3ODY4NiAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwcHg7XHJcbiAgIH1cclxuIl19 */";
      /***/
    },

    /***/
    "tUD1":
    /*!***************************************************!*\
      !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: SignUpPageRoutingModule */

    /***/
    function tUD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
        return SignUpPageRoutingModule;
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


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up.page */
      "v2PJ");

      var routes = [{
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
      }];

      var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
        _classCallCheck(this, SignUpPageRoutingModule);
      };

      SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignUpPageRoutingModule);
      /***/
    },

    /***/
    "v2PJ":
    /*!*****************************************!*\
      !*** ./src/app/sign-up/sign-up.page.ts ***!
      \*****************************************/

    /*! exports provided: SignUpPage */

    /***/
    function v2PJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
        return SignUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "mydc");
      /* harmony import */


      var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up.page.scss */
      "p7nS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var SignUpPage = /*#__PURE__*/function () {
        function SignUpPage(common, formbuilder, geolocation, storageservice) {
          _classCallCheck(this, SignUpPage);

          this.common = common;
          this.formbuilder = formbuilder;
          this.geolocation = geolocation;
          this.storageservice = storageservice;
          this.FormSubmit = false; //   university:AbstractControl;

          this.userData = {
            "name": "",
            "code": "",
            "phone": "",
            "email": "",
            "password": ""
          };
          this.DeviceToken = [];
          this.responseData = [];
          this.DeviceInfo = [];
          this.UserLocation = [];
          this.flags = [{
            "name": "Afghanistan",
            "flag": "🇦🇫",
            "code": "AF",
            "dial_code": "+93"
          }, {
            "name": "Åland Islands",
            "flag": "🇦🇽",
            "code": "AX",
            "dial_code": "+358"
          }, {
            "name": "Albania",
            "flag": "🇦🇱",
            "code": "AL",
            "dial_code": "+355"
          }, {
            "name": "Algeria",
            "flag": "🇩🇿",
            "code": "DZ",
            "dial_code": "+213"
          }, {
            "name": "American Samoa",
            "flag": "🇦🇸",
            "code": "AS",
            "dial_code": "+1684"
          }, {
            "name": "Andorra",
            "flag": "🇦🇩",
            "code": "AD",
            "dial_code": "+376"
          }, {
            "name": "Angola",
            "flag": "🇦🇴",
            "code": "AO",
            "dial_code": "+244"
          }, {
            "name": "Anguilla",
            "flag": "🇦🇮",
            "code": "AI",
            "dial_code": "+1264"
          }, {
            "name": "Antarctica",
            "flag": "🇦🇶",
            "code": "AQ",
            "dial_code": "+672"
          }, {
            "name": "Antigua and Barbuda",
            "flag": "🇦🇬",
            "code": "AG",
            "dial_code": "+1268"
          }, {
            "name": "Argentina",
            "flag": "🇦🇷",
            "code": "AR",
            "dial_code": "+54"
          }, {
            "name": "Armenia",
            "flag": "🇦🇲",
            "code": "AM",
            "dial_code": "+374"
          }, {
            "name": "Aruba",
            "flag": "🇦🇼",
            "code": "AW",
            "dial_code": "+297"
          }, {
            "name": "Australia",
            "flag": "🇦🇺",
            "code": "AU",
            "dial_code": "+61"
          }, {
            "name": "Austria",
            "flag": "🇦🇹",
            "code": "AT",
            "dial_code": "+43"
          }, {
            "name": "Azerbaijan",
            "flag": "🇦🇿",
            "code": "AZ",
            "dial_code": "+994"
          }, {
            "name": "Bahamas",
            "flag": "🇧🇸",
            "code": "BS",
            "dial_code": "+1242"
          }, {
            "name": "Bahrain",
            "flag": "🇧🇭",
            "code": "BH",
            "dial_code": "+973"
          }, {
            "name": "Bangladesh",
            "flag": "🇧🇩",
            "code": "BD",
            "dial_code": "+880"
          }, {
            "name": "Barbados",
            "flag": "🇧🇧",
            "code": "BB",
            "dial_code": "+1246"
          }, {
            "name": "Belarus",
            "flag": "🇧🇾",
            "code": "BY",
            "dial_code": "+375"
          }, {
            "name": "Belgium",
            "flag": "🇧🇪",
            "code": "BE",
            "dial_code": "+32"
          }, {
            "name": "Belize",
            "flag": "🇧🇿",
            "code": "BZ",
            "dial_code": "+501"
          }, {
            "name": "Benin",
            "flag": "🇧🇯",
            "code": "BJ",
            "dial_code": "+229"
          }, {
            "name": "Bermuda",
            "flag": "🇧🇲",
            "code": "BM",
            "dial_code": "+1441"
          }, {
            "name": "Bhutan",
            "flag": "🇧🇹",
            "code": "BT",
            "dial_code": "+975"
          }, {
            "name": "Bolivia, Plurinational State of bolivia",
            "flag": "🇧🇴",
            "code": "BO",
            "dial_code": "+591"
          }, {
            "name": "Bosnia and Herzegovina",
            "flag": "🇧🇦",
            "code": "BA",
            "dial_code": "+387"
          }, {
            "name": "Botswana",
            "flag": "🇧🇼",
            "code": "BW",
            "dial_code": "+267"
          }, {
            "name": "Bouvet Island",
            "flag": "🇧🇻",
            "code": "BV",
            "dial_code": "+47"
          }, {
            "name": "Brazil",
            "flag": "🇧🇷",
            "code": "BR",
            "dial_code": "+55"
          }, {
            "name": "British Indian Ocean Territory",
            "flag": "🇮🇴",
            "code": "IO",
            "dial_code": "+246"
          }, {
            "name": "Brunei Darussalam",
            "flag": "🇧🇳",
            "code": "BN",
            "dial_code": "+673"
          }, {
            "name": "Bulgaria",
            "flag": "🇧🇬",
            "code": "BG",
            "dial_code": "+359"
          }, {
            "name": "Burkina Faso",
            "flag": "🇧🇫",
            "code": "BF",
            "dial_code": "+226"
          }, {
            "name": "Burundi",
            "flag": "🇧🇮",
            "code": "BI",
            "dial_code": "+257"
          }, {
            "name": "Cambodia",
            "flag": "🇰🇭",
            "code": "KH",
            "dial_code": "+855"
          }, {
            "name": "Cameroon",
            "flag": "🇨🇲",
            "code": "CM",
            "dial_code": "+237"
          }, {
            "name": "Canada",
            "flag": "🇨🇦",
            "code": "CA",
            "dial_code": "+1"
          }, {
            "name": "Cape Verde",
            "flag": "🇨🇻",
            "code": "CV",
            "dial_code": "+238"
          }, {
            "name": "Cayman Islands",
            "flag": "🇰🇾",
            "code": "KY",
            "dial_code": "+345"
          }, {
            "name": "Central African Republic",
            "flag": "🇨🇫",
            "code": "CF",
            "dial_code": "+236"
          }, {
            "name": "Chad",
            "flag": "🇹🇩",
            "code": "TD",
            "dial_code": "+235"
          }, {
            "name": "Chile",
            "flag": "🇨🇱",
            "code": "CL",
            "dial_code": "+56"
          }, {
            "name": "China",
            "flag": "🇨🇳",
            "code": "CN",
            "dial_code": "+86"
          }, {
            "name": "Christmas Island",
            "flag": "🇨🇽",
            "code": "CX",
            "dial_code": "+61"
          }, {
            "name": "Cocos (Keeling) Islands",
            "flag": "🇨🇨",
            "code": "CC",
            "dial_code": "+61"
          }, {
            "name": "Colombia",
            "flag": "🇨🇴",
            "code": "CO",
            "dial_code": "+57"
          }, {
            "name": "Comoros",
            "flag": "🇰🇲",
            "code": "KM",
            "dial_code": "+269"
          }, {
            "name": "Congo",
            "flag": "🇨🇬",
            "code": "CG",
            "dial_code": "+242"
          }, {
            "name": "Congo, The Democratic Republic of the Congo",
            "flag": "🇨🇩",
            "code": "CD",
            "dial_code": "+243"
          }, {
            "name": "Cook Islands",
            "flag": "🇨🇰",
            "code": "CK",
            "dial_code": "+682"
          }, {
            "name": "Costa Rica",
            "flag": "🇨🇷",
            "code": "CR",
            "dial_code": "+506"
          }, {
            "name": "Cote d'Ivoire",
            "flag": "🇨🇮",
            "code": "CI",
            "dial_code": "+225"
          }, {
            "name": "Croatia",
            "flag": "🇭🇷",
            "code": "HR",
            "dial_code": "+385"
          }, {
            "name": "Cuba",
            "flag": "🇨🇺",
            "code": "CU",
            "dial_code": "+53"
          }, {
            "name": "Cyprus",
            "flag": "🇨🇾",
            "code": "CY",
            "dial_code": "+357"
          }, {
            "name": "Czech Republic",
            "flag": "🇨🇿",
            "code": "CZ",
            "dial_code": "+420"
          }, {
            "name": "Denmark",
            "flag": "🇩🇰",
            "code": "DK",
            "dial_code": "+45"
          }, {
            "name": "Djibouti",
            "flag": "🇩🇯",
            "code": "DJ",
            "dial_code": "+253"
          }, {
            "name": "Dominica",
            "flag": "🇩🇲",
            "code": "DM",
            "dial_code": "+1767"
          }, {
            "name": "Dominican Republic",
            "flag": "🇩🇴",
            "code": "DO",
            "dial_code": "+1849"
          }, {
            "name": "Ecuador",
            "flag": "🇪🇨",
            "code": "EC",
            "dial_code": "+593"
          }, {
            "name": "Egypt",
            "flag": "🇪🇬",
            "code": "EG",
            "dial_code": "+20"
          }, {
            "name": "El Salvador",
            "flag": "🇸🇻",
            "code": "SV",
            "dial_code": "+503"
          }, {
            "name": "Equatorial Guinea",
            "flag": "🇬🇶",
            "code": "GQ",
            "dial_code": "+240"
          }, {
            "name": "Eritrea",
            "flag": "🇪🇷",
            "code": "ER",
            "dial_code": "+291"
          }, {
            "name": "Estonia",
            "flag": "🇪🇪",
            "code": "EE",
            "dial_code": "+372"
          }, {
            "name": "Ethiopia",
            "flag": "🇪🇹",
            "code": "ET",
            "dial_code": "+251"
          }, {
            "name": "Falkland Islands (Malvinas)",
            "flag": "🇫🇰",
            "code": "FK",
            "dial_code": "+500"
          }, {
            "name": "Faroe Islands",
            "flag": "🇫🇴",
            "code": "FO",
            "dial_code": "+298"
          }, {
            "name": "Fiji",
            "flag": "🇫🇯",
            "code": "FJ",
            "dial_code": "+679"
          }, {
            "name": "Finland",
            "flag": "🇫🇮",
            "code": "FI",
            "dial_code": "+358"
          }, {
            "name": "France",
            "flag": "🇫🇷",
            "code": "FR",
            "dial_code": "+33"
          }, {
            "name": "French Guiana",
            "flag": "🇬🇫",
            "code": "GF",
            "dial_code": "+594"
          }, {
            "name": "French Polynesia",
            "flag": "🇵🇫",
            "code": "PF",
            "dial_code": "+689"
          }, {
            "name": "French Southern Territories",
            "flag": "🇹🇫",
            "code": "TF",
            "dial_code": "+262"
          }, {
            "name": "Gabon",
            "flag": "🇬🇦",
            "code": "GA",
            "dial_code": "+241"
          }, {
            "name": "Gambia",
            "flag": "🇬🇲",
            "code": "GM",
            "dial_code": "+220"
          }, {
            "name": "Georgia",
            "flag": "🇬🇪",
            "code": "GE",
            "dial_code": "+995"
          }, {
            "name": "Germany",
            "flag": "🇩🇪",
            "code": "DE",
            "dial_code": "+49"
          }, {
            "name": "Ghana",
            "flag": "🇬🇭",
            "code": "GH",
            "dial_code": "+233"
          }, {
            "name": "Gibraltar",
            "flag": "🇬🇮",
            "code": "GI",
            "dial_code": "+350"
          }, {
            "name": "Greece",
            "flag": "🇬🇷",
            "code": "GR",
            "dial_code": "+30"
          }, {
            "name": "Greenland",
            "flag": "🇬🇱",
            "code": "GL",
            "dial_code": "+299"
          }, {
            "name": "Grenada",
            "flag": "🇬🇩",
            "code": "GD",
            "dial_code": "+1473"
          }, {
            "name": "Guadeloupe",
            "flag": "🇬🇵",
            "code": "GP",
            "dial_code": "+590"
          }, {
            "name": "Guam",
            "flag": "🇬🇺",
            "code": "GU",
            "dial_code": "+1671"
          }, {
            "name": "Guatemala",
            "flag": "🇬🇹",
            "code": "GT",
            "dial_code": "+502"
          }, {
            "name": "Guernsey",
            "flag": "🇬🇬",
            "code": "GG",
            "dial_code": "+44"
          }, {
            "name": "Guinea",
            "flag": "🇬🇳",
            "code": "GN",
            "dial_code": "+224"
          }, {
            "name": "Guinea-Bissau",
            "flag": "🇬🇼",
            "code": "GW",
            "dial_code": "+245"
          }, {
            "name": "Guyana",
            "flag": "🇬🇾",
            "code": "GY",
            "dial_code": "+592"
          }, {
            "name": "Haiti",
            "flag": "🇭🇹",
            "code": "HT",
            "dial_code": "+509"
          }, {
            "name": "Heard Island and Mcdonald Islands",
            "flag": "🇭🇲",
            "code": "HM",
            "dial_code": "+672"
          }, {
            "name": "Holy See (Vatican City State)",
            "flag": "🇻🇦",
            "code": "VA",
            "dial_code": "+379"
          }, {
            "name": "Honduras",
            "flag": "🇭🇳",
            "code": "HN",
            "dial_code": "+504"
          }, {
            "name": "Hong Kong",
            "flag": "🇭🇰",
            "code": "HK",
            "dial_code": "+852"
          }, {
            "name": "Hungary",
            "flag": "🇭🇺",
            "code": "HU",
            "dial_code": "+36"
          }, {
            "name": "Iceland",
            "flag": "🇮🇸",
            "code": "IS",
            "dial_code": "+354"
          }, {
            "name": "India",
            "flag": "🇮🇳",
            "code": "IN",
            "dial_code": "+91"
          }, {
            "name": "Indonesia",
            "flag": "🇮🇩",
            "code": "ID",
            "dial_code": "+62"
          }, {
            "name": "Iran, Islamic Republic of Persian Gulf",
            "flag": "🇮🇷",
            "code": "IR",
            "dial_code": "+98"
          }, {
            "name": "Iraq",
            "flag": "🇮🇶",
            "code": "IQ",
            "dial_code": "+964"
          }, {
            "name": "Ireland",
            "flag": "🇮🇪",
            "code": "IE",
            "dial_code": "+353"
          }, {
            "name": "Isle of Man",
            "flag": "🇮🇲",
            "code": "IM",
            "dial_code": "+44"
          }, {
            "name": "Israel",
            "flag": "🇮🇱",
            "code": "IL",
            "dial_code": "+972"
          }, {
            "name": "Italy",
            "flag": "🇮🇹",
            "code": "IT",
            "dial_code": "+39"
          }, {
            "name": "Jamaica",
            "flag": "🇯🇲",
            "code": "JM",
            "dial_code": "+1876"
          }, {
            "name": "Japan",
            "flag": "🇯🇵",
            "code": "JP",
            "dial_code": "+81"
          }, {
            "name": "Jersey",
            "flag": "🇯🇪",
            "code": "JE",
            "dial_code": "+44"
          }, {
            "name": "Jordan",
            "flag": "🇯🇴",
            "code": "JO",
            "dial_code": "+962"
          }, {
            "name": "Kazakhstan",
            "flag": "🇰🇿",
            "code": "KZ",
            "dial_code": "+7"
          }, {
            "name": "Kenya",
            "flag": "🇰🇪",
            "code": "KE",
            "dial_code": "+254"
          }, {
            "name": "Kiribati",
            "flag": "🇰🇮",
            "code": "KI",
            "dial_code": "+686"
          }, {
            "name": "Korea, Democratic People's Republic of Korea",
            "flag": "🇰🇵",
            "code": "KP",
            "dial_code": "+850"
          }, {
            "name": "Korea, Republic of South Korea",
            "flag": "🇰🇷",
            "code": "KR",
            "dial_code": "+82"
          }, {
            "name": "Kosovo",
            "flag": "🇽🇰",
            "code": "XK",
            "dial_code": "+383"
          }, {
            "name": "Kuwait",
            "flag": "🇰🇼",
            "code": "KW",
            "dial_code": "+965"
          }, {
            "name": "Kyrgyzstan",
            "flag": "🇰🇬",
            "code": "KG",
            "dial_code": "+996"
          }, {
            "name": "Laos",
            "flag": "🇱🇦",
            "code": "LA",
            "dial_code": "+856"
          }, {
            "name": "Latvia",
            "flag": "🇱🇻",
            "code": "LV",
            "dial_code": "+371"
          }, {
            "name": "Lebanon",
            "flag": "🇱🇧",
            "code": "LB",
            "dial_code": "+961"
          }, {
            "name": "Lesotho",
            "flag": "🇱🇸",
            "code": "LS",
            "dial_code": "+266"
          }, {
            "name": "Liberia",
            "flag": "🇱🇷",
            "code": "LR",
            "dial_code": "+231"
          }, {
            "name": "Libyan Arab Jamahiriya",
            "flag": "🇱🇾",
            "code": "LY",
            "dial_code": "+218"
          }, {
            "name": "Liechtenstein",
            "flag": "🇱🇮",
            "code": "LI",
            "dial_code": "+423"
          }, {
            "name": "Lithuania",
            "flag": "🇱🇹",
            "code": "LT",
            "dial_code": "+370"
          }, {
            "name": "Luxembourg",
            "flag": "🇱🇺",
            "code": "LU",
            "dial_code": "+352"
          }, {
            "name": "Macao",
            "flag": "🇲🇴",
            "code": "MO",
            "dial_code": "+853"
          }, {
            "name": "Macedonia",
            "flag": "🇲🇰",
            "code": "MK",
            "dial_code": "+389"
          }, {
            "name": "Madagascar",
            "flag": "🇲🇬",
            "code": "MG",
            "dial_code": "+261"
          }, {
            "name": "Malawi",
            "flag": "🇲🇼",
            "code": "MW",
            "dial_code": "+265"
          }, {
            "name": "Malaysia",
            "flag": "🇲🇾",
            "code": "MY",
            "dial_code": "+60"
          }, {
            "name": "Maldives",
            "flag": "🇲🇻",
            "code": "MV",
            "dial_code": "+960"
          }, {
            "name": "Mali",
            "flag": "🇲🇱",
            "code": "ML",
            "dial_code": "+223"
          }, {
            "name": "Malta",
            "flag": "🇲🇹",
            "code": "MT",
            "dial_code": "+356"
          }, {
            "name": "Marshall Islands",
            "flag": "🇲🇭",
            "code": "MH",
            "dial_code": "+692"
          }, {
            "name": "Martinique",
            "flag": "🇲🇶",
            "code": "MQ",
            "dial_code": "+596"
          }, {
            "name": "Mauritania",
            "flag": "🇲🇷",
            "code": "MR",
            "dial_code": "+222"
          }, {
            "name": "Mauritius",
            "flag": "🇲🇺",
            "code": "MU",
            "dial_code": "+230"
          }, {
            "name": "Mayotte",
            "flag": "🇾🇹",
            "code": "YT",
            "dial_code": "+262"
          }, {
            "name": "Mexico",
            "flag": "🇲🇽",
            "code": "MX",
            "dial_code": "+52"
          }, {
            "name": "Micronesia, Federated States of Micronesia",
            "flag": "🇫🇲",
            "code": "FM",
            "dial_code": "+691"
          }, {
            "name": "Moldova",
            "flag": "🇲🇩",
            "code": "MD",
            "dial_code": "+373"
          }, {
            "name": "Monaco",
            "flag": "🇲🇨",
            "code": "MC",
            "dial_code": "+377"
          }, {
            "name": "Mongolia",
            "flag": "🇲🇳",
            "code": "MN",
            "dial_code": "+976"
          }, {
            "name": "Montenegro",
            "flag": "🇲🇪",
            "code": "ME",
            "dial_code": "+382"
          }, {
            "name": "Montserrat",
            "flag": "🇲🇸",
            "code": "MS",
            "dial_code": "+1664"
          }, {
            "name": "Morocco",
            "flag": "🇲🇦",
            "code": "MA",
            "dial_code": "+212"
          }, {
            "name": "Mozambique",
            "flag": "🇲🇿",
            "code": "MZ",
            "dial_code": "+258"
          }, {
            "name": "Myanmar",
            "flag": "🇲🇲",
            "code": "MM",
            "dial_code": "+95"
          }, {
            "name": "Namibia",
            "flag": "🇳🇦",
            "code": "NA",
            "dial_code": "+264"
          }, {
            "name": "Nauru",
            "flag": "🇳🇷",
            "code": "NR",
            "dial_code": "+674"
          }, {
            "name": "Nepal",
            "flag": "🇳🇵",
            "code": "NP",
            "dial_code": "+977"
          }, {
            "name": "Netherlands",
            "flag": "🇳🇱",
            "code": "NL",
            "dial_code": "+31"
          }, {
            "name": "Netherlands Antilles",
            "flag": "",
            "code": "AN",
            "dial_code": "+599"
          }, {
            "name": "New Caledonia",
            "flag": "🇳🇨",
            "code": "NC",
            "dial_code": "+687"
          }, {
            "name": "New Zealand",
            "flag": "🇳🇿",
            "code": "NZ",
            "dial_code": "+64"
          }, {
            "name": "Nicaragua",
            "flag": "🇳🇮",
            "code": "NI",
            "dial_code": "+505"
          }, {
            "name": "Niger",
            "flag": "🇳🇪",
            "code": "NE",
            "dial_code": "+227"
          }, {
            "name": "Nigeria",
            "flag": "🇳🇬",
            "code": "NG",
            "dial_code": "+234"
          }, {
            "name": "Niue",
            "flag": "🇳🇺",
            "code": "NU",
            "dial_code": "+683"
          }, {
            "name": "Norfolk Island",
            "flag": "🇳🇫",
            "code": "NF",
            "dial_code": "+672"
          }, {
            "name": "Northern Mariana Islands",
            "flag": "🇲🇵",
            "code": "MP",
            "dial_code": "+1670"
          }, {
            "name": "Norway",
            "flag": "🇳🇴",
            "code": "NO",
            "dial_code": "+47"
          }, {
            "name": "Oman",
            "flag": "🇴🇲",
            "code": "OM",
            "dial_code": "+968"
          }, {
            "name": "Pakistan",
            "flag": "🇵🇰",
            "code": "PK",
            "dial_code": "+92"
          }, {
            "name": "Palau",
            "flag": "🇵🇼",
            "code": "PW",
            "dial_code": "+680"
          }, {
            "name": "Palestinian Territory, Occupied",
            "flag": "🇵🇸",
            "code": "PS",
            "dial_code": "+970"
          }, {
            "name": "Panama",
            "flag": "🇵🇦",
            "code": "PA",
            "dial_code": "+507"
          }, {
            "name": "Papua New Guinea",
            "flag": "🇵🇬",
            "code": "PG",
            "dial_code": "+675"
          }, {
            "name": "Paraguay",
            "flag": "🇵🇾",
            "code": "PY",
            "dial_code": "+595"
          }, {
            "name": "Peru",
            "flag": "🇵🇪",
            "code": "PE",
            "dial_code": "+51"
          }, {
            "name": "Philippines",
            "flag": "🇵🇭",
            "code": "PH",
            "dial_code": "+63"
          }, {
            "name": "Pitcairn",
            "flag": "🇵🇳",
            "code": "PN",
            "dial_code": "+64"
          }, {
            "name": "Poland",
            "flag": "🇵🇱",
            "code": "PL",
            "dial_code": "+48"
          }, {
            "name": "Portugal",
            "flag": "🇵🇹",
            "code": "PT",
            "dial_code": "+351"
          }, {
            "name": "Puerto Rico",
            "flag": "🇵🇷",
            "code": "PR",
            "dial_code": "+1939"
          }, {
            "name": "Qatar",
            "flag": "🇶🇦",
            "code": "QA",
            "dial_code": "+974"
          }, {
            "name": "Romania",
            "flag": "🇷🇴",
            "code": "RO",
            "dial_code": "+40"
          }, {
            "name": "Russia",
            "flag": "🇷🇺",
            "code": "RU",
            "dial_code": "+7"
          }, {
            "name": "Rwanda",
            "flag": "🇷🇼",
            "code": "RW",
            "dial_code": "+250"
          }, {
            "name": "Reunion",
            "flag": "🇷🇪",
            "code": "RE",
            "dial_code": "+262"
          }, {
            "name": "Saint Barthelemy",
            "flag": "🇧🇱",
            "code": "BL",
            "dial_code": "+590"
          }, {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "flag": "🇸🇭",
            "code": "SH",
            "dial_code": "+290"
          }, {
            "name": "Saint Kitts and Nevis",
            "flag": "🇰🇳",
            "code": "KN",
            "dial_code": "+1869"
          }, {
            "name": "Saint Lucia",
            "flag": "🇱🇨",
            "code": "LC",
            "dial_code": "+1758"
          }, {
            "name": "Saint Martin",
            "flag": "🇲🇫",
            "code": "MF",
            "dial_code": "+590"
          }, {
            "name": "Saint Pierre and Miquelon",
            "flag": "🇵🇲",
            "code": "PM",
            "dial_code": "+508"
          }, {
            "name": "Saint Vincent and the Grenadines",
            "flag": "🇻🇨",
            "code": "VC",
            "dial_code": "+1784"
          }, {
            "name": "Samoa",
            "flag": "🇼🇸",
            "code": "WS",
            "dial_code": "+685"
          }, {
            "name": "San Marino",
            "flag": "🇸🇲",
            "code": "SM",
            "dial_code": "+378"
          }, {
            "name": "Sao Tome and Principe",
            "flag": "🇸🇹",
            "code": "ST",
            "dial_code": "+239"
          }, {
            "name": "Saudi Arabia",
            "flag": "🇸🇦",
            "code": "SA",
            "dial_code": "+966"
          }, {
            "name": "Senegal",
            "flag": "🇸🇳",
            "code": "SN",
            "dial_code": "+221"
          }, {
            "name": "Serbia",
            "flag": "🇷🇸",
            "code": "RS",
            "dial_code": "+381"
          }, {
            "name": "Seychelles",
            "flag": "🇸🇨",
            "code": "SC",
            "dial_code": "+248"
          }, {
            "name": "Sierra Leone",
            "flag": "🇸🇱",
            "code": "SL",
            "dial_code": "+232"
          }, {
            "name": "Singapore",
            "flag": "🇸🇬",
            "code": "SG",
            "dial_code": "+65"
          }, {
            "name": "Slovakia",
            "flag": "🇸🇰",
            "code": "SK",
            "dial_code": "+421"
          }, {
            "name": "Slovenia",
            "flag": "🇸🇮",
            "code": "SI",
            "dial_code": "+386"
          }, {
            "name": "Solomon Islands",
            "flag": "🇸🇧",
            "code": "SB",
            "dial_code": "+677"
          }, {
            "name": "Somalia",
            "flag": "🇸🇴",
            "code": "SO",
            "dial_code": "+252"
          }, {
            "name": "South Africa",
            "flag": "🇿🇦",
            "code": "ZA",
            "dial_code": "+27"
          }, {
            "name": "South Sudan",
            "flag": "🇸🇸",
            "code": "SS",
            "dial_code": "+211"
          }, {
            "name": "South Georgia and the South Sandwich Islands",
            "flag": "🇬🇸",
            "code": "GS",
            "dial_code": "+500"
          }, {
            "name": "Spain",
            "flag": "🇪🇸",
            "code": "ES",
            "dial_code": "+34"
          }, {
            "name": "Sri Lanka",
            "flag": "🇱🇰",
            "code": "LK",
            "dial_code": "+94"
          }, {
            "name": "Sudan",
            "flag": "🇸🇩",
            "code": "SD",
            "dial_code": "+249"
          }, {
            "name": "Suriname",
            "flag": "🇸🇷",
            "code": "SR",
            "dial_code": "+597"
          }, {
            "name": "Svalbard and Jan Mayen",
            "flag": "🇸🇯",
            "code": "SJ",
            "dial_code": "+47"
          }, {
            "name": "Swaziland",
            "flag": "🇸🇿",
            "code": "SZ",
            "dial_code": "+268"
          }, {
            "name": "Sweden",
            "flag": "🇸🇪",
            "code": "SE",
            "dial_code": "+46"
          }, {
            "name": "Switzerland",
            "flag": "🇨🇭",
            "code": "CH",
            "dial_code": "+41"
          }, {
            "name": "Syrian Arab Republic",
            "flag": "🇸🇾",
            "code": "SY",
            "dial_code": "+963"
          }, {
            "name": "Taiwan",
            "flag": "🇹🇼",
            "code": "TW",
            "dial_code": "+886"
          }, {
            "name": "Tajikistan",
            "flag": "🇹🇯",
            "code": "TJ",
            "dial_code": "+992"
          }, {
            "name": "Tanzania, United Republic of Tanzania",
            "flag": "🇹🇿",
            "code": "TZ",
            "dial_code": "+255"
          }, {
            "name": "Thailand",
            "flag": "🇹🇭",
            "code": "TH",
            "dial_code": "+66"
          }, {
            "name": "Timor-Leste",
            "flag": "🇹🇱",
            "code": "TL",
            "dial_code": "+670"
          }, {
            "name": "Togo",
            "flag": "🇹🇬",
            "code": "TG",
            "dial_code": "+228"
          }, {
            "name": "Tokelau",
            "flag": "🇹🇰",
            "code": "TK",
            "dial_code": "+690"
          }, {
            "name": "Tonga",
            "flag": "🇹🇴",
            "code": "TO",
            "dial_code": "+676"
          }, {
            "name": "Trinidad and Tobago",
            "flag": "🇹🇹",
            "code": "TT",
            "dial_code": "+1868"
          }, {
            "name": "Tunisia",
            "flag": "🇹🇳",
            "code": "TN",
            "dial_code": "+216"
          }, {
            "name": "Turkey",
            "flag": "🇹🇷",
            "code": "TR",
            "dial_code": "+90"
          }, {
            "name": "Turkmenistan",
            "flag": "🇹🇲",
            "code": "TM",
            "dial_code": "+993"
          }, {
            "name": "Turks and Caicos Islands",
            "flag": "🇹🇨",
            "code": "TC",
            "dial_code": "+1649"
          }, {
            "name": "Tuvalu",
            "flag": "🇹🇻",
            "code": "TV",
            "dial_code": "+688"
          }, {
            "name": "Uganda",
            "flag": "🇺🇬",
            "code": "UG",
            "dial_code": "+256"
          }, {
            "name": "Ukraine",
            "flag": "🇺🇦",
            "code": "UA",
            "dial_code": "+380"
          }, {
            "name": "United Arab Emirates",
            "flag": "🇦🇪",
            "code": "AE",
            "dial_code": "+971"
          }, {
            "name": "United Kingdom",
            "flag": "🇬🇧",
            "code": "GB",
            "dial_code": "+44"
          }, {
            "name": "United States",
            "flag": "🇺🇸",
            "code": "US",
            "dial_code": "+1"
          }, {
            "name": "Uruguay",
            "flag": "🇺🇾",
            "code": "UY",
            "dial_code": "+598"
          }, {
            "name": "Uzbekistan",
            "flag": "🇺🇿",
            "code": "UZ",
            "dial_code": "+998"
          }, {
            "name": "Vanuatu",
            "flag": "🇻🇺",
            "code": "VU",
            "dial_code": "+678"
          }, {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "flag": "🇻🇪",
            "code": "VE",
            "dial_code": "+58"
          }, {
            "name": "Vietnam",
            "flag": "🇻🇳",
            "code": "VN",
            "dial_code": "+84"
          }, {
            "name": "Virgin Islands, British",
            "flag": "🇻🇬",
            "code": "VG",
            "dial_code": "+1284"
          }, {
            "name": "Virgin Islands, U.S.",
            "flag": "🇻🇮",
            "code": "VI",
            "dial_code": "+1340"
          }, {
            "name": "Wallis and Futuna",
            "flag": "🇼🇫",
            "code": "WF",
            "dial_code": "+681"
          }, {
            "name": "Yemen",
            "flag": "🇾🇪",
            "code": "YE",
            "dial_code": "+967"
          }, {
            "name": "Zambia",
            "flag": "🇿🇲",
            "code": "ZM",
            "dial_code": "+260"
          }, {
            "name": "Zimbabwe",
            "flag": "🇿🇼",
            "code": "ZW",
            "dial_code": "+263"
          }];
          this.formgroup = formbuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(35), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[0-9]+')])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)])]
          });
          this.name = this.formgroup.controls['name'];
          this.code = this.formgroup.controls['code'];
          this.phone = this.formgroup.controls['phone'];
          this.email = this.formgroup.controls['email'];
          this.password = this.formgroup.controls['password']; // this.university = this.formgroup.controls['university'];

          this.userData.code = "+234";
        }

        _createClass(SignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.common.menu.swipeGesture(false);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "toGetUserLocation",
          value: function toGetUserLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.UserLocation = resp.coords;
                      })["catch"](function (error) {
                        console.log('Error getting location', error);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signUp",
          value: function signUp() {
            var _this2 = this;

            this.FormSubmit = true;

            if (this.formgroup.valid) {
              var params = {
                name: this.userData.name,
                code: this.userData.code,
                phone: this.userData.phone,
                email: this.userData.email,
                password: this.userData.password,
                // university : this.userData.university,
                university: '',
                lat: this.UserLocation.latitude,
                "long": this.UserLocation.longitude,
                device_token: '',
                // device_token : this.DeviceToken.value,
                device_type: ''
              };
              this.common.postMethod('register', params).then(function (res) {
                _this2.responseData = res;

                if (_this2.responseData.userData) {}

                if (res.message == "success") {
                  _this2.common.presentToast('Registration Successful!');

                  _this2.common.router.navigate(['/terms-of-service']);
                } else if (res.message == "user already existing") {
                  _this2.common.showAlert('User already existing');
                } else if (res.status == false) {
                  _this2.common.showAlert('Registration failed');
                }
              }, function (err) {
                console.log(err);
                console.log(err.headers);
              });
            } else {
              if (this.formgroup.controls['password'].status == 'INVALID') {
                this.common.presentToast('Password must contain 8 letters, a uppercase, a lowercase, a number , don\'t use any special characters, Password format must be like : Example0001');
              } else {
                this.common.showAlert('Please enter valid details !');
              }
            }
          }
        }]);

        return SignUpPage;
      }();

      SignUpPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map