(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-match-personal-match-module"],{

/***/ "HR1H":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-match/personal-match.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"this.userDetails.category=='personal'\" style=\"position: relative;right: 25px;\">PERSONAL MATCH</ion-title>\r\n    <ion-title *ngIf=\"this.userDetails.category=='closed'\" style=\"position: relative;right: 25px;\">CLOSED MATCH</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"top-icons-container\">\r\n    <ion-row>\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('image')\">\r\n        <img src=\"../../assets/icon/img.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('video')\">\r\n        <img src=\"../../assets/icon/vid.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('audio')\">\r\n        <img src=\"../../assets/icon/aud.png\" alt=\"\" style=\"height: 17px;width: 15px;\">      \r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('attachment')\">\r\n        <img src=\"../../assets/icon/attach.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 1px solid #bebebf; border-radius: 5px;\" (click)=\"IconCategorize('link')\">\r\n        <img src=\"../../assets/icon/link.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-slides pager=\"true\" #slides style=\"padding: 15px;\">\r\n\r\n    <!-- slide starts here -->\r\n    \r\n    <ion-slide *ngFor=\"let match of PersonalMatch; let i = index\" class=\"animate__animated animate__flipInY\">\r\n      <div *ngIf=\"this.userDetails.category == 'personal'\">\r\n        <div style=\" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;\">\r\n      \r\n          <div style=\"flex:1\">\r\n            <div *ngIf=\"match.compare_data.length == 2\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='image'\" [src]=\"match.compare_data[0].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[0].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[0].media\" class=\"media-container-2\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='image'\" [src]=\"match.compare_data[1].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea  class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[1].media}}</ion-textarea>\r\n\r\n                    <video  class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio  class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].media\" controls(click)=\"imageSlide(match.compare_data)\" ></audio>\r\n\r\n                    <div  class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"match.compare_data.length == 3\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='image'\" [src]=\"match.compare_data[0].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea class = \"media-container-3\" *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[0].media}}</ion-textarea>\r\n\r\n                    <video *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls class = \"media-container-3\" (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class = \"media-container-3\" *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div class = \"media-container-3\" *ngIf=\"match.compare_data[0].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[0].media\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='image'\" [src]=\"match.compare_data[1].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea class = \"media-container-3\" *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[1].media}}</ion-textarea>\r\n\r\n                    <video class = \"media-container-3\" *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class = \"media-container-3\" *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div class = \"media-container-3\" *ngIf=\"match.compare_data[1].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <!-- <img *ngIf=\"match.compare_data[2].image_type==='image' || match.compare_data[2].image_type===''\" [src]=\"match.compare_data[2].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 150px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='image'\" [src]=\"match.compare_data[2].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea class = \"media-container-3\" *ngIf=\"match.compare_data[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[2].media}}</ion-textarea>\r\n\r\n                    <video class = \"media-container-3\" *ngIf=\"match.compare_data[2].media_type==='video'\" [src]=\"match.compare_data[2].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class = \"media-container-3\" *ngIf=\"match.compare_data[2].media_type==='audio'\" [src]=\"match.compare_data[2].media\" controls (click)=\"imageSlide(match.compare_data)\" ></audio>\r\n                    <div class = \"media-container-3\" *ngIf=\"match.compare_data[2].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[2].media\">{{match.compare_data[2].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[2].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[2], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[2].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"match.compare_data.length == 4\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='image'\" [src]=\"match.compare_data[0].media\" (click)=\"imageSlide(match.compare_data)\">\r\n\r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[0].media}}</ion-textarea>\r\n                    \r\n                    <video class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div class=\"media-container-2\" *ngIf=\"match.compare_data[0].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[0].media\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='image'\" [src]=\"match.compare_data[1].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    \r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[1].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n                    <div *ngIf=\"match.compare_data[1].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 30px;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='image'\" [src]=\"match.compare_data[2].media\" (click)=\"imageSlide(match.compare_data)\">\r\n\r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[2].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='video'\" [src]=\"match.compare_data[2].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='audio'\" [src]=\"match.compare_data[2].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div class=\"media-container-2\" *ngIf=\"match.compare_data[2].media_type==='link'\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[2].media\">{{match.compare_data[2].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[2].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[2].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[2], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[2].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"match.compare_data[3].media_type==='image'\" [src]=\"match.compare_data[3].media\" (click)=\"imageSlide(match.compare_data)\">\r\n                    \r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"match.compare_data[3].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(match.compare_data)\">{{match.compare_data[3].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"match.compare_data[3].media_type==='video'\" [src]=\"match.compare_data[3].media\" controls (click)=\"imageSlide(match.compare_data)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"match.compare_data[3].media_type==='audio'\" [src]=\"match.compare_data[3].media\" controls (click)=\"imageSlide(match.compare_data)\"></audio>\r\n\r\n                    <div *ngIf=\"match.compare_data[3].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(match.compare_data)\">\r\n                      <a [href]=\"match.compare_data[3].media\">{{match.compare_data[3].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[3].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[3].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[3], match.match_id)\">\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[3].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>      \r\n          </div>\r\n      \r\n          <div>\r\n            <div style=\"position: relative; bottom: 6%; margin-top: 30px;\">\r\n              <div style=\"font-size: 14px; margin: 0px; font-weight: 600; position: relative; display:flex; justify-content: center;\" (click)=\"imageSlide(match.compare_data)\">\r\n                <p style=\" border:1px solid #ada6a6; padding:10px; border-radius: 10px\" >More detail</p>\r\n              </div>\r\n              \r\n              <img [src]=\"match.compare_data[0].profile\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"border-radius: 50%; height: 40px; width: 40px; border: 1px solid;\">\r\n              <p style=\" font-size: 14px; margin: 0px; font-weight: 600; position: relative;\">{{match.compare_data[0].name}}</p>\r\n      \r\n              <h3> {{match.caption}} </h3>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr\">\r\n            <div style=\"position: relative; margin-top: 40px; background-color: white; width: 35px; height: 35px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;\">\r\n              <img src=\"../../assets/icon/03.png\" alt=\"\" style=\"height: 22px;margin-top: 6px;\" (click)=\"toShowMatchHistory($event,match)\">\r\n            </div>\r\n      \r\n            <div style=\"\">\r\n              <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_commoncomments}} </span>\r\n              <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoPersonalMatchComments($event,match)\">\r\n            </div>\r\n            <div style=\"margin-top: 35px;justify-content: right;display: flex;\">\r\n              <ion-button (click)=\"toViewReceiverMatchImage($event,match)\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match</ion-button>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"this.userDetails.category == 'closed'\">\r\n\r\n        <div *ngFor=\"let item of match.compare_data; let k = index\" style=\"margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;\">\r\n          <div style=\"flex:1\">\r\n            <div *ngIf=\"item.medias.length == 1\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" (click)=\"imageSlide(item.medias)\">\r\n\r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\">{{item.medias[0].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></audio>\r\n\r\n                    <div class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='link'\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[0].media\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 2\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" (click)=\"imageSlide(item.medias)\">\r\n\r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\">{{item.medias[0].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></video>\r\n\r\n                    <audio class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></audio>\r\n\r\n                    <div class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='link'\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[0].media\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='image'\" [src]=\"item.medias[1].media\" (click)=\"imageSlide(item.medias)\">\r\n                    \r\n                    <ion-textarea class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].media\" controls (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].media\" controls (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='link'\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[1].media\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 3\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr;\">\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" (click)=\"imageSlide(item.medias)\">\r\n                    \r\n                    <ion-textarea class=\"media-container-3\" *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\">{{item.medias[0].media}}</ion-textarea>\r\n\r\n                    <video class=\"media-container-3\" *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></video>\r\n\r\n                    <audio class=\"media-container-3\" *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" class=\"media-container-3\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[0].media\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='image'\" [src]=\"item.medias[1].media\" (click)=\"imageSlide(item.medias)\">\r\n                    \r\n                    <ion-textarea *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" (click)=\"imageSlide(item.medias)\" autoGrow style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].image\" controls class=\"media-container-3\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].image\" controls class=\"media-container-3\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[1].media_type==='link'\" class=\"media-container-3\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[1].media\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[2].media_type==='image'\" [src]=\"item.medias[2].media\" (click)=\"imageSlide(item.medias)\">\r\n                    \r\n                    <ion-textarea *ngIf=\"item.medias[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\" style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[2].media_type==='video'\" [src]=\"item.medias[2].media\" controls class=\"media-container-3\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[2].media_type==='audio'\" [src]=\"item.medias[2].media\" controls class=\"media-container-3\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[2].media_type==='link'\" class=\"media-container-3\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[2].media\">{{item.medias[2].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[2].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 4\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" (click)=\"imageSlide(item.medias)\">\r\n                    <!-- <img *ngIf=\"item.medias[0].image_type==='image' || item.medias[0].image_type===''\" [src]=\"item.medias[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" (click)=\"imageSlide(item.medias)\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[1].media_type==='image'\" [src]=\"item.medias[1].media\" (click)=\"imageSlide(item.medias)\">\r\n                    <!-- <img *ngIf=\"item.medias[1].image_type==='image' || item.medias[1].image_type===''\" [src]=\"item.medias[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" (click)=\"imageSlide(item.medias)\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[1].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[1].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[2].media_type==='image'\" [src]=\"item.medias[2].media\" (click)=\"imageSlide(item.medias)\">\r\n                    <!-- <img *ngIf=\"item.medias[2].image_type==='image' || item.medias[2].image_type===''\" [src]=\"item.medias[2].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[2].media_type==='text'\" readonly class=\"text-match-style\" (click)=\"imageSlide(item.medias)\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[2].media_type==='video'\" [src]=\"item.medias[2].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[2].media_type==='audio'\" [src]=\"item.medias[2].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[2].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[2].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[2].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <img class=\"media-container-2\" *ngIf=\"item.medias[3].media_type==='image'\" [src]=\"item.medias[3].media\" (click)=\"imageSlide(item.medias)\">\r\n                    <!-- <img *ngIf=\"item.medias[3].image_type==='image' || item.medias[3].image_type===''\" [src]=\"item.medias[3].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[3].media_type==='text'\" readonly class=\"text-match-style\" autoGrow (click)=\"imageSlide(item.medias)\" style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[3].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[3].media_type==='video'\" [src]=\"item.medias[3].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></video>\r\n                    <audio *ngIf=\"item.medias[3].media_type==='audio'\" [src]=\"item.medias[3].media\" controls class=\"media-container-2\" (click)=\"imageSlide(item.medias)\"></audio>\r\n                    <div *ngIf=\"item.medias[3].media_type==='link'\" class=\"media-container-2\" (click)=\"imageSlide(item.medias)\">\r\n                      <a [href]=\"item.medias[3].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[3].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[3].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div style=\"position: relative; bottom: 6%; margin-top: 30px;\">\r\n              <img [src]=\"match.compare_data[0].profile\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"border-radius: 50%; height: 40px; width: 40px; border: 1px solid;\">\r\n              <p style=\" font-size: 14px; margin: 0px; font-weight: 600; position: relative;\">{{item.user.name}}</p>\r\n              <div style=\"font-size: 14px; margin: 0px; font-weight: 600; position: relative; display:flex; justify-content: center;\" (click)=\"imageSlide(item.medias)\">\r\n                <p style=\" border:1px solid #ada6a6; padding:10px; border-radius: 10px\" >More detail</p>\r\n              </div>\r\n              <h3> {{match.caption}} </h3>\r\n            </div>\r\n      \r\n          </div>\r\n      \r\n          <!-- <div style=\"display: grid; grid-template-columns: 1fr\">\r\n      \r\n            <div style=\"\">\r\n              <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_commoncomments}} </span>\r\n              <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoPersonalMatchComments($event,match)\">\r\n            </div>\r\n            <div *ngIf=\"this.userDetails.category!='closed'\" style=\"margin-top: 35px;justify-content: right;display: flex;\">\r\n              <ion-button (click)=\"toViewReceiverMatchImage($event,match)\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match</ion-button>\r\n            </div>\r\n            \r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    \r\n    </ion-slide>\r\n    \r\n\r\n<!-- slide ends here -->\r\n\r\n  </ion-slides>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "OEWt":
/*!*********************************************************!*\
  !*** ./src/app/personal-match/personal-match.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonalMatchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchPageModule", function() { return PersonalMatchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "gMqc");
/* harmony import */ var _personal_match_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-match-routing.module */ "tUvZ");
/* harmony import */ var _personal_match_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-match.page */ "Q041");








let PersonalMatchPageModule = class PersonalMatchPageModule {
};
PersonalMatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _personal_match_routing_module__WEBPACK_IMPORTED_MODULE_6__["PersonalMatchPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxIonicImageViewerModule"]
        ],
        declarations: [_personal_match_page__WEBPACK_IMPORTED_MODULE_7__["PersonalMatchPage"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["SenderPopoverComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["ReceiverPopoverComponent"],
            _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["SendMatchComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["RevealedCountComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["CountComponent"]]
    })
], PersonalMatchPageModule);



/***/ }),

/***/ "Q041":
/*!*******************************************************!*\
  !*** ./src/app/personal-match/personal-match.page.ts ***!
  \*******************************************************/
/*! exports provided: PersonalMatchPage, RevealedCountComponent, CountComponent, PopoverComponent, SenderPopoverComponent, ReceiverPopoverComponent, SendMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchPage", function() { return PersonalMatchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealedCountComponent", function() { return RevealedCountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountComponent", function() { return CountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderPopoverComponent", function() { return SenderPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverPopoverComponent", function() { return ReceiverPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMatchComponent", function() { return SendMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_match_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-match.page.html */ "HR1H");
/* harmony import */ var _personal_match_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-match.page.scss */ "mcEP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/config */ "82od");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "4zgz");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "Pn9U");











// import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';







// const { Camera, Filesystem } = Plugins;
let PersonalMatchPage = class PersonalMatchPage {
    constructor(storageservice, popoverController, modalController, common, androidPermissions, fileChooser, transfer, filePath, mediaCapture, camera, platform) {
        this.storageservice = storageservice;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.common = common;
        this.androidPermissions = androidPermissions;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.mediaCapture = mediaCapture;
        this.camera = camera;
        this.platform = platform;
        this.userDetails = [];
        this.PersonalMatch = [];
        this.common.route.queryParams.subscribe((resp) => {
            this.userDetails = resp;
            this.personalMatchSlideIndex = this.userDetails.personalMatchSlideIndex;
        });
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetail = val;
        });
    }
    ngOnInit() {
        if (this.common.platform.is("cordova" || false)) {
            this.common.platform.ready().then(() => {
                this.filePermission();
            });
        }
    }
    filePermission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE));
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        });
    }
    ionViewWillEnter() {
        // this.common.showLoader();
        this.common.presentLoading();
        this.slides.updateAutoHeight();
        this.slides.update();
        if (this.userDetails.category == "personal") {
            let params = {
                userid: this.userDetails.userid
            };
            this.common.postMethod('PersonalMatch', params).then((res) => {
                this.PersonalMatch = res.details;
                this.slides.slideTo(this.personalMatchSlideIndex);
                this.common.hideLoader();
            }, (err) => {
                this.ionViewWillEnter();
                this.common.hideLoader();
            });
        }
        else if (this.userDetails.category == "closed") {
            let params = {
                userid: this.userDetails.userid
            };
            this.common.postMethod('ClosedMatch', params).then((res) => {
                this.PersonalMatch = res.details;
                this.slides.slideTo(this.personalMatchSlideIndex);
                this.common.hideLoader();
            }, (err) => {
                this.ionViewWillEnter();
                this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
                this.common.hideLoader();
            });
        }
        // });
    }
    imageSlide(match) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const popover = await this.popoverController.create({
            //   component: ItemSliderComponent,
            //   cssClass: 'my-custom-class',
            //   componentProps:{key: match},
            //   translucent: true,
            //   backdropDismiss: true,
            //   animated: false
            // });
            // return await popover.present();
            console.log(match);
            this.common.router.navigate(['/personal-item-slider'], { queryParams: { match: JSON.stringify(match) } });
        });
    }
    gotoPersonalMatchComments(e, match) {
        match.matchType = 'PERSONAL';
        this.common.navCtrl.navigateForward(['/comments'], { queryParams: match });
    }
    ToSendReceiverLike(e, match, match_id) {
        if (this.userDetails.category === 'personal') {
            let params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                image_liked: match.image_id,
            };
            this.common.postMethod('personallike', params).then((res) => {
                // this.userDetails.fileType = match.receiver_image_type;
                this.ionViewWillEnter();
            }, (err) => {
            });
        }
        else {
            let params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                contestentid: match.id,
                status: 'like'
            };
            this.common.postMethod('Like', params).then((res) => {
                this.ionViewWillEnter();
            }, err => {
            });
        }
    }
    ToSendSenderLike(e, match, match_id) {
        if (this.userDetails.category === 'personal') {
            let params = {
                user_liked: this.userDetail.userid,
                matchid: match_id,
                image_id: match.media_id,
            };
            this.common.postMethod('personallike', params).then((res) => {
                this.ionViewWillEnter();
            }, (err) => {
                console.log(err.headers);
            });
        }
        else {
            let params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                contestentid: match.id,
                status: 'like'
            };
            this.common.postMethod('Like', params).then((res) => {
                this.ionViewWillEnter();
            }, err => {
                console.log('Error:', err);
            });
        }
    }
    toShowMatchHistory(ev, match) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: PopoverComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: match },
                translucent: true,
                backdropDismiss: true,
                animated: true
            });
            return yield popover.present();
        });
    }
    IconCategorize(cat) {
        if (this.userDetail.category === 'personal') {
            if (cat === 'image') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    this.PersonalMatch = res.details.image;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no image Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' image Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'video') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    this.PersonalMatch = res.details.video;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no video Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' video Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'audio') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    this.PersonalMatch = res.details.audio;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no audio Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' audio Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'attachment') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    this.PersonalMatch = res.details.text;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no text Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' text Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'link') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    this.PersonalMatch = res.details.link;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no link Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' link Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
        }
        else {
            if (cat === 'image') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    this.PersonalMatch = res.details.image;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no image Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' image Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'video') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    this.PersonalMatch = res.details.video;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no video Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' video Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'audio') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    this.PersonalMatch = res.details.audio;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no audio Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' audio Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'attachment') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    this.PersonalMatch = res.details.text;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no text Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' text Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
            else if (cat === 'link') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    this.PersonalMatch = res.details.link;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no link Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' link Personal Matches');
                    }
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
        }
    }
    openRevealedCount(i, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: RevealedCountComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: this.PersonalMatch[i], type },
                translucent: true,
                backdropDismiss: true,
                animated: false
            });
            return yield popover.present();
        });
    }
    openCount(i, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: CountComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: this.PersonalMatch[i], type },
                translucent: true,
                backdropDismiss: true,
                animated: false
            });
            return yield popover.present();
        });
    }
    toViewSenderMatchImage(ev, match) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.modalController.create({
                component: SenderPopoverComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: match, userType: this.userDetails.userType },
                // translucent: true,
                backdropDismiss: true,
                animated: false
            });
            return yield popover.present();
        });
    }
    toViewReceiverMatchImage(ev, match) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.modalController.create({
                component: ReceiverPopoverComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: match, userType: this.userDetails.userType },
                // translucent: true,
                backdropDismiss: true,
                animated: false
            });
            return yield popover.present();
        });
    }
};
PersonalMatchPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_12__["MediaCapture"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
PersonalMatchPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides', { static: true },] }]
};
PersonalMatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-personal-match',
        template: _raw_loader_personal_match_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_match_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonalMatchPage);

let RevealedCountComponent = class RevealedCountComponent {
    //  userDetails: any;
    constructor(popoverController, common, navParams) {
        this.popoverController = popoverController;
        this.common = common;
        this.navParams = navParams;
        this.Match = [];
        this.Match = this.navParams.get('key');
        this.type = this.navParams.get('type');
    }
    ionViewWillEnter() { }
};
RevealedCountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
RevealedCountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Revealed Count </h4>
          <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
            <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
            <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->
            <ion-row>
              <ion-col>
                <div style="background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
                <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>
                <p *ngFor="let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname"> {{l.loser_name}} </p>
              </ion-col>

              <ion-col>
                <div style="background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
                <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>
                <p *ngFor="let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname"> {{w.winner_name}} </p>
              </ion-col>
            </ion-row>

          </div>
        </div>
   `
    })
], RevealedCountComponent);

let CountComponent = class CountComponent {
    //  userDetails: any;
    constructor(popoverController, common, navParams) {
        this.popoverController = popoverController;
        this.common = common;
        this.navParams = navParams;
        this.Match = [];
        this.Match = this.navParams.get('key');
        this.type = this.navParams.get('type');
    }
    ionViewWillEnter() { }
    openRevealedCount(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popoverController.dismiss();
            const navigationExtras = {
                state: {
                    data: this.Match,
                    type
                }
            };
            this.common.router.navigate(['personal-match-revealed'], navigationExtras);
            // this.common.router.navigate(['/personal-match-revealed'], {queryParams: this.userDetails});
            // const popover = await this.popoverController.create({
            //   component: RevealedCountComponent,
            //   cssClass: 'my-custom-class',
            //   componentProps:{key: this.Match, type},
            //   translucent: true,
            //   backdropDismiss: true,
            //   animated: false
            // });
            // return await popover.present();
        });
    }
};
CountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
CountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
      <div style=" text-align: center; ">
        <h4 style=" font-weight: 600; "> Count </h4>
        <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
          <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
          <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
          <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
          <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->
          <!-- <ion-row>
            <ion-col>
              <div style="background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
              <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>
              <p *ngFor="let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname"> {{l.loser_name}} </p>
            </ion-col>

            <ion-col>
              <div style="background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
              <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>
              <p *ngFor="let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname"> {{w.winner_name}} </p>
            </ion-col>
          </ion-row> -->

           <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_image_win : Match.sender_image_win}} Wins</p>
          <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_image_loss : Match.sender_image_loss}} Lost</p>

          <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_anonymous_count : Match.sender_anonymous_count}} Anonymous</p>
          <p (click)="openRevealedCount('sender')" style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_reveal_count : Match.sender_reveal_count}} Revealed</p>

        </div>
      </div>
  `
    })
], CountComponent);

let PopoverComponent = class PopoverComponent {
    //  userDetails: any;
    constructor(popoverController, common, navParams) {
        this.popoverController = popoverController;
        this.common = common;
        this.navParams = navParams;
        this.Match = [];
        this.Match = this.navParams.get('key');
    }
    ionViewWillEnter() { }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Match History </h4>
          <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
            <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
            <p>Total Hours : <span> {{Match.time_duration}} </span> </p>
          </div>
        </div>
   `
    })
], PopoverComponent);

let SenderPopoverComponent = class SenderPopoverComponent {
    constructor(popoverController, storageservice, common, formbuilder, navParams) {
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.common = common;
        this.formbuilder = formbuilder;
        this.navParams = navParams;
        this.FormSubmit = false;
        this.userCaption = {
            "caption": "",
        };
        this.Match = [];
        this.MatchThisForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1),
                ])],
        });
        this.caption = this.MatchThisForm.controls['caption'];
        this.Match = this.navParams.get('key');
        this.userType = this.navParams.get('userType');
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    ionViewWillEnter() { }
    sendMatch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: SendMatchComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: this.Match, userType: 'sender' },
                translucent: true,
                backdropDismiss: true,
                animated: false
            });
            return yield popover.present();
        });
    }
    ToSendMatch(e, m) {
        let params = {
            userid: this.userDetails.userid,
            caption: this.userCaption.caption
        };
        this.common.postMethod('abc', params).then((res) => {
            console.log('res:', res);
        }, (err) => {
            this.common.presentToast('This area is under Development');
            this.MatchThisForm.reset();
            console.log('Error:', err);
        });
    }
};
SenderPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
SenderPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Your Second Image </h4>
          <div style=" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;">
            <div>
                <img [src]="Match.sender_image" alt="" onerror="this.src='../../assets/icon/no_media.png';">
            </div>

            <div style="display: flex; justify-content: space-between;">

            <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;">
            <img src="../../assets/icon/03.png" alt=""> <span style="font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;"> {{Match.sender_reveal_count}} </span>
            </div>

            <ion-button *ngIf="userType==='visitor'" (click)="sendMatch()" shape="round" size="small" style="text-transform: none;">Match This</ion-button>
            
          </div>
          </div>
        </div>
  `
    })
], SenderPopoverComponent);

let ReceiverPopoverComponent = class ReceiverPopoverComponent {
    constructor(popoverController, modalController, common, navParams) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.common = common;
        this.navParams = navParams;
        this.Match = [];
        this.selectItem = [];
        this.Match = this.navParams.get('key');
        this.userType = this.navParams.get('userType');
        this.selectItem = [];
    }
    ionViewWillEnter() { }
    sendMatch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectItem.length > 0) {
                this.selectItem.filter((a, b) => this.selectItem.indexOf(a) === b);
                this.selectItem.sort();
                const popover = yield this.modalController.create({
                    component: SendMatchComponent,
                    cssClass: 'my-custom-class',
                    componentProps: { key: this.Match, userType: 'receiver', selectItem: this.selectItem },
                    // translucent: true,
                    backdropDismiss: true,
                    animated: false
                });
                return yield popover.present();
            }
            else {
                this.common.showAlertSuccess('Please select Image');
                return;
            }
        });
    }
    dismissButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    selectImage(e, index) {
        if (e.target.style.border != "") {
            this.selectItem.splice(this.selectItem.indexOf(index), 1);
            e.target.style.border = "";
        }
        else {
            this.selectItem.push(index);
            e.target.style.border = "3px solid #50c8ff";
        }
    }
};
ReceiverPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
ReceiverPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="dismissButton()">
            <img src='../../assets/icon/back.png' alt="" style="width:10px; height: 18px;">
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    <div style=" text-align: center; ">
      <h4 style=" font-weight: 600; "> This Match </h4>
      <div style=" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;">
        <div *ngIf="Match.compare_data.length == 2">
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngFor="let item of Match.compare_data; let i = index">
              <div *ngIf="item.media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">{{item.media}}</div>
              <img *ngIf="item.media_type==='image' || item.media_type===''" [src]="item.media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)" />
              <img *ngIf="item.media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">
              <audio *ngIf="item.media_type==='audio'" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)"></audio>
              <div *ngIf="item.media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">
                <a [href]="item.media">{{item.media}}</a>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="Match.compare_data.length == 3">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;">
              <div *ngFor="let item of Match.compare_data; let i = index">
                <div *ngIf="item.media_type==='text'" readonly class="text-match-style" autoGrow style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">{{item.media}}</div>
                <img *ngIf="item.media_type==='image' || item.media_type===''" [src]="item.media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                <img *ngIf="item.media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                <audio *ngIf="item.media_type==='audio'" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)"></audio>
                <div *ngIf="item.media_type==='link'" style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                  <a [href]="item.media">{{item.media}}</a>
                </div>
              </div>
          </div>
        </div>

        <div *ngIf="Match.compare_data.length == 4">
          <div style="display: grid; grid-template-columns: 1fr 1fr;margin-top: 10px;">
            <div *ngIf="Match.compare_data[0].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">{{Match.compare_data[0].media}}</div>
            <img *ngIf="Match.compare_data[0].media_type==='image' || Match.compare_data[0].media_type===''" [src]="Match.compare_data[0].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
            <img *ngIf="Match.compare_data[0].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
            <audio *ngIf="Match.compare_data[0].media_type==='audio'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></audio>
            <div *ngIf="Match.compare_data[0].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
              <a [href]="Match.compare_data[0].media">{{Match.compare_data[0].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[1].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">{{Match.compare_data[1].media}}</div>
            <img *ngIf="Match.compare_data[1].media_type==='image' || Match.compare_data[1].media_type===''" [src]="Match.compare_data[1].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <img *ngIf="Match.compare_data[1].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <audio *ngIf="Match.compare_data[1].media_type==='audio'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></audio>
            <div *ngIf="Match.compare_data[1].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
              <a [href]="Match.compare_data[1].media">{{Match.compare_data[1].media}}</a>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngIf="Match.compare_data[2].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">{{Match.compare_data[2].media}}</div>
            <img *ngIf="Match.compare_data[2].media_type==='image' || Match.compare_data[2].media_type===''" [src]="Match.compare_data[2].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <img *ngIf="Match.compare_data[2].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <audio *ngIf="Match.compare_data[2].media_type==='audio'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></audio>
            <div *ngIf="Match.compare_data[2].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
              <a [href]="Match.compare_data[2].media">{{Match.compare_data[2].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[3].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">{{Match.compare_data[3].media}}</div>
            <img *ngIf="Match.compare_data[3].media_type==='image' || Match.compare_data[3].media_type===''" [src]="Match.compare_data[3].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <img *ngIf="Match.compare_data[3].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <audio *ngIf="Match.compare_data[3].media_type==='audio'" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)"></audio>
            <div *ngIf="Match.compare_data[3].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
              <a [href]="Match.compare_data[3].media">{{Match.compare_data[3].media}}</a>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between;">

          <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;">
          <img src="../../assets/icon/03.png" alt=""> <span style="font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;"> {{Match.receiver_reveal_count}} </span>
          </div>

          <ion-button *ngIf="userType==='visitor'" (click)="sendMatch()" shape="round" size="small" style="text-transform: none;">Match This</ion-button>
        </div>

      </div>
    </div>
    </ion-content>
    `
    })
], ReceiverPopoverComponent);

let SendMatchComponent = class SendMatchComponent {
    constructor(popoverController, modalController, actionSheetCtrl, storageservice, mediaCapture, fileChooser, filePath, transfer, common, formbuilder, navParams, http, actionSheetController, androidPermissions, camera, platform) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storageservice = storageservice;
        this.mediaCapture = mediaCapture;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.transfer = transfer;
        this.common = common;
        this.formbuilder = formbuilder;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.androidPermissions = androidPermissions;
        this.camera = camera;
        this.platform = platform;
        this.FormSubmit = false;
        this.userCaption = {
            "caption": "",
        };
        this.selectedFiles = [];
        this.anArray = [];
        this.wordArray = [];
        this.linkArray = [];
        this.myFiles = [];
        this.urls = [];
        this.Match = [];
        this.selectItem = [];
        this.matchIds = [];
        this.FileTransferResponse = [];
        this.isLink = false;
        this.hideImageSpace = true;
        this.isWordings = false;
        this.isVideo = false;
        this.isAudio = false;
        this.isImage = false;
        this.fileArray = [];
        this.MatchThisForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1),
                ])],
        });
        this.caption = this.MatchThisForm.controls['caption'];
        this.Match = this.navParams.get('key');
        this.userType = this.navParams.get('userType');
        this.selectItem = this.navParams.get('selectItem');
        this.storageservice.storage.get('userDetails').then((val) => {
            this.userDetails = val;
        });
    }
    ionViewWillEnter() {
        for (var i = 0; i < this.selectItem.length; i++) {
            this.matchIds.push(this.Match.compare_data[this.selectItem[i]].media_id);
        }
        this.isCaptureImage = false;
        this.hideImageSpace = true;
    }
    dismissButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    Add(type) {
        if (this.anArray.length >= 2) {
            this.common.showAlert('Maximum is 2 items');
            return;
        }
        if (type == 'link') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'link') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'text') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'text') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
        if (type == 'file') {
            let position = 0;
            for (let i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'file') {
                    position++;
                }
            }
            this.anArray.push({ 'value': '', 'type': type, position: position });
        }
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetCtrl.create({
                header: ' Choose A Media To Upload For Closed Match',
                buttons: [
                    {
                        text: 'Send Wordings',
                        icon: 'text',
                        handler: () => {
                            this.wordArray.push({ value: '' });
                            this.Add('text');
                            this.SendWordings();
                        }
                    },
                    {
                        text: 'Share Links',
                        icon: 'link',
                        handler: () => {
                            this.linkArray.push({ value: 'http://' });
                            this.Add('link');
                            this.PickLinks();
                        }
                    },
                    {
                        text: 'Capture Image',
                        icon: 'camera',
                        handler: () => {
                            this.CaptureImage();
                            // this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Capture Video',
                        icon: 'videocam',
                        handler: () => {
                            this.CaptureVideo();
                            // this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Capture Audio',
                        icon: 'mic-circle',
                        handler: () => {
                            this.anArray.push({ value: '', type: 'audio' });
                            this.CaptureAudio();
                        }
                    },
                    {
                        text: 'Other Files',
                        icon: 'folder-open',
                        handler: () => {
                            this.PickDocuments();
                        }
                    },
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    SendWordings() {
        this.isWordings = true;
        this.hideImageSpace = false;
        this.isLink = false;
    }
    PickLinks() {
        this.isLink = true;
        this.isWordings = false;
        this.hideImageSpace = false;
    }
    CaptureImage() {
        const options = { limit: 1 };
        this.mediaCapture.captureImage(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'jpg'
            });
        }, (err) => console.error(err));
    }
    CaptureVideo() {
        const options = { limit: 1, duration: 120, quality: 80 };
        this.mediaCapture.captureVideo(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp4'
            });
        }, (err) => console.error(err));
    }
    CaptureAudio() {
        const options = { limit: 1 };
        this.mediaCapture.captureAudio(options)
            .then((data) => {
            this.Add('file');
            this.fileArray.push({
                name: data[0].name,
                filePath: data[0].fullPath,
                fileType: 'mp3'
            });
        }, (err) => console.error(err));
    }
    PickDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fileChooser.open().then(uri => {
                this.filePath.resolveNativePath(uri).then(filePath => {
                    this.filesPath = filePath;
                    this.filesName = this.filesPath.substring(this.filesPath.lastIndexOf("/") + 1);
                    this.filesType = this.filesName.substring(this.filesName.lastIndexOf(".") + 1);
                    this.Add('file');
                    this.fileArray.push({
                        name: this.filesName,
                        type: this.filesType,
                        uri: uri,
                        filePath: filePath
                    });
                }, err => {
                    console.log(err);
                    throw err;
                });
            }, err => {
                console.log(err);
                throw err;
            });
        });
    }
    uploadFile2(file, type) {
        let options;
        options = {
            fileKey: "matchfile",
            fileName: file.name,
            httpMethod: 'POST',
            mimeType: 'multipart/form-data',
            chunkedMode: false,
            params: {
                rival_userid: this.userDetails.userid,
                opponent_userid: this.Match.senderid,
                personal_matchid: this.Match.match_id,
                // match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
                match_filename: this.userType === 'sender' ? this.Match.sender_image_type : this.Match.receiver_image_type,
                caption: this.closedMatchCaption,
                link: '',
                text: '',
                match_link: '',
                match_text: '',
                seen_status: '1',
                select_medis: JSON.stringify(this.matchIds),
            },
            headers: {
                Connection: 'close'
            }
        };
        let filePath;
        if (type !== 'audio') {
            filePath = encodeURI(file.fullPath);
        }
        else {
            filePath = file.fullPath;
        }
        this.common.showLoader();
        const fileTransfer = this.transfer.create();
        const fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_13__["baseUrl"] + 'iMatch/api/v1/create_closedmatch';
        fileTransfer.onProgress((e) => {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
            this.common.presentToast('Uploaded ' + prg + '% of file');
        });
        const formData = new FormData();
        for (let i = 0; i < this.myFiles.length; i++) {
            formData.append("filename[]", this.myFiles[i]);
        }
        this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_13__["baseUrl"] + 'iMatch/api/v1/create_closedmatch', formData).subscribe((res) => {
            if (res['message'] === 'Successfully uploaded') {
                this.common.presentToast('File Uploaded Successful');
                this.common.router.navigate(['tabs/tab6']);
            }
            else {
                this.common.presentToast('File Upload Failed !!!');
            }
        }, err => {
            console.log('err', err);
        });
        fileTransfer.upload(filePath, fileUplaodUrl, options)
            .then((data) => {
            let res = JSON.parse(data.response);
            if (res.file_extension === 'mp4') {
                this.isVideo = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'aac') {
                this.isAudio = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'png') {
                this.isImage = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'jpg') {
                this.isImage = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'mp3') {
                this.isAudio = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            if (res.status == true) {
                this.common.showAlertSuccess('Match File Upload Successful');
                // this.FileTransferResponse = res.upload_details;
                this.FileTransferResponse = res;
                this.common.hideLoader();
            }
            else {
                this.common.presentToast('File upload Failed');
                console.log('File Transfer Error');
                this.common.hideLoader();
            }
            // this.FileTransferResponse = data;
        }, (err) => {
            console.log('File Transfer Error:', err);
        });
    }
    ToSendMatch(e) {
        this.common.showLoader();
        let params = {
            rival_userid: this.userDetails.userid,
            opponent_userid: this.Match.compare_data[0].id,
            personal_matchid: this.Match.match_id,
            caption: this.closedMatchCaption,
            link: JSON.stringify(this.linkArray),
            text: JSON.stringify(this.wordArray),
            sub_captions: JSON.stringify(this.anArray),
            seen_status: '0',
            select_medias: JSON.stringify(this.matchIds),
        };
        this.common.postMethod('create_closedmatch', params).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.status === true) {
                // this.common.presentToast(' Your closed match invitaion send successfully ');
                // this.popoverController.dismiss();
                var matchid = res['matchid'];
                this.fileArray.forEach(item => {
                    const fileTransfer = this.transfer.create();
                    fileTransfer.onProgress((e) => {
                        let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
                        this.common.presentToast('Uploaded ' + prg + '% of file');
                    });
                    let options = {
                        fileKey: 'matchfile',
                        fileName: item.name,
                        httpMethod: 'POST',
                        mimeType: 'multipart/form-data',
                        chunkedMode: false,
                        params: {
                            match_id: matchid,
                            userid: this.userDetails.userid
                        },
                        headers: {
                            Connection: 'close'
                        }
                    };
                    fileTransfer.upload(item.filePath, _services_config__WEBPACK_IMPORTED_MODULE_13__["baseUrl"] + 'iMatch/api/v1/MatchFileUpload', options)
                        .then((data) => {
                        console.dir('*****************' + data);
                    }, (err) => {
                        console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));
                    });
                });
                this.common.presentToast('File Uploaded Successful');
                this.common.presentToast(' Your closed match invitaion send successfully ');
                this.popoverController.dismiss();
                this.common.hideLoader();
            }
            else {
                this.common.presentToast(' Your closed match invitaion sending failed ');
            }
            yield this.common.hideLoader();
        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.common.hideLoader();
            console.log('err:', err);
            this.popoverController.dismiss();
        }));
    }
};
SendMatchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_12__["MediaCapture"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_14__["AndroidPermissions"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
SendMatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="dismissButton()">
            <img src='../../assets/icon/back.png' alt="" style="width:10px; height: 18px;">
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
       <div>
        <div style="text-align: center; padding: 5px;">
          <h4 style="font-weight: 600;">Match This</h4>
          <div style=" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;">
            <div *ngIf="this.selectItem.length == 1">
              <div>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 2">
              <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 3">
              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[2]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''" [src]="this.Match.compare_data[this.selectItem[2]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[2]].media">{{this.Match.compare_data[this.selectItem[2]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 4">
              <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[2]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''" [src]="this.Match.compare_data[this.selectItem[2]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[2]].media">{{this.Match.compare_data[this.selectItem[2]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[3]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='image' || this.Match.compare_data[this.selectItem[3]].media_type===''" [src]="this.Match.compare_data[this.selectItem[3]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[3]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[3]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[3]].media">{{this.Match.compare_data[this.selectItem[3]].media}}</a>
                </div>
              </div>
            </div>
          </div>
          <div style="padding: 5px; border: 2px solid grey; border-radius: 5px; text-align: center;">

            <ion-input [(ngModel)]="closedMatchCaption" placeholder="Enter Caption" autocapitalize="true" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>
            
            <div *ngFor="let att of this.anArray; let idx = index">
              <div *ngIf="att.type=='file'">
                <p style="font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;"> {{this.fileArray[att.position].name}} </p>
              </div>
              <div *ngIf="att.type=='text'">
                <ion-input type="text" placeholder="" [(ngModel)]="wordArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <div *ngIf="att.type=='link'">
                <ion-input type="text" placeholder="" [(ngModel)]="linkArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
            </div>
            
            <img src="../../assets/icon/bg2new.png" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" (click)="presentActionSheet()">

            <ion-row style="border: 1px solid transparent; height: 47px;">
              <ion-label style="position: relative; top: 8px; margin-right: 15px;">Make it Anonymous</ion-label>
              <ion-toggle [(ngModel)]="isAnonymous"></ion-toggle>
            </ion-row>
            <div style="display: flex; justify-content: space-between;">

            <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px;">
              <ion-button shape="round" size="small" (click)="dismissButton()" style="text-transform: none;">cancel</ion-button>
            </div>

            <ion-button type="submit" shape="round" size="small" (click)="ToSendMatch($event)" style="text-transform: none;">proceed</ion-button>
            </div>
            
          </div>
        </div>
      </div>
    </ion-content>
  `
    })
], SendMatchComponent);



/***/ }),

/***/ "mcEP":
/*!*********************************************************!*\
  !*** ./src/app/personal-match/personal-match.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 25px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.media-container-2 {\n  width: 100%;\n  height: 150px;\n  border-radius: 7px;\n}\n\n.media-container-3 {\n  width: 100%;\n  height: 150px;\n  border-radius: 7px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\nion-slide > :first-child {\n  width: 100%;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -15px;\n  left: 0;\n  width: 100%;\n}\n\n.text-match-style {\n  background-color: #70707269;\n  padding: 7px;\n  border-radius: 10px;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  width: 175px;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLW1hdGNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNVLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFnQlY7O0FBZEE7RUFDSSx5QkFBQTtBQWlCSjs7QUFYQTtFQUNJLFdBQUE7QUFjSjs7QUFaQTs7O0VBSUksYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBY0o7O0FBWkE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFlSjs7QUFWTTs7O0VBQ0csWUFBQTtBQWVUIiwiZmlsZSI6InBlcnNvbmFsLW1hdGNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaWNvbnMtY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4uY29sLWljb257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmViZWJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcblxyXG59XHJcbi5tYWluLWltZ3tcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMTY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxufVxyXG4ubWVkaWEtY29udGFpbmVyLTJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLm1lZGlhLWNvbnRhaW5lci0ze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbi52cy1pbWd7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTA0cHg7XHJcbiAgICBtYXJnaW46IDBweCAtMTRweCAwcHggLTI1cHg7O1xyXG59XHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcbi50aHVtbmFpbC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5oNntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdGFyLWljb24tbmVhci1uYW1le1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDY3cHg7XHJcbiAgICByaWdodDogMjZweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1yaWdodHtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwcHhcclxufVxyXG4uYm90dG9tLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM4MDgwODAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3R0b20tY2xvY2staW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcbi8vIGlvbi1zbGlkZSB7XHJcbi8vICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgXHJcbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1tYXRjaC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI2OTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxufVxyXG4gIC5tZCxcclxuICAuaW9zLFxyXG4gIC53cCB7XHJcbiAgICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgICAgICAgIHdpZHRoOiAxMDBweDsvL3lvdXIgd2lkdGggaGVyZVxyXG4gICAgIH1cclxuICAgfSJdfQ== */");

/***/ }),

/***/ "tUvZ":
/*!*****************************************************************!*\
  !*** ./src/app/personal-match/personal-match-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PersonalMatchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalMatchPageRoutingModule", function() { return PersonalMatchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _personal_match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-match.page */ "Q041");




const routes = [
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["PersonalMatchPage"]
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["SenderPopoverComponent"],
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["ReceiverPopoverComponent"],
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["SendMatchComponent"],
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["RevealedCountComponent"],
    },
    {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["CountComponent"],
    }
];
let PersonalMatchPageRoutingModule = class PersonalMatchPageRoutingModule {
};
PersonalMatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalMatchPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=personal-match-personal-match-module-es2015.js.map