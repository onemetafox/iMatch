(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"], {
    /***/
    "FFfc":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function FFfc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".banner {\n  height: 16px;\n  width: 16px;\n  background-color: #707072;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  margin: -32px 0px 0px 5px;\n  text-align: center;\n  padding-top: 2px;\n  color: white;\n  font-size: 7px;\n  font-family: OpenSansRegular;\n}\n\n.message {\n  border: 1px solid gainsboro;\n  width: 163px;\n  margin-left: -30px;\n  margin-top: 27px;\n  border-top-width: 0px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  box-shadow: 0px 1px 0px 0px gainsboro;\n}\n\n.message-date {\n  color: #f21908;\n  font-size: 8px;\n  margin-left: 80px;\n  font-family: OpenSansSemiBold;\n}\n\n.message-content {\n  font-family: OpenSansRegular;\n  font-size: 10px;\n  padding: 5px;\n  margin-top: -2px;\n}\n\n.click-here-button {\n  width: 68px;\n  height: 22px;\n  font-size: 7px;\n  margin-left: 30%;\n  margin-top: 5%;\n  font-family: OpenSansRegular;\n  margin-bottom: 6px;\n}\n\n.item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBR0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUFKIiwiZmlsZSI6InRhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogLTMycHggMHB4IDBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNSZWd1bGFyO1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMHB4IGdhaW5zYm9ybztcclxufVxyXG5cclxuLm1lc3NhZ2UtZGF0ZXtcclxuICAgIGNvbG9yOiAjZjIxOTA4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1NlbWlCb2xkO1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uY2xpY2staGVyZS1idXR0b257XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zUmVndWxhcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Ki12":
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab5PageRoutingModule */

    /***/
    function Ki12(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function () {
        return Tab5PageRoutingModule;
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


      var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab5.page */
      "Tlso");

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
      }];

      var Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab5PageRoutingModule);
      /***/
    },

    /***/
    "Sa0/":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /*! exports provided: Tab5PageModule */

    /***/
    function Sa0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function () {
        return Tab5PageModule;
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


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab5-routing.module */
      "Ki12");
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab5.page */
      "Tlso");

      var Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
      })], Tab5PageModule);
      /***/
    },

    /***/
    "Tlso":
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /*! exports provided: Tab5Page */

    /***/
    function Tlso(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5Page", function () {
        return Tab5Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab5.page.html */
      "pXFx");
      /* harmony import */


      var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab5.page.scss */
      "FFfc");
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

      var Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(common, storageservice) {
          var _this = this;

          _classCallCheck(this, Tab5Page);

          this.common = common;
          this.storageservice = storageservice;
          this.showMessage = false;
          this.userDetails = [];
          this.NotificationDetails = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;
            console.log('userDetails:', _this.userDetails);
            console.log('Working on GetNotificationDetails function ....');

            _this.GetNotificationDetails();
          }); // this.interval = setInterval(() => {
          // this.GetNotificationDetails();
          // },3000);
        }

        _createClass(Tab5Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != null) {
                _this2.GetNotificationDetails();
              } else {
                console.log('No userid');
              }
            });
          }
        }, {
          key: "GetNotificationDetails",
          value: function GetNotificationDetails() {
            var _this3 = this;

            this.storageservice.storage.get('userDetails').then(function (val) {
              _this3.userDetails = val;
              var userid = _this3.userDetails.userid;
              var Api = 'get_profile_pic/';

              _this3.common.http.get(_this3.common.ajx.BaseUrl + Api + userid).subscribe(function (res) {
                console.log('res:', res);
                _this3.NotificationDetails = res.details[0];
                console.log('NotificationDetails:', _this3.NotificationDetails);
                _this3.userDetails = _this3.NotificationDetails;
                console.log('userDetails:', _this3.userDetails);
              }, function (err) {
                console.log('err:', err);
              });
            });
          } // ionViewWillLeave(){
          //     clearInterval(this.interval);
          //   console.log('Notification Page Leaved');
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openListFans",
          value: function openListFans() {
            this.common.navCtrl.navigateForward(['fans'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openListSquad",
          value: function openListSquad() {
            this.common.navCtrl.navigateForward(['squad-list'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openListBesties",
          value: function openListBesties() {
            this.common.navCtrl.navigateForward(['add-reject-besties'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openFavourite",
          value: function openFavourite() {}
        }, {
          key: "openNewMessages",
          value: function openNewMessages() {
            this.common.navCtrl.navigateForward(['chat'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openGroupInvitation",
          value: function openGroupInvitation() {}
        }, {
          key: "openTagged",
          value: function openTagged() {}
        }, {
          key: "openTop100",
          value: function openTop100() {
            this.common.router.navigate(['/top-hundred']);
          }
        }, {
          key: "openHeadliners",
          value: function openHeadliners() {
            this.common.router.navigate(['/headliners']);
          }
        }, {
          key: "openTrending",
          value: function openTrending() {
            this.common.router.navigate(['/trending']);
          }
        }, {
          key: "openGoodies",
          value: function openGoodies() {
            this.common.router.navigate(['/goodies']);
          }
        }, {
          key: "dismissMessage",
          value: function dismissMessage() {
            this.showMessage = false;
          }
        }, {
          key: "openMessage",
          value: function openMessage() {
            this.showMessage = !this.showMessage;
          }
        }, {
          key: "OpenMatchInvitation",
          value: function OpenMatchInvitation() {
            this.common.navCtrl.navigateForward(['invitation'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openOpenMatches",
          value: function openOpenMatches() {
            this.common.router.navigate(['/pending-open-matches']);
          }
        }, {
          key: "togoBack",
          value: function togoBack() {
            console.log('Back Button Clicked');
            this.common.router.navigate(['tabs/tab6']);
          }
        }]);

        return Tab5Page;
      }();

      Tab5Page.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab5Page);
      /***/
    },

    /***/
    "pXFx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function pXFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons> -->\r\n        <img src=\"../../assets/icon/chat/back.png\" alt=\"\" style=\"height: 16px;width: 10px;position: absolute;left: 20px;\" (click)=\"togoBack()\">\r\n        <div style=\"text-align: center; font-family: OpenSansRegular; font-size: 16px; color: white;\">\r\n            <div style=\"height: 22px; width: 22px; border-radius: 50%; padding: 1px 0px; position: absolute; left: 100px; font-size: 13px; font-weight: 600; background-color: white; color: #707072;\">\r\n                <span *ngIf=\"userDetails\" style=\"font-size: 10px;\"> {{this.userDetails.total_notification}} </span>\r\n            </div>\r\n            <span>NOTIFICATION</span>\r\n        </div>\r\n\r\n\r\n        <!-- <ion-title style=\"width: 400px; position: relative; left: 15px;\">NOTIFICATIONS</ion-title> -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openListFans()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/fans.png\">\r\n                    <span class=\"banner\">0</span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">New fans Gained</span>\r\n                <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        </div>\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"OpenMatchInvitation()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/g.png\">\r\n                    <span class=\"banner\" *ngIf=\"userDetails\"> {{userDetails.matches_invitationcount}} </span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Open Match Invitation</span>\r\n                <img style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openListSquad()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/bg.jpg\">\r\n                    <span class=\"banner\">0</span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Squad List Invitation</span>\r\n                <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        </div>\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openListBesties()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/besties.png\">\r\n                    <span class=\"banner\">0</span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Invitation To Be Bestie</span>\r\n                <img style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openFavourite()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n          <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n              <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/fav.png\">\r\n              <span class=\"banner\">0</span>\r\n          </div>  \r\n          <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Added As Favourite</span>\r\n      <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n    </div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        <!-- </div> -->\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openNewMessages()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/message.png\">\r\n                    <span class=\"banner\">0</span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">New Messages</span>\r\n                <img style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openGroupInvitation()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n          <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n              <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/chat.png\">\r\n              <span class=\"banner\">20</span>\r\n          </div>  \r\n          <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Invited To A Group</span>\r\n      <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n    </div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        <!-- </div> -->\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openTagged()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n      <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n          <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/tag.png\">\r\n          <span class=\"banner\">20</span>\r\n      </div>  \r\n      <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">You Are Tagged</span>\r\n  <img  style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n</div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        <!-- </div> -->\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openTop100()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n          <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n              <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/top100.png\">\r\n              <span class=\"banner\">20</span>\r\n          </div>  \r\n          <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">You are among Top 100</span>\r\n      <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n    </div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        <!-- </div> -->\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openHeadliners()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n      <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n          <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/headlines.png\">\r\n          <span class=\"banner\">0</span>\r\n      </div>  \r\n      <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">You are among Headliners</span>\r\n  <img  style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n</div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        <!-- </div> -->\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openTrending()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/trending.png\">\r\n                    <span class=\"banner\">0</span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Your post is among Trending</span>\r\n                <img (click)=\"openMessage()\" style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n      <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n      <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n      <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n    </div> -->\r\n        </div>\r\n\r\n        <!-- <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openGoodies()\">\r\n    <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n      <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n          <img style=\"position: absolute; width: 35px; margin: -16px 0 0 -18px;\" src=\"../../assets/icon/notifications-goodies/goodies.png\">\r\n          <span class=\"banner\">20</span>\r\n      </div>  \r\n      <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Win in Goodies Of The Moment</span>\r\n  <img  style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n</div> -->\r\n        <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n  <span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n  <p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n  <ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        <!-- </div> -->\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n\r\n        <div style=\"width: 50%; float: left; border: 1px solid transparent; padding: 35px; height: 92px\" (click)=\"openOpenMatches()\">\r\n            <div style=\"border: 1px solid gainsboro; padding: 36px; margin: -28px; border-radius: 4%; position: relative; box-shadow: 0px 1px 0px 0px gainsboro, -2px 0px 0px 0px #f21908;\">\r\n                <div style=\"border: 1px solid #707072; border-radius: 50%; padding: 30px; position: absolute; margin: -31px 0px 0px -32px;\">\r\n                    <img style=\"position: absolute; width: 60px; margin: -19px 0 0 -29px;\" src=\"../../assets/icon/notifications-goodies/bar.png\">\r\n                    <span class=\"banner\" *ngIf=\"userDetails\"> {{userDetails.openmatch_count}} </span>\r\n                </div>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 11px; position: absolute; margin: -18px 0 0px 40px;\">Pending open matches</span>\r\n                <img style=\"margin-top: 13px; position: absolute; width: 25px; margin-left: 102px; border-bottom-right-radius: 4px; right: 0;\" src=\"../../assets/icon/notifications-goodies/border-button.png\">\r\n            </div>\r\n            <!-- <div class=\"message\" *ngIf=\"showMessage\">\r\n<span class=\"message-date\">Validity: 28 Jun 2020</span>\r\n<p class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat. Duis aute irure eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n<ion-button shape=\"round\" expand=\"block\" class=\"click-here-button\" (click)=\"dismissMessage()\">CLICK HERE</ion-button>\r\n\r\n</div> -->\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <ion-item lines=\"none\" class=\"item-styles\" *ngFor=\" let noch of Notifications\">\r\n  <strong>{{noch.message}}</strong>\r\n</ion-item> -->\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab5-tab5-module-es5.js.map