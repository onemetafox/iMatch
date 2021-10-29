(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"],{

/***/ "KPCp":
/*!*****************************************************!*\
  !*** ./src/app/comments/comments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function() { return CommentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.page */ "mvCV");




const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
    }
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ "UyQ7":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments-routing.module */ "KPCp");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.page */ "mvCV");







let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPageRoutingModule"]
        ],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
    })
], CommentsPageModule);



/***/ }),

/***/ "jqZp":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-container-item {\n  --background: #79797b;\n}\n\n.top-person-img {\n  border-radius: 50%;\n  border: 1px solid white;\n  height: 40px;\n  width: 39px;\n  margin-top: 10px;\n  margin-bottom: 8px;\n}\n\nh5 {\n  color: white;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.top-left-text {\n  color: white;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.top-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  height: 33px;\n  width: 143px;\n  position: relative;\n  left: 10px;\n}\n\n.add-icon {\n  color: white;\n  font-size: 16px;\n  margin-right: 4px;\n  font-weight: bolder;\n}\n\n.left-profile-img {\n  height: 50px;\n  width: 50px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n}\n\n.left-reply-profile-img {\n  height: 45px;\n  width: 45px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n}\n\n.container {\n  width: 320px;\n  height: 150px;\n  position: relative;\n  float: right;\n  margin-right: 5px;\n}\n\n.top-item {\n  --background: #eeeced;\n  width: -webkit-fill-available;\n  height: 35px;\n}\n\n.person-name-text {\n  font-weight: 600;\n  font-size: 13px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  padding-bottom: 16px;\n  background-color: #eeeced;\n}\n\n.time-text {\n  font-size: 10px;\n  margin-left: 10px;\n  color: black;\n  padding-bottom: 15px;\n}\n\n.content-text {\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.bottom-small-img-icons {\n  height: 13px;\n  width: 15px;\n  margin-left: 15px;\n}\n\n.bottom-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFQQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBZUoiLCJmaWxlIjoiY29tbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1jb250YWluZXItaXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzc5Nzk3YjtcclxufVxyXG4udG9wLXBlcnNvbi1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5oNXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnRvcC1sZWZ0LXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi50b3AtcmlnaHQtcmVkLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmFkZC1pY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5sZWZ0LXByb2ZpbGUtaW1ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxlZnQtcmVwbHktcHJvZmlsZS1pbWd7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi50b3AtaXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogI2VlZWNlZDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5wZXJzb24tbmFtZS10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWQ7XHJcbn1cclxuLnRpbWUtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNvbnRlbnQtdGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ib3R0b20tc21hbGwtaW1nLWljb25ze1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uYm90dG9tLXJpZ2h0LXJlZC1idXR0b257XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4ub2RkLWNvbnRhaW5lcntcclxuICAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "mvCV":
/*!*******************************************!*\
  !*** ./src/app/comments/comments.page.ts ***!
  \*******************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comments.page.html */ "s//w");
/* harmony import */ var _comments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.page.scss */ "jqZp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");







let CommentsPage = class CommentsPage {
    constructor(storageservice, common, formbuilder) {
        this.storageservice = storageservice;
        this.common = common;
        this.formbuilder = formbuilder;
        this.FormSubmit = false;
        this.userDetails = [];
        this.matchDetails = [];
        this.commentDetails = [];
        this.userComment = {
            "comment": ""
        };
        this.userReply = {
            "reply": ""
        };
        this.doReply = false;
        this.ReplyComments = [];
        this.showReplyComment = {};
        this.ReplyCommentArray = [];
        this.OpenMatchCommentForm = formbuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
        });
        this.ReplyCommentForm = formbuilder.group({
            reply: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)])]
        });
        this.comment = this.OpenMatchCommentForm.controls['comment'];
        this.reply = this.ReplyCommentForm.controls['reply'];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
        this.common.route.queryParams.subscribe(resp => {
            this.matchDetails = resp;
            console.log('matchDetails for comment page:', this.matchDetails);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.matchDetails.matchType === 'PERSONAL' || this.matchDetails.matchType === 'ONGOING') {
            let params = {
                userid: '0',
                matchid: this.matchDetails.match_id
            };
            console.log('params:', params);
            this.common.postMethod('GetComment', params).then((res) => {
                console.log('res:', res);
                this.commentDetails = res.details;
                this.ReplyComments = res.reply_comment;
            }, err => {
                console.log('Error:', err);
            });
        }
        else {
            this.storageservice.storage.get('userDetails').then((val) => {
                this.userDetails = val;
                if (this.userDetails.userid != '') {
                    let params = {
                        userid: this.userDetails.userid,
                        matchid: this.matchDetails.match_id
                    };
                    console.log('params:', params);
                    this.common.postMethod('GetComment', params).then((res) => {
                        console.log('res:', res);
                        this.commentDetails = res.details;
                        this.ReplyComments = res.reply_comment;
                        // if (this.commentDetails.replied_comment != "0") {
                        //   this.ReplyComments = res.details;
                        //   console.log('ReplyComments:',this.ReplyComments);
                        // } else {
                        //   this.common.presentToast(' 🛑 Something went wrong !!! ');
                        // }
                    });
                }
            });
        }
    }
    toAddComment() {
        console.log('Add Comment Button Clicked');
        if (this.OpenMatchCommentForm.valid && this.matchDetails.match_status == '1') {
            let params = {
                userid: this.userDetails.userid,
                matchid: this.matchDetails.match_id,
                comment: this.userComment.comment,
                contestentid: '0'
            };
            console.log('params:', params);
            this.common.postMethod('Comment', params).then((res) => {
                console.log('res:', res);
                if (res.status == true) {
                    this.OpenMatchCommentForm.reset();
                    this.ionViewWillEnter();
                }
                else {
                    this.common.presentToast(' 🛑 Something went wrong !!! ');
                }
            }, (err) => {
                console.log('Error:', err);
                this.common.presentToast(' 🛑 A Network error occured ...');
            });
        }
        else {
            this.OpenMatchCommentForm.reset();
            this.common.presentToast('The match you are trying to comment is got finished, so you cann`t comment here');
        }
    }
    toLikeComment(e, comment) {
        console.log('Comment Like Button clicked');
        console.log('comment:', comment);
        let params = {
            commentid: comment.id,
            userid: this.userDetails.userid,
        };
        console.log('params:', params);
        this.common.postMethod('MatchCommentLike', params).then((res) => {
            console.log('res', res);
            if (res.status == true) {
                this.ionViewWillEnter();
            }
            else {
                this.common.presentToast(' 🛑 Something went wrong !!! ');
            }
        }, (err) => {
            console.log('Error', err);
            this.common.presentToast(' 🛑 A Network error occured ...');
        });
    }
    toLikeReplyComment(e, comment) {
        console.log('Reply Comment Like Button Clicked');
        console.log('comment:', comment);
        let params = {
            commentid: comment.id,
            userid: this.userDetails.userid,
        };
        console.log('params:', params);
        this.common.postMethod('MatchCommentLike', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.ionViewWillEnter();
            }
            else {
                this.common.presentToast(' 🛑 Something went wrong !!! ');
            }
        }, (err) => {
            console.log('Error:', err);
        });
    }
    toShowReplyField(e, comment) {
        console.log('e:', e);
        console.log('comment:', comment);
        this.doReply = true;
        this.ReplyArray = comment;
    }
    toAddReply(e, ReplyArray) {
        console.log('Send Reply Button clicked');
        console.log('ReplyArray:', ReplyArray);
        if (this.ReplyCommentForm.valid) {
            let params = {
                userid: this.userDetails.userid,
                matchid: this.matchDetails.match_id,
                comment: this.userReply.reply,
                contestentid: '0',
                replied_commentid: ReplyArray.id,
            };
            console.log('params:', params);
            this.common.postMethod('ReplyComment', params).then((res) => {
                console.log('res:', res);
                if (res.status == true) {
                    this.OpenMatchCommentForm.reset();
                    this.ReplyCommentForm.reset();
                    this.ionViewWillEnter();
                }
                else {
                    this.common.presentToast(' 🛑 Something went wrong !!! ');
                }
            }, (err) => {
                console.log('Error', err);
            });
        }
        else {
            this.common.presentToast('Cannot Send Empty Messages ...');
        }
    }
    toShowReplyComment(e, comment, i) {
        var _a;
        console.log('To Show Reply Comment Clicked', i);
        this.ReplyCommentArray = [];
        console.log('comment:', comment, 'id:', comment.id);
        this.commentId = comment.id;
        this.showReplyComment[i] = true;
        console.log('ReplyComments:', this.ReplyComments);
        if (((_a = this.ReplyComments) === null || _a === void 0 ? void 0 : _a.length) != 0) {
            for (let i = 0; i < this.ReplyComments.length; i++) {
                const includesCommentId = this.ReplyComments[i].replied_comment.includes(this.commentId);
                console.log('includesCommentId:', includesCommentId);
                if (includesCommentId === true) {
                    this.ReplyCommentArray.push(this.ReplyComments[i]);
                    console.log('ReplyCommentArray:', this.ReplyCommentArray);
                }
                else {
                    this.showReplyComment[i] = false;
                }
            }
        }
        else {
            console.log('ReplyComments empty');
            this.showReplyComment[i] = false;
            this.common.presentToast(comment.commented_username + ' comment have no reply comments to display');
        }
    }
    toHideReplyComment(e, comment, i) {
        console.log('comment:', comment, i);
        this.showReplyComment[i] = false;
    }
};
CommentsPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
CommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comments',
        template: _raw_loader_comments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommentsPage);



/***/ }),

/***/ "s//w":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title style=\"margin-left: -60px;\">COMMENTS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: #707072\">\r\n\r\n  <form [formGroup]=\"OpenMatchCommentForm\" (ngSubmit)=\"toAddComment()\">\r\n\r\n    <div>\r\n\r\n      <ion-item class=\"top-container-item\" lines=\"none\" *ngIf=\"userDetails\">\r\n        <ion-input placeholder=\"Write a comment .....\" style=\"color:white;\" formControlName=\"comment\" [(ngModel)]=\"userComment.comment\" autocapitalize=\"true\"></ion-input>\r\n        <img [src]=\"userDetails.profile_pic\" alt=\"\" slot=\"end\" class=\"top-person-img\">\r\n      </ion-item>\r\n\r\n    </div>\r\n  </form>\r\n\r\n    <div>\r\n\r\n      <ion-item lines=\"none\" style=\"--background: #707072;\">\r\n        <p class=\"top-left-text\" *ngIf=\"commentDetails\">{{this.commentDetails.length}} Comments</p>\r\n        <ion-button slot=\"end\" class=\"top-right-red-button\" type=\"submit\" (click)=\"toAddComment()\" [disabled]=\"!OpenMatchCommentForm.valid\">\r\n          <ion-icon name=\"add-outline\" class=\"add-icon\"></ion-icon>\r\n          ADD YOUR COMMENT</ion-button>\r\n      </ion-item>\r\n\r\n      <p style=\"padding-left: 20px; background-color: #9e9e9e; height: 45px; padding-top: 10px;\" *ngIf=\"commentDetails?.length==0\" >Be the first person to leave a comment ....</p>\r\n    \r\n\r\n      <div style=\"padding: 5px\" *ngFor=\"let comment of commentDetails; let i = index;\">\r\n\r\n        <div style=\"display: flex;\">\r\n          <div style=\"height: 45px; width: 45px; margin-right: 10px; text-align: center; border-radius: 5px;\">\r\n            <img style=\"border-radius: 5px;\" [src]=\"comment.commented_userprofile\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n          </div>\r\n\r\n          <div style=\"background-color: white; width: -webkit-fill-available; border-radius: 5px;\">\r\n            <div style=\"background-color: #a9a9a969; padding: 7px;\">\r\n              \r\n              <span> <strong> {{comment.commented_username}} </strong> </span> <span style=\"font-size: 11px; margin-left: 10px;\"> said on {{comment.commented_at | date}} @ {{comment.commented_at | date:'shortTime'}} </span>\r\n            </div>\r\n\r\n            <div style=\"padding: 15px;\">\r\n              <span> {{comment.comment}} </span>\r\n            </div>\r\n\r\n            <div style=\"display: flex; justify-content: space-between; padding: 10px; border-top: .5px solid darkgrey;\">\r\n\r\n              <div>\r\n                <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)='toLikeComment($event,comment)'>\r\n                <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_like_count}} </span>\r\n              </div>\r\n\r\n              <div>\r\n                <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n                <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_like_count}} </span>\r\n              </div>\r\n\r\n              <div>\r\n                <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"toShowReplyComment($event, comment, i)\">\r\n                <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\" (click)=\"toHideReplyComment($event, comment, i)\"> {{comment.reply}} </span>\r\n              </div>\r\n\r\n              <div style=\"padding: 0px 40px 0px 40px;\">\r\n\r\n              </div>\r\n\r\n              <div>\r\n                <ion-button slot=\"end\" size=\"small\" shape=\"round\" class=\"bottom-right-red-button\" (click)=\"toShowReplyField($event,comment)\">REPLY</ion-button>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- comment reply section -->\r\n            <div *ngIf=\"showReplyComment[i]==true\" class=\"animate__animated animate__fadeIn\">\r\n              <div *ngFor=\"let reply of ReplyCommentArray; let i = index\" style=\"display: flex; padding: 5px;\">\r\n                <div style=\"text-align: center; margin-right: 5px; padding: 4px;\">\r\n                  <img style=\"border-radius: 5px; height: 45px; width: 45px;\" [src]=\"reply.commented_userprofile\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n                  <p style=\"margin: -5px; font-size: 13px;\"> <strong> {{reply.commented_username}} </strong> </p>\r\n                  <span style=\"font-size: 10px;\"> said on {{reply.commented_at| date}} @ {{comment.commented_at | date:'shortTime'}}  </span>\r\n              </div>\r\n\r\n              <div style=\"width: -webkit-fill-available; height: -webkit-fill-available; background-color: #A29465; border-radius: 5px;\">\r\n                <div style=\"padding: 15px;\">\r\n                  <span> {{reply.comment}} </span>\r\n                </div>\r\n    \r\n                <div style=\"display: flex; justify-content: space-between; padding: 0px 20px 10px 0px; float: right;\">\r\n    \r\n                  <div>\r\n                    <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)='toLikeComment($event,reply)'>\r\n                    <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{reply.total_like_count}} </span>\r\n                  </div>\r\n    \r\n                  <div>\r\n                    <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n                    <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{reply.total_like_count}} </span>\r\n                  </div>\r\n    \r\n                  <div>\r\n                    <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"toShowReplyComment($event, reply, i)\">\r\n                    <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\" (click)=\"toHideReplyComment($event, reply, i)\"> </span>\r\n                  </div>\r\n  \r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- comment reply section -->\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n    <!-- <div>\r\n\r\n      <div style=\"background: #707072; height: 152px;\" *ngFor=\"let comment of commentDetails; let i=index\">\r\n      <img [src]=\"comment.commented_userprofile\" alt=\"\" class=\"left-profile-img\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <ion-row>\r\n          <ion-item lines=\"none\" class=\"top-item\">\r\n            <h6 class=\"person-name-text\">{{comment.commented_username}}</h6>\r\n            <p class=\"time-text\">said on {{comment.commented_at | date}} @ {{comment.commented_at | date:'shortTime'}}</p>\r\n          </ion-item>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"background-color: white; height: 60px; width: 320px; border-bottom: 0.5px solid #80808070\">\r\n          <p class=\"content-text\">{{comment.comment}}</p>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-item lines=\"none\" style=\"width: -webkit-fill-available; height: 41px;\">\r\n            <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)='toLikeComment($event,comment)'>\r\n            <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_like_count}} </span>\r\n\r\n            <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n            <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_like_count}} </span>\r\n\r\n            <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\" style=\"margin-left: 25px;\" (click)=\"toShowReplyComment($event, comment, i)\">\r\n            <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\" (click)=\"toHideReplyComment($event, comment, i)\"> {{comment.replied_comment}} </span>\r\n\r\n            <ion-button slot=\"end\" size=\"small\" shape=\"round\" class=\"bottom-right-red-button\" (click)=\"toShowReplyField($event,comment)\">REPLY</ion-button>\r\n          </ion-item>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"showReplyComment\">\r\n      <p>comments reply</p>\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n\r\n    <!-- <div *ngIf=\"commentId == this.ReplyComments?.replied_comment\"> -->\r\n    <!-- <div *ngIf=\"showReplyComment\">\r\n    <div *ngFor=\"let reply of ReplyCommentArray; let i=index\" style=\"display: flex; background-color: white; margin: 0px 4px 0px 65px; padding: 10px; position: relative; bottom: 15px;\" class=\"animate__animated animate__fadeIn\">\r\n      <div style=\"text-align: center;\">\r\n        <img [src]=\"reply.commented_userprofile\" alt=\"\" class=\"left-reply-profile-img\">\r\n        <p style=\"margin: 0px; font-size: 12px; font-weight: 600;\"> {{reply.commented_username}} </p>\r\n        <p style=\"margin: 1px; font-size: 11px; color: grey;\"> said on {{reply.commented_at | date}} </p>\r\n        <p style=\"margin: 0px; font-size: 11px; color: grey;\">@ {{reply.commented_at | date:'shortTime'}} </p>\r\n      </div>\r\n\r\n      <div style=\"background-color: #a39465; border-radius: 5px; padding: 0px 0px 0px 15px; width: -webkit-fill-available;\">\r\n        <p> {{reply.comment}} </p>\r\n\r\n        <div style=\"text-align: end; font-size: 13px; margin-right: 15px; margin-top: 50px;\">\r\n          <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\"> <span style=\"position: relative; bottom: 2px; left: 4px;\">0</span>\r\n          <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\"> <span style=\"position: relative; bottom: 2px; left: 4px;\">0</span>\r\n          <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\"> <span style=\"position: relative; bottom: 2px; left: 4px;\">0</span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n<!-- </div> -->\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"doReply==true\" class=\"animate__animated animate__fadeIn\">\r\n  <ion-toolbar>\r\n    <p *ngIf=\"ReplyArray\" style=\"font-size: 13px; color: white; letter-spacing: 0.5px; background-color: #a39465; padding: 5px 15px; border-radius: 20px; margin: 5px 15px;\">Replying to {{ReplyArray.commented_username + '`s'}} comment ...</p>\r\n    <div style=\" display: flex; background-color: white; padding: 0px 15px; letter-spacing: 0.5px; font-size: 13px; font-weight: 600;\">\r\n      <form [formGroup]=\"ReplyCommentForm\" style=\"display: flex; width: -webkit-fill-available;\" (ngSubmit)=\"toAddReply($event,ReplyArray)\">\r\n      <img [src]=\"ReplyArray.commented_userprofile\" alt=\"\" style=\"border-radius: 50%; height: 30px; width: 30px; margin: 5px;\">\r\n      <ion-input formControlName=\"reply\" [(ngModel)]=\"userReply.reply\" placeholder=\"Add a reply ...\" autocapitalize=\"true\"> @{{ReplyArray.commented_username}} </ion-input>\r\n      <ion-button style=\"text-transform: none;\" size=\"small\" shape=\"round\" type=\"submit\" [disabled]=\"!this.ReplyCommentForm.valid\">Send Reply</ion-button>\r\n    </form>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=comments-comments-module-es2015.js.map