(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-match-users-search-match-users-module"], {
    /***/
    "4ryo":
    /*!*************************************************************************!*\
      !*** ./src/app/search-match-users/search-match-users-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SearchMatchUsersPageRoutingModule */

    /***/
    function ryo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchMatchUsersPageRoutingModule", function () {
        return SearchMatchUsersPageRoutingModule;
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


      var _search_match_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-match-users.page */
      "xN84");

      var routes = [{
        path: '',
        component: _search_match_users_page__WEBPACK_IMPORTED_MODULE_3__["SearchMatchUsersPage"]
      }];

      var SearchMatchUsersPageRoutingModule = function SearchMatchUsersPageRoutingModule() {
        _classCallCheck(this, SearchMatchUsersPageRoutingModule);
      };

      SearchMatchUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchMatchUsersPageRoutingModule);
      /***/
    },

    /***/
    "GyEc":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-match-users/search-match-users.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GyEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 15px;\">SEARCH iMatch OPPONENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <!-- <div style=\"display: flex; margin-left: 20px;\" *ngIf=\"showCategory==true\">\r\n\r\n    <ion-chip style=\"background-color: #ffc3008f;\" (click)=\"toListCategory('bestie')\">\r\n      <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n      <ion-label style=\"font-size: 12px; font-weight: 600;\">Bestie List</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip style=\"background-color: #00bcd480;\" (click)=\"toListCategory('squad')\">\r\n      <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n      <ion-label style=\"font-size: 12px; font-weight: 600;\">Squad List</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip style=\"background-color: #ff980087;\" (click)=\"toListCategory('fan')\">\r\n      <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n      <ion-label style=\"font-size: 12px; font-weight: 600;\">Fan List</ion-label>\r\n    </ion-chip>\r\n\r\n  </div> -->\r\n\r\n  <!-- <div style=\"display: flex; margin-left: 20px;\" *ngIf=\"showCategory==true\">\r\n    <ion-chip style=\"background-color: bisque;\" (click)=\"toListCategory('fan-of')\">\r\n      <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n      <ion-label style=\"font-size: 12px; font-weight: 600;\">Fan Of List</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip style=\"background: #8bc34a9e;\" (click)=\"toListCategory('invite')\">\r\n      <ion-icon name=\"caret-forward-circle\"></ion-icon>\r\n      <ion-label style=\"font-size: 12px; font-weight: 600;\">Invite Others</ion-label>\r\n    </ion-chip>\r\n  </div> -->\r\n\r\n  <div *ngFor=\" let user of allUsers\">  \r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\">\r\n        <div>\r\n      <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%;\" (click)=\"addToMatch($event,user)\">\r\n        </div>\r\n\r\n    <ion-label style=\"margin-left: 15px;\" (click)=\"addToMatch($event,user)\">{{user.name}}</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "V6ya":
    /*!*****************************************************************!*\
      !*** ./src/app/search-match-users/search-match-users.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function V6ya(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1tYXRjaC11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJzZWFyY2gtbWF0Y2gtdXNlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc3R5bGVze1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAjY2NjY2NlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODAzODtcclxufVxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "fcuJ":
    /*!*****************************************************************!*\
      !*** ./src/app/search-match-users/search-match-users.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchMatchUsersPageModule */

    /***/
    function fcuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchMatchUsersPageModule", function () {
        return SearchMatchUsersPageModule;
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


      var _search_match_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-match-users-routing.module */
      "4ryo");
      /* harmony import */


      var _search_match_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-match-users.page */
      "xN84");

      var SearchMatchUsersPageModule = function SearchMatchUsersPageModule() {
        _classCallCheck(this, SearchMatchUsersPageModule);
      };

      SearchMatchUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _search_match_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchMatchUsersPageRoutingModule"]],
        declarations: [_search_match_users_page__WEBPACK_IMPORTED_MODULE_6__["SearchMatchUsersPage"]]
      })], SearchMatchUsersPageModule);
      /***/
    },

    /***/
    "xN84":
    /*!***************************************************************!*\
      !*** ./src/app/search-match-users/search-match-users.page.ts ***!
      \***************************************************************/

    /*! exports provided: SearchMatchUsersPage */

    /***/
    function xN84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchMatchUsersPage", function () {
        return SearchMatchUsersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_match_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-match-users.page.html */
      "GyEc");
      /* harmony import */


      var _search_match_users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-match-users.page.scss */
      "V6ya");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "CjQN");

      var SearchMatchUsersPage = /*#__PURE__*/function () {
        function SearchMatchUsersPage(storageservice, common, socialSharing) {
          _classCallCheck(this, SearchMatchUsersPage);

          this.storageservice = storageservice;
          this.common = common;
          this.socialSharing = socialSharing;
          this.searchTerm = "";
          this.searching = false;
          this.showCategory = true;
          this.userDetails = [];
          this.allUsers = [];
          this.BestiesList = [];
          this.SquadList = [];
          this.Fans = [];
          this.FansOf = [];
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        }

        _createClass(SearchMatchUsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listAllUsers();
            this.setFilteredItems();
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (search) {
              _this.searching = false;
              _this.showCategory = false;
              _this.searchTerm = search;

              _this.setFilteredItems();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('in ionViewWillEnter');
            this.storageservice.storage.get('userDetails').then(function (val) {
              console.log('Storage Value of userDetails:', val);
              _this2.userDetails = val;

              if (_this2.userDetails.userid != undefined) {
                _this2.listAllUsers();

                _this2.toGetUsersCategory();
              } else {
                console.log('*** UserId undefined ***');
              }
            });
          }
        }, {
          key: "listAllUsers",
          value: function listAllUsers() {
            var _this3 = this;

            var params = {
              userid: this.userDetails.userid
            };
            console.log('userid:', params);
            this.common.listUsers('Listusers', params).subscribe(function (res) {
              console.log('res:', res);
              _this3.allUsers = res.details.name;
              console.log('allUsers:', _this3.allUsers);
            });
          }
        }, {
          key: "onSearchInput",
          value: function onSearchInput(e) {
            this.searching = true;
            console.log('E:', e);
            this.setFilteredItems();
            this.listAllUsers();
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems() {
            this.allUsers = this.filterItems(this.searchTerm);
          }
        }, {
          key: "addToMatch",
          value: function addToMatch(event, user) {
            console.log('user:', user);
            this.common.navCtrl.navigateForward(['/before-match-invitation'], {
              queryParams: user
            });
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            console.log(searchTerm);
            return this.allUsers.filter(function (user) {
              return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "toListCategory",
          value: function toListCategory(val) {
            console.log('To List Specific Category Clicked');
            console.log('Value:', val);

            if (val == 'bestie') {
              this.common.presentLoading();
              this.allUsers = this.BestiesList;
              console.log('allUsers:', this.allUsers);
              this.common.presentToast('Your Bestie List is Successfully Fetched ...');
            } else if (val == 'squad') {
              this.common.presentLoading();
              this.allUsers = this.SquadList;
              console.log('allUsers:', this.allUsers);
              this.common.presentToast('Your Squad List is Successfully Fetched ...');
            } else if (val == 'fan') {
              this.common.presentLoading();
              this.allUsers = this.Fans;
              console.log('allUsers:', this.allUsers);
              this.common.presentToast('Your Fan List is Successfully Fetched ...');
            } else if (val == 'fan-of') {
              this.common.presentLoading();
              this.allUsers = this.FansOf;
              console.log('allUsers:', this.allUsers);
              this.common.presentToast('Your Fan Of List is Successfully Fetched ...');
            } else if (val == 'invite') {
              this.toShare();
            } else if (val == '') {
              this.common.presentLoading();
              this.listAllUsers();
            }
          }
        }, {
          key: "toGetUsersCategory",
          value: function toGetUsersCategory() {
            var _this4 = this;

            console.log('To Get User Category Wise Working');
            var params = {
              id: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.postMethod('Listbesties', params).then(function (res) {
              console.log('res:', res);

              if (res.status == true) {
                _this4.BestiesList = res.details.besties;
                _this4.SquadList = res.details.squad;
                _this4.Fans = res.details.fan;
                _this4.FansOf = res.details.fan_of;
              } else {
                _this4.common.presentToast(' Error Loading Categories ');
              }
            }, function (err) {
              console.log('Error:', err);
            });
          }
        }, {
          key: "toShare",
          value: function toShare() {
            var msg = 'Share iMatch with your friends:';
            this.socialSharing.share(msg).then(function () {// Success!
            })["catch"](function () {// Error!
            });
          }
        }]);

        return SearchMatchUsersPage;
      }();

      SearchMatchUsersPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
        }];
      };

      SearchMatchUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-match-users',
        template: _raw_loader_search_match_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_match_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchMatchUsersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-match-users-search-match-users-module-es5.js.map