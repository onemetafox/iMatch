(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Workspace\Angular\iMatch\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "Af+r":
    /*!*************************************!*\
      !*** ./src/app/modal/modal.page.ts ***!
      \*************************************/

    /*! exports provided: ModalPage */

    /***/
    function AfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
        return ModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal.page.html */
      "wwHD");
      /* harmony import */


      var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal.page.scss */
      "qdCT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var ModalPage = /*#__PURE__*/function () {
        function ModalPage(common) {
          _classCallCheck(this, ModalPage);

          this.common = common;
        }

        _createClass(ModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('Modal Heading:', this.heading);
            console.log('Modal Contents:', this.content);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.common.modalController.dismiss({
              dismissed: true
            });
          }
        }]);

        return ModalPage;
      }();

      ModalPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      ModalPage.propDecorators = {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalPage);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyAbwfU0zz9GjNwDs-MM95Tj_Un96fXGLoM",
          authDomain: "imatch-game.firebaseapp.com",
          databaseURL: "https://imatch-game.firebaseio.com",
          projectId: "imatch-game",
          storageBucket: "imatch-game.appspot.com",
          messagingSenderId: "758700265051",
          appId: "1:758700265051:web:db7aec4db2cdeb1911f97e",
          measurementId: "G-ZC7KRRCGRN"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DrFP":
    /*!*************************************************!*\
      !*** ./src/app/what-would-i-do-visitor.pipe.ts ***!
      \*************************************************/

    /*! exports provided: WhatWouldIDoVisitorPipe */

    /***/
    function DrFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoVisitorPipe", function () {
        return WhatWouldIDoVisitorPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var WhatWouldIDoVisitorPipe = /*#__PURE__*/function () {
        function WhatWouldIDoVisitorPipe() {
          _classCallCheck(this, WhatWouldIDoVisitorPipe);
        }

        _createClass(WhatWouldIDoVisitorPipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return WhatWouldIDoVisitorPipe;
      }();

      WhatWouldIDoVisitorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'whatWouldIDoVisitor'
      })], WhatWouldIDoVisitorPipe);
      /***/
    },

    /***/
    "KKpL":
    /*!******************************************!*\
      !*** ./src/app/services/ajax.service.ts ***!
      \******************************************/

    /*! exports provided: AjaxService */

    /***/
    function KKpL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AjaxService", function () {
        return AjaxService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd"); // import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"],
          PushNotifications = _capacitor_core__WEBP.PushNotifications,
          Device = _capacitor_core__WEBP.Device,
          Network = _capacitor_core__WEBP.Network;

      var AjaxService = /*#__PURE__*/function () {
        function AjaxService( // private androidPermissions: AndroidPermissions,
        storageservice, geolocation, http, router) {
          _classCallCheck(this, AjaxService);

          this.storageservice = storageservice;
          this.geolocation = geolocation;
          this.http = http;
          this.router = router;
          this.BaseUrl = 'http://192.168.107.183/iMatch/api/v1/';
          console.log('Hello AjaxService Provider');
        }

        _createClass(AjaxService, [{
          key: "initPush",
          value: function initPush() {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform == 'web') {
              console.log('This is a Web Browser View');
              this.toGetUserLocation(); // this.toGetNetworkInfo();
            } else if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform == 'android') {
              this.registerPush(); // this.toGetNetworkInfo();

              this.ToGetDeviceInfo(); // this.toGetUserLocation();
              //   this.filePermission();

              console.log('This is an Android Platform');
            } else if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform == 'ios') {
              this.registerPush(); // this.toGetNetworkInfo();

              this.ToGetDeviceInfo(); // this.toGetUserLocation();
              //   this.filePermission();

              console.log('This is an ios Platform');
            }
          } // async filePermission() {
          //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
          //     result => console.log('Has permission?', result.hasPermission),
          //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
          //   );
          //   this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
          // }

        }, {
          key: "ToGetDeviceInfo",
          value: function ToGetDeviceInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var DeviceInfo;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('To Get Device Information');
                      _context.next = 3;
                      return Device.getInfo();

                    case 3:
                      DeviceInfo = _context.sent;
                      console.log('DeviceInfo:', DeviceInfo);
                      this.storageservice.setStorage('DeviceInfo', DeviceInfo); // const BatteryInfo = await Device.getBatteryInfo();
                      // console.log('BatteryInfo:',BatteryInfo);
                      // this.storageservice.setStorage('BatteryInfo',BatteryInfo);
                      // const LanguageCode = await Device.getLanguageCode();
                      // console.log('LanguageCode:',LanguageCode);
                      // this.storageservice.setStorage('LanguageCode',LanguageCode);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // async toGetNetworkInfo() {
          //   console.log('To Get Network Information');
          //   let handler = Network.addListener('networkStatusChange', (status) => {
          //     console.log("Network status changed", status);
          //     console.log('handler:',handler);
          //     this.storageservice.setStorage('NetworkInfo',handler);
          //   });
          //   let NetworkStatus = await Network.getStatus();
          //   console.log('NetworkStatus:',NetworkStatus);
          //   this.storageservice.setStorage('NetworkStatus',NetworkStatus);
          // }
          // async toGetUserLocation() {
          //   console.log('To Get User Location');
          //   const UserLocation = await Geolocation.getCurrentPosition();
          //   console.log('UserLocation:', UserLocation);
          //   this.storageservice.setStorage('UserLocation',UserLocation);
          // }

        }, {
          key: "toGetUserLocation",
          value: function toGetUserLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('To Get User Location');
                      this.geolocation.getCurrentPosition().then(function (resp) {
                        console.log('resp:', resp); // this.storageservice.setStorage('UserLocation',resp);
                        // resp.coords.latitude
                        // resp.coords.longitude
                      })["catch"](function (error) {
                        console.log('Error getting location', error);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "registerPush",
          value: function registerPush() {
            var _this = this;

            PushNotifications.requestPermission().then(function (permission) {
              if (permission.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {// No permission for push granted
              }
            });
            PushNotifications.addListener('registration', function (token) {
              console.log('My token: ' + JSON.stringify(token));

              _this.storageservice.setStorage('DeviceToken', token);
            });
            PushNotifications.addListener('registrationError', function (error) {
              console.log('Error: ' + JSON.stringify(error));
            });
            PushNotifications.addListener('pushNotificationReceived', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log('Push received: ' + JSON.stringify(notification));

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            });
            PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var data;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        data = notification.notification.data;
                        console.log('Action performed: ' + JSON.stringify(notification.notification));

                        if (data.detailsId) {
                          this.router.navigateByUrl("/home/".concat(data.detailsId));
                        }

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }]);

        return AjaxService;
      }();

      AjaxService.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AjaxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AjaxService);
      /***/
    },

    /***/
    "OlR4":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonService */

    /***/
    function OlR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "b6o4");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ajax.service */
      "KKpL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "SPri");
      /* harmony import */


      var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/twitter-connect/ngx */
      "+l8V");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "NzdG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(router, modalController, platform, http, ajx, alertCtrl, toastController, loadingController, popoverController, splashScreen, statusBar, navCtrl, route, fb, google, twit, screenOrientation, menu) {
          _classCallCheck(this, CommonService);

          this.router = router;
          this.modalController = modalController;
          this.platform = platform;
          this.http = http;
          this.ajx = ajx;
          this.alertCtrl = alertCtrl;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.popoverController = popoverController;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.navCtrl = navCtrl;
          this.route = route;
          this.fb = fb;
          this.google = google;
          this.twit = twit;
          this.screenOrientation = screenOrientation;
          this.menu = menu;
          console.log('Hello Common Service Provider');
        } // --- Alert to show failed message ---


        _createClass(CommonService, [{
          key: "showAlert",
          value: function showAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Failed !',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // --- Alert to show failed message ---

        }, {
          key: "showAlertSuccess",
          value: function showAlertSuccess(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 3000,
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        // message: 'Please wait...',
                        duration: 900,
                        spinner: 'dots'
                      });

                    case 2:
                      loading = _context8.sent;
                      _context8.next = 5;
                      return loading.present();

                    case 5:
                      _context8.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context8.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "showLoader",
          value: function showLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var loading;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingController.create({
                        // message: 'Please wait...',
                        spinner: 'dots'
                      });

                    case 2:
                      loading = _context9.sent;
                      _context9.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "register",
          value: function register(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("name", params.name).append("phone", params.phone).append("email", params.email).append("password", params.password).append("university", params.university);
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "login",
          value: function login(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("email", params.email).append("password", params.password);
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "forgotpassword",
          value: function forgotpassword(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("email", params.email);
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "profileupdate",
          value: function profileupdate(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("name", params.name).append("email", params.email).append("bio", params.bio).append("phone", params.phone).append("gender", params.gender).append("university", params.university).append("code", params.code).append("userid", params.userid);
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "profilepic",
          value: function profilepic(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "profilepicget",
          value: function profilepicget(path) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.get(this.ajx.BaseUrl + path, config);
          }
        }, {
          key: "listUsers",
          value: function listUsers(path, params) {
            console.log(params);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append("userid", params.userid);
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, httpParams, config);
          }
        }, {
          key: "listMyBesties",
          value: function listMyBesties(path) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.get(this.ajx.BaseUrl + path, config);
          }
        }, {
          key: "getMyNotification",
          value: function getMyNotification(path) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            var config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
            return this.http.get(this.ajx.BaseUrl + path, config);
          }
        }, {
          key: "postMethod",
          value: function postMethod(path, params) {
            var _this2 = this;

            var body = Object.keys(params).map(function (key) {
              return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
            return new Promise(function (resolve, reject) {
              _this2.http.post(_this2.ajx.BaseUrl + path, body, {
                headers: headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (res) {
                return res;
              })).subscribe(function (res) {
                console.log("POST call successful value returned in body", res);
                resolve(res);
              }, function (err) {
                console.log("POST call in error", err);
                reject(err);
              }, function () {
                console.log("The POST observable is now completed.");
              });
            });
          }
        }, {
          key: "PostData",
          value: function PostData(path, params) {
            console.log('path:', path);
            console.log('Params:', params);
            var config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            return this.http.post(this.ajx.BaseUrl + path, params, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (res) {
              return res;
            }));
          }
        }]);

        return CommonService;
      }();

      CommonService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__["GooglePlus"]
        }, {
          type: _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_9__["TwitterConnect"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CommonService);
      /***/
    },

    /***/
    "Suwn":
    /*!*******************************************************!*\
      !*** ./src/app/logout-popover/logout-popover.page.ts ***!
      \*******************************************************/

    /*! exports provided: LogoutPopoverPage */

    /***/
    function Suwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPopoverPage", function () {
        return LogoutPopoverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logout_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logout-popover.page.html */
      "u9Tr");
      /* harmony import */


      var _logout_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout-popover.page.scss */
      "oRyt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var LogoutPopoverPage_1;

      var LogoutPopoverPage = LogoutPopoverPage_1 = /*#__PURE__*/function () {
        function LogoutPopoverPage(popoverController, storageservice, common) {
          _classCallCheck(this, LogoutPopoverPage);

          this.popoverController = popoverController;
          this.storageservice = storageservice;
          this.common = common;
        }

        _createClass(LogoutPopoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            console.log('Entered into Logout Popover Page');
            this.storageservice.storage.get('userDetails').then(function (val) {
              console.log('Storage Value of userDetails:', val);
              _this3.userDetails = val;
            });
          }
        }, {
          key: "gotoForgotPassword",
          value: function gotoForgotPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var popover;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.popoverController.create({
                        component: LogoutPopoverPage_1,
                        backdropDismiss: false,
                        cssClass: 'my-custom-class',
                        animated: false,
                        translucent: true
                      });

                    case 2:
                      popover = _context11.sent;
                      _context11.next = 5;
                      return popover.present();

                    case 5:
                      return _context11.abrupt("return", _context11.sent);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "toCancel",
          value: function toCancel(e) {
            console.log('Cancel button clicked:', e);
            this.popoverController.dismiss();
          }
        }, {
          key: "toOkay",
          value: function toOkay(e) {
            var _this4 = this;

            console.log('Okay Button clicked:', e);

            if (e.type == 'click') {
              var params = {
                status: '1',
                userid: this.userDetails.userid
              };
              console.log('params:', params);
              this.common.postMethod('Online_Offline_status', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true && _this4.common.platform.is("capacitor" || false)) {
                  _this4.storageservice.storage.remove('userDetails');

                  _this4.popoverController.dismiss();

                  console.log('User Details Cleared');

                  _this4.common.fb.logout();

                  console.log('Facebook Logged out');

                  _this4.common.google.logout();

                  console.log('Google Logged out');

                  _this4.common.twit.logout();

                  console.log('Twitter Logged out');

                  _this4.common.presentToast('You are successfully Logged out from the iMatch');

                  _this4.common.router.navigate(['/login']); // navigator['app'].exitApp();
                  // window.close();

                } else {
                  _this4.storageservice.storage.remove('userDetails');

                  _this4.popoverController.dismiss();

                  console.log('User Details Cleared');

                  _this4.common.router.navigate(['/landing']);

                  _this4.common.presentToast('You are successfully Logged out from the iMatch');
                }
              }, function (err) {
                _this4.common.presentToast('A Network Error Occured !!!');

                console.log('Error:', err);
              });
            } else {
              this.common.presentToast('Something went wrong !!!');
            }
          }
        }]);

        return LogoutPopoverPage;
      }();

      LogoutPopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }];
      };

      LogoutPopoverPage = LogoutPopoverPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout-popover',
        template: _raw_loader_logout_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogoutPopoverPage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _logout_popover_logout_popover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./logout-popover/logout-popover.page */
      "Suwn");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/common.service */
      "OlR4");
      /* harmony import */


      var _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/ajax.service */
      "KKpL");
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal/modal.page */
      "Af+r");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC"); // import { StorageService } from './services/storage.service';


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(common, AjxService, platform, storage, splashScreen, statusBar, navCtrl, menu) {
          _classCallCheck(this, AppComponent);

          this.common = common;
          this.AjxService = AjxService;
          this.platform = platform;
          this.storage = storage;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.navCtrl = navCtrl;
          this.menu = menu;
          this.selectedIndex = 0;
          this.appPages = [{
            title: 'Settings',
            url: '/settings',
            img: '../../assets/icon/menu/settings.png'
          }, {
            title: 'Saved',
            // url: '/',
            img: '../../assets/icon/menu/save.png'
          }, {
            title: 'Archive',
            // url: '/',
            img: '../../assets/icon/menu/archive.png'
          }, {
            title: 'Customize',
            // url: '/',
            img: '../../assets/icon/menu/customize.png'
          }, {
            title: 'iMATCH',
            // url: '/',
            img: '../../assets/icon/menu/imatch.png'
          }, {
            title: 'Activities',
            // url: '/',
            img: '../../assets/icon/menu/activities.png'
          }, {
            title: 'Messages',
            url: 'chat',
            img: '../../assets/icon/menu/messages.png'
          }, {
            title: 'About Us',
            url: '/tabs/tab8/about-us',
            img: '../../assets/icon/menu/about.png'
          }, {
            title: 'Help',
            url: '/tabs/tab8/help',
            img: '../../assets/icon/menu/help.png'
          }, {
            title: 'FAQ',
            url: '/tabs/tab8/faq',
            img: '../../assets/icon/menu/faq.png'
          }, {
            title: 'Privacy Policy',
            url: '/tabs/tab8/privacy-policy',
            img: '../../assets/icon/menu/privacy.png'
          }];
          this.menu.swipeGesture(false);
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this5 = this;

            if (this.platform.is("capacitor" || false)) {
              this.platform.ready().then(function () {
                // this.statusBar.styleDefault();
                _this5.AjxService.initPush();

                _this5.checkUserDetails();

                _this5.splashScreen.hide();

                _this5.common.screenOrientation.lock(_this5.common.screenOrientation.ORIENTATIONS.PORTRAIT);

                console.log(_this5.common.screenOrientation.type);
              }); // this.AjxService.initPush();
            } else {
              console.log('This is a browser view');
              this.platform.ready().then(function () {
                _this5.checkUserDetails();
              });
            }
          }
        }, {
          key: "checkUserDetails",
          value: function checkUserDetails() {
            var _this6 = this;

            console.log('Checking User Details ....');
            this.storage.get('userDetails').then(function (val) {
              console.log('userDetails:', val);
              _this6.userDetails = val;

              if (val) {
                _this6.common.statusBar.backgroundColorByHexString('#707072');

                _this6.navCtrl.navigateRoot(['tabs/tab6']);
              } else {
                _this6.statusBar.styleDefault();

                _this6.common.navCtrl.navigateRoot(['landing']);
              }
            });
          } // initializeApp() {
          //   this.common.platform.ready().then(() => {
          //   this.common.platform.platforms();
          //   this.common.splashScreen.hide();
          //   this.AjxService.initPush();
          //   this.storageservice.storage.get('userDetails')
          //   .then((val)=> {
          //     if(val) {
          //      this.common.statusBar.backgroundColorByHexString('#707072');
          //       this.common.navCtrl.navigateRoot('tabs/tab6');
          //     }else{
          //       this.common.navCtrl.navigateRoot('login');
          //     }
          //   });
          //     if (this.common.platform.is("capacitor"||"cordova")) {
          //       this.common.screenOrientation.lock(this.common.screenOrientation.ORIENTATIONS.PORTRAIT);
          //       console.log(this.common.screenOrientation.type);
          //     }
          //     else {
          //       console.log('This is a browser view');
          //     }
          //   });
          // }

        }, {
          key: "openPage",
          value: function openPage(i) {
            var route = this.appPages[i].url;
            this.common.router.navigate([route]);
          }
        }, {
          key: "reportIssue",
          value: function reportIssue() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var modal;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.common.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"],
                        componentProps: {
                          heading: 'REPORT AN ISSUE',
                          content: [{
                            title: 'General Feedback',
                            description: 'Tell us about your iMatch Experience'
                          }, {
                            title: 'Payment Issue',
                            description: 'Need help with iMatch payment? Contact Us'
                          }, {
                            title: 'Something Isn\'t working',
                            description: 'Let us know about broken feature'
                          }, {
                            title: 'Abusive Content',
                            description: 'This includes contents that are harmful, spam or a policy violation'
                          }]
                        },
                        backdropDismiss: false,
                        cssClass: 'menu-modal'
                      });

                    case 2:
                      modal = _context12.sent;
                      _context12.next = 5;
                      return modal.present();

                    case 5:
                      return _context12.abrupt("return", _context12.sent);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "gotoLogoutPopover",
          value: function gotoLogoutPopover() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var popover;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.common.popoverController.create({
                        component: _logout_popover_logout_popover_page__WEBPACK_IMPORTED_MODULE_4__["LogoutPopoverPage"],
                        backdropDismiss: false,
                        cssClass: 'my-custom-class',
                        animated: false,
                        translucent: true
                      });

                    case 2:
                      popover = _context13.sent;
                      _context13.next = 5;
                      return popover.present();

                    case 5:
                      return _context13.abrupt("return", _context13.sent);

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <!-- <ion-list-header>iMatch</ion-list-header> -->\r\n          <ion-searchbar class=\"menu-searchbar\" color=\"warning\"></ion-searchbar>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item (click)=\"openPage(i)\" routerDirection=\"root\" lines=\"none\" detail=\"false\">\r\n              <img class=\"menu-icons\" [src]=\"p.img\" />\r\n              <!-- <ion-icon color=\"light\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"> -->\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n            \r\n          </ion-menu-toggle>\r\n          <ion-item (click)=\"reportIssue()\">\r\n            <img style=\"width: 65px; margin: 10px 0 45px 25px;\" src=\"../../assets/icon/menu/report.png\">\r\n      \r\n          </ion-item>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\" (click)=\"gotoLogoutPopover()\">\r\n              <img class=\"menu-icons\" src=\"../../assets/icon/menu/log.png\">\r\n              <ion-label>Log Out</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "b6o4");
      /* harmony import */


      var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/twitter-connect/ngx */
      "+l8V");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/storage.service */
      "n90K");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "NzdG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _logout_popover_logout_popover_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./logout-popover/logout-popover.page */
      "Suwn");
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modal/modal.page */
      "Af+r");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "SPri");
      /* harmony import */


      var _services_ajax_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/ajax.service */
      "KKpL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "uRF+");
      /* harmony import */


      var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/file-picker/ngx */
      "CAsE");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "iWj2");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "t8sF");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "iQv9");
      /* harmony import */


      var _what_would_i_do_visitor_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./what-would-i-do-visitor.pipe */
      "DrFP");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "CjQN");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "4zgz"); // import { AngularFireAuthModule } from '@angular/fire/auth';
      // import { AngularFireModule } from '@angular/fire';
      // import { Base64 } from '@ionic-native/base64/ngx';
      // import { IonicImageViewerModule } from 'ionic-img-viewer';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _what_would_i_do_visitor_pipe__WEBPACK_IMPORTED_MODULE_26__["WhatWouldIDoVisitorPipe"], _logout_popover_logout_popover_page__WEBPACK_IMPORTED_MODULE_15__["LogoutPopoverPage"], _modal_modal_page__WEBPACK_IMPORTED_MODULE_16__["ModalPage"]],
        entryComponents: [_logout_popover_logout_popover_page__WEBPACK_IMPORTED_MODULE_15__["LogoutPopoverPage"], _modal_modal_page__WEBPACK_IMPORTED_MODULE_16__["ModalPage"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_19__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_17__["Facebook"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_20__["FileChooser"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_21__["IOSFilePicker"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_22__["FilePath"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_24__["Camera"], // Base64,
        _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_10__["TwitterConnect"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_13__["GooglePlus"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_30__["AndroidPermissions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__["SocialSharing"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_25__["PhotoViewer"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _services_ajax_service__WEBPACK_IMPORTED_MODULE_18__["AjaxService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_23__["File"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_28__["MediaCapture"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__["FileTransfer"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "n90K":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function n90K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage; //   this.items = [
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Liam',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Noah',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Logan',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'James',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Oliver',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Elijah',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Benjamin',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'William',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Lucas',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Regina',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Emma',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Ava',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Olivia',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Isabella',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Amelia',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Mia',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Evelyn',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Charlotte',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Sophia',
          //         add: '../../assets/icon/fans/add.png',
          //       },
          //       {
          //         image: '../../assets/icon/fans/1.jpg',
          //         name: 'Harper',
          //         add: '../../assets/icon/fans/add.png',
          //       } 
          //   ];
        }

        _createClass(StorageService, [{
          key: "setStorage",
          value: function setStorage(key, value) {
            this.storage.set(key, value);
          }
        }, {
          key: "getStorage",
          value: function getStorage(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.storage.get(key).then(function (val) {
                        console.log('Value From Storage:', val);
                        return val;
                      });

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "clearStorage",
          value: function clearStorage() {
            this.storage.clear();
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "oRyt":
    /*!*********************************************************!*\
      !*** ./src/app/logout-popover/logout-popover.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function oRyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQtcG9wb3Zlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "qdCT":
    /*!***************************************!*\
      !*** ./src/app/modal/modal.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function qdCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div-heading {\n  margin-top: 10px;\n  margin-left: 13px;\n  color: white;\n  font-size: 13px;\n  font-family: OpenSansBold;\n}\n\n.div-content {\n  margin-top: 5px;\n  margin-left: 15px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  color: lightgrey;\n  font-family: OpenSansRegular;\n}\n\n.div-border {\n  border-bottom: 1px solid darkgrey;\n}\n\n.cancel-button {\n  width: 110px;\n  height: 32px;\n  font-size: 12px;\n  margin-left: 56%;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQ0FBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoibW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1oZWFkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zQm9sZDtcclxufVxyXG4uZGl2LWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zUmVndWxhcjtcclxufVxyXG4uZGl2LWJvcmRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b257XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTYlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "u9Tr":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout-popover/logout-popover.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function u9Tr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"text-align: center; --background: #707072;\">\r\n\r\n  <div style=\"padding: 10px; color: white;\">\r\n\r\n    <div style=\"border: 1px solid white; padding: 5px;\">\r\n\r\n      <p>Are you sure , You want to </p>\r\n      <p style=\"font-weight: 600;\">LOGOUT ?</p>\r\n  \r\n      <div>\r\n        <ion-button style=\"width: 105px; text-transform: none; font-weight: 600;\" (click)=\"toCancel($event)\">Cancel</ion-button>\r\n        <ion-button style=\"width: 105px; text-transform: none; --background: #fcbb3b; color: black; font-weight: 600;\" (click)=\"toOkay($event)\">Okay</ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | landing-landing-module */
          "landing-landing-module").then(__webpack_require__.bind(null,
          /*! ./landing/landing.module */
          "WMCE")).then(function (m) {
            return m.LandingPageModule;
          });
        }
      }, {
        path: 'sign-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sign-up-sign-up-module */
          "sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ./sign-up/sign-up.module */
          "kEuc")).then(function (m) {
            return m.SignUpPageModule;
          });
        }
      }, {
        path: 'terms-of-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-of-service-terms-of-service-module */
          "terms-of-service-terms-of-service-module").then(__webpack_require__.bind(null,
          /*! ./terms-of-service/terms-of-service.module */
          "R7o1")).then(function (m) {
            return m.TermsOfServicePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-modal-module */
          "modal-modal-module").then(__webpack_require__.bind(null,
          /*! ./modal/modal.module */
          "hVeP")).then(function (m) {
            return m.ModalPageModule;
          });
        }
      }, {
        path: 'trending',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | trending-trending-module */
          "trending-trending-module").then(__webpack_require__.bind(null,
          /*! ./trending/trending.module */
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
          /*! ./headliners/headliners.module */
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
          /*! ./goodies/goodies.module */
          "zjWB")).then(function (m) {
            return m.GoodiesPageModule;
          });
        }
      }, {
        path: 'besties',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | besties-besties-module */
          "besties-besties-module").then(__webpack_require__.bind(null,
          /*! ./besties/besties.module */
          "BCzL")).then(function (m) {
            return m.BestiesPageModule;
          });
        }
      }, {
        path: 'blog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | blog-blog-module */
          "blog-blog-module").then(__webpack_require__.bind(null,
          /*! ./blog/blog.module */
          "U4+L")).then(function (m) {
            return m.BlogPageModule;
          });
        }
      }, {
        path: 'blog-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | blog-detail-blog-detail-module */
          "blog-detail-blog-detail-module").then(__webpack_require__.bind(null,
          /*! ./blog-detail/blog-detail.module */
          "9KgM")).then(function (m) {
            return m.BlogDetailPageModule;
          });
        }
      }, {
        path: 'besties-actions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | besties-actions-besties-actions-module */
          "besties-actions-besties-actions-module").then(__webpack_require__.bind(null,
          /*! ./besties-actions/besties-actions.module */
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
          /*! ./fans/fans.module */
          "lBs6")).then(function (m) {
            return m.FansPageModule;
          });
        }
      }, {
        path: 'fans-of',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | fans-of-fans-of-module */
          "fans-of-fans-of-module").then(__webpack_require__.bind(null,
          /*! ./fans-of/fans-of.module */
          "CsoH")).then(function (m) {
            return m.FansOfPageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-chat-module */
          "chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "2yxt")).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'chat-message',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-message-chat-message-module */
          "chat-message-chat-message-module").then(__webpack_require__.bind(null,
          /*! ./chat-message/chat-message.module */
          "4nb4")).then(function (m) {
            return m.ChatMessagePageModule;
          });
        }
      }, {
        path: 'comments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | comments-comments-module */
          "comments-comments-module").then(__webpack_require__.bind(null,
          /*! ./comments/comments.module */
          "UyQ7")).then(function (m) {
            return m.CommentsPageModule;
          });
        }
      }, {
        path: 'invitation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invitation-invitation-module */
          "invitation-invitation-module").then(__webpack_require__.bind(null,
          /*! ./invitation/invitation.module */
          "G0lb")).then(function (m) {
            return m.InvitationPageModule;
          });
        }
      }, {
        path: 'pending-open-matches',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pending-open-matches-pending-open-matches-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pending-open-matches-pending-open-matches-module")]).then(__webpack_require__.bind(null,
          /*! ./pending-open-matches/pending-open-matches.module */
          "q+Ws")).then(function (m) {
            return m.PendingOpenMatchesPageModule;
          });
        }
      }, {
        path: 'ongoing-match-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ongoing-match-detail-ongoing-match-detail-module */
          [__webpack_require__.e("default~ongoing-match-detail-ongoing-match-detail-module~personal-match-personal-match-module"), __webpack_require__.e("ongoing-match-detail-ongoing-match-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./ongoing-match-detail/ongoing-match-detail.module */
          "PW8U")).then(function (m) {
            return m.OnGoingMatchDetailPageModule;
          });
        }
      }, {
        path: 'group-members',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | group-members-group-members-module */
          "group-members-group-members-module").then(__webpack_require__.bind(null,
          /*! ./group-members/group-members.module */
          "yNOn")).then(function (m) {
            return m.GroupMembersPageModule;
          });
        }
      }, {
        path: 'besties-before',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | besties-before-besties-before-module */
          "besties-before-besties-before-module").then(__webpack_require__.bind(null,
          /*! ./besties-before/besties-before.module */
          "4as0")).then(function (m) {
            return m.BestiesBeforePageModule;
          });
        }
      }, {
        path: 'top-hundred',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | top-hundred-top-hundred-module */
          "top-hundred-top-hundred-module").then(__webpack_require__.bind(null,
          /*! ./top-hundred/top-hundred.module */
          "VcNi")).then(function (m) {
            return m.TopHundredPageModule;
          });
        }
      }, {
        path: 'what-would-i-do',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | what-would-i-do-what-would-i-do-module */
          "what-would-i-do-what-would-i-do-module").then(__webpack_require__.bind(null,
          /*! ./what-would-i-do/what-would-i-do.module */
          "zTOy")).then(function (m) {
            return m.WhatWouldIDoPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'squad-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | squad-list-squad-list-module */
          "squad-list-squad-list-module").then(__webpack_require__.bind(null,
          /*! ./squad-list/squad-list.module */
          "gZTL")).then(function (m) {
            return m.SquadListPageModule;
          });
        }
      }, {
        path: 'besties-search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | besties-search-besties-search-module */
          "besties-search-besties-search-module").then(__webpack_require__.bind(null,
          /*! ./besties-search/besties-search.module */
          "9po+")).then(function (m) {
            return m.BestiesSearchPageModule;
          });
        }
      }, {
        path: 'squad-search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | squad-search-squad-search-module */
          "squad-search-squad-search-module").then(__webpack_require__.bind(null,
          /*! ./squad-search/squad-search.module */
          "3Trc")).then(function (m) {
            return m.SquadSearchPageModule;
          });
        }
      }, {
        path: 'our-story',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | our-story-our-story-module */
          "our-story-our-story-module").then(__webpack_require__.bind(null,
          /*! ./our-story/our-story.module */
          "OWlh")).then(function (m) {
            return m.OurStoryPageModule;
          });
        }
      }, {
        path: 'our-slogan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | our-slogan-our-slogan-module */
          "our-slogan-our-slogan-module").then(__webpack_require__.bind(null,
          /*! ./our-slogan/our-slogan.module */
          "FA6K")).then(function (m) {
            return m.OurSloganPageModule;
          });
        }
      }, {
        path: 'letter',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | letter-letter-module */
          "letter-letter-module").then(__webpack_require__.bind(null,
          /*! ./letter/letter.module */
          "/0Hq")).then(function (m) {
            return m.LetterPageModule;
          });
        }
      }, {
        path: 'about-us',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-us-about-us-module */
          "about-us-about-us-module").then(__webpack_require__.bind(null,
          /*! ./about-us/about-us.module */
          "00wH")).then(function (m) {
            return m.AboutUsPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | faq-faq-module */
          "faq-faq-module").then(__webpack_require__.bind(null,
          /*! ./faq/faq.module */
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
          /*! ./help/help.module */
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
          /*! ./privacy-policy/privacy-policy.module */
          "TOq4")).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: 'before-match-invitation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | before-match-invitation-before-match-invitation-module */
          "before-match-invitation-before-match-invitation-module").then(__webpack_require__.bind(null,
          /*! ./before-match-invitation/before-match-invitation.module */
          "SBZo")).then(function (m) {
            return m.BeforeMatchInvitationPageModule;
          });
        }
      }, {
        path: 'open-match',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | open-match-open-match-module */
          "open-match-open-match-module").then(__webpack_require__.bind(null,
          /*! ./open-match/open-match.module */
          "jolV")).then(function (m) {
            return m.OpenMatchPageModule;
          });
        }
      }, {
        path: 'search-fans',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-fans-search-fans-module */
          "search-fans-search-fans-module").then(__webpack_require__.bind(null,
          /*! ./search-fans/search-fans.module */
          "4/Hv")).then(function (m) {
            return m.SearchFansPageModule;
          });
        }
      }, {
        path: 'search-fans-of',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-fans-of-search-fans-of-module */
          "search-fans-of-search-fans-of-module").then(__webpack_require__.bind(null,
          /*! ./search-fans-of/search-fans-of.module */
          "Pn2D")).then(function (m) {
            return m.SearchFansOfPageModule;
          });
        }
      }, {
        path: 'search-users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-users-search-users-module */
          "search-users-search-users-module").then(__webpack_require__.bind(null,
          /*! ./search-users/search-users.module */
          "mFBr")).then(function (m) {
            return m.SearchUsersPageModule;
          });
        }
      }, {
        path: 'visitors-view-activity',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-view-activity-visitors-view-activity-module */
          "visitors-view-activity-visitors-view-activity-module").then(__webpack_require__.bind(null,
          /*! ./visitors-view-activity/visitors-view-activity.module */
          "PayK")).then(function (m) {
            return m.VisitorsViewActivityPageModule;
          });
        }
      }, {
        path: 'search-match-users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-match-users-search-match-users-module */
          "search-match-users-search-match-users-module").then(__webpack_require__.bind(null,
          /*! ./search-match-users/search-match-users.module */
          "fcuJ")).then(function (m) {
            return m.SearchMatchUsersPageModule;
          });
        }
      }, {
        path: 'what-would-i-do-visitor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | what-would-i-do-visitor-what-would-i-do-visitor-module */
          "what-would-i-do-visitor-what-would-i-do-visitor-module").then(__webpack_require__.bind(null,
          /*! ./what-would-i-do-visitor/what-would-i-do-visitor.module */
          "R+Sz")).then(function (m) {
            return m.WhatWouldIDoVisitorPageModule;
          });
        }
      }, {
        path: 'i-query-comments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | i-query-comments-i-query-comments-module */
          "i-query-comments-i-query-comments-module").then(__webpack_require__.bind(null,
          /*! ./i-query-comments/i-query-comments.module */
          "dZ8Q")).then(function (m) {
            return m.IQueryCommentsPageModule;
          });
        }
      }, {
        path: 'i-query2-comments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | i-query2-comments-i-query2-comments-module */
          "i-query2-comments-i-query2-comments-module").then(__webpack_require__.bind(null,
          /*! ./i-query2-comments/i-query2-comments.module */
          "aJGD")).then(function (m) {
            return m.IQuery2CommentsPageModule;
          });
        }
      }, {
        path: 'open-match-comments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | open-match-comments-open-match-comments-module */
          "open-match-comments-open-match-comments-module").then(__webpack_require__.bind(null,
          /*! ./open-match-comments/open-match-comments.module */
          "I8vD")).then(function (m) {
            return m.OpenMatchCommentsPageModule;
          });
        }
      }, {
        path: 'funny',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | funny-funny-module */
          "funny-funny-module").then(__webpack_require__.bind(null,
          /*! ./funny/funny.module */
          "EsPy")).then(function (m) {
            return m.FunnyPageModule;
          });
        }
      }, {
        path: 'art-entertainment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | art-entertainment-art-entertainment-module */
          "art-entertainment-art-entertainment-module").then(__webpack_require__.bind(null,
          /*! ./art-entertainment/art-entertainment.module */
          "QR9S")).then(function (m) {
            return m.ArtEntertainmentPageModule;
          });
        }
      }, {
        path: 'beauty-fashion',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | beauty-fashion-beauty-fashion-module */
          "beauty-fashion-beauty-fashion-module").then(__webpack_require__.bind(null,
          /*! ./beauty-fashion/beauty-fashion.module */
          "HsJr")).then(function (m) {
            return m.BeautyFashionPageModule;
          });
        }
      }, {
        path: 'visitors-fans-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-fans-view-visitors-fans-view-module */
          "visitors-fans-view-visitors-fans-view-module").then(__webpack_require__.bind(null,
          /*! ./visitors-fans-view/visitors-fans-view.module */
          "1soL")).then(function (m) {
            return m.VisitorsFansViewPageModule;
          });
        }
      }, {
        path: 'visitors-fans-of-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-fans-of-view-visitors-fans-of-view-module */
          "visitors-fans-of-view-visitors-fans-of-view-module").then(__webpack_require__.bind(null,
          /*! ./visitors-fans-of-view/visitors-fans-of-view.module */
          "JrO5")).then(function (m) {
            return m.VisitorsFansOfViewPageModule;
          });
        }
      }, {
        path: 'visitors-besties-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-besties-view-visitors-besties-view-module */
          "visitors-besties-view-visitors-besties-view-module").then(__webpack_require__.bind(null,
          /*! ./visitors-besties-view/visitors-besties-view.module */
          "WMM1")).then(function (m) {
            return m.VisitorsBestiesViewPageModule;
          });
        }
      }, {
        path: 'visitors-squad-list-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-squad-list-view-visitors-squad-list-view-module */
          "visitors-squad-list-view-visitors-squad-list-view-module").then(__webpack_require__.bind(null,
          /*! ./visitors-squad-list-view/visitors-squad-list-view.module */
          "UUhr")).then(function (m) {
            return m.VisitorsSquadListViewPageModule;
          });
        }
      }, {
        path: 'logout-popover',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | logout-popover-logout-popover-module */
          "logout-popover-logout-popover-module").then(__webpack_require__.bind(null,
          /*! ./logout-popover/logout-popover.module */
          "60q3")).then(function (m) {
            return m.LogoutPopoverPageModule;
          });
        }
      }, {
        path: 'search-chat-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-chat-user-search-chat-user-module */
          "search-chat-user-search-chat-user-module").then(__webpack_require__.bind(null,
          /*! ./search-chat-user/search-chat-user.module */
          "IY1n")).then(function (m) {
            return m.SearchChatUserPageModule;
          });
        }
      }, {
        path: 'best-moments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | best-moments-best-moments-module */
          "best-moments-best-moments-module").then(__webpack_require__.bind(null,
          /*! ./best-moments/best-moments.module */
          "y2n3")).then(function (m) {
            return m.BestMomentsPageModule;
          });
        }
      }, {
        path: 'best-moments-add',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | best-moments-add-best-moments-add-module */
          "best-moments-add-best-moments-add-module").then(__webpack_require__.bind(null,
          /*! ./best-moments-add/best-moments-add.module */
          "uWXi")).then(function (m) {
            return m.BestMomentsAddPageModule;
          });
        }
      }, {
        path: 'best-moment-visitors-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | best-moment-visitors-view-best-moment-visitors-view-module */
          "best-moment-visitors-view-best-moment-visitors-view-module").then(__webpack_require__.bind(null,
          /*! ./best-moment-visitors-view/best-moment-visitors-view.module */
          "h8H9")).then(function (m) {
            return m.BestMomentVisitorsViewPageModule;
          });
        }
      }, {
        path: 'best-moment-visitors-comment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | best-moment-visitors-comment-best-moment-visitors-comment-module */
          "best-moment-visitors-comment-best-moment-visitors-comment-module").then(__webpack_require__.bind(null,
          /*! ./best-moment-visitors-comment/best-moment-visitors-comment.module */
          "zyBT")).then(function (m) {
            return m.BestMomentVisitorsCommentPageModule;
          });
        }
      }, {
        path: 'best-moment-comment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | best-moment-comment-best-moment-comment-module */
          "best-moment-comment-best-moment-comment-module").then(__webpack_require__.bind(null,
          /*! ./best-moment-comment/best-moment-comment.module */
          "tZhb")).then(function (m) {
            return m.BestMomentCommentPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "7wo0")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'personal-match',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | personal-match-personal-match-module */
          [__webpack_require__.e("default~ongoing-match-detail-ongoing-match-detail-module~personal-match-personal-match-module"), __webpack_require__.e("personal-match-personal-match-module")]).then(__webpack_require__.bind(null,
          /*! ./personal-match/personal-match.module */
          "OEWt")).then(function (m) {
            return m.PersonalMatchPageModule;
          });
        }
      }, {
        path: 'visitors-personal-match-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-personal-match-view-visitors-personal-match-view-module */
          "visitors-personal-match-view-visitors-personal-match-view-module").then(__webpack_require__.bind(null,
          /*! ./visitors-personal-match-view/visitors-personal-match-view.module */
          "KUpr")).then(function (m) {
            return m.VisitorsPersonalMatchViewPageModule;
          });
        }
      }, {
        path: 'personal-match-comments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | personal-match-comments-personal-match-comments-module */
          "personal-match-comments-personal-match-comments-module").then(__webpack_require__.bind(null,
          /*! ./personal-match-comments/personal-match-comments.module */
          "P40h")).then(function (m) {
            return m.PersonalMatchCommentsPageModule;
          });
        }
      }, {
        path: 'visitors-ongoing-match',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-ongoing-match-visitors-ongoing-match-module */
          "visitors-ongoing-match-visitors-ongoing-match-module").then(__webpack_require__.bind(null,
          /*! ./visitors-ongoing-match/visitors-ongoing-match.module */
          "X4x1")).then(function (m) {
            return m.VisitorsOngoingMatchPageModule;
          });
        }
      }, {
        path: 'personal-match-media-upload',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | personal-match-media-upload-personal-match-media-upload-module */
          "personal-match-media-upload-personal-match-media-upload-module").then(__webpack_require__.bind(null,
          /*! ./personal-match-media-upload/personal-match-media-upload.module */
          "200W")).then(function (m) {
            return m.PersonalMatchMediaUploadPageModule;
          });
        }
      }, {
        path: 'visitors-open-match',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | visitors-open-match-visitors-open-match-module */
          "visitors-open-match-visitors-open-match-module").then(__webpack_require__.bind(null,
          /*! ./visitors-open-match/visitors-open-match.module */
          "8ks0")).then(function (m) {
            return m.VisitorsOpenMatchPageModule;
          });
        }
      }, {
        path: 'personal-match-revealed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | personal-match-revealed-personal-match-revealed-module */
          "personal-match-revealed-personal-match-revealed-module").then(__webpack_require__.bind(null,
          /*! ./personal-match-revealed/personal-match-revealed.module */
          "mMCz")).then(function (m) {
            return m.PersonalMatchRevealedPageModule;
          });
        }
      }, {
        path: 'besties-comment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | besties-comment-besties-comment-module */
          "besties-comment-besties-comment-module").then(__webpack_require__.bind(null,
          /*! ./besties-comment/besties-comment.module */
          "8hJ9")).then(function (m) {
            return m.BestiesCommentPageModule;
          });
        }
      }, {
        path: 'add-reject-besties',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-reject-besties-add-reject-besties-module */
          "add-reject-besties-add-reject-besties-module").then(__webpack_require__.bind(null,
          /*! ./add-reject-besties/add-reject-besties.module */
          "b4cN")).then(function (m) {
            return m.AddRejectBestiesPageModule;
          });
        }
      }, {
        path: 'squad-list-invitation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | squad-list-invitation-squad-list-invitation-module */
          "squad-list-invitation-squad-list-invitation-module").then(__webpack_require__.bind(null,
          /*! ./squad-list-invitation/squad-list-invitation.module */
          "2SgR")).then(function (m) {
            return m.SquadListInvitationPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wwHD":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function wwHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title style=\"margin-left: 25px; font-size: 18px; font-family: OpenSansBold; text-transform: uppercase;\">{{heading}}</ion-title>\r\n    <ion-icon name=\"close-outline\" slot=\"end\" size=\"large\" (click)=\"dismissModal()\" style=\"margin-top: -23px; width: 26px;\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"dark\">\r\n\r\n  <div *ngFor=\"let c of content\">\r\n    <div class='div-heading'>{{c.title}}</div>\r\n    <div class='div-content'>{{c.description}}</div>\r\n    <div class='div-border'></div>\r\n  </div>\r\n  \r\n  <ion-button shape=\"round\" expand=\"block\" color=\"danger\" class=\"cancel-button\" (click)=\"dismissModal()\">CANCEL</ion-button>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --ion-background-color: #59595b;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  color: white;\n}\n\nion-menu.md ion-item {\n  border-bottom: 0.5px solid dimgray;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.menu-icons {\n  width: 18px;\n  margin-right: 10px;\n  margin-left: 5px;\n}\n\nion-searchbar {\n  --border-radius: 30px;\n  margin-top: -26px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBR0U7O0VBRUUsa0JBQUE7QUFBSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFSSjs7QUFXRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQWVFO0VBQ0UsK0JBQUE7QUFaSjs7QUFlRTtFQUNFLGNBQUE7QUFaSjs7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVFO0VBQ0Usa0NBQUE7QUFaSjs7QUFnQkU7RUFDRSxzQkFBQTtBQWJKOztBQWdCRTtFQUNFLG1CQUFBO0FBYko7O0FBZ0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWdCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCRTtFQUNFLCtCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFiSjs7QUFnQkU7RUFDRSxrQkFBQTtBQWJKOztBQWdCRTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZ0JFO0VBQ0Usa0JBQUE7QUFiSjs7QUFnQkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQWRKOztBQWlCRTtFQUNFLGlDQUFBO0FBZEo7O0FBaUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFkSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTViO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuLy8gICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4vLyAgIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICBcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuLy8gICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCByZ2IoMTA1LCAxMDUsIDEwNSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzczODQ5YTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbnMge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map