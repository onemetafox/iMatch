(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-detail-blog-detail-module"], {
    /***/
    "9EiJ":
    /*!***********************************************************!*\
      !*** ./src/app/blog-detail/blog-detail-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: BlogDetailPageRoutingModule */

    /***/
    function EiJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailPageRoutingModule", function () {
        return BlogDetailPageRoutingModule;
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


      var _blog_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blog-detail.page */
      "9bul");

      var routes = [{
        path: '',
        component: _blog_detail_page__WEBPACK_IMPORTED_MODULE_3__["BlogDetailPage"]
      }];

      var BlogDetailPageRoutingModule = function BlogDetailPageRoutingModule() {
        _classCallCheck(this, BlogDetailPageRoutingModule);
      };

      BlogDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BlogDetailPageRoutingModule);
      /***/
    },

    /***/
    "9KgM":
    /*!***************************************************!*\
      !*** ./src/app/blog-detail/blog-detail.module.ts ***!
      \***************************************************/

    /*! exports provided: BlogDetailPageModule */

    /***/
    function KgM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function () {
        return BlogDetailPageModule;
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


      var _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blog-detail-routing.module */
      "9EiJ");
      /* harmony import */


      var _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blog-detail.page */
      "9bul");

      var BlogDetailPageModule = function BlogDetailPageModule() {
        _classCallCheck(this, BlogDetailPageModule);
      };

      BlogDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogDetailPageRoutingModule"]],
        declarations: [_blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]]
      })], BlogDetailPageModule);
      /***/
    },

    /***/
    "9bul":
    /*!*************************************************!*\
      !*** ./src/app/blog-detail/blog-detail.page.ts ***!
      \*************************************************/

    /*! exports provided: BlogDetailPage */

    /***/
    function bul(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogDetailPage", function () {
        return BlogDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blog_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blog-detail.page.html */
      "tvqa");
      /* harmony import */


      var _blog_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog-detail.page.scss */
      "ZU1X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BlogDetailPage = /*#__PURE__*/function () {
        function BlogDetailPage() {
          _classCallCheck(this, BlogDetailPage);
        }

        _createClass(BlogDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlogDetailPage;
      }();

      BlogDetailPage.ctorParameters = function () {
        return [];
      };

      BlogDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog-detail',
        template: _raw_loader_blog_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlogDetailPage);
      /***/
    },

    /***/
    "ZU1X":
    /*!***************************************************!*\
      !*** ./src/app/blog-detail/blog-detail.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function ZU1X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-search-icon {\n  position: absolute;\n  right: 30px;\n  color: white;\n  font-size: 1.5rem;\n}\n\n.top-person-img {\n  border: 3px solid white;\n  margin-right: 5px;\n}\n\nh5 {\n  font-weight: 700;\n}\n\n.middle-container-content {\n  line-height: 20px;\n  font-size: 13px;\n  color: grey;\n}\n\n.person-name-text {\n  font-size: 14px;\n  font-weight: 600;\n}\n\nion-item {\n  --background: #f9f9f9;\n}\n\n.item-end-text {\n  font-size: 12px;\n  color: grey;\n}\n\n.img-icons {\n  height: 20px;\n  width: 23px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2ctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUUoiLCJmaWxlIjoiYmxvZy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1zZWFyY2gtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLnRvcC1wZXJzb24taW1ne1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5oNXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm1pZGRsZS1jb250YWluZXItY29udGVudHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcbi5pdGVtLWVuZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmltZy1pY29uc3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "tvqa":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-detail/blog-detail.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function tvqa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"--background: #707072;\">\r\n    <ion-title mode=\"ios\" style=\"color: white;\r\n    font-size: 15px;\">\r\n      BLOG\r\n      <ion-icon name=\"search\" class=\"top-search-icon\"></ion-icon>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <div style=\"margin-top: 15px;\">\r\n\r\n        <div>\r\n          <img src=\"../../assets/icon/blog/bicycle-downhill-sunset.jpg\" alt=\"\">\r\n        </div>\r\n\r\n      <div>\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar class=\"top-person-img\">\r\n            <img src=\"../../assets/icon/blog/1.jpg\" alt=\"\">\r\n          </ion-avatar>\r\n          <ion-label class=\"person-name-text\">James Albert</ion-label>\r\n          <p slot=\"end\" class=\"item-end-text\">\r\n            <img src=\"../../assets/icon/blog-detail/2.png\" alt=\"\" class=\"img-icons\">\r\n            2 days ago</p>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <p class=\"item-end-text\">\r\n              <img src=\"../../assets/icon/blog/2.png\" alt=\"\" class=\"img-icons\">\r\n              10k</p>\r\n            <p class=\"item-end-text\" style=\"margin-left: 15px;\">\r\n              <img src=\"../../assets/icon/blog/2.png\" alt=\"\" class=\"img-icons\">\r\n              100k</p>\r\n            <img src=\"../../assets/icon/blog/2.png\" alt=\"\" class=\"img-icons\" slot=\"end\">\r\n          </ion-item>\r\n      </div>\r\n\r\n      <div style=\"padding: 10px;\">\r\n        <h5>Holiday to Alpine</h5>\r\n        <p class=\"middle-container-content\">\r\n          Contrary to popular belief, Lorem \r\n          Ipsum is not simply random text. \r\n          It has roots in a piece of classical\r\n           Latin literature from 45 BC, making \r\n           it over 2000 years old. Richard \r\n           McClintock, a Latin professor at \r\n           Hampden-Sydney College in Virginia, \r\n           looked up one of the more obscure \r\n           Latin words, consectetur, from a \r\n           Lorem Ipsum passage, and going \r\n           through the cites of the word in \r\n           classical literature, discovered \r\n           the undoubtable source. Lorem Ipsum \r\n           comes from sections 1.10.32 and \r\n           1.10.33 of \"de Finibus Bonorum et \r\n           Malorum\" (The Extremes of Good and Evil) \r\n           by Cicero, written in 45 BC. This book \r\n           is a treatise on the theory of ethics, \r\n           very popular during the Renaissance. \r\n           The first line of Lorem Ipsum, \"Lorem ipsum \r\n           dolor sit amet..\", comes from a line in \r\n           section 1.10.32.\r\n          The standard chunk of Lorem Ipsum used \r\n          since the 1500s is reproduced below for \r\n          those interested. Sections 1.10.32 and \r\n          1.10.33 from \"de Finibus Bonorum et Malorum\" \r\n          by Cicero are also reproduced in their \r\n          exact original form, accompanied by English \r\n          versions from the 1914 translation by H.Rackham.\r\n        </p>\r\n      </div>\r\n      </div>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=blog-detail-blog-detail-module-es5.js.map