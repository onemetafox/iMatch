(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab6-tab6-module"],{

/***/ "CCDU":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabone_header\">\r\n    <div class=\"tabone_header_left\">\r\n        <ion-buttons>\r\n            <ion-menu-button class=\"Hamburg_icon\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </div>\r\n    <div class=\"tabone_header_right\">\r\n\r\n        <div style=\"margin-left: 5px; font-size: 20px; color:#ffffff; margin-top: 2px;\">\r\n            <img src=\"../../assets/icon/activity/search.png\" alt=\"\" class=\"logo-img\" (click)=\"gotoSearchUsers()\">\r\n        </div>\r\n        <div style=\"margin-left: 12px; font-size: 25px; color:#ffffff; margin-top: -1px; margin-right: -8px;\">\r\n            <img src=\"../../assets/icon/chat-message/settings.png\" alt=\"\" class=\"logo-img\" (click)=\"gotoSettings()\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"header-line\"></div>\r\n\r\n<ion-content>\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n\r\n        <ion-refresher-content style=\"margin-top: 10px;\" pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <div class=\"home-content\" *ngIf=\"userDetails\">\r\n        <div class=\"activity-fans\">\r\n            <div style=\" width: 14%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" (click)=\"goToFansPage()\" *ngIf=\"userDetails\">\r\n                <p class=\"activity_para_one\" style=\"font-weight: 100px\">FANS</p>\r\n                <P class=\"activity_para_two\" style=\"margin-top: -5px;\">{{userDetails.fans_count}}</P>\r\n            </div>\r\n            <div class=\"border-line\"></div>\r\n\r\n            <div style=\"width: 14%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" (click)=\"goToFansOfPage()\" *ngIf=\"userDetails\">\r\n                <p class=\"activity_para_one\">FAN OF</p>\r\n                <P class=\"activity_para_two\" style=\"margin-top: -5px; margin-left: 2px;\">{{userDetails.fans_of_count}}</P>\r\n            </div>\r\n            <div class=\"border-line\"></div>\r\n\r\n            <div style=\"width: 15%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" (click)=\"goToBestiesList()\" *ngIf=\"userDetails\">\r\n                <p class=\"activity_para_one\">BESTIES</p>\r\n                <P class=\"activity_para_two\" style=\"margin-top: -5px; margin-left: 5px;\">{{userDetails.bestie_count}}</P>\r\n            </div>\r\n            <div class=\"border-line\"></div>\r\n\r\n            <div style=\"width: 20%; margin-top: 15px; position: relative; bottom: 15px; margin-right: 11px;\" (click)=\"goToSquadListPage()\" *ngIf=\"userDetails\">\r\n                <p class=\"activity_para_one\">SQUAD LIST</p>\r\n                <P class=\"activity_para_two\" style=\"margin-top: -5px; margin-left: 5px;\">{{userDetails.squad_count}}</P>\r\n            </div>\r\n\r\n            <div style=\"right: 40px; position: absolute; text-align: center; top: 10px;\">\r\n                <!-- <img src=\"../../assets/icon/activity/man1.png\" alt=\"\" class=\"pro-image\"> -->\r\n                <!-- <img src=\"../../assets/icon/activity/add.png\" alt=\"\" class=\"pro-image\"> -->\r\n                <img *ngIf=\"userDetails.profile_pic != '' || userDetails.profile_pic != null || userDetails.profile_pic != undefined\" [src]=userDetails.profile_pic alt=\"\" class=\"pro-image\" style=\"padding: 1px;\" (click)=\"gotoProfile()\">\r\n\r\n                <p class=\"activity_para_two\" style=\"font-size: 10px; font-family: OpenSansLight; margin-top: -4px; font-weight: 900;\"> {{userDetails.name}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"activity-fans_text\" style=\"margin-top: -7px;\">\r\n            <div style=\"width: 72%; text-align: center; margin-top: 5px; margin-bottom: -7px; position: relative; bottom: 10px; left: 5px;\">\r\n                <P class=\"activity_para_two\" style=\"font-size: 10px; font-family: OpenSansLight; font-weight: 600;\">MATCHES</P>\r\n                <P class=\"activity_para_two\" style=\"margin: 0; font-family: OpenSansSemiBold;    position: relative; bottom: 7px;\">{{userDetails.matches_count}}</P>\r\n            </div>\r\n            <!-- <div style=\"right: 110px; position: absolute; top: 65px;\">\r\n                <div>\r\n                    <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -20.5px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n                </div>\r\n                <div style=\"position: relative; right: 7px;\">\r\n                    <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -2px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n                </div>\r\n                <div style=\"position: relative; bottom: 13px; right: 7px;\">\r\n                    <P class=\"activity_para_two\" style=\"margin-left: 4px;font-size: 7px; margin-top: -1.5px; font-family: OpenSansLight; font-weight: 100;\"></P>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n\r\n        <div class=\"activity-fans_text\">\r\n            <div style=\"width: 70%; padding-left: 10px;\">\r\n                <!-- <ion-fab style=\"left: 17px; top: 95px;\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button style=\"width: 33px; height: 33px;\"> -->\r\n                <ion-button shape=\"round\" size=\"small\" class=\"match_button\" (click)=\"gotoPersonalMatchUpload()\">MATCH</ion-button>\r\n                <!-- <img src=\"../../assets/icon/activity/plus.png\" alt=\"\" style=\"height: 15px; width: auto;\"> -->\r\n                <!-- <ion-icon style=\"width: 20px;\" name=\"add-sharp\"></ion-icon> -->\r\n                <!-- </ion-fab-button>\r\n          </ion-fab> -->\r\n                <!-- <ion-button fill=\"clear\" class=\"match_button\">MATCH</ion-button> -->\r\n            </div>\r\n            <div style=\"display: flex; justify-content: space-around; width: 30%; align-items: center; margin-top: -15px;\">\r\n                <img src=\"../../assets/icon/activity/drop_play.png\" alt=\"\" style=\"height: 15px;width: 15px; position: relative; right: -20px;\" (click)=\"presentPopover($event)\">\r\n                <img src=\"../../assets/icon/activity/01.png\" alt=\"\" style=\"height: 30px;width: 30px;\">\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"position: absolute; top: -1px; right: 21px\">\r\n            <!-- <img src=\"../../assets/icon/activity/badge-2.png\" alt=\"\" style=\"height: 30px;width: 30px;\"> -->\r\n        </div>\r\n        <div style=\"position: absolute; top: 30px; right: 20px\">\r\n            <img src=\"../../assets/icon/activity/share.png\" alt=\"\" style=\"height: 13px;width: 13px;\">\r\n        </div>\r\n\r\n        <!--SLIDE SECTION  -->\r\n        <div class=\"recommended_section\" style=\"position: relative; top: 10px;\">\r\n            <!-- <div style=\"display: flex; justify-content: space-around; margin-bottom: 2px;margin-right: 10px;\">\r\n                <img *ngIf=\"this.userDetails.ongoingmatch_count == '0'\" src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Ongoing')\">\r\n                <img *ngIf=\"this.userDetails.ongoingmatch_count != '0'\" src=\"../../assets/icon/activity/on.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Ongoing')\">\r\n                <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('What-would')\">\r\n                <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('My-Faves')\">\r\n                <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Best-Moments')\">\r\n                <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Besties-Action')\">\r\n                <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Last')\">\r\n            </div> -->\r\n            <div class=\"recommended_main_div\">\r\n                <div style=\"display: flex; overflow-x: auto;\">\r\n                    <div style=\"width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img *ngIf=\"this.userDetails.ongoingmatch_count == '0'\" src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Ongoing')\">\r\n                                    <img *ngIf=\"this.userDetails.ongoingmatch_count != '0'\" src=\"../../assets/icon/activity/on.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Ongoing')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"recommended_sub_div\" style=\"padding: 8px !important;\" (click)=\"gotoOnGoingMatch()\">\r\n                                        <img src=\"../../assets/icon/activity/012.png\" alt=\"\" (click)=\"gotoOnGoingMatch()\">\r\n                                    </div>\r\n                                    <p>ONGOING CONTEST</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 5px; width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('What-would')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"recommended_sub_div\" (click)=\"gotoWhatWouldIDoIf()\">\r\n                                        <img src=\"../../assets/icon/activity/add.png\" alt=\"\" (click)=\"gotoWhatWouldIDoIf()\">\r\n                                    </div>\r\n                                    <p>WHAT WOULD I DO IF</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 5px; width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('My-Faves')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"recommended_sub_div\">\r\n                                        <img src=\"../../assets/icon/activity/add.png\" alt=\"\">\r\n                                    </div>\r\n                                    <p>MY FAVES / LUXURY ITEMS & WHERE TO GET</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 5px; width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Best-Moments')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div id=\"end\" class=\"recommended_sub_div\" (click)=\"gotoBestMoments()\">\r\n                                        <img src=\"../../assets/icon/activity/add.png\" alt=\"\" (click)=\"gotoBestMoments()\">\r\n                                    </div>\r\n                                    <p>BEST MOMENTS</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 5px; width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Besties-Action')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div id=\"end\" class=\"recommended_sub_div\" (click)=\"gotoBestiesAction()\">\r\n                                        <img src=\"../../assets/icon/activity/add.png\" alt=\"\" (click)=\"gotoBestiesAction()\">\r\n                                    </div>\r\n                                    <p>BESTIES ACTIONS</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 5px; width: 30%;\">\r\n                        <div style=\"display:flex; justify-content: center;\">\r\n                            <div>\r\n                                <div style=\"display: flex; justify-content: center; margin-right: 8px;margin-bottom: 6px;\">\r\n                                    <img src=\"../../assets/icon/activity/off.png\" class=\"toggle-button\" alt=\"\" (click)=\"OnOffButton('Last')\">\r\n                                </div>\r\n                                <div>\r\n                                    <div id=\"end\" class=\"recommended_sub_div\">\r\n                                        <img src=\"../../assets/icon/activity/add.png\" alt=\"\">\r\n                                        <!-- <img src=\"../../assets/icon/activity/minus.png\" alt=\"\" style=\"width: 100%;\r\n                                        height: 15px;\"> -->\r\n                                    </div>\r\n                                    <p>BESTIES ACTIONS</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"recommended-next-arrow\">\r\n                    <img (click)=\"scrollTo('end')\" src=\"../../assets/icon/activity/arrow.png\" alt=\"\" class=\"logo-img\">\r\n                </div>\r\n            </div>\r\n\r\n            <!--PERSONAL MATCH SECTION  -->\r\n            <div class=\"personal_match_section\">\r\n                <div style=\"display: flex; align-items: center;\">\r\n                    <p style=\"font-family: OpenSansExtraBold; font-size: 14px;\" (click)=\"toOpenPersonalMatch()\">Personal Match</p>\r\n                    <img *ngIf=\"!showImageIcons\" src=\"../../assets/icon/activity/drop.png\" alt=\"\" (click)=\"toShowImageIcons()\">\r\n                    <img *ngIf=\"showImageIcons\" src=\"../../assets/icon/activity/drop.png\" alt=\"\" (click)=\"toHideImageIcons()\">\r\n                </div>\r\n\r\n                <div>\r\n                    <ion-button fill=\"clear\" class=\"open_match_button\" (click)=\"toShowOpenMatch()\">OPEN MATCH</ion-button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"showImageIcons\" class=\"animate__animated animate__fadeIn\" style=\"display: flex;justify-content: space-around;text-align: center;margin: 15px 95px;\">\r\n                <div class=\"personal-match-img-icons\">\r\n                    <img src=\"../../assets/icon/img.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('image')\">\r\n                </div>\r\n                <div class=\"personal-match-img-icons\">\r\n                    <img src=\"../../assets/icon/vid.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('video')\">\r\n                </div>\r\n                <div class=\"personal-match-img-icons\">\r\n                    <img src=\"../../assets/icon/aud.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('audio')\">\r\n                </div>\r\n                <div class=\"personal-match-img-icons\">\r\n                    <img src=\"../../assets/icon/attach.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('attachment')\">\r\n                </div>\r\n                <div class=\"personal-match-img-icons\">\r\n                    <img src=\"../../assets/icon/link.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('link')\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- vs images first  -->\r\n            <p *ngIf='PersonalMatch?.length==0' class=\"no-game-found\" style=\"text-align: center;background-color: #70707238;padding: 15px;border-radius: 5px;\">Currently you are having no Personal Matches to display here !!!</p>\r\n\r\n            <!-- <div class=\"grid-container\">\r\n          <div>\r\n            <img class='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"I'm so happy today!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"I see those nugs.\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"I love you so much!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"I'm the baby of the house!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"Are you gunna throw the ball?\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"C'mon friend!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"A rose for mommy!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"You gunna finish that?\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"We can't afford a cat!\"</p>\r\n          </div>\r\n          <div>\r\n            <img class='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>\r\n            <p>\"Dis my fren!\"</p>\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n            <div class=\"animate__animated animate__fadeInLeft\" *ngIf=\"!showPersonalMatch\">\r\n                <div class=\"row\" style=\"display: flex; flex-wrap: wrap;\">\r\n                    <div *ngFor=\"let match of PersonalMatch; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\" style=\"margin-top:5px;padding: 5px; margin-left:3px;\">\r\n                        <div *ngIf=\"match.compare_data.length == 2 || match.compare_data.length == 3\" style=\"flex-grow: 1;display: flex;\">\r\n                            <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n                                <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n                                <ng-template #temp1>\r\n                                    <div class=\"image-div_first\">\r\n                                        <img *ngIf=\"item.media_type==='image'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                        <img *ngIf=\"item.media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    </div>\r\n                                </ng-template>\r\n                                <ng-template #temp2>\r\n                                    <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                                        <img *ngIf=\"item.media_type==='image'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.media_type==='video'\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                        <img *ngIf=\"item.media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    </div>\r\n                                </ng-template>\r\n\r\n                                <div *ngIf=\"k !=0 \" style=\"position: relative;z-index: 100;margin-top: -40px;margin-left: -13px;\">\r\n                                    <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"match.compare_data.length == 4\">\r\n                            <div style=\"flex-grow: 1;display: flex;\">\r\n                                <div class=\"image-div_first\">\r\n                                    <img *ngIf=\"match.compare_data[0].media_type==='image'\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                        style=\"border-radius: 5px;\"></video>\r\n                                    <img *ngIf=\"match.compare_data[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                </div>\r\n                                <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                                    <img *ngIf=\"match.compare_data[1].media_type==='image'\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[1].media_type==='video'\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                        style=\"border-radius: 5px;\"></video>\r\n                                    <img *ngIf=\"match.compare_data[1].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[1].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[1].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div style=\"flex-grow: 1;display: flex;\">\r\n                                <div class=\"image-div_first\">\r\n                                    <img *ngIf=\"match.compare_data[2].media_type==='image'\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].media_type==='video'\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                        style=\"border-radius: 5px;\"></video>\r\n                                    <img *ngIf=\"match.compare_data[2].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[2].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[2].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                </div>\r\n                                <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                                    <img *ngIf=\"match.compare_data[3].media_type==='image'\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[3].media_type==='video'\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                        style=\"border-radius: 5px;\"></video>\r\n                                    <img *ngIf=\"match.compare_data[3].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[3].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    <img *ngIf=\"match.compare_data[3].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div style=\"position: relative;z-index: 100;margin-top: -70px;margin-left: 35px;\">\r\n                                <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!-- <div style=\"display: flex; margin-top: 10px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch\" class=\"animate__animated animate__fadeInLeft\">\r\n          <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatch; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n            <div class=\"contest-image-div\" style=\"flex: 0 0 50%;\">\r\n              <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n                <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n                <ng-template #temp1>\r\n                  <div class=\"image-div_first\">\r\n                    <img *ngIf=\"item.image_type==='image'\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.image_type==='video'\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n                    <img *ngIf=\"item.image_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <img *ngIf=\"item.image_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <img *ngIf=\"item.image_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template #temp2>\r\n                  <div class=\"image-div_first\">\r\n                    <img *ngIf=\"item.image_type==='image'\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.image_type==='video'\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n                    <img *ngIf=\"item.image_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <img *ngIf=\"item.image_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                    <img *ngIf=\"item.image_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.image\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n              <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n                <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"box_m\" style=\"margin-bottom: 20px;\">\r\n              \r\n            </div>\r\n          </div> \r\n\r\n          \r\n        </div> -->\r\n\r\n            <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch && this.isDisableOtherCategory===true\" class=\"animate__animated animate__fadeInLeft\">\r\n                <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchVideo; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n                    <div class=\"contest-image-div\">\r\n                        <div class=\"image-div_first\">\r\n                            <!-- <img [src]=\"match.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"> -->\r\n                            <video [src]=\"match.receiver_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n                        </div>\r\n                        <div class=\"image-div_first\">\r\n                            <!-- <img [src]=\"match.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"> -->\r\n                            <video [src]=\"match.sender_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"></video>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n                        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                    </div>\r\n                    <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n              <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n              <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            </div> -->\r\n                    <div class=\"box_m\">\r\n                        <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>{{match.likes}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch && this.isDisableOtherCategory===true\" class=\"animate__animated animate__fadeInLeft\">\r\n                <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchAudio; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n                    <div class=\"contest-image-div\">\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.receiver_image\" style=\"object-fit: contain;\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.sender_image\" style=\"object-fit: contain;\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n                        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                    </div>\r\n                    <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n              <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n              <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            </div> -->\r\n                    <div class=\"box_m\">\r\n                        <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>{{match.likes}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch && this.isDisableOtherCategory===true\" class=\"animate__animated animate__fadeInLeft\">\r\n                <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchText; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n                    <div class=\"contest-image-div\">\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.receiver_image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.sender_image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n                        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                    </div>\r\n                    <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n              <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n              <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            </div> -->\r\n                    <div class=\"box_m\">\r\n                        <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>{{match.likes}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"display: flex; flex-wrap: wrap; margin-top: 30px; margin-left: 10px;\" *ngIf=\"!showPersonalMatch && this.isDisableOtherCategory===true\" class=\"animate__animated animate__fadeInLeft\">\r\n                <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let match of PersonalMatchLink; let i = index\" (click)=\"goToPersonalMatch($event, match, i, 'personal')\">\r\n                    <div class=\"contest-image-div\">\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.receiver_image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                        <div class=\"image-div_first\">\r\n                            <img [src]=\"match.sender_image\" alt=\"\" style=\"object-fit: cover;\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"position: absolute; top: 20%; left: 35%;\">\r\n                        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                    </div>\r\n                    <!-- <div style=\"margin-top: 8px;\" class=\"box_m\">\r\n              <img *ngIf=\"match.sender_image_closedstatus===1\" style=\" margin-left: 45px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n              <img *ngIf=\"match.receiver_image_closedstatus===1\" style=\"position: absolute; margin-left: -50px;\" src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n            </div> -->\r\n                    <div class=\"box_m\">\r\n                        <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>{{match.likes}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <p *ngIf='OpenMatch?.length==0' class=\"no-game-found\" style=\"text-align: center;background-color: #70707238;padding: 15px;border-radius: 5px;\">Currently you are having no Open Matches to display here !!!</p>\r\n\r\n            <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; margin-left: 10px;\" *ngIf=\"showOpenMatch\" class=\"animate__animated animate__fadeInRight\">\r\n                <div style=\"width: 23%; margin-right: 5px; position: relative;\" *ngFor=\"let open of OpenMatch; let i=index;\" (click)=\"goToOpenMatch($event, open, i ,'Open')\">\r\n                    <div class=\"contest-image-div\">\r\n                        <div class=\"image-div_first\">\r\n                            <img *ngIf=\"open.receiver_image_type===''\" [src]=\"open.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.receiver_image_type==='image'\" [src]=\"open.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.receiver_image_type==='link'\" [src]=\"open.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.receiver_image_type==='text'\" [src]=\"open.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.receiver_image_type==='audio'\" [src]=\"open.receiver_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <video *ngIf=\"open.receiver_image_type==='video'\" [src]=\"open.receiver_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\"></video>\r\n                        </div>\r\n                        <div class=\"image-div_first\">\r\n                            <img *ngIf=\"open.sender_image_type===''\" [src]=\"open.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/no_media.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.sender_image_type==='image'\" [src]=\"open.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.sender_image_type==='link'\" [src]=\"open.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.sender_image_type==='text'\" [src]=\"open.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <img *ngIf=\"open.sender_image_type==='audio'\" [src]=\"open.sender_image\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" style=\"object-fit: cover;\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\">\r\n                            <video *ngIf=\"open.sender_image_type==='video'\" [src]=\"open.sender_image\" style=\"width: 44px; height: 75px;\" onerror=\"this.src='../../assets/icon/play-button.png';\"></video>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"position: absolute; top: 20%; left: 37%;\">\r\n                        <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                    </div>\r\n                    <div class=\"box_m\">\r\n                        <!-- <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\"> -->\r\n                        <!-- <p>{{open.total_likecount}}</p> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"personal_match_section\">\r\n          Closed Match Header\r\n          <div style=\"display: flex; align-items: center;\">\r\n            <p style=\"font-family: OpenSansExtraBold; font-size: 14px;\" (click)=\"toOpenPersonalMatch()\">Closed Match</p>\r\n          </div>\r\n        </div>\r\n\r\n        <p *ngIf='closedMatch?.length==0' class=\"no-game-found\" style=\"text-align: center;background-color: #70707238;padding: 15px;border-radius: 5px;\">Currently you are having no Closed Matches to display here !!!</p> -->\r\n\r\n            <div class=\"animate__animated animate__fadeInLeft\" *ngIf=\"!showPersonalMatch\">\r\n                <div class=\"row\" style=\"display: flex; flex-wrap: wrap;\">\r\n                    <div *ngFor=\"let match of closedMatch; let i = index\" (click)=\"goToPersonalMatch1($event, match, i, 'closed')\" style=\"margin-top:5px;padding: 5px; margin-left:3px;\">\r\n                        <div *ngIf=\"match.compare_data.length == 2\" style=\"flex-grow: 1;display: flex;\">\r\n                            <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n                                <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n                                <ng-template #temp1>\r\n                                    <div class=\"image-div_first\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                        <img *ngIf=\"item.medias[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    </div>\r\n                                </ng-template>\r\n                                <ng-template #temp2>\r\n                                    <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='image'\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.medias[0].media_type==='video'\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                        <img *ngIf=\"item.medias[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                        <img *ngIf=\"item.medias[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.medias[0].media\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                    </div>\r\n                                </ng-template>\r\n\r\n                                <div *ngIf=\"k !=0 \" style=\"position: relative;z-index: 100;margin-top: -40px;margin-left: -13px;\">\r\n                                    <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"box_m\" style=\"margin-top: 4px;\">\r\n                            <img src=\"../../assets/icon/icon-tab2.svg\" alt=\"\">\r\n                            <p>0{{match.likes}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- vs images second  -->\r\n            <!-- <div style=\"margin-top: 0px;display: flex;\">\r\n          <div style=\"width: 50%; margin-right: 3px; position: relative;\">\r\n\r\n            <div>\r\n              <div class=\"contest-image-div\">\r\n                <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                  <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                  <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"contest-image-div\">\r\n                <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                  <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"image-div_first\" style=\"height: 70px;\">\r\n                  <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div style=\"position: absolute; top: 35%; left: 41%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 26%; left: 42%;\">\r\n              <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 26%; left: 90%;\">\r\n              <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 68%; left: 42%;\">\r\n              <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 68%; left: 90%;\">\r\n              <img src=\"../../assets/icon/activity/vid1.png\" alt=\"\" style=\"width: 10px; height: 10px;\">\r\n            </div>\r\n\r\n            <div class=\"box_m\">\r\n              <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>0</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"width: 50%; margin-left: 3px; position: relative;\">\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div-object\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div-object\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div style=\"position: absolute; top: 35%; left: 44%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 69%; left: 43%;\">\r\n              <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 67%; left: 90%;\">\r\n              <img src=\"../../assets/icon/activity/aud1.png\" alt=\"\" style=\"width: 12px; height: 15px;\">\r\n            </div>\r\n\r\n            <div class=\"box_m\">\r\n              <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>0</p>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n            <!-- vs images third  -->\r\n            <!-- <div style=\"display: flex;margin-top: 0px;\">\r\n\r\n          <div style=\"width: 60%; margin-right: 3px; position: relative;\">\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div style=\"position: absolute; top: 25%; left: 27%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 25%; left: 60%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 47%; left: 24%;\">\r\n              <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 47%; left: 57%;\">\r\n              <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n            </div>\r\n            <div style=\"position: absolute; top: 47%; left: 90%;\">\r\n              <img src=\"../../assets/icon/activity/link1.png\" alt=\"\" style=\"width: 15px; height: 20px;\">\r\n            </div>\r\n\r\n            <div class=\"box_m\">\r\n              <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>0</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"width: 40%; margin-left: 3px; position: relative;\">\r\n            <div class=\"contest-image-div\">\r\n              <div class=\"image-div_first\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n              <div class=\"image-div_first\">\r\n                <img src=\"../../assets/icon/activity/grey.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n            <div style=\"position: absolute; top: 25%; left: 40%;\">\r\n              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n            </div>\r\n            <div class=\"box_m\">\r\n              <img src=\"../../assets/icon/activity/shoot.png\" alt=\"\">\r\n              <p>0</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div> -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "JT4w":
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* PAGE HEADER */\n.tabone_header {\n  background: #706f74;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n  height: 40px;\n}\n.header-line {\n  border-bottom: 1px solid #ffffff61;\n  margin-top: -7px;\n  margin-bottom: 3px;\n}\n.home-content {\n  background: #707072;\n}\n.Hamburg_icon {\n  color: #ffffff;\n}\n.tabone_header_left {\n  margin-top: -7px;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 20px;\n  max-width: 22px;\n}\n/* PAGE CONTENT */\n.toggle-button {\n  width: 50px;\n  height: auto;\n  position: relative;\n  left: 5px;\n}\n.activity-fans {\n  display: flex;\n  padding: 2px 10px;\n  padding-bottom: 0px;\n  text-align: center;\n}\n.activity_para_one {\n  font-family: OpenSansRegular;\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 600;\n}\n.activity_para_two {\n  font-family: OpenSansSemiBold;\n  font-size: 13px;\n  color: #ffffff;\n  font-weight: 600;\n  margin-top: 0px;\n}\n.border-line {\n  height: 35px;\n  width: 1px;\n  background-color: #ffffff61;\n  margin-top: 23px;\n  margin-left: -10px;\n}\n.pro-image {\n  height: 53px;\n  width: 53px;\n  border-radius: 50%;\n  border: 1px solid white;\n  background-color: white;\n}\n.activity_pro_name {\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 600;\n}\n.activity-fans_text {\n  display: flex;\n  align-items: baseline;\n}\n.match_button {\n  font-size: 9px;\n  font-weight: 700;\n  margin-top: -25px;\n  --padding-end: 17px;\n  --padding-start: 17px;\n  height: 22px;\n}\n.text_logo-img {\n  height: 10px;\n  width: 10px;\n}\n/* SLIDE SECTION */\n.recommended_section {\n  padding: 10px;\n  border-radius: 25px 25px 0 0;\n  background: #ffffff;\n}\n.recommended_main_div {\n  display: flex;\n  width: 100%;\n}\n.recommended_sub_div {\n  border: 0.1px solid #f0f0f0;\n  border-radius: 3px;\n  padding: 20px;\n  height: 70px;\n  width: 78px;\n  margin-right: 4px;\n  box-shadow: #f0f0f0 0px 0px 2px 1px;\n}\n.recommended_sub_div img {\n  width: 80%;\n  height: 100%;\n  border-radius: 50%;\n  margin-left: 5px;\n}\n.recommended-next-arrow {\n  padding: 30px 0px;\n  margin-right: -8px;\n}\n.recommended_main_div p {\n  color: #707072;\n  font-size: 8px;\n  font-weight: 600;\n}\n/* PERSONAL MATCH SECTION */\n.personal_match_section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: -11px;\n}\n.personal_match_section p {\n  font-size: 12px;\n  font-weight: 800;\n}\n.personal_match_section img {\n  height: 30px;\n  width: 30px;\n  margin-left: 10px;\n}\n.open_match_button {\n  background: #707072;\n  border-radius: 20px;\n  color: #ffffff;\n  font-size: 9px;\n  padding: 5px 12px;\n  font-weight: 700;\n  height: 25px;\n  width: 100px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div_first {\n  height: 55px;\n  width: 45px;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.personal-match-img-icons {\n  border: 0.5px solid grey;\n  padding: 3px;\n  border-radius: 4px;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.vs-image {\n  position: absolute;\n  top: 50%;\n  left: 30%;\n}\n.vs-image img {\n  width: 30px;\n  height: 30px;\n}\n.vs-image-two {\n  position: absolute;\n  top: 50%;\n  left: 62%;\n}\n.vs-image-two img {\n  width: 30px;\n  height: 30px;\n}\n.go-icon {\n  justify-content: center;\n  display: flex;\n  margin-top: 5px;\n}\n.go-icon img {\n  height: 40px;\n  width: 40px;\n}\n.box_m {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -6px;\n}\n.box_m img {\n  height: 15px;\n}\n.box_m p {\n  margin-left: 7px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.image-div-object {\n  height: 140px;\n  max-width: 50%;\n}\n.image-div-object img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n.grid-container {\n  -moz-columns: 5 200px;\n       columns: 5 200px;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  width: 90%;\n  margin: 0 auto;\n}\n.grid-container div {\n  width: 150px;\n  margin: 0 1.5rem 1.5rem 0;\n  display: inline-block;\n  width: 100%;\n  border: solid 2px black;\n  padding: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  transition: all 0.25s ease-in-out;\n}\n.grid-container div:hover img {\n  filter: grayscale(0);\n}\n.grid-container div:hover {\n  border-color: coral;\n}\n.grid-container div img {\n  width: 100%;\n  filter: grayscale(100%);\n  border-radius: 5px;\n  transition: all 0.25s ease-in-out;\n}\n.grid-container div p {\n  margin: 5px 0;\n  padding: 0;\n  text-align: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBSjtBQUdBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBSjtBQUlBLGlCQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFNQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFISjtBQU9BLGtCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBWUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQVRKO0FBWUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQVZKO0FBYUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFBO0VBR0ksaUJBQUE7RUFDQSxrQkFBQTtBQVpKO0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWJKO0FBaUJBLDJCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQWZKO0FBa0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBZko7QUFrQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBZko7QUFrQkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmSjtBQWtCQTtFQUNJLGFBQUE7QUFmSjtBQW9CQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW9CQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBakJKO0FBb0JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFqQko7QUFvQkE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBakJKO0FBb0JBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWpCSjtBQW9CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBakJKO0FBb0JBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWpCSjtBQW9CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBakJKO0FBb0JBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWpCSjtBQW9CQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBakJKO0FBb0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW9CQTtFQUNJLFlBQUE7QUFqQko7QUFvQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW9CQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBakJKO0FBb0JBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBakJKO0FBb0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBakJKO0FBb0JBO0VBQ0kscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHVCQUFBO09BQUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWpCSjtBQWtCSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWhCUjtBQWlCUTtFQUNJLG9CQUFBO0FBZlo7QUFpQlE7RUFDSSxtQkFBQTtBQWZaO0FBaUJRO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWZaO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZloiLCJmaWxlIjoidGFiNi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQQUdFIEhFQURFUiAqL1xyXG5cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNmY3NDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGluZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjYxO1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmhvbWUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG59XHJcblxyXG4uSGFtYnVyZ19pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGFib25lX2hlYWRlcl9sZWZ0IHtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbi50YWJvbmVfaGVhZGVyX3JpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMnB4O1xyXG59XHJcblxyXG5cclxuLyogUEFHRSBDT05URU5UICovXHJcblxyXG4udG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2aXR5LWZhbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2aXR5X3BhcmFfb25lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc1JlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hY3Rpdml0eV9wYXJhX3R3byB7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNTZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItbGluZSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjYxO1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLnByby1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICB3aWR0aDogNTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3Rpdml0eV9wcm9fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1mYW5zX3RleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLm1hdGNoX2J1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE3cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi50ZXh0X2xvZ28taW1nIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogU0xJREUgU0VDVElPTiAqL1xyXG5cclxuLnJlY29tbWVuZGVkX3NlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4vLyAgLnJlY29tbWVuZGVkX3NlY3Rpb24gcCB7XHJcbi8vICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbi8vIH1cclxuLnJlY29tbWVuZGVkX21haW5fZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkX3N1Yl9kaXYge1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDIzcHggMTVweCAyMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogI2YwZjBmMCAwcHggMHB4IDJweCAxcHg7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRlZF9zdWJfZGl2IGltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkLW5leHQtYXJyb3cge1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRlZF9tYWluX2RpdiBwIHtcclxuICAgIGNvbG9yOiAjNzA3MDcyO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyogUEVSU09OQUwgTUFUQ0ggU0VDVElPTiAqL1xyXG5cclxuLnBlcnNvbmFsX21hdGNoX3NlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTFweDtcclxufVxyXG5cclxuLnBlcnNvbmFsX21hdGNoX3NlY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucGVyc29uYWxfbWF0Y2hfc2VjdGlvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm9wZW5fbWF0Y2hfYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRlc3QtaW1hZ2UtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi8vIC5jb250ZXN0LWltYWdlLWRpdiBpbWcge1xyXG4vLyB9XHJcbi5pbWFnZS1kaXYge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zJTtcclxufVxyXG5cclxuLmltYWdlLWRpdl9maXJzdCB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxufVxyXG5cclxuLmltYWdlLWRpdl9maXJzdCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1tYXRjaC1pbWctaWNvbnMge1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZGl2IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZzLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMzAlO1xyXG59XHJcblxyXG4udnMtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udnMtaW1hZ2UtdHdvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNjIlO1xyXG59XHJcblxyXG4udnMtaW1hZ2UtdHdvIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmdvLWljb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZ28taWNvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5ib3hfbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxufVxyXG5cclxuLmJveF9tIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ib3hfbSBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW1hZ2UtZGl2LW9iamVjdCB7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pbWFnZS1kaXYtb2JqZWN0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGNvbHVtbnM6IDUgMjAwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAmOmhvdmVyIGltZyB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBjb3JhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "Uy4h":
/*!***********************************!*\
  !*** ./src/app/tab6/tab6.page.ts ***!
  \***********************************/
/*! exports provided: Tab6Page, PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6Page", function() { return Tab6Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab6_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab6.page.html */ "CCDU");
/* harmony import */ var _tab6_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab6.page.scss */ "JT4w");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");






// import { IOSFilePicker } from '@ionic-native/file-picker/ngx';

// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { Base64 } from '@ionic-native/base64/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';







const { Camera, Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let Tab6Page = class Tab6Page {
    constructor(common, popoverController, actionSheetCtrl, storageservice, platform, fileChooser, transfer, filePath, mediaCapture) {
        this.common = common;
        this.popoverController = popoverController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storageservice = storageservice;
        this.platform = platform;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.mediaCapture = mediaCapture;
        this.userDetails = [];
        this.userArray = [];
        this.PersonalMatch = [];
        this.closedMatch = [];
        this.showPersonalMatch = false;
        this.showOpenMatch = false;
        this.showImageIcons = false;
        this.isDisableOtherCategory = true;
        this.OpenMatchImage = [];
        this.OpenMatchAudio = [];
        this.OpenMatchVideo = [];
        this.OpenMatchLink = [];
        this.OpenMatchText = [];
        this.closedMatchImage = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
        this.common.route.queryParams.subscribe(resp => {
            this.userDetails = resp;
            console.log('userDetails:', this.userDetails);
            // this.userDetails = this.userDetails;
            // console.log('Combining both arrays');
            this.ionViewWillEnter();
        });
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
        const Video_Ext = ['mp4', 'webm', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'ogg', 'm4p', 'm4v', 'avi', 'wmv', 'mov', 'qt', 'flv', 'swf', 'avchd'];
        console.log('Video_Ext:', Video_Ext);
    }
    toOpenPersonalMatch() {
        this.showOpenMatch = false;
        this.showPersonalMatch = !this.showPersonalMatch;
    }
    toShowOpenMatch() {
        this.showPersonalMatch = true;
        this.showOpenMatch = !this.showOpenMatch;
    }
    ionViewWillEnter() {
        this.OpenMatch = [];
        this.closedMatch = [];
        this.storageservice.storage.get('userDetails').then((val) => {
            if (val == null) {
            }
            else {
                this.userDetails = val;
                const userid = this.userDetails.userid;
                const name = 'get_profile_pic/';
                this.common.http.get(this.common.ajx.BaseUrl + name + userid).subscribe((res) => {
                    this.userArray = res.details[0];
                    this.userDetails = this.userArray;
                    this.storageservice.setStorage('userDetails', res.details[0]);
                });
            }
            if (this.userDetails.userid != '') {
                let params = {
                    userid: this.userDetails.userid
                };
                console.log(params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log("Response------------------------", res);
                    this.PersonalMatch = res.details;
                    // this.PersonalMatchImage = res.details.image;
                    // this.PersonalMatchAudio = res.details.audio;
                    // this.PersonalMatchVideo = res.details.video;
                    // this.PersonalMatchLink = res.details.link;
                    // this.PersonalMatchText = res.details.text;
                });
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log(res.details);
                    // this.closedMatchImage = res.details.image;
                    // this.closedMatchAudio = res.details.audio;
                    // this.closedMatchLink = res.details.link;
                    // this.closedMatchText = res.details.text;
                    // this.closedMatchVideo = res.details.video;
                    // if (this.closedMatchAudio.length!==0) {
                    //   for (let i=0; i < this.closedMatchAudio.length; i++) {
                    //     this.closedMatch.push(this.closedMatchAudio[i]);
                    //   }
                    //   console.log('closedMatch:', this.closedMatch);
                    // } 
                    // if (this.closedMatchImage.length!==0) {
                    //   for (let i=0; i < this.closedMatchImage.length; i++) {
                    //     this.closedMatch.push(this.closedMatchImage[i]);
                    //   }
                    //   console.log('closedMatch:', this.closedMatch);
                    // } 
                    // if (this.closedMatchLink.length!==0) {
                    //   for (let i=0; i < this.closedMatchLink.length; i++) {
                    //     this.closedMatch.push(this.closedMatchLink[i]);
                    //   }
                    //   console.log('closedMatch:', this.closedMatch);
                    // } 
                    // if (this.closedMatchText.length!==0) {
                    //   for (let i=0; i < this.closedMatchText.length; i++) {
                    //     this.closedMatch.push(this.closedMatchText[i]);
                    //   }
                    //   console.log('closedMatch:', this.closedMatch);
                    // } 
                    // if (this.closedMatchVideo.length!==0) {
                    //   for (let i=0; i < this.closedMatchVideo.length; i++) {
                    //     this.closedMatch.push(this.closedMatchVideo[i]);
                    //   }
                    //   console.log('closedMatch:', this.closedMatch);
                    // } 
                    this.closedMatch = res.details;
                });
                this.common.postMethod('OpenMatch', params).then((res) => {
                    console.log('OpenMatch:', res);
                    this.OpenMatchImage = res.details.image;
                    this.OpenMatchAudio = res.details.audio;
                    this.OpenMatchVideo = res.details.video;
                    this.OpenMatchLink = res.details.link;
                    this.OpenMatchText = res.details.text;
                    if (this.OpenMatchAudio != null && this.OpenMatchAudio.length !== 0) {
                        for (let i = 0; i < this.OpenMatchAudio.length; i++) {
                            this.OpenMatch.push(this.OpenMatchAudio[i]);
                        }
                        console.log('OpenMatch:', this.OpenMatch);
                    }
                    if (this.OpenMatchImage != null && this.OpenMatchImage.length !== 0) {
                        for (let i = 0; i < this.OpenMatchImage.length; i++) {
                            this.OpenMatch.push(this.OpenMatchImage[i]);
                        }
                        console.log('OpenMatch:', this.OpenMatch);
                    }
                    if (this.OpenMatchLink != null && this.OpenMatchLink.length !== 0) {
                        for (let i = 0; i < this.OpenMatchLink.length; i++) {
                            this.OpenMatch.push(this.OpenMatchLink[i]);
                        }
                        console.log('OpenMatch:', this.OpenMatch);
                    }
                    if (this.OpenMatchText != null && this.OpenMatchText.length !== 0) {
                        for (let i = 0; i < this.OpenMatchText.length; i++) {
                            this.OpenMatch.push(this.OpenMatchText[i]);
                        }
                        console.log('OpenMatch:', this.OpenMatch);
                    }
                    if (this.OpenMatchVideo != null && this.OpenMatchVideo.length !== 0) {
                        for (let i = 0; i < this.OpenMatchVideo.length; i++) {
                            this.OpenMatch.push(this.OpenMatchVideo[i]);
                        }
                        console.log('OpenMatch:', this.OpenMatch);
                    }
                });
                // this.OnlineOfflineStatus();
            }
            else {
                console.log('UserId is Empty');
            }
        });
        this.isDisableOtherCategory = true;
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.ionViewWillEnter();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ngOnInit() {
    }
    OnOffButton(name) {
        console.log('ON / OFF Button Clicked');
        console.log('Name:', name);
        if (name == 'Ongoing') {
            this.common.presentToast('Your `Ongoing Matches` Box view is disabled from Visitors');
        }
        else if (name == 'What-would') {
            this.common.presentToast('Your `What Would I Do` Box view is disabled from Visitors');
        }
        else if (name == 'My-Faves') {
            this.common.presentToast('Your `My Faves/Luxury Items & Where To Get` Box view is disabled from Visitors');
        }
        else if (name == 'Best-Moments') {
            this.common.presentToast('Your `Best Moments` Box view is disabled from Visitors');
        }
        else if (name == 'Besties-Action') {
            this.common.presentToast('Your `Besties Action` Box view is disabled from Visitors');
        }
        else if (name = 'Last') {
            this.common.presentToast('Your `Besties Action` Box view is disabled from Visitors');
        }
    }
    gotoProfile() {
        this.common.router.navigate(['/tabs/tab7']);
    }
    gotoOnGoingMatch() {
        // this.common.router.navigate(['/tabs/tab8']);
        this.userArray.userStatus;
        this.userArray.visitor_id = this.userDetails.userid;
        this.common.navCtrl.navigateForward(['visitors-ongoing-match'], { queryParams: this.userArray });
    }
    // OnlineOfflineStatus() {
    //   console.log('OnlineOfflineStatus');
    //   let params = {
    //     userid : this.userDetails.userid,
    //     status : '0'
    //   }
    //   this.common.postMethod('Online_Offline_status',params).then((res:any) => {
    //     console.log('res:',res);
    //   });
    // }
    goToPage(page) {
        const p = 'tabs/tab6/' + page;
        this.common.router.navigate([p]);
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
        this.isDisableOtherCategory = false;
        if (icon == 'image') {
            if (this.PersonalMatch.length !== 0) {
                // this.common.showLoader();
                this.common.presentLoading();
                // this.closedMatch = this.closedMatch;
                // this.ionViewWillEnter();
                this.PersonalMatch = this.PersonalMatchImage;
                console.log('PersonalMatchImage', this.PersonalMatch);
                this.common.presentToast('Image Match is Successfully Displayed');
                // this.common.hideLoader();
            }
            else {
                // this.common.showLoader();
                // this.closedMatch = this.closedMatch;
                this.common.presentToast('You are not having any image match');
                // this.common.hideLoader();
            }
        }
        else if (icon == 'video') {
            if (this.PersonalMatch.length !== 0) {
                // this.common.showLoader();
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchVideo;
                console.log('PersonalMatchVideo', this.PersonalMatch);
                // this.closedMatch = this.closedMatchVideo;
                this.common.presentToast('Video Match is Successfully Displayed');
                // this.common.hideLoader();
            }
            else {
                // this.common.showLoader();
                // this.closedMatch = this.closedMatch;
                this.common.presentToast('You are not having any video match');
                // this.common.hideLoader();
            }
            // this.common.presentToast('You are not having any Video Match');
        }
        else if (icon == 'audio') {
            if (this.PersonalMatch.length !== 0) {
                // this.common.showLoader();
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchAudio;
                console.log('PersonalMatchAudio', this.PersonalMatch);
                // this.closedMatch = this.closedMatchAudio;
                this.common.presentToast('Audio Match is Successfully Displayed');
                // this.common.hideLoader();
            }
            else {
                // this.common.showLoader();
                // this.closedMatch = this.closedMatch;
                this.common.presentToast('You are not having any audio match');
                // this.common.hideLoader();
            }
            // this.common.presentToast('You are not having any Audio Match');
        }
        else if (icon == 'attachment') {
            if (this.PersonalMatch.length !== 0) {
                // this.common.showLoader();
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchText;
                console.log('PersonalMatchText', this.PersonalMatch);
                // this.closedMatch = this.closedMatchText;
                this.common.presentToast('Text Match is Successfully Displayed');
                // this.common.hideLoader();
            }
            else {
                // this.common.showLoader();
                // this.closedMatch = this.closedMatch;
                this.common.presentToast('You are not having any text match');
                // this.common.hideLoader();
            }
            // this.common.presentToast('You are not having any Attachment Match');
        }
        else if (icon == 'link') {
            if (this.PersonalMatch.length !== 0) {
                // this.common.showLoader();
                this.common.presentLoading();
                this.PersonalMatch = this.PersonalMatchLink;
                console.log('PersonalMatchLink', this.PersonalMatch);
                // this.closedMatch = this.closedMatchLink;
                this.common.presentToast('Link Match is Successfully Displayed');
                // this.common.hideLoader();
            }
            else {
                // this.common.showLoader();
                // this.closedMatch = this.closedMatch;
                this.common.presentToast('You are not having any link match');
                // this.common.hideLoader();
            }
            // this.common.presentToast('You are not having any Link Match');
        }
    }
    goToBestiesList() {
        this.common.navCtrl.navigateForward(['/besties-before'], { queryParams: this.userDetails });
    }
    gotoCallForAMatch() {
        console.log('Call For A Match Button Clicked');
        this.common.router.navigate(['/tabs/tab3']);
    }
    goToFansPage() {
        this.userDetails.userType = 'USER';
        this.common.navCtrl.navigateForward(['fans'], { queryParams: this.userDetails });
    }
    goToFansOfPage() {
        this.common.navCtrl.navigateForward(['fans-of'], { queryParams: this.userDetails });
    }
    goToSquadListPage() {
        this.common.navCtrl.navigateForward(['squad-list'], { queryParams: this.userDetails });
    }
    goToOpenMatch(event, open, index, cat) {
        console.log('Entered into Open Match page');
        console.log('open:', open);
        this.userDetails.userType = 'owner';
        this.userDetails.personalMatchSlideIndex = index;
        this.userDetails.fileType = open.sender_image_type;
        this.userDetails.category = cat;
        this.common.navCtrl.navigateForward(['open-match'], { queryParams: this.userDetails });
    }
    goToPersonalMatch(e, match, index, cat) {
        console.log('Entered into Personal Match page:', match);
        this.userDetails.userType = 'owner';
        this.userDetails.personalMatchSlideIndex = index;
        this.userDetails.fileType = match.compare_data[0].image_type;
        this.userDetails.category = cat;
        this.common.navCtrl.navigateForward(['personal-match'], { queryParams: this.userDetails });
    }
    goToPersonalMatch1(e, match, index, cat) {
        console.log('Entered into Personal Match page:', match);
        this.userDetails.userType = 'owner';
        this.userDetails.personalMatchSlideIndex = index;
        this.userDetails.fileType = 'image';
        this.userDetails.category = cat;
        this.common.navCtrl.navigateForward(['personal-match'], { queryParams: this.userDetails });
    }
    gotoSearchUsers() {
        this.common.navCtrl.navigateForward(['/search-users'], { queryParams: this.userDetails });
    }
    gotoBestiesAction() {
        this.common.router.navigate(['/besties-actions']);
    }
    gotoWhatWouldIDoIf() {
        this.common.router.navigate(['/what-would-i-do']);
    }
    gotoBestMoments() {
        this.common.router.navigate(['/best-moments']);
    }
    scrollTo(elementId) {
        // const x = document.getElementById(elementId).offsetTop;
        // this.content.scrollToPoint(0, 220);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: PopoverComponent,
                cssClass: 'my-custom-class',
                event: ev,
                mode: "ios",
                translucent: true
            });
            return yield popover.present();
        });
    }
    gotoPersonalMatchUpload() {
        this.common.navCtrl.navigateForward(['personal-match-media-upload'], { queryParams: this.userDetails });
    }
    gotoSettings() {
        this.common.navCtrl.navigateForward(['settings']);
    }
};
Tab6Page.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] }
];
Tab6Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tab6',
        template: _raw_loader_tab6_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab6_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab6Page);

let PopoverComponent = class PopoverComponent {
    constructor(popoverController, storageservice, common) {
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.common = common;
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    onDismiss(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.popoverController.dismiss(val);
                if (val == 'editprofile') {
                    this.common.router.navigate(['/profile'], { queryParams: this.userDetails });
                }
                else if (val == 'addbesties') {
                    this.common.router.navigate(['/besties'], { queryParams: this.userDetails });
                }
                else if (val == 'addsquadlist') {
                    this.common.router.navigate(['/squad-list'], { queryParams: this.userDetails });
                }
                else if (val == 'fans-of') {
                    // this.common.router.navigate(['/fans-of']);
                }
            }
            catch (e) {
                console.log(e);
                //click more than one time popover throws error, so ignore...
            }
        });
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: `
        <ion-list mode="ios">
            <ion-item (click)="onDismiss('editprofile')">Edit Profile</ion-item>
            <ion-item (click)="onDismiss('addbesties')">Add Besties</ion-item>
            <ion-item (click)="onDismiss('addsquadlist')">Add to squad list</ion-item>
            <ion-item (click)="onDismiss('fans-of')">Booking</ion-item>
        </ion-list>
    `
    })
], PopoverComponent);



/***/ }),

/***/ "ufJq":
/*!*********************************************!*\
  !*** ./src/app/tab6/tab6-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageRoutingModule", function() { return Tab6PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab6.page */ "Uy4h");




const routes = [
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_3__["Tab6Page"]
    },
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
    }
];
let Tab6PageRoutingModule = class Tab6PageRoutingModule {
};
Tab6PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab6PageRoutingModule);



/***/ }),

/***/ "ufJr":
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.module.ts ***!
  \*************************************/
/*! exports provided: Tab6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function() { return Tab6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab6-routing.module */ "ufJq");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab6.page */ "Uy4h");







let Tab6PageModule = class Tab6PageModule {
};
Tab6PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab6PageRoutingModule"],
        ],
        declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_6__["Tab6Page"], _tab6_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
    })
], Tab6PageModule);



/***/ })

}]);
//# sourceMappingURL=tab6-tab6-module-es2015.js.map