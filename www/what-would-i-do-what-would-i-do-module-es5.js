(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["what-would-i-do-what-would-i-do-module"], {
    /***/
    "JfcX":
    /*!***********************************************************!*\
      !*** ./src/app/what-would-i-do/what-would-i-do.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function JfcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\n.tabone_header {\n  background: #707072;\n  position: relative;\n  height: 50px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n/* PAGE CONTENT */\n.page-content {\n  padding: 10px;\n}\n.comment-div {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n.comment-box {\n  padding: 10px;\n  background: #f3f3f3;\n  box-shadow: 0.5px 0.5px 4.5px -0.5px;\n  border-radius: 5px;\n  font-size: 12px;\n  width: 50%;\n  height: 110px;\n  line-height: 17px;\n  font-weight: 700;\n}\n.comment-box-bg {\n  padding: 10px;\n  background-image: url('w-bg.png');\n  box-shadow: 0.5px 0.5px 4.5px -0.5px;\n  border-radius: 5px;\n  font-size: 12px;\n  width: 50%;\n  height: auto;\n  line-height: 17px;\n  font-weight: 700;\n  background-size: contain;\n}\n.box-image {\n  position: absolute;\n  width: 28px;\n  height: 25px;\n  top: 100px;\n  left: 10px;\n  border: 1px solid #9eacad;\n  padding: 3px;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.box-image_two {\n  position: absolute;\n  width: 28px;\n  height: 25px;\n  top: 100px;\n  left: 200px;\n  border: 1px solid #9eacad;\n  padding: 3px;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.add-button {\n  font-size: 9px;\n  margin-left: 5px;\n  background: #919292;\n  border-radius: 20px;\n  color: #ffffff;\n  padding-left: 0;\n  height: 25px;\n  text-transform: capitalize;\n}\n.comment-area {\n  margin: 0 auto;\n  border-radius: 20px;\n  width: 200px;\n  display: flex;\n  border: 1px solid #919292;\n  align-items: center;\n  font-size: 12px;\n  height: 30px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdoYXQtd291bGQtaS1kby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQSxpQkFBQTtBQUNBO0VBQ0ksYUFBQTtBQUFKO0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUdKO0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUhBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBTUo7QUFKQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFPSiIsImZpbGUiOiJ3aGF0LXdvdWxkLWktZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUEFHRSBIRUFERVIgKi9cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4udGFib25lX2hlYWRlcl9sZWZ0IHtcclxuICAgIFxyXG59XHJcbi50YWJvbmVfaGVhZGVyX3JpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi8qIFBBR0UgQ09OVEVOVCAqL1xyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbW1lbnQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5jb21tZW50LWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDQuNXB4IC0wLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5jb21tZW50LWJveC1iZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi93aGF0X3dvdWxkL3ctYmcucG5nJyk7XHJcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA0LjVweCAtMC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5ib3gtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZWFjYWQ7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5ib3gtaW1hZ2VfdHdvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzllYWNhZDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmFkZC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkxOTI5MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5jb21tZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MTkyOTI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "RMfz":
    /*!*******************************************************************!*\
      !*** ./src/app/what-would-i-do/what-would-i-do-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: WhatWouldIDoPageRoutingModule */

    /***/
    function RMfz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoPageRoutingModule", function () {
        return WhatWouldIDoPageRoutingModule;
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


      var _what_would_i_do_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./what-would-i-do.page */
      "SWwE");

      var routes = [{
        path: '',
        component: _what_would_i_do_page__WEBPACK_IMPORTED_MODULE_3__["WhatWouldIDoPage"]
      }];

      var WhatWouldIDoPageRoutingModule = function WhatWouldIDoPageRoutingModule() {
        _classCallCheck(this, WhatWouldIDoPageRoutingModule);
      };

      WhatWouldIDoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WhatWouldIDoPageRoutingModule);
      /***/
    },

    /***/
    "SWwE":
    /*!*********************************************************!*\
      !*** ./src/app/what-would-i-do/what-would-i-do.page.ts ***!
      \*********************************************************/

    /*! exports provided: WhatWouldIDoPage */

    /***/
    function SWwE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoPage", function () {
        return WhatWouldIDoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_what_would_i_do_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./what-would-i-do.page.html */
      "T2d9");
      /* harmony import */


      var _what_would_i_do_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./what-would-i-do.page.scss */
      "JfcX");
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var WhatWouldIDoPage = /*#__PURE__*/function () {
        function WhatWouldIDoPage(common, storageservice, formbuilder) {
          var _this = this;

          _classCallCheck(this, WhatWouldIDoPage);

          this.common = common;
          this.storageservice = storageservice;
          this.formbuilder = formbuilder;
          this.FormSubmit = false;
          this.userDetails = [];
          this.showTextArea = false;
          this.showEditArea = false;
          this.userAnswer = {
            "answer1": "",
            "answer2": ""
          };
          this.userComment = {
            "comment": ""
          };
          this.useriQuery = {
            "iQuery1": "",
            "iQuery2": ""
          };
          this.AdminQuestions = [];
          this.Answers = [];
          this.answerForm = formbuilder.group({
            answer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])],
            answer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
          });
          this.commentForm = formbuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
          });
          this.iQueryForm = formbuilder.group({
            iQuery1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])],
            iQuery2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
          });
          this.answer1 = this.answerForm.controls['answer1'];
          this.answer2 = this.answerForm.controls['answer2'];
          this.comment = this.commentForm.controls['comment'];
          this.iQuery1 = this.iQueryForm.controls['iQuery1'];
          this.iQuery2 = this.iQueryForm.controls['iQuery2'];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(WhatWouldIDoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.iQueryForm.reset();
            this.storageservice.storage.get('userDetails').then(function (val) {
              _this2.userDetails = val;

              if (_this2.userDetails.userid != '') {
                var params = {
                  userid: _this2.userDetails.userid
                };

                _this2.common.postMethod('GetAdminMessage', params).then(function (res) {
                  _this2.AdminQuestions = res.details.adminmessage;
                  _this2.Answers = res.details.answers;
                  _this2.MyiQuery = res.details.MyiQuery;
                  _this2.Like1 = res.details.Like[0];
                  _this2.Like2 = res.details.Like[1];
                });
              }
            });
          }
        }, {
          key: "toSendComment",
          value: function toSendComment(event, messages) {
            var _this3 = this;

            this.FormSubmit = true;
            var params = {
              userid: this.userDetails.userid,
              comment: this.userComment.comment
            };
            this.common.postMethod('CommentAnswer', params).then(function (res) {
              if (res.status == true) {
                _this3.commentForm.reset();

                _this3.common.presentToast(' ✅ Your comment successfully send');
              } else {
                _this3.common.presentToast(' 🛑 Something went wrong');
              }
            }); // } else {
            //   this.common.showAlert('You had reached the maximum count of this week`s iQuery');
            // }
          }
        }, {
          key: "toSendAnswer",
          value: function toSendAnswer(event, AdminQuestions) {
            var _this4 = this;

            this.FormSubmit = true;
            var params = {
              userid: this.userDetails.userid,
              answer1: this.userAnswer.answer1,
              answer2: this.userAnswer.answer2,
              questionnum: AdminQuestions.id
            };
            this.common.postMethod('AnswerMessage', params).then(function (res) {
              if (res.status == true) {
                _this4.ionViewWillEnter();

                _this4.common.presentToast(' ✅ Your answers successfully send ');
              } else {
                _this4.common.presentToast(' 🛑 Something went wrong ');
              }
            });
          }
        }, {
          key: "toLikeAnswer1",
          value: function toLikeAnswer1(event, AdminQuestions) {
            var _this5 = this;

            var params = {
              userid: this.userDetails.userid,
              questionid: this.AdminQuestions.id,
              answerid: 'answer1',
              status: 'like'
            };
            this.common.postMethod('CommentLike', params).then(function (res) {
              _this5.ionViewWillEnter();
            });
          }
        }, {
          key: "toLikeAnswer2",
          value: function toLikeAnswer2(event, AdminQuestions) {
            var _this6 = this;

            var params = {
              userid: this.userDetails.userid,
              questionid: this.AdminQuestions.id,
              answerid: 'answer2',
              status: 'like'
            };
            this.common.postMethod('CommentLike', params).then(function (res) {
              _this6.ionViewWillEnter();
            });
          }
        }, {
          key: "toSendiQuery",
          value: function toSendiQuery(event, messages) {
            var _this7 = this;

            this.FormSubmit = true;
            this.showTextArea = false;

            if (this.MyiQuery.length != 7 && this.MyiQuery.length > 7) {
              var params = {
                userid: this.userDetails.userid,
                query1: this.useriQuery.iQuery1,
                query2: this.useriQuery.iQuery2,
                queryid: ''
              };
              this.common.postMethod('MyiQuery', params).then(function (res) {
                if (res.status == true) {
                  _this7.common.presentToast(' ✅ Your new iQuery successfully added ');
                } else {
                  _this7.common.presentToast(' 🛑 Something went wrong ');
                }
              });
              this.ionViewWillEnter();
            } else {
              this.common.showAlert('You had reached the maximum count of this week`s iQuery, so you cann`t add no more iQuery this week');
            }
          }
        }, {
          key: "toRemoveiQuery",
          value: function toRemoveiQuery(event, iQuery) {
            var _this8 = this;

            var params = {
              queryid: iQuery.queryid
            };
            this.common.postMethod('RemoveiQuery', params).then(function (res) {
              if (res.status == true) {
                _this8.ionViewWillEnter();

                _this8.common.presentToast(' ✅ iQuery successfully removed ');
              } else {
                _this8.common.presentToast(' 🛑 Something went wrong ');
              }
            });
          }
        }, {
          key: "toEditiQuery",
          value: function toEditiQuery(event, iQuery) {
            this.showEditArea = true;
            this.SingleQuery = iQuery;
          }
        }, {
          key: "toSendEditediQuery",
          value: function toSendEditediQuery(event, SingleQuery) {
            var _this9 = this;

            var params = {
              userid: this.userDetails.userid,
              queryid: SingleQuery.queryid,
              query1: this.useriQuery.iQuery1,
              query2: this.useriQuery.iQuery2
            };
            this.common.postMethod('MyiQuery', params).then(function (res) {
              if (res.status == true) {
                _this9.ionViewWillEnter();

                _this9.common.presentToast(' ✅ Your iQuery successfully updated ');
              } else {
                _this9.common.presentToast(' 🛑 Something went wrong ');
              }
            });
          }
        }, {
          key: "toCloseEditArea",
          value: function toCloseEditArea() {
            this.showEditArea = false;
          }
        }, {
          key: "toShowTextArea",
          value: function toShowTextArea() {
            this.showTextArea = true;
          }
        }]);

        return WhatWouldIDoPage;
      }();

      WhatWouldIDoPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      WhatWouldIDoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-what-would-i-do',
        template: _raw_loader_what_would_i_do_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_what_would_i_do_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WhatWouldIDoPage);
      /***/
    },

    /***/
    "T2d9":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/what-would-i-do/what-would-i-do.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T2d9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">WHAT WOULD I DO IF..</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- PAGE CONTENT SECTION  -->\r\n<ion-content>\r\n  <div class=\"page-content\">\r\n    <div style=\"text-align: center;\">\r\n      <h4 style=\"font-size: 16px; font-weight: 700;\">This week's iQuery</h4>\r\n    </div>\r\n\r\n    <h4 style=\"font-size: 12px\">WHAT WOULD YOU DO</h4>\r\n    <div class=\"comment-div\">\r\n      <div class=\"comment-box-bg\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"AdminQuestions\"> {{AdminQuestions.message1}} </p>\r\n      </div>\r\n      <div class=\"comment-box-bg\" style=\"margin-left: 10px;\">\r\n        <p class=\"animate__animated animate__fadeIn\" *ngIf=\"AdminQuestions\"> {{AdminQuestions.message2}} </p>\r\n      </div>\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n    </div>\r\n\r\n    <!--First Div Opening -->\r\n    <!-- <div > -->\r\n    <div class=\"comment-div\" style=\"margin-top: 20px;\" *ngIf=\"Answers!=''\">\r\n\r\n      <div class=\"comment-box\" style=\"background-color: #ffffff; height: 110px;\">\r\n        <p *ngIf=\"Answers\" style=\"position: relative; bottom: 10px;\"> {{Answers.answer1}} </p>\r\n      </div>\r\n\r\n      <div class=\"comment-box\" style=\"margin-left: 10px; background-color: #ffffff; height: 110px;\">\r\n        <p *ngIf=\"Answers\" style=\"position: relative; bottom: 10px;\"> {{Answers.answer2}} </p>\r\n      </div>\r\n\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n      <img *ngIf=\"Like1==undefined || Like1?.status=='dislike'\" src=\"../../assets/icon/what_would/04.png\" alt=\"\" class=\"box-image\" (click)=\"toLikeAnswer1($event,Answers)\">\r\n      <img *ngIf=\"Like1!=undefined && Like1?.status=='like'\" src=\"../../assets/icon/what_would/shoot.png\" alt=\"\" class=\"box-image\" (click)=\"toLikeAnswer1($event,Answers)\">\r\n\r\n      <img *ngIf=\"Like2==undefined || Like2?.status=='dislike'\" src=\"../../assets/icon/what_would/04.png\" alt=\"\" class=\"box-image_two\" (click)=\"toLikeAnswer2($event,Answers)\">\r\n      <img *ngIf=\"Like1!=undefined && Like2?.status=='like'\" src=\"../../assets/icon/what_would/shoot.png\" alt=\"\" class=\"box-image_two\" (click)=\"toLikeAnswer2($event,Answers)\">\r\n    </div>\r\n  <!-- </div> -->\r\n    <!--First  Div closing -->\r\n\r\n    <!-- Second Div Opening -->\r\n    <div class=\"comment-div\" style=\"margin-top: 20px;\" *ngIf=\"Answers==''\">\r\n\r\n      <form [formGroup]=\"answerForm\" (ngSubmit)=\"toSendAnswer($event,AdminQuestions)\" style=\"display: contents;\">\r\n      <div class=\"comment-box\" style=\"background-color: #ffffff; height: 110px;\">\r\n        <ion-textarea placeholder=\"Enter Your Answer\" formControlName=\"answer1\" [(ngModel)]=\"userAnswer.answer1\" clearOnEdit=\"true\" autocapitalize=\"true\"></ion-textarea>\r\n      </div>\r\n\r\n      <div class=\"comment-box\" style=\"margin-left: 10px; background-color: #ffffff; height: 110px;\">\r\n        <ion-textarea placeholder=\"Enter Your Answer\" formControlName=\"answer2\" [(ngModel)]=\"userAnswer.answer2\" clearOnEdit=\"true\" autocapitalize=\"true\"></ion-textarea>\r\n      </div>\r\n      <ion-button style=\"text-transform: none; position: absolute; top: 113px;\" size=\"small\" shape=\"round\" [disabled]=\"!answerForm.valid\" type=\"submit\">Done</ion-button>\r\n      </form>\r\n\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n    </div>\r\n    <!-- Second Div Closing -->\r\n\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"toSendComment($event,Answers)\">\r\n    <div style=\"margin: 60px 30px 20px 30px;\">\r\n      <ion-item lines=\"none\">\r\n        <ion-input formControlName=\"comment\" placeholder=\"Enter Comment\" type=\"text\" class=\"comment-area\" [(ngModel)]=\"userComment.comment\">\r\n          <img src=\"../../assets/icon/what_would/comment.png\" alt=\"\" style=\"width: 20px; height: 15px; margin: 10px;\">\r\n        </ion-input>\r\n        <ion-button type=\"submit\" shape=\"round\" size=\"small\" style=\"margin-left: 5px;\" [disabled]=\"!commentForm.valid\">send</ion-button>\r\n      </ion-item>\r\n    </div>\r\n  </form>\r\n\r\n  </div>\r\n\r\n  <div style=\"background: #f4f6f7; padding: 10px;\">\r\n    <div style=\"text-align: center;\">\r\n      <h4 style=\"font-size: 16px; font-weight: 700; line-height: 0px;\">My iQuery</h4>\r\n    </div>\r\n\r\n    <h4 style=\"font-size: 12px\">WHAT WOULD i DO</h4>\r\n\r\n    <div>\r\n\r\n    <div class=\"comment-div\" *ngFor=\"let iQuery of MyiQuery\">\r\n      <div class=\"comment-box-bg\">\r\n        <span class=\"animate__animated animate__fadeIn\">{{iQuery.query1}}</span>\r\n      </div>\r\n      <div class=\"comment-box-bg\" style=\"margin-left: 10px;\">\r\n        <span class=\"animate__animated animate__fadeIn\">{{iQuery.query2}}</span>\r\n      </div>\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n\r\n      <ion-button style=\"text-transform: none; position: absolute; top: 90%; left: 20px;\" size=\"small\" shape=\"round\" (click)=\"toRemoveiQuery($event,iQuery)\">Remove iQuery</ion-button>\r\n      <ion-button style=\"text-transform: none; position: absolute; top: 90%; right: 45px;\" size=\"small\" shape=\"round\" (click)=\"toEditiQuery($event,iQuery)\">Edit iQuery</ion-button>\r\n    </div>\r\n\r\n    <form [formGroup]=\"iQueryForm\" (ngSubmit)=\"toSendEditediQuery($event,SingleQuery)\" style=\"display: contents;\">\r\n    <div class=\"comment-div\" *ngIf=\"showEditArea\" style=\"background-color: #70707252; padding: 30px 15px 30px 15px; border-radius: 8px;\">\r\n      <ion-icon name=\"close\" (click)=\"toCloseEditArea()\" style=\"position: absolute; color: white; background-color: black; top: 2px; right: 2px; border-radius: 50%; padding: 3px;\"></ion-icon>\r\n        <div class=\"comment-box-bg\">\r\n          <ion-textarea type=\"text\" formControlName=\"iQuery1\" [(ngModel)]=\"useriQuery.iQuery1\" autocapitalize=\"true\" autoGrow=\"true\" class=\"animate__animated animate__fadeIn\" *ngIf=\"SingleQuery\" value=\"{{SingleQuery.query1}}\"> {{SingleQuery.query1}} </ion-textarea>\r\n        </div>\r\n        <div class=\"comment-box-bg\" style=\"margin-left: 10px;\">\r\n          <ion-textarea type=\"text\" formControlName=\"iQuery2\" [(ngModel)]=\"useriQuery.iQuery2\" autocapitalize=\"true\" autoGrow=\"true\" class=\"animate__animated animate__fadeIn\" *ngIf=\"SingleQuery\" value=\"{{SingleQuery.query2}}\"> {{SingleQuery.query2}} </ion-textarea>\r\n        </div>\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n      <ion-button style=\"text-transform: none; position: absolute; top: 125px;\" size=\"small\" shape=\"round\" [disabled]=\"!iQueryForm.valid\" type=\"submit\">Done</ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n\r\n    <div class=\"comment-div , animate__animated animate__fadeIn\" *ngIf=\"showTextArea\">\r\n      \r\n      <form [formGroup]=\"iQueryForm\" (ngSubmit)=\"toSendiQuery($event,Answers)\" style=\"display: contents;\">\r\n      <div class=\"comment-box , animate__animated animate__fadeIn\" style=\"background-color: #ffffff; height: 100px;\">\r\n        <ion-textarea placeholder=\"Enter here\" formControlName=\"iQuery1\" type=\"text\" [(ngModel)]=\"useriQuery.iQuery1\" clearOnEdit=\"true\" autocapitalize=\"true\"></ion-textarea>\r\n      </div>\r\n\r\n      <div class=\"comment-box , animate__animated animate__fadeIn\" style=\"margin-left: 10px; background-color: #ffffff; height: 100px;\">\r\n        <ion-textarea placeholder=\"Enter here\" formControlName=\"iQuery2\" type=\"text\" [(ngModel)]=\"useriQuery.iQuery2\" clearOnEdit=\"true\" autocapitalize=\"true\"></ion-textarea>\r\n      </div>\r\n\r\n      <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"position: absolute; width: 25px; height: 25px;\">\r\n\r\n      <ion-button style=\"text-transform: none; position: absolute; top: 110px;\" shape=\"round\" [disabled]=\"!iQueryForm.valid\" type=\"submit\">Done</ion-button>\r\n    </form>\r\n\r\n    </div>\r\n\r\n    <div style=\"text-align: center; margin-top: 60px;\">\r\n      <ion-button fill=\"clear\" class=\"add-button\" (click)=\"toShowTextArea()\">\r\n        <img src=\"../../assets/icon/what_would/plus.png\" alt=\"\"\r\n          style=\"height:15px; width: 15px; margin-right: 5px;\">Create More\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "zTOy":
    /*!***********************************************************!*\
      !*** ./src/app/what-would-i-do/what-would-i-do.module.ts ***!
      \***********************************************************/

    /*! exports provided: WhatWouldIDoPageModule */

    /***/
    function zTOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatWouldIDoPageModule", function () {
        return WhatWouldIDoPageModule;
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


      var _what_would_i_do_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./what-would-i-do-routing.module */
      "RMfz");
      /* harmony import */


      var _what_would_i_do_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./what-would-i-do.page */
      "SWwE");

      var WhatWouldIDoPageModule = function WhatWouldIDoPageModule() {
        _classCallCheck(this, WhatWouldIDoPageModule);
      };

      WhatWouldIDoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _what_would_i_do_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhatWouldIDoPageRoutingModule"]],
        declarations: [_what_would_i_do_page__WEBPACK_IMPORTED_MODULE_6__["WhatWouldIDoPage"]]
      })], WhatWouldIDoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=what-would-i-do-what-would-i-do-module-es5.js.map