(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab8-tab8-module"], {
    /***/
    "+upE":
    /*!***********************************!*\
      !*** ./src/app/tab8/tab8.page.ts ***!
      \***********************************/

    /*! exports provided: Tab8Page */

    /***/
    function upE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab8Page", function () {
        return Tab8Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab8_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab8.page.html */
      "uikh");
      /* harmony import */


      var _tab8_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab8.page.scss */
      "8Nr0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/storage.service */
      "n90K");

      var Tab8Page = /*#__PURE__*/function () {
        // userArray: any;
        function Tab8Page(storageservice, common) {
          var _this = this;

          _classCallCheck(this, Tab8Page);

          this.storageservice = storageservice;
          this.common = common;
          this.slideOpts = {
            effect: 'flip',
            autoplay: {
              delay: 3000
            }
          };
          this.buttonName = "NEXT";
          this.userDetails = [];
          this.ongoingDetails = [];
          this.allUsers = [];
          this.showIcons = false;
          this.ongoingDetailsAudio = [];
          this.ongoingDetailsImage = [];
          this.ongoingDetailsLink = [];
          this.ongoingDetailsText = [];
          this.ongoingDetailsVideo = [];
          this.storageservice.storage.get('userDetails').then(function (val) {
            _this.userDetails = val;
          });
        }

        _createClass(Tab8Page, [{
          key: "ionSlideChanges",
          value: function ionSlideChanges(slides) {
            this.selectedSlide = slides; // slides.getActiveIndex().then(
            //   (slidesIndex) => {
            //     if (slidesIndex == 2) {
            //       this.buttonName = "GET STARTED";
            //     } else {
            //       this.buttonName = "NEXT";
            //     }
            //   });
          }
        }, {
          key: "nextSlide",
          value: function nextSlide() {// this.slides.slideNext();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.ongoingDetails = []; // this.storageservice.storage.get('userDetails').then((val) => {
            //   this.userDetails = val;
            // if (this.userDetails.userid != '') {

            var params = {
              userid: ''
            };
            this.common.postMethod('OngoingMatch', params).then(function (res) {
              if (res.status == true) {
                _this2.ongoingDetails = res.details;
              }
            });
            this.common.postMethod('Recommended_for_you', params).then(function (res) {
              _this2.RecommendedForYou = res.details;
            }); // }
            // });

            this.slideOpts = {
              effect: 'flip',
              autoplay: {
                delay: 2000
              }
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.HashTagOptions = [{
              name: 'Funny',
              image: '../../assets/icon/funny.png'
            }, {
              name: 'Art & Entertainment',
              image: '../../assets/icon/arts.png'
            }, {
              name: 'Beauty & Fashion',
              image: '../../assets/icon/beauty.png'
            }, {
              name: 'Health & Food',
              image: '../../assets/icon/health.png'
            }, {
              name: 'Education',
              image: '../../assets/icon/schol.png'
            }, {
              name: 'Events and others',
              image: '../../assets/icon/events.png'
            }, {
              name: 'Home and decors',
              image: '../../assets/icon/decor.png'
            }, {
              name: 'Luxuries',
              image: '../../assets/icon/dimond.png'
            }, {
              name: 'Business',
              image: '../../assets/icon/business.png'
            }, {
              name: 'Charity',
              image: '../../assets/icon/charity.png'
            }, {
              name: 'iMatch top 100',
              image: '../../assets/icon/top100.png'
            }, {
              name: 'News',
              image: '../../assets/icon/news.png'
            }, {
              name: 'Blog',
              image: '../../assets/icon/blog.png'
            }];
          }
        }, {
          key: "goDetail",
          value: function goDetail(id) {
            this.common.router.navigate(['/ongoing-match-detail'], {
              queryParams: {
                matchid: id
              }
            });
          }
        }, {
          key: "goToPage",
          value: function goToPage(page) {
            var p = 'tabs/tab8/' + page;
            this.common.router.navigate([p]);
          }
        }, {
          key: "goToOngoingContestPage",
          value: function goToOngoingContestPage(e, details, i, userType) {
            // this.common.router.navigate(['/tabs/tab2']);
            // this.userArray = this.userDetails;
            this.userDetails.userStatus = userType;
            this.userDetails.visitor_id = this.userDetails.userid;
            this.userDetails.personalMatchSlideIndex = i;
            this.common.navCtrl.navigateForward(['visitors-ongoing-match'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "toShowImageIcons",
          value: function toShowImageIcons() {
            this.ImageIcons = true;
          }
        }, {
          key: "toHideImageIcons",
          value: function toHideImageIcons() {
            this.ImageIcons = false;
          }
        }, {
          key: "gotoSearchUsers",
          value: function gotoSearchUsers() {
            this.common.navCtrl.navigateForward(['/search-users'], {
              queryParams: this.userDetails
            });
          }
        }, {
          key: "toOpenIconsPanel",
          value: function toOpenIconsPanel() {
            this.showIcons = !this.showIcons;
          }
        }, {
          key: "gotoProfile",
          value: function gotoProfile() {
            this.common.router.navigate(['/tabs/tab7']);
          }
        }, {
          key: "gotoImageIcon",
          value: function gotoImageIcon(icon) {
            var _this3 = this;

            if (icon == 'image') {
              this.common.presentLoading();
              var params = {
                userid: '',
                visitorid: this.userDetails.userid
              };
              this.common.postMethod('OngoingMatch', params).then(function (res) {
                if (res.details.image.length != 0) {
                  _this3.ongoingDetails = res.details.image;

                  _this3.common.presentToast('Ongoing Image Match is Successfully Displayed');
                } else {
                  _this3.common.presentToast('Currently You Are Having No Ongoing Image Matches');
                }
              }, function (err) {
                console.log('Error:', err);
              });
            } else if (icon == 'video') {
              this.common.presentLoading();
              var _params = {
                userid: '',
                visitorid: this.userDetails.userid
              };
              this.common.postMethod('OngoingMatch', _params).then(function (res) {
                if (res.details.video.length != 0) {
                  _this3.ongoingDetails = res.details.video;

                  _this3.common.presentToast('Ongoing Video Match is Successfully Displayed');
                } else {
                  _this3.common.presentToast('Currently You Are Having No Ongoing Video Matches');
                }

                _this3.common.hideLoader();
              }, function (err) {
                _this3.common.hideLoader();
              });
            } else if (icon == 'audio') {
              // this.common.showLoader();
              this.common.presentLoading();
              var _params2 = {
                userid: '',
                visitorid: this.userDetails.userid
              };
              this.common.postMethod('OngoingMatch', _params2).then(function (res) {
                if (res.details.audio.length != 0) {
                  _this3.ongoingDetails = res.details.audio;

                  _this3.common.presentToast('Ongoing Audio Match is Successfully Displayed');
                } else {
                  _this3.common.presentToast('Currently You Are Having No Ongoing Audio Matches');
                }
              }, function (err) {
                console.log('Error:', err);
              });
            } else if (icon == 'attachment') {
              this.common.presentLoading();
              var _params3 = {
                userid: '',
                visitorid: this.userDetails.userid
              };
              this.common.postMethod('OngoingMatch', _params3).then(function (res) {
                if (res.details.text.length != 0) {
                  _this3.ongoingDetails = res.details.text;

                  _this3.common.presentToast('Ongoing Text Match is Successfully Displayed');
                } else {
                  _this3.common.presentToast('Currently You Are Having No Ongoing Text Matches');
                }
              }, function (err) {
                console.log('Error:', err);
              });
            } else if (icon == 'link') {
              this.common.presentLoading();
              var _params4 = {
                userid: '',
                visitorid: this.userDetails.userid
              };
              this.common.postMethod('OngoingMatch', _params4).then(function (res) {
                if (res.details.link.length != 0) {
                  _this3.ongoingDetails = res.details.link;

                  _this3.common.presentToast('Ongoing Link Match is Successfully Displayed');
                } else {
                  _this3.common.presentToast('Currently You Are Having No Ongoing Link Matches');
                }
              }, function (err) {
                console.log('Error:', err);
              });
            }
          }
        }, {
          key: "swipeNext",
          value: function swipeNext() {// this.slides.slideNext(speed?: 400 | , runCallbacks?: false | undefined) => Promise<void>;
          }
        }, {
          key: "gotoFunny",
          value: function gotoFunny() {
            this.common.router.navigate(['/funny']);
          }
        }, {
          key: "gotoArtAndEntertainment",
          value: function gotoArtAndEntertainment() {
            this.common.router.navigate(['/art-entertainment']);
          }
        }, {
          key: "gotoBeautyAndFashion",
          value: function gotoBeautyAndFashion() {
            this.common.router.navigate(['/beauty-fashion']);
          }
        }, {
          key: "gotoiMatchTop100",
          value: function gotoiMatchTop100() {
            this.common.router.navigate(['/top-hundred']);
          }
        }, {
          key: "gotoNews",
          value: function gotoNews() {// this.common.router.navigate(['/']);
          }
        }, {
          key: "gotoBlog",
          value: function gotoBlog() {
            this.common.router.navigate(['/blog']);
          }
        }, {
          key: "gotoUserProfile",
          value: function gotoUserProfile(event, user) {
            this.common.navCtrl.navigateForward(['/visitors-view-activity'], {
              queryParams: user
            });
          }
        }]);

        return Tab8Page;
      }();

      Tab8Page.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }];
      };

      Tab8Page.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider']
        }]
      };
      Tab8Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab8',
        template: _raw_loader_tab8_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab8_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab8Page);
      /***/
    },

    /***/
    "8Nr0":
    /*!*************************************!*\
      !*** ./src/app/tab8/tab8.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function Nr0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* PAGE HEADER */\nion-content {\n  --background: url('home-bg.png') 0 0/100% 100% no-repeat;\n}\n.tabone_header {\n  background: #707072;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n.home-content {\n  background: #707072;\n}\n.Hamburg_icon {\n  color: #ffffff;\n}\n.tabone_header_right {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.logo-img {\n  height: 25px;\n  max-width: 25px;\n}\n.ongoing-img-icons {\n  margin: 0px 5px;\n  background: #9E9E9E;\n  padding: 5px 5px;\n  border-radius: 5px;\n}\n/* PAGE CONTENT */\n/* SEARCH SECTION */\n.home-searchbar input {\n  background: #ffffff;\n  border-radius: 10px;\n}\n/* IMAGE SLIDE SECTION */\n.home_slide_div {\n  padding: 10px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide img {\n  height: auto;\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 5px;\n}\n/* MULTIPLE SLIDERS SECTION */\n.main_multiple_slide {\n  display: flex;\n  padding: 0px 10px;\n}\n.sub_multiple_slide {\n  width: 17%;\n  text-align: center;\n}\n.circle_multiple_slide {\n  background: #fcbb3b;\n  padding: 15px;\n  border-radius: 50%;\n  display: inline-flex;\n}\n.circle_multiple_slide img {\n  height: 25px;\n  width: 25px;\n}\n.sub_multiple_slide p {\n  font-size: 8px;\n  /* font-weight: 600; */\n  color: #ffffff;\n  line-height: 10px;\n}\n.slide-next-arrow {\n  background: #707072;\n  position: absolute;\n  padding: 14px 7px;\n  right: 0;\n}\n.multiple-slide-more {\n  float: right;\n  margin-top: -8px;\n  margin-right: 5px;\n}\n.multiple-slide-more .multiple-slide-more_button {\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  padding: 6px 8px;\n  border-radius: 25px;\n  font-size: 12px;\n  height: 25px;\n  text-transform: uppercase;\n}\n/* ONGOING CONTEST SECTION */\n.home-ongoing-contest {\n  padding: 10px;\n  position: relative;\n}\n.home-ongoing-contest p {\n  color: #ffffff;\n  letter-spacing: 1px;\n}\n.contest-image-div {\n  display: flex;\n}\n.image-div {\n  height: 70px;\n  width: 70px;\n  max-width: 33.3%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.vs-image {\n  position: absolute;\n  left: 17%;\n  margin-top: 24px;\n}\n.vs-image img {\n  width: 30px;\n  height: 30px;\n}\n.vs-image-two {\n  position: absolute;\n  top: 50%;\n  left: 62%;\n}\n.vs-image-two img {\n  width: 30px;\n  height: 30px;\n}\n.go-icon {\n  justify-content: center;\n  display: flex;\n  margin-top: 5px;\n}\n.go-icon img {\n  height: 40px;\n  width: 40px;\n}\n/* ORANGE BOXES SECTION */\n.main_orange_row {\n  display: flex;\n  padding: 0 10px;\n  justify-content: space-between;\n}\n.sub_orange_row {\n  height: 100px;\n  width: 100px;\n  background-color: #fcbb3b;\n  border-radius: 5px;\n  padding: 20px;\n}\n.main_orange_row p {\n  color: #ffffff;\n  font-size: 10px;\n}\n/* RECOMMENDED SECTION */\n.recommended_section {\n  padding: 15px 5px 15px 5px;\n}\n.recommended_section p {\n  color: #ffffff;\n  letter-spacing: 1px;\n}\n.recommended_main_div {\n  display: flex;\n  width: 100%;\n}\n.recommended_sub_div {\n  border: 0.1px solid #ffffff61;\n  border-radius: 5px;\n  padding: 10px;\n  height: 105px;\n  text-align: center;\n}\n.recommended_sub_div img {\n  width: 70px;\n  height: 60px;\n  border-radius: 50%;\n  position: relative;\n  bottom: 5px;\n}\n.recommended-next-arrow {\n  background: #707072;\n  position: absolute;\n  padding: 35px 20px;\n  right: 0;\n  bottom: -280px;\n}\n.recommended_main_div p {\n  color: #ffffff;\n  font-size: 10px;\n}\n.image-div {\n  height: 75px;\n  max-width: 33.3%;\n}\n.image-div_first {\n  height: 55px;\n  width: 45px;\n}\n.image-div_first img {\n  height: 100%;\n  width: 100%;\n}\n.image-div img {\n  width: 100%;\n  height: 100%;\n}\n.vs-image {\n  position: absolute;\n  top: 50%;\n  left: 30%;\n}\n.vs-image img {\n  width: 30px;\n  height: 30px;\n}\n.vs-image-two {\n  position: absolute;\n  top: 50%;\n  left: 62%;\n}\n.vs-image-two img {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDSSx3REFBQTtBQUNKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBREE7RUFDSSxjQUFBO0FBSUo7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR0o7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUFBLGlCQUFBO0FBQ0EsbUJBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUFBLHdCQUFBO0FBQ0U7RUFDSSxhQUFBO0FBR047QUFERTtFQUNFLFlBQUE7QUFJSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQSw2QkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUVBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBR0o7QUFEQztFQUNHLFlBQUE7RUFDQSxXQUFBO0FBSUo7QUFGQztFQUNHLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUtKO0FBSEM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0FBTUo7QUFKQztFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT0w7QUFMQztFQUNHLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBUUo7QUFMQyw0QkFBQTtBQUNBO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FBUUo7QUFOQztFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQVNMO0FBUEE7RUFDSSxhQUFBO0FBVUo7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBQVJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFXSjtBQVRBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVlKO0FBVkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWFKO0FBWEE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBY0o7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBZUo7QUFaQSx5QkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWVKO0FBYkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZ0JKO0FBWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWNKO0FBWEEsd0JBQUE7QUFDQTtFQUNJLDBCQUFBO0FBY0o7QUFYQztFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQWNMO0FBWkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQWVKO0FBYkE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWdCSjtBQWRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWlCSjtBQWZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFrQko7QUFoQkM7RUFDRyxjQUFBO0VBQ0EsZUFBQTtBQW1CSjtBQWhCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQW1CSjtBQWpCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBb0JKO0FBbEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFxQko7QUFuQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXNCSjtBQXBCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF1Qko7QUFyQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXdCSjtBQXRCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF5Qko7QUF2QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTBCSiIsImZpbGUiOiJ0YWI4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBBR0UgSEVBREVSICovXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2hvbWUtYmcucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLmhvbWUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcyO1xyXG59XHJcbi5IYW1idXJnX2ljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRhYm9uZV9oZWFkZXJfbGVmdCB7XHJcbiAgICBcclxufVxyXG4udGFib25lX2hlYWRlcl9yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubG9nby1pbWd7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5vbmdvaW5nLWltZy1pY29ucyB7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOUU5RTlFO1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLyogUEFHRSBDT05URU5UICovXHJcbi8qIFNFQVJDSCBTRUNUSU9OICovXHJcbi5ob21lLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSU1BR0UgU0xJREUgU0VDVElPTiAqL1xyXG4gIC5ob21lX3NsaWRlX2RpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbi8qIE1VTFRJUExFIFNMSURFUlMgU0VDVElPTiAqL1xyXG4ubWFpbl9tdWx0aXBsZV9zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG4uc3ViX211bHRpcGxlX3NsaWRlIHtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNpcmNsZV9tdWx0aXBsZV9zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNiYjNiO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gfVxyXG4gLmNpcmNsZV9tdWx0aXBsZV9zbGlkZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiB9XHJcbiAuc3ViX211bHRpcGxlX3NsaWRlIHAge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuIH1cclxuIC5zbGlkZS1uZXh0LWFycm93IHtcclxuICAgIGJhY2tncm91bmQ6ICM3MDcwNzI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDdweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gfVxyXG4gLm11bHRpcGxlLXNsaWRlLW1vcmUge1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gfVxyXG4gLm11bHRpcGxlLXNsaWRlLW1vcmUgLm11bHRpcGxlLXNsaWRlLW1vcmVfYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gfVxyXG5cclxuIC8qIE9OR09JTkcgQ09OVEVTVCBTRUNUSU9OICovXHJcbiAuaG9tZS1vbmdvaW5nLWNvbnRlc3Qge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC5ob21lLW9uZ29pbmctY29udGVzdCBwIHtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5jb250ZXN0LWltYWdlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250ZXN0LWltYWdlLWRpdiBpbWcge1xyXG4gICAgXHJcbn1cclxuLmltYWdlLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG1heC13aWR0aDogMzMuMyU7XHJcbn1cclxuLmltYWdlLWRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnZzLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE3JTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLnZzLWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4udnMtaW1hZ2UtdHdvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNjIlO1xyXG59XHJcbi52cy1pbWFnZS10d28gaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5nby1pY29uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZ28taWNvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi8qIE9SQU5HRSBCT1hFUyBTRUNUSU9OICovXHJcbi5tYWluX29yYW5nZV9yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc3ViX29yYW5nZV9yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2JiM2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5zdWJfb3JhbmdlX3JvdyBpbWcge1xyXG5cclxufVxyXG4ubWFpbl9vcmFuZ2Vfcm93IHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFJFQ09NTUVOREVEIFNFQ1RJT04gKi9cclxuLnJlY29tbWVuZGVkX3NlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTVweCA1cHggMTVweCA1cHg7XHJcbiAgICAvLyB3aWR0aDogOTAlO1xyXG4gfVxyXG4gLnJlY29tbWVuZGVkX3NlY3Rpb24gcCB7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ucmVjb21tZW5kZWRfbWFpbl9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZWNvbW1lbmRlZF9zdWJfZGl2IHtcclxuICAgIGJvcmRlcjogMC4xcHggc29saWQgI2ZmZmZmZjYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlY29tbWVuZGVkX3N1Yl9kaXYgaW1nIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbn1cclxuLnJlY29tbWVuZGVkLW5leHQtYXJyb3cge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDM1cHggMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAtMjgwcHg7XHJcbiB9XHJcbiAucmVjb21tZW5kZWRfbWFpbl9kaXYgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmltYWdlLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMlO1xyXG59XHJcbi5pbWFnZS1kaXZfZmlyc3Qge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuLmltYWdlLWRpdl9maXJzdCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlLWRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnZzLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMzAlO1xyXG59XHJcbi52cy1pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnZzLWltYWdlLXR3byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDYyJTtcclxufVxyXG4udnMtaW1hZ2UtdHdvIGltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ZvWc":
    /*!*********************************************!*\
      !*** ./src/app/tab8/tab8-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab8PageRoutingModule */

    /***/
    function ZvWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab8PageRoutingModule", function () {
        return Tab8PageRoutingModule;
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


      var _tab8_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab8.page */
      "+upE");

      var routes = [{
        path: '',
        component: _tab8_page__WEBPACK_IMPORTED_MODULE_3__["Tab8Page"]
      }];

      var Tab8PageRoutingModule = function Tab8PageRoutingModule() {
        _classCallCheck(this, Tab8PageRoutingModule);
      };

      Tab8PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab8PageRoutingModule);
      /***/
    },

    /***/
    "uikh":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab8/tab8.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function uikh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <!-- <ion-toolbar> -->\r\n    <div class=\"tabone_header\">\r\n      <div class=\"tabone_header_left\">\r\n        <ion-buttons>\r\n          <ion-menu-button class=\"Hamburg_icon\"></ion-menu-button>\r\n        </ion-buttons>\r\n      </div>\r\n      <div class=\"tabone_header_right\">\r\n        <div style=\"margin-left: 10px; font-size: 25px; color:#ffffff\">\r\n          <ion-icon name=\"settings-outline\"></ion-icon>\r\n        </div>\r\n        <div style=\"margin-left: 10px;\">\r\n\r\n          <img *ngIf=\"userDetails\" [src]=\"userDetails.profile_pic\" alt=\"\" style=\"height: 45px; width: 45px; border-radius: 50%; background-color: #fcfcfc; padding: 2px;\" (click)=\"gotoProfile()\">\r\n\r\n        </div>\r\n        <div style=\"margin-left: 5px; font-size: 20px; color:#ffffff\">\r\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- </ion-toolbar> -->\r\n  </ion-header>\r\n  \r\n  <!-- PAGE CONTENT SECTION  -->\r\n  <!-- IMAGE SLIDERS SECTION  -->\r\n  \r\n  <ion-content>\r\n    <div class=\"home-content\">\r\n      <ion-searchbar value=\"\" class=\"home-searchbar\" (click)=\"gotoSearchUsers()\"></ion-searchbar>\r\n      <div class=\"home_slide_div\">\r\n\r\n        <ion-slides pager=\"true\" loop=\"true\" [options]=\"slideOpts\" class=\"animate__animated animate__fadeIn\">\r\n          <ion-slide style=\"padding: 5px; --bullet-background: white; --bullet-background-active: white;\">\r\n            <div class=\"slide\">\r\n              <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n            </div>\r\n          </ion-slide>\r\n  \r\n          <ion-slide style=\"padding: 5px;\">\r\n            <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n          </ion-slide>\r\n  \r\n          <ion-slide style=\"padding: 5px;\">\r\n            <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n          </ion-slide>\r\n  \r\n          <ion-slide style=\"padding: 5px;\">\r\n            <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n          </ion-slide>\r\n  \r\n          <ion-slide style=\"padding: 5px;\">\r\n            <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n          </ion-slide>\r\n  \r\n          <ion-slide style=\"padding: 5px;\">\r\n            <img src=\"../../assets/icon/banner.png\" alt=\"\" class=\"logo-img\">\r\n          </ion-slide>\r\n  \r\n        </ion-slides>\r\n      </div>\r\n  \r\n      <!-- MULTIPLE SLIDES SECTION  -->\r\n\r\n      <div style=\"display: flex; width: 100%;\">\r\n        <div style=\"display: flex; overflow-x: auto;\" class=\"main_multiple_slide\">\r\n          <div style=\"margin-right: 5px;\" class=\"sub_multiple_slide\" *ngFor=\"let hashTag of HashTagOptions; let i = index\">\r\n            <div  class=\"circle_multiple_slide\" style=\"margin: 0px 15px 0px 15px;\">\r\n              <div *ngIf=\"hashTag.name == 'Blog'; then imageContent else otherImageContent\"></div>\r\n              <ng-template #imageContent><img [src]=\"hashTag.image\" alt=\"\" class=\"logo-img\" (click)=\"goToPage('blog')\"></ng-template>\r\n              <ng-template #otherImageContent><img [src]=\"hashTag.image\" alt=\"\" class=\"logo-img\"></ng-template>\r\n            </div>\r\n            <p style=\"position: relative; left: 25px; width: 33px;\"> {{hashTag.name}} </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <ion-slides>\r\n\r\n      <ion-slide #mySlider pager=\"true\">\r\n      <div class=\"main_multiple_slide\">\r\n        <div class=\"sub_multiple_slide\">\r\n          <div class=\"circle_multiple_slide\" (click)=\"gotoFunny()\">\r\n            <img src=\"../../assets/icon/funny.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Funny</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\" (click)=\"gotoArtAndEntertainment()\">\r\n            <img src=\"../../assets/icon/arts.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Art & Entertainment</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\" (click)=\"gotoBeautyAndFashion()\">\r\n            <img src=\"../../assets/icon/beauty.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Beauty & Fashion</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/health.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Health & Food</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/schol.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Education</p>\r\n        </div> -->\r\n  \r\n        <!-- <div class=\"slide-next-arrow\">\r\n          <img src=\"../../assets/icon/arrow.png\" alt=\"\" class=\"logo-img\" (click)=\"swipeNext()\">\r\n        </div> -->\r\n  \r\n      <!-- </div>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"main_multiple_slide\">\r\n        <div class=\"sub_multiple_slide\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/funny.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Events and others</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/arts.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Home and decors</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/beauty.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Luxuries</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/health.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Business</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/schol.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Charity</p>\r\n        </div> -->\r\n  \r\n        <!-- <div class=\"slide-next-arrow\">\r\n          <img src=\"../../assets/icon/arrow.png\" alt=\"\" class=\"logo-img\">\r\n        </div> -->\r\n  \r\n      <!-- </div>\r\n    </ion-slide> -->\r\n\r\n    <!-- <ion-slide>\r\n      <div class=\"main_multiple_slide\">\r\n        <div class=\"sub_multiple_slide\">\r\n          <div class=\"circle_multiple_slide\" (click)=\"gotoiMatchTop100()\">\r\n            <img src=\"../../assets/icon/funny.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>iMatch top 100</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\">\r\n          <div class=\"circle_multiple_slide\" (click)=\"gotoNews()\">\r\n            <img src=\"../../assets/icon/arts.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>News</p>\r\n        </div>\r\n  \r\n        <div class=\"sub_multiple_slide\" style=\"margin-left: 12px;\" (click)=\"gotoBlog()\">\r\n          <div class=\"circle_multiple_slide\">\r\n            <img src=\"../../assets/icon/beauty.png\" alt=\"\" class=\"logo-img\">\r\n          </div>\r\n          <p>Blog</p>\r\n        </div>\r\n  \r\n      </div>\r\n    </ion-slide> -->\r\n\r\n  <!-- </ion-slides> -->\r\n\r\n      <div class=\"multiple-slide-more\" (click)=\"toOpenIconsPanel()\">\r\n        <ion-button fill=\"clear\" class=\"multiple-slide-more_button\">More</ion-button>\r\n      </div>\r\n\r\n      <div *ngIf=\"!showIcons\">\r\n\r\n      </div>\r\n\r\n  \r\n      <!-- ONGOING CONTEST SECTION  -->\r\n      <div class=\"home-ongoing-contest\">\r\n        <p>Ongoing contest</p>\r\n\r\n        <div style=\"display: flex; position: relative; bottom: 10px;\">\r\n\r\n          <div class=\"go-icon\" >\r\n            <img *ngIf=\"!ImageIcons\" src=\"../../assets/icon/drop.png\" alt=\"\" (click)=\"toShowImageIcons()\">\r\n            <img *ngIf=\"ImageIcons\" src=\"../../assets/icon/drop.png\" alt=\"\" (click)=\"toHideImageIcons()\">\r\n          </div>\r\n\r\n          <div *ngIf=\"ImageIcons\" style=\"display: flex; justify-content: center; margin: 10px; width: 270px;\" class=\"animate__animated animate__fadeIn\">\r\n\r\n            <div class=\"ongoing-img-icons\">\r\n              <img src=\"../../assets/icon/img1.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('image')\">\r\n            </div>\r\n  \r\n            <div class=\"ongoing-img-icons\">\r\n              <img src=\"../../assets/icon/vid1.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('video')\">\r\n            </div>\r\n  \r\n            <div class=\"ongoing-img-icons\">\r\n              <img src=\"../../assets/icon/aud1.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('audio')\">      \r\n            </div>\r\n  \r\n            <div class=\"ongoing-img-icons\">\r\n              <img src=\"../../assets/icon/attach1.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('attachment')\">\r\n            </div>\r\n  \r\n            <div class=\"ongoing-img-icons\">\r\n              <img src=\"../../assets/icon/link1.png\" alt=\"\" style=\"height: 15px;width: 15px;\" (click)=\"gotoImageIcon('link')\">\r\n            </div>\r\n  \r\n          </div>\r\n\r\n        </div>\r\n\r\n        <p *ngIf=\"ongoingDetails?.length==0\" style=\"border: 1px solid grey; background-color: #9E9E9E; padding: 10px; border-radius: 5px; text-align: center;\">Currently you are having no Ongoing Contests to display here !!!</p>\r\n        \r\n        <!-- <div style=\"margin-bottom: 15px;\">\r\n\r\n        <div class=\"contest-image-div\" *ngFor=\"let details of ongoingDetails; let i = index\" style=\"margin-bottom: 5px;\">\r\n          <div class=\"image-div\" (click)=\"goToOngoingContestPage($event, details, i, 'USER')\">\r\n            <img [src]=\"details.receiver_image\" alt=\"\" style=\"border-radius: 7px 0px 0px 7px;\" onerror=\"this.src='../../assets/icon/no_media.png';\">\r\n          </div>\r\n\r\n          <div class=\"vs-image\">\r\n            <img src=\"../../assets/icon/vs.png\" alt=\"\">\r\n          </div>\r\n\r\n          <div class=\"image-div\" (click)=\"goToOngoingContestPage($event, details, i, 'USER')\">\r\n            <img [src]=\"details.sender_image\" alt=\"\" style=\"border-radius: 0px 7px 7px 0px; filter: blur(8px); -webkit-filter: blur(8px);\" onerror=\"this.src='../../assets/icon/no_media.png';\">\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n      </div>\r\n\r\n      <div class=\"animate__animated animate__fadeInLeft\" *ngIf=\"!showPersonalMatch\">\r\n          <div class=\"row\" style=\"display: flex; flex-wrap: wrap;\">\r\n              <div *ngFor=\"let match of this.ongoingDetails; let i = index\" (click)=\"goDetail(match.matchid)\" style=\"margin-top:5px;padding: 5px; margin-left:3px;\">\r\n                  <div *ngIf=\"match.compare_data.length == 2 || match.compare_data.length == 3\" style=\"flex-grow: 1;display: flex;\">\r\n                      <div *ngFor=\"let item of match.compare_data; let k = index\">\r\n                          <div *ngIf=\"k == 0; then temp1 else temp2\"></div>\r\n                          <ng-template #temp1>\r\n                              <div class=\"image-div_first\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='image'\" [src]=\"item.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.mediafiles[0].media_type==='video'\" [src]=\"item.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"iitem.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              </div>\r\n                          </ng-template>\r\n                          <ng-template #temp2>\r\n                              <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='image'\" [src]=\"item.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <video style=\"width: 44px; height: 75px;\" *ngIf=\"item.mediafiles[0].media_type==='video'\" [src]=\"item.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\"></video>\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"item.mediafiles[0].file_path\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"item.mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                                  <img *ngIf=\"item.mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"item.mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              </div>\r\n                          </ng-template>\r\n\r\n                          <div *ngIf=\"k !=0 \" style=\"position: relative;z-index: 100;margin-top: -40px;margin-left: -13px;\">\r\n                              <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div *ngIf=\"match.compare_data.length == 4\">\r\n                      <div style=\"flex-grow: 1;display: flex;\">\r\n                          <div class=\"image-div_first\">\r\n                              <img *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='image'\" [src]=\"match.compare_data[0].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='video'\" [src]=\"match.compare_data[0].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                  style=\"border-radius: 5px;\"></video>\r\n                              <img *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[0].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[0].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                          </div>\r\n                          <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                              <img *ngIf=\"match.compare_data[1].mediafiles[0].media_type==='image'\" [src]=\"match.compare_data[1].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[1].mediafiles[0].media_type==='video'\" [src]=\"match.compare_data[1].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                  style=\"border-radius: 5px;\"></video>\r\n                              <img *ngIf=\"match.compare_data[1].mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[1].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[1].mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[1].mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[1].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                          </div>\r\n                      </div>\r\n\r\n                      <div style=\"flex-grow: 1;display: flex;\">\r\n                          <div class=\"image-div_first\">\r\n                              <img *ngIf=\"match.compare_data[2].mediafiles[0].media_type==='image'\" [src]=\"match.compare_data[2].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[0].mediafiles[0].media_type==='video'\" [src]=\"match.compare_data[2].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                  style=\"border-radius: 5px;\"></video>\r\n                              <img *ngIf=\"match.compare_data[2].mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[2].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[2].mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[2].mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[2].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                          </div>\r\n                          <div class=\"image-div_first\" style=\"margin-left: 3px;\">\r\n                              <img *ngIf=\"match.compare_data[3].mediafiles[0].media_type==='image'\" [src]=\"match.compare_data[3].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mixed-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <video style=\"width: 44px; height: 75px;\" *ngIf=\"match.compare_data[3].mediafiles[0].media_type==='video'\" [src]=\"match.compare_data[3].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/play-button.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\"\r\n                                  style=\"border-radius: 5px;\"></video>\r\n                              <img *ngIf=\"match.compare_data[3].mediafiles[0].media_type==='audio'\" style=\"object-fit: contain;\" [src]=\"match.compare_data[3].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/mic-icons.jpg';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[3].mediafiles[0].media_type==='text'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/word-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                              <img *ngIf=\"match.compare_data[3].mediafiles[0].media_type==='link'\" style=\"object-fit: cover;\" [src]=\"match.compare_data[3].mediafiles[0].filename\" alt=\"\" onerror=\"this.src='../../assets/icon/link-icon.png';\" class=\"animate__animated animate__fadeIn animate__delay-0.5s\" style=\"border-radius: 5px;\">\r\n                          </div>\r\n                      </div>\r\n\r\n                      <div style=\"position: relative;z-index: 100;margin-top: -70px;margin-left: 35px;\">\r\n                          <img src=\"../../assets/icon/activity/vs.png\" alt=\"\" style=\"width: 25px; height: 25px;\">\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div style=\"display: flex; flex-wrap: wrap; margin-bottom: 20px; margin-left: 20px;\">\r\n        <div *ngFor=\" let details of ongoingDetails ; let i = index\" style=\"display: flex; margin-right: -20px\" (click)=\"goToOngoingContestPage($event, details, i, 'VISITOR')\">\r\n                    \r\n        </div>\r\n      </div>\r\n  \r\n      <!-- ORANGE BOXES SECTION  -->\r\n      <div class=\"main_orange_row\">\r\n        <div (click)=\"goToPage('trending')\">\r\n          <div class=\"sub_orange_row\" style=\"padding: 25px;\">\r\n            <img src=\"../../assets/icon/trends.png\" alt=\"\">\r\n          </div>\r\n          <p>Trending</p>\r\n        </div>\r\n  \r\n        <div (click)=\"goToPage('headliners')\">\r\n          <div class=\"sub_orange_row\">\r\n            <img src=\"../../assets/icon/headlines.png\" alt=\"\">\r\n          </div>\r\n          <p>Headlines of the month</p>\r\n        </div>\r\n  \r\n        <div (click)=\"goToPage('goodies')\">\r\n          <div class=\"sub_orange_row\">\r\n            <img src=\"../../assets/icon/goodies.png\" alt=\"\">\r\n          </div>\r\n          <p>Goodies of the Moment</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <!--RECOMMENDED SECTION  -->\r\n      <div class=\"recommended_section\">\r\n        <p>Recommended For You</p>\r\n\r\n        <div style=\"display: flex; width: 100%;\">\r\n          <div style=\"display: flex; overflow-x: auto;\">\r\n            <div style=\"display: flex;\">\r\n              <div style=\"text-align: center; width: 105px; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: 105px;\" *ngFor=\"let user of RecommendedForYou; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 11px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              <!-- <div style=\"text-align: center; width: 90px; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideFirst; let i = index\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- <ion-slides #slides [options]=\"slideOpts\" (ionSlideDidChange)=\"ionSlideChanges(slides)\"> -->\r\n\r\n          <!-- First Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideFirst; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n          <!-- First Slide Ends -->\r\n\r\n          <!-- Second Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideSecond; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n        <!-- Second Slide Ends -->\r\n\r\n        <!-- Third Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideThird; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n        <!-- Third Slide Ends -->\r\n\r\n        <!-- Fourth Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideFourth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n          <!-- Fourth Slide Ends -->\r\n\r\n          <!-- Fifth Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideFifth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n          <!-- Fifth Slide Ends -->\r\n\r\n                    <!-- Sixth Slide Starts -->\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideSixth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n                    <!-- Sixth Slide Ends -->\r\n\r\n                    <!-- Seventh Slide Starts -->\r\n\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideSeventh; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n                              <!-- Seventh Slide Ends -->\r\n\r\n                    <!-- Eighth Slide Starts -->\r\n\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideEighth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n                                        <!-- Eighth Slide Ends -->\r\n\r\n            <!-- Ninth Slide Starts -->\r\n\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideNinth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n          <!-- Ninth Slide Ends -->\r\n\r\n            <!-- Tenth Slide Starts -->\r\n\r\n          <!-- <ion-slide>\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n              <div style=\"text-align: center; width: 40%; border: 0.5px solid #ffffff82; padding: 5px; border-radius: 10px; margin-right: 5px; height: fit-content;\" *ngFor=\"let user of SlideTenth; let i = index\" (click)=\"gotoUserProfile($event,user)\">\r\n                <img [src]=\"user.profile_pic\" alt=\"\" style=\"border-radius: 50%; height: 60px; width: 60px;background: white; padding: 2px;\">\r\n                <p style=\"font-size: 12px; font-family: 'OpenSansRegular'; font-weight: 600; margin-top: 1px;\"> {{user.name}} </p>\r\n              </div>\r\n\r\n              </div>\r\n\r\n          </ion-slide> -->\r\n                    <!-- Tenth Slide Ends -->\r\n\r\n\r\n        <!-- </ion-slides> -->\r\n        \r\n      </div>\r\n      <!-- <div class=\"recommended-next-arrow\">\r\n        <img src=\"../../assets/icon/arrow.png\" alt=\"\" class=\"logo-img , animate__animated animate__fadeOutRight animate__infinite\t\" (click)=\"nextSlide()\">\r\n      </div> -->\r\n    </div>\r\n  </ion-content>";
      /***/
    },

    /***/
    "vK2R":
    /*!*************************************!*\
      !*** ./src/app/tab8/tab8.module.ts ***!
      \*************************************/

    /*! exports provided: Tab8PageModule */

    /***/
    function vK2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab8PageModule", function () {
        return Tab8PageModule;
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


      var _tab8_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab8-routing.module */
      "ZvWc");
      /* harmony import */


      var _tab8_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab8.page */
      "+upE");

      var Tab8PageModule = function Tab8PageModule() {
        _classCallCheck(this, Tab8PageModule);
      };

      Tab8PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab8_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab8PageRoutingModule"]],
        declarations: [_tab8_page__WEBPACK_IMPORTED_MODULE_6__["Tab8Page"]]
      })], Tab8PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab8-tab8-module-es5.js.map