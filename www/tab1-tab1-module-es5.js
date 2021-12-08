(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <img src=\"../../assets/icon/chat/back.png\" alt=\"\" style=\"height: 16px;width: 10px;position: absolute;left: 20px;\" (click)=\"togoBack()\">\r\n    <ion-title style=\"width: 300px;margin-left: 40px;\">BEFORE MATCH INVITATION</ion-title>\r\n    <img src=\"../../assets/icon/activity/search.png\" alt=\"\" style=\"position: absolute;right: 20px;height: 22px;width: 22px;bottom: 16px;\" (click)=\"gotoSearchUser()\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"margin: 30px 0px 0px 0px;\r\n  text-align: center;\">\r\n    <!-- <ion-button style=\"text-transform: none;\" (click)=\"toShare()\">Invite Other Users</ion-button> -->\r\n  </div>\r\n\r\n  <div style=\"padding: 15px; background-color: #707072; margin: 20px; margin-top: 12%;\">\r\n    <div style=\"border: 1px solid #ffffff8f; padding: 15px; border-radius: 4px; color: #dcdcdc;\">\r\n      <img src=\"../../assets/icon/help-invitation-terms/bar.png\" alt=\"\">\r\n      <!-- <h6>Hai {{userDetails.name}} !</h6> -->\r\n      <h2>Whom you want to call for a match ?\r\n        <!-- <ion-select (ionChange)=\"toSelectUser($event)\" style=\"background-color: #9e9e9e57; border-radius: 5px; margin-top: 10px; font-size: 17px;\">\r\n          <ion-select-option *ngFor=\"let user of Users\" [value]=\"user\">{{user.name}}</ion-select-option>\r\n        </ion-select> -->\r\n      </h2>\r\n    </div>\r\n  </div>  \r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J"); // import { PopoverController } from '@ionic/angular';
      // import { NavParams} from '@ionic/angular';
      // import { SocialSharing } from '@ionic-native/social-sharing/ngx';


      var Tab1Page = /*#__PURE__*/function () {
        // opponentDetails: any;
        // Users: any = [];
        // user: string;
        function Tab1Page(common, // public socialSharing: SocialSharing,
        // public popoverController: PopoverController,
        storageservice) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.common = common;
          this.storageservice = storageservice;
          this.userDetails = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          }); //   this.common.route.queryParams.subscribe(resp => {
          //     this.opponentDetails = resp;
          //     console.log('opponentDetails:',this.opponentDetails);
          // });
          // this.Users = null;
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "gotoSearchUser",
          value: function gotoSearchUser() {
            this.common.router.navigate(['/search-match-users']);
          }
        }, {
          key: "togoBack",
          value: function togoBack() {
            this.common.router.navigate(['/tabs/tab6']);
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('invitation-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.box {\n  width: 88%;\n  border: 1px solid transparent;\n  background-color: #707072;\n  margin-left: 6%;\n  margin-top: 6%;\n  border-radius: 5px;\n}\n\n.inner-box {\n  border: 1px solid #e0e0e0;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  margin: 5%;\n  border-radius: 5px;\n}\n\n.inner-box div {\n  position: relative;\n}\n\n.inner-box div ion-img {\n  width: 45%;\n}\n\n.inner-box div ion-thumbnail {\n  border: 1px solid #fcbb3b;\n  position: absolute;\n  right: 4%;\n  top: 12%;\n  height: 65px;\n  width: 65px;\n}\n\n.inner-box div span {\n  position: absolute;\n  right: 10%;\n  top: 90%;\n  font-size: 13px;\n  color: #fcbb3b;\n  font-family: OpenSansRegular;\n}\n\n.inner-box div .input-textarea {\n  border: 0.5px solid;\n  color: white;\n}\n\n.inner-box div .input-field {\n  border: 1px solid #b6b6b7;\n  background: #cdcdce30;\n  color: white;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.inner-box div ion-select::part(icon) {\n  display: none !important;\n}\n\n.inner-box div ion-select {\n  border: 0.5px solid #ffffff8a;\n  background: #707072;\n  padding: 2px 10px 2px 10px;\n  margin-left: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOERBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKOztBQUlJO0VBQ0ksVUFBQTtBQUZSOztBQUlJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGUjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBRlI7O0FBS0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFIUjs7QUFNSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSlI7O0FBT0k7RUFDSSx3QkFBQTtBQUxSOztBQVFJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTlIiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9oZWxwLWludml0YXRpb24tdGVybXMvaW52aXRhdGlvbi1iZy5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJveHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICAvLyBoZWlnaHQ6IDI0M3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbm5lci1ib3h7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuLmlubmVyLWJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpb24taW1ne1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbiAgICBpb24tdGh1bWJuYWlse1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2JiM2I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgIHRvcDogOTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogI2ZjYmIzYjtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnNSZWd1bGFyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC10ZXh0YXJlYXtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2Yjc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NkY2RjZTMwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmZmZmY4YTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map