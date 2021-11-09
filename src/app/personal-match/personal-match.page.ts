import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams, IonSlides } from '@ionic/angular';
import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl,
} from '@angular/forms';
import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { NavigationExtras } from '@angular/router';
import * as BaseConfig from '../services/config';

const { Camera, Filesystem } = Plugins;


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
  ) { 

    this.common.route.queryParams.subscribe((resp:any) => {
      this.userDetails = resp;
      this.personalMatchSlideIndex = this.userDetails.personalMatchSlideIndex;
      console.log('userArray:',this.userDetails);
    });

    this.storageservice.storage.get('userDetails').then((val) => {
      console.log('Storage Value of userDetails:', val);
      this.userDetail = val;
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // this.common.showLoader();
    this.common.presentLoading();
    console.log('Entered into Personal Match page');
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

      console.log('params:',params);
      this.common.postMethod('ClosedMatch',params).then((res:any) => {

        this.PersonalMatch = res.details;

        this.slides.slideTo(this.personalMatchSlideIndex);
        console.log('closed:', this.PersonalMatch);
        this.common.hideLoader();
      }, (err) => {
        this.ionViewWillEnter();
        this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
        this.common.hideLoader();
      });

    }
    // });

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
    console.log('Show Match History Button Clicked');

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
    console.log('Cat:',cat);

    if (this.userDetail.category === 'personal') {

      if (cat === 'image') {

        this.common.showLoader();
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.image;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no image Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' image Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'video') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.video;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no video Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' video Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'audio') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.audio;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no audio Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' audio Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'attachment') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.text;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no text Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' text Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'link') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.link;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no link Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' link Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
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
        console.log('params:',params);
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.image;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no image Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' image Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'video') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.video;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no video Personal Matches');
          } else {

            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' video Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'audio') {
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.audio;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no audio Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' audio Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'attachment') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.text;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no text Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' text Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      } else if (cat === 'link') {
  
        this.common.showLoader();
  
        let params = {
          userid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          console.log('res:',res);
          this.PersonalMatch = res.details.link;
          if (this.PersonalMatch.length===0) {
            this.common.presentToast('You are having no link Personal Matches');
          } else {
            this.common.presentToast('You are having '+ this.PersonalMatch.length + ' link Personal Matches');
          }
          console.log('PersonalMatchImage:',this.PersonalMatch);
          this.common.hideLoader();
  
        }, err => {
          console.log('e:',err);
        });
  
      }
    }


  }

  async openRevealedCount(i: number, type: string) {
    console.log('Revealed Count');

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
    console.log(' Count');

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
    console.log('Show Sender Match Image Button Clicked');

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
    console.log('Show Receiver Match Image Button Clicked:', this.userDetails.userType);

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

     console.log(this.navParams.get('key'));
     console.log(this.navParams.get('type'));
     this.Match = this.navParams.get('key');
     this.type = this.navParams.get('type');

   }

   ionViewWillEnter(){
    //  console.log('ionViewWillEnter:',this.Match);
     }

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

    console.log(this.navParams.get('key'));
    console.log(this.navParams.get('type'));
    this.Match = this.navParams.get('key');
    this.type = this.navParams.get('type');

  }

  ionViewWillEnter(){
  //  console.log('ionViewWillEnter:',this.Match);
    }

    async openRevealedCount(type: string) {
      console.log('Revealed Count');

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
     console.log(this.navParams.get('key'));
    this.Match = this.navParams.get('key');

     console.log('users in popover:',this.Match);
   }

   ionViewWillEnter(){
     console.log('ionViewWillEnter:',this.Match);
     }

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

         console.log(this.navParams.get('key'));
        this.Match = this.navParams.get('key');
        this.userType = this.navParams.get('userType');
         console.log('users in popover:',this.Match);
         console.log('user type:',this.userType);

         this.storageservice.storage.get('userDetails').then((val) => {
          console.log('Storage Value of userDetails:', val);
          this.userDetails = val;
       });

      }
    
        ionViewWillEnter(){
          console.log('ionViewWillEnter:',this.Match);
          }

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
           console.log('Send Match Button Clicked');
          console.log('Match:',m);

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
              <video *ngIf="item.media_type==='video'" [src]="item.media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, i)"></video>
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
                <video *ngIf="item.media_type==='video'" [src]="item.media" controls style="height: 255px; width: 150px;padding:5px" (click)="selectImage($event, i)"></video>
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
            <video *ngIf="Match.compare_data[0].media_type==='video'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></video>
            <audio *ngIf="Match.compare_data[0].media_type==='audio'" [src]="Match.compare_data[0].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)"></audio>
            <div *ngIf="Match.compare_data[0].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 0)">
              <a [href]="Match.compare_data[0].media">{{Match.compare_data[0].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[1].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">{{Match.compare_data[1].media}}</div>
            <img *ngIf="Match.compare_data[1].media_type==='image' || Match.compare_data[1].media_type===''" [src]="Match.compare_data[1].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
            <video *ngIf="Match.compare_data[1].media_type==='video'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></video>
            <audio *ngIf="Match.compare_data[1].media_type==='audio'" [src]="Match.compare_data[1].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)"></audio>
            <div *ngIf="Match.compare_data[1].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 1)">
              <a [href]="Match.compare_data[1].media">{{Match.compare_data[1].media}}</a>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 10px;">
            <div *ngIf="Match.compare_data[2].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">{{Match.compare_data[2].media}}</div>
            <img *ngIf="Match.compare_data[2].media_type==='image' || Match.compare_data[2].media_type===''" [src]="Match.compare_data[2].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
            <video *ngIf="Match.compare_data[2].media_type==='video'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></video>
            <audio *ngIf="Match.compare_data[2].media_type==='audio'" [src]="Match.compare_data[2].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)"></audio>
            <div *ngIf="Match.compare_data[2].media_type==='link'" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 2)">
              <a [href]="Match.compare_data[2].media">{{Match.compare_data[2].media}}</a>
            </div>

            <div *ngIf="Match.compare_data[3].media_type==='text'" readonly class="text-match-style" autoGrow style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">{{Match.compare_data[3].media}}</div>
            <img *ngIf="Match.compare_data[3].media_type==='image' || Match.compare_data[3].media_type===''" [src]="Match.compare_data[3].media" alt="" onerror="this.src='../../assets/icon/no_media.png';" style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)">
            <video *ngIf="Match.compare_data[3].media_type==='video'" [src]="Match.compare_data[3].media" controls style="width:195px; height: 255px;padding:5px" (click)="selectImage($event, 3)"></video>
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
        
          ionViewWillEnter(){
            console.log('ionViewWillEnter:',this.Match);
          }

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
            console.log(e.target);
            if(e.target.style.border != ""){
              this.selectItem.splice(this.selectItem.indexOf(index), 1);
              e.target.style.border="";
            }else{
              this.selectItem.push(index)
              e.target.style.border="3px solid #50c8ff";
            }
          }
        
        }

      //   <div style="display: flex; margin-bottom: 10px; padding: 5px; justify-content: center;">
      //   <img [src]="this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image" style="height: 100px; width: 100px; margin-bottom: 10px; border-radius: 10px; position: relative; left: -5px;" onerror="this.src='../../assets/icon/no_media.png';" (click)="presentActionSheet()">

      //   <img *ngIf="hideImageSpace===true && isCaptureImage==false" src="../../assets/icon/bg2new.png" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" (click)="presentActionSheet()">
      //   <img *ngIf="isImage==true && isCaptureImage==true" [src]="FileTransferResponse.filename" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';">
      //   <video *ngIf="isVideo==true && isCaptureVideo==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></video>
      //   <audio *ngIf="isAudio==true && isCaptureAudio==true" style="height: 100px; width: 100px; border-radius: 10px; position: relative; left: 5px" [src]="FileTransferResponse.filename" controls controlsList="nodownload" onerror="this.onerror=null;this.src='../../assets/icon/loader.gif';"></audio>
      // </div>

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
              <div *ngIf="att.type=='text'">
                <ion-input type="text" placeholder="" [(ngModel)]="wordArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <div *ngIf="att.type=='link'">
                <ion-input type="text" placeholder="" [(ngModel)]="linkArray[att.position].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>  
              </div>
              <ion-input type="text" placeholder="Enter sub caption" [(ngModel)]="anArray[idx].value" style="border: 2px solid grey; border-radius: 5px; margin-bottom: 15px; background: lightgrey;"></ion-input>
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
      console.log('Storage Value of userDetails:', val);
      this.userDetails = val;
    });

  }

  ionViewWillEnter(){
    console.log("selecteditem--------------------------", this.Match);
    for(var i = 0; i < this.selectItem.length; i++){
      this.matchIds.push(this.Match.compare_data[this.selectItem[i]].media_id);
    }
    console.log(this.matchIds);
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
  }

  async presentActionSheet() {
    console.log('Action Sheet Clicked');
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
            console.log('Wording clicked');
          }
          },

        {
          text: 'Share Links',
          icon: 'link',
          handler: () => {
            this.linkArray.push({value: 'http://'});
            this.Add('link');
            this.PickLinks();
            console.log('Share clicked');
          }
          },

          {
            text: 'Capture Image',
            icon: 'camera',
            handler: () => {
              this.anArray.push({value: '', type: 'image'});
              this.CaptureImage();
              console.log('Camera clicked');
            }
          }, 

          {
          text: 'Capture Video',
          icon: 'videocam',

          handler: () => {
            this.anArray.push({value: '', type: 'video'});
            this.CaptureVideo();
            console.log("Gallery clicked");
          }
        },

        {
          text: 'Capture Audio',
          icon: 'mic-circle',

          handler: () => {
            this.anArray.push({value: '', type: 'audio'});
            this.CaptureAudio();
            console.log("Audio clicked");
          }
          },

          {
          text: 'Other Files',
          icon: 'folder-open',
          handler: () => {
            this.anArray.push({value: '', type: 'file'});
            this.PickDocuments();
            console.log('Folder clicked');
          }
          },

          {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  SendWordings() {
    console.log('Wording');
      this.isWordings = true;
      console.log('isWordings:',this.isWordings);

        this.hideImageSpace = false;
        console.log('hideImageSpace:',this.hideImageSpace);

          this.isLink = false;
          console.log('isLink:',this.isLink);

  }

  PickLinks() {
    console.log('Pick Links Button Presses');
      this.isLink = true;
        console.log('isLink:',this.isLink);

        this.isWordings = false;
        console.log('isWordings:',this.isWordings);

          this.hideImageSpace = false;
            console.log('hideImageSpace:',this.hideImageSpace);
  }

  CaptureImage() {
    console.log('CaptureImage');
    this.isLink = false;
    this.isWordings = false;
      this.hideImageSpace = true;
    this.isCaptureImage = true;
    console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings, 'isCaptureImage:', this.isCaptureImage);

    const options: CaptureImageOptions = { limit: 1};
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          console.log('data[0]:',data[0]);
          this.cameraData = data[0];
          this.uploadFile2(data[0], 'image');
        },
        (err: CaptureError) => console.error(err)
      );

  }

  CaptureVideo() {
    console.log('CaptureVideo');
    this.isLink = false;
    this.isWordings = false;
      this.hideImageSpace = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
    this.isCaptureImage = true;
    this.isCaptureVideo = true;
    const options: CaptureVideoOptions = { limit: 1 , duration: 2, quality: 90};
    this.mediaCapture.captureVideo(options)
    .then(
      (data: MediaFile[]) => {
        console.log('data[0]:',data[0]);
        this.videoData = data[0];
        this.uploadFile2(data[0], 'video');
      },
      (err: CaptureError) => console.error(err)
    );

  }

  CaptureAudio() {
    console.log('CaptureAudio');
    this.isLink = false;
    this.isWordings = false;
      this.hideImageSpace = true;
        console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
    this.isCaptureImage = true;
    this.isCaptureAudio = true;
    const options: CaptureImageOptions = { limit: 1};
    this.mediaCapture.captureAudio(options)
    .then(
      (data: MediaFile[]) => {
        console.log('data[0]:',data[0]);
        this.audioData = data[0];
        this.uploadFile2(data[0], 'audio');
      },
      (err: CaptureError) => console.error(err)
    );

  }

  PickDocuments() {

    console.log('PickDocuments');
    this.isLink = false;
    this.isWordings = false;
    this.hideImageSpace = true;
    console.log('hideImageSpace:', this.hideImageSpace, 'isLink:', this.isLink, 'isWordings:', this.isWordings);
    this.isCaptureImage = true;
    this.isPickDocuments = true;

    let file: any;

    this.fileChooser.open()
    .then(uri => {
      console.log('uri:',uri);

      this.filePath.resolveNativePath(uri)
      .then(filePath => {

        console.log('filePath:',filePath);
        let fileNameFromPath = filePath.substring(filePath.lastIndexOf('/') + 1);
        console.log('fileNameFromPath:',fileNameFromPath);

        file = {
          name: fileNameFromPath,
          fullPath: filePath
        };

        this.documentData = file;
        this.uploadFile2(file, 'file');
      })
      .catch(err => console.log(err));

    })
    .catch(e => console.log(e));

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

   console.log('options:',options);

    let filePath: any;
    if (type !== 'audio') {
      filePath = encodeURI(file.fullPath);
      console.log(filePath);
    } else {
      filePath = file.fullPath;
    }

    this.common.showLoader();

    const fileTransfer: FileTransferObject = this.transfer.create();

    const fileUplaodUrl = BaseConfig.baseUrl + 'iMatch/api/v1/create_closedmatch';

    fileTransfer.onProgress((e) =>
    {
      let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
      console.log("progress:"+prg+'%');
      this.common.presentToast('Uploaded ' + prg + '% of file');

    });

    const formData = new FormData();

    for( let i=0;i<this.myFiles.length; i++) 
    {
      formData.append("filename[]",this.myFiles[i]);
    }

    this.http.post(BaseConfig.baseUrl + 'iMatch/api/v1/create_closedmatch',formData 
    ).subscribe((res) => {
      console.log(res);
      if (res['message']==='Successfully uploaded') {
        this.common.presentToast('File Uploaded Successful');
        this.common.router.navigate(['tabs/tab6']);
      } else {
        this.common.presentToast('File Upload Failed !!!');
      }
    }, err => {
      console.log('err',err);
      console.log(err.headers);
    });

    
    fileTransfer.upload(filePath, fileUplaodUrl, options)
      .then((data) => {
        console.log('File Transfer Success:', data);
        console.log(JSON.parse(data.response));

        let res = JSON.parse(data.response);
        console.log('res:',res);

        if (res.file_extension === 'mp4') {
          console.log('This is a video file');
          this.isVideo = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'aac') {
          console.log(' This is a audio file ');
          this.isAudio = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'png') {
          console.log(' This is a image file ');
          this.isImage = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'jpg') {
          console.log(' This is a image file ');
          this.isImage = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        } else if (res.file_extension === 'mp3') {
          console.log(' This is a audio file ');
          this.isAudio = true;
          this.hideImageSpace = false;
          this.isCaptureImage = false;
        }

        if (res.status == true) {
          this.common.showAlertSuccess('Match File Upload Successful');
          // this.FileTransferResponse = res.upload_details;
          this.FileTransferResponse = res;
           console.log('File Transfer Success:', this.FileTransferResponse);
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


// fileChangeEvent(e, type) {
//   if (type==='folder') {
    
//     if (e.target.files.length > 2) {
//       this.common.showAlert('Try to choose maximum 2 media');
//     } 

//     this.selectedFiles = e.target.files;
//     for (let i=0; i<e.target.files.length; i++) {
//       this.myFiles.push(e.target.files[i]);
//     }

//     this.urls = [];
//     console.log('urls:',this.urls);
//     let files = e.target.files;
//     console.log('files:',files);
//     if (files) {
//       for (let file of files) {
//         let reader = new FileReader();
//         var error = reader.error
//         reader.onload = (e:any) => {
//           console.log('Loaded:', reader.result);
//           console.log('error:', error);
//           this.urls.push(e.target.result);
//           console.log('urls:',this.urls);
//         }

//         reader.readAsDataURL(file);
//       }
//     }
//   } 
// }
  // ToSendMatch() {
  // console.log('Send Match Button Clicked');

  // const params = {
  //   rival_userid : this.userDetails.userid,
  //   opponent_userid: this.Match.senderid,
  //   personal_matchid: this.Match.match_id,
  //   match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
  //   caption: this.closedMatchCaption,
  //   matchfile: ''
  // };
  
  // console.log('params:',params);
  // this.common.postMethod('create_closedmatch',params).then((res:any) => {
  // console.log('res:',res);
  // // this.common.navController.navigateRoot('tab6');
  // setTimeout(() => {
  //   this.common.presentToast('Your Closed Match is Uploaded Successfully');
  //   this.common.router.navigate(['tabs/tab6']);
  // }, 2000);
  // }, (err) => {
  // // this.common.presentToast('This area is under Development');
  // this.MatchThisForm.reset();
  // console.log('Error:',err);
  // });
  // }

  ToSendMatch (e) {
  console.log('Send Match Button Clicked');

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
    console.log('res:',res);

    if (res.status === true) {
      this.common.presentToast(' Your closed match invitaion send successfully ');
      this.popoverController.dismiss();
    } else {
      this.common.presentToast(' Your closed match invitaion sending failed ');
    }
    await this.common.hideLoader();
  }, async err => {
    await this.common.hideLoader();
    console.log('err:',err);
    this.popoverController.dismiss();  
  });
  
  // if (this.isLink==true) {

  //   if (this.closedMatchCaption!=undefined && this.closedMatchLink!=undefined) {

  //     this.common.showLoader();

  //     const regex  = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';

  //     if (this.closedMatchLink.match(regex)!=null) {
  
  //       console.log('Matching link');
  //         this.closedMatchLink = this.closedMatchLink;
  //           console.log('closedMatchLink',this.closedMatchLink);
  
  //     } else {
  
  //       console.log('No Match');
  //         this.closedMatchLink = 'https://'+this.closedMatchLink;
  //           console.log('closedMatchLink',this.closedMatchLink);
  
  //     }

  //     console.log(this.userType);
  
  //     let params = {
  //       rival_userid : this.userDetails.userid,
  //       opponent_userid: this.Match.compare_data[0].id,
  //       personal_matchid: this.Match.match_id,
  //       match_filename: this.userType === 'sender' ? this.Match.sender_image : this.Match.receiver_image,
  //       caption: this.closedMatchCaption,
  //       link: this.closedMatchLink,
  //       text: '',
  //       match_link:'',
  //       match_text: '',
  //       seen_status: '0',
  //       select_medis: JSON.stringify(this.matchIds),
  //     }
  //     console.log('params:',params);
  //       this.common.postMethod('create_closedmatch',params).then(async (res:any) => {
  //         console.log('res:',res);
  
  //         if (res.status === true) {
  //           this.common.presentToast(' Your closed match invitaion send successfully ');
  //           this.popoverController.dismiss();
  //         } else {
  //           this.common.presentToast(' Your closed match invitaion sending failed ');
  //         }
  //         await this.common.hideLoader();
  //     }, async err => {
  //       await this.common.hideLoader();
  //         console.log('err:',err);
  //         this.popoverController.dismiss();  
  
  //     });

  //   } else {
  //     this.common.showAlert('All fields are mandatory');
  //   }



  // } else if (this.isWordings==true) {

  //   if (this.closedMatchCaption!=undefined && this.closedMatchWording!=undefined) {

  //     let params = {
  //       rival_userid : this.userDetails.userid,
  //       opponent_userid: this.Match.compare_data[0].id,
  //       personal_matchid: this.Match.match_id,
  //       match_filename: this.userType === 'sender' ? this.Match.compare_data[0].image : this.Match.compare_data[1].image,
  //       caption: this.closedMatchCaption,
  //       link: '',
  //       text: this.closedMatchWording,
  //       match_link:'',
  //       match_text: '',
  //       seen_status: '0',
  //       select_medis: JSON.stringify(this.matchIds),
  //     }
  //     console.log('params:',params);
  //       this.common.postMethod('create_closedmatch',params).then((res:any) => {
  //         console.log('res:',res);
  //         if (res.status === true) {
  //           this.common.presentToast(' Your closed match invitaion send successfully ');
  //           this.popoverController.dismiss();
  //         } else {
  //           this.common.presentToast(' Your closed match invitaion sending failed ');
  //         }
  //     }, err => {
  //         console.log('err:',err);
  //           console.log('headers:',err.Headers);
  //           this.popoverController.dismiss();
  
  //     });

  //   } else {

  //     this.common.showAlert('All fields are mandatory');

  //   }



  // } else if (this.hideImageSpace==true && e.type==="click") {

  //   // if (this.FileTransferResponse.length!=0) {
  //   //   console.log('FileTransferResponse:',this.FileTransferResponse);
  //   //   if (this.FileTransferResponse.status === true) {
  //   //     this.common.popoverController.dismiss();
  //   //     this.common.presentToast(' Your closed match send successfully ');
  //   //   } else {
  //   //     this.common.popoverController.dismiss();
  //   //     this.common.presentToast('Closed Match Send Failed!');
  //   //   }

  //   // } else {
  //   //   console.log('FileTransferResponse:',this.FileTransferResponse);
  //   //   this.common.popoverController.dismiss();
  //   //   this.common.showAlert('You must need to upload a media');
  //   // }

  //   //---------------------------------------------------------------------------------Add multi files
  //   console.log(this,this.myFiles);
  //   for( let i=0; i<this.myFiles.length; i++ ) 
  //   {
  //     this.uploadFile2(this.myFiles[i], 'image');
  //   }

  //   //--------------------------------------------------------------------------------------------------------------------
    
  // } else if (this.isImage) {
  //     // this.uploadFile2(this.cameraData, 'image'); 
  //     this.common.popoverController.dismiss();
  // } else if (this.isAudio) {
  //     // this.uploadFile2(this.documentData, 'file');
  //     this.common.popoverController.dismiss();

  // } else if (this.isVideo) {
  //   // this.uploadFile2(this.videoData, 'video');
  //   this.common.popoverController.dismiss();

  // }
  //  else if (this.isPickDocuments) {
  //   this.uploadFile2(this.audioData, 'audio');
  // }

  }

  }