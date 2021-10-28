(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-fans-search-fans-module"], {
    /***/
    "+CMJ":
    /*!***************************************************!*\
      !*** ./src/app/search-fans/search-fans.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function CMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item-styles {\n  border-left: 5px solid #bcbcbc;\n  border-radius: 10px;\n  padding: 3px;\n  margin: 17px;\n  border-bottom: 1px solid #ccccce;\n  box-shadow: 1px 1px #ccccce;\n  border-top: 1px solid #80808038;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1mYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKIiwiZmlsZSI6InNlYXJjaC1mYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLXN0eWxlc3tcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2JjYmNiYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggI2NjY2NjZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODA4MDgwMzg7XHJcbn1cclxuLnNwaW5uZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "2RrX":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-fans/search-fans.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function RrX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"position: relative; right: 25px;\">SEARCH FANS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar mode=\"ios\" [formControl]=\"searchControl\" (keyup)=\"onSearchInput($event)\" animated></ion-searchbar>\r\n\r\n  <div *ngIf=\"searching\" class=\"spinner-container\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngFor=\" let user of allUsers\">  \r\n  <ion-item lines=\"none\" class=\"item-styles , animate__animated animate__fadeIn\" (click)=\"addToList($event,user.name,user)\">\r\n        <div>\r\n      <img [src]=\"user.profile_pic\" style=\"height: 50px; width: 50px; border-radius: 50%;\">\r\n        </div>\r\n\r\n    <ion-label style=\"margin-left: 15px;\">{{user.name}}</ion-label>\r\n    <img src=\"../../assets/icon/add.png\" alt=\"\" style=\"height: 30px; width: 30px;\">\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "4/Hv":
    /*!***************************************************!*\
      !*** ./src/app/search-fans/search-fans.module.ts ***!
      \***************************************************/

    /*! exports provided: SearchFansPageModule */

    /***/
    function Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFansPageModule", function () {
        return SearchFansPageModule;
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


      var _search_fans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-fans-routing.module */
      "Jtvb");
      /* harmony import */


      var _search_fans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-fans.page */
      "MztJ");

      var SearchFansPageModule = function SearchFansPageModule() {
        _classCallCheck(this, SearchFansPageModule);
      };

      SearchFansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _search_fans_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchFansPageRoutingModule"]],
        declarations: [_search_fans_page__WEBPACK_IMPORTED_MODULE_6__["SearchFansPage"]]
      })], SearchFansPageModule);
      /***/
    },

    /***/
    "Jtvb":
    /*!***********************************************************!*\
      !*** ./src/app/search-fans/search-fans-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SearchFansPageRoutingModule */

    /***/
    function Jtvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFansPageRoutingModule", function () {
        return SearchFansPageRoutingModule;
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


      var _search_fans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-fans.page */
      "MztJ");

      var routes = [{
        path: '',
        component: _search_fans_page__WEBPACK_IMPORTED_MODULE_3__["SearchFansPage"]
      }];

      var SearchFansPageRoutingModule = function SearchFansPageRoutingModule() {
        _classCallCheck(this, SearchFansPageRoutingModule);
      };

      SearchFansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchFansPageRoutingModule);
      /***/
    },

    /***/
    "MztJ":
    /*!*************************************************!*\
      !*** ./src/app/search-fans/search-fans.page.ts ***!
      \*************************************************/

    /*! exports provided: SearchFansPage */

    /***/
    function MztJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFansPage", function () {
        return SearchFansPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_fans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-fans.page.html */
      "2RrX");
      /* harmony import */


      var _search_fans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-fans.page.scss */
      "+CMJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // import { StorageService } from './../services/storage.service';
      // import { ActivatedRoute } from '@angular/router';
      // import { PopoverController } from '@ionic/angular';
      // import { NavParams} from '@ionic/angular';


      var SearchFansPage = /*#__PURE__*/function () {
        function SearchFansPage( // private storageservice: StorageService,
        common) {
          var _this = this;

          _classCallCheck(this, SearchFansPage);

          this.common = common;
          this.searchTerm = "";
          this.searching = false;
          this.userDetails = [];
          this.allUsers = [];
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](); // this.storageservice.storage.get('userDetails').then((val) => {
          //   console.log('Storage Value of userDetails:', val);
          //   this.userDetails = val;
          // });

          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;
            console.log('userDetails:', _this.userDetails);
          });
        }

        _createClass(SearchFansPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // this.storage();
            this.setFilteredItems();
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (search) {
              _this2.searching = false;
              _this2.searchTerm = search;

              _this2.setFilteredItems();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            console.log('in ionViewWillEnter'); //  this.listAllUsers();

            this.common.showLoader();
            var params = {
              userid: this.userDetails.userid
            };
            console.log('params:', params);
            this.common.listUsers('Listusers', params).subscribe(function (res) {
              console.log('res:', res);
              _this3.allUsers = res.details.name;
              console.log('allUsers:', _this3.allUsers);

              _this3.common.hideLoader();
            }, function (err) {
              console.log('err:', err);
            });
          } // async storage() {
          //   this.storageservice.storage.get('userDetails').then((val) => {
          //     console.log('Storage Value of userDetails:', val);
          //     this.userDetails = val;
          //     console.log('userid:',this.userDetails.userid);
          //     if(this.userDetails){
          //       this.common.presentLoading();
          //        this.listAllUsers();
          //       } else{
          //         ////
          //       }
          //   });  
          // }
          // listAllUsers() {
          //   console.log(this.userDetails);  
          //   var userid = this.userDetails["userid"];
          //   let params = {
          //     userid : userid
          //   }
          //   console.log('userid:',params);  
          //   this.common.listUsers('Listusers',params).subscribe((res:any) => {
          //     console.log('res:',res);
          //     this.allUsers = res.details.name;
          //     console.log('allUsers:',this.allUsers);
          //   });
          // }

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
          key: "addToList",
          value: function addToList(event, name, user) {
            var _this4 = this;

            if (user.userid != '') {
              var params = {
                from: this.userDetails.userid,
                to: user.userid,
                category: 'fan'
              };
              this.common.postMethod('add_fan', params).then(function (res) {
                console.log('res:', res);

                if (res.status == true) {
                  _this4.common.presentToast(name + ' is successfully added to your fans list ...'); // this.common.router.navigate(['/fans']);


                  _this4.common.navCtrl.navigateForward(['fans'], {
                    queryParams: _this4.userDetails
                  });
                } else if (res.message == "Already added ") {
                  _this4.common.presentToast(name + ' is already added to your fans list ...');
                }
              });
            } else {/////
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

        return SearchFansPage;
      }();

      SearchFansPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      SearchFansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-fans',
        template: _raw_loader_search_fans_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_fans_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchFansPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-fans-search-fans-module-es5.js.map