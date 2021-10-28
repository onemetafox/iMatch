(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squad-search-squad-search-module"],{

/***/ "3Trc":
/*!*****************************************************!*\
  !*** ./src/app/squad-search/squad-search.module.ts ***!
  \*****************************************************/
/*! exports provided: SquadSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadSearchPageModule", function() { return SquadSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _squad_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squad-search-routing.module */ "42YQ");
/* harmony import */ var _squad_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./squad-search.page */ "SMT0");







let SquadSearchPageModule = class SquadSearchPageModule {
};
SquadSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _squad_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SquadSearchPageRoutingModule"]
        ],
        declarations: [_squad_search_page__WEBPACK_IMPORTED_MODULE_6__["SquadSearchPage"]]
    })
], SquadSearchPageModule);



/***/ }),

/***/ "42YQ":
/*!*************************************************************!*\
  !*** ./src/app/squad-search/squad-search-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SquadSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadSearchPageRoutingModule", function() { return SquadSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _squad_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./squad-search.page */ "SMT0");




const routes = [
    {
        path: '',
        component: _squad_search_page__WEBPACK_IMPORTED_MODULE_3__["SquadSearchPage"]
    }
];
let SquadSearchPageRoutingModule = class SquadSearchPageRoutingModule {
};
SquadSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SquadSearchPageRoutingModule);



/***/ }),

/***/ "JysF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/squad-search/squad-search.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 20px;\">SEARCH SQUAD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (ionChange)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <ion-item lines=\"none\" class=\"item-styles\" *ngFor=\" let user of allUsers ; let i = index\" (click)=\"addToList($event,user.name,user)\">\r\n    <ion-avatar style=\"height: 50px; width: 50px;\">\r\n\r\n      <img [src]=\"user.profile_pic\" >\r\n      <!-- <img  *ngIf=\"user.profile_pic == '' \"  src=\"../../assets/icon/profile/user.png\" /> -->\r\n\r\n    </ion-avatar>\r\n    <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n    <img src=\"../../assets/icon/add.png\" alt=\"\" style=\"height: 30px; width: 30px;\" >\r\n  </ion-item>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Oj8o":
/*!*****************************************************!*\
  !*** ./src/app/squad-search/squad-search.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNxdWFkLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJzcXVhZC1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufVxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "SMT0":
/*!***************************************************!*\
  !*** ./src/app/squad-search/squad-search.page.ts ***!
  \***************************************************/
/*! exports provided: SquadSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadSearchPage", function() { return SquadSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_squad_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./squad-search.page.html */ "JysF");
/* harmony import */ var _squad_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squad-search.page.scss */ "Oj8o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let SquadSearchPage = class SquadSearchPage {
    constructor(storageservice, common) {
        this.storageservice = storageservice;
        this.common = common;
        this.searchTerm = "";
        this.searching = false;
        this.userDetails = [];
        this.allUsers = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.storageservice.storage.get('userDetails').then((val) => {
            console.log('Storage Value of userDetails:', val);
            this.userDetails = val;
            console.log('userid:', this.userDetails.userid);
            this.user_id = this.userDetails.userid;
        });
    }
    ionViewWillEnter() {
        this.listAllUsers();
    }
    ngOnInit() {
        this.storage();
        this.setFilteredItems();
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())
            .subscribe(search => {
            this.searching = false;
            this.searchTerm = search;
            this.setFilteredItems();
        });
    }
    storage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storageservice.storage.get('userDetails').then((val) => {
                console.log('Storage Value of userDetails:', val);
                this.userDetails = val;
                console.log('userid:', this.userDetails.userid);
                this.user_id = this.userDetails.userid;
                if (this.userDetails) {
                    this.common.presentLoading();
                    this.listAllUsers();
                }
                else {
                    ////
                }
            });
        });
    }
    listAllUsers() {
        console.log(this.userDetails);
        var userid = this.userDetails["userid"];
        let params = {
            userid: userid
        };
        console.log('userid:', params);
        this.common.listUsers('Listusers', params).subscribe((res) => {
            console.log('res:', res);
            this.allUsers = res.details.name;
            console.log('allUsers:', this.allUsers);
        });
    }
    onSearchInput() {
        this.searching = true;
    }
    setFilteredItems() {
        this.allUsers = this.filterItems(this.searchTerm);
    }
    addToList(event, name, user) {
        console.log('Clicked add button');
        console.log('name:', name);
        console.log('My userid:', this.userDetails.userid);
        console.log('Besty userid:', user.userid);
        console.log(user);
        // this.common.presentToast(name +' is added to your besties list ...');
        if (user.userid != '') {
            let params = {
                from: this.userDetails.userid,
                to: user.userid,
                category: 'squad'
            };
            this.common.postMethod('add_bestie', params).then((res) => {
                console.log('res:', res);
                if (res.message == "Successfully added to squadlist") {
                    this.common.router.navigate(['/squad-list']);
                    this.common.presentToast(name + ' is successfully added to your squad list ...');
                }
                else if (res.message == "Already added ") {
                    this.common.presentToast(name + ' is already in your squad list ...');
                }
            });
        }
        else {
        }
    }
    filterItems(searchTerm) {
        console.log(searchTerm);
        return this.allUsers.filter(user => {
            return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
};
SquadSearchPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
SquadSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-squad-search',
        template: _raw_loader_squad_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_squad_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SquadSearchPage);



/***/ })

}]);
//# sourceMappingURL=squad-search-squad-search-module-es2015.js.map