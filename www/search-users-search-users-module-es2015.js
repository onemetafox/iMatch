(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-users-search-users-module"],{

/***/ "FLlB":
/*!***************************************************!*\
  !*** ./src/app/search-users/search-users.page.ts ***!
  \***************************************************/
/*! exports provided: SearchUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersPage", function() { return SearchUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-users.page.html */ "Gr/U");
/* harmony import */ var _search_users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-users.page.scss */ "FdkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





// import { StorageService } from './../services/storage.service';


let SearchUsersPage = class SearchUsersPage {
    constructor(
    // private storageservice: StorageService,
    common) {
        this.common = common;
        this.searchTerm = "";
        this.searching = false;
        this.userDetails = [];
        this.allUsers = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        // this.storageservice.storage.get('userDetails').then((val) => {
        //   console.log('Storage Value of userDetails:', val);
        //   this.userDetails = val;
        // });
        this.common.route.queryParams.subscribe(resp => {
            this.userDetails = resp;
            console.log('userDetails:', this.userDetails);
        });
    }
    ngOnInit() {
        // this.storage();
        this.setFilteredItems();
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
            .subscribe(search => {
            this.searching = false;
            this.searchTerm = search;
            this.setFilteredItems();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('in ionViewWillEnter');
            yield this.common.showLoader();
            let params = {
                userid: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.listUsers('Listusers', params).subscribe((res) => {
                console.log('res:', res);
                this.allUsers = res.details.name;
                console.log('allUsers:', this.allUsers);
                this.common.hideLoader();
            }, err => {
                this.common.hideLoader();
                console.log('err:', err);
            });
            //  this.listAllUsers();
        });
    }
    // async storage() {
    //   // this.storageservice.storage.get('userDetails').then((val) => {
    //     // console.log('Storage Value of userDetails:', val);
    //     // this.userDetails = val;
    //     // console.log('userid:',this.userDetails.userid);
    //     if(this.userDetails.userid!=''){
    //       this.common.presentLoading();
    //        this.listAllUsers();
    //       } else{
    //         ////
    //       }
    //   // });  
    // }
    // listAllUsers() {
    //   // console.log(this.userDetails);  
    //   // var userid = this.userDetails["userid"];
    //   let params = {
    //     userid : this.userDetails.userid
    //   }
    //   console.log('params:',params);  
    //   this.common.listUsers('Listusers',params).subscribe((res:any) => {
    //     console.log('res:',res);
    //     this.allUsers = res.details.name;
    //     console.log('allUsers:',this.allUsers);
    //   });
    // }
    onSearchInput() {
        this.searching = true;
    }
    setFilteredItems() {
        this.allUsers = this.filterItems(this.searchTerm);
    }
    filterItems(searchTerm) {
        console.log(searchTerm);
        return this.allUsers.filter(user => {
            return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    gotoVisitorsActivity(event, user) {
        console.log('Entered Into Visitors Activity Page');
        console.log('user:', user);
        this.common.navCtrl.navigateForward(['/visitors-view-activity'], { queryParams: user });
    }
};
SearchUsersPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
SearchUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-users',
        template: _raw_loader_search_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchUsersPage);



/***/ }),

/***/ "FdkA":
/*!*****************************************************!*\
  !*** ./src/app/search-users/search-users.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJzZWFyY2gtdXNlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufVxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Gr/U":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-users/search-users.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;right: 20px;\">SEARCH iMATCH USERS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngFor=\" let user of allUsers\">  \r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\" (click)=\"gotoVisitorsActivity($event,user)\">\r\n        <div style=\"margin-left: 15px;\">\r\n      <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%; border: 1px solid black;\">\r\n        </div>\r\n\r\n    <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ubab":
/*!*************************************************************!*\
  !*** ./src/app/search-users/search-users-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersPageRoutingModule", function() { return SearchUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _search_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-users.page */ "FLlB");




const routes = [
    {
        path: '',
        component: _search_users_page__WEBPACK_IMPORTED_MODULE_3__["SearchUsersPage"]
    }
];
let SearchUsersPageRoutingModule = class SearchUsersPageRoutingModule {
};
SearchUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchUsersPageRoutingModule);



/***/ }),

/***/ "mFBr":
/*!*****************************************************!*\
  !*** ./src/app/search-users/search-users.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersPageModule", function() { return SearchUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _search_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-users-routing.module */ "Ubab");
/* harmony import */ var _search_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-users.page */ "FLlB");







let SearchUsersPageModule = class SearchUsersPageModule {
};
SearchUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _search_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchUsersPageRoutingModule"]
        ],
        declarations: [_search_users_page__WEBPACK_IMPORTED_MODULE_6__["SearchUsersPage"]]
    })
], SearchUsersPageModule);



/***/ })

}]);
//# sourceMappingURL=search-users-search-users-module-es2015.js.map