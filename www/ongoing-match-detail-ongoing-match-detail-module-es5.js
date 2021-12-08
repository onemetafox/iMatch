(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-match-detail-ongoing-match-detail-module"], {
    /***/
    "+WV1":
    /*!*******************************************************************!*\
      !*** ./src/app/ongoing-match-detail/ongoing-match-detail.page.ts ***!
      \*******************************************************************/

    /*! exports provided: OnGoingMatchDetailPage */

    /***/
    function WV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPage", function () {
        return OnGoingMatchDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ongoing_match_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ongoing-match-detail.page.html */
      "pCjr");
      /* harmony import */


      var _ongoing_match_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ongoing-match-detail.page.scss */
      "h0uM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var OnGoingMatchDetailPage = /*#__PURE__*/function () {
        function OnGoingMatchDetailPage(storageservice, popoverController, modalController, common) {
          _classCallCheck(this, OnGoingMatchDetailPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.modalController = modalController;
          this.common = common;
          this.ongoingData = [];
          this.userDetails = [];
          this.PersonalMatch = [];
          this.ionViewWillEnter();
        }

        _createClass(OnGoingMatchDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.common.presentLoading();
            this.common.route.queryParams.subscribe(function (resp) {
              _this.common.http.get(_this.common.ajx.BaseUrl + 'get_ongoing_match/' + resp.matchid).subscribe(function (res) {
                _this.ongoingData = res['data'];

                _this.storageservice.storage.get('userDetails').then(function (val) {
                  _this.userDetail = val;
                });
              }, function (err) {
                console.log('err:', err);
              });
            }); // this.storageservice.storage.get('userDetails').then((val) => {
            // this.userDetails = val ;

            if (this.userDetails.category == "personal") {
              var params = {
                userid: this.userDetails.userid
              };
              this.common.postMethod('PersonalMatch', params).then(function (res) {
                _this.PersonalMatch = res.details;

                _this.slides.slideTo(_this.personalMatchSlideIndex);

                _this.common.hideLoader();
              }, function (err) {
                _this.ionViewWillEnter();

                console.log('Error:', err); // this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');

                _this.common.hideLoader();
              });
            } else if (this.userDetails.category == "closed") {}
          }
        }]);

        return OnGoingMatchDetailPage;
      }();

      OnGoingMatchDetailPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }];
      };

      OnGoingMatchDetailPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      };
      OnGoingMatchDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ongoing-match-detail',
        template: _raw_loader_ongoing_match_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ongoing_match_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnGoingMatchDetailPage);
      /***/
    },

    /***/
    "PW8U":
    /*!*********************************************************************!*\
      !*** ./src/app/ongoing-match-detail/ongoing-match-detail.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OnGoingMatchDetailPageModule */

    /***/
    function PW8U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPageModule", function () {
        return OnGoingMatchDetailPageModule;
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


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "gMqc");
      /* harmony import */


      var _ongoing_match_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ongoing-match-detail-routing.module */
      "rboF");
      /* harmony import */


      var _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ongoing-match-detail.page */
      "+WV1");

      var OnGoingMatchDetailPageModule = function OnGoingMatchDetailPageModule() {
        _classCallCheck(this, OnGoingMatchDetailPageModule);
      };

      OnGoingMatchDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ongoing_match_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnGoingMatchDetailPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxIonicImageViewerModule"]],
        declarations: [_ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["OnGoingMatchDetailPage"]]
      })], OnGoingMatchDetailPageModule);
      /***/
    },

    /***/
    "h0uM":
    /*!*********************************************************************!*\
      !*** ./src/app/ongoing-match-detail/ongoing-match-detail.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function h0uM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 25px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\nion-slide > :first-child {\n  width: 100%;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -15px;\n  left: 0;\n  width: 100%;\n}\n\n.text-match-style {\n  background-color: #70707269;\n  padding: 7px;\n  border-radius: 10px;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  width: 175px;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9uZ29pbmctbWF0Y2gtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFZSjs7QUFWQTtFQUNVLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFhVjs7QUFYQTtFQUNJLHlCQUFBO0FBY0o7O0FBUkE7RUFDSSxXQUFBO0FBV0o7O0FBVEE7OztFQUlJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBWUo7O0FBUE07OztFQUNHLFlBQUE7QUFZVCIsImZpbGUiOiJvbmdvaW5nLW1hdGNoLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWljb25zLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNvbC1pY29ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlYmViZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG5cclxufVxyXG4ubWFpbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi52cy1pbWd7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTA0cHg7XHJcbiAgICBtYXJnaW46IDBweCAtMTRweCAwcHggLTI1cHg7O1xyXG59XHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcbi50aHVtbmFpbC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5oNntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdGFyLWljb24tbmVhci1uYW1le1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDY3cHg7XHJcbiAgICByaWdodDogMjZweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1yaWdodHtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwcHhcclxufVxyXG4uYm90dG9tLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM4MDgwODAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3R0b20tY2xvY2staW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcbi8vIGlvbi1zbGlkZSB7XHJcbi8vICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgXHJcbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1tYXRjaC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI2OTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxufVxyXG4gIC5tZCxcclxuICAuaW9zLFxyXG4gIC53cCB7XHJcbiAgICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgICAgICAgIHdpZHRoOiAxMDBweDsvL3lvdXIgd2lkdGggaGVyZVxyXG4gICAgIH1cclxuICAgfSJdfQ== */";
      /***/
    },

    /***/
    "pCjr":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ongoing-match-detail/ongoing-match-detail.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pCjr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"position: relative;right: 25px;\">Ongoing Contest</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"margin:5px; border-radius: 10px; border: 1px solid #e2e2e2; box-shadow: 0px 4px 0px 2px #f1eded; \">\r\n        <div *ngIf=\"this.ongoingData.compare_data != null\">\r\n            <div style=\"display:flex; justify-content: center;\">\r\n                <div style=\"display: flex;\">\r\n                    <div style=\"width: 100%; display: flex; justify-content: right; flex: 25; position: relative; left: 10px\">\r\n                        <div style=\"padding: 3px;\">\r\n                            <img *ngIf=\"this.ongoingData.compare_data[0].mediafiles[0].media_type == 'image'\" src=\"{{this.ongoingData.compare_data[0].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\">\r\n                            <video *ngIf=\"this.ongoingData.compare_data[0].mediafiles[0].media_type == 'video'\" src=\"{{this.ongoingData.compare_data[0].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\"></video>\r\n                            <audio *ngIf=\"this.ongoingData.compare_data[0].mediafiles[0].media_type == 'audio'\" src=\"{{this.ongoingData.compare_data[0].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\"></audio>\r\n                            <div *ngIf=\"this.ongoingData.compare_data[0].mediafiles[0].media_type == 'link' || this.ongoingData.compare_data[0].mediafiles[0].media_type == 'text'\" style=\"height: 200px;border-radius: 5px;background:#e2e2e2; padding:10px;\">{{this.ongoingData.compare_data[0].mediafiles[0].filename}}</div>\r\n                            <div style=\"display: flex; justify-content: right; margin-top: -44px;\">\r\n                                <div style=\" width: 60px; height: 60px; background: #fff; border-radius: 50%; padding: 14px;margin-right: 14px; border: 1px solid #e2e2e2; box-shadow: 0px 3px 0px 1px #e2e2e2;\">\r\n                                    <img src=\"../assets/icon/04.png\" alt=\"\" style=\"width: 50px;height: 30px;\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\"display: flex; justify-content: start; \">\r\n                                <img src=\"../assets/icon/profile/user.png\" alt=\"\" style=\"width: 40px; height: 40px; border-radius: 50%\">\r\n                                <div style=\"padding-left: 10px; display: inline-grid;\">\r\n                                    <span style=\"font-size: 13px;\">{{this.ongoingData.compare_data[0].name}}</span>\r\n                                    <span style=\"font-size: 10px;color: #7c7070;\">{{this.ongoingData.compare_data[0].email}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <p>{{this.ongoingData.compare_data[0].mediafiles[0].sub_caption}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"display: flex; position: relative;z-index: 10; justify-content: center; margin: auto; margin-top: 90px;\">\r\n                        <img src=\"../assets/icon/vs.png\" alt=\"\" style=\"width: 30px;\">\r\n                    </div>\r\n                    <div style=\"width: 100%; display: flex; justify-content: left; flex: 25; position: relative; right: 10px\">\r\n                        <div style=\"padding: 3px\">\r\n                            <img *ngIf=\"this.ongoingData.compare_data[1].mediafiles[0].media_type == 'image'\" src=\"{{this.ongoingData.compare_data[1].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\">\r\n                            <video *ngIf=\"this.ongoingData.compare_data[1].mediafiles[0].media_type == 'video'\" src=\"{{this.ongoingData.compare_data[1].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\"></video>\r\n                            <audio *ngIf=\"this.ongoingData.compare_data[1].mediafiles[0].media_type == 'audio'\" src=\"{{this.ongoingData.compare_data[1].mediafiles[0].file_path}}\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\"></audio>\r\n                            <div *ngIf=\"this.ongoingData.compare_data[1].mediafiles[0].media_type == 'link' || this.ongoingData.compare_data[1].mediafiles[0].media_type == 'text'\" style=\"height: 200px;border-radius: 5px;background:#e2e2e2; padding:10px;\">{{this.ongoingData.compare_data[1].mediafiles[0].filename}}</div>\r\n                            <div style=\"display: flex; justify-content: right; margin-top: -44px;\">\r\n                                <div style=\" width: 60px; height: 60px; background: #fff; border-radius: 50%; padding: 14px;margin-right: 14px; border: 1px solid #e2e2e2; box-shadow: 0px 3px 0px 1px #e2e2e2;\">\r\n                                    <img src=\"../assets/icon/04.png\" alt=\"\" style=\"width: 50px;height: 30px;\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\"display: flex; justify-content: start; \">\r\n                                <img src=\"../assets/icon/profile/user.png\" alt=\"\" style=\"width: 40px; height: 40px; border-radius: 50%\">\r\n                                <div style=\"padding-left: 10px; display: inline-grid;\">\r\n                                    <span style=\"font-size: 13px;\">{{this.ongoingData.compare_data[1].name}}</span>\r\n                                    <span style=\"font-size: 10px;color: #7c7070;\">{{this.ongoingData.compare_data[1].email}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <p>{{this.ongoingData.compare_data[1].mediafiles[0].sub_caption}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"display: flex; justify-content: center;\">\r\n                <div style=\"display: flex; justify-content: space-between;\">\r\n                    <p>15m</p>\r\n                    <img src=\"../assets/icon/likes.png\" alt=\"\" style=\"width: 40px; height: 40px; margin-left: 13px;\">\r\n                </div>\r\n                <div style=\"display: flex; justify-content: space-between; padding-left: 45px;\">\r\n                    <p>18m</p>\r\n                    <img src=\"../assets/icon/share.png\" alt=\"\" style=\"width: 40px; height: 40px; margin-left: 13px;\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div style=\"display: flex; justify-content: center;background: #cec9ce; height: 78px; margin: auto; padding-top: 17px;\">\r\n            <img src=\"../assets/icon/03.png\" alt=\"\" style=\"width: 20px; height: 20px\">\r\n            <span style=\"padding-left: 10px; font-size: 14px;\">01:03:01/3:hrs</span>\r\n        </div>\r\n        <p style=\"text-align: right; margin-top: -30px; margin-right: 10px;\">3 hrs ago</p>\r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "rboF":
    /*!*****************************************************************************!*\
      !*** ./src/app/ongoing-match-detail/ongoing-match-detail-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OnGoingMatchDetailPageRoutingModule */

    /***/
    function rboF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPageRoutingModule", function () {
        return OnGoingMatchDetailPageRoutingModule;
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


      var _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ongoing-match-detail.page */
      "+WV1");

      var routes = [{
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["OnGoingMatchDetailPage"]
      }];

      var OnGoingMatchDetailPageRoutingModule = function OnGoingMatchDetailPageRoutingModule() {
        _classCallCheck(this, OnGoingMatchDetailPageRoutingModule);
      };

      OnGoingMatchDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnGoingMatchDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ongoing-match-detail-ongoing-match-detail-module-es5.js.map