(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button (click)=\"GoToPersonlMatchUpload()\">\r\n      <ion-icon name=\"add-circle\" (click)=\"TabClicked($event,'Tab1')\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon *ngIf=\"isIcon2Activated===false\" style=\"width: 35px;\" class=\"icon-match\" src=\"../../assets/icon/icon-tab2.svg\" (click)=\"TabClicked($event,'Tab2')\"></ion-icon>\r\n      <ion-img *ngIf=\"isIcon2Activated===true\" style=\"width: 35px;\" class=\"icon-match\" src=\"../../assets/icon/match1.png\" (click)=\"TabClicked($event,'Tab2')\"></ion-img>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon *ngIf=\"isIcon3Activated===false\" style=\"width: 35px;\" class=\"icon-match\" src=\"../../assets/icon/icon-tab3.svg\" (click)=\"TabClicked($event,'Tab3')\"></ion-icon>\r\n      <ion-img *ngIf=\"isIcon3Activated===true\" style=\"width: 35px;\" class=\"icon-match\" src=\"../../assets/icon/open-match1.png\" (click)=\"TabClicked($event,'Tab3')\"></ion-img>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\">\r\n      <ion-icon name=\"search-outline\" (click)=\"TabClicked($event,'Tab4')\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab5\">\r\n      <ion-icon name=\"notifications-outline\" (click)=\"TabClicked($event,'Tab5')\"></ion-icon>\r\n      <!-- <ion-badge style=\"margin: -5px 0px 4px -6px;\">3</ion-badge> -->\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab6\">\r\n      <ion-icon name=\"pulse-outline\" color=\"primary\" (click)=\"TabClicked($event,'Tab6')\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab7\">\r\n      <ion-icon name=\"person-outline\" (click)=\"TabClicked($event,'Tab7')\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab8\">\r\n      <ion-icon name=\"home-outline\" (click)=\"TabClicked($event,'Tab8')\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(common, storageservice) {
          _classCallCheck(this, TabsPage);

          this.common = common;
          this.storageservice = storageservice;
          this.isIcon2Activated = false;
          this.isIcon3Activated = false;
          this.userDetails = [];
        }

        _createClass(TabsPage, [{
          key: "GoToPersonlMatchUpload",
          value: function GoToPersonlMatchUpload() {
            this.common.navCtrl.navigateForward(['personal-match-media-upload']);
          }
        }, {
          key: "TabClicked",
          value: function TabClicked(e, tab) {
            // console.log(e);
            if (tab === 'Tab1') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab2') {
              this.isIcon2Activated = true;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab3') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = true;
            } else if (tab === 'Tab4') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab5') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab6') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab7') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            } else if (tab === 'Tab8') {
              this.isIcon2Activated = false;
              this.isIcon3Activated = false;
            }
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --color-selected: #f21908;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRhYi1idXR0b257XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2YyMTkwODtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "tmrb")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "TUkU")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "k+ul")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab4-tab4-module */
            "tab4-tab4-module").then(__webpack_require__.bind(null,
            /*! ../tab4/tab4.module */
            "1GDv")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: 'tab5',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab5-tab5-module */
            "tab5-tab5-module").then(__webpack_require__.bind(null,
            /*! ../tab5/tab5.module */
            "Sa0/")).then(function (m) {
              return m.Tab5PageModule;
            });
          }
        }, {
          path: 'tab6',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | tab6-tab6-module */
              "tab6-tab6-module").then(__webpack_require__.bind(null,
              /*! ../tab6/tab6.module */
              "ufJr")).then(function (m) {
                return m.Tab6PageModule;
              });
            }
          }, {
            path: 'besties',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | besties-besties-module */
              "besties-besties-module").then(__webpack_require__.bind(null,
              /*! ../besties/besties.module */
              "BCzL")).then(function (m) {
                return m.BestiesPageModule;
              });
            }
          }, {
            path: 'besties-actions',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | besties-actions-besties-actions-module */
              "besties-actions-besties-actions-module").then(__webpack_require__.bind(null,
              /*! ../besties-actions/besties-actions.module */
              "a1uF")).then(function (m) {
                return m.BestiesActionsPageModule;
              });
            }
          }, {
            path: 'fans',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | fans-fans-module */
              "fans-fans-module").then(__webpack_require__.bind(null,
              /*! ../fans/fans.module */
              "lBs6")).then(function (m) {
                return m.FansPageModule;
              });
            }
          }, {
            path: 'squad-list',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | squad-list-squad-list-module */
              "squad-list-squad-list-module").then(__webpack_require__.bind(null,
              /*! ../squad-list/squad-list.module */
              "gZTL")).then(function (m) {
                return m.SquadListPageModule;
              });
            }
          }]
        }, {
          path: 'tab7',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab7-tab7-module */
            "tab7-tab7-module").then(__webpack_require__.bind(null,
            /*! ../tab7/tab7.module */
            "sFF5")).then(function (m) {
              return m.Tab7PageModule;
            });
          }
        }, {
          path: 'tab8',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | tab8-tab8-module */
              "tab8-tab8-module").then(__webpack_require__.bind(null,
              /*! ../tab8/tab8.module */
              "vK2R")).then(function (m) {
                return m.Tab8PageModule;
              });
            }
          }, {
            path: 'trending',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | trending-trending-module */
              "trending-trending-module").then(__webpack_require__.bind(null,
              /*! ../trending/trending.module */
              "HhZF")).then(function (m) {
                return m.TrendingPageModule;
              });
            }
          }, {
            path: 'headliners',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | headliners-headliners-module */
              "headliners-headliners-module").then(__webpack_require__.bind(null,
              /*! ../headliners/headliners.module */
              "FJhp")).then(function (m) {
                return m.HeadlinersPageModule;
              });
            }
          }, {
            path: 'goodies',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | goodies-goodies-module */
              "goodies-goodies-module").then(__webpack_require__.bind(null,
              /*! ../goodies/goodies.module */
              "zjWB")).then(function (m) {
                return m.GoodiesPageModule;
              });
            }
          }, {
            path: 'faq',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | faq-faq-module */
              "faq-faq-module").then(__webpack_require__.bind(null,
              /*! ../faq/faq.module */
              "/6n6")).then(function (m) {
                return m.FaqPageModule;
              });
            }
          }, {
            path: 'help',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | help-help-module */
              "help-help-module").then(__webpack_require__.bind(null,
              /*! ../help/help.module */
              "7XJi")).then(function (m) {
                return m.HelpPageModule;
              });
            }
          }, {
            path: 'privacy-policy',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | privacy-policy-privacy-policy-module */
              "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
              /*! ../privacy-policy/privacy-policy.module */
              "TOq4")).then(function (m) {
                return m.PrivacyPolicyPageModule;
              });
            }
          }, {
            path: 'about-us',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | about-us-about-us-module */
              "about-us-about-us-module").then(__webpack_require__.bind(null,
              /*! ../about-us/about-us.module */
              "00wH")).then(function (m) {
                return m.AboutUsPageModule;
              });
            }
          }, {
            path: 'blog',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | blog-blog-module */
              "blog-blog-module").then(__webpack_require__.bind(null,
              /*! ../blog/blog.module */
              "U4+L")).then(function (m) {
                return m.BlogPageModule;
              });
            }
          }]
        }]
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map