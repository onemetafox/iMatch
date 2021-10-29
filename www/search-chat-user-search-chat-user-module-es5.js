(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-chat-user-search-chat-user-module"], {
    /***/
    "/iMR":
    /*!*********************************************************************!*\
      !*** ./src/app/search-chat-user/search-chat-user-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SearchChatUserPageRoutingModule */

    /***/
    function iMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchChatUserPageRoutingModule", function () {
        return SearchChatUserPageRoutingModule;
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


      var _search_chat_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-chat-user.page */
      "3wuA");

      var routes = [{
        path: '',
        component: _search_chat_user_page__WEBPACK_IMPORTED_MODULE_3__["SearchChatUserPage"]
      }];

      var SearchChatUserPageRoutingModule = function SearchChatUserPageRoutingModule() {
        _classCallCheck(this, SearchChatUserPageRoutingModule);
      };

      SearchChatUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchChatUserPageRoutingModule);
      /***/
    },

    /***/
    "3wuA":
    /*!***********************************************************!*\
      !*** ./src/app/search-chat-user/search-chat-user.page.ts ***!
      \***********************************************************/

    /*! exports provided: SearchChatUserPage */

    /***/
    function wuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchChatUserPage", function () {
        return SearchChatUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_chat_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-chat-user.page.html */
      "Vt5q");
      /* harmony import */


      var _search_chat_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-chat-user.page.scss */
      "suYz");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var SearchChatUserPage = /*#__PURE__*/function () {
        function SearchChatUserPage(storageservice, popoverController, route, common) {
          var _this = this;

          _classCallCheck(this, SearchChatUserPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.route = route;
          this.common = common;
          this.searchTerm = "";
          this.searching = false;
          this.userDetails = [];
          this.allUsers = [];
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
          this.storageservice.storage.get('userDetails').then(function (val) {
            console.log('Storage Value of userDetails:', val);
            _this.userDetails = val;
          });
        }

        _createClass(SearchChatUserPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('in ionViewWillEnter');
            this.listAllUsers();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.storageservice.storage.get('bestieDetails').then(function (val) {
              console.log('Storage Value of userDetails:', val);
              _this2.bestieDetails = val;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.storage();
            this.setFilteredItems();
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (search) {
              _this3.searching = false;
              _this3.searchTerm = search;

              _this3.setFilteredItems();
            });
          }
        }, {
          key: "storage",
          value: function storage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.storageservice.storage.get('userDetails').then(function (val) {
                        console.log('Storage Value of userDetails:', val);
                        _this4.userDetails = val;
                        console.log('userid:', _this4.userDetails.userid); // this.user_id = this.userDetails.userid;

                        if (_this4.userDetails) {
                          _this4.common.presentLoading();

                          _this4.listAllUsers();
                        } else {////
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "listAllUsers",
          value: function listAllUsers() {
            var _this5 = this;

            console.log(this.userDetails);
            var userid = this.userDetails["userid"];
            var params = {
              userid: userid
            };
            console.log('userid:', params);
            this.common.listUsers('Listusers', params).subscribe(function (res) {
              console.log('res:', res);
              _this5.allUsers = res.details.name;
              console.log('allUsers:', _this5.allUsers);
            });
          }
        }, {
          key: "onSearchInput",
          value: function onSearchInput() {
            this.searching = true;
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems() {
            this.allUsers = this.filterItems(this.searchTerm);
          }
        }, {
          key: "addToChatRoom",
          value: function addToChatRoom(event, name, user) {
            if (user != undefined) {
              console.log('user:', user);
              this.common.presentToast(name + ' is successfully added to your Chat list ...');
              this.common.router.navigate(['/chat-message'], {
                queryParams: user
              });
            } else {
              this.common.presentToast('Something went wrong!');
            }
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            console.log(searchTerm);
            return this.allUsers.filter(function (user) {
              return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }]);

        return SearchChatUserPage;
      }();

      SearchChatUserPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      SearchChatUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-chat-user',
        template: _raw_loader_search_chat_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_chat_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchChatUserPage);
      /***/
    },

    /***/
    "IY1n":
    /*!*************************************************************!*\
      !*** ./src/app/search-chat-user/search-chat-user.module.ts ***!
      \*************************************************************/

    /*! exports provided: SearchChatUserPageModule */

    /***/
    function IY1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchChatUserPageModule", function () {
        return SearchChatUserPageModule;
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


      var _search_chat_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-chat-user-routing.module */
      "/iMR");
      /* harmony import */


      var _search_chat_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-chat-user.page */
      "3wuA");

      var SearchChatUserPageModule = function SearchChatUserPageModule() {
        _classCallCheck(this, SearchChatUserPageModule);
      };

      SearchChatUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _search_chat_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchChatUserPageRoutingModule"]],
        declarations: [_search_chat_user_page__WEBPACK_IMPORTED_MODULE_6__["SearchChatUserPage"]]
      })], SearchChatUserPageModule);
      /***/
    },

    /***/
    "Vt5q":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-chat-user/search-chat-user.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vt5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/besties\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative;\r\n    right: 20px;\">SEARCH iMATCH USERS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngFor=\" let user of allUsers\">  \r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\" (click)=\"addToChatRoom($event,user.name,user)\">\r\n        <div>\r\n      <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%;\">\r\n        </div>\r\n\r\n    <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n    <img src=\"../../assets/icon/add.png\" alt=\"\" style=\"height: 30px; width: 30px;\">\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "suYz":
    /*!*************************************************************!*\
      !*** ./src/app/search-chat-user/search-chat-user.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function suYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1jaGF0LXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoic2VhcmNoLWNoYXQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1zdHlsZXN7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2U7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4ICNjY2NjY2U7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzgwODA4MDM4O1xyXG59XHJcbi5zcGlubmVyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-chat-user-search-chat-user-module-es5.js.map