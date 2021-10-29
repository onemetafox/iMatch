(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage, PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "SPri");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "NzdG");
/* harmony import */ var _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/twitter-connect/ngx */ "+l8V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");










// import { AngularFireAuth } from '@angular/fire/auth';

let LoginPage = class LoginPage {
    constructor(common, storageservice, formbuilder, popoverController, fb, google, twit) {
        this.common = common;
        this.storageservice = storageservice;
        this.formbuilder = formbuilder;
        this.popoverController = popoverController;
        this.fb = fb;
        this.google = google;
        this.twit = twit;
        this.FormSubmit = false;
        this.rememberMe = false;
        this.showPassword = false;
        this.isLoggedIn = false;
        this.userData = {
            "email": "",
            "password": "",
        };
        this.users = {
            id: '',
            name: '',
            email: '',
            picture: {
                data: {
                    url: ''
                }
            }
        };
        this.FacebookLoginDetails = [];
        this.GoogleLoginDetails = [];
        this.LoginDetails = [];
        this.userDetails = [];
        this.DeviceToken = [];
        this.DeviceInfo = [];
        this.UserLocation = [];
        this.LoginForm = formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(12),
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
        });
        this.email = this.LoginForm.controls['email'];
        this.password = this.LoginForm.controls['password'];
        this.LoginForm.reset();
    }
    ngOnInit() {
        this.LoginForm.reset();
        this.common.menu.swipeGesture(false);
        if (this.common.platform.is("capacitor" || false)) {
            console.log('This is a device view:');
        }
        else {
            console.log('This is a web view');
            this.DeviceInfo.platform = 'web';
            this.DeviceToken.value = 'APA91pqyLyAWB1R0foRUbhT9AxRWzu3KsufESyMFEOS0RqKLLenr7ivZWmx9zw_hvRv7Oe9JDchpqTkaP5al7ECa_iJw0D58PBy_XDZx3FPX15z32nmulG9Sfk7xwGI078CQllfc8FiuQH9VKGuGhEP8sHNEvt1qZPPUwKKJ79lHpH1zafORb2L';
            console.log('Platform:', this.DeviceInfo.platform);
            console.log('Device Token', this.DeviceToken.value);
        }
        ;
    }
    ionViewWillEnter() {
        console.log('RememberMe:', this.rememberMe);
        this.storageservice.storage.get('LoginDetails').then((val) => {
            console.log('Stored Login Details:', val);
            if (val == null) {
                this.LoginForm.reset();
            }
            else {
                this.LoginDetails = val;
            }
            if (this.LoginDetails.email != null && this.LoginDetails.password != null) {
                this.common.presentToast('Your Email and Password is successfully fetched ....');
            }
            //  else if (this.LoginDetails.email== null && this.LoginDetails.password== null) {
            //   this.common.presentToast('Please click Remember Me to store your Login Details');
            //  }
        });
        this.storageservice.storage.get('DeviceToken').then((val) => {
            console.log('Stored Device Token:', val);
            this.DeviceToken = val;
        });
        this.storageservice.storage.get('DeviceInfo').then((val) => {
            console.log('Stored Device Information:', val);
            this.DeviceInfo = val;
        });
        this.storageservice.storage.get('UserLocation').then((val) => {
            console.log('Stored User Location:', val);
            this.UserLocation = val;
        });
    }
    onPasswordToggle() {
        this.showPassword = !this.showPassword;
        console.log('showPassword:', this.showPassword);
    }
    onMyBooleanChange(event) {
        console.log('event:', event);
        if (this.LoginForm.valid) {
            if (event.detail.checked == true && this.LoginForm.valid) {
                console.log('LoginForm Value:', this.LoginForm.value);
                console.log('Remember Me is checked');
                this.storageservice.setStorage('LoginDetails', this.LoginForm.value);
                console.log('Login Details is Successfully stored ...');
                this.common.presentToast('Your Email and Password is Successfully stored ...');
            }
            else {
                console.log('Remember Me is unchecked');
            }
        }
        else {
            if (event.detail.checked == true) {
                this.common.presentToast('Please Enter Valid Details');
            }
            else {
                this.common.presentToast('Remember Me Check Box Unchecked !!!');
            }
        }
    }
    // ---- Facebook Login Functionality ----
    FacebookLogin() {
        this.common.presentLoading();
        console.log('Trying to Login to facebook .....');
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(res => {
            if (res.status === 'connected') {
                this.isLoggedIn = true;
                console.log('isLoggedIn:', this.isLoggedIn);
                this.common.presentToast('Your Facebook Account is already connected with iMatch App ... So please wait while we fetch your details');
                this.getUserDetail(res.authResponse.userID);
            }
            else {
                this.isLoggedIn = false;
                console.log('isLoggedIn:', this.isLoggedIn);
            }
        })
            .catch(e => console.log('Error logging into Facebook', e));
    }
    getUserDetail(userid) {
        this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(res => {
            console.log('Facebook Response:', res);
            this.FacebookLoginDetails = res;
            this.storageservice.setStorage('FacebookLoginDetails', this.FacebookLoginDetails);
            let params = {
                name: this.FacebookLoginDetails.name,
                email: this.FacebookLoginDetails.email,
                profile_pic: this.FacebookLoginDetails.picture.data.url,
            };
            console.log('params:', params);
            this.common.postMethod('register', params).then((res) => {
                console.log('res:', res);
                if (res.status == true) {
                    this.common.presentLoading();
                    this.userDetails = res.details[0];
                    this.storageservice.setStorage('userDetails', this.userDetails);
                    this.common.navCtrl.navigateRoot(['/tabs/tab6'], { queryParams: this.userDetails });
                    this.common.presentToast('Facebook Login Successful ...');
                }
                else if (res.status == false && res.message == 'user already existing') {
                    this.common.presentLoading();
                    this.common.presentToast('You Had already LOGGED IN with the same EMAIL ... so please wait while we fetching your details');
                    let params = {
                        email: this.FacebookLoginDetails.email,
                    };
                    console.log('params:', params);
                    this.common.postMethod('GetUserdetails', params).then((res) => {
                        console.log('res:', res);
                        if (res.status == true) {
                            this.common.presentLoading();
                            this.userDetails = res.details[0];
                            this.storageservice.setStorage('userDetails', this.userDetails);
                            this.common.navCtrl.navigateRoot(['/tabs/tab6'], { queryParams: this.userDetails });
                            this.common.presentToast('Facebook Details Fetched Successful ...');
                        }
                        else {
                            this.common.presentLoading();
                            this.common.presentToast('Something went wrong !!!');
                        }
                    }, (err) => {
                        console.log('Error:', err);
                    });
                }
                else if (res.status == false) {
                    this.common.presentLoading();
                    this.common.presentToast('Facebook Login Failed ...');
                }
            }, (err) => {
                console.log('Error:', err);
            });
        })
            .catch(e => {
            console.log(e);
        });
    }
    // ---- Facebook Login Functionality ----
    // ---- Google Login Functionality ----
    GoogleLogin() {
        this.common.presentLoading();
        console.log('Trying to Login to Google Login .....');
        this.google.login({})
            .then(res => {
            console.log('Google Response:', res);
            this.GoogleLoginDetails = res;
            this.storageservice.setStorage('GoogleLoginDetails', this.GoogleLoginDetails);
            let params = {
                name: this.GoogleLoginDetails.displayName,
                email: this.GoogleLoginDetails.email,
                profile_pic: this.GoogleLoginDetails.imageUrl,
            };
            console.log('params:', params);
            this.common.postMethod('register', params).then((res) => {
                console.log('res:', res);
                if (res.status == true) {
                    this.common.presentLoading();
                    this.userDetails = res.details[0];
                    this.storageservice.setStorage('userDetails', this.userDetails);
                    this.common.navCtrl.navigateRoot(['/tabs/tab6'], { queryParams: this.userDetails });
                    this.common.presentToast('Google Login Successful ...');
                }
                else if (res.status == false && res.message == 'user already existing') {
                    this.common.presentLoading();
                    this.common.presentToast('You Had already LOGGED IN with the same EMAIL ... so please wait while we fetching your details');
                    let params = {
                        email: this.GoogleLoginDetails.email,
                    };
                    console.log('params:', params);
                    this.common.postMethod('GetUserdetails', params).then((res) => {
                        console.log('res:', res);
                        if (res.status == true) {
                            this.common.presentLoading();
                            this.userDetails = res.details[0];
                            this.storageservice.setStorage('userDetails', this.userDetails);
                            this.common.navCtrl.navigateRoot(['/tabs/tab6'], { queryParams: this.userDetails });
                            this.common.presentToast('Google Details Fetched Successful ...');
                        }
                        else {
                            this.common.presentLoading();
                            this.common.presentToast('Something went wrong !!!');
                        }
                    }, (err) => {
                        console.log('Error:', err);
                    });
                }
                else if (res.status == false) {
                    this.common.presentLoading();
                    this.common.presentToast('Google Login Failed ...');
                }
            }, (err) => {
                console.log('Error:', err);
            });
        }, (err) => {
            console.error('Error:', err);
        });
    }
    ;
    // ---- Google Login Functionality ----
    TwitterLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common.presentLoading();
            this.twit.login()
                .then(res => {
                // Get user data
                // There is a bug which fires the success event in the error event.
                // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
                this.twit.showUser()
                    .then(user => {
                    console.log('user:', user);
                }, err => {
                    console.log(err);
                    // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
                    var profile_image = err.profile_image_url_https.replace('_normal', '');
                    console.log('profile_image:', profile_image);
                    // this.storageservice.setStorage('twitter_user', {
                    //   name: err.name,
                    //   userName: err.screen_name,
                    //   followers: err.followers_count,
                    //   picture: profile_image
                    // })
                    // .then(() => {
                    //    this.common.router.navigate(["/tabs/tab6"]);
                    // }, (error) => {
                    //   console.log(error);
                    // })
                });
                console.log('res:', res);
            }, err => {
                this.twit.login()
                    .then((res) => {
                    console.log('res:', res);
                    this.twit.showUser()
                        .then(user => {
                        console.log('user:', user);
                    }, err => {
                        console.log('Error:', err);
                    });
                }, err => {
                    console.log('Error:', err);
                });
                console.log('Error:', err);
            });
        });
    }
    // TwitterLogin() {
    //   console.log('Trying to Login to Twitter .....');
    //   this.twit.login().then(this.onSuccess, this.onError);
    // }
    //  onSuccess(response) {
    //   console.log('response:',response);
    // }
    // onError(response){
    //   console.log('response:',response);
    // }
    signIn() {
        this.FormSubmit = true;
        console.log('email:', this.LoginForm.controls['email'].valid);
        console.log('password:', this.LoginForm.controls['password'].valid);
        console.log('LoginForm:', this.LoginForm.valid);
        let params = {
            email: this.userData.email,
            password: this.userData.password,
            device_token: '',
            // device_type : this.DeviceInfo.platform,
            device_type: '',
        };
        console.log('params:', params);
        this.common.postMethod('login', params).then((res) => {
            console.log('res:', res);
            if (res.status == true) {
                this.common.presentLoading();
                this.userDetails = res.details[0];
                console.log('userDetails:', this.userDetails);
                this.storageservice.setStorage('userDetails', this.userDetails);
                console.log('UserDetails Stored In Device Successfully');
                this.common.navCtrl.navigateRoot(['/tabs/tab6'], { queryParams: this.userDetails });
                this.common.presentToast('Successfully Logged into your profile');
            }
            else if (res.message == 'invalid email id') {
                this.common.showAlert('Invalid Email Id');
            }
            else if (res.message == 'invalid email id or password') {
                this.common.showAlert('Invalid Password');
            }
        }, (err) => {
            console.log('Error:', err);
            console.log(err.headers);
        });
    }
    gotoForgotPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: PopoverComponent,
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                // event: ev,
                animated: false,
                translucent: true
            });
            return yield popover.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
    { type: _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_9__["TwitterConnect"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);

//  PopoverComponent Page :
let PopoverComponent = class PopoverComponent {
    constructor(popoverController, common, formbuilder, twit) {
        this.popoverController = popoverController;
        this.common = common;
        this.formbuilder = formbuilder;
        this.twit = twit;
        this.FormSubmit = false;
        this.usertype = '';
        this.userData = {
            "email": ""
        };
        this.formgroup = formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern(/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/),
                ])]
        });
        this.email = this.formgroup.controls['email'];
        console.log(this.formgroup.controls);
        console.log(this.formgroup.controls['email']);
    }
    ngOnInit() {
        console.log('hai');
    }
    CheckEmail(email) {
        var reg = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
        console.log(reg.test(email));
        if (reg.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }
    toClose() {
        console.log('Close button clicked');
        this.popoverController.dismiss();
    }
    toCancel() {
        console.log('cancel button clicked');
        this.popoverController.dismiss();
    }
    onDismiss(val) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.popoverController.dismiss(val);
                //   if(val=='editprofile'){
                //         this.common.router.navigate(''); 
                //   }else if(val=='addbesties'){
                //         this.common.router.navigate(''); 
                //   }else if(val=='addsquadlist'){
                //         this.common.router.navigate('');
                //   }else if(val=='booking'){
                //         this.common.router.navigate('');
                // }
            }
            catch (e) {
                //click more than one time popover throws error, so ignore...
            }
        });
    }
    onSubmit() {
    }
    forgot() {
        this.FormSubmit = true;
        console.log(this.formgroup.controls);
        console.log(this.formgroup.dirty);
        console.log(this.formgroup.controls['email']);
        console.log(this.formgroup.controls['email'].value);
        console.log(this.FormSubmit);
        console.log(this.formgroup.value);
        console.log(this.formgroup.valid);
        if (this.formgroup.valid) {
            this.common.showAlert('Password reset email sending failed !');
            this.common.forgotpassword('forgotpassword', this.userData).subscribe((res) => {
                console.log('res');
                console.log(res);
                this.responseData = res;
                console.log('responseData');
                console.log(this.responseData);
                if (this.responseData.userData) {
                    console.log(this.responseData);
                }
            });
        }
        else {
            this.common.showAlert('Password reset email sending failed');
        }
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_native_twitter_connect_ngx__WEBPACK_IMPORTED_MODULE_9__["TwitterConnect"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: `
    <form [formGroup]="formgroup" (ngSubmit)="onSubmit()">
        <div style="position: relative; right: 2px; float: right; margin-top: 2px;"> 
          <ion-icon name="close" (click)="toClose()" style="font-size: 2rem;"></ion-icon>
        </div>
      <div style="text-align: center; padding: 10px;">
        <h2 style="font-size:20px !important;">Forgot Password ?</h2>
          <ion-input type="email" formControlName="email" [(ngModel)]="userData.email" placeholder=" Enter your registered email " style=" background-color: #80808057; border-radius: 7px; margin-top: 15px; margin-bottom: 15px; --padding-start: 8px; --padding-end: 10px; --padding-bottom: 15px; text-align: start !important; --padding-top: 15px;"></ion-input>
        </div>
        <div>
          <ion-row>
              <ion-col style="padding: 0px;">
                <ion-button style=" text-transform: none; --background: #fcbb3b; --color: balck; " expand="full" [disabled]=!formgroup.valid (click)="forgot()">Submit</ion-button>
              </ion-col>

              <ion-col style="padding: 0px;">
                <ion-button type="submit" style=" text-transform:none; --background: dimgrey; --color: white; " expand="full" (click)="toCancel()">Cancel</ion-button>
              </ion-col>
          </ion-row>
      </div>
    </form>
  `
    })
], PopoverComponent);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n    <div style=\"text-align: center; margin-top: 80px;\">\r\n      <img src=\"../../assets/icon/login/logo.png\" alt=\"\" class=\"logoHeader\">\r\n    </div>\r\n  \r\n      <div style=\"padding:30px; margin-top: 55px;\">\r\n  \r\n        <form [formGroup]=\"LoginForm\" (ngSubmit)=\"signIn()\">\r\n\r\n      <div>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-input formControlName=\"email\" [(ngModel)]=\"userData.email\" placeholder=\"Username (eg:Example@gmail.com)\" autocomplete=\"off\" [value]=\"LoginDetails.email\" autocapitalize=\"true\">\r\n          <!-- clear-input=\"true\" -->\r\n          <img src=\"../../assets/icon/login/user.png\" alt=\"\" class=\"text-field-icons\">\r\n          </ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\">\r\n        <ion-input formControlName=\"password\" [(ngModel)]=\"userData.password\" placeholder=\"Password (eg:Example01)\" [type]=\"showPassword ? 'text' : 'password'\" [value]=\"LoginDetails.password\">\r\n          <!-- clear-input=\"true\" -->\r\n          <img src=\"../../assets/icon/login/lock.png\" alt=\"\" class=\"text-field-icons\">\r\n         \r\n        </ion-input>\r\n        <ion-icon [name]=\"showPassword ? 'eye-off-outline' : 'eye-outline'\" slot=\"end\" (click)=\"onPasswordToggle()\" color=\"medium\" style=\"margin-top: 8px; height: 20px;\"></ion-icon>\r\n        \r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n\r\n      \r\n      <div style=\"margin-top: 25px; position: relative;\">\r\n       \r\n        <ion-checkbox color=\"danger\" (ionChange)=\"onMyBooleanChange($event)\"></ion-checkbox>\r\n        <span style=\"color: #c0bfc0; font-size: 12px; margin-left: 6px;\">Remember me</span>\r\n        <span style=\"color: #c0bfc0; font-size: 13px; position: absolute; right: 0; top: 4px;\" (click)=\"gotoForgotPassword()\">Forgot password?</span>\r\n\r\n      </div>\r\n  \r\n        <ion-button shape=\"round\" expand=\"block\" class=\"loginButton\" type=\"submit\"> SIGN IN </ion-button>\r\n\r\n      </form>\r\n  \r\n        <h1>SIGN IN USING</h1>\r\n\r\n        <div style=\"margin-top: 13px; text-align: center;\">\r\n          <img class=\"socialLoginButtons\" src=\"../../assets/icon/login/fb.png\" (click)=\"FacebookLogin()\">\r\n          <img class=\"socialLoginButtons twitter\" src=\"../../assets/icon/login/twitter.png\" (click)=\"TwitterLogin()\">\r\n          <img class=\"socialLoginButtons gPlus\" src=\"../../assets/icon/login/gPlus.png\" (click)=\"GoogleLogin()\">\r\n        </div>\r\n\r\n        <div style=\"margin-top: 25px; text-align: center;\">\r\n          <span style=\"color: #c0bfc0; font-size: 13px; margin-left: 5%;\">Don't have an account ? \r\n            <ion-button fill=\"clear\" style=\"color: #ea6850;margin-bottom: 15px;margin-left: -10px; font-size: 13px;\" [routerLink]=\"['/sign-up']\">Sign Up\r\n            </ion-button> \r\n          </span>\r\n        </div>\r\n        \r\n  </div>\r\n    </ion-content>\r\n  ");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _login_page__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  --background: url('bg3.jpg') 0 0/100% 100% no-repeat;\n}\n.logoHeader {\n  height: 55px;\n  max-width: 195px;\n}\n.loginButton {\n  --background: #fcbb3b;\n  height: 45px;\n  margin-top: 12px;\n  color: black;\n  font-weight: 800;\n  font-size: small;\n}\n.text-field-icons {\n  height: 16px;\n  width: 14px;\n  margin: -4px 10px 0px 0px;\n}\n.validation {\n  color: white;\n  text-align: center;\n  font-size: 12px;\n}\nion-button {\n  text-transform: none;\n}\nion-input {\n  margin: -3px 0 0 2px;\n  font-size: 14px;\n}\nion-item {\n  border: 1px solid white;\n  border-radius: 25px;\n  background: #36343585;\n  height: 42px;\n  margin-bottom: 18px;\n  color: white;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\nion-checkbox {\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n  margin-bottom: -2px;\n}\nh1 {\n  position: relative;\n  font-size: 15px;\n  margin-top: 35px;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  color: #c0bfc0;\n}\nh1:before, h1:after {\n  position: absolute;\n  top: 51%;\n  overflow: hidden;\n  width: 50%;\n  height: 1px;\n  content: \" \";\n  background-color: #c0bfc0;\n}\nh1:before {\n  margin-left: -55%;\n  text-align: right;\n}\nh1:after {\n  margin-left: 13px;\n}\n.socialLoginButtons {\n  width: 40px;\n}\n.twitter {\n  margin-left: 33px;\n}\n.gPlus {\n  margin-left: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxvREFBQTtBQUVKO0FBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKO0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBS0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFNSjtBQUpBO0VBQ0ksb0JBQUE7QUFPSjtBQUpHO0VBQ0Msb0JBQUE7RUFDQSxlQUFBO0FBT0o7QUFKRztFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBT0o7QUFKRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9KO0FBSEc7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1KO0FBSkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBT0o7QUFMQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFRSjtBQU5BO0VBQ0ksaUJBQUE7QUFTSjtBQU5BO0VBQ0ksV0FBQTtBQVNKO0FBUEE7RUFDSSxpQkFBQTtBQVVKO0FBUkE7RUFDSSxpQkFBQTtBQVdKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbi9sYW5kaW5nL2JnMy5qcGdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5sb2dvSGVhZGVyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXgtd2lkdGg6IDE5NXB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmY2JiM2I7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udGV4dC1maWVsZC1pY29ucyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE0cHg7XG4gIG1hcmdpbjogLTRweCAxMHB4IDBweCAwcHg7XG59XG5cbi52YWxpZGF0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW46IC0zcHggMCAwIDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMzYzNDM1ODU7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuXG5oMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYzBiZmMwO1xufVxuXG5oMTpiZWZvcmUsIGgxOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGNvbnRlbnQ6IFwiwqBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYmZjMDtcbn1cblxuaDE6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IC01NSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5oMTphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuXG4uc29jaWFsTG9naW5CdXR0b25zIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi50d2l0dGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XG59XG5cbi5nUGx1cyB7XG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map