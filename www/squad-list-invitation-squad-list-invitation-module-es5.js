(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["squad-list-invitation-squad-list-invitation-module"], {
    /***/
    "+Xjp":
    /*!***********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Xjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user_avatar {\n  height: 90px;\n  width: 97px;\n  border-radius: 6px;\n}\n\n.content-container {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNxdWFkLWxpc3QtaW52aXRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNxdWFkLWxpc3QtaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcl9hdmF0YXJ7XHJcbiAgICBoZWlnaHQ6IDkwcHg7IFxyXG4gICAgd2lkdGg6IDk3cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyBcclxufVxyXG4uY29udGVudC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "2SgR":
    /*!***********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SquadListInvitationPageModule */

    /***/
    function SgR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPageModule", function () {
        return SquadListInvitationPageModule;
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


      var _squad_list_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./squad-list-invitation-routing.module */
      "DOLJ");
      /* harmony import */


      var _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./squad-list-invitation.page */
      "tYsh");

      var SquadListInvitationPageModule = function SquadListInvitationPageModule() {
        _classCallCheck(this, SquadListInvitationPageModule);
      };

      SquadListInvitationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _squad_list_invitation_routing_module__WEBPACK_IMPORTED_MODULE_5__["SquadListInvitationPageRoutingModule"]],
        declarations: [_squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_6__["SquadListInvitationPage"]]
      })], SquadListInvitationPageModule);
      /***/
    },

    /***/
    "DOLJ":
    /*!*******************************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SquadListInvitationPageRoutingModule */

    /***/
    function DOLJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPageRoutingModule", function () {
        return SquadListInvitationPageRoutingModule;
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


      var _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./squad-list-invitation.page */
      "tYsh");

      var routes = [{
        path: '',
        component: _squad_list_invitation_page__WEBPACK_IMPORTED_MODULE_3__["SquadListInvitationPage"]
      }];

      var SquadListInvitationPageRoutingModule = function SquadListInvitationPageRoutingModule() {
        _classCallCheck(this, SquadListInvitationPageRoutingModule);
      };

      SquadListInvitationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SquadListInvitationPageRoutingModule);
      /***/
    },

    /***/
    "Wct7":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/squad-list-invitation/squad-list-invitation.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wct7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Squad Invitation List\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"padding: 10px;\" *ngFor=\"let invitation of invitations; let i = index;\">\r\n    <div class=\"container-sub\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <img src=\"{{invitation.pic}}\" class=\"user_avatar\">\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"content-container\">\r\n            <h6 style=\" font-size: 15px; font-weight:600; margin-left: 5px; margin-top: 0px; \">{{invitation.name}} Invite you</h6>\r\n            <ion-item lines=\"none\">\r\n              <ion-button color=\"success\" style=\" margin-top: 30px;\" (click)=\"changeStatus(invitation.bestie_id,'1')\">Accept\r\n              </ion-button>\r\n              <ion-button color=\"warning\" style=\" margin-top: 30px;\" (click)=\"changeStatus(invitation.bestie_id,'2')\">Reject\r\n              </ion-button>\r\n              <ion-button color=\"danger\" style=\" margin-top: 30px;\" (click)=\"inviteBack(invitation.req_from)\">Invite Back\r\n              </ion-button>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "tYsh":
    /*!*********************************************************************!*\
      !*** ./src/app/squad-list-invitation/squad-list-invitation.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SquadListInvitationPage */

    /***/
    function tYsh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SquadListInvitationPage", function () {
        return SquadListInvitationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_squad_list_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./squad-list-invitation.page.html */
      "Wct7");
      /* harmony import */


      var _squad_list_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./squad-list-invitation.page.scss */
      "+Xjp");
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

      var SquadListInvitationPage = /*#__PURE__*/function () {
        function SquadListInvitationPage(common, storageservice) {
          var _this = this;

          _classCallCheck(this, SquadListInvitationPage);

          this.common = common;
          this.storageservice = storageservice;
          this.showMessage = false;
          this.userDetails = [];
          this.invitations = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
          this.common.route.queryParams.subscribe(function (resp) {
            _this.userDetails = resp;

            _this.GetInvitation();
          });
        } // ionViewWillEnter(){
        //   this.storageservice.storage.get('userDetails').then((val) => {
        //     this.userDetails = val;
        //       if (this.userDetails.userid!=null) {
        //         this.GetInvitation();
        //       } 
        //   });
        // }


        _createClass(SquadListInvitationPage, [{
          key: "GetInvitation",
          value: function GetInvitation() {
            var _this2 = this;

            var params = {
              req_to: this.userDetails.id,
              category: 'squad',
              req_status: '0'
            };
            this.common.postMethod('getBestieRequest', params).then(function (res) {
              _this2.invitations = res.details;
            }, function (err) {
              console.log('err:', err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeStatus",
          value: function changeStatus(bestie_id, status) {
            var _this3 = this;

            var params = {
              bestie_id: bestie_id,
              req_status: status
            };
            this.common.postMethod('changeBestieStatus', params).then(function (res) {
              _this3.invitations = res.details;
            }, function (err) {
              console.log('err:', err);
            });
          }
        }, {
          key: "inviteBack",
          value: function inviteBack(userid) {
            var _this4 = this;

            var params = {
              req_from: this.userDetails.userid,
              req_to: userid,
              category: 'squad'
            };
            this.common.postMethod('add_bestie', params).then(function (res) {
              if (res.status) {
                _this4.common.presentToast(res.message);
              } else {
                _this4.common.presentToast(res.message);
              }
            });
          }
        }]);

        return SquadListInvitationPage;
      }();

      SquadListInvitationPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      SquadListInvitationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-squad-list-invitation',
        template: _raw_loader_squad_list_invitation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_squad_list_invitation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SquadListInvitationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=squad-list-invitation-squad-list-invitation-module-es5.js.map