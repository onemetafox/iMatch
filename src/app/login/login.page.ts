import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';
import { PopoverController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
// import { AngularFireAuth } from '@angular/fire/auth';

import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl,
} from '@angular/forms';
import { Capacitor, Device } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  FormSubmit: boolean = false;
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isLoggedIn: boolean = false;

  public LoginForm: FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  userData = {
    "email": "",
    "password": "",
    };
    
  users = { 
      id: '', 
      name: '', 
      email: '', 
      picture: { 
          data: { 
              url: '' 
          } 
      } 
  };

  FacebookLoginDetails: any = [];
  GoogleLoginDetails: any = [];
  LoginDetails: any = [];
  userDetails: any = [];
  DeviceToken: any = [];
  DeviceInfo: any = [];
  UserLocation: any = [];

  constructor(
    private common: CommonService,
    private storageservice: StorageService,
    public formbuilder:FormBuilder,
    public popoverController: PopoverController,
    private fb: Facebook,
    private google: GooglePlus,
    private twit: TwitterConnect,
    ) { 

      this.LoginForm = formbuilder.group({
        email:['', Validators.compose([Validators.required,
                                        Validators.email,
                                        Validators.minLength(12),
                                        // Validators.pattern(/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/)
                                      ])],
        password:['', Validators.compose([Validators.required,
                                          Validators.minLength(8),
                                          Validators.maxLength(30),
                                          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      })
     
      this.email= this.LoginForm.controls['email'];
      this.password = this.LoginForm.controls['password'];

      this.LoginForm.reset();

    }

    ngOnInit() {
      this.LoginForm.reset();
      this.common.menu.swipeGesture(false);

      if (this.common.platform.is("capacitor"||"cordova")) {
        } else {
            this.DeviceInfo.platform = 'web';
            this.DeviceToken.value = 'APA91pqyLyAWB1R0foRUbhT9AxRWzu3KsufESyMFEOS0RqKLLenr7ivZWmx9zw_hvRv7Oe9JDchpqTkaP5al7ECa_iJw0D58PBy_XDZx3FPX15z32nmulG9Sfk7xwGI078CQllfc8FiuQH9VKGuGhEP8sHNEvt1qZPPUwKKJ79lHpH1zafORb2L'
        };

    }
     ionViewWillEnter(){
       this.storageservice.storage.get('LoginDetails').then((val) => {
         if (val==null) {
          this.LoginForm.reset();
         } else {
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
        this.DeviceToken = val;
       });

       this.storageservice.storage.get('DeviceInfo').then((val) => {
        this.DeviceInfo = val;
       });

       this.storageservice.storage.get('UserLocation').then((val) => {
        this.UserLocation = val;
       });
       
     }

  onPasswordToggle() {
    this.showPassword = !this.showPassword;
  }

  onMyBooleanChange(event) {
    if (this.LoginForm.valid) { 

      if (event.detail.checked == true && this.LoginForm.valid) {
        this.storageservice.setStorage('LoginDetails',this.LoginForm.value);
        this.common.presentToast('Your Email and Password is Successfully stored ...');
      }

    } else {

      if (event.detail.checked == true) {

        this.common.presentToast('Please Enter Valid Details');

      } else {

        this.common.presentToast ('Remember Me Check Box Unchecked !!!');
      }

    }

  }

  // ---- Facebook Login Functionality ----

  FacebookLogin () {
    this.common.presentLoading();
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if (res.status === 'connected') {
        this.isLoggedIn = true;
        this.common.presentToast('Your Facebook Account is already connected with iMatch App ... So please wait while we fetch your details');
        this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        this.FacebookLoginDetails = res;
        this.storageservice.setStorage('FacebookLoginDetails',this.FacebookLoginDetails);

        let params = {
          name : this.FacebookLoginDetails.name,
          email : this.FacebookLoginDetails.email,
          profile_pic : this.FacebookLoginDetails.picture.data.url,
        }
        this.common.postMethod('register',params).then((res:any) => {
          if (res.status == true) {
            this.common.presentLoading();
            this.userDetails = res.details[0];
            this.storageservice.setStorage('userDetails',this.userDetails);
            this.common.navCtrl.navigateRoot(['/tabs/tab6'],{queryParams: this.userDetails});
            this.common.presentToast('Facebook Login Successful ...');
          } else if( res.status == false && res.message == 'user already existing' ){
            this.common.presentLoading();
            this.common.presentToast('You Had already LOGGED IN with the same EMAIL ... so please wait while we fetching your details');
            let params = {
              email : this.FacebookLoginDetails.email,
            }
            this.common.postMethod('GetUserdetails',params).then((res:any) => {
              if (res.status == true) {
              this.common.presentLoading();
              this.userDetails = res.details[0];
              this.storageservice.setStorage('userDetails',this.userDetails);
              this.common.navCtrl.navigateRoot(['/tabs/tab6'],{queryParams: this.userDetails});
              this.common.presentToast('Facebook Details Fetched Successful ...');
              } else {
                this.common.presentLoading();
                this.common.presentToast('Something went wrong !!!');
              }
            }, (err) => {
              console.log('Error:',err);
            });
          } else if(res.status == false){
            this.common.presentLoading();
            this.common.presentToast('Facebook Login Failed ...');
          }
        }, (err) => {
          console.log('Error:',err);
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
    this.google.login({})
    .then(res => {
      this.GoogleLoginDetails = res;
      this.storageservice.setStorage('GoogleLoginDetails',this.GoogleLoginDetails);

      let params = {
        name : this.GoogleLoginDetails.displayName,
        email : this.GoogleLoginDetails.email,
        profile_pic : this.GoogleLoginDetails.imageUrl,
      }
      this.common.postMethod('register',params).then((res:any) => {
        if (res.status == true) {
          this.common.presentLoading();
          this.userDetails = res.details[0];
          this.storageservice.setStorage('userDetails',this.userDetails);
          this.common.navCtrl.navigateRoot(['/tabs/tab6'],{queryParams: this.userDetails});
          this.common.presentToast('Google Login Successful ...');
        } else if ( res.status == false && res.message == 'user already existing') {
          this.common.presentLoading();
          this.common.presentToast('You Had already LOGGED IN with the same EMAIL ... so please wait while we fetching your details');
          let params = {
            email : this.GoogleLoginDetails.email,
          }
          this.common.postMethod('GetUserdetails',params).then((res:any) => {
            if (res.status == true) {
            this.common.presentLoading();
            this.userDetails = res.details[0];
            this.storageservice.setStorage('userDetails',this.userDetails);
            this.common.navCtrl.navigateRoot(['/tabs/tab6'], {queryParams: this.userDetails});
            this.common.presentToast('Google Details Fetched Successful ...');
            } else {
              this.common.presentLoading();
              this.common.presentToast('Something went wrong !!!');
            }
          }, (err) => {
            console.log('Error:',err);
          });
        } else if(res.status == false){
          this.common.presentLoading();
          this.common.presentToast('Google Login Failed ...');
        }
      }, (err) => {
        console.log('Error:',err);
      });

    }, (err) => {
      console.error('Error:',err);
    }
    )};

        // ---- Google Login Functionality ----

        async TwitterLogin(){
          this.common.presentLoading();
          this.twit.login()
          .then( res => {
            // Get user data
            // There is a bug which fires the success event in the error event.
            // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
            this.twit.showUser()
            .then(user => {
              console.log('user:',user);
            }, err =>{
              console.log(err);
              // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
              var profile_image = err.profile_image_url_https.replace('_normal','');
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
          }, err => {
            this.twit.login()
            .then((res:any) => {
              this.twit.showUser()
              .then(user => {
              } , err => {
                console.log('Error:',err);
              });
            }, err => {
              console.log('Error:',err);
            })
            console.log('Error:',err);
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
      let params = {
        email : this.userData.email,
        password : this.userData.password,
        device_token : '',
        // device_type : this.DeviceInfo.platform,
        device_type : '',
        // device_token : this.DeviceToken.value,
      }

      this.common.postMethod('login',params).then((res:any) => {
        if (res.status == true) {
          this.common.presentLoading();
          this.userDetails = res.details[0];
          this.storageservice.setStorage('userDetails',this.userDetails);
          this.common.navCtrl.navigateRoot(['/tabs/tab6'], {queryParams: this.userDetails});
          this.common.presentToast('Successfully Logged into your profile');
        } else if (res.message=='invalid email id'){

          this.common.showAlert('Invalid Email Id');

        } else if (res.message=='invalid email id or password') {

          this.common.showAlert('Invalid Password');

        }
      }, (err) => {
        console.log('Error:',err);
      });

  }

  async gotoForgotPassword() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      // event: ev,
      animated: false,
      translucent: true
    });
    return await popover.present();
  }

}
//  PopoverComponent Page :

@Component({
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

export class PopoverComponent implements OnInit {

  FormSubmit : boolean = false;
  usertype : any ='';
  loading: any;

   public formgroup: FormGroup;
   email:AbstractControl;

   responseData : any;

   userData = {
     "email": ""
   };

  constructor(
    public popoverController: PopoverController,
    private common: CommonService,
    public formbuilder:FormBuilder,
    private twit: TwitterConnect,
    // private fireAuth: AngularFireAuth,
    ) {

      this.formgroup = formbuilder.group({
        email:['', Validators.compose([Validators.required,
                                        Validators.minLength(12),
                                        Validators.email,
                                        Validators.pattern(/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/),
                                      ])]
      })

      this.email = this.formgroup.controls['email'];

    }

    ngOnInit() {}

    CheckEmail (email){
      var reg = /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
      if(reg.test(email)){
        return false;
      }else{
        return true;
      }
    }

    toClose() {
      this.popoverController.dismiss();
    }

    toCancel(){
      this.popoverController.dismiss();
    }

    async onDismiss(val) {
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
      
    } catch (e) {
        //click more than one time popover throws error, so ignore...
    }

  }
  onSubmit() {

  }


  forgot() {
    this.FormSubmit = true;
    if(this.formgroup.valid){
      this.common.showAlert('Password reset email sending failed !');
      this.common.forgotpassword('forgotpassword',this.userData).subscribe((res:any) =>{
        this.responseData = res;
        if (this.responseData.userData) { }
      })
    }else{
      this.common.showAlert('Password reset email sending failed');
    }

  }
}
