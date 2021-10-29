(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squad-list-squad-list-module"],{

/***/ "LhbW":
/*!*************************************************!*\
  !*** ./src/app/squad-list/squad-list.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.chat_top-header {\n  padding: 1px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n}\n.chat_top-header h3 {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  position: relative;\n  right: 20px;\n}\n.chat_top-header p {\n  font-size: 14px;\n  margin-left: 7px;\n  background: #ffffff;\n  padding: 3px 7px;\n  border-radius: 50%;\n  color: #707072;\n}\n/* PAGE CONTENT */\n/* FIRST BOX DIV SESSION */\n.main-div {\n  background-image: url('squad_bg.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n}\n.box_div_session {\n  display: flex;\n  background-color: #ffffff;\n  padding: 8px;\n  position: relative;\n  box-shadow: grey -0.5px 0.5px 5px 1px;\n  margin: 13px;\n  border-radius: 4px;\n}\n/* SECOND BOX DIV SESSION */\n.second_box {\n  margin-top: 7px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 50%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.box_m {\n  display: flex;\n  align-items: center;\n  box-shadow: 0.5px 0px 2px -0.5px;\n  padding-left: 2px;\n}\n.box_m img {\n  height: 12px;\n  border-radius: 50%;\n}\n.box_m p {\n  margin-left: 2px;\n  font-size: 9px;\n  font-weight: 600;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 50%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.image-div-object {\n  height: 140px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNxdWFkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR0o7QUFEQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSUo7QUFGQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtKO0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTUo7QUFIQSxpQkFBQTtBQUNBLDBCQUFBO0FBQ0E7RUFDSSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBTUo7QUFIQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTUo7QUFIQSwyQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7QUFPSjtBQUxBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFRSjtBQU5BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFTSjtBQVBBO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFVSjtBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFXSjtBQVRBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBWUo7QUFWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBYUo7QUFYQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBY0o7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBZUo7QUFiQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBZ0JKO0FBZEE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFpQkoiLCJmaWxlIjoic3F1YWQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQQUdFIEhFQURFUiAqL1xyXG4udGFib25lX2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50YWJvbmVfaGVhZGVyX3JpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2hhdF90b3AtaGVhZGVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcbi5jaGF0X3RvcC1oZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogIzcwNzA3MjtcclxufVxyXG5cclxuLyogUEFHRSBDT05URU5UICovXHJcbi8qIEZJUlNUIEJPWCBESVYgU0VTU0lPTiAqL1xyXG4ubWFpbi1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vc3F1YWRsaXN0L3NxdWFkX2JnLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYm94X2Rpdl9zZXNzaW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogZ3JleSAtMC41cHggMC41cHggNXB4IDFweDtcclxuICAgIG1hcmdpbjogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogU0VDT05EIEJPWCBESVYgU0VTU0lPTiAqL1xyXG4uc2Vjb25kX2JveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29udGVzdC1pbWFnZS1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaW1hZ2UtZGl2X2ZpcnN0IHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3QgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ib3hfbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMC41cHggMHB4IDJweCAtMC41cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG4uYm94X20gaW1nIHtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYm94X20gcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5pbWFnZS1kaXYge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zJTtcclxufVxyXG4uaW1hZ2UtZGl2IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1hZ2UtZGl2X2ZpcnN0IHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3QgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZS1kaXYtb2JqZWN0IHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4uaW1hZ2UtZGl2LW9iamVjdCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "gZTL":
/*!*************************************************!*\
  !*** ./src/app/squad-list/squad-list.module.ts ***!
  \*************************************************/
/*! exports provided: SquadListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadListPageModule", function() { return SquadListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _squad_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squad-list-routing.module */ "yN90");
/* harmony import */ var _squad_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./squad-list.page */ "yw0I");







let SquadListPageModule = class SquadListPageModule {
};
SquadListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _squad_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SquadListPageRoutingModule"]
        ],
        declarations: [_squad_list_page__WEBPACK_IMPORTED_MODULE_6__["SquadListPage"]]
    })
], SquadListPageModule);



/***/ }),

/***/ "qc2x":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/squad-list/squad-list.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  <div class=\"tabone_header\"  *ngIf=\"userDetails\">\r\n\r\n    <div class=\"chat_top-header\">\r\n\r\n        <h3>SQUAD LIST</h3>\r\n      <p *ngIf=\"mysquads\">{{this.mysquads.length}}</p>\r\n    </div>\r\n    <div style=\"position: absolute; padding: 10px; top: 5px;\">\r\n\r\n    </div>\r\n\r\n    <div style=\"position: absolute; float: left; top: 5px; right: 0px; padding: 0px 13px 0px 10px;\">\r\n      <img *ngIf=\"userDetails.profile_pic == '' || userDetails.profile_pic == null || userDetails.profile_pic == undefined\" src=\"../../assets/icon/squadlist/user.png\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 5px;\">\r\n      <img *ngIf=\"userDetails.profile_pic != '' || userDetails.profile_pic != null || userDetails.profile_pic != undefined\" [src]=\"userDetails.profile_pic\" alt=\"\" style=\"border-radius: 50%; border: 1px solid white; height: 45px; width: 45px; padding: 1px;\">\r\n\r\n      <ion-icon name=\"caret-down\" style=\"color: white; position: relative; bottom: 12px; left: 3px;\"></ion-icon>\r\n    </div>\r\n\r\n  </div>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content [fullscreen]=\"true\">\r\n  <div style=\"display: flex; align-items: center; justify-content: center; padding: 7px;\">\r\n    <img src=\"../../assets/icon/squadlist/heart.png\" alt=\"\" style=\"height: 20px; width: 20px; position: relative; left: 25px;\">\r\n    <p style=\"font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    left: 35px;\">0</p>\r\n\r\n      <ion-chip slot=\"end\" style=\"background-color: #706f73;\r\n      height: 30px;\r\n      position: relative;\r\n      left: 30%;\" (click)=\"ToUserSearch()\">\r\n      <ion-icon name=\"add-circle\" style=\"font-size: 1.7rem;\r\n      position: relative;\r\n      right: 5px;\r\n      color: #4a494a;\r\n      margin-right: 1px;\"></ion-icon>\r\n        <!-- <img src=\"../../assets/icon/squadlist/add.png\" alt=\"\"> -->\r\n        <ion-label style=\"color: white;\r\n        font-size: 11px;\r\n        font-weight: 900;\">ADD</ion-label>\r\n      </ion-chip>\r\n\r\n    <!-- <div style=\"position: absolute; float: left; right: 10px; height: 33px; width: 100px; padding: 5px; border-radius: 17px; background-color: #808080b8;\">\r\n      <img src=\"../../assets/icon/squadlist/add.png\" alt=\"\" style=\"height: 24px; width: 24px;\">\r\n      <span>ADD</span>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"main-div\">\r\n    <img src=\"../../assets/icon/squadlist/img.JPEG\" alt=\"\">\r\n    <!-- FIRST BOX DIV SECTION  -->\r\n    <div class=\"box_div_session , animate__animated animate__fadeIn\" *ngFor=\"let squad of mysquads\">\r\n      <div style=\"background-color: #707072; padding: 10px; padding-bottom: 0; text-align: center; color: #ffffff; border-radius: 5px;\">\r\n        <img src=\"../../assets/icon/squadlist/box.png\" alt=\"\" style=\"height: 25px;\">\r\n        <h5 style=\"line-height: 5px; font-size: 16px; margin-top: 10px;\">0</h5>\r\n        <h6 style=\"line-height: 5px; font-size: 12px;\">MATCHES</h6>\r\n      </div>\r\n      <div style=\"padding-left: 10px;\">\r\n        <h1 style=\"font-size: 16px; font-weight: 600; margin-top: 5px;\">{{squad.name | uppercase}}</h1>\r\n        <span style=\"line-height: 0; font-size: 14px;\">Invite {{squad.name}} to join your squad</span>\r\n      </div>\r\n      <img src=\"../../assets/icon/squadlist/btn2.png\" alt=\"\" style=\"height: 25px; right: 0; bottom: 0; width:25px; position: absolute;\">\r\n    </div>\r\n\r\n    <!-- FIRST BOX DIV SECTION  -->\r\n    <div class=\"second_box\">\r\n      <!-- <div style=\"justify-content: space-between; display:flex\">\r\n        <img src=\"../../assets/icon/squadlist/btn1.png\" alt=\"\" style=\"height: 35px; width: 35px;\">\r\n        <img src=\"../../assets/icon/squadlist/btn3.png\" alt=\"\" style=\"height: 35px; width: 35px;\">\r\n      </div> -->\r\n\r\n      <!-- vs images first  -->\r\n      <!-- <div style=\"display: flex;margin-top: 8px;\">\r\n        <div style=\"width: 40%; margin-right: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/baby1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/baby2.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 30%; left: 40%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 60%; margin-left: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/avengers.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/hulk.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/aven.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 30%; left: 27%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 30%; left: 60%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- vs images second  -->\r\n      <!-- <div style=\"margin-top: 8px;display: flex;\">\r\n        <div style=\"width: 50%; margin-right: 3px; position: relative;\">\r\n\r\n          <div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/train1.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/train2.jpg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/train3.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/train4.jpg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"position: absolute; top: 35%; left: 43%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 26%; left: 42%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 26%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 68%; left: 42%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 68%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 50%; margin-left: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div-object\">\r\n              <img src=\"../../assets/icon/activity/mike2.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div-object\">\r\n              <img src=\"../../assets/icon/activity/mike2.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 35%; left: 44%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 69%; left: 43%;\">\r\n            <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 67%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- vs images third  -->\r\n      <!-- <div style=\"display: flex;margin-top: 8px;\">\r\n\r\n        <div style=\"width: 60%; margin-right: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/avengers.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/hulk.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/aven.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 40%; margin-left: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/baby1.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/baby2.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <div style=\"display: flex; align-items: center;\">\r\n              <img src=\"../../assets/icon/man1.png\" alt=\"\">\r\n              <p>kavitha</p>\r\n            </div>\r\n            <div style=\"margin-left: 5px; width: 100%; padding-right: 3px;\">\r\n              <div style=\"display: flex; align-items: center; line-height: 3px; justify-content: flex-end;\">\r\n                <img src=\"../../assets/icon/search.png\" alt=\"\" style=\"height: 10px; width: 10px;\">\r\n                <p style=\"font-weight: 500;\">may 6th 2pm</p>\r\n              </div>\r\n              <div\r\n                style=\"display: flex; align-items: center; line-height: 0px; justify-content: flex-end; margin-top: -5px;\">\r\n                <img src=\"../../assets/icon/squadlist/shoot-grey.png\" alt=\"\" style=\"height: 10px; width: 13px;\">\r\n                <p style=\"font-weight: 500;\">30m</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n     <!-- SECOND BOX DIV SECTION  -->\r\n     <!-- <div class=\"box_div_session\" style=\"margin-top: 10px;\">\r\n      <div style=\"background-color: #707072; padding: 10px; padding-bottom: 0; text-align: center; color: #ffffff;\">\r\n        <img src=\"../../assets/icon/squadlist/box.png\" alt=\"\" style=\"height: 25px;\">\r\n        <h5 style=\"line-height: 5px; font-size: 16px; margin-top: 10px;\">05</h5>\r\n        <h6 style=\"line-height: 5px; font-size: 12px;\">MATCHES</h6>\r\n      </div>\r\n      <div style=\"padding-left: 10px;\">\r\n        <h1 style=\"font-size: 16px; font-weight: 600; margin-top: 5px;\">AMIRA</h1>\r\n        <p style=\"line-height: 0; font-size: 14px;\">Invite Amira to join your squad</p>\r\n      </div>\r\n      <img src=\"../../assets/icon/squadlist/btn.png\" alt=\"\"\r\n        style=\"height: 25px; right: 0; bottom: 0; width:25px; position: absolute;\">\r\n    </div> -->\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "yN90":
/*!*********************************************************!*\
  !*** ./src/app/squad-list/squad-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SquadListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadListPageRoutingModule", function() { return SquadListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _squad_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./squad-list.page */ "yw0I");




const routes = [
    {
        path: '',
        component: _squad_list_page__WEBPACK_IMPORTED_MODULE_3__["SquadListPage"]
    }
];
let SquadListPageRoutingModule = class SquadListPageRoutingModule {
};
SquadListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SquadListPageRoutingModule);



/***/ }),

/***/ "yw0I":
/*!***********************************************!*\
  !*** ./src/app/squad-list/squad-list.page.ts ***!
  \***********************************************/
/*! exports provided: SquadListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadListPage", function() { return SquadListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_squad_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./squad-list.page.html */ "qc2x");
/* harmony import */ var _squad_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squad-list.page.scss */ "LhbW");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






let SquadListPage = class SquadListPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.userDetails = [];
        this.mysquads = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
            if (this.userDetails.userid != '') {
                let params = {
                    id: this.userDetails.userid
                };
                console.log('params:', params);
                this.common.presentLoading();
                this.common.postMethod('Listbesties', params).then((res) => {
                    console.log('res:', res);
                    this.mysquads = res.details.squad;
                    console.log('mysquads', this.mysquads);
                    if (this.mysquads.length == 0) {
                        this.common.presentToast('You are having no `Squads` to show');
                    }
                    else {
                        this.common.presentToast('You are having ' + res.details.squad.length + ' squad list members to show');
                    }
                }, err => {
                    console.log('Error:', err);
                });
            }
            else {
                this.common.presentToast('Something Went Wrong !!!');
            }
        });
    }
    ngOnInit() {
    }
    ToUserSearch() {
        this.common.router.navigate(['/squad-search']);
    }
};
SquadListPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
SquadListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-squad-list',
        template: _raw_loader_squad_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_squad_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SquadListPage);



/***/ })

}]);
//# sourceMappingURL=squad-list-squad-list-module-es2015.js.map