(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab7-tab7-module"], {
    /***/
    "IV+q":
    /*!***********************************!*\
      !*** ./src/app/tab7/tab7.page.ts ***!
      \***********************************/

    /*! exports provided: Tab7Page */

    /***/
    function IVQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab7Page", function () {
        return Tab7Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab7_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab7.page.html */
      "bE/L");
      /* harmony import */


      var _tab7_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab7.page.scss */
      "hXTM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");

      var Tab7Page = /*#__PURE__*/function () {
        function Tab7Page(common, storageservice) {
          _classCallCheck(this, Tab7Page);

          this.common = common;
          this.storageservice = storageservice;
          this.userDetails = [];
        }

        _createClass(Tab7Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('Entered into Profile Page ');
            this.storageservice.storage.get('userDetails').then(function (val) {
              console.log('Storage Value of userDetails:', val);
              _this.userDetails = val;
            });
          }
        }, {
          key: "togoBack",
          value: function togoBack() {
            console.log('Back Button Clicked');
            this.common.router.navigate(['/tabs/tab6']);
          }
        }]);

        return Tab7Page;
      }();

      Tab7Page.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      Tab7Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab7',
        template: _raw_loader_tab7_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab7_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab7Page);
      /***/
    },

    /***/
    "bE/L":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab7/tab7.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function bEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <img src=\"../../assets/icon/chat/back.png\" alt=\"\" style=\"height: 16px;width: 10px;position: absolute;left: 20px;\" (click)=\"togoBack()\">\r\n      <ion-title style=\"width: 300px;margin-left: 40px;\">\r\n        PROFILE\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n\r\n    <div class=\"profile-content\"  *ngIf=\"userDetails\">\r\n      <div style=\"padding: 25px;\">\r\n          <img *ngIf=\"userDetails\" [src]=userDetails.profile_pic alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\" class=\"profile-img\">\r\n      </div>\r\n      \r\n      <div class=\"text-field-div\">\r\n\r\n        <div style=\"display: flex; justify-content: center; margin-bottom: 10px;\">\r\n          <div style=\"margin: 5px; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: 600; font-size: 11px;\">\r\n            <p style=\"margin: 0px;\">FAN</p>\r\n            <p style=\"margin: 0px;\"> {{userDetails.fans_count}} </p>\r\n          </div>\r\n\r\n          <div style=\"margin: 5px; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: 600; font-size: 11px;\">\r\n            <p style=\"margin: 0px;\">FAN OF</p>\r\n            <p style=\"margin: 0px;\"> {{userDetails.fans_of_count}} </p>\r\n          </div>\r\n\r\n          <div style=\"margin: 5px; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: 600; font-size: 11px;\">\r\n            <p style=\"margin: 0px;\">BESTIE</p>\r\n            <p style=\"margin: 0px;\"> {{userDetails.bestie_count}} </p>\r\n          </div>\r\n\r\n          <div style=\"margin: 5px; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: 600; font-size: 11px;\">\r\n            <p style=\"margin: 0px;\">SQUAD</p>\r\n            <p style=\"margin: 0px;\">{{userDetails.squad_count}} </p>\r\n          </div>\r\n\r\n          <div style=\"margin: 5px; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center; color: white; font-weight: 600; font-size: 11px;\">\r\n            <p style=\"margin: 0px;\">MATCH</p>\r\n            <p style=\"margin: 0px;\"> {{userDetails.matches_count}} </p>\r\n          </div>\r\n        </div>\r\n  \r\n        <ion-label position=\"fixed\" class=\"input-field-label\">User Name</ion-label>\r\n        <ion-input class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.name}}\">  </ion-input>\r\n  \r\n        <ion-label position=\"fixed\" class=\"input-field-label\">Bio</ion-label>\r\n        <ion-textarea class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.bio}}\" autoGrow=\"true\">  </ion-textarea>\r\n  \r\n        <ion-label position=\"fixed\" class=\"input-field-label\">Phone Number</ion-label>\r\n        <ion-input class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.phone_number}}\">  </ion-input>\r\n  \r\n        <ion-label position=\"fixed\" class=\"input-field-label\">Email</ion-label>\r\n        <ion-input class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.email}}\">  </ion-input>\r\n\r\n        <ion-label position=\"fixed\" class=\"input-field-label\">Gender</ion-label>\r\n        <ion-input class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.gender}}\">  </ion-input>\r\n  \r\n        <ion-label position=\"University Name\" class=\"input-field-label\">University Name</ion-label>\r\n        <ion-input class=\"input-field\" [readonly]=\"true\" value=\"{{userDetails.university_name}}\">  </ion-input>\r\n  \r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "hXTM":
    /*!*************************************!*\
      !*** ./src/app/tab7/tab7.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function hXTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-content {\n  text-align: center;\n  background-color: #707072;\n}\n\n.profile-img {\n  border: 1px solid #000000bf;\n  height: 95px;\n  width: 95px;\n  border-radius: 50%;\n  padding: 3px;\n  background-color: white;\n}\n\n.profile-img-text {\n  color: white;\n  margin: 0px;\n}\n\n.text-field-div {\n  padding: 25px;\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  text-align: left;\n}\n\n.input-field-label {\n  color: grey;\n  margin-left: 5px;\n}\n\n.input-field {\n  border: 1px solid #9E9E9E;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\nion-checkbox {\n  margin-left: 25px;\n  position: relative;\n  top: 5px;\n}\n\n.native-input:disabled {\n  opacity: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBT0o7O0FBTEE7RUFDSSxxQkFBQTtBQVFKIiwiZmlsZSI6InRhYjcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI7XHJcbn1cclxuLnByb2ZpbGUtaW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMGJmO1xyXG4gICAgaGVpZ2h0OiA5NXB4O1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZmlsZS1pbWctdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi50ZXh0LWZpZWxkLWRpdntcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaW5wdXQtZmllbGQtbGFiZWx7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmlucHV0LWZpZWxke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlFOUU5RTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbmlvbi1jaGVja2JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbn1cclxuLm5hdGl2ZS1pbnB1dDpkaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6MCAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */";
      /***/
    },

    /***/
    "nsF6":
    /*!*********************************************!*\
      !*** ./src/app/tab7/tab7-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab7PageRoutingModule */

    /***/
    function nsF6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab7PageRoutingModule", function () {
        return Tab7PageRoutingModule;
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


      var _tab7_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab7.page */
      "IV+q");

      var routes = [{
        path: '',
        component: _tab7_page__WEBPACK_IMPORTED_MODULE_3__["Tab7Page"]
      }];

      var Tab7PageRoutingModule = function Tab7PageRoutingModule() {
        _classCallCheck(this, Tab7PageRoutingModule);
      };

      Tab7PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab7PageRoutingModule);
      /***/
    },

    /***/
    "sFF5":
    /*!*************************************!*\
      !*** ./src/app/tab7/tab7.module.ts ***!
      \*************************************/

    /*! exports provided: Tab7PageModule */

    /***/
    function sFF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab7PageModule", function () {
        return Tab7PageModule;
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


      var _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab7-routing.module */
      "nsF6");
      /* harmony import */


      var _tab7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab7.page */
      "IV+q");

      var Tab7PageModule = function Tab7PageModule() {
        _classCallCheck(this, Tab7PageModule);
      };

      Tab7PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab7PageRoutingModule"]],
        declarations: [_tab7_page__WEBPACK_IMPORTED_MODULE_6__["Tab7Page"]]
      })], Tab7PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab7-tab7-module-es5.js.map