(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-ongoing-match-visitors-ongoing-match-module"], {
    /***/
    "KYfj":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-ongoing-match/visitors-ongoing-match.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KYfj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"position: relative; right: 25px;\">ONGOING MATCH</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-content>\r\n\r\n        <div style=\"text-align: center; padding: 50px;\" *ngIf=\"this.ongoingDetails.length == 0\">\r\n            <div>\r\n                <img src=\"../../assets/icon/landing/splash.jpg\" alt=\"\" style=\"height: 300px; width: 290px; border-radius: 50%; border: 15px solid #9E9E9E;\">\r\n            </div>\r\n\r\n            <div>\r\n                <h4>Currently You Are Having No Ongoing Matches</h4>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Slide Starts Here -->\r\n\r\n        <div style=\"padding: 10px;\" *ngFor=\"let onGoingMatch of this.ongoingDetails; let i = index;\">\r\n            <div (click)='goDetail(onGoingMatch.matchid)' style=\"border-top: 10px solid #f21908; border-radius: 13px 13px 5px 5px; box-shadow: 1px 1px 5px 1px grey; background-color: #f21908;\">\r\n\r\n                <div style=\"padding: 15px; border-radius: 13px 13px 5px 5px; background-color: white;\">\r\n                    <div style=\"display: flex; justify-content: space-between;\">\r\n\r\n                        <div>\r\n                            <h5 style=\"font-weight: 600;\">{{onGoingMatch.caption}}</h5>\r\n                            <span>{{onGoingMatch.description}}</span>\r\n                            <p style=\"margin: 0px; font-weight: 100; font-size: 13px;\">{{onGoingMatch.created_at}}</p>\r\n                        </div>\r\n                        <div style=\"text-align: center;\">\r\n                            <img src=\"../../assets/icon/help-invitation-terms/bar.png\" alt=\"\" style=\"width:160px\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"border-top: 1px solid #e2e2e2;\">\r\n                        <div style=\"display:flex; justify-content: space-between;\">\r\n                            <div style=\"display:flex; justify-content: start;\">\r\n                                <div *ngFor=\"let user of onGoingMatch.compare_data; let j = index;\" style=\" padding: 10px;\">\r\n                                    <div style=\"display: flex; justify-content: center;\">\r\n                                        <img src=\"../../assets/icon/profile/user.png\" alt=\"\" style=\"height: 55px; width: 55px; border-radius: 50%; border: 1px solid #707070\">\r\n                                    </div>\r\n                                    <p style=\"margin: 0px; font-weight: 600; font-size: 13px;align-text:content\">{{user.name}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n        </div>\r\n\r\n    </ion-content>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "MW9U":
    /*!*********************************************************************************!*\
      !*** ./src/app/visitors-ongoing-match/visitors-ongoing-match-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: VisitorsOngoingMatchPageRoutingModule */

    /***/
    function MW9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsOngoingMatchPageRoutingModule", function () {
        return VisitorsOngoingMatchPageRoutingModule;
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


      var _visitors_ongoing_match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitors-ongoing-match.page */
      "NADn");

      var routes = [{
        path: '',
        component: _visitors_ongoing_match_page__WEBPACK_IMPORTED_MODULE_3__["VisitorsOngoingMatchPage"]
      }];

      var VisitorsOngoingMatchPageRoutingModule = function VisitorsOngoingMatchPageRoutingModule() {
        _classCallCheck(this, VisitorsOngoingMatchPageRoutingModule);
      };

      VisitorsOngoingMatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitorsOngoingMatchPageRoutingModule);
      /***/
    },

    /***/
    "NADn":
    /*!***********************************************************************!*\
      !*** ./src/app/visitors-ongoing-match/visitors-ongoing-match.page.ts ***!
      \***********************************************************************/

    /*! exports provided: VisitorsOngoingMatchPage */

    /***/
    function NADn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsOngoingMatchPage", function () {
        return VisitorsOngoingMatchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visitors_ongoing_match_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visitors-ongoing-match.page.html */
      "KYfj");
      /* harmony import */


      var _visitors_ongoing_match_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visitors-ongoing-match.page.scss */
      "fwIa");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var VisitorsOngoingMatchPage = /*#__PURE__*/function () {
        function VisitorsOngoingMatchPage(storageservice, common, popoverController) {
          var _this = this;

          _classCallCheck(this, VisitorsOngoingMatchPage);

          this.storageservice = storageservice;
          this.common = common;
          this.popoverController = popoverController;
          this.ongoingDetails = [];
          this.showPersonalScores = false;
          this.hideValue = true;
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userArray = resp;
          });
        }

        _createClass(VisitorsOngoingMatchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.common.presentLoading();
            this.ongoingDetails = [];
            var params = {
              userid: this.userArray.userid,
              visitorid: this.userArray.visitor_id
            };
            this.common.postMethod('OngoingMatch', params).then(function (res) {
              if (res.status == true) {
                _this2.ongoingDetails = res.details;
              }
            }, function (err) {
              console.log('Error:', err);
            });
          }
        }, {
          key: "Timer",
          value: function Timer() {
            var _a, _b, _c;

            if (this.ongoingDetails !== undefined || this.ongoingDetails.length != 0) {
              for (var i = 0; i < this.ongoingDetails.length; i++) {
                var StartTime = new Date((_a = this.ongoingDetails[i]) === null || _a === void 0 ? void 0 : _a.match_start).getTime();
                var EndTime = new Date((_b = this.ongoingDetails[i]) === null || _b === void 0 ? void 0 : _b.match_end).getTime();
                var LeftTime = new Date((_c = this.ongoingDetails[i]) === null || _c === void 0 ? void 0 : _c.remaining_time).getTime();
                var CurrentTime = new Date().getTime();
                var difference = LeftTime - CurrentTime;
                var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
                difference -= daysDifference * 1000 * 60 * 60 * 24;
                var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
                difference -= hoursDifference * 1000 * 60 * 60;
                var minutesDifference = Math.floor(difference / 1000 / 60);
                difference -= minutesDifference * 1000 * 60;
                var secondsDifference = Math.floor(difference / 1000);
              }
            }
          }
        }, {
          key: "toLikeForReceiver",
          value: function toLikeForReceiver(e, details, i) {
            var _this3 = this;

            // i = this.personalMatchSlideIndex;
            this.slides.slideTo(this.personalMatchSlideIndex);
            var params = {
              userid: this.userDetails.userid,
              matchid: details.match_id,
              contestentid: details.receiverid,
              status: 'like'
            };
            this.common.postMethod('Like', params).then(function (res) {
              if (res.status == true) {
                // this.slides.slideTo(this.personalMatchSlideIndex);
                _this3.ionViewWillEnter();
              } else {
                _this3.common.presentToast('You had already liked this Ongoing Match');
              }
            }, function (err) {
              _this3.common.presentLoading();

              _this3.ionViewWillEnter(); // this.common.presentToast(' A Network Error Occured... Please Try Once Again');

            });
          }
        }, {
          key: "toLikeForSender",
          value: function toLikeForSender(e, details, i) {
            var _this4 = this;

            // i = this.personalMatchSlideIndex;
            this.slides.slideTo(this.personalMatchSlideIndex);
            var params = {
              userid: this.userDetails.userid,
              matchid: details.match_id,
              contestentid: details.senderid,
              status: 'like'
            };
            this.common.postMethod('Like', params).then(function (res) {
              if (res.status == true) {
                // this.slides.slideTo(this.personalMatchSlideIndex);
                _this4.ionViewWillEnter();
              } else {
                _this4.common.presentToast('You had already liked this Ongoing Match');
              }
            }, function (err) {
              console.log('Error:', err);

              _this4.common.presentLoading();

              _this4.ionViewWillEnter(); //  this.common.presentToast(' A Network Error Occured... Please Try Once Again');

            });
          }
        }, {
          key: "openComments",
          value: function openComments(e, details) {
            // this.common.router.navigate(['/comments'], {queryParams : details});
            details.matchType = 'ONGOING';
            this.common.navCtrl.navigateForward(['comments'], {
              queryParams: details
            });
          }
        }, {
          key: "toshowPersonalScores",
          value: function toshowPersonalScores(e, details) {
            this.showPersonalScores = !this.showPersonalScores;
          }
        }, {
          key: "toHidePopover",
          value: function toHidePopover() {
            this.showPersonalScores = false;
          }
        }, {
          key: "gotoImageIcon",
          value: function gotoImageIcon(icon) {
            var _this5 = this;

            if (this.userArray.userStatus === 'VISITOR') {
              if (icon == 'image') {
                this.common.presentLoading();
                var params = {
                  userid: '',
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', params).then(function (res) {
                  if (res.details.image.length != 0) {
                    _this5.ongoingDetails = res.details.image;

                    _this5.common.presentToast('Ongoing Image Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Image Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'video') {
                this.common.presentLoading();
                var _params = {
                  userid: '',
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params).then(function (res) {
                  if (res.details.video.length != 0) {
                    _this5.ongoingDetails = res.details.video;

                    _this5.common.presentToast('Ongoing Video Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Video Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'audio') {
                this.common.presentLoading();
                var _params2 = {
                  userid: '',
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params2).then(function (res) {
                  if (res.details.audio.length != 0) {
                    _this5.ongoingDetails = res.details.audio;

                    _this5.common.presentToast('Ongoing Audio Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Audio Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'attachment') {
                this.common.presentLoading();
                var _params3 = {
                  userid: '',
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params3).then(function (res) {
                  if (res.details.text.length != 0) {
                    _this5.ongoingDetails = res.details.text;

                    _this5.common.presentToast('Ongoing Text Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Text Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'link') {
                this.common.presentLoading();
                var _params4 = {
                  userid: '',
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params4).then(function (res) {
                  if (res.details.link.length != 0) {
                    _this5.ongoingDetails = res.details.link;

                    _this5.common.presentToast('Ongoing Link Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Link Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              }
            } else {
              if (icon == 'image') {
                this.common.presentLoading();
                var _params5 = {
                  userid: this.userArray.userid,
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params5).then(function (res) {
                  if (res.details.image.length != 0) {
                    _this5.ongoingDetails = res.details.image;

                    _this5.common.presentToast('Ongoing Image Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Image Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'video') {
                this.common.presentLoading();
                var _params6 = {
                  userid: this.userArray.userid,
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params6).then(function (res) {
                  if (res.details.video.length != 0) {
                    _this5.ongoingDetails = res.details.video;

                    _this5.common.presentToast('Ongoing Video Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Video Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'audio') {
                this.common.presentLoading();
                var _params7 = {
                  userid: this.userArray.userid,
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params7).then(function (res) {
                  if (res.details.audio.length != 0) {
                    _this5.ongoingDetails = res.details.audio;

                    _this5.common.presentToast('Ongoing Audio Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Audio Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'attachment') {
                this.common.presentLoading();
                var _params8 = {
                  userid: this.userArray.userid,
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params8).then(function (res) {
                  if (res.details.text.length != 0) {
                    _this5.ongoingDetails = res.details.text;

                    _this5.common.presentToast('Ongoing Text Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Text Matches');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else if (icon == 'link') {
                this.common.presentLoading();
                var _params9 = {
                  userid: this.userArray.userid,
                  visitorid: this.userArray.visitor_id
                };
                this.common.postMethod('OngoingMatch', _params9).then(function (res) {
                  if (res.details.link.length != 0) {
                    _this5.ongoingDetails = res.details.link;

                    _this5.common.presentToast('Ongoing Link Match is Successfully Displayed'); // this.slides.slideTo(this.personalMatchSlideIndex);

                  } else {
                    _this5.common.presentToast('Currently You Are Having No Ongoing Link Matches');
                  } // this.ongoingDetails = res.details.link;
                  // if (this.ongoingDetails===undefined) {
                  //   this.common.presentToast('Currently You Are Having No Ongoing Matches');
                  // } else {
                  //   this.common.presentToast('Ongoing Link Match is Successfully Displayed');
                  // }
                  // console.log('OngoingMatch:',this.ongoingDetails);
                  // this.common.hideLoader();

                }, function (err) {
                  // this.common.hideLoader();
                  console.log('Error:', err);
                });
              }
            }
          }
        }, {
          key: "goDetail",
          value: function goDetail(id) {
            this.common.router.navigate(['/ongoing-match-detail'], {
              queryParams: {
                matchid: id
              }
            });
          }
        }]);

        return VisitorsOngoingMatchPage;
      }();

      VisitorsOngoingMatchPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      VisitorsOngoingMatchPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      };
      VisitorsOngoingMatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitors-ongoing-match',
        template: _raw_loader_visitors_ongoing_match_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitors_ongoing_match_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VisitorsOngoingMatchPage);
      /***/
    },

    /***/
    "X4x1":
    /*!*************************************************************************!*\
      !*** ./src/app/visitors-ongoing-match/visitors-ongoing-match.module.ts ***!
      \*************************************************************************/

    /*! exports provided: VisitorsOngoingMatchPageModule */

    /***/
    function X4x1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsOngoingMatchPageModule", function () {
        return VisitorsOngoingMatchPageModule;
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


      var _visitors_ongoing_match_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visitors-ongoing-match-routing.module */
      "MW9U");
      /* harmony import */


      var _visitors_ongoing_match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visitors-ongoing-match.page */
      "NADn");

      var VisitorsOngoingMatchPageModule = function VisitorsOngoingMatchPageModule() {
        _classCallCheck(this, VisitorsOngoingMatchPageModule);
      };

      VisitorsOngoingMatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visitors_ongoing_match_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorsOngoingMatchPageRoutingModule"]],
        declarations: [_visitors_ongoing_match_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsOngoingMatchPage"]]
      })], VisitorsOngoingMatchPageModule);
      /***/
    },

    /***/
    "fwIa":
    /*!*************************************************************************!*\
      !*** ./src/app/visitors-ongoing-match/visitors-ongoing-match.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function fwIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 15px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0b3JzLW9uZ29pbmctbWF0Y2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVZBO0VBQ1UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQWFWOztBQVhBO0VBQ0kseUJBQUE7QUFjSiIsImZpbGUiOiJ2aXNpdG9ycy1vbmdvaW5nLW1hdGNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaWNvbnMtY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29sLWljb257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmViZWJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcblxyXG59XHJcbi5tYWluLWltZ3tcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxufVxyXG5cclxuLnZzLWltZ3tcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDRweDtcclxuICAgIG1hcmdpbjogMHB4IC0xNHB4IDBweCAtMjVweDs7XHJcbn1cclxuLnNob290LWdyZXktaWNvbi1pbWd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyN3B4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAxcHg7XHJcbn1cclxuLnRodW1uYWlsLWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMzBweDtcclxufVxyXG4ucGVyc29uLW5hbWUtdGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi51bmRlci1uYW1lLXRleHR7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMnB4O1xyXG4gICAgYm90dG9tOiAyOXB4O1xyXG59XHJcbmg2e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnN0YXItaWNvbi1uZWFyLW5hbWV7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNjdweDtcclxuICAgIHJpZ2h0OiAyNnB4O1xyXG59XHJcbi5pY29uLW5lYXItbnVtYmVyLWNvdW50LWxlZnR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG59XHJcbi5pY29uLW5lYXItbnVtYmVyLWNvdW50LXJpZ2h0e1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweFxyXG59XHJcbi5ib3R0b20tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzgwODA4MDMwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uYm90dG9tLXJpZ2h0LXRpbWUtbm90ZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEyNXB4O1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbn1cclxuLmJvdHRvbS1jbG9jay1pbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbGVmdDogMTAzcHg7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxufVxyXG5pb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6YmxhY2s7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=visitors-ongoing-match-visitors-ongoing-match-module-es5.js.map