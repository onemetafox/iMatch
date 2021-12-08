(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-match-revealed-personal-match-revealed-module"], {
    /***/
    "1wLQ":
    /*!***************************************************************************!*\
      !*** ./src/app/personal-match-revealed/personal-match-revealed.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function wLQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div-left {\n  box-shadow: 0px 0px 0px 2px lightgrey;\n  height: 85px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLW1hdGNoLXJldmVhbGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoicGVyc29uYWwtbWF0Y2gtcmV2ZWFsZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1sZWZ0e1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggbGlnaHRncmV5O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLy8gLmRpdi1sZWZ0ICsgLmRpdi1sZWZ0e1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuLy8gfVxyXG5cclxuLy8gLmRpdi1sZWZ0Om50aC1jaGlsZChldmVuKXtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2LXJpZ2h0e1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4vLyAgICAgaGVpZ2h0OiA4NXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2LXJpZ2h0ICsgLmRpdi1yaWdodHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kaXYtcmlnaHQ6bnRoLWNoaWxkKGV2ZW4pe1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    "Myy/":
    /*!***********************************************************************************!*\
      !*** ./src/app/personal-match-revealed/personal-match-revealed-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: PersonalMatchRevealedPageRoutingModule */

    /***/
    function Myy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchRevealedPageRoutingModule", function () {
        return PersonalMatchRevealedPageRoutingModule;
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


      var _personal_match_revealed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./personal-match-revealed.page */
      "NHD+");

      var routes = [{
        path: '',
        component: _personal_match_revealed_page__WEBPACK_IMPORTED_MODULE_3__["PersonalMatchRevealedPage"]
      }];

      var PersonalMatchRevealedPageRoutingModule = function PersonalMatchRevealedPageRoutingModule() {
        _classCallCheck(this, PersonalMatchRevealedPageRoutingModule);
      };

      PersonalMatchRevealedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonalMatchRevealedPageRoutingModule);
      /***/
    },

    /***/
    "NHD+":
    /*!*************************************************************************!*\
      !*** ./src/app/personal-match-revealed/personal-match-revealed.page.ts ***!
      \*************************************************************************/

    /*! exports provided: PersonalMatchRevealedPage */

    /***/
    function NHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchRevealedPage", function () {
        return PersonalMatchRevealedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personal_match_revealed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personal-match-revealed.page.html */
      "f6Ht");
      /* harmony import */


      var _personal_match_revealed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personal-match-revealed.page.scss */
      "1wLQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var PersonalMatchRevealedPage = /*#__PURE__*/function () {
        function PersonalMatchRevealedPage(common) {
          var _this = this;

          _classCallCheck(this, PersonalMatchRevealedPage);

          this.common = common;
          this.test = [{
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }];
          this.test2 = [{
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }, {
            name: 'abc',
            likes: 1000
          }];
          this.common.route.queryParams.subscribe(function (params) {
            if (_this.common.router.getCurrentNavigation().extras.state) {
              _this.data = _this.common.router.getCurrentNavigation().extras.state.data;
              _this.type = _this.common.router.getCurrentNavigation().extras.state.type;
            }
          });
        }

        _createClass(PersonalMatchRevealedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PersonalMatchRevealedPage;
      }();

      PersonalMatchRevealedPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      PersonalMatchRevealedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personal-match-revealed',
        template: _raw_loader_personal_match_revealed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_match_revealed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PersonalMatchRevealedPage);
      /***/
    },

    /***/
    "f6Ht":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-match-revealed/personal-match-revealed.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f6Ht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 25px;\">Revealed Count</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"second_box\" style=\"overflow: auto; height: 100%;\">\r\n  <div style=\"justify-content: space-between; display:flex; margin: 15px;\">\r\n    <img src=\"../../assets/icon/squadlist/btn1.png\" alt=\"\" style=\"width: 45px;\">\r\n    <img src=\"../../assets/icon/squadlist/btn3.png\" alt=\"\" style=\"width: 45px;\">\r\n  </div>\r\n\r\n  <div style=\"float: left; padding: 0px 7.5px 0 15px; width: 50%;\" >\r\n\r\n    <!-- <div class=\"div-left\" *ngFor=\"let t of test\"></div> -->\r\n\r\n    <!-- <div class=\"image-div_first\">\r\n      <img [src]=\"data.receiver_image\" alt=\"\">\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: 30%; left: 40%;\">\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n    </div>\r\n\r\n    <div class=\"image-div_first\">\r\n      <img [src]=\"data.sender_image\" alt=\"\">\r\n    </div> -->\r\n\r\n    <div class=\"div-left\" *ngFor=\"let d of type==='sender' ? data.sender_image_winname : data.receiver_image_winname\">\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; position: relative;\">\r\n        <div >\r\n          <img [src]=\"d.closed_match_images[0].closed_image\" style=\"width: 40px; height: 85px;\">\r\n        </div>\r\n  \r\n        <div style=\"position: absolute; left: 40px\">\r\n          <img [src]=\"d.closed_match_images[1].closed_image\" style=\"width: 40px; height: 85px;\">\r\n        </div>\r\n\r\n        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px; position: absolute; top: 28px; left: 28px;\">\r\n\r\n        <span style=\"font-weight: bold; font-size: 10px; position: relative; left: 42px; top: 15px\"> {{d.loser_name}} </span>\r\n        <span style=\"position: relative; left: 5px; top: 38px; font-size: 10px;\"> {{d.closed_match_likes}} </span>\r\n        <img src=\"../../assets/icon/shoot-grey.png\" style=\"position: relative; left: -27px; top: 39px; width: 12px; height: 10px;\">\r\n        <span style=\"top: -34px; position: relative; left: 104px; font-size: 12px;\"> {{d.created_at | date: 'shortDate'}} </span>\r\n        <ion-icon  style=\"top: -32px; position: relative; left: 44px; font-size: 12px;\" name=\"calendar-outline\"></ion-icon>\r\n      </div>\r\n     \r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div style=\"float: right; padding: 0px 15px 0 7.5px; width: 50%;\" >\r\n\r\n    <div class=\"div-left\" *ngFor=\"let d of type==='sender' ? data.sender_image_lossname : data.receiver_image_lossname\">\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; position: relative;\">\r\n        <div >\r\n          <img [src]=\"d.closed_match_images[0].closed_image\" style=\"width: 40px; height: 85px;\">\r\n        </div>\r\n  \r\n        <div style=\"position: absolute; left: 40px\">\r\n          <img [src]=\"d.closed_match_images[1].closed_image\" style=\"width: 40px; height: 85px;\">\r\n        </div>\r\n\r\n        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px; position: absolute; top: 28px; left: 28px;\">\r\n\r\n        <span style=\"font-weight: bold; font-size: 10px; position: relative; left: 42px; top: 15px\"> {{d.loser_name}} </span>\r\n        <span style=\"position: relative; left: 5px; top: 38px; font-size: 10px;\"> {{d.closed_match_likes}} </span>\r\n        <img src=\"../../assets/icon/shoot-grey.png\" style=\"position: relative; left: -27px; top: 39px; width: 12px; height: 10px;\">\r\n        <span style=\"top: -34px; position: relative; left: 104px; font-size: 12px;\"> {{d.created_at | date: 'shortDate'}} </span>\r\n        <ion-icon  style=\"top: -32px; position: relative; left: 44px; font-size: 12px;\" name=\"calendar-outline\"></ion-icon>\r\n      </div>\r\n     \r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- <div style=\"display: flex;margin-top: 8px;\">\r\n    <div style=\"width: 40%; margin-right: 3px; position: relative;\">\r\n      <div class=\"contest-image-div\">\r\n        <div class=\"image-div_first\">\r\n          <img src=\"../../assets/icon/activity/baby1.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"image-div_first\">\r\n          <img src=\"../../assets/icon/activity/baby2.jpg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div style=\"position: absolute; top: 30%; left: 40%;\">\r\n        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n      </div>\r\n      <div class=\"box_m\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n          <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n          <p>kavitha</p>\r\n        </div>\r\n        <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n          <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n            <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n            <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n          </div>\r\n          <div\r\n            style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n            <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n            <p style=\"font-weight: 500;\">30m</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"width: 60%; margin-left: 3px; position: relative;\">\r\n      <div class=\"contest-image-div\">\r\n        <div class=\"image-div\">\r\n          <img src=\"../../assets/icon/activity/avengers.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"image-div\">\r\n          <img src=\"../../assets/icon/activity/hulk.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"image-div\">\r\n          <img src=\"../../assets/icon/activity/aven.jpg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div style=\"position: absolute; top: 30%; left: 27%;\">\r\n        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n      </div>\r\n      <div style=\"position: absolute; top: 30%; left: 60%;\">\r\n        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n      </div>\r\n      <div class=\"box_m\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n          <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n          <p>kavitha</p>\r\n        </div>\r\n        <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n          <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n            <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n            <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n          </div>\r\n          <div\r\n            style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n            <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n            <p style=\"font-weight: 500;\">30m</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div> -->\r\n  </div>";
      /***/
    },

    /***/
    "mMCz":
    /*!***************************************************************************!*\
      !*** ./src/app/personal-match-revealed/personal-match-revealed.module.ts ***!
      \***************************************************************************/

    /*! exports provided: PersonalMatchRevealedPageModule */

    /***/
    function mMCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchRevealedPageModule", function () {
        return PersonalMatchRevealedPageModule;
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


      var _personal_match_revealed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./personal-match-revealed-routing.module */
      "Myy/");
      /* harmony import */


      var _personal_match_revealed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./personal-match-revealed.page */
      "NHD+");

      var PersonalMatchRevealedPageModule = function PersonalMatchRevealedPageModule() {
        _classCallCheck(this, PersonalMatchRevealedPageModule);
      };

      PersonalMatchRevealedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _personal_match_revealed_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalMatchRevealedPageRoutingModule"]],
        declarations: [_personal_match_revealed_page__WEBPACK_IMPORTED_MODULE_6__["PersonalMatchRevealedPage"]]
      })], PersonalMatchRevealedPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=personal-match-revealed-personal-match-revealed-module-es5.js.map