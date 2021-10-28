(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
    /***/
    "1Iz0":
    /*!***********************************!*\
      !*** ./src/app/blog/blog.page.ts ***!
      \***********************************/

    /*! exports provided: BlogPage */

    /***/
    function Iz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
        return BlogPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blog.page.html */
      "PmsL");
      /* harmony import */


      var _blog_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog.page.scss */
      "HlX2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BlogPage = /*#__PURE__*/function () {
        function BlogPage() {
          _classCallCheck(this, BlogPage);
        }

        _createClass(BlogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlogPage;
      }();

      BlogPage.ctorParameters = function () {
        return [];
      };

      BlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog',
        template: _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlogPage);
      /***/
    },

    /***/
    "9ilz":
    /*!*********************************************!*\
      !*** ./src/app/blog/blog-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: BlogPageRoutingModule */

    /***/
    function ilz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function () {
        return BlogPageRoutingModule;
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


      var _blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blog.page */
      "1Iz0");

      var routes = [{
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_3__["BlogPage"]
      }];

      var BlogPageRoutingModule = function BlogPageRoutingModule() {
        _classCallCheck(this, BlogPageRoutingModule);
      };

      BlogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BlogPageRoutingModule);
      /***/
    },

    /***/
    "HlX2":
    /*!*************************************!*\
      !*** ./src/app/blog/blog.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function HlX2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  margin-top: 13px;\n  padding: 10px;\n  margin-right: 20px;\n  height: 565px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.container .text-container {\n  position: relative;\n  bottom: 243px;\n  margin-left: 10px;\n  margin-top: 10px;\n  height: 100px;\n  width: 100px;\n  white-space: normal;\n}\n.container .text-container .text-heading {\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n}\n.container .text-container .text-para {\n  color: white;\n  font-size: 10.5px;\n  letter-spacing: 0.5px;\n  position: relative;\n  bottom: 10px;\n}\n.container .text-container .page-text {\n  color: white;\n  font-size: 9px;\n  position: relative;\n  bottom: 12px;\n}\n.container .text-container-second {\n  position: relative;\n  bottom: 240px;\n  margin-left: 10px;\n  margin-top: 10px;\n  height: 100px;\n  width: 100px;\n  white-space: normal;\n}\n.container .text-container-second .text-heading {\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n}\n.container .text-container-second .text-para {\n  color: white;\n  font-size: 10.5px;\n  letter-spacing: 0.5px;\n  position: relative;\n  bottom: 10px;\n}\n.container .text-container-second .page-text {\n  color: white;\n  font-size: 9px;\n  position: relative;\n  bottom: 12px;\n}\n.container .text-container-third {\n  float: right;\n  height: 100px;\n  width: 110px;\n  position: relative;\n  bottom: 430px;\n  height: 100px;\n  white-space: normal;\n}\n.container .text-container-third .text-heading {\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n}\n.container .text-container-third .text-para {\n  color: white;\n  font-size: 10.5px;\n  letter-spacing: 0.5px;\n  position: relative;\n  bottom: 10px;\n}\n.container .text-container-third .page-text {\n  color: white;\n  font-size: 9px;\n  position: relative;\n  bottom: 12px;\n}\n.bottom-container {\n  position: relative;\n  bottom: 333px;\n  border-radius: 5px;\n  border: 1px solid #dbe0e3;\n  border-top: 0px;\n  padding-left: 13px;\n  padding-right: 10px;\n  height: 330px;\n  white-space: normal;\n}\n.bottom-container .person-img {\n  border-radius: 50%;\n  height: 35px;\n  width: 35px;\n  margin-right: 5px;\n}\n.bottom-container .count-text {\n  color: #6f6f71;\n  font-size: 14px;\n  margin-right: 15px;\n}\n.bottom-container .hand-img {\n  height: 21px;\n  width: 26px;\n  position: relative;\n  left: 28px;\n  bottom: 2px;\n}\n.bottom-container .hand1-img {\n  height: 21px;\n  width: 26px;\n  position: relative;\n  bottom: 2px;\n}\n.bottom-container .clock-img {\n  height: 16px;\n  width: 16px;\n  position: relative;\n  left: 25px;\n}\n.bottom-container h4 {\n  font-weight: 600;\n  font-size: 19px !important;\n}\n.bottom-container .content {\n  font-size: 13px;\n  color: #9197a9;\n  position: relative;\n  bottom: 10px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n}\nh3 {\n  font-weight: 700;\n}\n.container-sub {\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 1px 1px 5px 1px #d4d9dc;\n  padding: 3px;\n  margin: 10px;\n  border-top: 1px solid #d4d9dc;\n  border-left: 1px solid #d4d9dc;\n  position: relative;\n  bottom: 80px;\n}\n.content-container {\n  position: absolute;\n  width: 240px;\n  right: 6px;\n  top: -5px;\n}\n.show-all-button {\n  --background: white;\n  color: black;\n  font-weight: 600;\n  text-transform: none;\n  --padding-bottom: 15px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 15px;\n  position: relative;\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDTTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFDVTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDZDtBQUVZO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBZDtBQUdZO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFEZDtBQU1NO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKVjtBQU1VO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpkO0FBT1k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxkO0FBUVk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU5kO0FBVU07RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFSVjtBQVVVO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJkO0FBV1k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVRkO0FBWVk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVZkO0FBZU07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaUjtBQWNZO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWmQ7QUFjVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFaWjtBQWNVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBWlo7QUFjVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWlo7QUFjVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBWlo7QUFjVTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7QUFaZDtBQWNVO0VBQ0UsZUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBWmQ7QUFpQk07RUFDRSxnQkFBQTtBQWRSO0FBaUJNO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFkUjtBQWlCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBZE47QUFrQkU7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFmTiIsImZpbGUiOiJibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGhlaWdodDogNTY1cHg7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIFxyXG4gICAgICAudGV4dC1jb250YWluZXJ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3R0b206IDI0M3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgXHJcbiAgICAgICAgICAudGV4dC1oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAudGV4dC1wYXJhe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwLjVweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5wYWdlLXRleHR7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudGV4dC1jb250YWluZXItc2Vjb25ke1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm90dG9tOiAyNDBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIFxyXG4gICAgICAgICAgLnRleHQtaGVhZGluZ3tcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLnRleHQtcGFyYXtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMC41cHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAucGFnZS10ZXh0e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRleHQtY29udGFpbmVyLXRoaXJke1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbTogNDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBcclxuICAgICAgICAgIC50ZXh0LWhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC50ZXh0LXBhcmF7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLnBhZ2UtdGV4dHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICAgICAuYm90dG9tLWNvbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAzMzNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZTBlMztcclxuICAgICAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIFxyXG4gICAgICAgICAgICAucGVyc29uLWltZ3tcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvdW50LXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmY2ZjcxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oYW5kLWltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAyOHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oYW5kMS1pbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2xvY2staW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzkxOTdhOTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNvbnRhaW5lci1zdWJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4ICNkNGQ5ZGM7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDlkYztcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkNGQ5ZGM7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogODBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgIHJpZ2h0OiA2cHg7XHJcbiAgICAgIHRvcDogLTVweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNob3ctYWxsLWJ1dHRvbntcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "PmsL":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function PmsL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>BLOG\r\n        <!-- <img src=\"../../assets/icon/blog/search.png\" alt=\"\"> -->\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  \r\n    <div class=\"container\" scrollX=\"true\">\r\n      <img src=\"../../assets/icon/blog/bicycle-downhill-sunset.jpg\" alt=\"\" style=\"border-radius: 6px; height: 235px; width: -webkit-fill-available;\">\r\n      <div class=\"text-container\">\r\n        <p class=\"text-heading\">Holiday to Alpine</p>\r\n        <p class=\"text-para\">How to make your holiday in Alpine memorable</p>\r\n        <p class=\"page-text\">PAGE 1</p>\r\n      </div>\r\n  \r\n      <div class=\"text-container-second\">\r\n        <p class=\"text-heading\">Holiday to Alpine</p>\r\n        <p class=\"text-para\">How to make your holiday in Alpine memorable</p>\r\n        <p class=\"page-text\">PAGE 1</p>\r\n      </div>\r\n  \r\n      <div class=\"text-container-third\">\r\n        <p class=\"text-heading\">Holiday to Alpine</p>\r\n        <p class=\"text-para\">How to make your holiday in Alpine memorable</p>\r\n        <p class=\"page-text\">PAGE 1</p>\r\n      </div>\r\n  \r\n      <div class=\"bottom-container\">\r\n        <ion-item lines=\"none\" style=\" width: 320px; --padding-start: 0px;\">\r\n          <img src=\"../../assets/icon/blog/pages1.png\" alt=\"\" style=\" height: 45px; width: 45px;\">\r\n          <p style=\" font-size: 10px; font-weight: 600; margin-left: 1px;\">DEC 15 2020</p>\r\n          <p slot=\"end\" style=\"font-size: 11px; font-weight: 600; margin-left: 33px; margin-right: 5px; position: relative; left: 60px;\">VOTE</p>\r\n          <img src=\"../../assets/icon/blog/hand.png\" alt=\"\" slot=\"end\" class=\"hand-img\">\r\n          <img src=\"../../assets/icon/blog/hand1.png\" alt=\"\" slot=\"end\" class=\"hand1-img\">\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" style=\" --padding-start: 0px; \">\r\n          <img src=\"../../assets/icon/blog/1.jpg\" alt=\"\" class=\"person-img\">\r\n          <p style=\" font-weight: 600; font-size: 12.5px; \">James Albert</p>\r\n          <img src=\"../../assets/icon/blog/clock.png\" alt=\"\" slot=\"end\" class=\"clock-img\">\r\n          <p slot=\"end\" style=\" color: grey; font-size: 13px; \">2 days ago</p>\r\n        </ion-item>\r\n  \r\n        <h4>Holiday to Alpine</h4>\r\n        <p class=\"content\">Contrary to popular belief, Lorem Ipsum is not simply random text. \r\n          It has roots in a piece of ...</p>\r\n        \r\n          <ion-item lines=\"none\" style=\" position: relative; bottom: 20px; \">\r\n            <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\" height: 19px; width: 22px; margin-right: 5px; \">\r\n            <p class=\"count-text\">10k</p>\r\n            <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\"height: 17px; width: 19px; margin-right: 5px;\">\r\n            <p class=\"count-text\">100k</p>\r\n          </ion-item>\r\n  \r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  \r\n    <ion-item lines=\"none\" style=\" width: 365px; position: relative; bottom: 80px; \">\r\n      <h3>Popular</h3>\r\n      <ion-button shape=\"round\" size=\"small\" slot=\"end\" class=\"show-all-button\">Show All</ion-button>\r\n    </ion-item>\r\n  \r\n  \r\n    <div class=\"container-sub\">\r\n  \r\n      <ion-row>\r\n  \r\n        <ion-col>\r\n          <img src=\"../../assets/icon/blog/trvl4.jpg\" alt=\"\" style=\" height: 90px; width: 97px; border-radius: 6px; \">\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <div class=\"content-container\">\r\n            <h6 style=\" font-size: 15px; font-weight:600; margin-left: 5px; \">Most Awaited - Figma Launches new Pugin</h6>\r\n            <ion-item lines=\"none\" style=\" float: right; height: 30px; position: relative; bottom: 30px; left: 10px; \">\r\n            </ion-item>\r\n  \r\n            <ion-item lines=\"none\" style=\" width: max-content; position: relative; bottom: 30px; height: 40px; \">\r\n              <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\" height: 13px; width: 15px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 20px; color: grey; \">1k</p>\r\n              <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\" height: 14px; width: 16px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 54px; color: grey; \">20</p>\r\n              <img src=\"../../assets/icon/blog/clock.png\" alt=\"\" style=\" height: 12px; width: 13px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; color: grey; \">14 sec ago</p>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n      \r\n    </div>\r\n  \r\n  \r\n    <div class=\"container-sub\">\r\n  \r\n      <ion-row>\r\n  \r\n        <ion-col>\r\n          <img src=\"../../assets/icon/blog/trvl4.jpg\" alt=\"\" style=\" height: 90px; width: 97px; border-radius: 6px; \">\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <div class=\"content-container\">\r\n            <h6 style=\" font-size: 15px; font-weight:600; margin-left: 5px; \">Most Awaited - Figma Launches new Pugin</h6>\r\n            <ion-item lines=\"none\" style=\" float: right; height: 30px; position: relative; bottom: 30px; left: 10px; \">\r\n            </ion-item>\r\n  \r\n            <ion-item lines=\"none\" style=\" width: max-content; position: relative; bottom: 30px; height: 40px; \">\r\n              <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\" height: 13px; width: 15px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 20px; color: grey; \">1k</p>\r\n              <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\" height: 14px; width: 16px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 54px; color: grey; \">20</p>\r\n              <img src=\"../../assets/icon/blog/clock.png\" alt=\"\" style=\" height: 12px; width: 13px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; color: grey; \">14 sec ago</p>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n      \r\n    </div>\r\n  \r\n  \r\n    <div class=\"container-sub\">\r\n  \r\n      <ion-row>\r\n  \r\n        <ion-col>\r\n          <img src=\"../../assets/icon/blog/trvl4.jpg\" alt=\"\" style=\" height: 90px; width: 97px; border-radius: 6px; \">\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <div class=\"content-container\">\r\n            <h6 style=\" font-size: 15px; font-weight:600; margin-left: 5px; \">Most Awaited - Figma Launches new Pugin</h6>\r\n            <ion-item lines=\"none\" style=\" float: right; height: 30px; position: relative; bottom: 30px; left: 10px; \">\r\n            </ion-item>\r\n  \r\n            <ion-item lines=\"none\" style=\" width: max-content; position: relative; bottom: 30px; height: 40px; \">\r\n              <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\" height: 13px; width: 15px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 20px; color: grey; \">1k</p>\r\n              <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\" height: 14px; width: 16px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 54px; color: grey; \">20</p>\r\n              <img src=\"../../assets/icon/blog/clock.png\" alt=\"\" style=\" height: 12px; width: 13px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; color: grey; \">14 sec ago</p>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n      \r\n    </div>\r\n  \r\n  \r\n    <div class=\"container-sub\">\r\n  \r\n      <ion-row>\r\n  \r\n        <ion-col>\r\n          <img src=\"../../assets/icon/blog/trvl4.jpg\" alt=\"\" style=\" height: 90px; width: 97px; border-radius: 6px; \">\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <div class=\"content-container\">\r\n            <h6 style=\" font-size: 15px; font-weight:600; margin-left: 5px; \">Most Awaited - Figma Launches new Pugin</h6>\r\n            <ion-item lines=\"none\" style=\" float: right; height: 30px; position: relative; bottom: 30px; left: 10px; \">\r\n            </ion-item>\r\n  \r\n            <ion-item lines=\"none\" style=\"     width: max-content; position: relative; bottom: 30px; height: 40px;\">\r\n              <img src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\" height: 13px; width: 15px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 20px; color: grey; \">1k</p>\r\n              <img src=\"../../assets/icon/blog/comment.png\" alt=\"\" style=\" height: 14px; width: 16px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; margin-right: 54px; color: grey; \">20</p>\r\n              <img src=\"../../assets/icon/blog/clock.png\" alt=\"\" style=\" height: 12px; width: 13px; margin-right: 4px; \">\r\n              <p style=\" font-size: 12px; color: grey; \">14 sec ago</p>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n      \r\n    </div>\r\n  \r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "U4+L":
    /*!*************************************!*\
      !*** ./src/app/blog/blog.module.ts ***!
      \*************************************/

    /*! exports provided: BlogPageModule */

    /***/
    function U4L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogPageModule", function () {
        return BlogPageModule;
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


      var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blog-routing.module */
      "9ilz");
      /* harmony import */


      var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blog.page */
      "1Iz0");

      var BlogPageModule = function BlogPageModule() {
        _classCallCheck(this, BlogPageModule);
      };

      BlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageRoutingModule"]],
        declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
      })], BlogPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=blog-blog-module-es5.js.map