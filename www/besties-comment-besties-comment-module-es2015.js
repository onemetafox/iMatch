(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["besties-comment-besties-comment-module"],{

/***/ "+Jno":
/*!*********************************************************!*\
  !*** ./src/app/besties-comment/besties-comment.page.ts ***!
  \*********************************************************/
/*! exports provided: BestiesCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesCommentPage", function() { return BestiesCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_besties_comment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./besties-comment.page.html */ "HQM2");
/* harmony import */ var _besties_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./besties-comment.page.scss */ "XnwO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let BestiesCommentPage = class BestiesCommentPage {
    constructor(common, storageservice) {
        this.common = common;
        this.storageservice = storageservice;
        this.userDetails = [];
        this.commentDetails = [];
        this.BestiesDetails = [];
        this.doReply = false;
        this.ReplyUserDetails = [];
        this.ReplyComments = [];
        this.doEditComment = {};
        this.Comment = [];
        this.isReplyComments = {};
        this.doEditReplyComment = {};
        this.common.route.queryParams.subscribe((resp) => {
            this.BestiesDetails = resp;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.StorageUserDetails();
        this.GetBestiesComments();
        this.Comment = [];
    }
    // To fetch user stored details in device
    StorageUserDetails() {
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    GetBestiesComments() {
        let params = {
            bestie_id: this.BestiesDetails.bestie_id
        };
        this.common.postMethod('GetBestieComment', params).then((res) => {
            this.commentDetails = res.details;
            for (let i = 0; i < this.commentDetails.length; i++) {
                this.doEditComment[i] = false;
            }
        }, err => {
            console.log('Error:', err);
        });
    }
    ToAddComment() {
        if (this.userComment != "" && this.userComment != undefined) {
            console.log(this.BestiesDetails);
            let params = {
                userid: this.userDetails.userid,
                bestie_id: this.BestiesDetails.bestie_id,
                comment: this.userComment,
                commentid: ''
            };
            this.common.postMethod('BestieComment', params).then((res) => {
                if (res.status == true) {
                    this.GetBestiesComments();
                    this.userComment = '';
                }
            }, err => {
                console.log('Error:', err);
            });
        }
        else {
            this.common.presentToast('You cannot send an empty message !');
        }
    }
    ToEditComments(e, comment, i) {
        this.doEditComment[i] = true;
        this.userEditedComment = comment.comment;
    }
    ToSaveEdit(e, comment, i, Type) {
        this.Comment = comment;
        if (Type === "COMMENT") {
            if (this.userEditedComment != "" && this.userEditedComment != undefined) {
                this.doEditComment[i] = false;
                let params = {
                    commentid: this.Comment.id,
                    comment: this.userEditedComment
                };
                this.common.postMethod('UpdateBestieComment', params).then((res) => {
                    if (res.status == true) {
                        this.common.showAlertSuccess('Your edited comment saved successfully');
                        this.GetBestiesComments();
                    }
                }, err => {
                    console.log('Error:', err);
                });
            }
            else {
                this.common.showAlert('You cannot save an empty message!');
            }
        }
        else {
            this.ToSaveReplyComment(e, comment, i, Type);
        }
    }
    ToCancelEdit(e, i) {
        this.doEditComment[i] = false;
        this.doEditReplyComment[i] = false;
    }
    ToDeleteComments(e, comment) {
        let params = {
            commentid: comment.id,
        };
        this.common.postMethod('DeleteBestieComment', params).then((res) => {
            if (res.status == true) {
                this.GetBestiesComments();
            }
        }, err => {
            console.log('Error:', err);
        });
    }
    ToLikeComments(e, comment, i) {
        this.Comment = comment;
        let params = {
            commentid: this.Comment.id,
            userid: this.userDetails.userid
        };
        this.common.postMethod('BestieCommentLike', params).then((res) => {
            if (res.status == true) {
                this.GetBestiesComments();
            }
        }, err => {
            console.log('Error:', err);
        });
    }
    ToAddReply(e, comment) {
        this.doReply = true;
        comment.commentType = 'COMMENT';
        this.ReplyUserDetails = comment;
    }
    ToSendReply() {
        if (this.ReplyUserDetails.commentType === 'COMMENT') {
            if (this.userReply != "" && this.userReply != undefined) {
                let params = {
                    userid: this.userDetails.userid,
                    bestieid: this.BestiesDetails.userid,
                    comment: this.userReply,
                    commentid: this.ReplyUserDetails.id
                };
                this.common.postMethod('BestieComment', params).then((res) => {
                    if (res.status == true) {
                        this.GetBestiesComments();
                        this.userReply = '';
                    }
                }, err => {
                    console.log('Error:', err);
                });
            }
            else {
                this.common.presentToast('You cannot send empty reply !');
            }
        }
        else {
            this.ToCommentReplyComment();
        }
    }
    ToViewReplyComments(e, comment, i) {
        this.Comment = comment;
        if (this.Comment.replied_comments.length !== 0) {
            this.isReplyComments = {} = {};
            this.ReplyComments = this.Comment.replied_comments;
            this.isReplyComments[i] = !this.isReplyComments[i];
        }
        else {
            this.common.presentToast('This comment has no reply comments');
        }
    }
    ToLikeReplyComment(e, reply, i) {
        this.Comment = reply;
        let params = {
            commentid: this.Comment.id,
            userid: this.userDetails.userid
        };
        this.common.postMethod('BestieCommentLike', params).then((res) => {
            if (res.status == true) {
                this.GetBestiesComments();
            }
        }, err => {
            console.log('Error:', err);
        });
    }
    ToReplyToReplyComment(e, reply, i) {
        this.doReply = true;
        reply.commentType = 'REPLY';
        this.ReplyUserDetails = reply;
    }
    ToCommentReplyComment() {
        if (this.userReply != "" && this.userReply != undefined) {
            let params = {
                userid: this.userDetails.userid,
                bestieid: this.BestiesDetails.userid,
                comment: 'Replied to ' + this.ReplyUserDetails.commented_username + '`s comment 👉 ' + this.userReply,
                commentid: this.ReplyUserDetails.id
            };
            this.common.postMethod('BestieComment', params).then((res) => {
                if (res.status == true) {
                    this.GetBestiesComments();
                    this.userReply = '';
                }
            }, err => {
                console.log('Error:', err);
            });
        }
        else {
            this.common.presentToast('You cannot send empty reply !');
        }
    }
    ToEditReplyComment(e, reply, i) {
        this.doEditReplyComment[i] = true;
        this.CommentReply = reply;
        this.userEditedComment = reply.comment;
    }
    ToSaveReplyComment(e, reply, i, Type) {
        if (this.userEditedComment != "" && this.userEditedComment != undefined) {
            let params = {
                commentid: this.CommentReply.id,
                comment: this.userEditedComment
            };
            this.common.postMethod('UpdateBestieComment', params).then((res) => {
                if (res.status == true) {
                    this.userEditedComment = '';
                    this.doEditReplyComment[i] = false;
                    this.common.showAlertSuccess('Your edited comment saved successfully');
                    this.GetBestiesComments();
                }
            }, err => {
                console.log('Error:', err);
            });
        }
        else {
            this.common.showAlert('You cannot save an empty message!');
        }
    }
    ToCancelReplyEdit(e, i) {
        this.doEditReplyComment[i] = false;
    }
    ToDeleteReplyComment(e, reply, i) {
        this.Comment = reply;
        let params = {
            commentid: this.Comment.id,
        };
        this.common.postMethod('DeleteBestieComment', params).then((res) => {
            if (res.status == true) {
                this.GetBestiesComments();
            }
        }, err => {
            console.log('Error:', err);
        });
    }
};
BestiesCommentPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
BestiesCommentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-besties-comment',
        template: _raw_loader_besties_comment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_besties_comment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BestiesCommentPage);



/***/ }),

/***/ "8hJ9":
/*!***********************************************************!*\
  !*** ./src/app/besties-comment/besties-comment.module.ts ***!
  \***********************************************************/
/*! exports provided: BestiesCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesCommentPageModule", function() { return BestiesCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _besties_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./besties-comment-routing.module */ "wpp0");
/* harmony import */ var _besties_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./besties-comment.page */ "+Jno");







let BestiesCommentPageModule = class BestiesCommentPageModule {
};
BestiesCommentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _besties_comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestiesCommentPageRoutingModule"]
        ],
        declarations: [_besties_comment_page__WEBPACK_IMPORTED_MODULE_6__["BestiesCommentPage"]]
    })
], BestiesCommentPageModule);



/***/ }),

/***/ "HQM2":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/besties-comment/besties-comment.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">COMMENTS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: #707072;\">\r\n\r\n    <div>\r\n\r\n      <ion-item class=\"top-container-item\" lines=\"none\" *ngIf=\"userDetails\">\r\n        <ion-input [(ngModel)]=\"userComment\" placeholder=\"Write a comment .....\" type=\"text\" style=\"color:white;\" autocapitalize=\"true\"></ion-input>\r\n        <img [src]=\"userDetails.profile_pic\" alt=\"\" slot=\"end\" class=\"top-person-img\">\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n      <ion-item lines=\"none\" style=\"--background: #707072;\">\r\n        <p class=\"top-left-text\" *ngIf=\"commentDetails\"> {{commentDetails.length}} Comments</p>\r\n        <ion-button slot=\"end\" class=\"top-right-red-button\" (click)=\"ToAddComment()\">\r\n          <ion-icon name=\"add-outline\" class=\"add-icon\"></ion-icon>\r\n          ADD YOUR COMMENT</ion-button>\r\n      </ion-item>\r\n\r\n      <p style=\"padding-left: 20px; background-color: #9e9e9e; height: 45px; padding-top: 10px;\" *ngIf=\"commentDetails?.length===0\" >Be the first person to leave a comment ....</p>\r\n\r\n    <div style=\"padding: 5px\" *ngFor=\"let comment of commentDetails; let i = index;\">\r\n\r\n      <div style=\"display: flex;\">\r\n        <div style=\"height: 45px; width: 45px; margin-right: 10px; text-align: center; border-radius: 5px;\">\r\n          <img style=\"border-radius: 5px;\" [src]=\"comment.commented_userprofile\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n        </div>\r\n\r\n        <div style=\"background-color: white; width: -webkit-fill-available; border-radius: 5px;\">\r\n          <div style=\"background-color: #a9a9a969; padding: 7px;\">\r\n            \r\n            <span> <strong> {{comment.commented_username}} </strong> </span> <span style=\"font-size: 11px; margin-left: 10px;\"> said on {{comment.commented_at | date}} @ {{comment.commented_at | date:'shortTime'}} </span>\r\n          </div>\r\n\r\n          <div *ngIf=\"doEditComment[i]!=true\" style=\"padding: 15px;\">\r\n            <span> {{comment.comment}} </span>\r\n          </div>\r\n\r\n          <div *ngIf=\"doEditComment[i]==true\" style=\"display: flex;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            <ion-textarea autocapitalize=\"true\" autoGrow=\"true\" style=\"background-color: #dbdbdb; border-radius: 5px;\" [(ngModel)]=\"userEditedComment\"></ion-textarea>\r\n            \r\n            <div style=\"display: grid; padding: 5px;\">\r\n              <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; height: 23px;\" (click)=\"ToSaveEdit($event, comment, i, 'COMMENT')\">Save</ion-button>\r\n              <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; height: 23px; --background: darkgrey; color: black;\" (click)=\"ToCancelEdit($event, i)\">Cancel</ion-button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div style=\"display: flex; justify-content: space-between; padding: 10px 10px 3px 10px; border-top: 1px solid #dbdbdb;\">\r\n    \r\n            <div>\r\n              <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"ToLikeComments($event, comment, i)\">\r\n              <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_like_count}} </span>\r\n            </div>\r\n\r\n            <!-- <div>\r\n              <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n              <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"></span>\r\n            </div> -->\r\n\r\n            <div>\r\n              <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"ToViewReplyComments($event, comment, i)\">\r\n              <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{comment.total_repliedcomment_count}} </span>\r\n            </div>\r\n\r\n            <div *ngIf=\"comment?.commented_userid === userDetails?.userid\">\r\n              <ion-icon name=\"pencil\" (click)=\"ToEditComments($event, comment, i)\"></ion-icon>\r\n              <span style=\"font-size: 10px; position: relative; bottom: 3px;\">Edit</span>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-icon name=\"trash\" (click)=\"ToDeleteComments($event, comment)\"></ion-icon>\r\n              <span style=\"font-size: 10px; position: relative; bottom: 3px;\">Delete</span>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; --padding-start: 20px;  --padding-end: 20px; height: 21px; position: relative; bottom: 5px;\" (click)=\"ToAddReply($event, comment)\">Reply</ion-button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"isReplyComments[i]==true\" class=\"animate__animated animate__fadeIn\">\r\n            <div *ngFor=\"let reply of ReplyComments; let i = index\" style=\"display: flex; padding: 5px;\">\r\n              <div style=\"text-align: center; margin-right: 5px; padding: 4px;\">\r\n                <img style=\"border-radius: 5px; height: 45px; width: 45px;\" [src]=\"reply.commented_userprofile\" alt=\"\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n                <p style=\"margin: -5px; font-size: 13px;\"> <strong> {{reply.commented_username}} </strong> </p>\r\n                <span style=\"font-size: 10px;\"> said on {{reply.commented_at| date}} @ {{comment.commented_at | date:'shortTime'}}  </span>\r\n            </div>\r\n\r\n            <div style=\"width: -webkit-fill-available; height: -webkit-fill-available; background-color: #A29465; border-radius: 5px;\">\r\n              <div *ngIf=\"doEditReplyComment[i]!=true\" style=\"padding: 15px;\">\r\n                <span> {{reply.comment}} </span>\r\n              </div>\r\n\r\n              <div *ngIf=\"doEditReplyComment[i]==true\" style=\"display: flex;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                <ion-textarea autocapitalize=\"true\" autoGrow=\"true\" style=\"background-color: #bbaa70a8; border-radius: 5px;\" [(ngModel)]=\"userEditedComment\"></ion-textarea>\r\n                \r\n                <div style=\"display: grid; padding: 5px;\">\r\n                  <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; height: 23px;\" (click)=\"ToSaveEdit($event, comment, i, 'REPLY')\">Save</ion-button>\r\n                  <ion-button shape=\"round\" size=\"small\" style=\"text-transform: none; height: 23px; --background: darkgrey; color: black;\" (click)=\"ToCancelEdit($event, i)\">Cancel</ion-button>\r\n                </div>\r\n    \r\n              </div>\r\n  \r\n              <div style=\"display: flex; justify-content: space-between; padding: 5px 5px 5px 5px;\">\r\n  \r\n                <div>\r\n                  <img src=\"../../assets/icon/lik-2.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"ToLikeReplyComment($event, reply, i)\">\r\n                  <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{reply.total_like_count}} </span>\r\n                </div>\r\n  \r\n                <!-- <div>\r\n                  <img src=\"../../assets/icon/lik-1.png\" alt=\"\" class=\"bottom-small-img-icons\">\r\n                  <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{reply.total_like_count}} </span>\r\n                </div> -->\r\n  \r\n                <div>\r\n                  <img src=\"../../assets/icon/com.png\" alt=\"\" class=\"bottom-small-img-icons\" (click)=\"ToReplyToReplyComment($event, reply, i)\">\r\n                  <span style=\"font-size: 12px; position: relative; bottom: 1px; left: 2px;\"> {{reply.total_like_count}} </span>\r\n                </div>\r\n\r\n                <div (click)=\"ToReplyToReplyComment($event, reply, i)\">\r\n                  <ion-icon name=\"arrow-redo\"></ion-icon>\r\n                  <span style=\"font-size: 10px; position: relative; bottom: 3px;\">Reply</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"reply?.commented_userid === userDetails?.userid\" (click)=\"ToEditReplyComment($event, reply, i)\">\r\n                  <ion-icon name=\"pencil\"></ion-icon>\r\n                  <span style=\"font-size: 10px; position: relative; bottom: 3px;\">Edit</span>\r\n                </div>\r\n    \r\n                <div (click)=\"ToDeleteReplyComment($event, reply, i)\">\r\n                  <ion-icon name=\"trash\"></ion-icon>\r\n                  <span style=\"font-size: 10px; position: relative; bottom: 3px;\">Delete</span>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- comment reply section -->\r\n        </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"doReply==true\" class=\"animate__animated animate__fadeIn\">\r\n  <ion-toolbar>\r\n    <p *ngIf=\"ReplyUserDetails\" style=\"font-size: 13px; color: white; letter-spacing: 0.5px; background-color: #a39465; padding: 5px 15px; border-radius: 20px; margin: 5px 15px;\">Replying to {{ReplyUserDetails.commented_username + '`s'}} comment ...</p>\r\n    <div style=\" display: flex; background-color: white; padding: 0px 15px; letter-spacing: 0.5px; font-size: 13px; font-weight: 600;\">\r\n      <!-- <form [formGroup]=\"ReplyCommentForm\" style=\"display: flex; width: -webkit-fill-available;\" (ngSubmit)=\"toAddReply($event,ReplyArray)\"> -->\r\n      <img [src]=\"ReplyUserDetails.commented_userprofile\" alt=\"\" style=\"border-radius: 50%; height: 30px; width: 30px; margin: 5px;\">\r\n      <ion-input [(ngModel)]=\"userReply\" placeholder=\"Add a reply ...\" autocapitalize=\"true\"> @{{ReplyUserDetails.commented_username}} </ion-input>\r\n      <ion-button style=\"text-transform: none;\" size=\"small\" shape=\"round\" type=\"submit\" (click)=\"ToSendReply()\">Send Reply</ion-button>\r\n    <!-- </form> -->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "XnwO":
/*!***********************************************************!*\
  !*** ./src/app/besties-comment/besties-comment.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-container-item {\n  --background: #79797b;\n}\n\n.top-person-img {\n  border-radius: 50%;\n  border: 1px solid white;\n  height: 40px;\n  width: 39px;\n  margin-top: 10px;\n  margin-bottom: 8px;\n}\n\nh5 {\n  color: white;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.top-left-text {\n  color: white;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n\n.top-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  height: 33px;\n  width: 143px;\n  position: relative;\n  left: 10px;\n}\n\n.add-icon {\n  color: white;\n  font-size: 16px;\n  margin-right: 4px;\n  font-weight: bolder;\n}\n\n.left-profile-img {\n  height: 50px;\n  width: 50px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n}\n\n.left-reply-profile-img {\n  height: 45px;\n  width: 45px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin-left: 7px;\n}\n\n.container {\n  width: 320px;\n  height: 150px;\n  position: relative;\n  float: right;\n  margin-right: 5px;\n}\n\n.top-item {\n  --background: #eeeced;\n  width: -webkit-fill-available;\n  height: 35px;\n}\n\n.person-name-text {\n  font-weight: 600;\n  font-size: 13px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  padding-bottom: 16px;\n  background-color: #eeeced;\n}\n\n.time-text {\n  font-size: 10px;\n  margin-left: 10px;\n  color: black;\n  padding-bottom: 15px;\n}\n\n.content-text {\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.bottom-small-img-icons {\n  height: 13px;\n  width: 15px;\n  margin-left: 15px;\n}\n\n.bottom-right-red-button {\n  font-size: 9px;\n  font-weight: 700;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3RpZXMtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBUEE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQWVKIiwiZmlsZSI6ImJlc3RpZXMtY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lci1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzk3OTdiO1xyXG59XHJcbi50b3AtcGVyc29uLWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbmg1e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4udG9wLWxlZnQtdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnRvcC1yaWdodC1yZWQtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgd2lkdGg6IDE0M3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG4uYWRkLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmxlZnQtcHJvZmlsZS1pbWd7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG4ubGVmdC1yZXBseS1wcm9maWxlLWltZ3tcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnRvcC1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVlY2VkO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlZDtcclxufVxyXG4udGltZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29udGVudC10ZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJvdHRvbS1zbWFsbC1pbWctaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ib3R0b20tcmlnaHQtcmVkLWJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5vZGQtY29udGFpbmVye1xyXG4gICAgIFxyXG59Il19 */");

/***/ }),

/***/ "wpp0":
/*!*******************************************************************!*\
  !*** ./src/app/besties-comment/besties-comment-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BestiesCommentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestiesCommentPageRoutingModule", function() { return BestiesCommentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _besties_comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./besties-comment.page */ "+Jno");




const routes = [
    {
        path: '',
        component: _besties_comment_page__WEBPACK_IMPORTED_MODULE_3__["BestiesCommentPage"]
    }
];
let BestiesCommentPageRoutingModule = class BestiesCommentPageRoutingModule {
};
BestiesCommentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BestiesCommentPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=besties-comment-besties-comment-module-es2015.js.map