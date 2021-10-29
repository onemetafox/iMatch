(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["besties-actions-besties-actions-module"], {
    /***/
    "2Ysd":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/besties-actions/besties-actions.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ysd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 25px;\">BESTIES ACTIONS</ion-title>\r\n\r\n    <div class=\"tabone_header_right\">\r\n      <div style=\"margin-left: 10px;\">\r\n        <img *ngIf=\"userDetails\" [src]=\"userDetails.profile_pic\" alt=\"\" style=\"height: 46px;width: 46px;border-radius: 50%;border: 1px solid white;position: relative;bottom: 9px;\">\r\n      </div>\r\n      <div style=\"margin-left: 3px;font-size: 16px;color: #ffffff;position: relative;bottom: 8px;\">\r\n        <ion-icon name=\"caret-down-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"squadList_background\">\r\n    <!-- FIRST BOX DIV SECTION  -->\r\n    <!-- <div class=\"box_div_session\">\r\n      <div style=\"background-color: #707072; width: 30%; padding-bottom: 0; text-align: center; color: #ffffff;\">\r\n        \r\n        <div style=\"margin-right: 3px; position: relative;\">\r\n          <div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 45px;\">\r\n                <img src=\"../../assets/icon/activity/train1.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 45px;\">\r\n                <img src=\"../../assets/icon/activity/train2.jpg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 45px;\">\r\n                <img src=\"../../assets/icon/activity/train3.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 45px;\">\r\n                <img src=\"../../assets/icon/activity/train4.jpg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"position: absolute; top: 30%; left: 42%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 18px; height: 18px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 22%; left: 40%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 5px; height: 5px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 22%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 5px; height: 5px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 58%; left: 40%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 5px; height: 5px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 58%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 5px; height: 5px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/tab1-profile.png\" alt=\"\" style=\"height:20px; width: 20px\">\r\n            <p>Linnie Craig</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"right_content\">\r\n        <p style=\"line-height: 20px; font-size: 13px; color: #ffffff;\">My bestie Linne Craig launched an open match</p> -->\r\n        <!-- color=\"success\" -->\r\n        <!-- <ion-icon name=\"create-outline\"  style=\"height: 15px; right: 0; top: 0; width:25px; color: white; position: absolute;\"></ion-icon> -->\r\n        <!-- <p class=\"right_content_time\">20 hours ago</p>\r\n      </div>\r\n      \r\n    </div> -->\r\n\r\n    <div class=\"box_div_session , animate__animated animate__fadeIn\" style=\"margin-top: 20px;\" *ngFor=\"let actions of BestiesAction\">\r\n      <div style=\"background-color: #707072; width: 30%; padding-bottom: 0; text-align: center; color: #ffffff;\">\r\n        \r\n        <div style=\"margin-right: 3px; position: relative;\">\r\n          <div style=\"margin-left: 3px; position: relative;\">\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div-object\">\r\n                <img [src]=\"actions.receiver_image\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div-object\">\r\n                <img [src]=\"actions.sender_image\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div style=\"position: absolute; top: 35%; left: 44%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 18px; height: 18px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 80%; left: 43%;\">\r\n              <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 7px; height: 7px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 80%; left: 90%;\">\r\n              <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 7px; height: 7px;\">\r\n            </div>\r\n  \r\n          </div>\r\n          <div class=\"box_m\">\r\n            <img [src]=\"actions.userprofile\" alt=\"\" style=\"height:20px; width: 20px;border-radius: 50%;\">\r\n            <p>{{actions.username}}</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"right_content\">\r\n        <p style=\"line-height: 20px; font-size: 13px; color: #ffffff;\">My bestie {{actions.username}} launched an open match</p>\r\n        <!-- color=\"success\" -->\r\n        <!-- <ion-icon name=\"create-outline\"  style=\"height: 15px; right: 0; top: 0; width:25px; color: white; position: absolute;\"></ion-icon> -->\r\n        <p class=\"right_content_time\">{{actions.time | date:'HH'}} hours ago</p>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    <!-- <div class=\"box_div_session\" style=\"margin-top: 20px;\">\r\n      <div style=\"background-color: #707072; width: 30%; padding-bottom: 0; text-align: center; color: #ffffff;\">\r\n        \r\n        <div style=\"margin-right: 3px; position: relative;\">\r\n          <div style=\"margin-left: 3px; position: relative;\">\r\n            <div class=\"contest-image-div\" style=\"padding: 15px 0; border-radius: 5px; background: #c7c1c4;\">\r\n              <div class=\"image-div\" style=\"height: 50px;\">\r\n                <img src=\"../../assets/icon/activity/avengers.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div\" style=\"height: 50px;\">\r\n                <img src=\"../../assets/icon/activity/hulk.jpg\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div\" style=\"height: 50px;\">\r\n                <img src=\"../../assets/icon/activity/aven.jpg\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div style=\"position: absolute; top: 40%; left: 24%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 15px; height: 15px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 40%; left: 60%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 15px; height: 15px;\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/tab1-profile.png\" alt=\"\" style=\"height:20px; width: 20px\">\r\n            <p>Isa</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"right_content\">\r\n        <p style=\"line-height: 20px; font-size: 13px; color: #ffffff;\">My bestie Isa launched an open match</p> -->\r\n        <!-- color=\"success\" -->\r\n        <!-- <ion-icon name=\"create-outline\"  style=\"height: 15px; right: 0; top: 0; width:25px; color: white; position: absolute;\"></ion-icon> -->\r\n        <!-- <p class=\"right_content_time\">20 hours ago</p>\r\n      </div>\r\n      \r\n    </div> -->\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "Eln2":
    /*!***********************************************************!*\
      !*** ./src/app/besties-actions/besties-actions.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function Eln2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #919292;\n  position: relative;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  position: absolute;\n  right: -10px;\n  top: 14px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.chat_top-header {\n  padding: 1px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n}\n.chat_top-header h3 {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n.chat_top-header p {\n  font-size: 14px;\n  margin-right: 7px;\n  background: #ffffff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  color: #707072;\n}\n/* PAGE CONTENT */\n/* FIRST BOX DIV SESSION */\n.box_div_session {\n  display: flex;\n  background-color: #707072;\n  padding: 5px;\n  position: relative;\n  box-shadow: -0.5px 0.5px 2px 0px;\n}\n/* SECOND BOX DIV SESSION */\n.second_box {\n  margin-top: 7px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n}\n.squadList_background {\n  background-color: #d8e0e0;\n  padding: 10px;\n  /* background-position: center; */\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div_first {\n  height: 75px;\n  max-width: 50%;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.box_m {\n  display: flex;\n  align-items: center;\n  padding-top: 3px;\n}\n.box_m img {\n  height: 15px;\n}\n.box_m p {\n  margin-left: 4px;\n  font-size: 10px;\n  line-height: 0px;\n  font-weight: 600;\n}\n/* SECOND IMAGE DIV SESSION */\n.image-div-object {\n  height: 90px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\n.right_content {\n  padding-left: 6px;\n  width: 70%;\n  background: #898a8a;\n  margin-left: 5px;\n  position: relative;\n  padding-right: 20px;\n}\n.right_content_time {\n  font-size: 8px;\n  color: #ffffff;\n  right: 5px;\n  bottom: 0;\n  position: absolute;\n  line-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3RpZXMtYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBREo7QUFHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQUo7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFBQSxpQkFBQTtBQUNBLDBCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUdKO0FBQUEsMkJBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUdKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREE7RUFDSSxhQUFBO0FBSUo7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQU1KO0FBSkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVNKO0FBUEE7RUFDSSxZQUFBO0FBVUo7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXSjtBQVRBLDZCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVlKO0FBVkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFhSjtBQVhBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQVpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFlSiIsImZpbGUiOiJiZXN0aWVzLWFjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUEFHRSBIRUFERVIgKi9cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzkxOTI5MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGFib25lX2hlYWRlcl9sZWZ0IHtcclxuICAgIFxyXG59XHJcbi50YWJvbmVfaGVhZGVyX3JpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2hhdF90b3AtaGVhZGVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG4uY2hhdF90b3AtaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjNzA3MDcyO1xyXG59XHJcblxyXG4vKiBQQUdFIENPTlRFTlQgKi9cclxuLyogRklSU1QgQk9YIERJViBTRVNTSU9OICovXHJcbi5ib3hfZGl2X3Nlc3Npb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAtMC41cHggMC41cHggMnB4IDBweDtcclxufVxyXG5cclxuLyogU0VDT05EIEJPWCBESVYgU0VTU0lPTiAqL1xyXG4uc2Vjb25kX2JveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNxdWFkTGlzdF9iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGUwZTA7IFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRlc3QtaW1hZ2UtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltYWdlLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMlO1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3Qge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLmltYWdlLWRpdl9maXJzdCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlLWRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJveF9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG4uYm94X20gaW1nIHtcclxuICAgIGhlaWdodDogMTVweDtcclxufVxyXG4uYm94X20gcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLyogU0VDT05EIElNQUdFIERJViBTRVNTSU9OICovXHJcbi5pbWFnZS1kaXYtb2JqZWN0IHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5pbWFnZS1kaXYtb2JqZWN0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnJpZ2h0X2NvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZDogIzg5OGE4YTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5yaWdodF9jb250ZW50X3RpbWUge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "Koxe":
    /*!*********************************************************!*\
      !*** ./src/app/besties-actions/besties-actions.page.ts ***!
      \*********************************************************/

    /*! exports provided: BestiesActionsPage */

    /***/
    function Koxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesActionsPage", function () {
        return BestiesActionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_besties_actions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./besties-actions.page.html */
      "2Ysd");
      /* harmony import */


      var _besties_actions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./besties-actions.page.scss */
      "Eln2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");

      var BestiesActionsPage = /*#__PURE__*/function () {
        function BestiesActionsPage(common, storageservice) {
          var _this = this;

          _classCallCheck(this, BestiesActionsPage);

          this.common = common;
          this.storageservice = storageservice;
          this.userDetails = [];
          this.BestiesAction = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
        }

        _createClass(BestiesActionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered into Besties Action Page');
            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  userid: _this2.userDetails.userid
                };
                console.log('params:', params);

                _this2.common.postMethod('BestieAction', params).then(function (res) {
                  console.log('res:', res);
                  _this2.BestiesAction = res.details;
                });
              }
            });
          }
        }]);

        return BestiesActionsPage;
      }();

      BestiesActionsPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      BestiesActionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-besties-actions',
        template: _raw_loader_besties_actions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_besties_actions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BestiesActionsPage);
      /***/
    },

    /***/
    "SIBz":
    /*!*******************************************************************!*\
      !*** ./src/app/besties-actions/besties-actions-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BestiesActionsPageRoutingModule */

    /***/
    function SIBz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesActionsPageRoutingModule", function () {
        return BestiesActionsPageRoutingModule;
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


      var _besties_actions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./besties-actions.page */
      "Koxe");

      var routes = [{
        path: '',
        component: _besties_actions_page__WEBPACK_IMPORTED_MODULE_3__["BestiesActionsPage"]
      }];

      var BestiesActionsPageRoutingModule = function BestiesActionsPageRoutingModule() {
        _classCallCheck(this, BestiesActionsPageRoutingModule);
      };

      BestiesActionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BestiesActionsPageRoutingModule);
      /***/
    },

    /***/
    "a1uF":
    /*!***********************************************************!*\
      !*** ./src/app/besties-actions/besties-actions.module.ts ***!
      \***********************************************************/

    /*! exports provided: BestiesActionsPageModule */

    /***/
    function a1uF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesActionsPageModule", function () {
        return BestiesActionsPageModule;
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


      var _besties_actions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./besties-actions-routing.module */
      "SIBz");
      /* harmony import */


      var _besties_actions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./besties-actions.page */
      "Koxe");

      var BestiesActionsPageModule = function BestiesActionsPageModule() {
        _classCallCheck(this, BestiesActionsPageModule);
      };

      BestiesActionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _besties_actions_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestiesActionsPageRoutingModule"]],
        declarations: [_besties_actions_page__WEBPACK_IMPORTED_MODULE_6__["BestiesActionsPage"]]
      })], BestiesActionsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=besties-actions-besties-actions-module-es5.js.map