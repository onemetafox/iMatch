(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pending-open-matches-pending-open-matches-module"], {
    /***/
    "GGjb":
    /*!*****************************************************************************!*\
      !*** ./src/app/pending-open-matches/pending-open-matches-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PendingOpenMatchesPageRoutingModule */

    /***/
    function GGjb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingOpenMatchesPageRoutingModule", function () {
        return PendingOpenMatchesPageRoutingModule;
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


      var _pending_open_matches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pending-open-matches.page */
      "QmWW");

      var routes = [{
        path: '',
        component: _pending_open_matches_page__WEBPACK_IMPORTED_MODULE_3__["PendingOpenMatchesPage"]
      }];

      var PendingOpenMatchesPageRoutingModule = function PendingOpenMatchesPageRoutingModule() {
        _classCallCheck(this, PendingOpenMatchesPageRoutingModule);
      };

      PendingOpenMatchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PendingOpenMatchesPageRoutingModule);
      /***/
    },

    /***/
    "I5jc":
    /*!*********************************************************************!*\
      !*** ./src/app/pending-open-matches/pending-open-matches.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function I5jc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 35px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\n.item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\n.sc-ion-popover-md-h {\n  --width: 350px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlbmRpbmctb3Blbi1tYXRjaGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNVLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFDVjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBWUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFUSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFSSjs7QUFVQTtFQUNJLHlCQUFBO0FBUEoiLCJmaWxlIjoicGVuZGluZy1vcGVuLW1hdGNoZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1pY29ucy1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uY29sLWljb257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmViZWJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5tYWluLWltZ3tcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxufVxyXG5cclxuLnZzLWltZ3tcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDRweDtcclxuICAgIG1hcmdpbjogMHB4IC0xNHB4IDBweCAtMjVweDs7XHJcbn1cclxuXHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcblxyXG4udGh1bW5haWwtaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEzMHB4O1xyXG59XHJcblxyXG4ucGVyc29uLW5hbWUtdGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0YXItaWNvbi1uZWFyLW5hbWV7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNjdweDtcclxuICAgIHJpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmljb24tbmVhci1udW1iZXItY291bnQtcmlnaHR7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAzMHB4XHJcbn1cclxuXHJcbi5ib3R0b20tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzgwODA4MDMwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uYm90dG9tLWNsb2NrLWltZ3tcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBsZWZ0OiAxMDNweDtcclxuICAgICAgICAgIHRvcDogNnB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6YmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uaXRlbS1zdHlsZXN7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4ICNjY2NjY2U7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzgwODA4MDM4O1xyXG59XHJcbi5zcGlubmVyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2MtaW9uLXBvcG92ZXItbWQtaCB7XHJcbiAgICAtLXdpZHRoIDogMzUwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "QmWW":
    /*!*******************************************************************!*\
      !*** ./src/app/pending-open-matches/pending-open-matches.page.ts ***!
      \*******************************************************************/

    /*! exports provided: PendingOpenMatchesPage */

    /***/
    function QmWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingOpenMatchesPage", function () {
        return PendingOpenMatchesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pending_open_matches_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pending-open-matches.page.html */
      "bZYY");
      /* harmony import */


      var _pending_open_matches_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pending-open-matches.page.scss */
      "I5jc");
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
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "CjQN");

      var PendingOpenMatchesPage = /*#__PURE__*/function () {
        function PendingOpenMatchesPage(storageservice, common, popoverController, socialSharing) {
          var _this = this;

          _classCallCheck(this, PendingOpenMatchesPage);

          this.storageservice = storageservice;
          this.common = common;
          this.popoverController = popoverController;
          this.socialSharing = socialSharing;
          this.userDetails = [];
          this.pendingMatches = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
            var Api = 'get_pending_match/';

            _this.common.http.get(_this.common.ajx.BaseUrl + Api + _this.userDetails.userid).subscribe(function (res) {
              _this.pendingMatches = res.details;
            }, function (err) {
              console.log('err:', err);
            });
          });
        }

        _createClass(PendingOpenMatchesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "togoBack",
          value: function togoBack() {
            this.common.router.navigate(['tabs/tab5']);
          }
        }, {
          key: "startMatch",
          value: function startMatch(id) {
            var _this2 = this;

            this.common.showLoader();
            this.common.postMethod('startPendingMatch', {
              matchId: id
            }).then(function (res) {
              _this2.common.hideLoader();

              _this2.common.router.navigate(['/tabs/tab6']);
            });
          }
        }]);

        return PendingOpenMatchesPage;
      }();

      PendingOpenMatchesPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
        }];
      };

      PendingOpenMatchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pending-open-matches',
        template: _raw_loader_pending_open_matches_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pending_open_matches_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PendingOpenMatchesPage);
      /***/
    },

    /***/
    "bZYY":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pending-open-matches/pending-open-matches.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bZYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <img src=\"../../assets/icon/chat/back.png\" alt=\"\" style=\"height: 16px;width: 10px;position: absolute;left: 20px;\" (click)=\"togoBack()\">\r\n        <div style=\"text-align: center; font-family: OpenSansRegular; font-size: 16px; color: white;\">\r\n            <span>Pending Open Matches</span>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div style=\"padding: 10px;\" *ngFor=\"let invitaion of pendingMatches; let i = index;\">\r\n        <div style=\"border-top: 10px solid #f21908; border-radius: 13px 13px 5px 5px; box-shadow: 1px 1px 5px 1px grey; background-color: #f21908;\">\r\n\r\n            <div style=\"padding: 15px; border-radius: 13px 13px 5px 5px; background-color: white;\">\r\n                <div style=\"display: flex; justify-content: space-between;\">\r\n\r\n                    <div>\r\n                        <h5 style=\"font-weight: 600;\">{{invitaion.caption}}</h5>\r\n                        <span>{{invitaion.description}}</span>\r\n                        <p style=\"margin: 0px; font-weight: 100; font-size: 13px;\">{{invitaion.created_at}}</p>\r\n                    </div>\r\n                    <div style=\"text-align: center;\">\r\n                        <img src=\"../../assets/icon/profile/user.png\" alt=\"\" style=\"height: 55px; width: 55px; border-radius: 50%; border: 1px solid #707070\">\r\n                        <p style=\"margin: 0px; font-weight: 600; font-size: 13px;\">{{this.userDetails.name}}</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div style=\"margin-top: 15px;\">\r\n                    <div style=\"display:flex; justify-content: space-between;\">\r\n                        <div style=\"display:flex; justify-content: start;\">\r\n                            <div *ngFor=\"let user of invitaion.users; let j = index;\" style=\" padding: 10px;\">\r\n                                <div style=\"display: flex; justify-content: center;\">\r\n                                    <img src=\"../../assets/icon/profile/user.png\" alt=\"\" style=\"height: 55px; width: 55px; border-radius: 50%; border: 1px solid #707070\">\r\n                                </div>\r\n                                <p style=\"margin: 0px; font-weight: 600; font-size: 13px;align-text:content\">{{user.name}}</p>\r\n                                <p *ngIf=\"user.accept_status=='accept'\" style=\"margin: 0px; font-weight: 600; font-size: 13px;text-align: center; color: #398a31;\">Accept</p>\r\n                                <p *ngIf=\"user.accept_status=='reject'\" style=\"margin: 0px; font-weight: 600; font-size: 13px;text-align: center; color: #c0b3b3;\">Reject</p>\r\n                                <p *ngIf=\"user.accept_status==null\" style=\"margin: 0px; font-weight: 600; font-size: 13px;text-align: center; color:#d87c7c;\">Pending</p>\r\n                            </div>\r\n                        </div>\r\n                        <ion-button *ngIf=\"invitaion.status\" color=\"danger\" style=\" margin-top: 35px;\" (click)=\"startMatch(invitaion.matchid)\">Start\r\n                        </ion-button>\r\n                        <ion-button *ngIf=\"!invitaion.status\" color=\"medium\" style=\" margin-top: 35px;\">Start\r\n                        </ion-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "q+Ws":
    /*!*********************************************************************!*\
      !*** ./src/app/pending-open-matches/pending-open-matches.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PendingOpenMatchesPageModule */

    /***/
    function qWs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingOpenMatchesPageModule", function () {
        return PendingOpenMatchesPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _pending_open_matches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pending-open-matches.page */
      "QmWW");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _pending_open_matches_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pending-open-matches-routing.module */
      "GGjb");

      var PendingOpenMatchesPageModule = function PendingOpenMatchesPageModule() {
        _classCallCheck(this, PendingOpenMatchesPageModule);
      };

      PendingOpenMatchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _pending_open_matches_routing_module__WEBPACK_IMPORTED_MODULE_8__["PendingOpenMatchesPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _pending_open_matches_page__WEBPACK_IMPORTED_MODULE_6__["PendingOpenMatchesPage"]
        }])],
        declarations: [_pending_open_matches_page__WEBPACK_IMPORTED_MODULE_6__["PendingOpenMatchesPage"]]
      })], PendingOpenMatchesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pending-open-matches-pending-open-matches-module-es5.js.map