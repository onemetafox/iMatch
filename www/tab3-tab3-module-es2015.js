(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page, PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "CjQN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let Tab3Page = class Tab3Page {
    constructor(common, socialSharing, popoverController, storageservice) {
        this.common = common;
        this.socialSharing = socialSharing;
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.searchTerm = "";
        this.searching = false;
        this.ShowFooter = true;
        this.showCategory = true;
        this.userDetails = [];
        this.selectUsers = [];
        this.allUsers = [];
        this.BestiesList = [];
        this.SquadList = [];
        this.Fans = [];
        this.FansOf = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
    }
    ngOnInit() {
        this.listAllUsers();
        this.setFilteredItems();
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])())
            .subscribe(search => {
            this.searching = false;
            this.showCategory = true;
            this.searchTerm = search;
            this.setFilteredItems();
        });
    }
    ionViewWillEnter() {
        this.selectUsers = [];
        console.log(this.selectUsers);
        console.log('in ionViewWillEnter');
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
            if (this.userDetails.userid != undefined) {
                this.listAllUsers();
                this.toGetUsersCategory();
            }
            else {
                console.log('*** UserId undefined ***');
            }
        });
        // this.presentPopover();
    }
    listAllUsers() {
        let params = {
            userid: this.userDetails.userid
        };
        console.log('userid:', params);
        this.common.listUsers('Listusers', params).subscribe((res) => {
            console.log('res:', res);
            this.allUsers = res.details.name;
            console.log('allUsers:', this.allUsers);
        });
    }
    onSearchInput(e) {
        this.searching = true;
        this.showCategory = false;
        console.log('E:', e);
        this.setFilteredItems();
    }
    setFilteredItems() {
        this.allUsers = this.filterItems(this.searchTerm);
    }
    addToMatch() {
        if (this.selectUsers.length > 0) {
            this.common.navCtrl.navigateForward(['/before-match-invitation'], { queryParams: { selectUsers: JSON.stringify(this.selectUsers) } });
        }
        else {
            this.common.showAlertSuccess('Please select invitiation member');
        }
    }
    filterItems(searchTerm) {
        console.log(searchTerm);
        return this.allUsers.filter(user => {
            return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    togoBack() {
        this.common.router.navigate(['/tabs/tab6']);
    }
    toShare() {
        const msg = 'Share iMatch with your friends:';
        this.socialSharing.share(msg).then(() => {
            // Success!
        }).catch(() => {
            // Error!
        });
    }
    setUser(e, user) {
        if (e.target.checked) {
            this.selectUsers.push(user);
        }
        else {
            this.selectUsers.splice(this.selectUsers.indexOf(user), 1);
        }
    }
    toListCategory(val) {
        console.log('To List Specific Category Clicked');
        this.ShowFooter = false;
        console.log('Value:', val);
        if (val == 'bestie') {
            if (this.BestiesList.length != 0) {
                this.common.presentLoading();
                this.allUsers = this.BestiesList;
                console.log('allUsers:', this.allUsers);
                this.common.presentToast('Your Bestie List is Successfully Fetched ...');
            }
            else {
                this.allUsers = this.BestiesList;
                this.common.presentToast('You are having no besties in your Bestie List');
            }
        }
        else if (val == 'squad') {
            if (this.SquadList.length != 0) {
                this.common.presentLoading();
                this.allUsers = this.SquadList;
                console.log('allUsers:', this.allUsers);
                this.common.presentToast(' Your Squad List is Successfully Fetched ... ');
            }
            else {
                this.allUsers = this.SquadList;
                this.common.presentToast(' You are having no squad in your `Squad List` ');
            }
        }
        else if (val == 'fan') {
            if (this.Fans.length != 0) {
                this.common.presentLoading();
                this.allUsers = this.Fans;
                console.log('allUsers:', this.allUsers);
                this.common.presentToast(' Your Fan List is Successfully Fetched ... ');
            }
            else {
                this.allUsers = this.Fans;
                this.common.presentToast(' You are having no fans in your `Fans List` ');
            }
        }
        else if (val == 'fan-of') {
            if (this.FansOf.length != 0) {
                this.common.presentLoading();
                this.allUsers = this.FansOf;
                console.log('allUsers:', this.allUsers);
                this.common.presentToast(' Your Fan Of List is Successfully Fetched ... ');
            }
            else {
                this.allUsers = this.FansOf;
                this.common.presentToast(' You are having no fan of in your `Fan Of List` ');
            }
        }
        else if (val == 'invite') {
            this.toShare();
            this.listAllUsers();
        }
    }
    toGetUsersCategory() {
        console.log('To Get User Category Wise Working');
        let params = {
            id: this.userDetails.userid
        };
        console.log('params:', params);
        this.common.postMethod('Listbesties', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.BestiesList = res.details.besties;
                this.SquadList = res.details.squad;
                this.Fans = res.details.fan;
                this.FansOf = res.details.fan_of;
            }
            else {
                this.common.presentToast(' Error Loading Categories ');
            }
        }, err => {
            console.log('Error:', err);
        });
    }
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: PopoverComponent,
                cssClass: 'contact-popover',
                showBackdrop: true,
                translucent: true,
                backdropDismiss: false
            });
            return yield popover.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);

let PopoverComponent = class PopoverComponent {
    constructor(popoverController, storageservice) {
        this.popoverController = popoverController;
        this.storageservice = storageservice;
        this.userDetails = [];
    }
    ionViewWillEnter() {
        console.log('Entered Into Popover Page');
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
        });
        setTimeout(() => {
            this.popoverController.dismiss();
        }, 5000);
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: `
  <div style="padding: 15px; background-color: #707072;">
    <div style="border: 1px solid #ffffff8f; padding: 15px; border-radius: 4px; color: #dcdcdc;">
      <img src="../../assets/icon/help-invitation-terms/bar.png" alt="">
      <h6>Hai {{userDetails.name}} !</h6>
      <h2>Whom you want to call for a media match ?
      </h2>
    </div>
  </div>  
   `,
        styles: [" .my-custom-class: --width: 300px "]
    })
], PopoverComponent);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    },
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <img src=\"../../assets/icon/chat/back.png\" alt=\"\" style=\"height: 16px;width: 10px;position: absolute;left: 20px;\" (click)=\"togoBack()\">\r\n        <ion-title style=\"width: 300px;margin-left: 40px;\">CALL FOR A MATCH</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n\r\n    <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n    <div *ngIf=\"searching\" class=\"spinner-container\">\r\n      <ion-spinner></ion-spinner>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-left: 20px;\" *ngIf=\"showCategory==true\">\r\n\r\n      <ion-chip style=\"background-color: #ffc3008f;\" (click)=\"toListCategory('bestie')\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Bestie List</ion-label>\r\n      </ion-chip>\r\n  \r\n      <ion-chip style=\"background-color: #00bcd480;\" (click)=\"toListCategory('squad')\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Squad List</ion-label>\r\n      </ion-chip>\r\n  \r\n      <ion-chip style=\"background-color: #ff980087;\" (click)=\"toListCategory('fan')\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Fan List</ion-label>\r\n      </ion-chip>\r\n  \r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-left: 20px;\" *ngIf=\"showCategory==true\">\r\n      <ion-chip style=\"background-color: bisque;\" (click)=\"toListCategory('fan-of')\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Fan Of List</ion-label>\r\n      </ion-chip>\r\n  \r\n      <ion-chip style=\"background: #8bc34a9e;\" (click)=\"toListCategory('invite')\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Invite Others</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n\r\n    <div *ngFor=\" let user of allUsers\">  \r\n      <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\">\r\n        <div>\r\n          <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%;\" (click)=\"addToMatch()\">\r\n        </div>\r\n    \r\n        <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n        <ion-checkbox color=\"primary\" (ionChange) = \"setUser($event, user)\"></ion-checkbox>\r\n        \r\n      </ion-item>\r\n    </div>\r\n  \r\n  </ion-content>\r\n  <ion-footer class=\"ion-no-border\">\r\n    <div style=\"display: flex; justify-content: end;\">\r\n      <ion-chip ion-fixed style=\"background-color: #00bcd480;\" (click)=\"addToMatch()\">\r\n        <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n        <ion-label style=\"font-size: 12px; font-weight: 600;\">Call invitation</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n  </ion-footer>\r\n\r\n  <!-- <ion-footer *ngIf=\"ShowFooter==true\" class=\"animate__animated animate__slideOutDown animate__delay-3s\">\r\n    <ion-toolbar>\r\n      <div style=\"background-color: #707072; margin: 10px;\">\r\n        <div style=\"border: 1px solid #ffffff8f; padding: 10px; border-radius: 4px; color: #dcdcdc;\">\r\n          <div style=\"text-align: center;\">\r\n            <img src=\"../../assets/icon/help-invitation-terms/bar.png\" alt=\"\">\r\n          </div>\r\n          <h6 *ngIf=\"userDetails\">Hai {{userDetails.name}} !</h6>\r\n          <h2>Whom you want to call for a match ?\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-footer>   -->");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _tab3_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\n.sc-ion-popover-md-h {\n  --width: 350px !important;\n}\n\n.contact-popover .popover-content {\n  --width: 300px;\n}\n\nion-popover .popover-content {\n  --width: 420px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUNJO0VBQ0ksY0FBQTtBQUVSIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufVxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnNjLWlvbi1wb3BvdmVyLW1kLWgge1xyXG4gICAgLS13aWR0aCA6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhY3QtcG9wb3ZlciAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIC0td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3ZlciB7XHJcbiAgICAvLyAtLXdpZHRoOiAzMjBweDtcclxuICAgIC5wb3BvdmVyLWNvbnRlbnR7XHJcbiAgICAgICAgLS13aWR0aDogNDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map