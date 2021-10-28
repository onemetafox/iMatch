(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-popover-logout-popover-module"],{

/***/ "60q3":
/*!*********************************************************!*\
  !*** ./src/app/logout-popover/logout-popover.module.ts ***!
  \*********************************************************/
/*! exports provided: LogoutPopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPopoverPageModule", function() { return LogoutPopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _logout_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-popover-routing.module */ "vRO+");
/* harmony import */ var _logout_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout-popover.page */ "Suwn");







let LogoutPopoverPageModule = class LogoutPopoverPageModule {
};
LogoutPopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logout_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPopoverPageRoutingModule"]
        ],
        declarations: [_logout_popover_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPopoverPage"]]
    })
], LogoutPopoverPageModule);



/***/ }),

/***/ "vRO+":
/*!*****************************************************************!*\
  !*** ./src/app/logout-popover/logout-popover-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LogoutPopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPopoverPageRoutingModule", function() { return LogoutPopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _logout_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout-popover.page */ "Suwn");




const routes = [
    {
        path: '',
        component: _logout_popover_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPopoverPage"]
    }
];
let LogoutPopoverPageRoutingModule = class LogoutPopoverPageRoutingModule {
};
LogoutPopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPopoverPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=logout-popover-logout-popover-module-es2015.js.map