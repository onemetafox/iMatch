(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-view-activity-visitors-view-activity-module"],{

/***/ "5Umu":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-view-activity/visitors-view-activity.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"home-content\">\r\n    <div class=\"activity-fans\" >\r\n      <div style=\" width: 14%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" *ngIf=\"UserInfo\" (click)=\"gotoVisitorsFans($event,UserInfo)\">\r\n        <p class=\"activity_para_one\" style=\"font-weight: 100px\">FANS</p>\r\n        <P class=\"activity_para_two animate__fadeIn\" style=\"margin-top: -5px;\">{{UserInfo.fans_count}}</P>\r\n      </div>\r\n      <div class=\"border-line\"></div>\r\n\r\n      <div style=\"width: 14%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" *ngIf=\"UserInfo\" (click)=\"gotoVisitorsFansOf($event,UserInfo)\">\r\n        <p class=\"activity_para_one\">FAN OF</p>\r\n        <P class=\"activity_para_two animate__fadeIn\" style=\"margin-top: -5px; margin-left: 2px;\">{{UserInfo.fans_of_count}}</P>\r\n      </div>\r\n      <div class=\"border-line\"></div>\r\n\r\n      <div style=\"width: 15%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" *ngIf=\"UserInfo\" (click)=\"gotoVisitorsBesties($event,UserInfo)\">\r\n        <p class=\"activity_para_one\">BESTIES</p>\r\n        <P class=\"activity_para_two ; animate__animated animate__fadeIn\" style=\"margin-top: -5px; margin-left: 5px;\">{{UserInfo.bestie_count}}</P>\r\n      </div>\r\n      <div class=\"border-line\"></div>\r\n\r\n      <div style=\"width: 20%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" *ngIf=\"UserInfo\" (click)=\"gotoVisitorsSquadList($event,UserInfo)\">\r\n        <p class=\"activity_para_one\">SQUAD LIST</p>\r\n        <P class=\"activity_para_two animate__fadeIn\" style=\"margin-top: -5px; margin-left: 5px;\">{{UserInfo.squad_count}}</P>\r\n      </div>\r\n\r\n      <div style=\"right: 40px; position: absolute; text-align: center; top: 10px;\">\r\n        <!-- <img src=\"../../assets/icon/activity/man1.png\" alt=\"\" class=\"pro-image\"> -->\r\n        <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\" class=\"pro-image\"> -->\r\n        <img  *ngIf=\"UserInfo\" [src]=\"UserInfo.user_profilepic\" alt=\"\" class=\"pro-image animate__fadeIn\" style=\"padding: 2px;\" onerror=\"this.onerror=null;this.src='../../assets/icon/profile/user.png';\">\r\n\r\n        <p  *ngIf=\"UserInfo\" class=\"activity_para_two\" style=\"font-size: 10px; font-family: OpenSansLight; margin-top: -4px; font-weight: 900;\">{{UserInfo.username}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"activity-fans_text\">\r\n      <div style=\"width: 72%; text-align: center; margin-top: 5px; margin-bottom: -7px; position: relative; bottom: 10px; left: 5px;\" *ngIf=\"UserInfo\">\r\n        <P class=\"activity_para_two\" style=\"font-size: 10px; font-family: OpenSansLight; font-weight: 600;\">MATCHES</P>\r\n        <P class=\"activity_para_two\" style=\"margin: 0; font-family: OpenSansSemiBold;    position: relative; bottom: 7px;\">{{UserInfo.match_count}}</P>\r\n      </div>\r\n      <!-- <div style=\"right: 18px; position: absolute;\"> -->\r\n        <div style=\"right: 110px; position: absolute; top: 65px;\">\r\n        <!-- <div style=\"margin: 0 0 0 45px;\"> -->\r\n          <div>\r\n          <!-- <img src=\"../../assets/icon/activity/edit.png\" alt=\"\" class=\"text_logo-img\" style=\"height: 8px; width: 8px; margin: 0 0 6px -7px;\"> -->\r\n          <!-- <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -20.5px; font-family: OpenSansLight; font-weight: 100;\">Traditional Artist</P> -->\r\n          <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -20.5px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n        </div>\r\n        <div style=\"position: relative; right: 7px;\">\r\n          <!-- <div style=\"display: flex; margin-left: 38px; margin-top: -3px;\"> -->\r\n          <!-- <img src=\"../../assets/icon/activity/heart.png\" alt=\"\" class=\"text_logo-img\" style=\"height: 8px; width: 8px;\"> -->\r\n          <!-- <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -2px; font-family: OpenSansLight; font-weight: 100;\">Passionate About Cretivity</P> -->\r\n          <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -2px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n        </div>\r\n        <div style=\"position: relative; bottom: 13px; right: 7px;\">\r\n          <!-- <div style=\"display: flex; margin-left: 38px; margin-top: -4px;\"> -->\r\n          <!-- <img src=\"../../assets/icon/activity/funny.png\" alt=\"\" class=\"text_logo-img\" style=\"height: 8px; width: 8px; margin-top: -0.5px;\"> -->\r\n          <!-- <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -1.5px; font-family: OpenSansLight; font-weight: 100;\">Aspiring Art Professional...</P> -->\r\n          <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -1.5px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"activity-fans_text\">\r\n      <div style=\"width: 70%; padding-left: 10px;\">\r\n        <ion-fab style=\"left: 17px; top: 83px; width: 35px;\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n          <ion-fab-button style=\"width: 33px; height: 33px;\">\r\n            <!-- <ion-button shape=\"round\" size=\"small\" class=\"match_button\">MATCH</ion-button> -->\r\n            <img src=\"../../assets/icon/activity/plus.png\" alt=\"\" style=\"height: 15px; width: auto;\">\r\n            <!-- <ion-icon style=\"width: 20px;\" name=\"add-sharp\"></ion-icon> -->\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n        <!-- <ion-button fill=\"clear\" class=\"match_button\">MATCH</ion-button> -->\r\n      </div>\r\n      <div style=\"display: flex; justify-content: space-around; width: 30%; align-items: center; margin-top: -15px;\">\r\n        <img src=\"../../assets/icon/activity/drop_play.png\" alt=\"\" (click)=\"Popover($event)\" style=\"height: 15px;width: 15px; position: relative; right: -20px;\">\r\n        <!-- <img src=\"../../assets/icon/activity/01.png\" alt=\"\" style=\"height: 30px;width: 30px;\"> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"position: absolute; top: -1px; right: 21px\">\r\n      <!-- <img src=\"../../assets/icon/activity/badge-2.png\" alt=\"\" style=\"height: 30px;width: 30px;\"> -->\r\n    </div>\r\n    <div style=\"position: absolute; top: 30px; right: 20px\" (click)=\"toShareProfile()\">\r\n      <img src=\"../../assets/icon/activity/share.png\" alt=\"\" style=\"height: 13px;width: 13px;\">\r\n    </div>\r\n\r\n    <!--SLIDE SECTION  -->\r\n    <div class=\"recommended_section\" style=\"position: relative; top: 20px;\">\r\n      <!-- <div style=\"display: flex; justify-content: space-around; margin-bottom: 2px;\">\r\n        <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\">\r\n        <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\">\r\n        <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\">\r\n        <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\"> -->\r\n        <!-- <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\">\r\n        <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\"> -->\r\n      <!-- </div> -->\r\n      <div class=\"recommended_main_div\">\r\n        \r\n        <div style=\"display: flex; overflow-x: auto;\">\r\n          <div style=\"width: 30%;\">\r\n            <div class=\"recommended_sub_div\" (click)=\"gotoOngoingContest($event,UserInfo)\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/012.png\" alt=\"\" style=\"width: 100%; height: 40px;position: relative; bottom: 10px;\">\r\n            </div>\r\n            <p>ONGOING CONTEST</p>\r\n          </div>\r\n\r\n          <div style=\"margin-left: 5px; width: 30%;\">\r\n            <div class=\"recommended_sub_div\" (click)=\"gotoWhatWouldIDoIf($event,UserInfo)\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;height: 15px;\">\r\n            </div>\r\n            <p>WHAT WOULD I DO IF</p>\r\n          </div>\r\n\r\n          <div style=\"margin-left: 5px; width: 30%;\">\r\n            <div class=\"recommended_sub_div\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;height: 15px;\">\r\n            </div>\r\n            <p>MY FAVES / LUXURY ITEMS & WHERE TO GET</p>\r\n          </div>\r\n\r\n          <div style=\"margin-left: 5px; width: 30%;\">\r\n            <div id=\"end\" class=\"recommended_sub_div\" (click)=\"gotoVisitorsBestMoments($event,UserInfo)\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;height: 15px;\">\r\n            </div>\r\n            <p>BEST MOMENTS</p>\r\n          </div>\r\n\r\n          <div style=\"margin-left: 5px; width: 30%;\">\r\n            <div id=\"end\" class=\"recommended_sub_div\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;height: 15px;\">\r\n            </div>\r\n            <p>BESTIES ACTIONS</p>\r\n          </div>\r\n\r\n          <div style=\"margin-left: 5px; width: 30%;\">\r\n            <div id=\"end\" class=\"recommended_sub_div\">\r\n              <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\"> -->\r\n              <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;height: 15px;\">\r\n            </div>\r\n            <p>BESTIES ACTIONS</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"recommended-next-arrow\">\r\n          <img  src=\"../../assets/icon/activity/arrow.png\" alt=\"\" class=\"logo-img\">\r\n          <!-- (click)=\"scrollTo('end')\" -->\r\n        </div>\r\n      </div>\r\n\r\n      <!--PERSONAL MATCH SECTION  -->\r\n      <div class=\"personal_match_section\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n          <p style=\"font-family: OpenSansExtraBold; font-size: 14px;\" (click)=\"toShowPersonalMatch()\">Personal Match</p>\r\n          <img *ngIf=\"!showImageIcons\" src=\"../../assets/icon/activity/drop.png\" alt=\"\" (click)=\"toShowImageIcons()\">\r\n          <img *ngIf=\"showImageIcons\" src=\"../../assets/icon/activity/drop.png\" alt=\"\" (click)=\"toHideImageIcons()\">\r\n          </div>\r\n        <div>\r\n          <ion-button fill=\"clear\" class=\"open_match_button\" (click)=\"toShowOpenMatch()\">OPEN MATCH</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showImageIcons\" class=\"animate__animated animate__fadeIn\" style=\"display: flex;justify-content: space-around;text-align: center;margin: 15px 95px;\">\r\n        <div class=\"personal-match-img-icons\">\r\n          <img src=\"../../assets/icon/img.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('image')\">\r\n        </div>\r\n        <div class=\"personal-match-img-icons\">\r\n          <img src=\"../../assets/icon/vid.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('video')\">\r\n        </div>\r\n        <div class=\"personal-match-img-icons\">\r\n          <img src=\"../../assets/icon/aud.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('audio')\">      \r\n        </div>\r\n        <div class=\"personal-match-img-icons\">\r\n          <img src=\"../../assets/icon/attach.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('attachment')\">\r\n        </div>\r\n        <div class=\"personal-match-img-icons\">\r\n          <img src=\"../../assets/icon/link.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('link')\">\r\n        </div>\r\n    </div>\r\n\r\n      <!-- vs images first  -->\r\n      <p *ngIf='PersonalMatch?.length==0' class=\"no-game-found\" style=\"text-align: center;background-color: #70707238;padding: 15px;border-radius: 5px;\">Currently this user is having no Personal Matches to display here !!!</p>\r\n      <!-- <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\">\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatch; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div class=\"box_m\">\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"animate__animated animate__fadeInLeft\" *ngIf=\"!showPersonalMatch\">\r\n        <div class=\"row\" style=\"display: flex; flex-wrap: wrap;\">\r\n          <div *ngFor=\"let match of PersonalMatch; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\" style=\"margin-top:5px;padding: 5px; margin-left:3px;\">\r\n            <div *ngIf=\"match.compare_data.length == 2 || match.compare_data.length == 3\" style=\"flex-grow: 1;display: flex;\">\r\n              <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n                <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n                <ng-template #temp1>\r\n                  <div class=\"image-div_first\">\r\n                    <img *ngIf=\"item.media_type==='image'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                    <img *ngIf=\"item.media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <img *ngIf=\"item.media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <img *ngIf=\"item.media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template #temp2>\r\n                  <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                    <img *ngIf=\"item.media_type==='image'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                    <img *ngIf=\"item.media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <img *ngIf=\"item.media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                    <img *ngIf=\"item.media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  </div>\r\n                </ng-template>\r\n                \r\n                <div *ngIf=\"k !=0 \" style=\"position: relative;z-index: 100;margin-top: -40px;margin-left: -13px;\">\r\n                  <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"match.compare_data.length == 4\">\r\n              <div style=\"flex-grow: 1;display: flex;\">\r\n                <div class=\"image-div_first\">\r\n                  <img *ngIf=\"match.compare_data[0].media_type==='image'\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                  <img *ngIf=\"match.compare_data[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n                <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                  <img *ngIf=\"match.compare_data[1].media_type==='image'\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                  <img *ngIf=\"match.compare_data[1].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[1].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[1].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n              </div>\r\n              \r\n              <div style=\"flex-grow: 1;display: flex;\">\r\n                <div class=\"image-div_first\">\r\n                  <img *ngIf=\"match.compare_data[2].media_type==='image'\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                  <img *ngIf=\"match.compare_data[2].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[2].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[2].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n                <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                  <img *ngIf=\"match.compare_data[3].media_type==='image'\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[3].media_type==='video'\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                  <img *ngIf=\"match.compare_data[3].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[3].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                  <img *ngIf=\"match.compare_data[3].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                </div>\r\n              </div>\r\n\r\n              <div style=\"position: relative;z-index: 100;margin-top: -70px;margin-left: 35px;\">\r\n                <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n              </div>\r\n            </div>\r\n               \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-top: 30px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\" >\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchVideo; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <!-- <img [src]=\"match.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"> -->\r\n              <video [src]=\"match.receiver_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <!-- <img [src]=\"match.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"> -->\r\n              <video [src]=\"match.sender_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n            <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n          </div> -->\r\n          <div class=\"box_m\">\r\n            <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>{{match.likes}}</p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-top: 30px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\">\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchAudio; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.receiver_image\" style=\"object-fit: contain;\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.sender_image\" style=\"object-fit: contain;\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n            <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n          </div> -->\r\n          <div class=\"box_m\">\r\n            <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>{{match.likes}}</p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-top: 30px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\">\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchText; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.compare_data[0].image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.compare_data[1].image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n            <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n          </div> -->\r\n          <div class=\"box_m\">\r\n            <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>{{match.likes}}</p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-top: 30px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\">\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchLink; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.compare_data[0].image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"match.compare_data[1].image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n            <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n          </div> -->\r\n          <div class=\"box_m\">\r\n            <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>{{match.likes}}</p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p *ngIf='OpenMatch?.length==0' class=\"no-game-found\" style=\"margin-top: 60px; text-align: center;background-color: #70707238;padding: 15px;border-radius: 5px;\">Currently this user is having no Open Matches to display here !!!</p>\r\n      <!--    (click)=\"goToOpenMatch($event,open)\" -->\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"showOpenMatch\" class=\"animate__animated animate__fadeInRight\">\r\n        <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let open of OpenMatch, let i = index\" (click)=\"goToVisitorsOpenMatch($event, open , i)\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"open.receiver_image\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" alt=\"\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img [src]=\"open.sender_image\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" alt=\"\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 30%; left: 40%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>{{open.total_likecount}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- vs images second  -->\r\n      <!-- <div style=\"margin-top: 0px;display: flex;\">\r\n        <div style=\"width: 50%; margin-right: 3px; position: relative;\">\r\n\r\n          <div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"position: absolute; top: 35%; left: 41%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 26%; left: 42%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 26%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 68%; left: 42%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 68%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>0</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 50%; margin-left: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div-object\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div-object\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 35%; left: 44%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 69%; left: 43%;\">\r\n            <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 67%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>0</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- vs images third  -->\r\n      <!-- <div style=\"display: flex;margin-top: 0px;\">\r\n\r\n        <div style=\"width: 60%; margin-right: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 25%; left: 27%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 25%; left: 60%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 47%; left: 24%;\">\r\n            <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 47%; left: 57%;\">\r\n            <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n          </div>\r\n          <div style=\"position: absolute; top: 47%; left: 90%;\">\r\n            <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n          </div>\r\n\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>0</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 40%; margin-left: 3px; position: relative;\">\r\n          <div class=\"contest-image-div\">\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"image-div_first\">\r\n              <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div style=\"position: absolute; top: 25%; left: 40%;\">\r\n            <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n          </div>\r\n          <div class=\"box_m\">\r\n            <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n            <p>0</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div> -->\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "PayK":
/*!*************************************************************************!*\
  !*** ./src/app/visitors-view-activity/visitors-view-activity.module.ts ***!
  \*************************************************************************/
/*! exports provided: VisitorsViewActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsViewActivityPageModule", function() { return VisitorsViewActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _visitors_view_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors-view-activity-routing.module */ "QQ9p");
/* harmony import */ var _visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-view-activity.page */ "nytW");







let VisitorsViewActivityPageModule = class VisitorsViewActivityPageModule {
};
VisitorsViewActivityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visitors_view_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorsViewActivityPageRoutingModule"]
        ],
        declarations: [_visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_6__["VisitorsViewActivityPage"], _visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
    })
], VisitorsViewActivityPageModule);



/***/ }),

/***/ "QQ9p":
/*!*********************************************************************************!*\
  !*** ./src/app/visitors-view-activity/visitors-view-activity-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VisitorsViewActivityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsViewActivityPageRoutingModule", function() { return VisitorsViewActivityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitors-view-activity.page */ "nytW");




const routes = [
    {
        path: '',
        component: _visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_3__["VisitorsViewActivityPage"]
    },
    {
        path: '',
        component: _visitors_view_activity_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
    }
];
let VisitorsViewActivityPageRoutingModule = class VisitorsViewActivityPageRoutingModule {
};
VisitorsViewActivityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitorsViewActivityPageRoutingModule);



/***/ }),

/***/ "kXgI":
/*!*************************************************************************!*\
  !*** ./src/app/visitors-view-activity/visitors-view-activity.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* PAGE HEADER */\n.tabone_header {\n  background: #706f74;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n  height: 40px;\n}\n.header-line {\n  border-bottom: 1px solid #ffffff61;\n  margin-top: -7px;\n  margin-bottom: 3px;\n}\n.home-content {\n  background: #707072;\n}\n.Hamburg_icon {\n  color: #ffffff;\n}\n.tabone_header_left {\n  margin-top: -7px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 20px;\n  max-width: 22px;\n}\n.personal-match-img-icons {\n  border: 0.5px solid grey;\n  padding: 3px;\n  border-radius: 4px;\n}\n/* PAGE CONTENT */\n.toggle-button {\n  width: 30px;\n  height: auto;\n  position: relative;\n  left: 15px;\n}\n.activity-fans {\n  display: flex;\n  padding: 2px 10px;\n  padding-bottom: 0px;\n  text-align: center;\n}\n.activity_para_one {\n  font-family: OpenSansRegular;\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 600;\n}\n.activity_para_two {\n  font-family: OpenSansSemiBold;\n  font-size: 13px;\n  color: #ffffff;\n  font-weight: 600;\n  margin-top: 0px;\n  -webkit-animation: animate__fadeIn;\n          animation: animate__fadeIn;\n}\n.border-line {\n  height: 35px;\n  width: 1px;\n  background-color: #ffffff61;\n  margin-top: 23px;\n  margin-left: -10px;\n}\n.pro-image {\n  height: 53px;\n  width: 53px;\n  border-radius: 50%;\n  border: 1px solid white;\n  background-color: white;\n}\n.activity_pro_name {\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 600;\n}\n.activity-fans_text {\n  display: flex;\n  align-items: baseline;\n}\n.match_button {\n  font-size: 9px;\n  font-weight: 700;\n  margin-top: -25px;\n  --padding-end: 17px;\n  --padding-start: 17px;\n  height: 22px;\n}\n.text_logo-img {\n  height: 10px;\n  width: 10px;\n}\n/* SLIDE SECTION */\n.recommended_section {\n  padding: 10px;\n  border-radius: 25px 25px 0 0;\n  background: #ffffff;\n}\n.recommended_main_div {\n  display: flex;\n  width: 100%;\n}\n.recommended_sub_div {\n  border: 0.1px solid #9e9e9e82;\n  border-radius: 3px;\n  padding: 25px 20px 25px 10px;\n  height: 70px;\n  width: 78px;\n  margin-right: 4px;\n  box-shadow: #f0f0f0 0px 0px 2px 1px;\n}\n.recommended_sub_div img {\n  width: 80%;\n  height: 100%;\n  margin-left: 5px;\n}\n.recommended-next-arrow {\n  padding: 30px 0px;\n  margin-right: -8px;\n}\n.recommended_main_div p {\n  color: #707072;\n  font-size: 8px;\n  font-weight: 600;\n}\n/* PERSONAL MATCH SECTION */\n.personal_match_section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: -11px;\n}\n.personal_match_section p {\n  font-size: 12px;\n  font-weight: 800;\n}\n.personal_match_section img {\n  height: 30px;\n  width: 30px;\n  margin-left: 10px;\n}\n.open_match_button {\n  background: #707072;\n  border-radius: 20px;\n  color: #ffffff;\n  font-size: 9px;\n  padding: 5px 12px;\n  font-weight: 700;\n  height: 25px;\n  width: 100px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div_first {\n  height: 55px;\n  width: 45px;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.vs-image {\n  position: absolute;\n  top: 50%;\n  left: 30%;\n}\n.vs-image img {\n  width: 30px;\n  height: 30px;\n}\n.vs-image-two {\n  position: absolute;\n  top: 50%;\n  left: 62%;\n}\n.vs-image-two img {\n  width: 30px;\n  height: 30px;\n}\n.go-icon {\n  justify-content: center;\n  display: flex;\n  margin-top: 5px;\n}\n.go-icon img {\n  height: 40px;\n  width: 40px;\n}\n.box_m {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 7px 0px 7px 0px;\n}\n.box_m img {\n  height: 15px;\n}\n.box_m p {\n  margin-left: 7px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.image-div-object {\n  height: 140px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n.grid-container {\n  -moz-columns: 5 200px;\n       columns: 5 200px;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  width: 90%;\n  margin: 0 auto;\n}\n.grid-container div {\n  width: 150px;\n  margin: 0 1.5rem 1.5rem 0;\n  display: inline-block;\n  width: 100%;\n  border: solid 2px black;\n  padding: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  transition: all 0.25s ease-in-out;\n}\n.grid-container div:hover img {\n  filter: grayscale(0);\n}\n.grid-container div:hover {\n  border-color: coral;\n}\n.grid-container div img {\n  width: 100%;\n  filter: grayscale(100%);\n  border-radius: 5px;\n  transition: all 0.25s ease-in-out;\n}\n.grid-container div p {\n  margin: 5px 0;\n  padding: 0;\n  text-align: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpc2l0b3JzLXZpZXctYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQTtFQUNJLG1CQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7QUFHSjtBQURBO0VBQ0ksZ0JBQUE7QUFJSjtBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFNSjtBQUhBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhBLGlCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU1KO0FBSkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBT0o7QUFMQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVFKO0FBTkE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQVNKO0FBTkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVNKO0FBUEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQVVKO0FBUkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBV0o7QUFUQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQVlKO0FBVkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBYUo7QUFYQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBY0o7QUFYQSxrQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFjSjtBQVJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFXSjtBQVRBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FBWUo7QUFWQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVhBO0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVEM7RUFDRyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBWUo7QUFUQSwyQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFZSjtBQVZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBYUo7QUFYQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFjSjtBQVpBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBZUo7QUFiQTtFQUNJLGFBQUE7QUFnQko7QUFYQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWNKO0FBWkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWVKO0FBYkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFpQko7QUFmQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFrQko7QUFoQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW1CSjtBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFvQko7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXFCSjtBQW5CQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFzQko7QUFwQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXVCSjtBQXJCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF3Qko7QUF0QkE7RUFDSSxZQUFBO0FBeUJKO0FBdkJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEwQko7QUF4QkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQTJCSjtBQXpCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQTRCSjtBQXhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQTJCSjtBQXhCRTtFQUNFLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx1QkFBQTtPQUFBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUEyQko7QUExQkk7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUE0Qk47QUEzQk07RUFDRSxvQkFBQTtBQTZCUjtBQTNCTTtFQUNFLG1CQUFBO0FBNkJSO0FBM0JNO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQTZCUjtBQTNCTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTZCUiIsImZpbGUiOiJ2aXNpdG9ycy12aWV3LWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbi50YWJvbmVfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDZmNzQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjYxO1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4uaG9tZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbn1cclxuLkhhbWJ1cmdfaWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGFib25lX2hlYWRlcl9sZWZ0IHtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXJfcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmxvZ28taW1ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMnB4O1xyXG59XHJcblxyXG4ucGVyc29uYWwtbWF0Y2gtaW1nLWljb25zIHtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogUEFHRSBDT05URU5UICovXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTVweDtcclxufVxyXG4uYWN0aXZpdHktZmFucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY3Rpdml0eV9wYXJhX29uZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNSZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5hY3Rpdml0eV9wYXJhX3R3byB7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNTZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZV9fZmFkZUluO1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uYm9yZGVyLWxpbmUge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2MTtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuLnByby1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICB3aWR0aDogNTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmFjdGl2aXR5X3Byb19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYWN0aXZpdHktZmFuc190ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLm1hdGNoX2J1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTdweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTdweDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG4udGV4dF9sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogU0xJREUgU0VDVElPTiAqL1xyXG4ucmVjb21tZW5kZWRfc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiB9XHJcbi8vICAucmVjb21tZW5kZWRfc2VjdGlvbiBwIHtcclxuICAgIC8vICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4vLyB9XHJcbi5yZWNvbW1lbmRlZF9tYWluX2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJlY29tbWVuZGVkX3N1Yl9kaXYge1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjOWU5ZTllODI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHggMjVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDc4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGJveC1zaGFkb3c6ICNmMGYwZjAgMHB4IDBweCAycHggMXB4O1xyXG59XHJcbi5yZWNvbW1lbmRlZF9zdWJfZGl2IGltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ucmVjb21tZW5kZWQtbmV4dC1hcnJvdyB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgICAvLyByaWdodDogMDtcclxuIH1cclxuIC5yZWNvbW1lbmRlZF9tYWluX2RpdiBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcyO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBQRVJTT05BTCBNQVRDSCBTRUNUSU9OICovXHJcbi5wZXJzb25hbF9tYXRjaF9zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTExcHg7XHJcbn1cclxuLnBlcnNvbmFsX21hdGNoX3NlY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5wZXJzb25hbF9tYXRjaF9zZWN0aW9uIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5vcGVuX21hdGNoX2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmNvbnRlc3QtaW1hZ2UtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLy8gLmNvbnRlc3QtaW1hZ2UtZGl2IGltZyB7XHJcbiAgICBcclxuLy8gfVxyXG4uaW1hZ2UtZGl2IHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogMzMuMyU7XHJcbn1cclxuLmltYWdlLWRpdl9maXJzdCB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxufVxyXG4uaW1hZ2UtZGl2X2ZpcnN0IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1hZ2UtZGl2IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4udnMtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbn1cclxuLnZzLWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4udnMtaW1hZ2UtdHdvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNjIlO1xyXG59XHJcbi52cy1pbWFnZS10d28gaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5nby1pY29uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZ28taWNvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLmJveF9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDdweCAwcHggN3B4IDBweDtcclxufVxyXG4uYm94X20gaW1nIHtcclxuICAgIGhlaWdodDogMTVweDtcclxufVxyXG4uYm94X20gcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW1hZ2UtZGl2LW9iamVjdCB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuLmltYWdlLWRpdi1vYmplY3QgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGNvbHVtbnM6IDUgMjAwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgJjpob3ZlciBpbWcge1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogY29yYWw7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "nytW":
/*!***********************************************************************!*\
  !*** ./src/app/visitors-view-activity/visitors-view-activity.page.ts ***!
  \***********************************************************************/
/*! exports provided: VisitorsViewActivityPage, PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsViewActivityPage", function() { return VisitorsViewActivityPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visitors_view_activity_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visitors-view-activity.page.html */ "5Umu");
/* harmony import */ var _visitors_view_activity_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitors-view-activity.page.scss */ "kXgI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "CjQN");








let VisitorsViewActivityPage = class VisitorsViewActivityPage {
    constructor(common, popoverController, storageservice, socialSharing) {
        this.common = common;
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.socialSharing = socialSharing;
        this.userArray = [];
        this.PersonalMatch = [];
        this.showPersonalMatch = false;
        this.showOpenMatch = false;
        this.OpenMatch = [];
        this.UserInfo = [];
        this.closedMatch = [];
        this.PersonalMatchLink = [];
        this.closedMatchLink = [];
        this.closedMatchText = [];
        this.PersonalMatchText = [];
        this.closedMatchAudio = [];
        this.PersonalMatchAudio = [];
        this.closedMatchVideo = [];
        this.PersonalMatchVideo = [];
        this.showImageIcons = false;
        this.PersonalMatchImage = [];
        this.OpenMatchImage = [];
        this.OpenMatchAudio = [];
        this.OpenMatchVideo = [];
        this.OpenMatchLink = [];
        this.OpenMatchText = [];
        this.common.route.queryParams.subscribe((resp) => {
            this.userArray = resp;
            console.log('userArray:', this.userArray);
        });
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.OpenMatch = [];
        console.log('Entered into Visitors Activity Page');
        let params = {
            userid: this.userArray.userid
        };
        console.log('params:', params);
        this.common.postMethod('ActivityPage', params).then((res) => {
            console.log('res:', res);
            this.UserInfo = res.details[0];
        });
        this.common.postMethod('PersonalMatch', params).then((res) => {
            console.log('res:', res);
            this.PersonalMatch = res.details;
            // this.PersonalMatchImage = res.details.image;
            // this.PersonalMatchAudio = res.details.audio;
            // this.PersonalMatchLink = res.details.link;
            // this.PersonalMatchText = res.details.text;
            // this.PersonalMatchVideo = res.details.video;
            console.log('PersonalMatch:', this.PersonalMatch);
        });
        this.common.postMethod('OpenMatch', params).then((res) => {
            console.log('OpenMatch:', res);
            // this.OpenMatch = res.details;
            this.OpenMatchImage = res.details.image;
            this.OpenMatchAudio = res.details.audio;
            this.OpenMatchVideo = res.details.video;
            this.OpenMatchLink = res.details.link;
            this.OpenMatchText = res.details.text;
            // console.log('OpenMatch:',this.OpenMatch);
            if (this.OpenMatchAudio.length !== 0) {
                for (let i = 0; i < this.OpenMatchAudio.length; i++) {
                    this.OpenMatch.push(this.OpenMatchAudio[i]);
                }
                console.log('OpenMatch:', this.OpenMatch);
            }
            if (this.OpenMatchImage.length !== 0) {
                for (let i = 0; i < this.OpenMatchImage.length; i++) {
                    this.OpenMatch.push(this.OpenMatchImage[i]);
                }
                console.log('OpenMatch:', this.OpenMatch);
            }
            if (this.OpenMatchLink.length !== 0) {
                for (let i = 0; i < this.OpenMatchLink.length; i++) {
                    this.OpenMatch.push(this.OpenMatchLink[i]);
                }
                console.log('OpenMatch:', this.OpenMatch);
            }
            if (this.OpenMatchText.length !== 0) {
                for (let i = 0; i < this.OpenMatchText.length; i++) {
                    this.OpenMatch.push(this.OpenMatchText[i]);
                }
                console.log('OpenMatch:', this.OpenMatch);
            }
            if (this.OpenMatchVideo.length !== 0) {
                for (let i = 0; i < this.OpenMatchVideo.length; i++) {
                    this.OpenMatch.push(this.OpenMatchVideo[i]);
                }
                console.log('OpenMatch:', this.OpenMatch);
            }
        });
    }
    toShowPersonalMatch() {
        this.showOpenMatch = false;
        this.showPersonalMatch = !this.showPersonalMatch;
    }
    toShowOpenMatch() {
        this.showPersonalMatch = true;
        this.showOpenMatch = !this.showOpenMatch;
    }
    gotoWhatWouldIDoIf(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/what-would-i-do-visitor'], { queryParams: this.UserInfo });
    }
    gotoVisitorsFans(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/visitors-fans-view'], { queryParams: this.UserInfo });
    }
    gotoVisitorsFansOf(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/visitors-fans-of-view'], { queryParams: this.UserInfo });
    }
    gotoVisitorsBesties(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/visitors-besties-view'], { queryParams: this.UserInfo });
    }
    gotoVisitorsSquadList(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/visitors-squad-list-view'], { queryParams: this.UserInfo });
    }
    gotoVisitorsBestMoments(event, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.common.navCtrl.navigateForward(['/best-moment-visitors-view'], { queryParams: this.UserInfo });
    }
    goToVisitorsOpenMatch(e, open, index) {
        console.log('open:', open);
        this.UserInfo.personalMatchSlideIndex = index;
        this.UserInfo.fileType = open.sender_image_type;
        this.common.navCtrl.navigateForward(['visitors-open-match'], { queryParams: this.UserInfo });
    }
    gotoOngoingContest(e, UserInfo) {
        console.log('UserInfo:', UserInfo);
        this.UserInfo.userStatus = "VISITOR";
        this.UserInfo.visitor_id = this.userDetails.userid;
        this.common.navCtrl.navigateForward(['visitors-ongoing-match'], { queryParams: this.UserInfo });
    }
    goToPersonalMatch(e, match, index, cat) {
        this.UserInfo.userType = 'visitor';
        this.UserInfo.personalMatchSlideIndex = index;
        this.UserInfo.fileType = match.compare_data[0].image_type;
        this.UserInfo.category = cat;
        this.common.navCtrl.navigateForward(['/personal-match'], { queryParams: this.UserInfo });
        // this.common.router.navigate(['/personal-match']);
    }
    toShowImageIcons() {
        console.log('To Show Image Icon Clicked');
        this.showImageIcons = true;
    }
    toHideImageIcons() {
        console.log('To Hide Image Icon Clicked');
        this.showImageIcons = false;
    }
    gotoImageIcon(icon) {
        console.log('Icon:', icon);
        if (icon == 'image') {
            if (this.PersonalMatch != null && this.PersonalMatch.length !== 0) {
                this.common.presentLoading();
                this.ionViewWillEnter();
                this.PersonalMatch = this.PersonalMatchImage;
                this.common.presentToast('Image Match is Successfully Displayed');
            }
            else if (this.PersonalMatch === null) {
                // this.ionViewWillEnter();
                // this.PersonalMatch = this.PersonalMatchImage;
                this.common.presentToast('You are not having any image match');
            }
        }
        else if (icon == 'video') {
            if (this.PersonalMatch != null && this.PersonalMatch.length !== 0) {
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchVideo;
                this.common.presentToast('Video Match is Successfully Displayed');
            }
            else if (this.PersonalMatch === null) {
                // this.PersonalMatch = this.PersonalMatchVideo;
                this.common.presentToast('You are not having any video match');
            }
        }
        else if (icon == 'audio') {
            if (this.PersonalMatch != null && this.PersonalMatch.length !== 0) {
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchAudio;
                this.common.presentToast('Audio Match is Successfully Displayed');
            }
            else if (this.PersonalMatch === null) {
                // this.PersonalMatch = this.PersonalMatchAudio;
                this.common.presentToast('You are not having any audio match');
            }
        }
        else if (icon == 'attachment') {
            if (this.PersonalMatch != null && this.PersonalMatch.length !== 0) {
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchText;
                this.common.presentToast('Text Match is Successfully Displayed');
            }
            else if (this.PersonalMatch === null) {
                // this.PersonalMatch = this.PersonalMatchText;
                this.common.presentToast('You are not having any text match');
            }
        }
        else if (icon == 'link') {
            if (this.PersonalMatch != null && this.PersonalMatch.length !== 0) {
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchLink;
                console.log('PersonalMatch:', this.PersonalMatch);
                this.common.presentToast('Link Match is Successfully Displayed');
            }
            else if (this.PersonalMatch === null) {
                // this.PersonalMatch = this.PersonalMatchLink;
                console.log('PersonalMatch:', this.PersonalMatch);
                this.common.presentToast('You are not having any link match');
            }
        }
    }
    toShareProfile() {
        const msg = 'Share iMatch with your friends:';
        const userName = this.UserInfo.username;
        const img = 'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Youtube-icon.png';
        const content = 'Hai friend ... I am ';
        this.socialSharing.share(img, content, userName, msg).then(() => {
            // Success!
        }).catch(() => {
            // Error!
        });
    }
    Popover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('presentPopover Clicked');
            const popover = yield this.popoverController.create({
                component: PopoverComponent,
                cssClass: 'my-custom-class',
                componentProps: { key: this.userArray },
                event: ev,
                mode: "ios",
                translucent: true
            });
            return yield popover.present();
        });
    }
};
VisitorsViewActivityPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] }
];
VisitorsViewActivityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visitors-view-activity',
        template: _raw_loader_visitors_view_activity_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visitors_view_activity_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitorsViewActivityPage);

let PopoverComponent = class PopoverComponent {
    constructor(popoverController, storageservice, common, navParams) {
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.common = common;
        this.navParams = navParams;
        this.UserInfo = [];
        this.userDetails = [];
        console.log(this.navParams.get('key'));
        this.UserInfo = this.navParams.get('key');
        console.log('user in popover:', this.UserInfo);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter:', this.UserInfo);
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    onDismiss(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Val:', val);
            try {
                this.popoverController.dismiss(val);
                if (val == 'message') {
                    this.toSendMessage();
                }
                else if (val == 'favourite') {
                    this.toAddAsFavourite();
                }
                else if (val == 'squad') {
                    this.toAddAsSquad();
                }
                else if (val == 'bestie') {
                    this.toAddAsBestie();
                }
                else if (val == 'match') {
                    console.log('Call For A Match Clicked');
                    this.common.presentLoading();
                    this.common.navCtrl.navigateForward(['before-match-invitation'], { queryParams: this.UserInfo });
                }
                else if (val == 'service') {
                    this.common.presentToast('This Functionality is still in development');
                }
            }
            catch (e) {
                console.log(e);
                //click more than one time popover throws error, so ignore...
            }
        });
    }
    toSendMessage() {
        console.log('To Send Message Clicked');
        let params = {
            userid_from: this.userDetails.userid,
            userid_to: this.UserInfo.userid,
            message: 'Hai !'
        };
        console.log('params:', params);
        this.common.postMethod('Chat', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.common.presentLoading();
                this.common.presentToast(' Message Send Successful ');
                this.common.router.navigate(['/chat']);
            }
            else {
                this.common.presentLoading();
                this.common.presentToast(' Message Sending Failed ... Try After Sometime ! ');
            }
        }, (err) => {
            console.log('Error:', err);
            console.log(err.headers);
            this.common.presentToast(' Message Sending Failed ... Try After Sometime ! ');
        });
    }
    toAddAsFavourite() {
        console.log('To Add As Favourite Person');
        let params = {
            from: this.userDetails.userid,
            to: this.UserInfo.userid,
            category: 'fan'
        };
        console.log('params:', params);
        this.common.postMethod('add_fan', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.common.presentLoading();
                this.common.presentToast('This User is Successfully Added To Your Fan List');
                this.common.router.navigate(['/fans'], { queryParams: this.userDetails });
            }
            else if (res.message = 'Already added') {
                this.common.presentToast('This User is Already added to your Fan List');
            }
        }, (err) => {
            console.log('Error:', err);
            console.log(err.headers);
            this.common.presentToast('Adding this user to your fan list failed');
        });
    }
    toAddAsBestie() {
        console.log('To Add As Bestie Clicked');
        let params = {
            from: this.userDetails.userid,
            to: this.UserInfo.userid,
            category: 'bestie'
        };
        console.log('params:', params);
        this.common.postMethod('add_bestie', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.common.presentLoading();
                this.common.presentToast('This User is Successfully Added To Your Bestie List');
                this.common.router.navigate(['/besties-before']);
            }
            else if (res.message = 'Already added') {
                this.common.presentToast('This User is Already added to your Bestie List');
            }
        }, (err) => {
            console.log('Error:', err);
            console.log(err.headers);
            this.common.presentToast('Adding this user to your Bestie list failed');
        });
    }
    toAddAsSquad() {
        console.log('To Add As Squad Clicked');
        let params = {
            from: this.userDetails.userid,
            to: this.UserInfo.userid,
            category: 'squad'
        };
        console.log('params:', params);
        this.common.postMethod('add_bestie', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.common.presentLoading();
                this.common.presentToast('This User is Successfully Added To Your Squad List');
                this.common.router.navigate(['/bestie']);
            }
            else if (res.message = 'Already added') {
                this.common.presentToast('This User is Already added to your Squad List');
            }
        }, (err) => {
            this.common.presentToast('Adding this user to your Squad list failed');
            console.log('Error:', err);
            console.log(err.headers);
        });
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: `
        <ion-list mode="ios">
            <ion-item (click)="onDismiss('message')">Send Message</ion-item>
            <ion-item (click)="onDismiss('favourite')">Make as Favourite Person</ion-item>
            <ion-item (click)="onDismiss('squad')">Invite to Squad</ion-item>
            <ion-item (click)="onDismiss('bestie')">Add as Bestie</ion-item>
            <ion-item (click)="onDismiss('match')">Call For A Match</ion-item>
            <ion-item (click)="onDismiss('service')">Request for Service</ion-item>
        </ion-list>
    `
    })
], PopoverComponent);



/***/ })

}]);
//# sourceMappingURL=visitors-view-activity-visitors-view-activity-module-es2015.js.map