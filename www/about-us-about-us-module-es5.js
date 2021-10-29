(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"], {
    /***/
    "00wH":
    /*!*********************************************!*\
      !*** ./src/app/about-us/about-us.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutUsPageModule */

    /***/
    function wH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
        return AboutUsPageModule;
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


      var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-us-routing.module */
      "MiEk");
      /* harmony import */


      var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about-us.page */
      "aqON");

      var AboutUsPageModule = function AboutUsPageModule() {
        _classCallCheck(this, AboutUsPageModule);
      };

      AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"]],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
      })], AboutUsPageModule);
      /***/
    },

    /***/
    "3SwB":
    /*!*********************************************!*\
      !*** ./src/app/about-us/about-us.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function SwB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n  height: 50px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n/* PAGE CONTENT */\n.page-background-image {\n  padding: 20px 10px 40px 10px;\n  /* background-position: center; */\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-height: 100vh;\n}\nion-content {\n  --background: url('about-bg.png') no-repeat center center / cover;\n}\n.page-background-div {\n  background-color: #ffffff;\n  display: flex;\n  padding: 10px;\n}\n.left-flex-div {\n  background-color: #dcd9d9;\n  padding: 10px;\n  width: 25%;\n  justify-content: center;\n}\n.imatch_flex_image {\n  height: 25px;\n  width: 50px;\n}\n.left_flex_image {\n  margin-top: 7px;\n  height: 50px;\n  width: 50px;\n}\n.right-flex-div {\n  padding: 0 0 0 10px;\n  width: 75%;\n  line-height: 0;\n}\n.right-flex-div img {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.right-flex-div p {\n  font-weight: 600;\n  font-size: 20px;\n}\n.right-lorem-para p {\n  font-size: 10px;\n  line-height: 11px;\n  text-indent: 50px;\n  text-align: justify;\n  font-weight: 100;\n}\n.imatch-list {\n  margin-top: 30px;\n}\n.imatch-list li {\n  margin-top: 20px;\n  font-size: 12px;\n}\n.imatch-list p {\n  font-size: 10px;\n  line-height: 11px;\n  text-indent: 50px;\n  text-align: justify;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFFSjtBQUNBLGlCQUFBO0FBQ0E7RUFHSSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTtFQUNJLGlFQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKO0FBREE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBSUo7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBTUo7QUFKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU9KO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FBTkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFTSjtBQVBBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVUoiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUEFHRSBIRUFERVIgKi9cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnRhYm9uZV9oZWFkZXJfcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1heC13aWR0aDogMjVweDtcclxufVxyXG5cclxuLyogUEFHRSBDT05URU5UICovXHJcbi5wYWdlLWJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9hYm91dC9hYm91dC1iZy5wbmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggNDBweCAxMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9hYm91dC9hYm91dC1iZy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4ucGFnZS1iYWNrZ3JvdW5kLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmxlZnQtZmxleC1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZDlkOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmltYXRjaF9mbGV4X2ltYWdlIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5sZWZ0X2ZsZXhfaW1hZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnJpZ2h0LWZsZXgtZGl2IHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuLnJpZ2h0LWZsZXgtZGl2IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJpZ2h0LWZsZXgtZGl2IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucmlnaHQtbG9yZW0tcGFyYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG4uaW1hdGNoLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uaW1hdGNoLWxpc3QgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaW1hdGNoLWxpc3QgcCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "MiEk":
    /*!*****************************************************!*\
      !*** ./src/app/about-us/about-us-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutUsPageRoutingModule */

    /***/
    function MiEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function () {
        return AboutUsPageRoutingModule;
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


      var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about-us.page */
      "aqON");

      var routes = [{
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
      }];

      var AboutUsPageRoutingModule = function AboutUsPageRoutingModule() {
        _classCallCheck(this, AboutUsPageRoutingModule);
      };

      AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutUsPageRoutingModule);
      /***/
    },

    /***/
    "aM5c":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function aM5c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">ABOUT US</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content>\r\n  <div class=\"page-background-image\">\r\n    <div class=\"page-background-div\">\r\n\r\n      <div class=\"left-flex-div\">\r\n        <img src=\"../../assets/icon/about/logo.png\" alt=\"\" class=\"imatch_flex_image\">\r\n        <img src=\"../../assets/icon/about/01.png\" alt=\"\" class=\"left_flex_image\">\r\n        <img src=\"../../assets/icon/about/02.png\" alt=\"\" class=\"left_flex_image\">\r\n        <img src=\"../../assets/icon/about/03.png\" alt=\"\" class=\"left_flex_image\">\r\n        <img src=\"../../assets/icon/about/04.png\" alt=\"\" class=\"left_flex_image\">\r\n        <img src=\"../../assets/icon/about/05.png\" alt=\"\" class=\"left_flex_image\">\r\n      </div>\r\n\r\n      <div class=\"right-flex-div\">\r\n        <p>ABOUT</p>\r\n        <img src=\"../../assets/icon/about/01.jpg\" alt=\"\">\r\n        <div class=\"right-lorem-para\">\r\n          <p>Lorem ipsum dolor sit amet, vitae sed et, velit tempus, ante arcu. Id dui possimus mollis libero porttitor, tellus sodales wisi ut congue augue sit, nisl sit vitae est magna egestas, suspendisse luctus nisi massa sed id nec. Eu at posuere in fermentum, eros diam nulla a ut, sed accumsan, lectus curae, non accumsan elit quisque. </p>\r\n          <p>Laoreet libero ipsum, nec scelerisque, massa nulla, lectus dignissim nunc at tortor. Ac consectetuer vivamus natoque. Ut tortor dapibus vel egestas. Suspendisse ut nisl duis lectus, dignissim eget eleifend omnis non amet quam. Ultricies nunc.</p>\r\n        </div>\r\n        <p>IMATCH</p>\r\n        <div class=\"imatch-list\">\r\n          <ul style=\"padding-left: 15px;\">\r\n            <li>Estibulum quis molestie dolor</li>\r\n            <li>Pallentesque tempus congue arcu et</li>\r\n            <li>Posuere qu sque et dui pharetra</li>\r\n            <li>Vulputate lihern vitae, sagities ex.</li>\r\n          </ul>\r\n          <p>Laoreet libero ipsum, nec scelerisque, massa nulla, lectus dignissim nunc at tortor. Ac consectetuer vivamus natoque. Ut tortor dapibus vel egestas. Suspendisse ut nisl duis lectus, dignissim eget eleifend omnis non amet quam. Ultricies nunc.</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "aqON":
    /*!*******************************************!*\
      !*** ./src/app/about-us/about-us.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutUsPage */

    /***/
    function aqON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
        return AboutUsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "aM5c");
      /* harmony import */


      var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about-us.page.scss */
      "3SwB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AboutUsPage = /*#__PURE__*/function () {
        function AboutUsPage() {
          _classCallCheck(this, AboutUsPage);
        }

        _createClass(AboutUsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutUsPage;
      }();

      AboutUsPage.ctorParameters = function () {
        return [];
      };

      AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutUsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-us-about-us-module-es5.js.map