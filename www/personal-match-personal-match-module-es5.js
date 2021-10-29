(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-match-personal-match-module"], {
    /***/
    "HR1H":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-match/personal-match.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function HR1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"this.userDetails.category=='personal'\" style=\"position: relative;right: 25px;\">PERSONAL MATCH</ion-title>\r\n    <ion-title *ngIf=\"this.userDetails.category=='closed'\" style=\"position: relative;right: 25px;\">CLOSED MATCH</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"top-icons-container\">\r\n    <ion-row>\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('image')\">\r\n        <img src=\"../../assets/icon/img.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('video')\">\r\n        <img src=\"../../assets/icon/vid.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('audio')\">\r\n        <img src=\"../../assets/icon/aud.png\" alt=\"\" style=\"height: 17px;width: 15px;\">      \r\n      </ion-col>\r\n\r\n      <ion-col class=\"col-icon\" (click)=\"IconCategorize('attachment')\">\r\n        <img src=\"../../assets/icon/attach.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 1px solid #bebebf; border-radius: 5px;\" (click)=\"IconCategorize('link')\">\r\n        <img src=\"../../assets/icon/link.png\" alt=\"\" style=\"height: 17px;width: 15px;\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-slides pager=\"true\" #slides style=\"padding: 15px;\">\r\n\r\n    <!-- slide starts here -->\r\n    \r\n    <ion-slide *ngFor=\"let match of PersonalMatch; let i = index\" class=\"animate__animated animate__flipInY\">\r\n      <div *ngIf=\"this.userDetails.category == 'personal'\">\r\n        <div style=\" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;\">\r\n      \r\n          <div style=\"flex:1\">\r\n            <div *ngIf=\"match.compare_data.length == 2\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[0].media_type==='image' || match.compare_data[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[0].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"match.compare_data[0].image_type==='image' || match.compare_data[0].image_type===''\" [src]=\"match.compare_data[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[0].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <!-- <img *ngIf=\"match.compare_data[1].image_type==='image' || match.compare_data[1].image_type===''\" [src]=\"match.compare_data[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[1].media_type==='image' || match.compare_data[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[1].media\"\r\n                    style=\"width: 150px;height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width: 150px;height: 90px; border-radius: 7px;\">{{match.compare_data[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 150px;height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 150px;height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[1].media_type==='link'\" style=\"width: 150px;height: 90px; border-radius: 7px;\">\r\n                    <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"match.compare_data.length == 3\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <!-- <img *ngIf=\"match.compare_data[0].image_type==='image' || match.compare_data[0].image_type===''\" [src]=\"match.compare_data[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 150px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[0].media_type==='image' || match.compare_data[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[0].media\"\r\n                    style=\"width: 120px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; width: 120px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[0].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[0].media\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <!-- <img *ngIf=\"match.compare_data[1].image_type==='image' || match.compare_data[1].image_type===''\" [src]=\"match.compare_data[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 150px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[1].media_type==='image' || match.compare_data[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[1].media\"\r\n                    style=\"width: 120px;height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[1].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <!-- <img *ngIf=\"match.compare_data[2].image_type==='image' || match.compare_data[2].image_type===''\" [src]=\"match.compare_data[2].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 150px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[2].media_type==='image' || match.compare_data[2].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[2].media\"\r\n                    style=\"width: 120px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; width: 120px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[2].media_type==='video'\" [src]=\"match.compare_data[2].media\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[2].media_type==='audio'\" [src]=\"match.compare_data[2].media\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[2].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[2].media\">{{match.compare_data[2].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[2].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[2], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[2].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"match.compare_data.length == 4\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[0].media_type==='image' || match.compare_data[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[0].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"match.compare_data[0].image_type==='image' || match.compare_data[0].image_type===''\" [src]=\"match.compare_data[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; width: 150px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" controls style=\"min-height: 255px; width: 185px;\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[0].media_type==='audio'\" [src]=\"match.compare_data[0].media\" controls style=\"min-height: 185px; width: 165px;\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[0].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{match.compare_data[0].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[0].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[0].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[0], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[0].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <!-- <img *ngIf=\"match.compare_data[1].image_type==='image' || match.compare_data[1].image_type===''\" [src]=\"match.compare_data[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[1].media_type==='image' || match.compare_data[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[1].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; width: 150px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[1].media_type==='audio'\" [src]=\"match.compare_data[1].image\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[1].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                    <a [href]=\"match.compare_data[1].media\">{{match.compare_data[1].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[1].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[1].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[1], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[1].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 30px;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[2].media_type==='image' || match.compare_data[2].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[2].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"match.compare_data[2].image_type==='image' || match.compare_data[2].image_type===''\" [src]=\"match.compare_data[2].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"match.compare_data[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[2].media_type==='video'\" [src]=\"match.compare_data[2].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[2].media_type==='audio'\" [src]=\"match.compare_data[2].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[2].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"match.compare_data[2].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{match.compare_data[2].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[2].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[2].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[2], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[2].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <!-- <img *ngIf=\"match.compare_data[1].image_type==='image' || match.compare_data[1].image_type===''\" [src]=\"match.compare_data[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-img-viewer \r\n                    *ngIf=\"match.compare_data[3].media_type==='image' || match.compare_data[3].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"match.compare_data[3].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    \r\n                    <ion-textarea *ngIf=\"match.compare_data[3].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px; width: 150px;min-height: 90px; border-radius: 7px;\">{{match.compare_data[3].media}}</ion-textarea>\r\n                    <video *ngIf=\"match.compare_data[3].media_type==='video'\" [src]=\"match.compare_data[3].image\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"match.compare_data[3].media_type==='audio'\" [src]=\"match.compare_data[3].image\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"match.compare_data[3].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                    <a [href]=\"match.compare_data[3].media\">{{match.compare_data[3].media}}</a>\r\n                    </div>\r\n      \r\n                    <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                      <img *ngIf=\"match.compare_data[3].media_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                    </p>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{match.compare_data[3].sub_caption}}</span>\r\n                    </div>\r\n                    <div style=\"\" (click)=\"ToSendSenderLike($event,match.compare_data[3], match.match_id)\">\r\n                      <!-- <img src=\"../../assets/icon/shoot.png\" alt=\"\" style=\" width: 29px;height: 25px; margin-top: 10px; \"> -->\r\n                      <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n                      <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.compare_data[3].likecount}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n      \r\n              <div style=\"background-color: #7070728f; padding: 5px; border-radius: 5px; margin-bottom: 15px;\">\r\n                <img *ngIf=\"item.image_type==='image' || item.image_type===''\" [src]=\"item.image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\">\r\n                <ion-textarea *ngIf=\"item.image_type==='text'\" readonly class=\"text-match-style\" autoGrow>{{item.image}}</ion-textarea>\r\n                <video *ngIf=\"item.image_type==='video'\" [src]=\"item.image\" controls style=\"height: 255px; width: 185px;\"></video>\r\n                <audio *ngIf=\"item.image_type==='audio'\" [src]=\"item.image\" controls style=\"height: 185px; width: 165px;\"></audio>\r\n                <div style=\"width: 160px; height: auto; padding: 15px\">\r\n                <a *ngIf=\"item.image_type==='link' || item.image_type==='file'\" [href]=\"item.image\">{{item.image}}</a>\r\n                </div>\r\n      \r\n      \r\n                <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'receiver')\" style=\"margin: 0; font-size: 14px;\"> \r\n                  <img *ngIf=\"PersonalMatch[i].receiver_image_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                </p>\r\n              </div>\r\n      \r\n            </div> -->\r\n      \r\n            <!-- <div style=\" padding: 3px; \"></div>\r\n      \r\n            <div style=\" position: absolute; height: 30px; top: 20%; right: 46%; \">\r\n              <img src=\"../../assets/icon/vs.png\" alt=\"\">\r\n            </div> \r\n            \r\n            <div>\r\n      \r\n              <div style=\"background-color: #7070728f; padding: 5px; border-radius: 5px; margin-bottom: 15px;\">\r\n                <img *ngIf=\"match.sender_image_type==='image' || match.sender_image_type===''\" [src]=\"match.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; height: 255px; width: 195px;\" (click)=\"toViewSenderMatchImage($event,match)\">\r\n                <ion-textarea *ngIf=\"match.sender_image_type==='text' || match.sender_image_type===''\" readonly class=\"text-match-style\" autoGrow>{{match.sender_image}}</ion-textarea>\r\n                <video *ngIf=\"match.sender_image_type==='video'\" [src]=\"match.sender_image\" controls style=\"height: 255px; width: 185px;\"></video>\r\n                <audio *ngIf=\"match.sender_image_type==='audio'\" [src]=\"match.sender_image\" controls style=\"height: 185px; width: 165px;\"></audio>\r\n                <div style=\"width: 160px; height: auto; padding: 15px\">\r\n                  <a *ngIf=\"match.sender_image_type==='link' || match.sender_image_type==='' || match.sender_image_type==='file'\" [href]=\"match.sender_image\">{{match.sender_image}}</a>\r\n                </div>\r\n      \r\n      \r\n                <p *ngIf=\"userDetails.userType==='owner'\" (click)=\"openCount(i, 'sender')\" style=\"margin: 0; font-size: 14px;\"> \r\n                  <img *ngIf=\"PersonalMatch[i].sender_image_closedstatus===1\" style=\"width: 30px;\" src=\"../../assets/icon/shoot-grey.png\" alt=\"\">\r\n                </p>\r\n              </div>\r\n      \r\n            </div> -->\r\n      \r\n          </div>\r\n      \r\n          <div>\r\n      \r\n            <div style=\"position: relative; bottom: 6%; margin-top: 30px;\">\r\n              <img [src]=\"match.compare_data[0].profile\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"border-radius: 50%; height: 40px; width: 40px; border: 1px solid;\">\r\n              <p style=\" font-size: 14px; margin: 0px; font-weight: 600; position: relative;\">{{match.compare_data[0].name}}</p>\r\n      \r\n              <h3> {{match.caption}} </h3>\r\n            </div>\r\n      \r\n          </div>\r\n      \r\n          <!-- <div style=\"display: flex;position: relative;left: 10%;\">\r\n      \r\n            <div (click)=\"ToSendReceiverLike($event,match)\">\r\n              <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n              <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.receiver_likecount}}</span>\r\n            </div>\r\n      \r\n            <div style=\"position: relative;left: 40%;\" (click)=\"ToSendSenderLike($event,match)\">\r\n              <img src=\"../../assets/icon/newIc-1 (1).png\" alt=\"\" style=\" width: 45px;height: 45px;\">\r\n              <span style=\"margin-left: 10px; position: relative; bottom: 15px;\">{{match.sender_likecount}}</span>\r\n            </div>\r\n      \r\n          </div> -->\r\n      \r\n          <!-- <div style=\"display: flex; position: relative;left: 35%;top: 15px;\">\r\n            \r\n            <div style=\"margin-left: 20px;\">\r\n              <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_commoncomments}} </span>\r\n              <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoPersonalMatchComments($event,match)\">\r\n            </div>\r\n      \r\n            <div style=\"position: relative; bottom: -8px; background-color: white; width: 35px; height: 35px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey; left: 115px;\">\r\n              <img src=\"../../assets/icon/03.png\" alt=\"\" style=\"height: 22px;margin-top: 6px;\" (click)=\"toShowMatchHistory($event,match)\">\r\n            </div>\r\n          </div> -->\r\n      \r\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr\">\r\n            <div style=\"position: relative; margin-top: 40px; background-color: white; width: 35px; height: 35px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;\">\r\n              <img src=\"../../assets/icon/03.png\" alt=\"\" style=\"height: 22px;margin-top: 6px;\" (click)=\"toShowMatchHistory($event,match)\">\r\n            </div>\r\n      \r\n            <div style=\"\">\r\n              <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_commoncomments}} </span>\r\n              <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoPersonalMatchComments($event,match)\">\r\n            </div>\r\n            <div style=\"margin-top: 35px;justify-content: right;display: flex;\">\r\n              <ion-button (click)=\"toViewReceiverMatchImage($event,match)\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match</ion-button>\r\n            </div>\r\n            \r\n          </div>\r\n      \r\n          <!-- <div style=\"background-color: #8080803d;padding:23px 0px 15px 0px;margin: 45px -5px -5px;\">\r\n            <div style=\"position: relative;bottom: 45px;background-color: white;width: 35px;height: 35px;border-radius: 50%;box-shadow: 0.5px 0.5px 5px 0px grey;left: 35px;\">\r\n              <img src=\"../../assets/icon/03.png\" alt=\"\" style=\"height: 22px;margin-top: 6px;\" (click)=\"toShowMatchHistory($event,match)\">\r\n            </div>\r\n      \r\n            <div style=\"display: flex; position: relative;bottom: 35px;margin-left: 10px;\">\r\n      \r\n              <div style=\"height: 45px;margin-left: 20px;\">\r\n              <p style=\"margin: 0px !important;font-weight: 600;\"> {{match.agree_count}} </p>\r\n                <img src=\"../../assets/icon/01.png\" alt=\"\" (click)=\"toLikePersonalMatch($event,match)\">\r\n                <p style=\"color: grey; margin: 0px !important;position: relative;bottom: 3px;font-size: 13px;\">i Agree</p>\r\n              </div>\r\n      \r\n              <div style=\"height: 45px;margin-left: 55px;\">\r\n                <p style=\"margin: 0px !important;font-weight: 600;\"> {{match.disagree_count}} </p>\r\n                <img src=\"../../assets/icon/01a.png\" alt=\"\" (click)=\"toDisLikePersonalMatch($event,match)\">\r\n                <p style=\"color: grey; margin: 0px !important;position: relative;bottom: 3px;font-size: 13px;\">i Disagree</p>\r\n              </div>\r\n      \r\n              <div style=\"height: 40px;margin-left: 55px;position: relative;top: 15px\">\r\n                <img src=\"../../assets/icon/02.png\" alt=\"\" (click)=\"toCommentPersonalMatch($event,match)\">\r\n                <span style=\"position: relative;bottom: 19px;margin-left: 5px;font-weight: 600;\"> {{match.total_commoncomments}} </span>\r\n              </div>\r\n      \r\n            </div>\r\n      \r\n          </div> -->\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"this.userDetails.category == 'closed'\">\r\n\r\n        <div *ngFor=\"let item of match.compare_data; let k = index\" style=\"margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;\">\r\n          <div style=\"flex:1\">\r\n            <div *ngIf=\"item.medias.length == 1\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr; \">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[0].media_type==='image' || item.medias[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[0].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[0].image_type==='image' || item.medias[0].image_type===''\" [src]=\"item.medias[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 2\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[0].media_type==='image' || item.medias[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[0].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[0].image_type==='image' || item.medias[0].image_type===''\" [src]=\"item.medias[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[1].media_type==='image' || item.medias[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[1].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[1].image_type==='image' || item.medias[1].image_type===''\" [src]=\"item.medias[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[1].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[1].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 3\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr;\">\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[0].media_type==='image' || item.medias[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[0].media\"\r\n                    style=\"width: 120px;height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[0].media\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[1].media_type==='image' || item.medias[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[1].media\"\r\n                    style=\"width: 120px;height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[1].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[1].media\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px; display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[2].media_type==='image' || item.medias[2].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[2].media\"\r\n                    style=\"width: 120px;height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    \r\n                    <ion-textarea *ngIf=\"item.medias[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 120px;min-height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[2].media_type==='video'\" [src]=\"item.medias[2].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[2].media_type==='audio'\" [src]=\"item.medias[2].image\" controls style=\"width: 120px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[2].media_type==='link'\" style=\"width: 120px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[2].media\">{{item.medias[2].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[2].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"item.medias.length == 4\">\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[0].media_type==='image' || item.medias[0].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[0].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[0].image_type==='image' || item.medias[0].image_type===''\" [src]=\"item.medias[0].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[0].media_type==='audio'\" [src]=\"item.medias[0].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[0].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[0].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[0].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[0].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[1].media_type==='image' || item.medias[1].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[1].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[1].image_type==='image' || item.medias[1].image_type===''\" [src]=\"item.medias[1].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[1].media_type==='video'\" [src]=\"item.medias[1].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[1].media_type==='audio'\" [src]=\"item.medias[1].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[1].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[1].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[1].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[1].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[2].media_type==='image' || item.medias[2].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[2].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[2].image_type==='image' || item.medias[2].image_type===''\" [src]=\"item.medias[2].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[2].media_type==='video'\" [src]=\"item.medias[2].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[2].media_type==='audio'\" [src]=\"item.medias[2].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[2].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[2].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[2].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[2].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div style=\"padding:5px;display: flex;justify-content: center;\">\r\n                  <div>\r\n                    <ion-img-viewer \r\n                    *ngIf=\"item.medias[3].media_type==='image' || item.medias[3].media_type===''\"\r\n                    scheme=\"dark\" \r\n                    [src]=\"item.medias[3].media\"\r\n                    style=\"width: 150px;min-height: 90px; border-radius: 7px;\"\r\n                    >\r\n                    </ion-img-viewer>\r\n                    <!-- <img *ngIf=\"item.medias[3].image_type==='image' || item.medias[3].image_type===''\" [src]=\"item.medias[3].image\"  alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\" border-radius: 7px; min-height: 255px; width: 195px;\" (click)=\"toViewReceiverMatchImage($event,match)\"> -->\r\n                    <ion-textarea *ngIf=\"item.medias[3].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"margin-top:0px;width: 150px;min-height: 90px; border-radius: 7px;\">{{item.medias[3].media}}</ion-textarea>\r\n                    <video *ngIf=\"item.medias[3].media_type==='video'\" [src]=\"item.medias[3].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></video>\r\n                    <audio *ngIf=\"item.medias[3].media_type==='audio'\" [src]=\"item.medias[3].media\" controls style=\"width: 150px;min-height: 90px; border-radius: 7px;\"></audio>\r\n                    <div *ngIf=\"item.medias[3].media_type==='link'\" style=\"width: 150px;min-height: 90px; border-radius: 7px;\">\r\n                      <a [href]=\"item.medias[3].media\" style=\"width: 150px;height: 90px; border-radius: 7px;\">{{item.medias[3].media}}</a>\r\n                    </div>\r\n                    <div style=\"font-size: 12px;\">\r\n                      <span>{{item.medias[3].sub_caption}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div style=\"position: relative; bottom: 6%; margin-top: 30px;\">\r\n              <img [src]=\"match.compare_data[0].profile\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"border-radius: 50%; height: 40px; width: 40px; border: 1px solid;\">\r\n              <p style=\" font-size: 14px; margin: 0px; font-weight: 600; position: relative;\">{{item.user.name}}</p>\r\n      \r\n              <h3> {{match.caption}} </h3>\r\n            </div>\r\n      \r\n          </div>\r\n      \r\n          <!-- <div style=\"display: grid; grid-template-columns: 1fr\">\r\n      \r\n            <div style=\"\">\r\n              <span style=\"font-weight: 600; font-size: 15px; position: relative; bottom: 11px;\"> {{match.total_commoncomments}} </span>\r\n              <img src=\"../../assets/icon/02.png\" alt=\"\" style=\"height: 27px; width: 30px; margin-left: 11px;\" (click)=\"gotoPersonalMatchComments($event,match)\">\r\n            </div>\r\n            <div *ngIf=\"this.userDetails.category!='closed'\" style=\"margin-top: 35px;justify-content: right;display: flex;\">\r\n              <ion-button (click)=\"toViewReceiverMatchImage($event,match)\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match</ion-button>\r\n            </div>\r\n            \r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    \r\n    </ion-slide>\r\n    \r\n\r\n<!-- slide ends here -->\r\n\r\n  </ion-slides>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "OEWt":
    /*!*********************************************************!*\
      !*** ./src/app/personal-match/personal-match.module.ts ***!
      \*********************************************************/

    /*! exports provided: PersonalMatchPageModule */

    /***/
    function OEWt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchPageModule", function () {
        return PersonalMatchPageModule;
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


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "gMqc");
      /* harmony import */


      var _personal_match_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./personal-match-routing.module */
      "tUvZ");
      /* harmony import */


      var _personal_match_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./personal-match.page */
      "Q041");

      var PersonalMatchPageModule = function PersonalMatchPageModule() {
        _classCallCheck(this, PersonalMatchPageModule);
      };

      PersonalMatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _personal_match_routing_module__WEBPACK_IMPORTED_MODULE_6__["PersonalMatchPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxIonicImageViewerModule"]],
        declarations: [_personal_match_page__WEBPACK_IMPORTED_MODULE_7__["PersonalMatchPage"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["SenderPopoverComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["ReceiverPopoverComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["SendMatchComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["RevealedCountComponent"], _personal_match_page__WEBPACK_IMPORTED_MODULE_7__["CountComponent"]]
      })], PersonalMatchPageModule);
      /***/
    },

    /***/
    "Q041":
    /*!*******************************************************!*\
      !*** ./src/app/personal-match/personal-match.page.ts ***!
      \*******************************************************/

    /*! exports provided: PersonalMatchPage, RevealedCountComponent, CountComponent, PopoverComponent, SenderPopoverComponent, ReceiverPopoverComponent, SendMatchComponent */

    /***/
    function Q041(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchPage", function () {
        return PersonalMatchPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RevealedCountComponent", function () {
        return RevealedCountComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountComponent", function () {
        return CountComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SenderPopoverComponent", function () {
        return SenderPopoverComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceiverPopoverComponent", function () {
        return ReceiverPopoverComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendMatchComponent", function () {
        return SendMatchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personal_match_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personal-match.page.html */
      "HR1H");
      /* harmony import */


      var _personal_match_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personal-match.page.scss */
      "mcEP");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "uRF+");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "iWj2");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/config */
      "82od");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem;

      var PersonalMatchPage = /*#__PURE__*/function () {
        function PersonalMatchPage(storageservice, popoverController, modalController, common) {
          var _this = this;

          _classCallCheck(this, PersonalMatchPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.modalController = modalController;
          this.common = common;
          this.userDetails = [];
          this.PersonalMatch = [];
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;
            _this.personalMatchSlideIndex = _this.userDetails.personalMatchSlideIndex;
            console.log('userArray:', _this.userDetails);
          });
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetail = val;
          });
        }

        _createClass(PersonalMatchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            // this.common.showLoader();
            this.common.presentLoading();
            console.log('Entered into Personal Match page');
            this.slides.updateAutoHeight();
            this.slides.update(); // this.storageservice.storage.get('userDetails').then((val) => {
            // this.userDetails = val ;

            if (this.userDetails.category == "personal") {
              var params = {
                userid: this.userDetails.userid
              };
              console.log('------------------------------params:', params);
              this.common.postMethod('PersonalMatch', params).then(function (res) {
                _this2.PersonalMatch = res.details; // if ( this.userDetails.fileType === "image" ) {
                //   this.PersonalMatch = res.details.image;
                // } else if ( this.userDetails.fileType === "audio" ) {
                //   this.PersonalMatch = res.details.audio;
                // } else if ( this.userDetails.fileType === "link" ) {
                //   this.PersonalMatch = res.details.link;
                // } else if ( this.userDetails.fileType === "video" ) {
                //   this.PersonalMatch = res.details.video;
                // } else if ( this.userDetails.fileType === "text" ) {
                //   this.PersonalMatch = res.details.text;
                // }

                _this2.slides.slideTo(_this2.personalMatchSlideIndex);

                _this2.common.hideLoader();
              }, function (err) {
                _this2.ionViewWillEnter();

                console.log('Error:', err);
                console.log('Error headers:', err.headers); // this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');

                _this2.common.hideLoader();
              });
            } else if (this.userDetails.category == "closed") {
              var _params = {
                userid: this.userDetails.userid
              };
              console.log('params:', _params);
              this.common.postMethod('ClosedMatch', _params).then(function (res) {
                console.log('Closed-------------------res:', res); // this.PersonalMatchImage = res.details.image;
                // this.PersonalMatchAudio = res.details.audio;
                // this.PersonalMatchLink = res.details.link;
                // this.PersonalMatchVideo = res.details.video;
                // this.PersonalMatchText = res.details.text;
                // if ( this.userDetails.fileType === "file" ) {
                //   this.PersonalMatch = res.details.image;
                // } else if ( this.userDetails.fileType === "audio" ) {
                //   this.PersonalMatch = res.details.audio;
                // } else if ( this.userDetails.filetype === "link" ) {
                //   this.PersonalMatch = res.details.link;
                // } else if ( this.userDetails.fileType === "video" ) {
                //   this.PersonalMatch = res.details.video;
                // } else if ( this.userDetails.fileType === "text" ) {
                //   this.PersonalMatch = res.details.text;
                // }

                _this2.PersonalMatch = res.details;

                _this2.slides.slideTo(_this2.personalMatchSlideIndex);

                console.log('closed:', _this2.PersonalMatch);

                _this2.common.hideLoader();
              }, function (err) {
                _this2.ionViewWillEnter();

                console.log('Error:', err);
                console.log('Error headers:', err.headers);

                _this2.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');

                _this2.common.hideLoader();
              });
            } // });

          }
        }, {
          key: "gotoPersonalMatchComments",
          value: function gotoPersonalMatchComments(e, match) {
            console.log('Comment View Page Clicked');
            console.log('match:', match);
            match.matchType = 'PERSONAL';
            this.common.navCtrl.navigateForward(['/comments'], {
              queryParams: match
            });
          }
        }, {
          key: "ToSendReceiverLike",
          value: function ToSendReceiverLike(e, match, match_id) {
            var _this3 = this;

            console.log('SenderLike BUtton Clicked', match);

            if (this.userDetails.category === 'personal') {
              var params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                image_liked: match.image_id
              };
              console.log('params:', params);
              this.common.postMethod('personallike', params).then(function (res) {
                console.log('res:', res); // this.userDetails.fileType = match.receiver_image_type;

                _this3.ionViewWillEnter();
              }, function (err) {
                console.log('Error:', err);
                console.log(err.headers);
              });
            } else {
              var _params2 = {
                userid: this.userDetail.userid,
                matchid: match_id,
                contestentid: match.id,
                status: 'like'
              };
              console.log('params:', _params2);
              this.common.postMethod('Like', _params2).then(function (res) {
                console.log('res:', res);

                _this3.ionViewWillEnter();
              }, function (err) {
                console.log('Error:', err);
              });
            }
          }
        }, {
          key: "ToSendSenderLike",
          value: function ToSendSenderLike(e, match, match_id) {
            var _this4 = this;

            console.log('To Send Sender Like');

            if (this.userDetails.category === 'personal') {
              var params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                image_liked: match.image_id
              };
              console.log('params:', params);
              this.common.postMethod('personallike', params).then(function (res) {
                console.log('res:', res);

                _this4.ionViewWillEnter();
              }, function (err) {
                console.log('Error:', err);
                console.log(err.headers);
              });
            } else {
              var _params3 = {
                userid: this.userDetail.userid,
                matchid: match_id,
                contestentid: match.id,
                status: 'like'
              };
              console.log('params:', _params3);
              this.common.postMethod('Like', _params3).then(function (res) {
                console.log('res:', res);

                _this4.ionViewWillEnter();
              }, function (err) {
                console.log('Error:', err);
              });
            }
          }
        }, {
          key: "toShowMatchHistory",
          value: function toShowMatchHistory(ev, match) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('Show Match History Button Clicked');
                      _context.next = 3;
                      return this.popoverController.create({
                        component: PopoverComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: match
                        },
                        translucent: true,
                        backdropDismiss: true,
                        animated: true
                      });

                    case 3:
                      popover = _context.sent;
                      _context.next = 6;
                      return popover.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "IconCategorize",
          value: function IconCategorize(cat) {
            var _this5 = this;

            console.log('Cat:', cat);

            if (this.userDetail.category === 'personal') {
              if (cat === 'image') {
                this.common.showLoader();
                var params = {
                  userid: this.userDetails.userid
                };
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.image;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no image Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' image Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'video') {
                this.common.showLoader();
                var _params4 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params4);
                this.common.postMethod('PersonalMatch', _params4).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.video;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no video Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' video Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'audio') {
                this.common.showLoader();
                var _params5 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params5);
                this.common.postMethod('PersonalMatch', _params5).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.audio;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no audio Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' audio Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'attachment') {
                this.common.showLoader();
                var _params6 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params6);
                this.common.postMethod('PersonalMatch', _params6).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.text;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no text Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' text Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'link') {
                this.common.showLoader();
                var _params7 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params7);
                this.common.postMethod('PersonalMatch', _params7).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.link;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no link Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' link Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              }
            } else {
              if (cat === 'image') {
                this.common.showLoader();
                var _params8 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params8);
                this.common.postMethod('ClosedMatch', _params8).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.image;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no image Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' image Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'video') {
                this.common.showLoader();
                var _params9 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params9);
                this.common.postMethod('ClosedMatch', _params9).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.video;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no video Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' video Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'audio') {
                this.common.showLoader();
                var _params10 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params10);
                this.common.postMethod('ClosedMatch', _params10).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.audio;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no audio Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' audio Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'attachment') {
                this.common.showLoader();
                var _params11 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params11);
                this.common.postMethod('ClosedMatch', _params11).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.text;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no text Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' text Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              } else if (cat === 'link') {
                this.common.showLoader();
                var _params12 = {
                  userid: this.userDetails.userid
                };
                console.log('params:', _params12);
                this.common.postMethod('ClosedMatch', _params12).then(function (res) {
                  console.log('res:', res);
                  _this5.PersonalMatch = res.details.link;

                  if (_this5.PersonalMatch.length === 0) {
                    _this5.common.presentToast('You are having no link Personal Matches');
                  } else {
                    _this5.common.presentToast('You are having ' + _this5.PersonalMatch.length + ' link Personal Matches');
                  }

                  console.log('PersonalMatchImage:', _this5.PersonalMatch);

                  _this5.common.hideLoader();
                }, function (err) {
                  console.log('e:', err);
                });
              }
            }
          }
        }, {
          key: "openRevealedCount",
          value: function openRevealedCount(i, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Revealed Count');
                      _context2.next = 3;
                      return this.popoverController.create({
                        component: RevealedCountComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: this.PersonalMatch[i],
                          type: type
                        },
                        translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 3:
                      popover = _context2.sent;
                      _context2.next = 6;
                      return popover.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openCount",
          value: function openCount(i, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(' Count');
                      _context3.next = 3;
                      return this.popoverController.create({
                        component: CountComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: this.PersonalMatch[i],
                          type: type
                        },
                        translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 3:
                      popover = _context3.sent;
                      _context3.next = 6;
                      return popover.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toViewSenderMatchImage",
          value: function toViewSenderMatchImage(ev, match) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('Show Sender Match Image Button Clicked');
                      _context4.next = 3;
                      return this.modalController.create({
                        component: SenderPopoverComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: match,
                          userType: this.userDetails.userType
                        },
                        // translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 3:
                      popover = _context4.sent;
                      _context4.next = 6;
                      return popover.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "toViewReceiverMatchImage",
          value: function toViewReceiverMatchImage(ev, match) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var popover;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('Show Receiver Match Image Button Clicked:', this.userDetails.userType);
                      _context5.next = 3;
                      return this.modalController.create({
                        component: ReceiverPopoverComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: match,
                          userType: this.userDetails.userType
                        },
                        // translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 3:
                      popover = _context5.sent;
                      _context5.next = 6;
                      return popover.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return PersonalMatchPage;
      }();

      PersonalMatchPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }];
      };

      PersonalMatchPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      };
      PersonalMatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-personal-match',
        template: _raw_loader_personal_match_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_match_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PersonalMatchPage);

      var RevealedCountComponent = /*#__PURE__*/function () {
        //  userDetails: any;
        function RevealedCountComponent(popoverController, common, navParams) {
          _classCallCheck(this, RevealedCountComponent);

          this.popoverController = popoverController;
          this.common = common;
          this.navParams = navParams;
          this.Match = [];
          console.log(this.navParams.get('key'));
          console.log(this.navParams.get('type'));
          this.Match = this.navParams.get('key');
          this.type = this.navParams.get('type');
        }

        _createClass(RevealedCountComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {//  console.log('ionViewWillEnter:',this.Match);
          }
        }]);

        return RevealedCountComponent;
      }();

      RevealedCountComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      RevealedCountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n        <div style=\" text-align: center; \">\n          <h4 style=\" font-weight: 600; \"> Revealed Count </h4>\n          <div style=\" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;\">\n            <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>\n            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>\n            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>\n            <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->\n            <ion-row>\n              <ion-col>\n                <div style=\"background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;\"></div>\n                <p style=\"font-weight: bold\"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>\n                <p *ngFor=\"let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname\"> {{l.loser_name}} </p>\n              </ion-col>\n\n              <ion-col>\n                <div style=\"background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;\"></div>\n                <p style=\"font-weight: bold\"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>\n                <p *ngFor=\"let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname\"> {{w.winner_name}} </p>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </div>\n   "
      })], RevealedCountComponent);

      var CountComponent = /*#__PURE__*/function () {
        //  userDetails: any;
        function CountComponent(popoverController, common, navParams) {
          _classCallCheck(this, CountComponent);

          this.popoverController = popoverController;
          this.common = common;
          this.navParams = navParams;
          this.Match = [];
          console.log(this.navParams.get('key'));
          console.log(this.navParams.get('type'));
          this.Match = this.navParams.get('key');
          this.type = this.navParams.get('type');
        }

        _createClass(CountComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {//  console.log('ionViewWillEnter:',this.Match);
          }
        }, {
          key: "openRevealedCount",
          value: function openRevealedCount(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('Revealed Count');
                      this.popoverController.dismiss();
                      navigationExtras = {
                        state: {
                          data: this.Match,
                          type: type
                        }
                      };
                      this.common.router.navigate(['personal-match-revealed'], navigationExtras); // this.common.router.navigate(['/personal-match-revealed'], {queryParams: this.userDetails});
                      // const popover = await this.popoverController.create({
                      //   component: RevealedCountComponent,
                      //   cssClass: 'my-custom-class',
                      //   componentProps:{key: this.Match, type},
                      //   translucent: true,
                      //   backdropDismiss: true,
                      //   animated: false
                      // });
                      // return await popover.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return CountComponent;
      }();

      CountComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      CountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n      <div style=\" text-align: center; \">\n        <h4 style=\" font-weight: 600; \"> Count </h4>\n        <div style=\" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;\">\n          <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>\n          <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>\n          <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>\n          <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->\n          <!-- <ion-row>\n            <ion-col>\n              <div style=\"background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;\"></div>\n              <p style=\"font-weight: bold\"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>\n              <p *ngFor=\"let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname\"> {{l.loser_name}} </p>\n            </ion-col>\n\n            <ion-col>\n              <div style=\"background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;\"></div>\n              <p style=\"font-weight: bold\"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>\n              <p *ngFor=\"let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname\"> {{w.winner_name}} </p>\n            </ion-col>\n          </ion-row> -->\n\n           <p style=\"margin: 0; font-size: 14px;\"> {{type==='receiver' ? Match.receiver_image_win : Match.sender_image_win}} Wins</p>\n          <p style=\"margin: 0; font-size: 14px;\"> {{type==='receiver' ? Match.receiver_image_loss : Match.sender_image_loss}} Lost</p>\n\n          <p style=\"margin: 0; font-size: 14px;\"> {{type==='receiver' ? Match.receiver_anonymous_count : Match.sender_anonymous_count}} Anonymous</p>\n          <p (click)=\"openRevealedCount('sender')\" style=\"margin: 0; font-size: 14px;\"> {{type==='receiver' ? Match.receiver_reveal_count : Match.sender_reveal_count}} Revealed</p>\n\n        </div>\n      </div>\n  "
      })], CountComponent);

      var PopoverComponent = /*#__PURE__*/function () {
        //  userDetails: any;
        function PopoverComponent(popoverController, common, navParams) {
          _classCallCheck(this, PopoverComponent);

          this.popoverController = popoverController;
          this.common = common;
          this.navParams = navParams;
          this.Match = [];
          console.log(this.navParams.get('key'));
          this.Match = this.navParams.get('key');
          console.log('users in popover:', this.Match);
        }

        _createClass(PopoverComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewWillEnter:', this.Match);
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n        <div style=\" text-align: center; \">\n          <h4 style=\" font-weight: 600; \"> Match History </h4>\n          <div style=\" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;\">\n            <p>Match Date : <span> {{Match.match_start | date}} </span> </p>\n            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>\n            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>\n            <p>Total Hours : <span> {{Match.time_duration}} </span> </p>\n          </div>\n        </div>\n   "
      })], PopoverComponent);

      var SenderPopoverComponent = /*#__PURE__*/function () {
        function SenderPopoverComponent(popoverController, storageservice, common, formbuilder, navParams) {
          var _this6 = this;

          _classCallCheck(this, SenderPopoverComponent);

          this.popoverController = popoverController;
          this.storageservice = storageservice;
          this.common = common;
          this.formbuilder = formbuilder;
          this.navParams = navParams;
          this.FormSubmit = false;
          this.userCaption = {
            "caption": ""
          };
          this.Match = [];
          this.MatchThisForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1)])]
          });
          this.caption = this.MatchThisForm.controls['caption'];
          console.log(this.navParams.get('key'));
          this.Match = this.navParams.get('key');
          this.userType = this.navParams.get('userType');
          console.log('users in popover:', this.Match);
          console.log('user type:', this.userType);
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this6.userDetails = val;
          });
        }

        _createClass(SenderPopoverComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewWillEnter:', this.Match);
          }
        }, {
          key: "sendMatch",
          value: function sendMatch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var popover;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.popoverController.create({
                        component: SendMatchComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: this.Match,
                          userType: 'sender'
                        },
                        translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 2:
                      popover = _context7.sent;
                      _context7.next = 5;
                      return popover.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "ToSendMatch",
          value: function ToSendMatch(e, m) {
            var _this7 = this;

            console.log('Send Match Button Clicked');
            console.log('Match:', m);
            var params = {
              userid: this.userDetails.userid,
              caption: this.userCaption.caption
            };
            this.common.postMethod('abc', params).then(function (res) {
              console.log('res:', res);
            }, function (err) {
              _this7.common.presentToast('This area is under Development');

              _this7.MatchThisForm.reset();

              console.log('Error:', err);
            });
          }
        }]);

        return SenderPopoverComponent;
      }();

      SenderPopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      SenderPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n        <div style=\" text-align: center; \">\n          <h4 style=\" font-weight: 600; \"> Your Second Image </h4>\n          <div style=\" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;\">\n            <div>\n                <img [src]=\"Match.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\">\n            </div>\n\n            <div style=\"display: flex; justify-content: space-between;\">\n\n            <div style=\"display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;\">\n            <img src=\"../../assets/icon/03.png\" alt=\"\"> <span style=\"font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;\"> {{Match.sender_reveal_count}} </span>\n            </div>\n\n            <ion-button *ngIf=\"userType==='visitor'\" (click)=\"sendMatch()\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match This</ion-button>\n            \n          </div>\n          </div>\n        </div>\n  "
      })], SenderPopoverComponent);

      var ReceiverPopoverComponent = /*#__PURE__*/function () {
        function ReceiverPopoverComponent(popoverController, modalController, common, navParams) {
          _classCallCheck(this, ReceiverPopoverComponent);

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

        _createClass(ReceiverPopoverComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewWillEnter:', this.Match);
          }
        }, {
          key: "sendMatch",
          value: function sendMatch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(this.selectItem.length > 0)) {
                        _context8.next = 11;
                        break;
                      }

                      this.selectItem.filter(function (a, b) {
                        return _this8.selectItem.indexOf(a) === b;
                      });
                      this.selectItem.sort();
                      _context8.next = 5;
                      return this.modalController.create({
                        component: SendMatchComponent,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          key: this.Match,
                          userType: 'receiver',
                          selectItem: this.selectItem
                        },
                        // translucent: true,
                        backdropDismiss: true,
                        animated: false
                      });

                    case 5:
                      popover = _context8.sent;
                      _context8.next = 8;
                      return popover.present();

                    case 8:
                      return _context8.abrupt("return", _context8.sent);

                    case 11:
                      this.common.showAlertSuccess('Please select Image');
                      return _context8.abrupt("return");

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "dismissButton",
          value: function dismissButton() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.modalController.dismiss();

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "selectImage",
          value: function selectImage(e, index) {
            console.log(e.target);

            if (e.target.style.border != "") {
              this.selectItem.splice(this.selectItem.indexOf(index), 1);
              e.target.style.border = "";
            } else {
              this.selectItem.push(index);
              e.target.style.border = "3px solid #50c8ff";
            }
          }
        }]);

        return ReceiverPopoverComponent;
      }();

      ReceiverPopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }];
      };

      ReceiverPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"dismissButton()\">\n            <img src='../../assets/icon/back.png' alt=\"\" style=\"width:10px; height: 18px;\">\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n    <div style=\" text-align: center; \">\n      <h4 style=\" font-weight: 600; \"> This Match </h4>\n      <div style=\" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;\">\n        <div *ngIf=\"Match.compare_data.length == 2\">\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;\">\n            <div *ngFor=\"let item of Match.compare_data; let i = index\">\n              <div *ngIf=\"item.media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, i)\">{{item.media}}</div>\n              <img *ngIf=\"item.media_type==='image' || item.media_type===''\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, i)\" />\n              <video *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, i)\"></video>\n              <audio *ngIf=\"item.media_type==='audio'\" [src]=\"item.media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, i)\"></audio>\n              <div *ngIf=\"item.media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, i)\">\n                <a [href]=\"item.media\">{{item.media}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"Match.compare_data.length == 3\">\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;\">\n              <div *ngFor=\"let item of Match.compare_data; let i = index\">\n                <div *ngIf=\"item.media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"height: 255px; width: 150px;padding:5px\" (click)=\"selectImage($event, i)\">{{item.media}}</div>\n                <img *ngIf=\"item.media_type==='image' || item.media_type===''\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"height: 255px; width: 150px;padding:5px\" (click)=\"selectImage($event, i)\">\n                <video *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" controls style=\"height: 255px; width: 150px;padding:5px\" (click)=\"selectImage($event, i)\"></video>\n                <audio *ngIf=\"item.media_type==='audio'\" [src]=\"item.media\" controls style=\"height: 255px; width: 150px;padding:5px\" (click)=\"selectImage($event, i)\"></audio>\n                <div *ngIf=\"item.media_type==='link'\" style=\"height: 255px; width: 150px;padding:5px\" (click)=\"selectImage($event, i)\">\n                  <a [href]=\"item.media\">{{item.media}}</a>\n                </div>\n              </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"Match.compare_data.length == 4\">\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr;margin-top: 10px;\">\n            <div *ngIf=\"Match.compare_data[0].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 0)\">{{Match.compare_data[0].media}}</div>\n            <img *ngIf=\"Match.compare_data[0].media_type==='image' || Match.compare_data[0].media_type===''\" [src]=\"Match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 0)\">\n            <video *ngIf=\"Match.compare_data[0].media_type==='video'\" [src]=\"Match.compare_data[0].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 0)\"></video>\n            <audio *ngIf=\"Match.compare_data[0].media_type==='audio'\" [src]=\"Match.compare_data[0].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 0)\"></audio>\n            <div *ngIf=\"Match.compare_data[0].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 0)\">\n              <a [href]=\"Match.compare_data[0].media\">{{Match.compare_data[0].media}}</a>\n            </div>\n\n            <div *ngIf=\"Match.compare_data[1].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 1)\">{{Match.compare_data[1].media}}</div>\n            <img *ngIf=\"Match.compare_data[1].media_type==='image' || Match.compare_data[1].media_type===''\" [src]=\"Match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 1)\">\n            <video *ngIf=\"Match.compare_data[1].media_type==='video'\" [src]=\"Match.compare_data[1].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 1)\"></video>\n            <audio *ngIf=\"Match.compare_data[1].media_type==='audio'\" [src]=\"Match.compare_data[1].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 1)\"></audio>\n            <div *ngIf=\"Match.compare_data[1].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 1)\">\n              <a [href]=\"Match.compare_data[1].media\">{{Match.compare_data[1].media}}</a>\n            </div>\n          </div>\n          <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;\">\n            <div *ngIf=\"Match.compare_data[2].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 2)\">{{Match.compare_data[2].media}}</div>\n            <img *ngIf=\"Match.compare_data[2].media_type==='image' || Match.compare_data[2].media_type===''\" [src]=\"Match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 2)\">\n            <video *ngIf=\"Match.compare_data[2].media_type==='video'\" [src]=\"Match.compare_data[2].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 2)\"></video>\n            <audio *ngIf=\"Match.compare_data[2].media_type==='audio'\" [src]=\"Match.compare_data[2].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 2)\"></audio>\n            <div *ngIf=\"Match.compare_data[2].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 2)\">\n              <a [href]=\"Match.compare_data[2].media\">{{Match.compare_data[2].media}}</a>\n            </div>\n\n            <div *ngIf=\"Match.compare_data[3].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 3)\">{{Match.compare_data[3].media}}</div>\n            <img *ngIf=\"Match.compare_data[3].media_type==='image' || Match.compare_data[3].media_type===''\" [src]=\"Match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 3)\">\n            <video *ngIf=\"Match.compare_data[3].media_type==='video'\" [src]=\"Match.compare_data[3].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 3)\"></video>\n            <audio *ngIf=\"Match.compare_data[3].media_type==='audio'\" [src]=\"Match.compare_data[3].media\" controls style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 3)\"></audio>\n            <div *ngIf=\"Match.compare_data[3].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\" (click)=\"selectImage($event, 3)\">\n              <a [href]=\"Match.compare_data[3].media\">{{Match.compare_data[3].media}}</a>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"display: flex; justify-content: space-between;\">\n\n          <div style=\"display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;\">\n          <img src=\"../../assets/icon/03.png\" alt=\"\"> <span style=\"font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;\"> {{Match.receiver_reveal_count}} </span>\n          </div>\n\n          <ion-button *ngIf=\"userType==='visitor'\" (click)=\"sendMatch()\" shape=\"round\" size=\"small\" style=\"text-transform: none;\">Match This</ion-button>\n        </div>\n\n      </div>\n    </div>\n    </ion-content>\n    "
      })], ReceiverPopoverComponent); //   <div style="display: flex; margin-bottom: 10px; padding: 5px; justify-content: center;">
      //   <img [src]="this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image" style="height: 100px; width: 100px; margin-bottom: 10px; border-radius: 10px; position: relative; left: -5px;" onerror="this.src='../../assets/icon/no_media.png';" (click)="presentActionSheet()">
      //   <img *ngIf="hideImageSpace===true && isCaptureImage==false" src="../../assets/icon/bg2new.png" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" (click)="presentActionSheet()">
      //   <img *ngIf="isImage==true && isCaptureImage==true" [src]="FileTransferResponse.filename" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';">
      //   <video *ngIf="isVideo==true && isCaptureVideo==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></video>
      //   <audio *ngIf="isAudio==true && isCaptureAudio==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></audio>
      // </div>

      var SendMatchComponent = /*#__PURE__*/function () {
        function SendMatchComponent(popoverController, modalController, actionSheetCtrl, storageservice, mediaCapture, fileChooser, filePath, transfer, common, formbuilder, navParams, http) {
          var _this9 = this;

          _classCallCheck(this, SendMatchComponent);

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
          this.FormSubmit = false;
          this.userCaption = {
            "caption": ""
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
          this.MatchThisForm = formbuilder.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1)])]
          });
          this.caption = this.MatchThisForm.controls['caption'];
          this.Match = this.navParams.get('key');
          this.userType = this.navParams.get('userType');
          this.selectItem = this.navParams.get('selectItem');
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this9.userDetails = val;
          });
        }

        _createClass(SendMatchComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log("selecteditem--------------------------", this.Match);

            for (var i = 0; i < this.selectItem.length; i++) {
              this.matchIds.push(this.Match.compare_data[this.selectItem[i]].media_id);
            }

            console.log(this.matchIds);
            this.isCaptureImage = false;
            this.hideImageSpace = true;
          }
        }, {
          key: "dismissButton",
          value: function dismissButton() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.modalController.dismiss();

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "Add",
          value: function Add(type) {
            if (this.anArray.length >= 2) {
              this.common.showAlert('Maximum is 2 items');
              return;
            }

            if (type == 'link') {
              var position = 0;

              for (var i = 0; i < this.anArray.length; i++) {
                if (this.anArray[i].type == 'link') {
                  position++;
                }
              }

              this.anArray.push({
                'value': '',
                'type': type,
                position: position
              });
            }

            if (type == 'text') {
              var _position = 0;

              for (var _i = 0; _i < this.anArray.length; _i++) {
                if (this.anArray[_i].type == 'text') {
                  _position++;
                }
              }

              this.anArray.push({
                'value': '',
                'type': type,
                position: _position
              });
            }
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this10 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.log('Action Sheet Clicked');
                      _context11.next = 3;
                      return this.actionSheetCtrl.create({
                        header: ' Choose A Media To Upload For Closed Match',
                        buttons: [{
                          text: 'Send Wordings',
                          icon: 'text',
                          handler: function handler() {
                            _this10.wordArray.push({
                              value: ''
                            });

                            _this10.Add('text');

                            _this10.SendWordings();

                            console.log('Wording clicked');
                          }
                        }, {
                          text: 'Share Links',
                          icon: 'link',
                          handler: function handler() {
                            _this10.linkArray.push({
                              value: 'http://'
                            });

                            _this10.Add('link');

                            _this10.PickLinks();

                            console.log('Share clicked');
                          }
                        }, {
                          text: 'Capture Image',
                          icon: 'camera',
                          handler: function handler() {
                            _this10.anArray.push({
                              value: '',
                              type: 'image'
                            });

                            _this10.CaptureImage();

                            console.log('Camera clicked');
                          }
                        }, {
                          text: 'Capture Video',
                          icon: 'videocam',
                          handler: function handler() {
                            _this10.anArray.push({
                              value: '',
                              type: 'video'
                            });

                            _this10.CaptureVideo();

                            console.log("Gallery clicked");
                          }
                        }, {
                          text: 'Capture Audio',
                          icon: 'mic-circle',
                          handler: function handler() {
                            _this10.anArray.push({
                              value: '',
                              type: 'audio'
                            });

                            _this10.CaptureAudio();

                            console.log("Audio clicked");
                          }
                        }, {
                          text: 'Other Files',
                          icon: 'folder-open',
                          handler: function handler() {
                            _this10.anArray.push({
                              value: '',
                              type: 'file'
                            });

                            _this10.PickDocuments();

                            console.log('Folder clicked');
                          }
                        }, {
                          text: "Cancel",
                          role: "cancel",
                          handler: function handler() {
                            console.log("Cancel clicked");
                          }
                        }]
                      });

                    case 3:
                      actionSheet = _context11.sent;
                      _context11.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "SendWordings",
          value: function SendWordings() {
            console.log('Wording');
            this.isWordings = true;
            console.log('isWordings:', this.isWordings);
            this.hideImageSpace = false;
            console.log('hideImageSpace:', this.hideImageSpace);
            this.isLink = false;
            console.log('isLink:', this.isLink);
          }
        }, {
          key: "PickLinks",
          value: function PickLinks() {
            console.log('Pick Links Button Presses');
            this.isLink = true;
            console.log('isLink:', this.isLink);
            this.isWordings = false;
            console.log('isWordings:', this.isWordings);
            this.hideImageSpace = false;
            console.log('hideImageSpace:', this.hideImageSpace);
          }
        }, {
          key: "CaptureImage",
          value: function CaptureImage() {
            var _this11 = this;

            console.log('CaptureImage');
            this.isLink = false;
            this.isWordings = false;
            this.hideImageSpace = true;
            this.isCaptureImage = true;
            console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings, 'isCaptureImage:', this.isCaptureImage);
            var options = {
              limit: 1
            };
            this.mediaCapture.captureImage(options).then(function (data) {
              console.log('data[0]:', data[0]);
              _this11.cameraData = data[0];

              _this11.uploadFile2(data[0], 'image');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureVideo",
          value: function CaptureVideo() {
            var _this12 = this;

            console.log('CaptureVideo');
            this.isLink = false;
            this.isWordings = false;
            this.hideImageSpace = true;
            console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
            this.isCaptureImage = true;
            this.isCaptureVideo = true;
            var options = {
              limit: 1,
              duration: 2,
              quality: 90
            };
            this.mediaCapture.captureVideo(options).then(function (data) {
              console.log('data[0]:', data[0]);
              _this12.videoData = data[0];

              _this12.uploadFile2(data[0], 'video');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "CaptureAudio",
          value: function CaptureAudio() {
            var _this13 = this;

            console.log('CaptureAudio');
            this.isLink = false;
            this.isWordings = false;
            this.hideImageSpace = true;
            console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
            this.isCaptureImage = true;
            this.isCaptureAudio = true;
            var options = {
              limit: 1
            };
            this.mediaCapture.captureAudio(options).then(function (data) {
              console.log('data[0]:', data[0]);
              _this13.audioData = data[0];

              _this13.uploadFile2(data[0], 'audio');
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "PickDocuments",
          value: function PickDocuments() {
            var _this14 = this;

            console.log('PickDocuments');
            this.isLink = false;
            this.isWordings = false;
            this.hideImageSpace = true;
            console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
            this.isCaptureImage = true;
            this.isPickDocuments = true;
            var file;
            this.fileChooser.open().then(function (uri) {
              console.log('uri:', uri);

              _this14.filePath.resolveNativePath(uri).then(function (filePath) {
                console.log('filePath:', filePath);
                var fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
                console.log('fileNameFromPath:', fileNameFromPath);
                file = {
                  name: fileNameFromPath,
                  fullPath: filePath
                };
                _this14.documentData = file;

                _this14.uploadFile2(file, 'file');
              })["catch"](function (err) {
                return console.log(err);
              });
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        }, {
          key: "uploadFile2",
          value: function uploadFile2(file, type) {
            var _this15 = this;

            var options;
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
                select_medis: JSON.stringify(this.matchIds)
              },
              headers: {
                Connection: 'close'
              }
            };
            console.log('options:', options);
            var filePath;

            if (type !== 'audio') {
              filePath = encodeURI(file.fullPath);
              console.log(filePath);
            } else {
              filePath = file.fullPath;
            }

            this.common.showLoader();
            var fileTransfer = this.transfer.create();
            var fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/create_closedmatch';
            fileTransfer.onProgress(function (e) {
              var prg = e.lengthComputable ? Math.round(e.loaded / e.total * 100) : -1;
              console.log("progress:" + prg + '%');

              _this15.common.presentToast('Uploaded ' + prg + '% of file');
            });
            var formData = new FormData();

            for (var i = 0; i < this.myFiles.length; i++) {
              formData.append("filename[]", this.myFiles[i]);
            }

            this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/create_closedmatch', formData).subscribe(function (res) {
              console.log(res);

              if (res['message'] === 'Successfully uploaded') {
                _this15.common.presentToast('File Uploaded Successful');

                _this15.common.router.navigate(['tabs/tab6']);
              } else {
                _this15.common.presentToast('File Upload Failed !!!');
              }
            }, function (err) {
              console.log('err', err);
              console.log(err.headers);
            });
            fileTransfer.upload(filePath, fileUplaodUrl, options).then(function (data) {
              console.log('File Transfer Success:', data);
              console.log(JSON.parse(data.response));
              var res = JSON.parse(data.response);
              console.log('res:', res);

              if (res.file_extension === 'mp4') {
                console.log('This is a video file');
                _this15.isVideo = true;
                _this15.hideImageSpace = false;
                _this15.isCaptureImage = false;
              } else if (res.file_extension === 'aac') {
                console.log(' This is a audio file ');
                _this15.isAudio = true;
                _this15.hideImageSpace = false;
                _this15.isCaptureImage = false;
              } else if (res.file_extension === 'png') {
                console.log(' This is a image file ');
                _this15.isImage = true;
                _this15.hideImageSpace = false;
                _this15.isCaptureImage = false;
              } else if (res.file_extension === 'jpg') {
                console.log(' This is a image file ');
                _this15.isImage = true;
                _this15.hideImageSpace = false;
                _this15.isCaptureImage = false;
              } else if (res.file_extension === 'mp3') {
                console.log(' This is a audio file ');
                _this15.isAudio = true;
                _this15.hideImageSpace = false;
                _this15.isCaptureImage = false;
              }

              if (res.status == true) {
                _this15.common.showAlertSuccess('Match File Upload Successful'); // this.FileTransferResponse = res.upload_details;


                _this15.FileTransferResponse = res;
                console.log('File Transfer Success:', _this15.FileTransferResponse);

                _this15.common.hideLoader();
              } else {
                _this15.common.presentToast('File upload Failed');

                console.log('File Transfer Error');

                _this15.common.hideLoader();
              } // this.FileTransferResponse = data;

            }, function (err) {
              console.log('File Transfer Error:', err);
            });
          } // fileChangeEvent(e, type) {
          //   if (type==='folder') {
          //     if (e.target.files.length > 2) {
          //       this.common.showAlert('Try to choose maximum 2 media');
          //     } 
          //     this.selectedFiles = e.target.files;
          //     for (let i=0; i<e.target.files.length; i++) {
          //       this.myFiles.push(e.target.files[i]);
          //     }
          //     this.urls = [];
          //     console.log('urls:',this.urls);
          //     let files = e.target.files;
          //     console.log('files:',files);
          //     if (files) {
          //       for (let file of files) {
          //         let reader = new FileReader();
          //         var error = reader.error
          //         reader.onload = (e:any) => {
          //           console.log('Loaded:', reader.result);
          //           console.log('error:', error);
          //           this.urls.push(e.target.result);
          //           console.log('urls:',this.urls);
          //         }
          //         reader.readAsDataURL(file);
          //       }
          //     }
          //   } 
          // }
          // ToSendMatch() {
          // console.log('Send Match Button Clicked');
          // const params = {
          //   rival_userid : this.userDetails.userid,
          //   opponent_userid: this.Match.senderid,
          //   personal_matchid: this.Match.match_id,
          //   match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
          //   caption: this.closedMatchCaption,
          //   matchfile: ''
          // };
          // console.log('params:',params);
          // this.common.postMethod('create_closedmatch',params).then((res:any) => {
          // console.log('res:',res);
          // // this.common.navController.navigateRoot('tab6');
          // setTimeout(() => {
          //   this.common.presentToast('Your Closed Match is Uploaded Successfully');
          //   this.common.router.navigate(['tabs/tab6']);
          // }, 2000);
          // }, (err) => {
          // // this.common.presentToast('This area is under Development');
          // this.MatchThisForm.reset();
          // console.log('Error:',err);
          // });
          // }

        }, {
          key: "ToSendMatch",
          value: function ToSendMatch(e) {
            var _this16 = this;

            console.log('Send Match Button Clicked');
            this.common.showLoader();
            var params = {
              rival_userid: this.userDetails.userid,
              opponent_userid: this.Match.compare_data[0].id,
              personal_matchid: this.Match.match_id,
              caption: this.closedMatchCaption,
              link: JSON.stringify(this.linkArray),
              text: JSON.stringify(this.wordArray),
              sub_captions: JSON.stringify(this.anArray),
              seen_status: '0',
              select_medias: JSON.stringify(this.matchIds)
            };
            this.common.postMethod('create_closedmatch', params).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        console.log('res:', res);

                        if (res.status === true) {
                          this.common.presentToast(' Your closed match invitaion send successfully ');
                          this.popoverController.dismiss();
                        } else {
                          this.common.presentToast(' Your closed match invitaion sending failed ');
                        }

                        _context12.next = 4;
                        return this.common.hideLoader();

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return this.common.hideLoader();

                      case 2:
                        console.log('err:', err);
                        this.popoverController.dismiss();

                      case 4:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            }); // if (this.isLink==true) {
            //   if (this.closedMatchCaption!=undefined && this.closedMatchLink!=undefined) {
            //     this.common.showLoader();
            //     const regex  = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';
            //     if (this.closedMatchLink.match(regex)!=null) {
            //       console.log('Matching link');
            //         this.closedMatchLink = this.closedMatchLink;
            //           console.log('closedMatchLink',this.closedMatchLink);
            //     } else {
            //       console.log('No Match');
            //         this.closedMatchLink = 'https://'+this.closedMatchLink;
            //           console.log('closedMatchLink',this.closedMatchLink);
            //     }
            //     console.log(this.userType);
            //     let params = {
            //       rival_userid : this.userDetails.userid,
            //       opponent_userid: this.Match.compare_data[0].id,
            //       personal_matchid: this.Match.match_id,
            //       match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
            //       caption: this.closedMatchCaption,
            //       link: this.closedMatchLink,
            //       text: '',
            //       match_link:'',
            //       match_text: '',
            //       seen_status: '0',
            //       select_medis: JSON.stringify(this.matchIds),
            //     }
            //     console.log('params:',params);
            //       this.common.postMethod('create_closedmatch',params).then(async (res:any) => {
            //         console.log('res:',res);
            //         if (res.status === true) {
            //           this.common.presentToast(' Your closed match invitaion send successfully ');
            //           this.popoverController.dismiss();
            //         } else {
            //           this.common.presentToast(' Your closed match invitaion sending failed ');
            //         }
            //         await this.common.hideLoader();
            //     }, async err => {
            //       await this.common.hideLoader();
            //         console.log('err:',err);
            //         this.popoverController.dismiss();  
            //     });
            //   } else {
            //     this.common.showAlert('All fields are mandatory');
            //   }
            // } else if (this.isWordings==true) {
            //   if (this.closedMatchCaption!=undefined && this.closedMatchWording!=undefined) {
            //     let params = {
            //       rival_userid : this.userDetails.userid,
            //       opponent_userid: this.Match.compare_data[0].id,
            //       personal_matchid: this.Match.match_id,
            //       match_filename: this.userType === 'sender' ? this.Match.compare_data[0].image : this.Match.compare_data[1].image,
            //       caption: this.closedMatchCaption,
            //       link: '',
            //       text: this.closedMatchWording,
            //       match_link:'',
            //       match_text: '',
            //       seen_status: '0',
            //       select_medis: JSON.stringify(this.matchIds),
            //     }
            //     console.log('params:',params);
            //       this.common.postMethod('create_closedmatch',params).then((res:any) => {
            //         console.log('res:',res);
            //         if (res.status === true) {
            //           this.common.presentToast(' Your closed match invitaion send successfully ');
            //           this.popoverController.dismiss();
            //         } else {
            //           this.common.presentToast(' Your closed match invitaion sending failed ');
            //         }
            //     }, err => {
            //         console.log('err:',err);
            //           console.log('headers:',err.Headers);
            //           this.popoverController.dismiss();
            //     });
            //   } else {
            //     this.common.showAlert('All fields are mandatory');
            //   }
            // } else if (this.hideImageSpace==true && e.type==="click") {
            //   // if (this.FileTransferResponse.length!=0) {
            //   //   console.log('FileTransferResponse:',this.FileTransferResponse);
            //   //   if (this.FileTransferResponse.status === true) {
            //   //     this.common.popoverController.dismiss();
            //   //     this.common.presentToast(' Your closed match send successfully ');
            //   //   } else {
            //   //     this.common.popoverController.dismiss();
            //   //     this.common.presentToast('Closed Match Send Failed!');
            //   //   }
            //   // } else {
            //   //   console.log('FileTransferResponse:',this.FileTransferResponse);
            //   //   this.common.popoverController.dismiss();
            //   //   this.common.showAlert('You must need to upload a media');
            //   // }
            //   //---------------------------------------------------------------------------------Add multi files
            //   console.log(this,this.myFiles);
            //   for( let i=0; i<this.myFiles.length; i++ ) 
            //   {
            //     this.uploadFile2(this.myFiles[i], 'image');
            //   }
            //   //--------------------------------------------------------------------------------------------------------------------
            // } else if (this.isImage) {
            //     // this.uploadFile2(this.cameraData, 'image'); 
            //     this.common.popoverController.dismiss();
            // } else if (this.isAudio) {
            //     // this.uploadFile2(this.documentData, 'file');
            //     this.common.popoverController.dismiss();
            // } else if (this.isVideo) {
            //   // this.uploadFile2(this.videoData, 'video');
            //   this.common.popoverController.dismiss();
            // }
            //  else if (this.isPickDocuments) {
            //   this.uploadFile2(this.audioData, 'audio');
            // }
          }
        }]);

        return SendMatchComponent;
      }();

      SendMatchComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__["MediaCapture"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      SendMatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"dismissButton()\">\n            <img src='../../assets/icon/back.png' alt=\"\" style=\"width:10px; height: 18px;\">\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n       <div>\n        <div style=\"text-align: center; padding: 5px;\">\n          <h4 style=\"font-weight: 600;\">Match This</h4>\n          <div style=\" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;\">\n            <div *ngIf=\"this.selectItem.length == 1\">\n              <div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[0]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[0]].media\">{{this.Match.compare_data[this.selectItem[0]].media}}</a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"this.selectItem.length == 2\">\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;\">\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[0]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[0]].media\">{{this.Match.compare_data[this.selectItem[0]].media}}</a>\n                </div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[1]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[1]].media\">{{this.Match.compare_data[this.selectItem[1]].media}}</a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"this.selectItem.length == 3\">\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;\">\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:150px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[0]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:150px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='link'\" style=\"width:150px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[0]].media\">{{this.Match.compare_data[this.selectItem[0]].media}}</a>\n                </div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:150px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[1]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:150px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='link'\" style=\"width:150px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[1]].media\">{{this.Match.compare_data[this.selectItem[1]].media}}</a>\n                </div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:150px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[2]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:150px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" controls style=\"width:150px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='link'\" style=\"width:150px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[2]].media\">{{this.Match.compare_data[this.selectItem[2]].media}}</a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"this.selectItem.length == 4\">\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;\">\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[0]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[0]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[0]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[0]].media\">{{this.Match.compare_data[this.selectItem[0]].media}}</a>\n                </div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[1]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[1]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[1]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[1]].media\">{{this.Match.compare_data[this.selectItem[1]].media}}</a>\n                </div>\n              </div>\n              <div style=\"display: grid; grid-template-columns: 1fr 1fr;\">\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[2]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[2]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[2]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[2]].media\">{{this.Match.compare_data[this.selectItem[2]].media}}</a>\n                </div>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[3]].media_type==='text'\" readonly class=\"text-match-style\" autoGrow style=\"width:195px; height: 255px;padding:5px\">{{this.Match.compare_data[this.selectItem[3]].media}}</div>\n                <img *ngIf=\"this.Match.compare_data[this.selectItem[3]].media_type==='image' || this.Match.compare_data[this.selectItem[3]].media_type===''\" [src]=\"this.Match.compare_data[this.selectItem[3]].media\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"width:195px; height: 255px;padding:5px\">\n                <video *ngIf=\"this.Match.compare_data[this.selectItem[3]].media_type==='video'\" [src]=\"this.Match.compare_data[this.selectItem[3]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></video>\n                <audio *ngIf=\"this.Match.compare_data[this.selectItem[3]].media_type==='audio'\" [src]=\"this.Match.compare_data[this.selectItem[3]].media\" controls style=\"width:195px; height: 255px;padding:5px\"></audio>\n                <div *ngIf=\"this.Match.compare_data[this.selectItem[3]].media_type==='link'\" style=\"width:195px; height: 255px;padding:5px\">\n                  <a [href]=\"this.Match.compare_data[this.selectItem[3]].media\">{{this.Match.compare_data[this.selectItem[3]].media}}</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"padding: 5px; border: 2px solid grey; border-radius: 5px; text-align: center;\">\n\n            <ion-input [(ngModel)]=\"closedMatchCaption\" placeholder=\"Enter Caption\" autocapitalize=\"true\" style=\"border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;\"></ion-input>\n            \n            <div *ngFor=\"let att of this.anArray; let idx = index\">\n              <div *ngIf=\"att.type=='text'\">\n                <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"wordArray[att.position].value\" style=\"border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;\"></ion-input>  \n              </div>\n              <div *ngIf=\"att.type=='link'\">\n                <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"linkArray[att.position].value\" style=\"border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;\"></ion-input>  \n              </div>\n              <ion-input type=\"text\" placeholder=\"Enter sub caption\" [(ngModel)]=\"anArray[idx].value\" style=\"border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;\"></ion-input>\n            </div>\n            \n            <img src=\"../../assets/icon/bg2new.png\" style=\"height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px\" (click)=\"presentActionSheet()\">\n\n            <ion-row style=\"border: 1px solid transparent; height: 47px;\">\n              <ion-label style=\"position: relative; top: 8px; margin-right: 15px;\">Make it Anonymous</ion-label>\n              <ion-toggle [(ngModel)]=\"isAnonymous\"></ion-toggle>\n            </ion-row>\n            <div style=\"display: flex; justify-content: space-between;\">\n\n            <div style=\"display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px;\">\n              <ion-button shape=\"round\" size=\"small\" (click)=\"dismissButton()\" style=\"text-transform: none;\">cancel</ion-button>\n            </div>\n\n            <ion-button type=\"submit\" shape=\"round\" size=\"small\" (click)=\"ToSendMatch($event)\" style=\"text-transform: none;\">proceed</ion-button>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </ion-content>\n  "
      })], SendMatchComponent);
      /***/
    },

    /***/
    "mcEP":
    /*!*********************************************************!*\
      !*** ./src/app/personal-match/personal-match.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function mcEP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 25px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\nion-slide > :first-child {\n  width: 100%;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -15px;\n  left: 0;\n  width: 100%;\n}\n\n.text-match-style {\n  background-color: #70707269;\n  padding: 7px;\n  border-radius: 10px;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  width: 175px;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLW1hdGNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFZSjs7QUFWQTtFQUNVLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFhVjs7QUFYQTtFQUNJLHlCQUFBO0FBY0o7O0FBUkE7RUFDSSxXQUFBO0FBV0o7O0FBVEE7OztFQUlJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBWUo7O0FBUE07OztFQUNHLFlBQUE7QUFZVCIsImZpbGUiOiJwZXJzb25hbC1tYXRjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWljb25zLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNvbC1pY29ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlYmViZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG5cclxufVxyXG4ubWFpbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi52cy1pbWd7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTA0cHg7XHJcbiAgICBtYXJnaW46IDBweCAtMTRweCAwcHggLTI1cHg7O1xyXG59XHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcbi50aHVtbmFpbC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5oNntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdGFyLWljb24tbmVhci1uYW1le1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDY3cHg7XHJcbiAgICByaWdodDogMjZweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1yaWdodHtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwcHhcclxufVxyXG4uYm90dG9tLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM4MDgwODAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3R0b20tY2xvY2staW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcbi8vIGlvbi1zbGlkZSB7XHJcbi8vICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgXHJcbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1tYXRjaC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI2OTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxufVxyXG4gIC5tZCxcclxuICAuaW9zLFxyXG4gIC53cCB7XHJcbiAgICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgICAgICAgIHdpZHRoOiAxMDBweDsvL3lvdXIgd2lkdGggaGVyZVxyXG4gICAgIH1cclxuICAgfSJdfQ== */";
      /***/
    },

    /***/
    "tUvZ":
    /*!*****************************************************************!*\
      !*** ./src/app/personal-match/personal-match-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PersonalMatchPageRoutingModule */

    /***/
    function tUvZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalMatchPageRoutingModule", function () {
        return PersonalMatchPageRoutingModule;
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


      var _personal_match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./personal-match.page */
      "Q041");

      var routes = [{
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["PersonalMatchPage"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["SenderPopoverComponent"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["ReceiverPopoverComponent"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["SendMatchComponent"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["RevealedCountComponent"]
      }, {
        path: '',
        component: _personal_match_page__WEBPACK_IMPORTED_MODULE_3__["CountComponent"]
      }];

      var PersonalMatchPageRoutingModule = function PersonalMatchPageRoutingModule() {
        _classCallCheck(this, PersonalMatchPageRoutingModule);
      };

      PersonalMatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonalMatchPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=personal-match-personal-match-module-es5.js.map