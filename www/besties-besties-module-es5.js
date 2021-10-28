(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["besties-besties-module"], {
    /***/
    "82od":
    /*!************************************!*\
      !*** ./src/app/services/config.ts ***!
      \************************************/

    /*! exports provided: baseUrl */

    /***/
    function od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
        return baseUrl;
      });

      var baseUrl = "http://192.168.107.183/";
      /***/
    },

    /***/
    "BCzL":
    /*!*******************************************!*\
      !*** ./src/app/besties/besties.module.ts ***!
      \*******************************************/

    /*! exports provided: BestiesPageModule */

    /***/
    function BCzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesPageModule", function () {
        return BestiesPageModule;
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


      var _besties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./besties-routing.module */
      "KENN");
      /* harmony import */


      var _besties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./besties.page */
      "Wamc");

      var BestiesPageModule = function BestiesPageModule() {
        _classCallCheck(this, BestiesPageModule);
      };

      BestiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _besties_routing_module__WEBPACK_IMPORTED_MODULE_5__["BestiesPageRoutingModule"]],
        declarations: [_besties_page__WEBPACK_IMPORTED_MODULE_6__["BestiesPage"]]
      })], BestiesPageModule);
      /***/
    },

    /***/
    "DRzt":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/besties/besties.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function DRzt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- -- besties page design -- -->\r\n\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar style=\"--background: #707072;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab6\" style=\"color: white\" icon=\"chevron-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"ios\" style=\"color: white;\r\n    font-size: 15px;\" *ngIf=\"userDetails\">\r\n    <div  class=\"top-number\">\r\n      <span>{{userDetails.bestie_count}}</span>\r\n    </div>\r\n      BESTIES\r\n\r\n      <img *ngIf=\"userDetails.profile_pic != '' || userDetails.profile_pic != null || userDetails.profile_pic != undefined\" [src]=userDetails.profile_pic alt=\"\" class=\"top-profile-pic\" style=\"background-color: white;\" (click)=\"gotoProfile()\">\r\n\r\n      <!-- <ion-icon name=\"caret-down-outline\" class=\"top-drop-icon\"></ion-icon> -->\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <!-- <ion-grid> -->\r\n    <ion-row *ngIf=\"bestieDetails\">\r\n\r\n      <div class=\"top-container-style\">\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar class=\"person-profile-img\">\r\n            <img *ngIf=\"bestieDetails.profile_pic != '' || bestieDetails.profile_pic != null || bestieDetails.profile_pic != undefined\" [src]=\"bestieDetails.profile_pic\" alt=\"\">\r\n          </ion-avatar>\r\n          <!-- <ion-label class=\"person-name-text\">Pritty Kavitha</ion-label> -->\r\n          <ion-label class=\"person-name-text\"> {{bestieDetails.name}} </ion-label>\r\n\r\n\r\n          <ion-chip slot=\"end\" class=\"top-chip-styles\" (click)=\"addMoreBesties()\">\r\n            <!-- <img src=\"../../assets/icon/add.png\" alt=\"\" class=\"add-more-icon\"> -->\r\n            <ion-icon name=\"add-circle\" class=\"add-more-icon\"></ion-icon>\r\n            <ion-label class=\"chip-label-text\">ADD MORE BESTIE</ion-label>\r\n          </ion-chip>\r\n\r\n        </ion-item>\r\n\r\n      </div>\r\n\r\n    </ion-row>\r\n\r\n    <!-- <ion-row> -->\r\n\r\n      <!-- <div>\r\n        <div *ngIf=\"ourStory\">\r\n          <h1>OUR STORY</h1>\r\n          <div>\r\n            <ion-textarea auto-grow=\"true\">{{ourStory.text}}</ion-textarea>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #ee1809 , #8a5a5a); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourStory\">\r\n        <ion-card-header style=\"color: white;\">OUR STORY</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoOurStory()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourStory[0]?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #0a0700 , #595d5e); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourSlogan\">\r\n        <ion-card-header style=\"color: white;\">OUR FAVOURITE WORD / SLOGAN</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoOurSlogan()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourSlogan[0]?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #e39b09 , #787570); border-radius: 10px; width: -webkit-fill-available;\" *ngIf=\"ourLetter\">\r\n        <ion-card-header style=\"color: white;\">A LETTER TO MY BEST FRIEND</ion-card-header>\r\n        <img src=\"../../assets/icon/besties/edit.png\" alt=\"\" class=\"near-card-header-img\" (click)=\"gotoLetter()\">\r\n        <ion-card-content style=\"color: white; line-height: 14px; font-size: 12px; position: relative; bottom: 20px;\" auto-grow=\"true\"> {{ourLetter[0]?.text}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <div style=\"display: flex; padding: 7px;\">\r\n\r\n    <!-- <ion-row> -->\r\n\r\n      <!-- <ion-col> -->\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n            <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n              <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[0]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n            </div>\r\n            <!-- <img src=\"../../assets/icon/besties/{{userDetails.profile_pic}}.png\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\"> -->\r\n\r\n            <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n            <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n            <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n          </ion-card>\r\n        </div>\r\n\r\n      <!-- </ion-col> -->\r\n\r\n      <!-- <ion-col> -->\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n            <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n              <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[1]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n            </div>\r\n            <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n            <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n            <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n          </ion-card>\r\n        </div>\r\n\r\n      <!-- </ion-col> -->\r\n\r\n      <!-- <ion-col> -->\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n            <div style=\"background-color: #707072; height: 105px; width: -webkit-fill-available; border-radius: 10px;\">\r\n              <img *ngIf=\"MediaFiles\"  [src]=\"MediaFiles[2]?.file_link\" onerror=\"this.src='../../assets/icon/besties/707072.png';\" alt=\"\" class=\"bottom-card-small-img\">\r\n            </div>           \r\n             <img src=\"../../assets/icon/besties/upload.png\" alt=\"\" class=\"inside-card-upload-img\" (click)=\"PresentActionSheet()\">\r\n            <ion-card-header class=\"card-header-text\">UPLOAD</ion-card-header>\r\n            <p class=\"text-below-card-header\">IMAGE/VIDEO</p>\r\n          </ion-card>\r\n        </div>\r\n\r\n      <!-- </ion-col> -->\r\n\r\n    <!-- </ion-row> -->\r\n\r\n  <!-- </ion-grid> -->\r\n</div>\r\n\r\n    <div style=\"display: flex; justify-content: flex-end; margin: 15px 0px 15px;\">\r\n      <img *ngIf=\"CountDetails\" src=\"../../assets/icon/blog/heart.png\" alt=\"\" style=\"height: 20px; margin-right: 5px; position: relative; top: 7px;\"  (click)=\"ToLikeBesties()\"> <span style=\"margin-right: 10px; position: relative; top: 7px; font-size: 12px;\"> {{CountDetails.total_like_count}} </span>\r\n      <img *ngIf=\"CountDetails\" src=\"../../assets/icon/com.png\" alt=\"\" style=\"height: 20px; margin-right: 5px; position: relative; top: 7px;\" (click)=\"GoToBestiesComment()\"> <span style=\"margin-right: 10px; position: relative; top: 7px; font-size: 12px;\"> {{CountDetails.total_comment_count}} </span>\r\n      <ion-button *ngIf=\"isDisable==true\" style=\"text-transform: none; margin-right: 10px;\" size=\"small\" shape=\"round\" (click)=\"ToDisableComment($event, 'disable')\">Disable Comment</ion-button>\r\n      <ion-button *ngIf=\"isDisable==false\" style=\"text-transform: none; margin-right: 10px; --background: #707072; color: black;\" size=\"small\" shape=\"round\" (click)=\"ToDisableComment($event, 'enable')\">Enable Comment</ion-button>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<!-- -- besties-user-view-page -- -->\r\n\r\n<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar style=\"--background: #707072;\">\r\n    <ion-title mode=\"ios\" style=\"color: white;\r\n    font-size: 15px;\">\r\n    <span class=\"top-number\">2</span>\r\n      BESTIES\r\n      <img src=\"../../assets/icon/besties/trvl4.jpg\" alt=\"\" class=\"top-profile-pic\">\r\n      <ion-icon name=\"caret-down-outline\" class=\"top-drop-icon\"></ion-icon>\r\n    </ion-title>\r\n  </ion-toolbar>m   \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <div class=\"top-container-style\">\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar class=\"person-profile-img\">\r\n            <img src=\"../../assets/icon/besties/thanos.jpg\" alt=\"\">\r\n          </ion-avatar>\r\n          <ion-label class=\"person-name-text\">Pritty Kavitha</ion-label>\r\n\r\n            <img src=\"../../assets/icon/besties/add.png\" alt=\"\" class=\"add-more-icon\">\r\n\r\n        </ion-item>\r\n\r\n      </div>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #ee1809 , #8a5a5a); border-radius: 10px;\">\r\n        <ion-card-header style=\"color: white;margin-bottom: 10px;\">OUR STORY</ion-card-header>\r\n        <ion-card-content style=\"color: white;\r\n        line-height: 14px;\r\n        font-size: 12px;\r\n        position: relative;\r\n        bottom: 20px;\">\r\n          It is a long established fact that a reader \r\n          will be distracted by the readable content \r\n          of a page when looking at its layout. The \r\n          point of using Lorem Ipsum is that it has a \r\n          more-or-less normal distribution of letters, \r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #0a0700 , #595d5e); border-radius: 10px;\">\r\n        <ion-card-header style=\"color: white;margin-bottom: 10px;\">OUR FAVOURITE WORD / SLOGAN</ion-card-header>\r\n        <ion-card-content style=\"color: white;\r\n        line-height: 14px;\r\n        font-size: 12px;\r\n        position: relative;\r\n        bottom: 20px;\">\r\n          It is a long established fact that a reader \r\n          will be distracted by the readable content \r\n          of a page when looking at its layout.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-card style=\"background-image: linear-gradient(to right, #e39b09 , #787570); border-radius: 10px;\">\r\n        <ion-card-header style=\"color: white;margin-bottom: 10px;\">A LETTER TO MY BEST FRIEND</ion-card-header>\r\n        <ion-card-content style=\"color: white;\r\n        line-height: 14px;\r\n        font-size: 12px;\r\n        position: relative; \r\n        bottom: 20px;\">\r\n          It is a long established fact that a reader \r\n          will be distracted by the readable content \r\n          of a page when looking at its layout.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n            <img src=\"../../assets/icon/besties/trvl1.jpg\" alt=\"\" class=\"bottom-card-small-img\">\r\n          </ion-card>\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n            <img src=\"../../assets/icon/besties/drop.png\" alt=\"\" class=\"play-button-inside-card\">\r\n            <img src=\"../../assets/icon/besties/trvl2.jpg\" alt=\"\" class=\"bottom-card-small-img\">\r\n          </ion-card>\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n\r\n        <div style=\"text-align: center;\">\r\n          <ion-card class=\"bottom-card\">\r\n          </ion-card>\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <div class=\"last-container\">\r\n      <ion-row>\r\n        <ion-col class=\"last-cols\">\r\n          <img src=\"../../assets/icon/besties/heart.png\" alt=\"\" style=\"height: 15px; width: 16px;\">\r\n          <span class=\"last-col-text\">20m</span> \r\n        </ion-col>\r\n  \r\n        <ion-col class=\"last-cols\">\r\n          <img src=\"../../assets/icon/besties/comment.png\" alt=\"\" style=\"height: 15px; width: 18px;\">\r\n          <span class=\"last-col-text\">10k</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n -->\r\n";
      /***/
    },

    /***/
    "JcBW":
    /*!*******************************************!*\
      !*** ./src/app/besties/besties.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function JcBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-profile-pic {\n  height: 46px;\n  width: 46px;\n  border-radius: 50%;\n  border: 1px solid white;\n  position: absolute;\n  right: 20px;\n  bottom: 6px;\n}\n\n.top-number {\n  border-radius: 50%;\n  background-color: white;\n  color: #707072;\n  font-size: small;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  margin-right: 10px;\n  left: 115px;\n}\n\n.top-drop-icon {\n  position: absolute;\n  right: 30px;\n  color: white;\n}\n\n.top-container-style {\n  width: 100%;\n  border-bottom: 3px solid #0000002e;\n}\n\n.chip-label-text {\n  color: white;\n  font-size: 9px;\n  position: absolute;\n  right: 9px;\n}\n\n.person-profile-img {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  margin-right: 10px;\n}\n\n.person-name-text {\n  font-size: small;\n  font-weight: 700;\n}\n\n.near-card-header-img {\n  height: 15px;\n  float: right;\n  width: 15px;\n  position: relative;\n  bottom: 38px;\n  right: 5px;\n}\n\n.bottom-card-small-img {\n  border-radius: 11px;\n  height: 105px;\n  width: 87px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bottom-card {\n  border-radius: 10px;\n  line-height: 0px;\n  margin: 4px;\n  background-color: #d2d2d4;\n}\n\n.inside-card-upload-img {\n  height: 35px;\n  width: 35px;\n  position: relative;\n  bottom: 20px;\n}\n\n.card-header-text {\n  position: absolute;\n  font-size: x-small;\n  color: black;\n  bottom: 16px;\n  left: 30px;\n  text-align: center;\n}\n\n.text-below-card-header {\n  color: black;\n  font-size: smaller;\n  font-weight: 700;\n  position: relative;\n  bottom: 7px;\n}\n\n.add-more-icon {\n  font-size: x-large;\n  position: relative;\n  right: 6px;\n}\n\n.top-chip-styles {\n  background-color: #707072;\n  width: 118px;\n  height: 26px;\n  border: 1px solid black;\n}\n\n.my-custom-class {\n  top: 140px;\n  left: 60px;\n  transform-origin: right top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlc3RpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUE0RUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBekVKIiwiZmlsZSI6ImJlc3RpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0gYmVzdGllcyBwYWdlIHN0eWxlcyAtLSBcclxuXHJcbi50b3AtcHJvZmlsZS1waWN7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDZweDtcclxufVxyXG4udG9wLW51bWJlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM3MDcwNzI7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMTVweDtcclxufVxyXG4udG9wLWRyb3AtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50b3AtY29udGFpbmVyLXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDAwMDJlO1xyXG59XHJcbi5jaGlwLWxhYmVsLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbn1cclxuLnBlcnNvbi1wcm9maWxlLWltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBlcnNvbi1uYW1lLXRleHR7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubmVhci1jYXJkLWhlYWRlci1pbWd7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzhweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbn1cclxuLmJvdHRvbS1jYXJkLXNtYWxsLWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgd2lkdGg6IDg3cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmJvdHRvbS1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDQ7XHJcbn1cclxuLmluc2lkZS1jYXJkLXVwbG9hZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxufVxyXG4uY2FyZC1oZWFkZXItdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtYmVsb3ctY2FyZC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbn1cclxuLmFkZC1tb3JlLWljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNnB4O1xyXG59XHJcbi50b3AtY2hpcC1zdHlsZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcyO1xyXG4gICAgd2lkdGg6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8vIC0tIGJlc3RpZXMtdXNlci12aWV3LXBhZ2Ugc3R5bGVzIC0tXHJcblxyXG4vLyAudG9wLXByb2ZpbGUtcGlje1xyXG4vLyAgICAgaGVpZ2h0OiA0NnB4O1xyXG4vLyAgICAgd2lkdGg6IDQ2cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA1MHB4O1xyXG4vLyAgICAgYm90dG9tOiA2cHg7XHJcbi8vIH1cclxuLy8gLnRvcC1udW1iZXJ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGNvbG9yOiAjNzA3MDcyO1xyXG4vLyAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuLy8gICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMTM1cHg7XHJcbi8vICAgICBib3R0b206IDE2cHg7XHJcbi8vIH1cclxuLy8gLnRvcC1kcm9wLWljb257XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMzBweDtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG4vLyAudG9wLWNvbnRhaW5lci1zdHlsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDAwMDAyZTtcclxuLy8gfVxyXG5cclxuLy8gLnBlcnNvbi1wcm9maWxlLWltZ3tcclxuLy8gICAgIGhlaWdodDogNTVweDtcclxuLy8gICAgIHdpZHRoOiA1NXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuLy8gLnBlcnNvbi1uYW1lLXRleHR7XHJcbi8vICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gfVxyXG5cclxuLy8gLmJvdHRvbS1jYXJkLXNtYWxsLWltZ3tcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbi8vICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4vLyAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4vLyB9XHJcbi8vIC5ib3R0b20tY2FyZHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4vLyAgICAgbWFyZ2luOiA1cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQ0O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDVweDtcclxuLy8gfVxyXG4vLyAuYWRkLW1vcmUtaWNvbntcclxuLy8gICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgIHdpZHRoOiAzMHB4O1xyXG5cclxuLy8gfVxyXG4vLyAucGxheS1idXR0b24taW5zaWRlLWNhcmR7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDMzcHg7XHJcbi8vICAgICBsZWZ0OiAzNXB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzNXB4O1xyXG4vLyAgICAgd2lkdGg6IDM1cHg7XHJcbi8vIH1cclxuLy8gLmxhc3QtY29udGFpbmVye1xyXG4vLyAgICAgd2lkdGg6IDE0NXB4O1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gfVxyXG4vLyAubGFzdC1jb2xze1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDYxO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcbi8vIC5sYXN0LWNvbC10ZXh0e1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm90dG9tOiAzcHg7XHJcbi8vICAgICBsZWZ0OiAzcHg7XHJcbi8vIH1cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgdG9wOiAxNDBweDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "KENN":
    /*!***************************************************!*\
      !*** ./src/app/besties/besties-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: BestiesPageRoutingModule */

    /***/
    function KENN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesPageRoutingModule", function () {
        return BestiesPageRoutingModule;
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


      var _besties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./besties.page */
      "Wamc");

      var routes = [{
        path: '',
        component: _besties_page__WEBPACK_IMPORTED_MODULE_3__["BestiesPage"]
      }];

      var BestiesPageRoutingModule = function BestiesPageRoutingModule() {
        _classCallCheck(this, BestiesPageRoutingModule);
      };

      BestiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BestiesPageRoutingModule);
      /***/
    },

    /***/
    "Wamc":
    /*!*****************************************!*\
      !*** ./src/app/besties/besties.page.ts ***!
      \*****************************************/

    /*! exports provided: BestiesPage */

    /***/
    function Wamc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestiesPage", function () {
        return BestiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_besties_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./besties.page.html */
      "DRzt");
      /* harmony import */


      var _besties_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./besties.page.scss */
      "JcBW");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _services_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/config */
      "82od");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "uRF+");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "iWj2");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem; // import { copyFileSync } from 'fs';

      var BestiesPage = /*#__PURE__*/function () {
        function BestiesPage(storageservice, popoverController, actionSheetController, fileChooser, transfer, filePath, mediaCapture, formbuilder, common) {
          var _this = this;

          _classCallCheck(this, BestiesPage);

          this.storageservice = storageservice;
          this.popoverController = popoverController;
          this.actionSheetController = actionSheetController;
          this.fileChooser = fileChooser;
          this.transfer = transfer;
          this.filePath = filePath;
          this.mediaCapture = mediaCapture;
          this.formbuilder = formbuilder;
          this.common = common;
          this.userDetails = [];
          this.ourStory = [];
          this.ourSlogan = [];
          this.ourLetter = [];
          this.bestieDetails = [];
          this.MediaFiles = [];
          this.isDisable = true;
          this.CountDetails = [];
          this.CommentStatus = [];
          this.common.route.queryParams.subscribe(function (resp) {
            _this.bestieDetails = resp;
            console.log("bestieDetails:", _this.bestieDetails);
          }); // this.showTextContent();
        }

        _createClass(BestiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.storageservice.setStorage('isDisable',1);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.GetStorageDetails();
            this.GetEnableDisableCommStatus();
          }
        }, {
          key: "GetStorageDetails",
          value: function GetStorageDetails() {
            var _this2 = this;

            this.storageservice.storage.get("userDetails").then(function (val) {
              console.log("Stored Details of userDetails:", val);
              _this2.userDetails = val;

              _this2.GetPageContent();
            });
          }
        }, {
          key: "GetPageContent",
          value: function GetPageContent() {
            var _this3 = this;

            var params = {
              userid: this.userDetails.userid,
              senderid: this.bestieDetails.userid
            };
            console.log("params:", params);
            this.common.postMethod("GetStatus", params).then(function (res) {
              console.log("res:", res);

              if (res.message === "success") {
                _this3.CountDetails = res;
                _this3.ourStory = res.details.story;
                _this3.ourSlogan = res.details.slogan;
                _this3.ourLetter = res.details.letter;
                _this3.MediaFiles = res.link;
                return;
              }
            }, function (err) {
              console.log("Error:", err);
            });
          }
        }, {
          key: "GetEnableDisableCommStatus",
          value: function GetEnableDisableCommStatus() {
            var _this4 = this;

            this.storageservice.storage.get("isDisable").then(function (val) {
              console.log("Stored Details of Comment Status:", val);
              _this4.CommentStatus = val;

              if (_this4.CommentStatus == 0) {
                _this4.isDisable = false;
                return;
              }

              if (_this4.CommentStatus == 1) {
                _this4.isDisable = true;
                return;
              }
            });
          } // ionViewWillEnter(){
          //  console.log('userDetails:',this.userDetails);
          //  console.log('bestieDetails:',this.bestieDetails);
          // this.showTextContent();
          // }
          // ionViewDidEnter(){
          //   console.log('ionViewDidEnter');
          //   this.storageservice.storage.set('bestieDetails',this.bestieDetails);
          //   console.log('Besties Details Successfully Stored In Device , ionViewDidEnter');
          // }

        }, {
          key: "showTextContent",
          value: function showTextContent() {
            var _this5 = this;

            this.storageservice.storage.get("userDetails").then(function (val) {
              console.log("Storage Value of userDetails:", val);
              _this5.userDetails = val;

              if (_this5.userDetails.userid != "") {
                _this5.common.presentToast("⏳ Please wait . we are fetching your updates");

                var params = {
                  userid: _this5.userDetails.userid,
                  senderid: _this5.bestieDetails.userid
                };
                console.log("params", params);

                _this5.common.postMethod("GetStatus", params).then(function (res) {
                  console.log("res:", res);

                  if (res.message == "success") {
                    _this5.CountDetails = res;
                    _this5.ourStory = res.details.story;
                    _this5.ourSlogan = res.details.slogan;
                    _this5.ourLetter = res.details.letter;
                    _this5.MediaFiles = res.link;
                    console.log("ourStory:", _this5.ourStory);
                    console.log("ourSlogan:", _this5.ourSlogan);
                    console.log("ourLetter:", _this5.ourLetter);
                  } else if (res.message = "failed") {
                    console.log("res:", res);
                    _this5.ourStory = res.details;
                    _this5.ourSlogan = res.details;
                    _this5.ourLetter = res.details;
                    console.log("ourStory:", _this5.ourStory);
                    console.log("ourSlogan:", _this5.ourSlogan);
                    console.log("ourLetter:", _this5.ourLetter);
                  }
                });
              } else {
                _this5.common.presentToast("❗️ Something went wrong ...");
              }
            });
          }
        }, {
          key: "ToLikeBesties",
          value: function ToLikeBesties() {
            var _this6 = this;

            var params = {
              userid: this.userDetails.userid,
              bestieid: this.bestieDetails.userid
            };
            console.log("params:", params);
            this.common.postMethod("bestielike", params).then(function (res) {
              console.log("res:", res);

              if (res.status == true) {
                _this6.GetPageContent();
              }
            }, function (err) {
              console.log("err:", err);
            });
          }
        }, {
          key: "ToDisableComment",
          value: function ToDisableComment(e, status) {
            if (status === "disable") {
              this.isDisable = false;
              this.storageservice.setStorage("isDisable", 0);
            } else {
              this.isDisable = true;
            }
          }
        }, {
          key: "GoToBestiesComment",
          value: function GoToBestiesComment() {
            this.common.navCtrl.navigateForward(["besties-comment"], {
              queryParams: this.bestieDetails
            });
          }
        }, {
          key: "addMoreBesties",
          value: function addMoreBesties() {
            console.log("Besties Search page clicked ");
            this.common.navCtrl.navigateForward(["/besties-search"], {
              queryParams: this.bestieDetails
            });
          }
        }, {
          key: "gotoBestiesCount",
          value: function gotoBestiesCount() {
            this.common.navCtrl.navigateForward(["/besties-before"]);
          }
        }, {
          key: "gotoOurStory",
          value: function gotoOurStory() {
            this.common.navCtrl.navigateForward(["/our-story"], {
              queryParams: this.bestieDetails
            });
          }
        }, {
          key: "gotoOurSlogan",
          value: function gotoOurSlogan() {
            this.common.navCtrl.navigateForward(["/our-slogan"], {
              queryParams: this.bestieDetails
            });
          }
        }, {
          key: "gotoLetter",
          value: function gotoLetter() {
            this.common.navCtrl.navigateForward(["/letter"], {
              queryParams: this.bestieDetails
            });
          }
        }, {
          key: "gotoProfile",
          value: function gotoProfile() {
            this.common.router.navigate(["/tabs/tab7"]);
          }
        }, {
          key: "PresentActionSheet",
          value: function PresentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(" Action Sheet Clicked ");
                      _context.next = 3;
                      return this.actionSheetController.create({
                        cssClass: "my-custom-class",
                        header: " File format must be MP4, PNG, JPG , JPEG",
                        buttons: [{
                          text: "Other Files",
                          icon: "folder-open",
                          handler: function handler() {
                            _this7.pickDocuments();

                            console.log("Folder clicked");
                          }
                        }, {
                          text: "Capture Image",
                          icon: "camera",
                          handler: function handler() {
                            _this7.captureImage(); // this.isImage = true;


                            // this.isImage = true;
                            console.log("Camera clicked");
                          }
                        }, {
                          text: "Capture Video",
                          icon: "videocam",
                          handler: function handler() {
                            _this7.captureVideo(); // this.isVideo = true;


                            // this.isVideo = true;
                            console.log("Camera clicked");
                          }
                        }, {
                          text: "Cancel",
                          icon: "close",
                          role: "cancel",
                          handler: function handler() {
                            console.log("Cancel clicked");
                          }
                        }]
                      });

                    case 3:
                      actionSheet = _context.sent;
                      _context.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "captureImage",
          value: function captureImage() {
            var _this8 = this;

            // this.isMedia = true;
            var options = {
              limit: 1
            };
            this.mediaCapture.captureImage(options).then(function (data) {
              console.log(data[0]); // this.isImage = true;

              _this8.uploadFile2(data[0], "image");

              console.log("Data:", data[0]);
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "captureVideo",
          value: function captureVideo() {
            var _this9 = this;

            // this.isMedia = true;
            var options = {
              limit: 1,
              duration: 2,
              quality: 80
            };
            this.mediaCapture.captureVideo(options).then(function (data) {
              console.log(data[0]); // this.isVideo = true;

              _this9.uploadFile2(data[0], "video");

              console.log("Data:", data[0]);
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "pickDocuments",
          value: function pickDocuments() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var file;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // this.isMedia = true;
                      this.fileChooser.open().then(function (uri) {
                        console.log("uri:", uri);

                        _this10.filePath.resolveNativePath(uri).then(function (filePath) {
                          console.log("filePath:", filePath);
                          var fileNameFromPath = filePath.substring(filePath.lastIndexOf("/") + 1);
                          var currentName = uri.substring(uri.lastIndexOf("/") + 1, uri.lastIndexOf("?"));
                          console.log("currentName:", currentName);
                          console.log("fileNameFromPath:", fileNameFromPath);
                          file = {
                            name: fileNameFromPath,
                            fullPath: filePath
                          };

                          _this10.uploadFile2(file, "file");
                        })["catch"](function (err) {
                          return console.log(err);
                        });
                      })["catch"](function (e) {
                        return console.log(e);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadFile2",
          value: function uploadFile2(file, type) {
            var _this11 = this;

            // this.isDummyImage = false;
            var options;
            options = {
              fileKey: "matchfile",
              fileName: file.name,
              httpMethod: "POST",
              mimeType: "multipart/form-data",
              chunkedMode: false,
              params: {
                matchid: "",
                userid: this.userDetails.userid,
                upload_id: 0
              },
              headers: {
                Connection: "close"
              }
            };
            console.log("options:", options);
            var filePath;

            if (type !== "audio") {
              filePath = encodeURI(file.fullPath);
            } else {
              filePath = file.fullPath;
            }

            this.common.showLoader();
            var fileTransfer = this.transfer.create();
            var fileUplaodUrl = _services_config__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + "iMatch/api/v1/MatchFileUpload";
            fileTransfer.onProgress(function (e) {
              var prg = e.lengthComputable ? Math.round(e.loaded / e.total * 100) : -1;
              console.log("progress:" + prg + "%");

              _this11.common.presentToast("Uploaded " + prg + "% of file");

              if (prg === 100) {
                console.log("Upload completed");
              } else {
                console.log("file is uploading");
              }
            });
            fileTransfer.upload(filePath, fileUplaodUrl, options).then(function (data) {
              console.log("File Transfer Success:", data);
              console.log(JSON.parse(data.response));
              var res = JSON.parse(data.response);
              console.log("res:", res); // if (res.file_extension === 'mp4') {
              //   console.log('This is a video file');
              //   this.isVideo = true;
              //   this.isDummyImage = false;
              // } else if (res.file_extension === 'aac') {
              //   console.log(' This is a audio file ');
              //   this.isAudio = true;
              //   this.isDummyImage = false;
              // } else if (res.file_extension === 'png') {
              //   console.log(' This is a image file ');
              //   this.isImage = true;
              //   this.isDummyImage = false;
              // } else if (res.file_extension === 'jpg') {
              //   console.log(' This is a image file ');
              //   this.isImage = true;
              //   this.isDummyImage = false;
              // } else if (res.file_extension === 'mp3') {
              //   console.log(' This is a audio file ');
              //   this.isAudio = true;
              //   this.isDummyImage = false;
              // }

              if (res.status == true) {
                _this11.ionViewWillEnter(); // this.FileTransferResponse = res.upload_details;
                // console.log('File Transfer Success:', this.FileTransferResponse);

              } else {
                console.log("File Transfer Error");
              } // console.log('FileTransferResponse:',this.FileTransferResponse);


              _this11.common.hideLoader();
            }, function (err) {
              console.log("File Transfer Error:", err);
            });
          }
        }, {
          key: "toUploadImage",
          value: function toUploadImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this12 = this;

              var image, blobData;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("To Upload Image");
                      _context3.next = 3;
                      return Camera.getPhoto({
                        quality: 60,
                        allowEditing: true,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["CameraResultType"].Base64,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["CameraSource"].Photos
                      });

                    case 3:
                      image = _context3.sent;
                      console.log("image:", image);
                      blobData = this.b64toBlob(image.base64String, "image/".concat(image.format));
                      this.uploadImage(blobData, image.format).subscribe(function (newImage) {
                        console.log("newImage:", newImage);

                        _this12.showTextContent();
                      }, function (err) {
                        console.log(err);
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(blobData, ext) {
            var formData = new FormData();
            formData.append("userfile", blobData, "myimage.".concat(ext));
            formData.append("userid", this.userDetails.userid);
            formData.append("send_to", this.bestieDetails.userid);
            this.common.presentLoading();
            return this.common.http.post("".concat(_services_config__WEBPACK_IMPORTED_MODULE_7__["baseUrl"] + "iMatch/api/v1/Upload_File"), formData);
          }
        }]);

        return BestiesPage;
      }();

      BestiesPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_13__["MediaCapture"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      };

      BestiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-besties",
        template: _raw_loader_besties_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_besties_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BestiesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=besties-besties-module-es5.js.map