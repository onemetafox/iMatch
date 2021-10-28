(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squad-list-invitation-squad-list-invitation-module"], {
    /***/
    "+Xjp":
    /*!***********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Xjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcXVhZC1saXN0LWludml0YXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "2SgR":
    /*!***********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SquadListInvitationPageModule */

    /***/
    function SgR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPageModule", function () {
        return SquadListInvitationPageModule;
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


      var _squad_list_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./squad-list-invitation-routing.module */
      "DOLJ");
      /* harmony import */


      var _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./squad-list-invitation.page */
      "tYsh");

      var SquadListInvitationPageModule = function SquadListInvitationPageModule() {
        _classCallCheck(this, SquadListInvitationPageModule);
      };

      SquadListInvitationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _squad_list_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__["SquadListInvitationPageRoutingModule"]],
        declarations: [_squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_6__["SquadListInvitationPage"]]
      })], SquadListInvitationPageModule);
      /***/
    },

    /***/
    "DOLJ":
    /*!*******************************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SquadListInvitationPageRoutingModule */

    /***/
    function DOLJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPageRoutingModule", function () {
        return SquadListInvitationPageRoutingModule;
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


      var _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./squad-list-invitation.page */
      "tYsh");

      var routes = [{
        path: '',
        component: _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_3__["SquadListInvitationPage"]
      }];

      var SquadListInvitationPageRoutingModule = function SquadListInvitationPageRoutingModule() {
        _classCallCheck(this, SquadListInvitationPageRoutingModule);
      };

      SquadListInvitationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SquadListInvitationPageRoutingModule);
      /***/
    },

    /***/
    "Wct7":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/squad-list-invitation/squad-list-invitation.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wct7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>squad-list-invitation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "tYsh":
    /*!*********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SquadListInvitationPage */

    /***/
    function tYsh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPage", function () {
        return SquadListInvitationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_squad_list_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./squad-list-invitation.page.html */
      "Wct7");
      /* harmony import */


      var _squad_list_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./squad-list-invitation.page.scss */
      "+Xjp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SquadListInvitationPage = /*#__PURE__*/function () {
        function SquadListInvitationPage() {
          _classCallCheck(this, SquadListInvitationPage);
        }

        _createClass(SquadListInvitationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SquadListInvitationPage;
      }();

      SquadListInvitationPage.ctorParameters = function () {
        return [];
      };

      SquadListInvitationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-squad-list-invitation',
        template: _raw_loader_squad_list_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_squad_list_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SquadListInvitationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=squad-list-invitation-squad-list-invitation-module-es5.js.map