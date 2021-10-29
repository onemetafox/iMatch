(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-message-chat-message-module"], {
    /***/
    "4nb4":
    /*!*****************************************************!*\
      !*** ./src/app/chat-message/chat-message.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChatMessagePageModule */

    /***/
    function nb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMessagePageModule", function () {
        return ChatMessagePageModule;
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


      var _chat_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-message-routing.module */
      "UiuJ");
      /* harmony import */


      var _chat_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-message.page */
      "5evj");

      var ChatMessagePageModule = function ChatMessagePageModule() {
        _classCallCheck(this, ChatMessagePageModule);
      };

      ChatMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _chat_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatMessagePageRoutingModule"]],
        declarations: [_chat_message_page__WEBPACK_IMPORTED_MODULE_6__["ChatMessagePage"]]
      })], ChatMessagePageModule);
      /***/
    },

    /***/
    "5evj":
    /*!***************************************************!*\
      !*** ./src/app/chat-message/chat-message.page.ts ***!
      \***************************************************/

    /*! exports provided: ChatMessagePage */

    /***/
    function evj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMessagePage", function () {
        return ChatMessagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat-message.page.html */
      "lxhO");
      /* harmony import */


      var _chat_message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat-message.page.scss */
      "QcEV");
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
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "iWj2");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "uRF+");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "iQv9");
      /* harmony import */


      var _services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/config */
      "82od"); // import { content } from '@angular/compiler/src/render3/r3_ast';


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem;

      var ChatMessagePage = /*#__PURE__*/function () {
        function ChatMessagePage(storageservice, common, formbuilder, mediaCapture, filePath, fileChooser, transfer, photoView) {
          var _this = this;

          _classCallCheck(this, ChatMessagePage);

          this.storageservice = storageservice;
          this.common = common;
          this.formbuilder = formbuilder;
          this.mediaCapture = mediaCapture;
          this.filePath = filePath;
          this.fileChooser = fileChooser;
          this.transfer = transfer;
          this.photoView = photoView;
          this.FormSubmit = false;
          this.userDetails = [];
          this.ChattedUser = [];
          this.showPlusView = false;
          this.userMessage = {
            "message": ""
          };
          this.isTyping = false;
          this.MessageForm = formbuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)])]
          });
          this.message = this.MessageForm.controls['message'];
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.chatDetails = resp;
            console.log('chatDetails:', _this.chatDetails);
          }); // this.interval = setInterval(() => {
          //   this.ionViewWillEnter();
          // },1000);

          setTimeout(function () {
            _this.content.scrollToBottom(1500);
          }, 100);
        }

        _createClass(ChatMessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('Entered into Chat Message Page');
            var params = {
              loggeduserid: this.chatDetails.OpponentId,
              chatuserid: this.chatDetails.userid
            };
            console.log('params:', params);
            this.common.postMethod('GetDetailChat', params).then(function (res) {
              console.log('res:', res);
              _this2.chatMessage = res.details;

              if (res.details > res.details[5]) {
                _this2.content.scrollToBottom(1500);
              } else {
                _this2.content.scrollToTop(1500);
              }
            });
            this.ChattedUsers();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearInterval(this.interval);
            console.log('Chat Message Page Leaved');
          }
        }, {
          key: "ChattedUsers",
          value: function ChattedUsers() {
            var _this3 = this;

            var params = {
              userid: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.postMethod('GetChat', params).then(function (res) {
              console.log('res:', res);
              _this3.ChattedUser = res.details;
            });
          }
        }, {
          key: "toViewNextChat",
          value: function toViewNextChat(event, ChattedUser) {
            console.log('Next User Clicked');
            console.log('ChattedUser:', ChattedUser);

            if (ChattedUser != undefined) {
              this.common.navCtrl.navigateForward(['chat-message'], {
                queryParams: ChattedUser
              });
            } else {
              this.common.presentToast('🛑 Sorry the user is empty !');
            }
          }
        }, {
          key: "gotoSettings",
          value: function gotoSettings() {
            this.common.router.navigate(['settings']);
          }
        }, {
          key: "onChange",
          value: function onChange(e) {
            console.log('onChange:', e); // if (e.key=='Backspace') {
            //   this.isTyping = false;
            // } else {
            //   this.isTyping = true;
            // }
          }
        }, {
          key: "chatSubmit",
          value: function chatSubmit() {
            var _this4 = this;

            console.log('Chat Submit Button Clicked');
            this.FormSubmit = true;
            var params = {
              userid_from: this.userDetails.userid,
              userid_to: this.chatDetails.userid,
              message: this.userMessage.message
            };
            console.log('params', params);
            this.common.postMethod('Chat', params).then(function (res) {
              console.log('res:', res);

              if (res.status == true) {
                setTimeout(function () {
                  _this4.content.scrollToBottom(1500);
                }, 100);

                _this4.MessageForm.reset();
              } else {//////////////////////////
              }
            });
          }
        }, {
          key: "ClickedOnImage",
          value: function ClickedOnImage(e, message, i) {
            console.log('Image:', message, message.filename, i, this.chatDetails.name);
            this.photoView.show(message.filename, this.chatDetails.name, {
              share: false
            });
          }
        }, {
          key: "showEnlargedView",
          value: function showEnlargedView() {
            this.showPlusView = !this.showPlusView;
            console.log('showPlusView:', this.showPlusView);
          }
        }, {
          key: "toShareFile",
          value: function toShareFile() {
            console.log('toShareFile clicked');
          }
        }, {
          key: "toShareAttachment",
          value: function toShareAttachment() {
            var _this5 = this;

            console.log('toShareAttachment clicked');
            var file;
            this.fileChooser.open().then(function (uri) {
              console.log('uri:', uri);

              _this5.filePath.resolveNativePath(uri).then(function (filePath) {
                console.log('filePath:', filePath);
                var fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
                var currentName = uri.substring(uri.lastIndexOf('/') + 1, uri.lastIndexOf('?'));
                console.log('currentName:', currentName);
                console.log('fileNameFromPath:', fileNameFromPath);
                file = {
                  name: fileNameFromPath,
                  fullPath: filePath
                };

                _this5.uploadFile(file, 'file');
              })["catch"](function (err) {
                return console.log(err);
              });
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        }, {
          key: "toShareImage",
          value: function toShareImage() {
            var _this6 = this;

            console.log('toShareImage clicked');
            var options = {
              limit: 1
            };
            this.mediaCapture.captureImage(options).then(function (data) {
              console.log('data[0]:', data[0]);

              _this6.uploadFile(data[0], 'image');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "toShareAudio",
          value: function toShareAudio() {
            var _this7 = this;

            console.log('toShareAudio clicked');
            var options = {
              limit: 1
            };
            this.mediaCapture.captureAudio(options).then(function (data) {
              console.log('data[0]:', data[0]);

              _this7.uploadFile(data[0], 'audio');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "toShareContact",
          value: function toShareContact() {
            console.log('toShareContact clicked');
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file, type) {
            var options;
            options = {
              fileKey: 'userfile',
              fileName: file.name,
              httpMethod: 'POST',
              mimeType: 'multipart/form-data',
              chunkedMode: false,
              params: {
                userid_from: this.userDetails.userid,
                userid_to: this.chatDetails.userid
              },
              headers: {
                Connection: 'close'
              }
            };
            console.log('options:', options);
            var filePath;

            if (type !== 'audio') {
              filePath = encodeURI(file.fullPath);
            } else {
              filePath = file.fullPath;
            }

            var fileTransfer = this.transfer.create();
            var fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/UploadChatFile';
            fileTransfer.onProgress(function (e) {
              var prg = e.lengthComputable ? Math.round(e.loaded / e.total * 100) : -1;
              console.log("progress:" + prg + '%');

              if (prg === 100) {
                console.log('Upload completed');
              } else {
                console.log('file is uploading');
              }
            });
            fileTransfer.upload(filePath, fileUplaodUrl, options).then(function (data) {
              console.log('File Transfer Success:', data); // this.FileTransferResponse = data;
            }, function (err) {
              console.log('File Transfer Error:', err);
            });
          }
        }]);

        return ChatMessagePage;
      }();

      ChatMessagePage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__["MediaCapture"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__["PhotoViewer"]
        }];
      };

      ChatMessagePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"]]
        }],
        FormSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      };
      ChatMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-message',
        template: _raw_loader_chat_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChatMessagePage);
      /***/
    },

    /***/
    "82od":
    /*!************************************!*\
      !*** ./src/app/services/config.ts ***!
      \************************************/

    /*! exports provided: baseUrl */

    /***/
    function od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
        return baseUrl;
      });

      var baseUrl = "http://192.168.107.183/";
      /***/
    },

    /***/
    "QcEV":
    /*!*****************************************************!*\
      !*** ./src/app/chat-message/chat-message.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function QcEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.chat_top-header {\n  padding: 1px;\n  color: #ffffff;\n  text-align: center;\n}\n.chat_top-header h3 {\n  font-size: 20px;\n}\n.chat_top-header p {\n  font-size: 10px;\n  margin-top: -5px;\n}\n.chat-image-centre {\n  height: 75px;\n  width: 70px;\n  margin-bottom: -20px;\n  margin-left: 5px;\n  margin-right: 5px;\n  border-radius: 5px;\n  background-color: white;\n}\n.chat-img-circle {\n  height: 55px;\n  width: 55px;\n  position: relative;\n  bottom: 5px;\n  padding: 1px;\n  margin-left: 5px;\n  margin-right: 5px;\n  border-radius: 50%;\n  opacity: 0.5;\n  background-color: white;\n}\n.chat-image-profile {\n  height: 50px;\n  width: 50px;\n}\n.chat-image-profile img {\n  height: 100%;\n  width: 100%;\n}\n/* ODD CHAT MESSAGE */\n.chat-div-head {\n  width: 85%;\n}\n.chat-div {\n  margin-left: 18px;\n  padding: 5px 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 7px -3px;\n}\n.chat-div p {\n  font-size: 11px;\n  line-height: 17px;\n}\n.chat-time {\n  position: absolute;\n  right: 5px;\n  bottom: -32px;\n  font-size: 11px;\n}\n/* EVEN CHAT MESSAGE */\n.second-chat-div {\n  padding: 5px 10px;\n  background: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 1px 7px -3px;\n}\n.second-chat-image-profile {\n  height: 50px;\n  width: 50px;\n  margin-left: 18px;\n}\n.second-chat-image-profile img {\n  height: 100%;\n  width: 100%;\n}\n.second-chat-div P {\n  font-size: 11px;\n  line-height: 17px;\n}\n.second-chat-time {\n  position: absolute;\n  bottom: -32px;\n  font-size: 11px;\n}\n/* SEARCH SECTION */\n.searchbar_div {\n  width: 90%;\n}\n.text-field-icons {\n  height: 35px;\n  width: 35px;\n  position: relative;\n  left: 3px;\n  top: 2px;\n  margin-right: 10px;\n}\n.type_inputfield {\n  border-radius: 30px;\n  box-shadow: 0px 1px 7px -3px;\n}\n.ion-input-message {\n  font-size: 14px;\n}\n.item-native {\n  background: red;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQtbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFJSjtBQUZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTUo7QUFKQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBT0o7QUFKQSxxQkFBQTtBQUNBO0VBQ0ksVUFBQTtBQU9KO0FBTEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBUUo7QUFOQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVVKO0FBUEEsc0JBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBVUo7QUFSQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFXSjtBQVRBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFZSjtBQVZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBYUo7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFjSjtBQVpBLG1CQUFBO0FBQ0E7RUFDSSxVQUFBO0FBZUo7QUFiQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBZ0JKO0FBZEE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FBaUJKO0FBZkE7RUFDSSxlQUFBO0FBa0JKO0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFtQkoiLCJmaWxlIjoiY2hhdC1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbi50YWJvbmVfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLy8gLnRhYm9uZV9oZWFkZXJfbGVmdCB7XHJcbiAgICBcclxuLy8gfVxyXG4udGFib25lX2hlYWRlcl9yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcbi5jaGF0X3RvcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNoYXRfdG9wLWhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLmNoYXQtaW1hZ2UtY2VudHJlIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hhdC1pbWctY2lyY2xlIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hhdC1pbWFnZS1wcm9maWxlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5jaGF0LWltYWdlLXByb2ZpbGUgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBPREQgQ0hBVCBNRVNTQUdFICovXHJcbi5jaGF0LWRpdi1oZWFkIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuLmNoYXQtZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggLTNweDtcclxufVxyXG4uY2hhdC1kaXYgcCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG4uY2hhdC10aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3R0b206IC0zMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4vKiBFVkVOIENIQVQgTUVTU0FHRSAqL1xyXG4uc2Vjb25kLWNoYXQtZGl2IHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IC0zcHg7XHJcbn1cclxuLnNlY29uZC1jaGF0LWltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG4uc2Vjb25kLWNoYXQtaW1hZ2UtcHJvZmlsZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlY29uZC1jaGF0LWRpdiBQIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG59XHJcbi5zZWNvbmQtY2hhdC10aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLyogU0VBUkNIIFNFQ1RJT04gKi9cclxuLnNlYXJjaGJhcl9kaXYge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4udGV4dC1maWVsZC1pY29uc3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnR5cGVfaW5wdXRmaWVsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggLTNweDtcclxufVxyXG4uaW9uLWlucHV0LW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "UiuJ":
    /*!*************************************************************!*\
      !*** ./src/app/chat-message/chat-message-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ChatMessagePageRoutingModule */

    /***/
    function UiuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMessagePageRoutingModule", function () {
        return ChatMessagePageRoutingModule;
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


      var _chat_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-message.page */
      "5evj");

      var routes = [{
        path: '',
        component: _chat_message_page__WEBPACK_IMPORTED_MODULE_3__["ChatMessagePage"]
      }];

      var ChatMessagePageRoutingModule = function ChatMessagePageRoutingModule() {
        _classCallCheck(this, ChatMessagePageRoutingModule);
      };

      ChatMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatMessagePageRoutingModule);
      /***/
    },

    /***/
    "lxhO":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-message/chat-message.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function lxhO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <div class=\"tabone_header\">\r\n    <div class=\"chat_top-header\">\r\n      <h3 *ngIf=\"chatDetails\"> {{chatDetails.name}} </h3>\r\n      <p> Last seen {{chatDetails.last_seen | date}} </p>\r\n      <div style=\"display: flex; justify-content: center; margin-top: 20px;\">\r\n        <img *ngIf=\"ChattedUser\" [src]=\"ChattedUser[3]?.profile_pic\" onerror=\"this.src='../../assets/icon/profile/user.png';\" alt=\"\" class=\"chat-img-circle\" (click)=\"toViewNextChat($event,ChattedUser[3])\">\r\n        <img *ngIf=\"ChattedUser\" [src]=\"ChattedUser[2]?.profile_pic\" onerror=\"this.src='../../assets/icon/profile/user.png';\" alt=\"\" class=\"chat-img-circle\" (click)=\"toViewNextChat($event,ChattedUser[2])\">\r\n        <img *ngIf=\"chatDetails\" [src]=\"chatDetails.profile_pic\" alt=\"\" onerror=\"this.src='../../assets/icon/profile/user.png';\" class=\"chat-image-centre\">\r\n        <img *ngIf=\"ChattedUser\" [src]=\"ChattedUser[1]?.profile_pic\" onerror=\"this.src='../../assets/icon/profile/user.png';\" alt=\"\" class=\"chat-img-circle\" (click)=\"toViewNextChat($event,ChattedUser[1])\">\r\n        <img *ngIf=\"ChattedUser\" [src]=\"ChattedUser[0]?.profile_pic\" onerror=\"this.src='../../assets/icon/profile/user.png';\" alt=\"\" class=\"chat-img-circle\" (click)=\"toViewNextChat($event,ChattedUser[0])\">\r\n      </div>\r\n    </div>\r\n    <div style=\"position: absolute; padding: 10px; top: 5px;\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div style=\"position: absolute; padding: 10px; right: 0px; top: 5px;\" (click)=\"gotoSettings()\">\r\n      <ion-buttons>\r\n        <img src=\"../../assets/icon/chat-message/settings.png\" alt=\"\" class=\"logo-img\">\r\n      </ion-buttons>\r\n    </div>\r\n   \r\n  </div>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\">\r\n\r\n<div style=\"padding: 15px; padding-top: 0px; padding-bottom: 25px;\" *ngFor=\"let message of chatMessage; let i = index\">\r\n\r\n  <div>\r\n\r\n  <!-- ODD CHAT MESSAGE -->\r\n\r\n    <div style=\"display: flex; align-items: flex-start; position: relative; margin-top: 15px;\" *ngIf=\"message.userid_from == chatDetails.userid\">\r\n      <div class=\"chat-image-profile\">\r\n        <img [src]=\"chatDetails.profile_pic\" alt=\"\">\r\n      </div>\r\n      <div class=\"chat-div-head\">\r\n\r\n        <div class=\"chat-div\">\r\n          <p  *ngIf=\"message.filetype==='' || message.filetype!='link'\"> {{message.message}} </p>\r\n          <a *ngIf=\"message.filetype==='link'\" [href]=\"message.message\"> {{message.message}} </a>\r\n        </div>\r\n\r\n        <div *ngIf=\"message.message===null\" style=\"padding: 5px 5px 12px 5px; background: #ffffff; border-radius: 5px; box-shadow: 0px 1px 7px -3px; text-align: end; display: flex; justify-content: center;\">\r\n          <img [src]=\"message.filename\" alt=\"\" style=\"height: 300px; width: 65%; object-fit: cover;\" (click)=\"ClickedOnImage($event, message, i)\">\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <p class=\"chat-time\"> {{message.send_at | date:'shortTime'}} </p>\r\n    </div>\r\n\r\n      <!-- EVEN CHAT MESSAGE -->\r\n  <div style=\"display: flex; align-items: flex-start; position: relative; margin-top: 15px;\" *ngIf=\"message.userid_from == userDetails.userid\">\r\n    <div class=\"chat-div-head\">\r\n\r\n      <div class=\"second-chat-div\" *ngIf=\"message.message!==null\">\r\n        <p> {{message.message}} </p>\r\n      </div>\r\n\r\n      <div style=\"padding: 5px 5px 12px 5px; background: #ffffff; border-radius: 5px; box-shadow: 0px 1px 7px -3px; text-align: end; display: flex; justify-content: center;\">\r\n        <img *ngIf=\"message.filename!=''\" [src]=\"message.filename\" alt=\"\" style=\"height: 300px; width: 65%; object-fit: cover;\" (click)=\"ClickedOnImage($event, message, i)\">\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"second-chat-image-profile\">\r\n      <img *ngIf=\"userDetails\" [src]=\"userDetails.profile_pic\" alt=\"\">\r\n    </div>\r\n    <p class=\"second-chat-time\"> {{message.send_at | date:'shortTime'}} </p>\r\n  </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <div style=\"padding: 45px;\">\r\n\r\n</div> -->\r\n\r\n  <!-- <div>\r\n\r\n  </div> -->\r\n\r\n</ion-content>\r\n\r\n  <!-- TYPE NEW MESSAGE -->\r\n\r\n  <p class=\"animate__animated animate__flash animate__infinite\" *ngIf=\"isTyping==true\" style=\"color: grey; margin: 0px 0px 5px 20px;\"> {{userDetails.name}} is typing ...</p>\r\n\r\n  <ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar style=\"--background: white;\">\r\n      <form [formGroup]=\"MessageForm\" (ngSubmit)=\"chatSubmit()\">\r\n      <div style=\"display: flex; align-items: center;\">\r\n        <div class=\"searchbar_div\">\r\n\r\n          <ion-item lines=\"none\" class=\"type_inputfield\" style=\"--padding-start: 5px;\">\r\n            <div (click)=\"showEnlargedView()\">\r\n              <img src=\"../../assets/icon/chat-message/add.png\" alt=\"\" class=\"text-field-icons\" *ngIf=\"!showPlusView\">\r\n              <img src=\"../../assets/icon/chat-message/add.png\" alt=\"\" style=\"width: 15px; height: 15px;\" *ngIf=\"showPlusView\" class=\"animate__animated animate__zoomIn animate__delay-5s\">\r\n            </div>\r\n            <ion-input placeholder=\"Type Message\" type=\"text\" class=\"ion-input-message\" formControlName=\"message\" [(ngModel)]=\"userMessage.message\" autocapitalize=\"true\" (keyup)=\"onChange($event)\">\r\n            </ion-input>\r\n            <img src=\"../../assets/icon/chat-message/aud.png\" alt=\"\" style=\"width: 15px; height: 20px;\" (click)=\"toShareAudio()\">\r\n          </ion-item>\r\n\r\n        </div>\r\n        <div>\r\n          <ion-button style=\"--border-radius: 50%; height: 40px; width: 45px;\" type=\"submit\" [disabled]=\"!MessageForm.valid\">\r\n            <ion-icon shape=\"round\" name=\"send-sharp\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        \r\n      </div>\r\n    </form>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n  <ion-footer *ngIf=\"showPlusView\" style=\"position: absolute; top: 83%;width: 200px;\">\r\n    <ion-toolbar style=\"border-radius: 50%; position: relative; bottom: 45px; left: -38px;\" class=\"animate__animated animate__zoomIn animate__delay-0.5s\">\r\n      <div  style=\"position: relative; border-radius: 50%; height: 200px; width: 200px;\" class=\"animate__animated animate__zoomIn animate__delay-0.5s\">\r\n        <div style=\"display: grid; top: 20px; position: relative; left: 76px;\">\r\n          <!-- <img src=\"../../assets/icon/chat/1.png\" alt=\"\" style=\"height: 26px; width: 26px;\" (click)=\"toShareFile()\"> -->\r\n          <img src=\"../../assets/icon/chat/2.png\" alt=\"\" style=\"height: 25px; width: 25px; position: relative; left: 38px; bottom: 0px;\" (click)=\"toShareAttachment()\">\r\n          <img src=\"../../assets/icon/chat/3.png\" alt=\"\" style=\"height: 20px; width: 25px; position: relative; left: 75px; top: 9px;\" (click)=\"toShareImage()\">\r\n          <img src=\"../../assets/icon/chat/4.png\" alt=\"\" style=\"height: 27px; width: 27px; position: relative; top: 30px; left: 55px;\" (click)=\"toShareContact()\">\r\n          <img src=\"../../assets/icon/chat-message/add.png\" alt=\"\" style=\"height: 40px; width: 40px; position: relative; right: 23px; bottom: 16px;\" (click)=\"showEnlargedView()\">\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n\r\n  <!-- TYPE NEW MESSAGE ENDS HERE -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-message-chat-message-module-es5.js.map