(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-match-detail-ongoing-match-detail-module"],{

/***/ "+WV1":
/*!*******************************************************************!*\
  !*** ./src/app/ongoing-match-detail/ongoing-match-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: OnGoingMatchDetailPage, RevealedCountComponent, CountComponent, PopoverComponent, SenderPopoverComponent, ReceiverPopoverComponent, SendMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPage", function() { return OnGoingMatchDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealedCountComponent", function() { return RevealedCountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountComponent", function() { return CountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderPopoverComponent", function() { return SenderPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverPopoverComponent", function() { return ReceiverPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMatchComponent", function() { return SendMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ongoing_match_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ongoing-match-detail.page.html */ "pCjr");
/* harmony import */ var _ongoing_match_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ongoing-match-detail.page.scss */ "h0uM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "uRF+");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "iWj2");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/config */ "82od");

















const { Camera, Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let OnGoingMatchDetailPage = class OnGoingMatchDetailPage {
    constructor(storageservice, popoverController, modalController, common) {
        this.storageservice = storageservice;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.common = common;
        this.userDetails = [];
        this.PersonalMatch = [];
        this.common.route.queryParams.subscribe((resp) => {
            this.common.http.get(this.common.ajx.BaseUrl + 'get_ongoing_match/' + resp.matchid).subscribe((res) => {
                this.ongoingData = res;
                console.log("-------------------------", this.ongoingData);
            }, err => {
                console.log('err:', err);
            });
        });
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetail = val;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.common.showLoader();
        this.common.presentLoading();
        console.log('Entered into Personal Match page');
        this.slides.updateAutoHeight();
        this.slides.update();
        // this.storageservice.storage.get('userDetails').then((val) => {
        // this.userDetails = val ;
        if (this.userDetails.category == "personal") {
            let params = {
                userid: this.userDetails.userid
            };
            console.log('------------------------------params:', params);
            this.common.postMethod('PersonalMatch', params).then((res) => {
                this.PersonalMatch = res.details;
                // if ( this.userDetails.fileType === "image" ) {
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
                this.slides.slideTo(this.personalMatchSlideIndex);
                this.common.hideLoader();
            }, (err) => {
                this.ionViewWillEnter();
                console.log('Error:', err);
                console.log('Error headers:', err.headers);
                // this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
                this.common.hideLoader();
            });
        }
        else if (this.userDetails.category == "closed") {
            let params = {
                userid: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.postMethod('ClosedMatch', params).then((res) => {
                console.log('Closed-------------------res:', res);
                // this.PersonalMatchImage = res.details.image;
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
                this.PersonalMatch = res.details;
                this.slides.slideTo(this.personalMatchSlideIndex);
                console.log('closed:', this.PersonalMatch);
                this.common.hideLoader();
            }, (err) => {
                this.ionViewWillEnter();
                console.log('Error:', err);
                console.log('Error headers:', err.headers);
                this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
                this.common.hideLoader();
            });
        }
        // });
    }
    gotoPersonalMatchComments(e, match) {
        console.log('Comment View Page Clicked');
        console.log('match:', match);
        match.matchType = 'PERSONAL';
        this.common.navCtrl.navigateForward(['/comments'], { queryParams: match });
    }
    ToSendReceiverLike(e, match, match_id) {
        console.log('SenderLike BUtton Clicked', match);
        if (this.userDetails.category === 'personal') {
            let params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                image_liked: match.image_id,
            };
            console.log('params:', params);
            this.common.postMethod('personallike', params).then((res) => {
                console.log('res:', res);
                // this.userDetails.fileType = match.receiver_image_type;
                this.ionViewWillEnter();
            }, (err) => {
                console.log('Error:', err);
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
            console.log('params:', params);
            this.common.postMethod('Like', params).then((res) => {
                console.log('res:', res);
                this.ionViewWillEnter();
            }, err => {
                console.log('Error:', err);
            });
        }
    }
    ToSendSenderLike(e, match, match_id) {
        console.log('To Send Sender Like');
        if (this.userDetails.category === 'personal') {
            let params = {
                userid: this.userDetail.userid,
                matchid: match_id,
                image_liked: match.image_id,
            };
            console.log('params:', params);
            this.common.postMethod('personallike', params).then((res) => {
                console.log('res:', res);
                this.ionViewWillEnter();
            }, (err) => {
                console.log('Error:', err);
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
            console.log('params:', params);
            this.common.postMethod('Like', params).then((res) => {
                console.log('res:', res);
                this.ionViewWillEnter();
            }, err => {
                console.log('Error:', err);
            });
        }
    }
    toShowMatchHistory(ev, match) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Show Match History Button Clicked');
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
        console.log('Cat:', cat);
        if (this.userDetail.category === 'personal') {
            if (cat === 'image') {
                this.common.showLoader();
                let params = {
                    userid: this.userDetails.userid
                };
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.image;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no image Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' image Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.video;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no video Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' video Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.audio;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no audio Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' audio Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.text;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no text Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' text Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('PersonalMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.link;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no link Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' link Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.image;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no image Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' image Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.video;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no video Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' video Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.audio;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no audio Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' audio Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.text;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no text Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' text Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
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
                console.log('params:', params);
                this.common.postMethod('ClosedMatch', params).then((res) => {
                    console.log('res:', res);
                    this.PersonalMatch = res.details.link;
                    if (this.PersonalMatch.length === 0) {
                        this.common.presentToast('You are having no link Personal Matches');
                    }
                    else {
                        this.common.presentToast('You are having ' + this.PersonalMatch.length + ' link Personal Matches');
                    }
                    console.log('PersonalMatchImage:', this.PersonalMatch);
                    this.common.hideLoader();
                }, err => {
                    console.log('e:', err);
                });
            }
        }
    }
    openRevealedCount(i, type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Revealed Count');
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
            console.log(' Count');
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
            console.log('Show Sender Match Image Button Clicked');
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
            console.log('Show Receiver Match Image Button Clicked:', this.userDetails.userType);
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
OnGoingMatchDetailPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
OnGoingMatchDetailPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides', { static: true },] }]
};
OnGoingMatchDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ongoing-match-detail',
        template: _raw_loader_ongoing_match_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ongoing_match_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OnGoingMatchDetailPage);

let RevealedCountComponent = class RevealedCountComponent {
    //  userDetails: any;
    constructor(popoverController, common, navParams) {
        this.popoverController = popoverController;
        this.common = common;
        this.navParams = navParams;
        this.Match = [];
        console.log(this.navParams.get('key'));
        console.log(this.navParams.get('type'));
        this.Match = this.navParams.get('key');
        this.type = this.navParams.get('type');
    }
    ionViewWillEnter() {
        //  console.log('ionViewWillEnter:',this.Match);
    }
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
        console.log(this.navParams.get('key'));
        console.log(this.navParams.get('type'));
        this.Match = this.navParams.get('key');
        this.type = this.navParams.get('type');
    }
    ionViewWillEnter() {
        //  console.log('ionViewWillEnter:',this.Match);
    }
    openRevealedCount(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Revealed Count');
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
        console.log(this.navParams.get('key'));
        this.Match = this.navParams.get('key');
        console.log('users in popover:', this.Match);
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter:', this.Match);
    }
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
        console.log(this.navParams.get('key'));
        this.Match = this.navParams.get('key');
        this.userType = this.navParams.get('userType');
        console.log('users in popover:', this.Match);
        console.log('user type:', this.userType);
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter:', this.Match);
    }
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
        console.log('Send Match Button Clicked');
        console.log('Match:', m);
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
    ionViewWillEnter() {
        console.log('ionViewWillEnter:', this.Match);
    }
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
        console.log(e.target);
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
              <video *ngIf="item.media_type==='video'" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)"></video>
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
                <video *ngIf="item.media_type==='video'" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)"></video>
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
            <video *ngIf="Match.compare_data[0].media_type==='video'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></video>
            <audio *ngIf="Match.compare_data[0].media_type==='audio'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></audio>
            <div *ngIf="Match.compare_data[0].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
              <a [href]="Match.compare_data[0].media">{{Match.compare_data[0].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[1].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">{{Match.compare_data[1].media}}</div>
            <img *ngIf="Match.compare_data[1].media_type==='image' || Match.compare_data[1].media_type===''" [src]="Match.compare_data[1].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <video *ngIf="Match.compare_data[1].media_type==='video'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></video>
            <audio *ngIf="Match.compare_data[1].media_type==='audio'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></audio>
            <div *ngIf="Match.compare_data[1].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
              <a [href]="Match.compare_data[1].media">{{Match.compare_data[1].media}}</a>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngIf="Match.compare_data[2].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">{{Match.compare_data[2].media}}</div>
            <img *ngIf="Match.compare_data[2].media_type==='image' || Match.compare_data[2].media_type===''" [src]="Match.compare_data[2].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <video *ngIf="Match.compare_data[2].media_type==='video'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></video>
            <audio *ngIf="Match.compare_data[2].media_type==='audio'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></audio>
            <div *ngIf="Match.compare_data[2].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
              <a [href]="Match.compare_data[2].media">{{Match.compare_data[2].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[3].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">{{Match.compare_data[3].media}}</div>
            <img *ngIf="Match.compare_data[3].media_type==='image' || Match.compare_data[3].media_type===''" [src]="Match.compare_data[3].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <video *ngIf="Match.compare_data[3].media_type==='video'" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)"></video>
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

//   <div style="display: flex; margin-bottom: 10px; padding: 5px; justify-content: center;">
//   <img [src]="this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image" style="height: 100px; width: 100px; margin-bottom: 10px; border-radius: 10px; position: relative; left: -5px;" onerror="this.src='../../assets/icon/no_media.png';" (click)="presentActionSheet()">
//   <img *ngIf="hideImageSpace===true && isCaptureImage==false" src="../../assets/icon/bg2new.png" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" (click)="presentActionSheet()">
//   <img *ngIf="isImage==true && isCaptureImage==true" [src]="FileTransferResponse.filename" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';">
//   <video *ngIf="isVideo==true && isCaptureVideo==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></video>
//   <audio *ngIf="isAudio==true && isCaptureAudio==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></audio>
// </div>
let SendMatchComponent = class SendMatchComponent {
    constructor(popoverController, modalController, actionSheetCtrl, storageservice, mediaCapture, fileChooser, filePath, transfer, common, formbuilder, navParams, http) {
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
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ionViewWillEnter() {
        console.log("selecteditem--------------------------", this.Match);
        for (var i = 0; i < this.selectItem.length; i++) {
            this.matchIds.push(this.Match.compare_data[this.selectItem[i]].media_id);
        }
        console.log(this.matchIds);
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
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Action Sheet Clicked');
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
                            console.log('Wording clicked');
                        }
                    },
                    {
                        text: 'Share Links',
                        icon: 'link',
                        handler: () => {
                            this.linkArray.push({ value: 'http://' });
                            this.Add('link');
                            this.PickLinks();
                            console.log('Share clicked');
                        }
                    },
                    {
                        text: 'Capture Image',
                        icon: 'camera',
                        handler: () => {
                            this.anArray.push({ value: '', type: 'image' });
                            this.CaptureImage();
                            console.log('Camera clicked');
                        }
                    },
                    {
                        text: 'Capture Video',
                        icon: 'videocam',
                        handler: () => {
                            this.anArray.push({ value: '', type: 'video' });
                            this.CaptureVideo();
                            console.log("Gallery clicked");
                        }
                    },
                    {
                        text: 'Capture Audio',
                        icon: 'mic-circle',
                        handler: () => {
                            this.anArray.push({ value: '', type: 'audio' });
                            this.CaptureAudio();
                            console.log("Audio clicked");
                        }
                    },
                    {
                        text: 'Other Files',
                        icon: 'folder-open',
                        handler: () => {
                            this.anArray.push({ value: '', type: 'file' });
                            this.PickDocuments();
                            console.log('Folder clicked');
                        }
                    },
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancel clicked");
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    SendWordings() {
        console.log('Wording');
        this.isWordings = true;
        console.log('isWordings:', this.isWordings);
        this.hideImageSpace = false;
        console.log('hideImageSpace:', this.hideImageSpace);
        this.isLink = false;
        console.log('isLink:', this.isLink);
    }
    PickLinks() {
        console.log('Pick Links Button Presses');
        this.isLink = true;
        console.log('isLink:', this.isLink);
        this.isWordings = false;
        console.log('isWordings:', this.isWordings);
        this.hideImageSpace = false;
        console.log('hideImageSpace:', this.hideImageSpace);
    }
    CaptureImage() {
        console.log('CaptureImage');
        this.isLink = false;
        this.isWordings = false;
        this.hideImageSpace = true;
        this.isCaptureImage = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings, 'isCaptureImage:', this.isCaptureImage);
        const options = { limit: 1 };
        this.mediaCapture.captureImage(options)
            .then((data) => {
            console.log('data[0]:', data[0]);
            this.cameraData = data[0];
            this.uploadFile2(data[0], 'image');
        }, (err) => console.error(err));
    }
    CaptureVideo() {
        console.log('CaptureVideo');
        this.isLink = false;
        this.isWordings = false;
        this.hideImageSpace = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
        this.isCaptureImage = true;
        this.isCaptureVideo = true;
        const options = { limit: 1, duration: 2, quality: 90 };
        this.mediaCapture.captureVideo(options)
            .then((data) => {
            console.log('data[0]:', data[0]);
            this.videoData = data[0];
            this.uploadFile2(data[0], 'video');
        }, (err) => console.error(err));
    }
    CaptureAudio() {
        console.log('CaptureAudio');
        this.isLink = false;
        this.isWordings = false;
        this.hideImageSpace = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
        this.isCaptureImage = true;
        this.isCaptureAudio = true;
        const options = { limit: 1 };
        this.mediaCapture.captureAudio(options)
            .then((data) => {
            console.log('data[0]:', data[0]);
            this.audioData = data[0];
            this.uploadFile2(data[0], 'audio');
        }, (err) => console.error(err));
    }
    PickDocuments() {
        console.log('PickDocuments');
        this.isLink = false;
        this.isWordings = false;
        this.hideImageSpace = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
        this.isCaptureImage = true;
        this.isPickDocuments = true;
        let file;
        this.fileChooser.open()
            .then(uri => {
            console.log('uri:', uri);
            this.filePath.resolveNativePath(uri)
                .then(filePath => {
                console.log('filePath:', filePath);
                let fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
                console.log('fileNameFromPath:', fileNameFromPath);
                file = {
                    name: fileNameFromPath,
                    fullPath: filePath
                };
                this.documentData = file;
                this.uploadFile2(file, 'file');
            })
                .catch(err => console.log(err));
        })
            .catch(e => console.log(e));
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
        console.log('options:', options);
        let filePath;
        if (type !== 'audio') {
            filePath = encodeURI(file.fullPath);
            console.log(filePath);
        }
        else {
            filePath = file.fullPath;
        }
        this.common.showLoader();
        const fileTransfer = this.transfer.create();
        const fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/create_closedmatch';
        fileTransfer.onProgress((e) => {
            let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
            console.log("progress:" + prg + '%');
            this.common.presentToast('Uploaded ' + prg + '% of file');
        });
        const formData = new FormData();
        for (let i = 0; i < this.myFiles.length; i++) {
            formData.append("filename[]", this.myFiles[i]);
        }
        this.http.post(_services_config__WEBPACK_IMPORTED_MODULE_14__["baseUrl"] + 'iMatch/api/v1/create_closedmatch', formData).subscribe((res) => {
            console.log(res);
            if (res['message'] === 'Successfully uploaded') {
                this.common.presentToast('File Uploaded Successful');
                this.common.router.navigate(['tabs/tab6']);
            }
            else {
                this.common.presentToast('File Upload Failed !!!');
            }
        }, err => {
            console.log('err', err);
            console.log(err.headers);
        });
        fileTransfer.upload(filePath, fileUplaodUrl, options)
            .then((data) => {
            console.log('File Transfer Success:', data);
            console.log(JSON.parse(data.response));
            let res = JSON.parse(data.response);
            console.log('res:', res);
            if (res.file_extension === 'mp4') {
                console.log('This is a video file');
                this.isVideo = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'aac') {
                console.log(' This is a audio file ');
                this.isAudio = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'png') {
                console.log(' This is a image file ');
                this.isImage = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'jpg') {
                console.log(' This is a image file ');
                this.isImage = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            else if (res.file_extension === 'mp3') {
                console.log(' This is a audio file ');
                this.isAudio = true;
                this.hideImageSpace = false;
                this.isCaptureImage = false;
            }
            if (res.status == true) {
                this.common.showAlertSuccess('Match File Upload Successful');
                // this.FileTransferResponse = res.upload_details;
                this.FileTransferResponse = res;
                console.log('File Transfer Success:', this.FileTransferResponse);
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
    // fileChangeEvent(e, type) {
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
    ToSendMatch(e) {
        console.log('Send Match Button Clicked');
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
            console.log('res:', res);
            if (res.status === true) {
                this.common.presentToast(' Your closed match invitaion send successfully ');
                this.popoverController.dismiss();
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
        // if (this.isLink==true) {
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
};
SendMatchComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__["MediaCapture"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
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
              <div *ngIf="att.type=='text'">
                <ion-input type="text" placeholder="" [(ngModel)]="wordArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <div *ngIf="att.type=='link'">
                <ion-input type="text" placeholder="" [(ngModel)]="linkArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <ion-input type="text" placeholder="Enter sub caption" [(ngModel)]="anArray[idx].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>
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

/***/ "PW8U":
/*!*********************************************************************!*\
  !*** ./src/app/ongoing-match-detail/ongoing-match-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: OnGoingMatchDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPageModule", function() { return OnGoingMatchDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "gMqc");
/* harmony import */ var _ongoing_match_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ongoing-match-detail-routing.module */ "rboF");
/* harmony import */ var _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ongoing-match-detail.page */ "+WV1");








let OnGoingMatchDetailPageModule = class OnGoingMatchDetailPageModule {
};
OnGoingMatchDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ongoing_match_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnGoingMatchDetailPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxIonicImageViewerModule"]
        ],
        declarations: [_ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["OnGoingMatchDetailPage"], _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"], _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["SenderPopoverComponent"], _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["ReceiverPopoverComponent"],
            _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["SendMatchComponent"], _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["RevealedCountComponent"], _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_7__["CountComponent"]]
    })
], OnGoingMatchDetailPageModule);



/***/ }),

/***/ "h0uM":
/*!*********************************************************************!*\
  !*** ./src/app/ongoing-match-detail/ongoing-match-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-icons-container {\n  text-align: center;\n  margin-top: 20px;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-bottom: 25px;\n}\n\n.col-icon {\n  border: 1px solid #bebebf;\n  border-radius: 5px;\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 220px;\n  width: 165px;\n  border-radius: 10px;\n  margin-top: 17px;\n}\n\n.vs-img {\n  height: 28px;\n  width: 28px;\n  position: relative;\n  top: 104px;\n  margin: 0px -14px 0px -25px;\n}\n\n.shoot-grey-icon-img {\n  float: right;\n  height: 42px;\n  width: 45px;\n  background: white;\n  position: relative;\n  bottom: 27px;\n  padding: 9px;\n  border-radius: 50%;\n  right: 17px;\n  box-shadow: 1px 1px 8px 1px;\n}\n\n.thumnail-img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  bottom: 130px;\n}\n\n.person-name-text {\n  margin-left: 32px;\n  position: relative;\n  bottom: 20px;\n  font-size: 12px;\n  color: black;\n}\n\n.under-name-text {\n  font-size: x-small;\n  position: relative;\n  left: 32px;\n  bottom: 29px;\n}\n\nh6 {\n  color: black;\n  font-weight: 900;\n  font-size: small;\n  position: relative;\n}\n\n.star-icon-near-name {\n  height: 20px;\n  width: 20px;\n  float: right;\n  position: relative;\n  bottom: 67px;\n  right: 26px;\n}\n\n.icon-near-number-count-left {\n  float: right;\n  height: 23px;\n  width: 23px;\n  margin-left: 10px;\n  position: relative;\n  bottom: 30px;\n}\n\n.icon-near-number-count-right {\n  height: 23px;\n  width: 23px;\n  margin-left: 22px;\n  position: relative;\n  bottom: 30px;\n}\n\n.bottom-container {\n  background: #80808030;\n  text-align: center;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-bottom: -8px;\n  color: black;\n}\n\n.bottom-right-time-note {\n  position: relative;\n  left: 125px;\n  bottom: 7px;\n}\n\n.bottom-clock-img {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  float: left;\n  left: 103px;\n  top: 6px;\n}\n\nion-slides {\n  --bullet-background:black;\n}\n\nion-slide > :first-child {\n  width: 100%;\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: -15px;\n  left: 0;\n  width: 100%;\n}\n\n.text-match-style {\n  background-color: #70707269;\n  padding: 7px;\n  border-radius: 10px;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  width: 175px;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9uZ29pbmctbWF0Y2gtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFZSjs7QUFWQTtFQUNVLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFhVjs7QUFYQTtFQUNJLHlCQUFBO0FBY0o7O0FBUkE7RUFDSSxXQUFBO0FBV0o7O0FBVEE7OztFQUlJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBWUo7O0FBUE07OztFQUNHLFlBQUE7QUFZVCIsImZpbGUiOiJvbmdvaW5nLW1hdGNoLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWljb25zLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNvbC1pY29ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JlYmViZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG5cclxufVxyXG4ubWFpbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi52cy1pbWd7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTA0cHg7XHJcbiAgICBtYXJnaW46IDBweCAtMTRweCAwcHggLTI1cHg7O1xyXG59XHJcbi5zaG9vdC1ncmV5LWljb24taW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjdweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4O1xyXG59XHJcbi50aHVtbmFpbC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udW5kZXItbmFtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGJvdHRvbTogMjlweDtcclxufVxyXG5oNntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdGFyLWljb24tbmVhci1uYW1le1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDY3cHg7XHJcbiAgICByaWdodDogMjZweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxufVxyXG4uaWNvbi1uZWFyLW51bWJlci1jb3VudC1yaWdodHtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDMwcHhcclxufVxyXG4uYm90dG9tLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM4MDgwODAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJvdHRvbS1yaWdodC10aW1lLW5vdGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5ib3R0b20tY2xvY2staW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGxlZnQ6IDEwM3B4O1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcbi8vIGlvbi1zbGlkZSB7XHJcbi8vICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLXNsaWRlID46Zmlyc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgXHJcbiAgICAgICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1tYXRjaC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzI2OTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxufVxyXG4gIC5tZCxcclxuICAuaW9zLFxyXG4gIC53cCB7XHJcbiAgICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgICAgICAgIHdpZHRoOiAxMDBweDsvL3lvdXIgd2lkdGggaGVyZVxyXG4gICAgIH1cclxuICAgfSJdfQ== */");

/***/ }),

/***/ "pCjr":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ongoing-match-detail/ongoing-match-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"position: relative;right: 25px;\">Ongoing Contest</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"margin:5px; border-radius: 10px; border: 1px solid #e2e2e2; box-shadow: 0px 4px 0px 2px #f1eded; \">\r\n        <div>\r\n            <div style=\"display:flex; justify-content: center;\">\r\n                <div style=\"display: flex;\">\r\n                    <div style=\"width: 100%; display: flex; justify-content: right; flex: 10; position: relative; left: 10px\">\r\n                        <div style=\"padding: 3px;\">\r\n                            <img src=\"../assets/icon/activity/avengers.jpg\" alt=\"\" style=\"width: 500px; height: 200px;border-radius: 5px;\">\r\n                            <div style=\"display: flex; justify-content: right; margin-top: -44px;\">\r\n                                <div style=\" width: 60px; height: 60px; background: #fff; border-radius: 50%; padding: 14px;margin-right: 14px; border: 1px solid #e2e2e2; box-shadow: 0px 3px 0px 1px #e2e2e2;\">\r\n                                    <img src=\"../assets/icon/04.png\" alt=\"\" style=\"width: 50px;height: 30px;\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\"display: flex; justify-content: start; \">\r\n                                <img src=\"../assets/icon/man4.jpg\" alt=\"\" style=\"width: 40px; height: 40px; border-radius: 50%\">\r\n                                <div style=\"padding-left: 10px; display: inline-grid;\">\r\n                                    <span style=\"font-size: 13px;\">Neymar John</span>\r\n                                    <span style=\"font-size: 10px;color: #7c7070;\">neymarjohn215@gmail.com</span>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <p>Main caption</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"display: flex; position: relative;z-index: 10; justify-content: center; margin: auto; margin-top: 90px;\">\r\n                        <img src=\"../assets/icon/vs.png\" alt=\"\" style=\"width: 30px;\">\r\n                    </div>\r\n                    <div style=\"width: 100%; display: flex; justify-content: left; flex: 10; position: relative; right: 10px\">\r\n                        <div style=\"padding: 3px\">\r\n                            <img src=\"../assets/icon/activity/aven.jpg\" alt=\"\" style=\"width: 300px; height: 200px;border-radius: 5px;\">\r\n                            <div style=\"display: flex; justify-content: right; margin-top: -44px;\">\r\n                                <div style=\" width: 60px; height: 60px; background: #fff; border-radius: 50%; padding: 14px;margin-right: 14px; border: 1px solid #e2e2e2; box-shadow: 0px 3px 0px 1px #e2e2e2;\">\r\n                                    <img src=\"../assets/icon/04.png\" alt=\"\" style=\"width: 50px;height: 30px;\">\r\n                                </div>\r\n                            </div>\r\n                            <div style=\"display: flex; justify-content: start; \">\r\n                                <img src=\"../assets/icon/man4.jpg\" alt=\"\" style=\"width: 40px; height: 40px; border-radius: 50%\">\r\n                                <div style=\"padding-left: 10px; display: inline-grid;\">\r\n                                    <span style=\"font-size: 13px;\">Neymar John</span>\r\n                                    <span style=\"font-size: 10px;color: #7c7070;\">neymarjohn215@gmail.com</span>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <p>Main caption</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"display: flex; justify-content: center;\">\r\n                <div style=\"display: flex; justify-content: space-between;\">\r\n                    <p>15m</p>\r\n                    <img src=\"../assets/icon/likes.png\" alt=\"\" style=\"width: 40px; height: 40px; margin-left: 13px;\">\r\n                </div>\r\n                <div style=\"display: flex; justify-content: space-between; padding-left: 45px;\">\r\n                    <p>18m</p>\r\n                    <img src=\"../assets/icon/share.png\" alt=\"\" style=\"width: 40px; height: 40px; margin-left: 13px;\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div style=\"display: flex; justify-content: center;background: #cec9ce; height: 78px; margin: auto; padding-top: 17px;\">\r\n            <img src=\"../assets/icon/03.png\" alt=\"\" style=\"width: 20px; height: 20px\">\r\n            <span style=\"padding-left: 10px; font-size: 14px;\">01:03:01/3:hrs</span>\r\n        </div>\r\n        <p style=\"text-align: right; margin-top: -30px; margin-right: 10px;\">3 hrs ago</p>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "rboF":
/*!*****************************************************************************!*\
  !*** ./src/app/ongoing-match-detail/ongoing-match-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OnGoingMatchDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnGoingMatchDetailPageRoutingModule", function() { return OnGoingMatchDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ongoing-match-detail.page */ "+WV1");




const routes = [
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["OnGoingMatchDetailPage"]
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["SenderPopoverComponent"],
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["ReceiverPopoverComponent"],
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["SendMatchComponent"],
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["RevealedCountComponent"],
    },
    {
        path: '',
        component: _ongoing_match_detail_page__WEBPACK_IMPORTED_MODULE_3__["CountComponent"],
    }
];
let OnGoingMatchDetailPageRoutingModule = class OnGoingMatchDetailPageRoutingModule {
};
OnGoingMatchDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnGoingMatchDetailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=ongoing-match-detail-ongoing-match-detail-module-es2015.js.map