(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-squad-list-view-visitors-squad-list-view-module"], {
    /***/
    "C/tv":
    /*!*************************************************************************************!*\
      !*** ./src/app/visitors-squad-list-view/visitors-squad-list-view-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: VisitorsSquadListViewPageRoutingModule */

    /***/
    function CTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsSquadListViewPageRoutingModule", function () {
        return VisitorsSquadListViewPageRoutingModule;
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


      var _visitors_squad_list_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitors-squad-list-view.page */
      "X71M");

      var routes = [{
        path: '',
        component: _visitors_squad_list_view_page__WEBPACK_IMPORTED_MODULE_3__["VisitorsSquadListViewPage"]
      }];

      var VisitorsSquadListViewPageRoutingModule = function VisitorsSquadListViewPageRoutingModule() {
        _classCallCheck(this, VisitorsSquadListViewPageRoutingModule);
      };

      VisitorsSquadListViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitorsSquadListViewPageRoutingModule);
      /***/
    },

    /***/
    "NZlL":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-squad-list-view/visitors-squad-list-view.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NZlL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 25px;\">SQUAD LIST</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <div style=\"position: absolute; float: left; top: 5px; right: 0px; padding: 0px 13px 0px 10px;\">\r\n    <img *ngIf=\"UserInfo.profile_pic == '' || UserInfo.profile_pic == null || UserInfo.profile_pic == undefined\" src=\"../../assets/icon/squadlist/user.png\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 5px;\">\r\n    <img *ngIf=\"UserInfo.profile_pic != '' || UserInfo.profile_pic != null || UserInfo.profile_pic != undefined\" [src]=\"UserInfo.profile_pic\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 1px;\">\r\n\r\n    <ion-icon name=\"caret-down\" style=\"color: white; position: relative; bottom: 12px; left: 3px;\"></ion-icon>\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div style=\"display: flex; align-items: center; justify-content: center; padding: 7px;\">\r\n    <img src=\"../../assets/icon/squadlist/heart.png\" alt=\"\" style=\"height: 20px; width: 20px; position: relative; left: 25px;\">\r\n    <p style=\"font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    left: 35px;\">0</p>\r\n\r\n      <!-- <ion-chip slot=\"end\" style=\"background-color: #706f73;\r\n      height: 30px;\r\n      position: relative;\r\n      left: 30%;\">\r\n      <ion-icon name=\"add-circle\" style=\"font-size: 1.7rem;\r\n      position: relative;\r\n      right: 5px;\r\n      color: #4a494a;\r\n      margin-right: 1px;\"></ion-icon> -->\r\n        <!-- <img src=\"../../assets/icon/squadlist/add.png\" alt=\"\"> -->\r\n        <!-- <ion-label style=\"color: white;\r\n        font-size: 11px;\r\n        font-weight: 900;\">ADD</ion-label>\r\n      </ion-chip> -->\r\n\r\n    <!-- <div style=\"position: absolute; float: left; right: 10px; height: 33px; width: 100px; padding: 5px; border-radius: 17px; background-color: #808080b8;\">\r\n      <img src=\"../../assets/icon/squadlist/add.png\" alt=\"\" style=\"height: 24px; width: 24px;\">\r\n      <span>ADD</span>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div>\r\n        <!-- FIRST BOX DIV SECTION  -->\r\n        <div class=\"box_div_session , animate__animated animate__fadeIn\" *ngFor=\"let squad of mysquads\">\r\n          <div style=\"background-color: #707072; padding: 10px; padding-bottom: 0; text-align: center; color: #ffffff; border-radius: 5px;\">\r\n            <img src=\"../../assets/icon/squadlist/box.png\" alt=\"\" style=\"height: 25px;\">\r\n            <h5 style=\"line-height: 5px; font-size: 16px; margin-top: 10px;\">0</h5>\r\n            <h6 style=\"line-height: 5px; font-size: 12px;\">MATCHES</h6>\r\n          </div>\r\n          <div style=\"padding-left: 10px;\">\r\n            <h1 style=\"font-size: 16px; font-weight: 600; margin-top: 5px;\">{{squad.name | uppercase}}</h1>\r\n            <p style=\"line-height: 0; font-size: 14px;\">Invite {{squad.name}} to join your squad</p>\r\n          </div>\r\n          <img src=\"../../assets/icon/squadlist/btn2.png\" alt=\"\"\r\n            style=\"height: 25px; right: 0; bottom: 0; width:25px; position: absolute;\">\r\n        </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "PWff":
    /*!*****************************************************************************!*\
      !*** ./src/app/visitors-squad-list-view/visitors-squad-list-view.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function PWff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.chat_top-header {\n  padding: 1px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n}\n.chat_top-header h3 {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  position: relative;\n  right: 20px;\n}\n.chat_top-header p {\n  font-size: 14px;\n  margin-left: 7px;\n  background: #ffffff;\n  padding: 3px 7px;\n  border-radius: 50%;\n  color: #707072;\n}\n/* PAGE CONTENT */\n/* FIRST BOX DIV SESSION */\n.main-div {\n  background-image: url('squad_bg.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n}\n.box_div_session {\n  display: flex;\n  background-color: #ffffff;\n  padding: 8px;\n  position: relative;\n  box-shadow: grey -0.5px 0.5px 5px 1px;\n  margin: 13px;\n  border-radius: 4px;\n}\n/* SECOND BOX DIV SESSION */\n.second_box {\n  margin-top: 7px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 50%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.box_m {\n  display: flex;\n  align-items: center;\n  box-shadow: 0.5px 0px 2px -0.5px;\n  padding-left: 2px;\n}\n.box_m img {\n  height: 12px;\n  border-radius: 50%;\n}\n.box_m p {\n  margin-left: 2px;\n  font-size: 9px;\n  font-weight: 600;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 50%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.image-div-object {\n  height: 140px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0b3JzLXNxdWFkLWxpc3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFHSjtBQURBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFNSjtBQUhBLGlCQUFBO0FBQ0EsMEJBQUE7QUFDQTtFQUNJLHFDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFNSjtBQUhBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhBLDJCQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFNSjtBQUpBO0VBQ0ksYUFBQTtBQU9KO0FBTEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVFKO0FBTkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVNKO0FBUEE7RUFDSSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVdKO0FBVEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFZSjtBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFhSjtBQVhBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFjSjtBQVpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFlSjtBQWJBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFnQko7QUFkQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWlCSiIsImZpbGUiOiJ2aXNpdG9ycy1zcXVhZC1saXN0LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUEFHRSBIRUFERVIgKi9cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGFib25lX2hlYWRlcl9yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcbi5jaGF0X3RvcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG4uY2hhdF90b3AtaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICM3MDcwNzI7XHJcbn1cclxuXHJcbi8qIFBBR0UgQ09OVEVOVCAqL1xyXG4vKiBGSVJTVCBCT1ggRElWIFNFU1NJT04gKi9cclxuLm1haW4tZGl2e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL3NxdWFkbGlzdC9zcXVhZF9iZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJveF9kaXZfc2Vzc2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IGdyZXkgLTAuNXB4IDAuNXB4IDVweCAxcHg7XHJcbiAgICBtYXJnaW46IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi8qIFNFQ09ORCBCT1ggRElWIFNFU1NJT04gKi9cclxuLnNlY29uZF9ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbnRlc3QtaW1hZ2UtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltYWdlLWRpdl9maXJzdCB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4uaW1hZ2UtZGl2X2ZpcnN0IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm94X20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAuNXB4IDBweCAycHggLTAuNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuLmJveF9tIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJveF9tIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW1hZ2UtZGl2IHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogMzMuMyU7XHJcbn1cclxuLmltYWdlLWRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltYWdlLWRpdl9maXJzdCB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4uaW1hZ2UtZGl2X2ZpcnN0IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1hZ2UtZGl2LW9iamVjdCB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLmltYWdlLWRpdi1vYmplY3QgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "UUhr":
    /*!*****************************************************************************!*\
      !*** ./src/app/visitors-squad-list-view/visitors-squad-list-view.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: VisitorsSquadListViewPageModule */

    /***/
    function UUhr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsSquadListViewPageModule", function () {
        return VisitorsSquadListViewPageModule;
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


      var _visitors_squad_list_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visitors-squad-list-view-routing.module */
      "C/tv");
      /* harmony import */


      var _visitors_squad_list_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visitors-squad-list-view.page */
      "X71M");

      var VisitorsSquadListViewPageModule = function VisitorsSquadListViewPageModule() {
        _classCallCheck(this, VisitorsSquadListViewPageModule);
      };

      VisitorsSquadListViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visitors_squad_list_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorsSquadListViewPageRoutingModule"]],
        declarations: [_visitors_squad_list_view_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsSquadListViewPage"]]
      })], VisitorsSquadListViewPageModule);
      /***/
    },

    /***/
    "X71M":
    /*!***************************************************************************!*\
      !*** ./src/app/visitors-squad-list-view/visitors-squad-list-view.page.ts ***!
      \***************************************************************************/

    /*! exports provided: VisitorsSquadListViewPage */

    /***/
    function X71M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorsSquadListViewPage", function () {
        return VisitorsSquadListViewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visitors_squad_list_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visitors-squad-list-view.page.html */
      "NZlL");
      /* harmony import */


      var _visitors_squad_list_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visitors-squad-list-view.page.scss */
      "PWff");
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

      var VisitorsSquadListViewPage = /*#__PURE__*/function () {
        function VisitorsSquadListViewPage(storageservice, common) {
          _classCallCheck(this, VisitorsSquadListViewPage);

          this.storageservice = storageservice;
          this.common = common;
          this.UserInfo = [];
          this.mysquads = [];
        }

        _createClass(VisitorsSquadListViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('Entered Into Visitors Fans Of View Page');
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
                _this.mysquads = res.details.squad;
                console.log('mysquads:', _this.mysquads);
              }, function (err) {
                console.log('Error:', err);
                console.log(err.headers);
              });
            });
          }
        }]);

        return VisitorsSquadListViewPage;
      }();

      VisitorsSquadListViewPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      VisitorsSquadListViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitors-squad-list-view',
        template: _raw_loader_visitors_squad_list_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitors_squad_list_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VisitorsSquadListViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=visitors-squad-list-view-visitors-squad-list-view-module-es5.js.map