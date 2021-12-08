(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["art-entertainment-art-entertainment-module"], {
    /***/
    "2tEH":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/art-entertainment/art-entertainment.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">ART & ENTERTAINMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"background-color: #707072; padding: 10px; margin: 15px; border-radius: 10px;\" *ngFor=\"let art of ArtEntertainmentDetails\" class=\"animate__animated animate__fadeIn\">\r\n\r\n    <div style=\"display: flex; margin-bottom: 10px;\">\r\n      <ion-avatar style=\"border: 1px solid yellow; padding: 2px; background-color: white; width: 45px; height: 45px;\">\r\n        <img [src]=\"art.sender_profile\" alt=\"\">\r\n      </ion-avatar>\r\n      <span style=\"margin: 10px; color: white;\"> {{art.sender_name}}</span>\r\n    </div>\r\n\r\n    <div style=\"display: flex; height: 300px;\">\r\n\r\n      <div style=\"padding-right: 2px;\">\r\n        <img [src]=\"art.receiver_image\" alt=\"\" style=\"height: 300px;\">\r\n      </div>\r\n\r\n      <img src=\"../../assets/icon/vs.png\" alt=\"\" style=\"position: absolute; left: 45%; top: 34%; height: 35px; width: 35px;\">\r\n      \r\n      <div style=\"padding-left: 2px;\">\r\n        <img [src]=\"art.sender_image\" alt=\"\" style=\"height: 300px;\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 15px;\">\r\n      <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{art.total_likecount}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{art.total_comment}} </span>\r\n      <img src=\"../../assets/icon/headliners/msg.png\" alt=\"\" style=\"width: 30px; height: 25px; margin-left: 10px; margin-right: 4px;\">\r\n      <span style=\"position: relative; bottom: 3px;\"> {{art.total_commoncomments}} </span>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "QR9S":
    /*!***************************************************************!*\
      !*** ./src/app/art-entertainment/art-entertainment.module.ts ***!
      \***************************************************************/

    /*! exports provided: ArtEntertainmentPageModule */

    /***/
    function QR9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtEntertainmentPageModule", function () {
        return ArtEntertainmentPageModule;
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


      var _art_entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./art-entertainment-routing.module */
      "zQdC");
      /* harmony import */


      var _art_entertainment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./art-entertainment.page */
      "ZrRd");

      var ArtEntertainmentPageModule = function ArtEntertainmentPageModule() {
        _classCallCheck(this, ArtEntertainmentPageModule);
      };

      ArtEntertainmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _art_entertainment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArtEntertainmentPageRoutingModule"]],
        declarations: [_art_entertainment_page__WEBPACK_IMPORTED_MODULE_6__["ArtEntertainmentPage"]]
      })], ArtEntertainmentPageModule);
      /***/
    },

    /***/
    "ZrRd":
    /*!*************************************************************!*\
      !*** ./src/app/art-entertainment/art-entertainment.page.ts ***!
      \*************************************************************/

    /*! exports provided: ArtEntertainmentPage */

    /***/
    function ZrRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtEntertainmentPage", function () {
        return ArtEntertainmentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_art_entertainment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./art-entertainment.page.html */
      "2tEH");
      /* harmony import */


      var _art_entertainment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./art-entertainment.page.scss */
      "l+2O");
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

      var ArtEntertainmentPage = /*#__PURE__*/function () {
        function ArtEntertainmentPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, ArtEntertainmentPage);

          this.storageservice = storageservice;
          this.common = common;
          this.userDetails = [];
          this.ArtEntertainmentDetails = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;

            if (_this.userDetails.userid != '') {
              _this.ionViewWillEnter();
            }
          });
        }

        _createClass(ArtEntertainmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            var params = {
              userid: this.userDetails.userid,
              category: 'art'
            };
            this.common.postMethod('BannerSearch', params).then(function (res) {
              _this2.ArtEntertainmentDetails = res.details;
            });
          }
        }]);

        return ArtEntertainmentPage;
      }();

      ArtEntertainmentPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      ArtEntertainmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-art-entertainment',
        template: _raw_loader_art_entertainment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_art_entertainment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ArtEntertainmentPage);
      /***/
    },

    /***/
    "l+2O":
    /*!***************************************************************!*\
      !*** ./src/app/art-entertainment/art-entertainment.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function l2O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtZW50ZXJ0YWlubWVudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "zQdC":
    /*!***********************************************************************!*\
      !*** ./src/app/art-entertainment/art-entertainment-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ArtEntertainmentPageRoutingModule */

    /***/
    function zQdC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtEntertainmentPageRoutingModule", function () {
        return ArtEntertainmentPageRoutingModule;
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


      var _art_entertainment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./art-entertainment.page */
      "ZrRd");

      var routes = [{
        path: '',
        component: _art_entertainment_page__WEBPACK_IMPORTED_MODULE_3__["ArtEntertainmentPage"]
      }];

      var ArtEntertainmentPageRoutingModule = function ArtEntertainmentPageRoutingModule() {
        _classCallCheck(this, ArtEntertainmentPageRoutingModule);
      };

      ArtEntertainmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ArtEntertainmentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=art-entertainment-art-entertainment-module-es5.js.map