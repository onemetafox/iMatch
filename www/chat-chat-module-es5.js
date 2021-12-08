(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
    /***/
    "2yxt":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.module.ts ***!
      \*************************************/

    /*! exports provided: ChatPageModule */

    /***/
    function yxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
        return ChatPageModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-routing.module */
      "cC0O");
      /* harmony import */


      var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.page */
      "laW7");

      var ChatPageModule = function ChatPageModule() {
        _classCallCheck(this, ChatPageModule);
      };

      ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
      })], ChatPageModule);
      /***/
    },

    /***/
    "SyIY":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function SyIY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-profile-pic {\n  height: 47px;\n  width: 47px;\n  border-radius: 50%;\n  border: 1px solid white;\n  position: absolute;\n  right: 30px;\n  bottom: 3px;\n  background-color: white;\n}\n\n.top-green-light-icon {\n  position: absolute;\n  right: 29px;\n  bottom: 35px;\n  font-size: 12px;\n  color: #39b509;\n}\n\n.top-container {\n  height: 53px;\n  text-align: center;\n  background-color: #48474d;\n  padding-top: 15px;\n}\n\n.edit-icon-img {\n  height: 20px;\n  width: 21px;\n  position: relative;\n  left: 118px;\n}\n\n.container-search-icon-img {\n  width: 65px;\n  height: 58px;\n  background-color: #333333;\n  margin-top: -19px;\n  padding-top: 15px;\n  position: relative;\n  left: 58px;\n}\n\n.top-heading-text {\n  font-size: 15px;\n  color: white;\n  position: relative;\n  left: 125px;\n  bottom: 2px;\n}\n\n.search-icon-img {\n  height: 27px;\n  width: 27px;\n}\n\n.img-thumnail-side-border {\n  width: 115px;\n  height: 92px;\n}\n\n.profile-img-label {\n  margin-left: 17px;\n  font-size: 15px;\n  font-weight: 700;\n  position: relative;\n  bottom: 20px;\n}\n\n.text-under-label {\n  position: absolute;\n  bottom: 10px;\n  left: 132px;\n  font-size: 12px;\n  color: #737375;\n}\n\n.label-green-icon {\n  color: #39b509;\n  font-size: 11px;\n  position: relative;\n  bottom: 20px;\n}\n\n.now-text {\n  position: relative;\n  bottom: 25px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFRSjs7QUFOQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBV0o7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBV0oiLCJmaWxlIjoiY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXByb2ZpbGUtcGlje1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgd2lkdGg6IDQ3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udG9wLWdyZWVuLWxpZ2h0LWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjlweDtcclxuICAgIGJvdHRvbTogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMzliNTA5O1xyXG59XHJcbi50b3AtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDc0ZDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5lZGl0LWljb24taW1ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMThweDtcclxufVxyXG4uY29udGFpbmVyLXNlYXJjaC1pY29uLWltZ3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIG1hcmdpbi10b3A6IC0xOXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1OHB4O1xyXG59XHJcbi50b3AtaGVhZGluZy10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTI1cHg7XHJcbiAgICBib3R0b206IDJweDtcclxufVxyXG4uc2VhcmNoLWljb24taW1ne1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbn1cclxuLmltZy10aHVtbmFpbC1zaWRlLWJvcmRlcntcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogOTJweDtcclxufVxyXG4ucHJvZmlsZS1pbWctbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuLnRleHQtdW5kZXItbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAxMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzM3Mzc1O1xyXG59XHJcbi5sYWJlbC1ncmVlbi1pY29ue1xyXG4gICAgY29sb3I6ICMzOWI1MDk7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICAvLyByaWdodDogNTVweDtcclxufVxyXG4ubm93LXRleHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "cC0O":
    /*!*********************************************!*\
      !*** ./src/app/chat/chat-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: ChatPageRoutingModule */

    /***/
    function cC0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
        return ChatPageRoutingModule;
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


      var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.page */
      "laW7");

      var routes = [{
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
      }];

      var ChatPageRoutingModule = function ChatPageRoutingModule() {
        _classCallCheck(this, ChatPageRoutingModule);
      };

      ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPageRoutingModule);
      /***/
    },

    /***/
    "laW7":
    /*!***********************************!*\
      !*** ./src/app/chat/chat.page.ts ***!
      \***********************************/

    /*! exports provided: ChatPage */

    /***/
    function laW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
        return ChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat.page.html */
      "n54z");
      /* harmony import */


      var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat.page.scss */
      "SyIY");
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

      var ChatPage = /*#__PURE__*/function () {
        function ChatPage(storageservice, common) {
          var _this = this;

          _classCallCheck(this, ChatPage);

          this.storageservice = storageservice;
          this.common = common;
          this.ChatEndColors = [{
            first: '#F11A06'
          }, {
            second: '#FCBB39'
          }, {
            third: '#6E6E70'
          }];
          this.chatList = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(ChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "gotoProfile",
          value: function gotoProfile() {
            this.common.navCtrl.navigateForward(['tabs/tab7'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "openMessage",
          value: function openMessage(event, chat, i) {
            chat.OpponentId = this.userDetails.userid;
            this.common.router.navigate(['/chat-message'], {
              queryParams: chat
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  userid: _this2.userDetails.userid
                };

                _this2.common.postMethod('GetChat', params).then(function (res) {
                  _this2.chatList = res.details; // var chatA = new Date(this.chatList[0].send_at);
                  // var chatB = new Date(this.chatList[5].send_at);
                  // this.chatList = this.chatList.sort((chatA, chatB) => {
                  //   return chatB.send_at - chatA.send_at;
                  // });
                });
              } else {}
            });
          }
        }, {
          key: "gotoNewMessage",
          value: function gotoNewMessage() {
            this.common.router.navigate(['/search-chat-user']);
          }
        }]);

        return ChatPage;
      }();

      ChatPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChatPage);
      /***/
    },

    /***/
    "n54z":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function n54z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar style=\"--background: #707072;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"ios\" style=\"color: white; font-size: 15px;\">\r\n    <!-- <span class=\"top-number\">4</span> -->\r\n      CHAT\r\n\r\n      <img *ngIf=\"userDetails\" [src]=\"userDetails.profile_pic\" alt=\"\" class=\"top-profile-pic\" (click)=\"gotoProfile()\">\r\n\r\n      <ion-icon name=\"ellipse\" class=\"top-green-light-icon\"></ion-icon>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n\r\n    <div class=\"top-container\">\r\n\r\n      <ion-row>\r\n\r\n        <div>\r\n          <ion-col (click)=\"gotoNewMessage()\">\r\n            <img src=\"../../assets/icon/chat/edit.png\" alt=\"\" class=\"edit-icon-img\">\r\n          </ion-col>\r\n  \r\n          <ion-col (click)=\"gotoNewMessage()\">\r\n            <strong class=\"top-heading-text\">NEW MESSAGE</strong>\r\n          </ion-col>\r\n        </div>\r\n\r\n\r\n        <!-- <ion-col>\r\n          <div class=\"container-search-icon-img\">\r\n            <img src=\"../../assets/icon/chat/search.png\" alt=\"\" class=\"search-icon-img\">\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n      \r\n    </div>\r\n\r\n    <!-- Show Empty Chat List -->\r\n\r\n    <div *ngIf=\"chatList?.length==0\" style=\"text-align: center;\">\r\n\r\n      <div style=\"border-radius: 50%;text-align: center;padding: 40px;height: 300px;width: 300px;background-color: #70707259;margin-top: 40px;display: inline-block;\">\r\n        <img src=\"../../assets/icon/chat/chat.png\" alt=\"\" style=\"height: 230px;width: 230px;\">\r\n      </div>\r\n\r\n      <h4 style=\"font-weight: 600;margin-top: 35px;\">No Chats Available !!!</h4>\r\n\r\n      <p class=\"animate__animated animate__fadeOut animate__delay-3s\">\r\n         <strong>Click -> New Message</strong> , then add a \r\n         <strong>iMatch user</strong> to your <strong>chat list</strong> ...</p>\r\n\r\n    </div>\r\n\r\n        <!-- Show Empty Chat List Ends -->\r\n\r\n        <!-- <div *ngIf=\"chatList?.length!=0\"> -->\r\n          <ion-item (click)=\"openMessage($event,chat,i)\" lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\" *ngFor=\"let chat of chatList, let i = index , let color of ChatEndColors\" class=\"animate__animated animate__fadeIn\">\r\n            <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #f21908;\">\r\n              <img [src]=\"chat.profile_pic\" alt=\"\" style=\"height: 92px; width: 100%;\" onerror=\"this.src='../../assets/icon/profile/user.png';\">\r\n            </ion-thumbnail>\r\n            <ion-label class=\"profile-img-label\"> {{chat.name}}</ion-label> \r\n            <!-- <span> {{chat.last_seen | date}} </span> -->\r\n            <ion-icon *ngIf=\"chat.online_offline_status === 'online'\" name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n            <ion-icon *ngIf=\"chat.online_offline_status !== 'online'\" name=\"ellipse\" style=\"font-size: 11px; position: relative; bottom: 20px;\"></ion-icon>\r\n            <p *ngIf=\"chat?.last_message!==null\" class=\"text-under-label\"> {{chat.last_message}} </p>\r\n            <p *ngIf=\"chat?.last_message===null && chat.filetype==='photo'\" class=\"text-under-label\"> {{chat.filetype}} </p>\r\n            <p *ngIf=\"chat?.last_message===null && chat.filetype==='video'\" class=\"text-under-label\"> {{chat.last_message}} </p>\r\n            <p *ngIf=\"chat.online_offline_status === 'online'\" slot=\"end\" class=\"now-text\">Now</p>\r\n          </ion-item>\r\n        <!-- </div> -->\r\n\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\">\r\n      <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #fcbb3b\">\r\n        <img src=\"../../assets/icon/chat/2.jpg\" alt=\"\" style=\"height: 92px; width: 100%;\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"profile-img-label\">Dominika Faniz</ion-label>\r\n      <ion-icon name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n      <p class=\"text-under-label\">Hi jakub,how is it going?....</p>\r\n      <p slot=\"end\" class=\"now-text\">Now</p>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\">\r\n      <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #707072\">\r\n        <img src=\"../../assets/icon/chat/3.jpg\" alt=\"\" style=\"height: 92px; width: 100%;\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"profile-img-label\">Dominika Faniz</ion-label>\r\n      <ion-icon name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n      <p class=\"text-under-label\">Hi jakub,how is it going?....</p>\r\n      <p slot=\"end\" class=\"now-text\">Now</p>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\">\r\n      <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #f21908;\">\r\n        <img src=\"../../assets/icon/chat/4.jpg\" alt=\"\" style=\"height: 92px; width: 100%;\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"profile-img-label\">Dominika Faniz</ion-label>\r\n      <ion-icon name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n      <p class=\"text-under-label\">Hi jakub,how is it going?....</p>\r\n      <p slot=\"end\" class=\"now-text\">Now</p>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\">\r\n      <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #fcbb3b\">\r\n        <img src=\"../../assets/icon/chat/5.jpg\" alt=\"\" style=\"height: 92px; width: 100%;\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"profile-img-label\">Dominika Faniz</ion-label>\r\n      <ion-icon name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n      <p class=\"text-under-label\">Hi jakub,how is it going?....</p>\r\n      <p slot=\"end\" class=\"now-text\">Now</p>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"--padding-start:0px;border-bottom: 1px solid #80808033;\">\r\n      <ion-thumbnail class=\"img-thumnail-side-border\" style=\"border-right: 14px solid #707072\">\r\n        <img src=\"../../assets/icon/chat/6.jpg\" alt=\"\" style=\"height: 92px; width: 100%;\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"profile-img-label\">Dominika Faniz</ion-label>\r\n      <ion-icon name=\"ellipse\" class=\"label-green-icon\"></ion-icon>\r\n      <p class=\"text-under-label\">Hi jakub,how is it going?....</p>\r\n      <p slot=\"end\" class=\"now-text\">Now</p>\r\n    </ion-item> -->\r\n\r\n  </ion-content>\r\n  ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-chat-module-es5.js.map