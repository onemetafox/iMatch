import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActionSheetController, ToastController, Platform, LoadingController,ModalController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams, IonSlides } from '@ionic/angular';
import { FormBuilder,	FormGroup, Validators, AbstractControl} from '@angular/forms';

// import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { NavigationExtras } from '@angular/router';
import * as BaseConfig from '../services/config';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
// const { Camera, Filesystem } = Plugins;


@Component({
  selector: 'app-personal-match',
  templateUrl: './personal-match.page.html',
  styleUrls: ['./personal-match.page.scss'],
})
export class PersonalMatchPage implements OnInit {

  userDetails: any = [];
  PersonalMatch: any = [];
  @ViewChild('slides', {static: true}) slides: IonSlides;
  personalMatchSlideIndex: any;
  PersonalMatchImage: any;
  PersonalMatchAudio: any;
  PersonalMatchLink: any;
  PersonalMatchVideo: any;
  PersonalMatchText: any;
  userDetail: any;

  constructor(
    public storageservice: StorageService,
    public popoverController: PopoverController,
    public modalController: ModalController,
    private common: CommonService, 
    private androidPermissions: AndroidPermissions,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private mediaCapture: MediaCapture,
    private camera: Camera,
    private platform: Platform
  ) { 

    this.common.route.queryParams.subscribe((resp:any) => {
      this.userDetails = resp;
      this.personalMatchSlideIndex = this.userDetails.personalMatchSlideIndex;
    });

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetail = val;
    });

  }

  ngOnInit() {
    if (this.common.platform.is("cordova" || "capacitor")) {
      this.common.platform.ready().then(() => {
        this.filePermission();
      });
    }
  }
  async filePermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
  ionViewWillEnter(){
    // this.common.showLoader();
    this.common.presentLoading();
    this.slides.updateAutoHeight();
    this.slides.update();

    if ( this.userDetails.category == "personal" ) {

      let params = {
        userid : this.userDetails.userid
      }

      this.common.postMethod('PersonalMatch',params).then((res:any) => {
        this.PersonalMatch = res.details;

        this.slides.slideTo(this.personalMatchSlideIndex);
        this.common.hideLoader();
      }, (err) => {
        this.ionViewWillEnter();
        this.common.hideLoader();
      });
    } else if (this.userDetails.category == "closed") {

      let params = {
        userid : this.userDetails.userid
      }

      this.common.postMethod('ClosedMatch',params).then((res:any) => {

        this.PersonalMatch = res.details;

        this.slides.slideTo(this.personalMatchSlideIndex);
        this.common.hideLoader();
      }, (err) => {
        this.ionViewWillEnter();
        this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
        this.common.hideLoader();
      });

    }
    // });

  }

  async imageSlide(match){
    // const popover = await this.popoverController.create({
    //   component: ItemSliderComponent,
    //   cssClass: 'my-custom-class',
    //   componentProps:{key: match},
    //   translucent: true,
    //   backdropDismiss: true,
    //   animated: false
    // });
    // return await popover.present();
    console.log(match);
    this.common.router.navigate(['/personal-item-slider'], {queryParams: {match: JSON.stringify(match)}});
  }

  gotoPersonalMatchComments(e,match) {
    match.matchType = 'PERSONAL';
    this.common.navCtrl.navigateForward(['/comments'], {queryParams: match});
   }

   ToSendReceiverLike(e,match, match_id) {
     if (this.userDetails.category === 'personal') {
      let params = {
        userid : this.userDetail.userid,
        matchid : match_id,
        image_liked : match.image_id,
      }

      this.common.postMethod('personallike',params).then((res:any)=> {
        // this.userDetails.fileType = match.receiver_image_type;
        this.ionViewWillEnter();
      }, (err) => {
      });

      } else {

        let params = {
          userid : this.userDetail.userid,
          matchid : match_id,
          contestentid : match.id,
          status : 'like'
        }
        this.common.postMethod('Like',params).then((res:any) => {
          this.ionViewWillEnter();
        }, err => {
        });
      }

    }

    ToSendSenderLike(e,match, match_id) {
      if (this.userDetails.category === 'personal') {

        let params = {
          user_liked : this.userDetail.userid,
          matchid : match_id,
          image_id : match.media_id,
        }

        this.common.postMethod('personallike',params).then((res:any) => {
          this.ionViewWillEnter();
        }, (err) => {
          console.log(err.headers);
        });
      } else {
        let params = {
          userid : this.userDetail.userid,
          matchid : match_id,
          contestentid : match.id,
          status : 'like'
        }
        this.common.postMethod('Like',params).then((res:any) => {
          this.ionViewWillEnter();
        }, err => {
          console.log('Error:',err);
        });

      }
    }

  async toShowMatchHistory(ev:any ,match) {
    const popover = await this.popoverController.create({
     component: PopoverComponent,
     cssClass: 'my-custom-class',
     componentProps:{key: match},
     translucent: true,
     backdropDismiss: true,
     animated: true
   });
   return await popover.present();

  }

  IconCategorize(cat) {
    if (this.userDetail.category === 'personal') {

      if (cat === 'image') {

        this.common.showLoader();
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.image;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no image Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' image Personal Matches');
          }
          this.common.hideLoader();
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'video') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.video;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no video Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' video Personal Matches');
          }
          this.common.hideLoader();
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'audio') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.audio;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no audio Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' audio Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'attachment') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.text;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no text Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' text Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'link') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.link;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no link Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' link Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      }

    } else {

      if (cat === 'image') {

        this.common.showLoader();
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.image;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no image Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' image Personal Matches');
          }
          this.common.hideLoader();
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'video') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.video;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no video Personal Matches');
          } else {

            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' video Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'audio') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.audio;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no audio Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' audio Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'attachment') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.text;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no text Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' text Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'link') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          this.PersonalMatch = res.details.link;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no link Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' link Personal Matches');
          }
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      }
    }


  }

  async openRevealedCount(i: number, type: string) {

    const popover = await this.popoverController.create({
      component: RevealedCountComponent,
      cssClass: 'my-custom-class',
      componentProps:{key: this.PersonalMatch[i], type},
      translucent: true,
      backdropDismiss: true,
      animated: false
    });
    return await popover.present();

  }
  async openCount(i: number, type: string) {
    const popover = await this.popoverController.create({
      component: CountComponent,
      cssClass: 'my-custom-class',
      componentProps:{key: this.PersonalMatch[i], type},
      translucent: true,
      backdropDismiss: true,
      animated: false
    });
    return await popover.present();

  }

  async toViewSenderMatchImage(ev:any, match) {
    const popover = await this.modalController.create({
      component: SenderPopoverComponent,
      cssClass: 'my-custom-class',
      componentProps:{key:match, userType: this.userDetails.userType},
      // translucent: true,
      backdropDismiss: true,
      animated: false
    });
    return await popover.present();

  }

  async toViewReceiverMatchImage(ev:any, match) {
    const popover = await this.modalController.create({
      component: ReceiverPopoverComponent,
      cssClass: 'my-custom-class',
      componentProps:{key:match, userType: this.userDetails.userType},
      // translucent: true,
      backdropDismiss: true,
      animated: false
    });
    return await popover.present();

  }

}

@Component({
  template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Revealed Count </h4>
          <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
            <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
            <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->
            <ion-row>
              <ion-col>
                <div style="background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
                <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>
                <p *ngFor="let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname"> {{l.loser_name}} </p>
              </ion-col>

              <ion-col>
                <div style="background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
                <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>
                <p *ngFor="let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname"> {{w.winner_name}} </p>
              </ion-col>
            </ion-row>

          </div>
        </div>
   `
})

export class RevealedCountComponent {

 Match: any  = [];
  type: string;
//  userDetails: any;

 constructor(
  public popoverController: PopoverController,
          private common: CommonService,
          public navParams: NavParams,
   ) {

     this.Match = this.navParams.get('key');
     this.type = this.navParams.get('type');

   }

   ionViewWillEnter(){}

    }

@Component({
template: `
      <div style=" text-align: center; ">
        <h4 style=" font-weight: 600; "> Count </h4>
        <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
          <!-- <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
          <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
          <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
          <p>Total Hours : <span> {{Match.time_duration}} </span> </p> -->
          <!-- <ion-row>
            <ion-col>
              <div style="background: blue; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
              <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_lossname.length : Match.sender_image_lossname.length}} </p>
              <p *ngFor="let l of type==='receiver' ? Match.receiver_image_lossname : Match.sender_image_lossname"> {{l.loser_name}} </p>
            </ion-col>

            <ion-col>
              <div style="background: red; border-radius: 50%; width: 10px; height: 10px; margin-left: 35px;"></div>
              <p style="font-weight: bold"> {{type==='receiver' ? Match.receiver_image_winname.length : Match.sender_image_winname.length}} </p>
              <p *ngFor="let w of type==='receiver' ? Match.receiver_image_winname : Match.sender_image_winname"> {{w.winner_name}} </p>
            </ion-col>
          </ion-row> -->

           <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_image_win : Match.sender_image_win}} Wins</p>
          <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_image_loss : Match.sender_image_loss}} Lost</p>

          <p style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_anonymous_count : Match.sender_anonymous_count}} Anonymous</p>
          <p (click)="openRevealedCount('sender')" style="margin: 0; font-size: 14px;"> {{type==='receiver' ? Match.receiver_reveal_count : Match.sender_reveal_count}} Revealed</p>

        </div>
      </div>
  `
})

export class CountComponent {

Match: any  = [];
type: string;
//  userDetails: any;

constructor(
public popoverController: PopoverController,
        private common: CommonService,
        public navParams: NavParams,
  ) {
    this.Match = this.navParams.get('key');
    this.type = this.navParams.get('type');
  }

  ionViewWillEnter(){}

    async openRevealedCount(type: string) {
      this.popoverController.dismiss();

      const navigationExtras: NavigationExtras = {
        state: {
          data: this.Match,
          type
        }
      };
  
      this.common.router.navigate(['personal-match-revealed'], navigationExtras);

      // this.common.router.navigate(['/personal-match-revealed'], {queryParams: this.userDetails});
  
      // const popover = await this.popoverController.create({
      //   component: RevealedCountComponent,
      //   cssClass: 'my-custom-class',
      //   componentProps:{key: this.Match, type},
      //   translucent: true,
      //   backdropDismiss: true,
      //   animated: false
      // });
      // return await popover.present();
  
    }

  }

@Component({
  template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Match History </h4>
          <div style=" border: 3px solid grey; padding: 15px; margin: 15px; font-size: 14px;">
            <p>Match Date : <span> {{Match.match_start | date}} </span> </p>
            <p>Match Start Time : <span> {{Match.match_start | date:'shortTime'}} </span> </p>
            <p>Match End Time : <span> {{Match.match_end | date:'shortTime'}} </span> </p>
            <p>Total Hours : <span> {{Match.time_duration}} </span> </p>
          </div>
        </div>
   `
})

export class PopoverComponent {

 Match: any  = [];
//  userDetails: any;

 constructor(
  public popoverController: PopoverController,
   private common: CommonService,
   public navParams: NavParams,
   ) {
    this.Match = this.navParams.get('key');

   }

   ionViewWillEnter(){}

    }
@Component({
  template: `
        <div style=" text-align: center; ">
          <h4 style=" font-weight: 600; "> Your Second Image </h4>
          <div style=" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;">
            <div>
                <img [src]="Match.sender_image" alt="" onerror="this.src='../../assets/icon/no_media.png';">
            </div>

            <div style="display: flex; justify-content: space-between;">

            <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;">
            <img src="../../assets/icon/03.png" alt=""> <span style="font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;"> {{Match.sender_reveal_count}} </span>
            </div>

            <ion-button *ngIf="userType==='visitor'" (click)="sendMatch()" shape="round" size="small" style="text-transform: none;">Match This</ion-button>
            
          </div>
          </div>
        </div>
  `
})
    
  export class SenderPopoverComponent {

    FormSubmit: boolean = false;
    public MatchThisForm: FormGroup;
    caption: AbstractControl;

    userCaption = {
    "caption": "" ,
    };
  
    Match: any  = [];
  userDetails: any;
  userType: string;
    constructor(
    public popoverController: PopoverController,
    public storageservice: StorageService,
      private common: CommonService,
      public formbuilder: FormBuilder,
      public navParams: NavParams,
      ) {

      this.MatchThisForm = formbuilder.group({
        caption:['',Validators.compose([Validators.required,
                                      Validators.minLength(1),
                                    ])],
      });

      this.caption = this.MatchThisForm.controls['caption'];
      this.Match = this.navParams.get('key');
      this.userType = this.navParams.get('userType');
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

    }
  
    ionViewWillEnter(){}

    async sendMatch() {
  
      const popover = await this.popoverController.create({
        component: SendMatchComponent,
        cssClass: 'my-custom-class',
        componentProps:{key:this.Match, userType: 'sender'},
        translucent: true,
        backdropDismiss: true,
        animated: false
      });
      return await popover.present();
  
    }
    ToSendMatch(e,m) {

      let params = {
        userid : this.userDetails.userid,
        caption: this.userCaption.caption
      }

      this.common.postMethod('abc',params).then((res:any) => {
        console.log('res:',res);
      }, (err) => {
        this.common.presentToast('This area is under Development');
        this.MatchThisForm.reset();
        console.log('Error:',err);
      });
      }
  }

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="dismissButton()">
            <img src='../../assets/icon/back.png' alt="" style="width:10px; height: 18px;">
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    <div style=" text-align: center; ">
      <h4 style=" font-weight: 600; "> This Match </h4>
      <div style=" border: 3px solid grey; padding: 2px; margin: 5px; font-size: 14px; justify-content: center;">
        <div *ngIf="Match.compare_data.length == 2">
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngFor="let item of Match.compare_data; let i = index">
              <div *ngIf="item.media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">{{item.media}}</div>
              <img *ngIf="item.media_type==='image' || item.media_type===''" [src]="item.media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)" />
              <img *ngIf="item.media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">
              <audio *ngIf="item.media_type==='audio'" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)"></audio>
              <div *ngIf="item.media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)">
                <a [href]="item.media">{{item.media}}</a>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="Match.compare_data.length == 3">
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;">
              <div *ngFor="let item of Match.compare_data; let i = index">
                <div *ngIf="item.media_type==='text'" readonly class="text-match-style" autoGrow style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">{{item.media}}</div>
                <img *ngIf="item.media_type==='image' || item.media_type===''" [src]="item.media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                <img *ngIf="item.media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                <audio *ngIf="item.media_type==='audio'" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)"></audio>
                <div *ngIf="item.media_type==='link'" style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)">
                  <a [href]="item.media">{{item.media}}</a>
                </div>
              </div>
          </div>
        </div>

        <div *ngIf="Match.compare_data.length == 4">
          <div style="display: grid; grid-template-columns: 1fr 1fr;margin-top: 10px;">
            <div *ngIf="Match.compare_data[0].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">{{Match.compare_data[0].media}}</div>
            <img *ngIf="Match.compare_data[0].media_type==='image' || Match.compare_data[0].media_type===''" [src]="Match.compare_data[0].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
            <img *ngIf="Match.compare_data[0].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
            <audio *ngIf="Match.compare_data[0].media_type==='audio'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></audio>
            <div *ngIf="Match.compare_data[0].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
              <a [href]="Match.compare_data[0].media">{{Match.compare_data[0].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[1].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">{{Match.compare_data[1].media}}</div>
            <img *ngIf="Match.compare_data[1].media_type==='image' || Match.compare_data[1].media_type===''" [src]="Match.compare_data[1].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <img *ngIf="Match.compare_data[1].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <audio *ngIf="Match.compare_data[1].media_type==='audio'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></audio>
            <div *ngIf="Match.compare_data[1].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
              <a [href]="Match.compare_data[1].media">{{Match.compare_data[1].media}}</a>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngIf="Match.compare_data[2].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">{{Match.compare_data[2].media}}</div>
            <img *ngIf="Match.compare_data[2].media_type==='image' || Match.compare_data[2].media_type===''" [src]="Match.compare_data[2].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <img *ngIf="Match.compare_data[2].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <audio *ngIf="Match.compare_data[2].media_type==='audio'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></audio>
            <div *ngIf="Match.compare_data[2].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
              <a [href]="Match.compare_data[2].media">{{Match.compare_data[2].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[3].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">{{Match.compare_data[3].media}}</div>
            <img *ngIf="Match.compare_data[3].media_type==='image' || Match.compare_data[3].media_type===''" [src]="Match.compare_data[3].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <img *ngIf="Match.compare_data[3].media_type==='video'" onerror="this.src='../../assets/icon/video1.png';" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <audio *ngIf="Match.compare_data[3].media_type==='audio'" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)"></audio>
            <div *ngIf="Match.compare_data[3].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
              <a [href]="Match.compare_data[3].media">{{Match.compare_data[3].media}}</a>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between;">

          <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px; border-radius: 50%; box-shadow: 0.5px 0.5px 9px 3px grey;">
          <img src="../../assets/icon/03.png" alt=""> <span style="font-weight: 600; margin-left: 10px; position: relative; top: 3px; font-size: 16px;"> {{Match.receiver_reveal_count}} </span>
          </div>

          <ion-button *ngIf="userType==='visitor'" (click)="sendMatch()" shape="round" size="small" style="text-transform: none;">Match This</ion-button>
        </div>

      </div>
    </div>
    </ion-content>
    `
})
        
        export class ReceiverPopoverComponent {
        
          Match: any  = [];
          userType: string;
          selectItem: any = [];
          constructor(
              public popoverController: PopoverController,
              public modalController: ModalController,
              private common: CommonService,
              public navParams: NavParams,
          ) {
              this.Match = this.navParams.get('key');
              this.userType = this.navParams.get('userType');
              this.selectItem = [];
          }
        
          ionViewWillEnter(){}

          async sendMatch() {
            if(this.selectItem.length > 0){
              this.selectItem.filter((a, b) => this.selectItem.indexOf(a) === b)
              this.selectItem.sort();
              const popover = await this.modalController.create({
                component: SendMatchComponent,
                cssClass: 'my-custom-class',
                componentProps:{key:this.Match, userType: 'receiver', selectItem: this.selectItem},
                // translucent: true,
                backdropDismiss: true,
                animated: false
              });
              return await popover.present();
            }else{
              this.common.showAlertSuccess('Please select Image');
              return;
            }
            
          
          }

          
          async dismissButton(){
            this.modalController.dismiss();
          }

          selectImage(e, index){
            if(e.target.style.border != ""){
              this.selectItem.splice(this.selectItem.indexOf(index), 1);
              e.target.style.border="";
            }else{
              this.selectItem.push(index)
              e.target.style.border="3px solid #50c8ff";
            }
          }
        
        }
@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="dismissButton()">
            <img src='../../assets/icon/back.png' alt="" style="width:10px; height: 18px;">
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
       <div>
        <div style="text-align: center; padding: 5px;">
          <h4 style="font-weight: 600;">Match This</h4>
          <div style=" margin: 10px;box-shadow: 1px 1px 10px 0px;padding: 5px 5px 30px 5px;margin-top: 0px !important;border-radius: 3px; border-top: 2px solid #80808078 ; margin-bottom: 50px;">
            <div *ngIf="this.selectItem.length == 1">
              <div>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 2">
              <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 3">
              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:150px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[2]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''" [src]="this.Match.compare_data[this.selectItem[2]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:150px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:150px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:150px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='link'" style="width:150px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[2]].media">{{this.Match.compare_data[this.selectItem[2]].media}}</a>
                </div>
              </div>
            </div>
            <div *ngIf="this.selectItem.length == 4">
              <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[0]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='image' || this.Match.compare_data[this.selectItem[0]].media_type===''" [src]="this.Match.compare_data[this.selectItem[0]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[0]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[0]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[0]].media">{{this.Match.compare_data[this.selectItem[0]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[1]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='image' || this.Match.compare_data[this.selectItem[1]].media_type===''" [src]="this.Match.compare_data[this.selectItem[1]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[1]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[1]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[1]].media">{{this.Match.compare_data[this.selectItem[1]].media}}</a>
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[2]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='image' || this.Match.compare_data[this.selectItem[2]].media_type===''" [src]="this.Match.compare_data[this.selectItem[2]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[2]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[2]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[2]].media">{{this.Match.compare_data[this.selectItem[2]].media}}</a>
                </div>
                <div *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px">{{this.Match.compare_data[this.selectItem[3]].media}}</div>
                <img *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='image' || this.Match.compare_data[this.selectItem[3]].media_type===''" [src]="this.Match.compare_data[this.selectItem[3]].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px">
                <video *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='video'" [src]="this.Match.compare_data[this.selectItem[3]].media" controls style="width:195px; height: 255px;padding:5px"></video>
                <audio *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='audio'" [src]="this.Match.compare_data[this.selectItem[3]].media" controls style="width:195px; height: 255px;padding:5px"></audio>
                <div *ngIf="this.Match.compare_data[this.selectItem[3]].media_type==='link'" style="width:195px; height: 255px;padding:5px">
                  <a [href]="this.Match.compare_data[this.selectItem[3]].media">{{this.Match.compare_data[this.selectItem[3]].media}}</a>
                </div>
              </div>
            </div>
          </div>
          <div style="padding: 5px; border: 2px solid grey; border-radius: 5px; text-align: center;">

            <ion-input [(ngModel)]="closedMatchCaption" placeholder="Enter Caption" autocapitalize="true" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>
            
            <div *ngFor="let att of this.anArray; let idx = index">
              <div *ngIf="att.type=='file'">
                <p style="font-size: 10px; color: white; background-color: #5e5e5f; border-radius: 5px; padding: 5px; width: 130px;"> {{this.fileArray[att.position].name}} </p>
              </div>
              <div *ngIf="att.type=='text'">
                <ion-input type="text" placeholder="" [(ngModel)]="wordArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <div *ngIf="att.type=='link'">
                <ion-input type="text" placeholder="" [(ngModel)]="linkArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
            </div>
            
            <img src="../../assets/icon/bg2new.png" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" (click)="presentActionSheet()">

            <ion-row style="border: 1px solid transparent; height: 47px;">
              <ion-label style="position: relative; top: 8px; margin-right: 15px;">Make it Anonymous</ion-label>
              <ion-toggle [(ngModel)]="isAnonymous"></ion-toggle>
            </ion-row>
            <div style="display: flex; justify-content: space-between;">

            <div style="display: flex; background-color: white; width: 31px; height: 30px; margin-left: 10px;">
              <ion-button shape="round" size="small" (click)="dismissButton()" style="text-transform: none;">cancel</ion-button>
            </div>

            <ion-button type="submit" shape="round" size="small" (click)="ToSendMatch($event)" style="text-transform: none;">proceed</ion-button>
            </div>
            
          </div>
        </div>
      </div>
    </ion-content>
  `
})

  export class SendMatchComponent {

    FormSubmit: boolean = false;
    public MatchThisForm: FormGroup;
    caption: AbstractControl;
    isAnonymous: boolean;

    userCaption = {
    "caption": "" ,
    };

    selectedFiles: any = [];
    anArray: any [] = [];
    wordArray: any [] = [];
    linkArray: any [] = [];
    myFiles: any = [];
    urls: any = [];
    Match: any  = [];
    selectItem: any = [];
    matchIds: any = [];
    userDetails: any;
    userType: string;
    closedMatchCaption: string;
    closedMatchLink: string;
    closedMatchWording: string;
    isCaptureImage: boolean;
    FileTransferResponse: any = [];
    isLink: boolean = false;
    hideImageSpace: boolean = true;
    isWordings: boolean = false;
    cameraData: MediaFile;
    documentData: any;
    isPickDocuments: boolean;
    isCaptureAudio: boolean;
    isCaptureVideo: boolean;
    audioData: MediaFile;
    videoData: MediaFile;
    isVideo: boolean = false;
    isAudio: boolean = false;
    isImage: boolean = false;
    filesType: any;
    filesName: any;
    filesPath: any;
    fileArray: any [] = [];

    constructor(
      public popoverController: PopoverController,
      public modalController: ModalController,
      private actionSheetCtrl: ActionSheetController,
      public storageservice: StorageService,
      private mediaCapture: MediaCapture,
      private fileChooser: FileChooser,
      private filePath: FilePath,
      private transfer: FileTransfer,
      private common: CommonService,
      public formbuilder: FormBuilder,
      public navParams: NavParams,
      private http : HttpClient,
      public actionSheetController: ActionSheetController,
      private androidPermissions: AndroidPermissions,
      private camera: Camera,
      private platform: Platform
    ) {

    this.MatchThisForm = formbuilder.group({
      caption:['',Validators.compose([Validators.required,
        Validators.minLength(1),
      ])],
    });

    this.caption = this.MatchThisForm.controls['caption'];

    this.Match = this.navParams.get('key');
    this.userType = this.navParams.get('userType');
    this.selectItem = this.navParams.get('selectItem');

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

  }

  ionViewWillEnter(){
    for(var i = 0; i < this.selectItem.length; i++){
      this.matchIds.push(this.Match.compare_data[this.selectItem[i]].media_id);
    }
    this.isCaptureImage = false;
    this.hideImageSpace = true;
  }

  async dismissButton(){
    this.modalController.dismiss();
  }

  Add(type){
    if(this.anArray.length >= 2){
      this.common.showAlert('Maximum is 2 items');
      return;
    }
    if(type == 'link'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'link'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
    if(type == 'text'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'text'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
    if(type == 'file'){
      let position = 0;
      for(let i = 0; i < this.anArray.length; i++){
        if(this.anArray[i].type == 'file'){
          position++;
        }
      }
      this.anArray.push({'value':'', 'type': type, position: position});
    }
  }
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
  }
  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: ' Choose A Media To Upload For Closed Match',
      buttons: [
        {
          text: 'Send Wordings',
          icon: 'text',
          handler: () => {
            this.wordArray.push({value: ''});
            this.Add('text');
            this.SendWordings();
          }
          },

        {
          text: 'Share Links',
          icon: 'link',
          handler: () => {
            this.linkArray.push({value: 'http://'});
            this.Add('link');
            this.PickLinks();
          }
          },

          {
            text: 'Capture Image',
            icon: 'camera',
            handler: () => {
              this.CaptureImage()
              // this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          }, 

          {
          text: 'Capture Video',
          icon: 'videocam',

          handler: () => {
            this.CaptureVideo()
            // this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },

        {
          text: 'Capture Audio',
          icon: 'mic-circle',

          handler: () => {
            this.anArray.push({value: '', type: 'audio'});
            this.CaptureAudio();
          }
          },

          {
          text: 'Other Files',
          icon: 'folder-open',
          handler: () => {
            this.PickDocuments();
          }
          },

          {
          text: "Cancel",
          role: "cancel",
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  SendWordings() {
      this.isWordings = true;
      this.hideImageSpace = false;
      this.isLink = false;
  }

  PickLinks() {
      this.isLink = true;
      this.isWordings = false;
      this.hideImageSpace = false;
  }

  CaptureImage() {
    const options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'jpg'
          })
        },
        (err: CaptureError) => console.error(err)
      );
  }

  CaptureVideo() {
    const options: CaptureVideoOptions = { limit: 1, duration:120, quality: 80 };
    this.mediaCapture.captureVideo(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'mp4'
          })
        },
        (err: CaptureError) => console.error(err)
      );

  }

  CaptureAudio() {
    const options: CaptureAudioOptions = { limit: 1 };
    this.mediaCapture.captureAudio(options)
      .then(
        (data) => {
          this.Add('file');
          this.fileArray.push({
            name: data[0].name,
            filePath: data[0].fullPath,
            fileType: 'mp3'
          })
        },
        (err: CaptureError) => console.error(err)
      );

  }

  async PickDocuments() {
    await this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        this.filesPath = filePath;
        this.filesName   = this.filesPath.substring(this.filesPath.lastIndexOf("/") + 1);
        this.filesType   = this.filesName.substring(this.filesName.lastIndexOf(".") + 1);
        this.Add('file');
        this.fileArray.push({
          name: this.filesName,
          type: this.filesType,
          uri: uri,
          filePath: filePath
        })
      },err => {
        console.log(err);
        throw err;
      });
    },err => {
      console.log(err);
      throw err;
    });
  }

  uploadFile2(file:any, type: string) {

    let options: FileUploadOptions;

    options = {
      fileKey: "matchfile",
      fileName: file.name,
      httpMethod: 'POST',
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      params: { 
        rival_userid : this.userDetails.userid,
        opponent_userid: this.Match.senderid,
        personal_matchid: this.Match.match_id,
        // match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
        match_filename: this.userType === 'sender' ? this.Match.sender_image_type : this.Match.receiver_image_type,
        caption: this.closedMatchCaption,
        link: '',
        text: '',
        match_link:'',
        match_text: '',
        seen_status: '1',
        select_medis: JSON.stringify(this.matchIds),
      },
      headers: {
        Connection: 'close'
      }
   };


    let filePath: any;
    if (type !== 'audio') {
      filePath = encodeURI(file.fullPath);
    } else {
      filePath = file.fullPath;
    }

    this.common.showLoader();

    const fileTransfer: FileTransferObject = this.transfer.create();

    const fileUplaodUrl = BaseConfig.baseUrl + 'iMatch/api/v1/create_closedmatch';

    fileTransfer.onProgress((e) =>
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
      this.common.presentToast('Uploaded ' + prg + '% of file');

    });

    const formData = new FormData();

    for( let i=0;i<this.myFiles.length; i++) 
    {
      formData.append("filename[]",this.myFiles[i]);
    }

    this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_closedmatch',formData 
    ).subscribe((res) => {
      if (res['message']==='Successfully uploaded') {
        this.common.presentToast('File Uploaded Successful');
        this.common.router.navigate(['tabs/tab6']);
      } else {
        this.common.presentToast('File Upload Failed !!!');
      }
    }, err => {
      console.log('err',err);
    });

    
    fileTransfer.upload(filePath, fileUplaodUrl, options)
      .then((data) => {
        let res = JSON.parse(data.response);

        if (res.file_extension === 'mp4') {
          this.isVideo = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'aac') {
          this.isAudio = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'png') {
          this.isImage = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'jpg') {
          this.isImage = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'mp3') {
          this.isAudio = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        }

        if (res.status == true) {
          this.common.showAlertSuccess('Match File Upload Successful');
          // this.FileTransferResponse = res.upload_details;
          this.FileTransferResponse = res;
           this.common.hideLoader();
        } else {
          this.common.presentToast('File upload Failed');
          console.log('File Transfer Error');
          this.common.hideLoader();
        }
        
        // this.FileTransferResponse = data;
      }, (err) => {
        console.log('File Transfer Error:', err);
      });

  }

  ToSendMatch (e) {
    this.common.showLoader();
    let params = {
      rival_userid : this.userDetails.userid,
      opponent_userid: this.Match.compare_data[0].id,
      personal_matchid: this.Match.match_id,
      caption: this.closedMatchCaption,
      link: JSON.stringify(this.linkArray),
      text: JSON.stringify(this.wordArray),
      sub_captions: JSON.stringify(this.anArray),
      seen_status: '0',
      select_medias: JSON.stringify(this.matchIds),
    }

    this.common.postMethod('create_closedmatch',params).then(async (res:any) => {
      if (res.status === true) {
        // this.common.presentToast(' Your closed match invitaion send successfully ');
        // this.popoverController.dismiss();
        var matchid = res['matchid'];
          this.fileArray.forEach(item => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            fileTransfer.onProgress((e) =>
            {
              let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
              this.common.presentToast('Uploaded ' + prg + '% of file');
            });
            let options: FileUploadOptions = {
              fileKey: 'matchfile',
              fileName: item.name,
              httpMethod: 'POST',
              mimeType: 'multipart/form-data',
              chunkedMode: false,
              params: {
                match_id: matchid,
                userid: this.userDetails.userid
              },
              headers: {
                Connection: 'close'
              }
            }
            fileTransfer.upload(item.filePath, BaseConfig.baseUrl + 'iMatch/api/v1/MatchFileUpload', options)
              .then((data) => {
                console.dir('*****************' + data);

              }, (err) => {
                console.dir("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(err));

            });
          });
          
          this.common.presentToast('File Uploaded Successful');
          this.common.presentToast(' Your closed match invitaion send successfully ');
          this.popoverController.dismiss();
          this.common.hideLoader();
      } else {
        this.common.presentToast(' Your closed match invitaion sending failed ');
      }
      await this.common.hideLoader();
    }, async err => {
      await this.common.hideLoader();
      console.log('err:',err);
      this.popoverController.dismiss();  
    });

  }

}
