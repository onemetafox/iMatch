(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trending-trending-module"], {
    /***/
    "6dS8":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function dS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">TRENDING ON iMATCH</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n      \r\n    <div style=\"width: 100%; margin: 0;\">\r\n      \r\n      <div style=\"width: 50%; float: left; margin: -5px -8px 0 0;\">\r\n        <div class=\"banner\">1</div>\r\n        <div class=\"box\"></div>\r\n        <div class=\"box-description ion-text-wrap\">{{t}}</div>\r\n      </div>\r\n  \r\n      <div style=\"width: 50%; margin: -5px 0px 15px 0; float: left\">\r\n        <div class=\"banner\">2</div>\r\n        <div class=\"box\"></div>\r\n        <div class=\"box-description\">I was home on my baby brother birthday fun...</div>\r\n      </div>\r\n  \r\n  \r\n  \r\n      <div style=\"width: 50%; float: left; margin: -5px -8px 0 0;\">\r\n          <div class=\"banner\">3</div>\r\n          <div class=\"box\"></div>\r\n          <div class=\"box-description ion-text-wrap\">{{t}}</div>\r\n        </div>\r\n    \r\n        <div style=\"width: 50%; margin: -5px 0px 15px 0; float: left;\">\r\n          <div class=\"banner\">4</div>\r\n          <div class=\"box\"></div>\r\n          <div class=\"box-description\">I was home on my baby brother birthday fun...</div>\r\n        </div>\r\n      \r\n    </div>\r\n     \r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "HhZF":
    /*!*********************************************!*\
      !*** ./src/app/trending/trending.module.ts ***!
      \*********************************************/

    /*! exports provided: TrendingPageModule */

    /***/
    function HhZF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function () {
        return TrendingPageModule;
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


      var _trending_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./trending-routing.module */
      "IFjB");
      /* harmony import */


      var _trending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./trending.page */
      "dbB3");

      var TrendingPageModule = function TrendingPageModule() {
        _classCallCheck(this, TrendingPageModule);
      };

      TrendingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trending_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrendingPageRoutingModule"]],
        declarations: [_trending_page__WEBPACK_IMPORTED_MODULE_6__["TrendingPage"]]
      })], TrendingPageModule);
      /***/
    },

    /***/
    "IFjB":
    /*!*****************************************************!*\
      !*** ./src/app/trending/trending-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: TrendingPageRoutingModule */

    /***/
    function IFjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrendingPageRoutingModule", function () {
        return TrendingPageRoutingModule;
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


      var _trending_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trending.page */
      "dbB3");

      var routes = [{
        path: '',
        component: _trending_page__WEBPACK_IMPORTED_MODULE_3__["TrendingPage"]
      }];

      var TrendingPageRoutingModule = function TrendingPageRoutingModule() {
        _classCallCheck(this, TrendingPageRoutingModule);
      };

      TrendingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TrendingPageRoutingModule);
      /***/
    },

    /***/
    "Pi0v":
    /*!*********************************************!*\
      !*** ./src/app/trending/trending.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Pi0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".box {\n  width: 155px;\n  border: 1px solid white;\n  border-bottom-color: #707072 !important;\n  padding: 65px;\n  border-radius: 7px;\n  background-image: url('1.jpg');\n  position: relative;\n  z-index: 1;\n  margin: 30px 0 20px 20px;\n}\n\n.box-description {\n  width: 153px;\n  height: 50px;\n  border: 1px solid #707072;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: #707072;\n  position: absolute;\n  margin: -27px 0px 0 21px;\n  padding-left: 8px;\n  padding-top: 10px;\n  font-size: 11px;\n  color: white;\n  font-family: OpenSansRegular;\n}\n\n.banner {\n  height: 35px;\n  width: 35px;\n  background-color: #f21908;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  z-index: 2;\n  margin: 20px 0px 0px 10px;\n  text-align: center;\n  padding-top: 8px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyZW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoidHJlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgICB3aWR0aDogMTU1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM3MDcwNzIgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL3RyZW5kaW5nLzEuanBnJyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMjBweCAyMHB4O1xyXG5cclxuICB9XHJcblxyXG4uYm94LWRlc2NyaXB0aW9ue1xyXG4gICAgd2lkdGg6IDE1M3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAtMjdweCAwcHggMCAyMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbn1cclxuXHJcbi5iYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjE5MDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "dbB3":
    /*!*******************************************!*\
      !*** ./src/app/trending/trending.page.ts ***!
      \*******************************************/

    /*! exports provided: TrendingPage */

    /***/
    function dbB3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrendingPage", function () {
        return TrendingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_trending_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./trending.page.html */
      "6dS8");
      /* harmony import */


      var _trending_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./trending.page.scss */
      "Pi0v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TrendingPage = /*#__PURE__*/function () {
        function TrendingPage() {
          _classCallCheck(this, TrendingPage);

          this.t = 'When i went to France with my mom';
        }

        _createClass(TrendingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.t.length > 42) {
              this.t = this.t.substring(0, 42) + '...';
            }
          }
        }]);

        return TrendingPage;
      }();

      TrendingPage.ctorParameters = function () {
        return [];
      };

      TrendingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-trending',
        template: _raw_loader_trending_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_trending_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TrendingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=trending-trending-module-es5.js.map