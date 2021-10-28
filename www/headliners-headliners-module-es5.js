(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["headliners-headliners-module"], {
    /***/
    "+KWW":
    /*!*********************************************************!*\
      !*** ./src/app/headliners/headliners-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: HeadlinersPageRoutingModule */

    /***/
    function KWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeadlinersPageRoutingModule", function () {
        return HeadlinersPageRoutingModule;
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


      var _headliners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./headliners.page */
      "781G");

      var routes = [{
        path: '',
        component: _headliners_page__WEBPACK_IMPORTED_MODULE_3__["HeadlinersPage"]
      }];

      var HeadlinersPageRoutingModule = function HeadlinersPageRoutingModule() {
        _classCallCheck(this, HeadlinersPageRoutingModule);
      };

      HeadlinersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HeadlinersPageRoutingModule);
      /***/
    },

    /***/
    "781G":
    /*!***********************************************!*\
      !*** ./src/app/headliners/headliners.page.ts ***!
      \***********************************************/

    /*! exports provided: HeadlinersPage */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeadlinersPage", function () {
        return HeadlinersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_headliners_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./headliners.page.html */
      "NvMI");
      /* harmony import */


      var _headliners_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./headliners.page.scss */
      "ZAeM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");

      var HeadlinersPage = /*#__PURE__*/function () {
        function HeadlinersPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, HeadlinersPage);

          this.storageservice = storageservice;
          this.common = common;
          this.headliners = [{
            name: 'Ebond Gold'
          }, {
            name: 'Sally Brint'
          }, {
            name: 'Pritty Kavitha'
          }, {
            name: 'Linne Craig'
          }, {
            name: 'Layla'
          }];
          this.userDetails = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
        }

        _createClass(HeadlinersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.windowHeight = window.innerHeight;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered into Headliners Page');
            var params = {
              userid: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.postMethod('Headline', params).then(function (res) {
              console.log('res:', res);
              _this2.FirstHeadliner = res.details.first_headline;
              _this2.SecondHeadliner = res.details.second_headline;
              _this2.ThirdHeadliner = res.details.Third_headline;
              _this2.FourthHeadliner = res.details.Fourth_headline;
              _this2.FifthHeadliner = res.details.Fifth_headline;
              _this2.SixthHeadliner = res.details.Sixth_headline;
            });
          }
        }, {
          key: "toAddFirstUserasFan",
          value: function toAddFirstUserasFan(event, FirstHeadliner) {
            var _this3 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('FirstHeadliner:', FirstHeadliner);

            if (FirstHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: FirstHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this3.common.presentToast(FirstHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this3.common.presentToast(FirstHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }, {
          key: "toAddSecondUserasFan",
          value: function toAddSecondUserasFan(event, SecondHeadliner) {
            var _this4 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('SecondHeadliner:', SecondHeadliner);

            if (SecondHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: SecondHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this4.common.presentToast(SecondHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this4.common.presentToast(SecondHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }, {
          key: "toAddThirdUserasFan",
          value: function toAddThirdUserasFan(event, ThirdHeadliner) {
            var _this5 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('ThirdHeadliner:', ThirdHeadliner);

            if (ThirdHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: ThirdHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this5.common.presentToast(ThirdHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this5.common.presentToast(ThirdHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }, {
          key: "toAddFourthUserasFan",
          value: function toAddFourthUserasFan(event, FourthHeadliner) {
            var _this6 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('FourthHeadliner:', FourthHeadliner);

            if (FourthHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: FourthHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this6.common.presentToast(FourthHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this6.common.presentToast(FourthHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }, {
          key: "toAddFifthUserasFan",
          value: function toAddFifthUserasFan(event, FifthHeadliner) {
            var _this7 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('FifthHeadliner:', FifthHeadliner);

            if (FifthHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: FifthHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this7.common.presentToast(FifthHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this7.common.presentToast(FifthHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }, {
          key: "toAddSixthUserasFan",
          value: function toAddSixthUserasFan(event, SixthHeadliner) {
            var _this8 = this;

            console.log('Add User As Fan Button Clicked');
            console.log('SixthHeadliner:', SixthHeadliner);

            if (SixthHeadliner.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: SixthHeadliner.userid,
                category: 'fan'
              };
              console.log('params:', params);
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this8.common.presentToast(SixthHeadliner.name + ' is added to your fan list');
                } else if (res.message == "Already added ") {
                  _this8.common.presentToast(SixthHeadliner.name + ' is already added to your fans list ...');
                } else {///////////////
                }
              });
            } else {
              this.common.presentToast('Here is no headliner to add as fan');
            }
          }
        }]);

        return HeadlinersPage;
      }();

      HeadlinersPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      HeadlinersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-headliners',
        template: _raw_loader_headliners_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_headliners_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeadlinersPage);
      /***/
    },

    /***/
    "FJhp":
    /*!*************************************************!*\
      !*** ./src/app/headliners/headliners.module.ts ***!
      \*************************************************/

    /*! exports provided: HeadlinersPageModule */

    /***/
    function FJhp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeadlinersPageModule", function () {
        return HeadlinersPageModule;
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


      var _headliners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./headliners-routing.module */
      "+KWW");
      /* harmony import */


      var _headliners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./headliners.page */
      "781G");

      var HeadlinersPageModule = function HeadlinersPageModule() {
        _classCallCheck(this, HeadlinersPageModule);
      };

      HeadlinersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _headliners_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeadlinersPageRoutingModule"]],
        declarations: [_headliners_page__WEBPACK_IMPORTED_MODULE_6__["HeadlinersPage"]]
      })], HeadlinersPageModule);
      /***/
    },

    /***/
    "NvMI":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/headliners/headliners.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function NvMI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">HEADLINERS OF THE MOMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content>\r\n  \r\n    <!-- Slider -->\r\n  \r\n    <ion-slides pager=\"true\" class=\"headliners-slides\">\r\n  \r\n      <!-- Slide 1 -->\r\n  \r\n      <ion-slide style=\"position: relative;\">\r\n  \r\n        <div class=\"slides\" >\r\n  \r\n          <div class=\"slide1-heart\">\r\n            <ion-icon name=\"heart\" color=\"warning\"></ion-icon>\r\n            <span *ngIf=\"FirstHeadliner\" style=\"font-family: OpenSansSemiBold; font-size: 15px; position: absolute; margin-top: -1px; margin-left: 5px;\"> {{FirstHeadliner.likes}} </span>\r\n          </div>\r\n  \r\n          <div class=\"slide1-openMatch\">\r\n            <img style=\"width: 80px; position: relative; left: -18px;\" src=\"../../assets/icon/headliners/match.png\">\r\n            <span style=\"position: absolute; color: #f21908; font-family: OpenSansExtraBold; font-size: 11px; font-weight: bold; margin: 67px 0px 0px -116px;\">Open Match Contest</span>\r\n          </div>\r\n  \r\n          <div class=\"slide1-profile\">\r\n            <ion-avatar slot=\"end\" style=\"position: relative; margin: -70px 0px 0px 235px; width: 65px;\">\r\n              <img *ngIf=\"FirstHeadliner\" style=\"border: 2px solid #fcbb3b; height: 60px;\" [src]=\"FirstHeadliner.profile_pic\">\r\n\r\n            </ion-avatar>\r\n            <span style=\"position: absolute; font-family: OpenSansExtraBold; font-size: 10px; font-weight: bold; margin: -1px 0px 0px 95px;\" *ngIf=\"FirstHeadliner\"> {{FirstHeadliner.name}} </span>\r\n            <span> <ion-icon name=\"add\" class=\"add-icon\"></ion-icon> </span>\r\n          </div>\r\n            \r\n        </div>\r\n  \r\n      </ion-slide>\r\n  \r\n      <!-- Slide 1 Ends -->\r\n  \r\n      <!-- Slide 2 Starts-->\r\n  \r\n      <ion-slide>\r\n  \r\n      <div class=\"slides\">\r\n\r\n        <!-- First Half -->\r\n\r\n        <div class=\"slide2-top\">\r\n          \r\n          <div>\r\n             \r\n            <img style=\"width: 235px; height: 48px;\" src=\"../../assets/icon/headliners/arrow.png\">\r\n            <img style=\"width: 25px; margin: 0 0 16px -185px\" src=\"../../assets/icon/headliners/glove.png\">\r\n            <img style=\"width: 25px; margin: 0 0 15px 12px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/glove.png\">\r\n            <div style=\"margin: -50px 0 30px 16px; padding-top: 10px;\">\r\n              <ion-icon name=\"heart\" color=\"warning\" style=\"margin: 0 0 0px 143px;\"></ion-icon>\r\n              <span *ngIf=\"SecondHeadliner\" style=\"font-family: OpenSansSemiBold; font-size: 14px; position: absolute; margin-top: -2px; margin-left: 5px; color: white;\"> {{SecondHeadliner.likes}} </span>\r\n            </div>\r\n              \r\n          </div>\r\n  \r\n          <ion-avatar slot=\"end\" style=\"position: relative; margin: -64px 0px 0px 471px; width: 45px;\">\r\n            <img *ngIf=\"SecondHeadliner\" style=\"border: 2px solid #fcbb3b; height: 40px;\" [src]=\"SecondHeadliner.profile_pic\">\r\n          </ion-avatar>\r\n          <span *ngIf=\"SecondHeadliner\" style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -25px 0px 0px 195px;\"> {{SecondHeadliner.name}} </span>\r\n  \r\n        </div>\r\n  \r\n        <!-- First Half Ends -->\r\n  \r\n        <!-- Second Half -->\r\n  \r\n        <div class=\"slide2-bottom\" *ngIf=\"SecondHeadliner\">\r\n          \r\n          <div>\r\n  \r\n            <img style=\"width: 200px; height: 48px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/arrow.png\">\r\n            <div style=\"margin: -108px 0 36px -262px; padding-top: 10px;\">\r\n                <ion-icon name=\"heart\" color=\"warning\" style=\"margin: 0 0 -61px 145px;\"></ion-icon>\r\n                <span style=\"font-family: OpenSansSemiBold; font-size: 14px; position: absolute; margin-top: 57px; margin-left: 5px; color: white;\">{{SecondHeadliner.like}}</span>\r\n              </div>\r\n            <img style=\"width: 25px; margin: 0 0 20px 107px; transform: rotate(0deg);\" src=\"../../assets/icon/headliners/glove.png\">\r\n            <img style=\"width: 25px; margin: 0 0 17px 12px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/glove.png\">\r\n            \r\n  \r\n          </div>\r\n          \r\n          <ion-avatar slot=\"end\" style=\"position: relative; margin: -69px 0px -7px -94px; width: 45px;\">\r\n            <img style=\"border: 2px solid #fcbb3b; height: 40px; margin: 5px 0 0px 8px;\" [src]=\"SecondHeadliner.profile_pic\">\r\n          </ion-avatar>\r\n          <span style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -14px 0px 0px -183px;\">{{SecondHeadliner.name}}</span>\r\n          \r\n        </div>\r\n\r\n        <!-- Second Half Ends -->\r\n\r\n      </div>\r\n          \r\n      </ion-slide>\r\n\r\n      <!-- Slide 2 Ends -->\r\n\r\n      <!-- Slide 3 starts -->\r\n      <ion-slide>\r\n  \r\n        <div class=\"slides\">\r\n  \r\n          <!-- First Half -->\r\n  \r\n          <div class=\"slide2-top\">\r\n            \r\n            <div style=\"position: relative; left: 55px; top: 3px;\">\r\n               \r\n              <img style=\"width: 222px; height: 48px;\" src=\"../../assets/icon/headliners/arrow.png\">\r\n              <div style=\"position: relative; bottom: 42px;\">\r\n                <span style=\"font-size: 14px; position: absolute; color: white; font-weight: 600; font-family: OpenSansSemiBold; left: 31%; top: 3px;\">Personal Match</span>\r\n                <img style=\"width: 25px; margin: 0 0 15px 89px; transform: rotate(0deg);\" src=\"../../assets/icon/headliners/glove.png\">\r\n                <img style=\"width: 25px; margin: 0 0 17px 12px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/glove.png\">\r\n              </div>\r\n                \r\n            </div>\r\n    \r\n            <ion-avatar slot=\"end\" style=\"position: relative; margin: -90px 0px 0px 478px; width: 45px; bottom: 5px;\">\r\n              <img style=\"border: 2px solid #fcbb3b; height: 40px; margin: 5px 0 0px 8px;\" src=\"../../assets/icon/headliners/user.png\">\r\n  \r\n            </ion-avatar>\r\n            <span style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -25px 0px 0px 195px;\">User Name</span>\r\n    \r\n          </div>\r\n    \r\n          <!-- First Half Ends -->\r\n    \r\n          <!-- Second Half -->\r\n    \r\n          <div class=\"slide2-bottom\">\r\n            \r\n            <div>\r\n    \r\n              <img style=\"width: 200px; height: 48px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/arrow.png\">\r\n              <div style=\"margin: -108px 0 36px -262px; padding-top: 10px;\">\r\n                  <span style=\"font-family: OpenSansSemiBold; font-size: 14px; position: absolute; margin-top: 57px; margin-left: 65px; color: white;\">Comments</span>\r\n                </div>\r\n                <img style=\"width: 24px; height: 21px; position: relative; top: 23px; left: 40px;\" src=\"../../assets/icon/headliners/msg.png\" alt=\"\">\r\n                <span style=\"color: white; position: relative; top: 17px; left: 46px; font-size: 14px;\">0</span>\r\n\r\n            </div>\r\n            \r\n            <ion-avatar slot=\"end\" style=\"position: relative; margin: -30px 0px -7px -94px; width: 45px;\">\r\n              <img style=\"border: 2px solid #fcbb3b; height: 40px; margin: 5px 0 0px 8px;\" src=\"../../assets/icon/headliners/user.png\">\r\n  \r\n            </ion-avatar>\r\n            <span style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -13px 0px 0px -192px;\">User Name</span>\r\n            \r\n          </div>\r\n  \r\n          <!-- Second Half Ends -->\r\n  \r\n        </div>\r\n            \r\n        </ion-slide>\r\n  \r\n      <!-- Slide 3 Ends -->\r\n  \r\n      <!-- Slide 4 Starts -->\r\n  \r\n      <ion-slide>\r\n  \r\n        <div class=\"slides\">\r\n  \r\n          <!-- First Half -->\r\n  \r\n          <div class=\"slide2-top\">\r\n            \r\n            <div style=\"position: relative; left: 55px; top: 3px;\">\r\n               \r\n              <img style=\"width: 222px; height: 48px;\" src=\"../../assets/icon/headliners/arrow.png\">\r\n              <div style=\"position: relative; bottom: 42px;\">\r\n                <span style=\"font-size: 14px; position: absolute; color: white; font-weight: 600; font-family: OpenSansSemiBold; bottom: 3px; left: 32%;\">Squad List</span>\r\n                <img style=\"width: 24px; height: 21px; position: relative; top: 3px; left: 30px;\" src=\"../../assets/icon/headliners/heart.png\" alt=\"\">\r\n                <span style=\"color: white; margin-left: 6px; font-size: 14px; position: relative; top: -3px; left: 34px;\">0</span>\r\n              </div>\r\n                \r\n            </div>\r\n    \r\n            <ion-avatar slot=\"end\" style=\"position: relative; margin: -70px 0px 0px 478px; width: 45px; bottom: 5px;\">\r\n              <img style=\"border: 2px solid #fcbb3b; height: 40px; margin: 5px 0 0px 8px;\" src=\"../../assets/icon/headliners/user.png\">\r\n  \r\n            </ion-avatar>\r\n            <span style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -25px 0px 0px 195px;\">User Name</span>\r\n    \r\n          </div>\r\n    \r\n          <!-- First Half Ends -->\r\n    \r\n          <!-- Second Half -->\r\n    \r\n          <div class=\"slide2-bottom\">\r\n            \r\n            <div>\r\n    \r\n              <img style=\"width: 200px; height: 48px; transform: rotate(180deg)\" src=\"../../assets/icon/headliners/arrow.png\">\r\n              <div style=\"margin: -108px 0 36px -262px; padding-top: 10px;\">\r\n                  <span style=\"font-family: OpenSansSemiBold; font-size: 14px; position: absolute; margin-top: 57px; margin-left: 65px; color: white;\">iQuery</span>\r\n                </div>\r\n              <img style=\"width: 24px; height: 21px; position: relative; top: 22px; left: 10px;\" src=\"../../assets/icon/headliners/heart.png\" alt=\"\">\r\n              <span style=\"color: white; position: relative; top: 15px; left: 16px; font-size: 14px;\">0</span>\r\n            </div>\r\n            \r\n            <ion-avatar slot=\"end\" style=\"position: relative; margin: -33px 0px -7px -94px; width: 45px;\">\r\n              <img style=\"border: 2px solid #fcbb3b; height: 40px; margin: 5px 0 0px 8px;\" src=\"../../assets/icon/headliners/user.png\">\r\n  \r\n            </ion-avatar>\r\n            <span style=\"position: absolute; font-family: OpenSansBold; font-size: 12px; font-weight: bold; margin: -13px 0px 0px -192px;\">User Name</span>\r\n            \r\n          </div>\r\n  \r\n          <!-- Second Half Ends -->\r\n  \r\n        </div>\r\n            \r\n        </ion-slide>\r\n  \r\n      <!-- Slide 4 Ends -->\r\n  \r\n    </ion-slides>\r\n  \r\n    <!-- Slider Ends -->\r\n  \r\n    <!-- Content Below Slider -->\r\n  \r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"FirstHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"FirstHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"FirstHeadliner\"> {{FirstHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddFirstUserasFan($event,FirstHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"SecondHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"SecondHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"SecondHeadliner\"> {{SecondHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddSecondUserasFan($event,SecondHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"ThirdHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"ThirdHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"ThirdHeadliner\"> {{ThirdHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddThirdUserasFan($event,ThirdHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"FourthHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"FourthHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"FourthHeadliner\"> {{FourthHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddFourthUserasFan($event,FourthHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"FifthHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"FifthHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"FifthHeadliner\"> {{FifthHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddFifthUserasFan($event,FifthHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n\r\n    <div style=\"margin-top: -10px;\">\r\n  \r\n      <ion-item  lines=\"none\">\r\n        <ion-avatar slot=\"start\">\r\n          <img *ngIf=\"SixthHeadliner\" style=\"border: 2px solid #fcbb3b; height: 35px;\" [src]=\"SixthHeadliner.profile_pic\">\r\n        </ion-avatar>\r\n        <ion-label style=\"margin-top: 5px;\" *ngIf=\"SixthHeadliner\"> {{SixthHeadliner.name}} </ion-label>\r\n        <ion-icon name=\"add-circle\" color=\"dark\" slot=\"end\" (click)=\"toAddSixthUserasFan($event,SixthHeadliner)\"></ion-icon>\r\n      </ion-item>\r\n      \r\n      <div class=\"border-bottom\"></div>\r\n  \r\n    </div>\r\n  \r\n    <!-- Content Below Slider Ends -->\r\n  \r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "ZAeM":
    /*!*************************************************!*\
      !*** ./src/app/headliners/headliners.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ZAeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('headliners-bg.png') 0 0/100% 100% no-repeat;\n}\n\n.slides {\n  border: 1px solid transparent;\n  width: 320px;\n  height: 114px;\n  margin-top: 35px;\n}\n\nion-item {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  font-family: OpenSansRegular;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0px 70px 0px 0px;\n  padding: 3px;\n}\n\n.border-bottom {\n  border-bottom: 0.5px solid gray;\n  width: 265px;\n  margin-left: 17px;\n  margin-top: -7px;\n  margin-bottom: 10px;\n}\n\n.slide1-heart {\n  position: absolute;\n  left: 32px;\n  top: 55px;\n}\n\n.slide1-openMatch {\n  position: absolute;\n  margin-top: 20px;\n  margin-left: 125px;\n}\n\n.slide1-profile {\n  position: absolute;\n  top: 130px;\n  right: 35px;\n}\n\n.slide2-top {\n  position: relative;\n  margin-top: 15px;\n  margin-left: -237px;\n}\n\n.slide2-bottom {\n  position: absolute;\n  margin-left: 135px;\n  margin-top: -3px;\n}\n\n@media screen and (min-height: 701px) and (max-height: 770px) {\n  .slide1-heart {\n    top: 60px;\n  }\n\n  .slide1-openMatch {\n    margin-top: 35px;\n  }\n\n  .slide1-profile {\n    top: 145px;\n  }\n\n  .slide2-top {\n    margin-top: 20px;\n  }\n\n  .slide2-bottom {\n    margin-top: 0px;\n  }\n}\n\n@media screen and (min-height: 771px) and (max-height: 810px) {\n  .slide1-heart {\n    top: 65px;\n  }\n\n  .slide1-openMatch {\n    margin-top: 40px;\n  }\n\n  .slide1-profile {\n    top: 150px;\n  }\n\n  .slide2-top {\n    margin-top: 30px;\n  }\n\n  .slide2-bottom {\n    margin-top: 0px;\n  }\n}\n\n@media screen and (min-height: 811px) and (max-height: 850px) {\n  .slide1-heart {\n    top: 70px;\n  }\n\n  .slide1-openMatch {\n    margin-top: 50px;\n  }\n\n  .slide1-profile {\n    top: 160px;\n  }\n\n  .slide2-top {\n    margin-top: 35px;\n  }\n\n  .slide2-bottom {\n    margin-top: 15px;\n  }\n}\n\n.add-icon {\n  position: relative;\n  left: 117px;\n  top: 17px;\n  color: white;\n  font-weight: bold;\n  background-color: #f21b0a;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRsaW5lcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOERBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJO0lBQ0ksU0FBQTtFQU1OOztFQUpFO0lBQ0ksZ0JBQUE7RUFPTjs7RUFMRTtJQUNJLFVBQUE7RUFRTjs7RUFORTtJQUNJLGdCQUFBO0VBU047O0VBUEU7SUFDSSxlQUFBO0VBVU47QUFDRjs7QUFSRTtFQUNFO0lBQ0ksU0FBQTtFQVVOOztFQVJFO0lBQ0ksZ0JBQUE7RUFXTjs7RUFURTtJQUNJLFVBQUE7RUFZTjs7RUFWRTtJQUNJLGdCQUFBO0VBYU47O0VBWEU7SUFDSSxlQUFBO0VBY047QUFDRjs7QUFaRTtFQUNFO0lBQ0ksU0FBQTtFQWNOOztFQVpFO0lBQ0ksZ0JBQUE7RUFlTjs7RUFiRTtJQUNJLFVBQUE7RUFnQk47O0VBZEU7SUFDSSxnQkFBQTtFQWlCTjs7RUFmRTtJQUNJLGdCQUFBO0VBa0JOO0FBQ0Y7O0FBZkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWlCSiIsImZpbGUiOiJoZWFkbGluZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hlYWRsaW5lcnMvaGVhZGxpbmVycy1iZy5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnNsaWRlc3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwcHggNzBweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbXtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogMjY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2xpZGUxLWhlYXJ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIHRvcDogNTVweDtcclxufVxyXG4uc2xpZGUxLW9wZW5NYXRjaHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbn1cclxuLnNsaWRlMS1wcm9maWxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzBweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG59XHJcbi5zbGlkZTItdG9we1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjM3cHg7XHJcbn1cclxuLnNsaWRlMi1ib3R0b217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0IDogNzAxcHgpIGFuZCAobWF4LWhlaWdodCA6IDc3MHB4KSB7XHJcbiAgICAuc2xpZGUxLWhlYXJ0e1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTEtb3Blbk1hdGNoe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUxLXByb2ZpbGV7XHJcbiAgICAgICAgdG9wOiAxNDVweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTItdG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUyLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0IDogNzcxcHgpIGFuZCAobWF4LWhlaWdodCA6IDgxMHB4KSB7XHJcbiAgICAuc2xpZGUxLWhlYXJ0e1xyXG4gICAgICAgIHRvcDogNjVweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTEtb3Blbk1hdGNoe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUxLXByb2ZpbGV7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTItdG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUyLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0IDogODExcHgpIGFuZCAobWF4LWhlaWdodCA6IDg1MHB4KSB7XHJcbiAgICAuc2xpZGUxLWhlYXJ0e1xyXG4gICAgICAgIHRvcDogNzBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTEtb3Blbk1hdGNoe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUxLXByb2ZpbGV7XHJcbiAgICAgICAgdG9wOiAxNjBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZTItdG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUyLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZC1pY29ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTE3cHg7XHJcbiAgICB0b3A6IDE3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjFiMGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=headliners-headliners-module-es5.js.map