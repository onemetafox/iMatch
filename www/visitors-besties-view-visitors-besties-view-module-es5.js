(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-besties-view-visitors-besties-view-module"], {
    /***/
    "4+nu":
    /*!***********************************************************************!*\
      !*** ./src/app/visitors-besties-view/visitors-besties-view.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function nu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-profile-pic {\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  border: 1px solid white;\n  position: absolute;\n  right: 33px;\n  bottom: 5px;\n}\n\n.top-number {\n  border-radius: 50%;\n  background-color: white;\n  color: #707072;\n  font-size: small;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 130px;\n  bottom: 16px;\n}\n\n.top-drop-icon {\n  position: absolute;\n  right: 15px;\n  color: white;\n}\n\n.item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 0px;\n  margin: 18px;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.name-text {\n  position: relative;\n  bottom: 15px;\n  left: 15px;\n}\n\n.text-near-icons {\n  position: relative;\n  bottom: 4px;\n  left: 3px;\n}\n\n.container-inside-item {\n  width: 117px;\n  position: relative;\n  top: 12px;\n  text-align: center;\n  font-size: 12px;\n  right: 110px;\n}\n\n.text-near-img-icons {\n  position: relative;\n  left: 3px;\n  bottom: 3px;\n}\n\n.add-img {\n  height: 30px;\n  width: 30px;\n  position: relative;\n  right: 40px;\n}\n\n.last-drop-img {\n  position: absolute;\n  top: 30px;\n  right: -9px;\n  border-top-left-radius: 31px;\n}\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n\n.top-chip-styles {\n  background-color: #707072;\n  width: 118px;\n  height: 26px;\n  border: 1px solid black;\n}\n\n.chip-label-text {\n  color: white;\n  font-size: 9px;\n  position: absolute;\n  right: 9px;\n}\n\n.add-more-icon {\n  font-size: x-large;\n  position: relative;\n  right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0b3JzLWJlc3RpZXMtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQVVKOztBQVBBO0VBQ0ksaUJBQUE7QUFVSjs7QUFQRTtFQUNFLGtCQUFBO0FBVUo7O0FBUEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBV0o7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVdKIiwiZmlsZSI6InZpc2l0b3JzLWJlc3RpZXMtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXByb2ZpbGUtcGlje1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbn1cclxuLnRvcC1udW1iZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNzA3MDcyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTMwcHg7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbn1cclxuLnRvcC1kcm9wLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaXRlbS1zdHlsZXN7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufVxyXG4ubmFtZS10ZXh0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG4udGV4dC1uZWFyLWljb25ze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuLmNvbnRhaW5lci1pbnNpZGUtaXRlbXtcclxuICAgIHdpZHRoOiAxMTdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHJpZ2h0OiAxMTBweDtcclxufVxyXG4udGV4dC1uZWFyLWltZy1pY29uc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIGJvdHRvbTogM3B4O1xyXG59XHJcbi5hZGQtaW1ne1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNDBweDtcclxufVxyXG4ubGFzdC1kcm9wLWltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAtOXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzFweDtcclxufVxyXG5cclxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC50b3AtY2hpcC1zdHlsZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgd2lkdGg6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNoaXAtbGFiZWwtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDlweDtcclxufVxyXG5cclxuLmFkZC1tb3JlLWljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNnB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Nw5C":
    /*!*******************************************************************************!*\
      !*** ./src/app/visitors-besties-view/visitors-besties-view-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: VisitorsBestiesViewPageRoutingModule */

    /***/
    function Nw5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsBestiesViewPageRoutingModule", function () {
        return VisitorsBestiesViewPageRoutingModule;
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


      var _visitors_besties_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitors-besties-view.page */
      "mGld");

      var routes = [{
        path: '',
        component: _visitors_besties_view_page__WEBPACK_IMPORTED_MODULE_3__["VisitorsBestiesViewPage"]
      }];

      var VisitorsBestiesViewPageRoutingModule = function VisitorsBestiesViewPageRoutingModule() {
        _classCallCheck(this, VisitorsBestiesViewPageRoutingModule);
      };

      VisitorsBestiesViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitorsBestiesViewPageRoutingModule);
      /***/
    },

    /***/
    "WMM1":
    /*!***********************************************************************!*\
      !*** ./src/app/visitors-besties-view/visitors-besties-view.module.ts ***!
      \***********************************************************************/

    /*! exports provided: VisitorsBestiesViewPageModule */

    /***/
    function WMM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsBestiesViewPageModule", function () {
        return VisitorsBestiesViewPageModule;
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


      var _visitors_besties_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visitors-besties-view-routing.module */
      "Nw5C");
      /* harmony import */


      var _visitors_besties_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visitors-besties-view.page */
      "mGld");

      var VisitorsBestiesViewPageModule = function VisitorsBestiesViewPageModule() {
        _classCallCheck(this, VisitorsBestiesViewPageModule);
      };

      VisitorsBestiesViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visitors_besties_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorsBestiesViewPageRoutingModule"]],
        declarations: [_visitors_besties_view_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsBestiesViewPage"]]
      })], VisitorsBestiesViewPageModule);
      /***/
    },

    /***/
    "mGld":
    /*!*********************************************************************!*\
      !*** ./src/app/visitors-besties-view/visitors-besties-view.page.ts ***!
      \*********************************************************************/

    /*! exports provided: VisitorsBestiesViewPage */

    /***/
    function mGld(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsBestiesViewPage", function () {
        return VisitorsBestiesViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visitors_besties_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visitors-besties-view.page.html */
      "wJEJ");
      /* harmony import */


      var _visitors_besties_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visitors-besties-view.page.scss */
      "4+nu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");

      var VisitorsBestiesViewPage = /*#__PURE__*/function () {
        function VisitorsBestiesViewPage(storageservice, common) {
          _classCallCheck(this, VisitorsBestiesViewPage);

          this.storageservice = storageservice;
          this.common = common;
          this.UserInfo = [];
          this.mybesties = [];
        }

        _createClass(VisitorsBestiesViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('Entered Into Visitors Besties View Page');
            this.common.route.queryParams.subscribe(function (resp) {
              _this.UserInfo = resp;
              console.log('UserInfo:', _this.UserInfo);
              var params = {
                id: _this.UserInfo.userid
              };
              console.log('params:', params);

              _this.common.presentLoading();

              _this.common.postMethod('Listbesties', params).then(function (res) {
                console.log('res:', res);
                _this.mybesties = res.details.besties;
                console.log('mybesties:', _this.mybesties);
              }, function (err) {
                console.log('Error:', err);
                console.log(err.headers);
              });
            });
          }
        }]);

        return VisitorsBestiesViewPage;
      }();

      VisitorsBestiesViewPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      VisitorsBestiesViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitors-besties-view',
        template: _raw_loader_visitors_besties_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitors_besties_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VisitorsBestiesViewPage);
      /***/
    },

    /***/
    "wJEJ":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-besties-view/visitors-besties-view.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wJEJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"ios\" style=\"color: white; font-size: 15px;\" *ngIf=\"UserInfo\">\r\n      <span class=\"top-number\">{{this.mybesties.length}}</span>\r\n        BESTIES\r\n        <img *ngIf=\"UserInfo.user_profilepic == '' && UserInfo.user_profilepic == null && UserInfo.user_profilepic == undefined\" src=\"../../assets/icon/besties/add.png\" alt=\"\" class=\"top-profile-pic\">\r\n        <img *ngIf=\"UserInfo.user_profilepic != '' ||  UserInfo.user_profilepic != null || UserInfo.user_profilepic != undefined \" [src]=\"UserInfo.user_profilepic\" alt=\"\" class=\"top-profile-pic\">\r\n        <ion-icon name=\"caret-down-outline\" class=\"top-drop-icon\"></ion-icon>\r\n      </ion-title> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div  *ngFor=\" let bestie of mybesties;\">\r\n    <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\">\r\n      <ion-avatar style=\"height: 50px; width: 50px;\">\r\n        <img [src]=\"bestie.profile_pic\" alt=\"\">\r\n\r\n      </ion-avatar>\r\n      <ion-label class=\"name-text\">{{bestie.name}}</ion-label>\r\n  \r\n      <div class=\"container-inside-item\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <img src=\"../../assets/icon/besties/heart.png\" alt=\"\" style=\"height: 15px; width: 15px;\">\r\n            <span class=\"text-near-icons\">{{bestie.likes}}0</span>\r\n          </ion-col>\r\n  \r\n          <ion-col>\r\n            <img src=\"../../assets/icon/besties/comment.png\" alt=\"\" style=\"height: 15px; width: 18px;\">\r\n            <span class=\"text-near-icons\">{{bestie.comments}}0</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n  \r\n      <!-- <img src=\"../../assets/icon/besties/add.png\" alt=\"\" class=\"add-img\"> -->\r\n          <img src=\"../../assets/icon/besties/drop.png\" alt=\"\" class=\"last-drop-img\">\r\n    </ion-item>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=visitors-besties-view-visitors-besties-view-module-es5.js.map