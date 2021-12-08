(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squad-list-squad-list-module"], {
    /***/
    "LhbW":
    /*!*************************************************!*\
      !*** ./src/app/squad-list/squad-list.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function LhbW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.chat_top-header {\n  padding: 1px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n}\n.chat_top-header h3 {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  position: relative;\n  right: 20px;\n}\n.chat_top-header p {\n  font-size: 14px;\n  margin-left: 7px;\n  background: #ffffff;\n  padding: 3px 7px;\n  border-radius: 50%;\n  color: #707072;\n}\n/* PAGE CONTENT */\n/* FIRST BOX DIV SESSION */\n.main-div {\n  background-image: url('squad_bg.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n}\n.box_div_session {\n  background-color: #ffffff;\n  padding: 8px;\n  position: relative;\n  box-shadow: grey -0.5px 0.5px 5px 1px;\n  margin: 13px;\n  border-radius: 4px;\n}\n/* SECOND BOX DIV SESSION */\n.second_box {\n  margin-top: 7px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 100%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.box_m {\n  display: flex;\n  align-items: center;\n  box-shadow: 0.5px 0px 2px -0.5px;\n  padding-left: 2px;\n}\n.list .item.item-accordion {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.list .item.item-accordion.ng-hide {\n  line-height: 0px;\n}\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important;\n}\n.arrow {\n  height: 25px;\n  right: 0;\n  bottom: 0;\n  width: 25px;\n  position: absolute;\n}\n.box_m img {\n  height: 12px;\n  border-radius: 50%;\n}\n.box_m p {\n  margin-left: 2px;\n  font-size: 9px;\n  font-weight: 600;\n}\n.image-div-object {\n  height: 140px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNxdWFkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSUo7QUFGQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtKO0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTUo7QUFIQSxpQkFBQTtBQUNBLDBCQUFBO0FBQ0E7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBTUo7QUFIQTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUZBLDJCQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFLSjtBQUhBO0VBQ0ksYUFBQTtBQU1KO0FBSkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU9KO0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVFKO0FBTkE7RUFDSSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBUUo7QUFOQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtBQVFKO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FBTkE7O0VBRUkseUJBQUE7QUFTSjtBQVBBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVUo7QUFSQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVdKO0FBVEE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlKO0FBVkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQWFKO0FBWEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFjSiIsImZpbGUiOiJzcXVhZC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbi50YWJvbmVfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXJfcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1heC13aWR0aDogMjVweDtcclxufVxyXG4uY2hhdF90b3AtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jaGF0X3RvcC1oZWFkZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjNzA3MDcyO1xyXG59XHJcblxyXG4vKiBQQUdFIENPTlRFTlQgKi9cclxuLyogRklSU1QgQk9YIERJViBTRVNTSU9OICovXHJcbi5tYWluLWRpdntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9zcXVhZGxpc3Qvc3F1YWRfYmcucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ib3hfZGl2X3Nlc3Npb24ge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiBncmV5IC0wLjVweCAwLjVweCA1cHggMXB4O1xyXG4gICAgbWFyZ2luOiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4vKiBTRUNPTkQgQk9YIERJViBTRVNTSU9OICovXHJcbi5zZWNvbmRfYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jb250ZXN0LWltYWdlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3Qge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3QgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib3hfbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMC41cHggMHB4IDJweCAtMC41cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG4ubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbiB7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiAwLjA5cyBhbGwgbGluZWFyO1xyXG59XHJcbi5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxufVxyXG4ubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlLWFkZCxcclxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZS1yZW1vdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uYXJyb3d7XHJcbiAgICBoZWlnaHQ6IDI1cHg7IFxyXG4gICAgcmlnaHQ6IDA7IFxyXG4gICAgYm90dG9tOiAwOyBcclxuICAgIHdpZHRoOjI1cHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ib3hfbSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5ib3hfbSBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmltYWdlLWRpdi1vYmplY3Qge1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5pbWFnZS1kaXYtb2JqZWN0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "gZTL":
    /*!*************************************************!*\
      !*** ./src/app/squad-list/squad-list.module.ts ***!
      \*************************************************/

    /*! exports provided: SquadListPageModule */

    /***/
    function gZTL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListPageModule", function () {
        return SquadListPageModule;
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


      var _squad_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./squad-list-routing.module */
      "yN90");
      /* harmony import */


      var _squad_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./squad-list.page */
      "yw0I");

      var SquadListPageModule = function SquadListPageModule() {
        _classCallCheck(this, SquadListPageModule);
      };

      SquadListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _squad_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SquadListPageRoutingModule"]],
        declarations: [_squad_list_page__WEBPACK_IMPORTED_MODULE_6__["SquadListPage"]]
      })], SquadListPageModule);
      /***/
    },

    /***/
    "qc2x":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/squad-list/squad-list.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function qc2x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  <div class=\"tabone_header\"  *ngIf=\"userDetails\">\r\n    <div class=\"chat_top-header\">\r\n        <h3>SQUAD LIST</h3>\r\n      <p *ngIf=\"mysquads\">{{this.mysquads.length}}</p>\r\n    </div>\r\n    <div style=\"position: absolute; padding: 10px; top: 5px;\"></div>\r\n    <div style=\"position: absolute; float: left; top: 5px; right: 0px; padding: 0px 13px 0px 10px;\">\r\n      <img *ngIf=\"userDetails.profile_pic == '' || userDetails.profile_pic == null || userDetails.profile_pic == undefined\" src=\"../../assets/icon/squadlist/user.png\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 5px;\">\r\n      <img *ngIf=\"userDetails.profile_pic != '' || userDetails.profile_pic != null || userDetails.profile_pic != undefined\" [src]=\"userDetails.profile_pic\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 1px;\">\r\n      <ion-icon name=\"caret-down\" style=\"color: white; position: relative; bottom: 12px; left: 3px;\"></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n</ion-header>\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content>\r\n  <div style=\"display: flex; align-items: center; justify-content: center; padding: 7px;\">\r\n    <img src=\"../../assets/icon/squadlist/heart.png\" alt=\"\" style=\"height: 20px; width: 20px; position: relative; left: 25px;\">\r\n    <p style=\"font-size: 12px; font-weight: 600; position: relative; left: 35px;\">0</p>\r\n    <ion-chip slot=\"end\" style=\"background-color: #706f73; height: 30px; position: relative; left: 30%;\" (click)=\"ToUserSearch()\">\r\n      <ion-icon name=\"add-circle\" style=\"font-size: 1.7rem; position: relative; right: 5px; color: #4a494a;  margin-right: 1px;\"></ion-icon>\r\n      <!-- <img src=\"../../assets/icon/squadlist/add.png\" alt=\"\"> -->\r\n      <ion-label style=\"color: white; font-size: 11px; font-weight: 900;\">ADD</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n  <div class=\"main-div\">\r\n    <img src=\"../../assets/icon/squadlist/img.JPEG\" alt=\"\">\r\n    <ion-list>\r\n      <div class=\"box_div_session , animate__animated animate__fadeIn\" *ngFor=\"let squad of mysquads; let i = index\">\r\n        <ion-item class=\"item-stable\"  ng-class=\"{active: isSquadShown(squad)}\">\r\n          <div style=\"background-color: #707072; padding: 10px; padding-bottom: 0; text-align: center; color: #ffffff; border-radius: 5px;\">\r\n            <img src=\"../../assets/icon/squadlist/box.png\" alt=\"\" style=\"height: 25px;\">\r\n            <h5 style=\"line-height: 5px; font-size: 16px; margin-top: 10px;\">{{squad.match_count}}</h5>\r\n            <h6 style=\"line-height: 5px; font-size: 12px;\">MATCHES</h6>\r\n          </div>\r\n          <div style=\"padding-left: 10px;\">\r\n            <h1 style=\"font-size: 16px; font-weight: 600; margin-top: 5px;\">{{squad.name | uppercase}}</h1>\r\n            <span style=\"line-height: 0; font-size: 14px;\">{{squad.name}} accept your request for squad</span>\r\n          </div>\r\n          <img class=\"arrow\" (click)=\"toggleSquad(squad)\" src=\"{{isSquadShown(squad) ? '../../assets/icon/squadlist/btn.png' : '../../assets/icon/squadlist/btn2.png'}}\" >\r\n        </ion-item>\r\n        <div class=\"row\" style=\"display: flex; flex-wrap: wrap;\" *ngIf=\"isSquadShown(squad)\">\r\n          <div *ngFor=\"let items of squad.compare_data;\" style=\"margin-top:5px;padding: 5px; margin-left:3px; flex-grow: 1 ;display: flex;\" >\r\n            <div *ngFor=\"let item of items; let k = index\" >\r\n              <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n              <ng-template #temp1>\r\n                <div class=\"image-div_first\">\r\n                  <img *ngIf=\"item[0].media_type==='image'\" [src]=\"item[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[0].media_type==='video'\" [src]=\"item[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/video1.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/audio.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n              </ng-template>\r\n              <ng-template #temp2>\r\n                <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                  <img *ngIf=\"item[1].media_type==='image'\" [src]=\"item[1].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[1].media_type==='video'\" [src]=\"item[1].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/video1.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[1].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item[1].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/audio.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[1].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item[1].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"item[1].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item[1].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n              </ng-template>\r\n              <div *ngIf=\"k !=0 \" style=\"position: relative;z-index: 100;margin-top: -40px;margin-left: -13px;\">\r\n                  <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-list>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "yN90":
    /*!*********************************************************!*\
      !*** ./src/app/squad-list/squad-list-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SquadListPageRoutingModule */

    /***/
    function yN90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListPageRoutingModule", function () {
        return SquadListPageRoutingModule;
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


      var _squad_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./squad-list.page */
      "yw0I");

      var routes = [{
        path: '',
        component: _squad_list_page__WEBPACK_IMPORTED_MODULE_3__["SquadListPage"]
      }];

      var SquadListPageRoutingModule = function SquadListPageRoutingModule() {
        _classCallCheck(this, SquadListPageRoutingModule);
      };

      SquadListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SquadListPageRoutingModule);
      /***/
    },

    /***/
    "yw0I":
    /*!***********************************************!*\
      !*** ./src/app/squad-list/squad-list.page.ts ***!
      \***********************************************/

    /*! exports provided: SquadListPage */

    /***/
    function yw0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListPage", function () {
        return SquadListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_squad_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./squad-list.page.html */
      "qc2x");
      /* harmony import */


      var _squad_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./squad-list.page.scss */
      "LhbW");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SquadListPage = /*#__PURE__*/function () {
        function SquadListPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, SquadListPage);

          this.storageservice = storageservice;
          this.common = common;
          this.userDetails = [];
          this.mysquads = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(SquadListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  id: _this2.userDetails.userid
                };

                _this2.common.presentLoading();

                _this2.common.postMethod('getSquadList', params).then(function (res) {
                  _this2.mysquads = res.details;

                  if (_this2.mysquads.length == 0) {
                    _this2.common.presentToast('You are having no `Squads` to show');
                  } else {
                    _this2.common.presentToast('You are having ' + res.details.length + ' squad list members to show');
                  }
                }, function (err) {
                  console.log('Error:', err);
                });
              } else {
                _this2.common.presentToast('Something Went Wrong !!!');
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleSquad",
          value: function toggleSquad(squad) {
            squad.show = !squad.show;
          }
        }, {
          key: "isSquadShown",
          value: function isSquadShown(squad) {
            return squad.show;
          }
        }, {
          key: "ToUserSearch",
          value: function ToUserSearch() {
            this.common.router.navigate(['/squad-search']);
          }
        }]);

        return SquadListPage;
      }();

      SquadListPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      };

      SquadListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-squad-list',
        template: _raw_loader_squad_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_squad_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SquadListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=squad-list-squad-list-module-es5.js.map