(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["beauty-fashion-beauty-fashion-module"], {
    /***/
    "3ZVJ":
    /*!*****************************************************************!*\
      !*** ./src/app/beauty-fashion/beauty-fashion-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BeautyFashionPageRoutingModule */

    /***/
    function ZVJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeautyFashionPageRoutingModule", function () {
        return BeautyFashionPageRoutingModule;
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


      var _beauty_fashion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./beauty-fashion.page */
      "Mzbo");

      var routes = [{
        path: '',
        component: _beauty_fashion_page__WEBPACK_IMPORTED_MODULE_3__["BeautyFashionPage"]
      }];

      var BeautyFashionPageRoutingModule = function BeautyFashionPageRoutingModule() {
        _classCallCheck(this, BeautyFashionPageRoutingModule);
      };

      BeautyFashionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BeautyFashionPageRoutingModule);
      /***/
    },

    /***/
    "G11A":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beauty-fashion/beauty-fashion.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function G11A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">BEAUTY & FASHION</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"background-color: #707072; padding: 10px; margin: 15px; border-radius: 10px;\" *ngFor=\"let beauty of BeautyFashionDetails\" class=\"animate__animated animate__fadeIn\">\r\n\r\n    <div style=\"display: flex; margin-bottom: 10px;\">\r\n      <ion-avatar style=\"border: 1px solid yellow; padding: 2px; background-color: white; width: 45px; height: 45px;\">\r\n        <img [src]=\"beauty.sender_profile\" alt=\"\">\r\n      </ion-avatar>\r\n      <span style=\"margin: 10px; color: white;\"> {{beauty.sender_name}}</span>\r\n    </div>\r\n\r\n    <div style=\"display: flex; height: 300px;\">\r\n\r\n      <div style=\"padding-right: 2px;\">\r\n        <img [src]=\"beauty.receiver_image\" alt=\"\" style=\"height: 300px;\">\r\n      </div>\r\n\r\n      <img src=\"../../assets/icon/vs.png\" alt=\"\" style=\"position: absolute; left: 45%; top: 34%; height: 35px; width: 35px;\">\r\n      \r\n      <div style=\"padding-left: 2px;\">\r\n        <img [src]=\"beauty.sender_image\" alt=\"\" style=\"height: 300px;\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n      <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{beauty.total_likecount}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{beauty.total_comment}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{beauty.total_commoncomments}} </span>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "HsJr":
    /*!*********************************************************!*\
      !*** ./src/app/beauty-fashion/beauty-fashion.module.ts ***!
      \*********************************************************/

    /*! exports provided: BeautyFashionPageModule */

    /***/
    function HsJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeautyFashionPageModule", function () {
        return BeautyFashionPageModule;
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


      var _beauty_fashion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./beauty-fashion-routing.module */
      "3ZVJ");
      /* harmony import */


      var _beauty_fashion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./beauty-fashion.page */
      "Mzbo");

      var BeautyFashionPageModule = function BeautyFashionPageModule() {
        _classCallCheck(this, BeautyFashionPageModule);
      };

      BeautyFashionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _beauty_fashion_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeautyFashionPageRoutingModule"]],
        declarations: [_beauty_fashion_page__WEBPACK_IMPORTED_MODULE_6__["BeautyFashionPage"]]
      })], BeautyFashionPageModule);
      /***/
    },

    /***/
    "Mzbo":
    /*!*******************************************************!*\
      !*** ./src/app/beauty-fashion/beauty-fashion.page.ts ***!
      \*******************************************************/

    /*! exports provided: BeautyFashionPage */

    /***/
    function Mzbo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeautyFashionPage", function () {
        return BeautyFashionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_beauty_fashion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./beauty-fashion.page.html */
      "G11A");
      /* harmony import */


      var _beauty_fashion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./beauty-fashion.page.scss */
      "QNX9");
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

      var BeautyFashionPage = /*#__PURE__*/function () {
        function BeautyFashionPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, BeautyFashionPage);

          this.storageservice = storageservice;
          this.common = common;
          this.userDetails = [];
          this.BeautyFashionDetails = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;

            if (_this.userDetails.userid != '') {
              _this.ionViewWillEnter();
            }
          });
        }

        _createClass(BeautyFashionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered Into Funny Posts Page');
            var params = {
              userid: this.userDetails.userid,
              category: 'beauty'
            };
            console.log('params:', params);
            this.common.postMethod('BannerSearch', params).then(function (res) {
              console.log('res:', res);
              _this2.BeautyFashionDetails = res.details;
            });
          }
        }]);

        return BeautyFashionPage;
      }();

      BeautyFashionPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      BeautyFashionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beauty-fashion',
        template: _raw_loader_beauty_fashion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beauty_fashion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BeautyFashionPage);
      /***/
    },

    /***/
    "QNX9":
    /*!*********************************************************!*\
      !*** ./src/app/beauty-fashion/beauty-fashion.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function QNX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWF1dHktZmFzaGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=beauty-fashion-beauty-fashion-module-es5.js.map