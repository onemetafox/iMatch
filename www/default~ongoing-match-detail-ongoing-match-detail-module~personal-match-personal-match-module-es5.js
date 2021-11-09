(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ongoing-match-detail-ongoing-match-detail-module~personal-match-personal-match-module"], {
    /***/
    "gMqc":
    /*!********************************************************************************!*\
      !*** ./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js ***!
      \********************************************************************************/

    /*! exports provided: NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent */

    /***/
    function gMqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerComponent", function () {
        return NgxIonicImageViewerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerDirective", function () {
        return NgxIonicImageViewerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerModule", function () {
        return NgxIonicImageViewerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerService", function () {
        return NgxIonicImageViewerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewerModalComponent", function () {
        return ViewerModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxIonicImageViewerService = function NgxIonicImageViewerService() {
        _classCallCheck(this, NgxIonicImageViewerService);
      };

      NgxIonicImageViewerService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }];
      /** @nocollapse */

      NgxIonicImageViewerService.ctorParameters = function () {
        return [];
      };
      /** @nocollapse */


      NgxIonicImageViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgxIonicImageViewerService_Factory() {
          return new NgxIonicImageViewerService();
        },
        token: NgxIonicImageViewerService,
        providedIn: "root"
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/viewer-modal/viewer-modal.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ViewerModalComponent = /*#__PURE__*/function () {
        /**
         * @param {?} modalController
         */
        function ViewerModalComponent(modalController) {
          _classCallCheck(this, ViewerModalComponent);

          this.modalController = modalController; // tslint:disable: no-inferrable-types

          this.alt = '';
          this.scheme = 'auto';
          this.slideOptions = {};
          this.srcFallback = '';
          this.srcHighRes = '';
          this.swipeToClose = true;
          this.text = '';
          this.title = '';
          this.titleSize = ''; // tslint:enable: no-inferrable-types

          this.defaultSlideOptions = {
            centeredSlides: true,
            passiveListeners: false,
            zoom: {
              enabled: true
            }
          };
          this.options = {};
          this.swipeState = {
            phase: 'init',
            direction: 'none',
            swipeType: 'none',
            startX: 0,
            startY: 0,
            distance: 0,
            distanceX: 0,
            distanceY: 0,
            threshold: 150,
            // required min distance traveled to be considered swipe
            restraint: 100,
            // maximum distance allowed at the same time in perpendicular direction
            allowedTime: 500,
            // maximum time allowed to travel that distance
            elapsedTime: 0,
            startTime: 0
          };
        }
        /**
         * @return {?}
         */


        _createClass(ViewerModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var swiper;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
                      this.src = this.srcHighRes || this.src;
                      this.setStyle();
                      this.setScheme(this.scheme);
                      this.initSwipeToClose(this.swipeToClose);
                      /**
                       * Current Workaround
                       * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
                       * Hint: Comment in '<ion-slide>' in component
                       * @type {?}
                       */

                      _context.next = 7;
                      return this.slides.getSwiper();

                    case 7:
                      swiper = _context.sent;
                      swiper.appendSlide("<ion-slide><img alt=\"".concat(this.alt, "\" src=\"").concat(this.src, "\" onerror=\"this.src='").concat(this.srcFallback, "'\"/></ion-slide>"));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "setStyle",
          value: function setStyle() {
            /** @type {?} */
            var el = document.querySelector('.ion-img-viewer');
            el.style.setProperty('--height', '100%');
            el.style.setProperty('--width', '100%');
            el.style.setProperty('--border-radius', '0');
          }
          /**
           * @param {?} scheme
           * @return {?}
           */

        }, {
          key: "setScheme",
          value: function setScheme(scheme) {
            if (scheme === 'auto') {
              return;
            }
            /** @type {?} */


            var el = document.querySelector('.ion-img-viewer');

            if (this.scheme === 'light') {
              el.style.setProperty('--ion-background-color', '#ffffff');
              el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
              el.style.setProperty('--ion-text-color', '#000');
              el.style.setProperty('--ion-text-color-rgb', '0,0,0');
            }

            if (this.scheme === 'dark') {
              if (el.classList.contains('ios')) {
                el.style.setProperty('--ion-background-color', '#000000');
                el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
              } else {
                el.style.setProperty('--ion-background-color', '#121212');
                el.style.setProperty('--ion-background-color-rgb', '18,18,18');
              }

              el.style.setProperty('--ion-text-color', '#ffffff');
              el.style.setProperty('--ion-text-color-rgb', '255,255,255');
            }
          }
          /**
           * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
           * @param {?=} isActive
           * @return {?}
           */

        }, {
          key: "initSwipeToClose",
          value: function initSwipeToClose() {
            var _this = this;

            var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (!isActive) {
              return;
            }
            /** @type {?} */


            var el = document.querySelector('ion-modal');
            el.addEventListener('mousedown',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeStart(event);
            }, true);
            el.addEventListener('mousemove',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeMove(event);
            }, true);
            el.addEventListener('mouseup',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeEnd(event);
            }, true);
            el.addEventListener('touchstart',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeStart(event);
            }, true);
            el.addEventListener('touchmove',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeMove(event);
            }, true);
            el.addEventListener('touchend',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this.swipeEnd(event);
            }, true);
            this.modalController.getTop().then(
            /**
            * @param {?} modal
            * @return {?}
            */
            function (modal) {
              modal.onWillDismiss().then(
              /**
              * @return {?}
              */
              function () {
                document.removeEventListener('mousedown', _this.swipeStart, true);
                document.removeEventListener('mousemove', _this.swipeMove, true);
                document.removeEventListener('mouseup', _this.swipeMove, true);
                document.removeEventListener('touchstart', _this.swipeStart, true);
                document.removeEventListener('touchmove', _this.swipeMove, true);
                document.removeEventListener('touchend', _this.swipeMove, true);
              });
            });
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "swipeStart",
          value: function swipeStart(event) {
            var _ref = event.type === 'touchstart' ? event.changedTouches[0] : event,
                pageX = _ref.pageX,
                pageY = _ref.pageY;

            this.swipeState = Object.assign({}, this.swipeState, {
              phase: 'start',
              direction: 'none',
              distance: 0,
              startX: pageX,
              startY: pageY,
              startTime: new Date().getTime()
            });
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "swipeMove",
          value: function swipeMove(event) {
            if (this.swipeState.phase === 'none') {
              return;
            }

            var _ref2 = event.type === 'touchmove' ? event.changedTouches[0] : event,
                pageX = _ref2.pageX,
                pageY = _ref2.pageY; // get horizontal dist traveled by finger while in contact with surface

            /** @type {?} */


            var distanceX = pageX - this.swipeState.startX; // get vertical dist traveled by finger while in contact with surface

            /** @type {?} */

            var distanceY = pageY - this.swipeState.startY;
            /** @type {?} */

            var direction;
            /** @type {?} */

            var distance;

            if (Math.abs(distanceX) > Math.abs(distanceY)) {
              // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
              direction = distanceX < 0 ? 'left' : 'right';
              distance = distanceX;
            } else {
              // else consider this a vertical swipe
              direction = distanceY < 0 ? 'up' : 'down';
              distance = distanceY;
            }

            this.swipeState = Object.assign({}, this.swipeState, {
              phase: 'move',
              direction: direction,
              distance: distance,
              distanceX: distanceX,
              distanceY: distanceY
            });
            event.preventDefault();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "swipeEnd",
          value: function swipeEnd(event) {
            if (this.swipeState.phase === 'none') {
              return;
            }

            var _this$swipeState = this.swipeState,
                allowedTime = _this$swipeState.allowedTime,
                direction = _this$swipeState.direction,
                restraint = _this$swipeState.restraint,
                startTime = _this$swipeState.startTime,
                threshold = _this$swipeState.threshold,
                distanceX = _this$swipeState.distanceX,
                distanceY = _this$swipeState.distanceY;
            /** @type {?} */

            var swipeType;
            /** @type {?} */

            var elapsedTime = new Date().getTime() - startTime;

            if (elapsedTime <= allowedTime) {
              // first condition for a swipe met
              if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                // 2nd condition for horizontal swipe met
                swipeType = direction; // set swipeType to either "left" or "right"
              } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
                // 2nd condition for vertical swipe met
                swipeType = direction; // set swipeType to either "top" or "down"
              }
            }

            this.swipeState = Object.assign({}, this.swipeState, {
              phase: 'end',
              swipeType: swipeType
            });

            if (swipeType === 'down') {
              return this.closeModal();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return ViewerModalComponent;
      }();

      ViewerModalComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-viewer-modal',
          template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
          styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
        }]
      }];
      /** @nocollapse */

      ViewerModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ViewerModalComponent.propDecorators = {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderRef', {
            "static": true
          }]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxIonicImageViewerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} modalController
         */
        function NgxIonicImageViewerComponent(modalController) {
          _classCallCheck(this, NgxIonicImageViewerComponent);

          this.modalController = modalController;
        }
        /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */


        _createClass(NgxIonicImageViewerComponent, [{
          key: "viewImage",
          value: function viewImage(src) {
            var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
            var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
            var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
            var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: ViewerModalComponent,
                        componentProps: {
                          src: src,
                          srcFallback: srcFallback,
                          srcHighRes: srcHighRes,
                          title: title,
                          titleSize: titleSize,
                          text: text,
                          scheme: scheme,
                          slideOptions: slideOptions,
                          swipeToClose: swipeToClose
                        },
                        cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NgxIonicImageViewerComponent;
      }();

      NgxIonicImageViewerComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-img-viewer',
          template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
          styles: ["\n      :host {\n        display: block;\n      }\n    "]
        }]
      }];
      /** @nocollapse */

      NgxIonicImageViewerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      NgxIonicImageViewerComponent.propDecorators = {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxIonicImageViewerDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} renderer
         * @param {?} modalController
         */
        function NgxIonicImageViewerDirective(el, renderer, modalController) {
          _classCallCheck(this, NgxIonicImageViewerDirective);

          this.el = el;
          this.renderer = renderer;
          this.modalController = modalController;
        }
        /**
         * @return {?}
         */


        _createClass(NgxIonicImageViewerDirective, [{
          key: "onClick",
          value: function onClick() {
            this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
          }
          /**
           * @param {?} error
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(error) {
            if (this.src !== this.el.nativeElement.src) {
              this.src = this.el.nativeElement.src;
            }

            if (this.srcFallback) {
              this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.el.nativeElement.hasAttribute('src')) {
              this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
            }
          }
          /**
           * @param {?} src
           * @param {?=} srcFallback
           * @param {?=} srcHighRes
           * @param {?=} title
           * @param {?=} titleSize
           * @param {?=} text
           * @param {?=} scheme
           * @param {?=} slideOptions
           * @param {?=} swipeToClose
           * @return {?}
           */

        }, {
          key: "viewImage",
          value: function viewImage(src) {
            var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
            var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
            var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
            var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: ViewerModalComponent,
                        componentProps: {
                          src: src,
                          srcFallback: srcFallback,
                          srcHighRes: srcHighRes,
                          title: title,
                          titleSize: titleSize,
                          text: text,
                          scheme: scheme,
                          slideOptions: slideOptions,
                          swipeToClose: swipeToClose
                        },
                        cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return NgxIonicImageViewerDirective;
      }();

      NgxIonicImageViewerDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ionImgViewer]'
        }]
      }];
      /** @nocollapse */

      NgxIonicImageViewerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      NgxIonicImageViewerDirective.propDecorators = {
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['error', ['$event']]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngx-ionic-image-viewer.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxIonicImageViewerModule = function NgxIonicImageViewerModule() {
        _classCallCheck(this, NgxIonicImageViewerModule);
      };

      NgxIonicImageViewerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          entryComponents: [ViewerModalComponent],
          exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngx-ionic-image-viewer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-ionic-image-viewer.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~ongoing-match-detail-ongoing-match-detail-module~personal-match-personal-match-module-es5.js.map