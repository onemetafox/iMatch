import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { CommonService } from '../services/common.service';
import { NavParams, PopoverController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-visitors-view-activity',
  templateUrl: './visitors-view-activity.page.html',
  styleUrls: ['./visitors-view-activity.page.scss'],
})
export class VisitorsViewActivityPage implements OnInit {

  userArray: any = [];
  PersonalMatch: any = [];
  showPersonalMatch: boolean = false;
  showOpenMatch: boolean = false;
  OpenMatch: any = [];
  UserInfo: any = [];
  closedMatch: any = [];
  PersonalMatchLink: any = [];
  closedMatchLink: any = [];
  closedMatchText: any = [];
  PersonalMatchText: any = [];
  closedMatchAudio: any = [];
  PersonalMatchAudio: any = [];
  closedMatchVideo: any = [];
  PersonalMatchVideo: any = [];
  showImageIcons: boolean = false;
  PersonalMatchImage: any = [];
  userDetails: any;
  OpenMatchImage: any = [];
  OpenMatchAudio: any = [];
  OpenMatchVideo: any = [];
  OpenMatchLink: any = [];
  OpenMatchText: any = [];

  constructor(
    private common: CommonService,
    public popoverController: PopoverController,
    public storageservice: StorageService,
    public socialSharing: SocialSharing,
  ) {
    this.common.route.queryParams.subscribe((resp:any) => {
      this.userArray = resp;
    });

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.OpenMatch = [];
    let params = {
      userid : this.userArray.userid
    }
    this.common.postMethod('ActivityPage',params).then((res:any) => {
      this.UserInfo = res.details[0]
    });

    this.common.postMethod('PersonalMatch',params).then((res:any) => {
      this.PersonalMatch = res.details;
    });

    this.common.postMethod('OpenMatch',params).then((res:any) => {
      this.OpenMatch = res.details;
      if (this.OpenMatchAudio.length!==0) {
        for (let i=0; i < this.OpenMatchAudio.length; i++) {
          this.OpenMatch.push(this.OpenMatchAudio[i]);
        }
      } 

      if (this.OpenMatchImage.length!==0) {
        for (let i=0; i < this.OpenMatchImage.length; i++) {
          this.OpenMatch.push(this.OpenMatchImage[i]);
        }
      } 

      if (this.OpenMatchLink.length!==0) {
        for (let i=0; i < this.OpenMatchLink.length; i++) {
          this.OpenMatch.push(this.OpenMatchLink[i]);
        }
      } 

      if (this.OpenMatchText.length!==0) {
        for (let i=0; i < this.OpenMatchText.length; i++) {
          this.OpenMatch.push(this.OpenMatchText[i]);
        }
      } 

      if (this.OpenMatchVideo.length!==0) {
        for (let i=0; i < this.OpenMatchVideo.length; i++) {
          this.OpenMatch.push(this.OpenMatchVideo[i]);
        }
      } 
      
    });
  }

  toShowPersonalMatch() {
    this.showOpenMatch = false;
    this.showPersonalMatch = !this.showPersonalMatch;
  }

  toShowOpenMatch() {
    this.showPersonalMatch = true;
    this.showOpenMatch = !this.showOpenMatch;
  }

  gotoWhatWouldIDoIf(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/what-would-i-do-visitor'], {queryParams: this.UserInfo});
  }

  gotoVisitorsFans(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/visitors-fans-view'], {queryParams: this.UserInfo});
  }

  gotoVisitorsFansOf(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/visitors-fans-of-view'], {queryParams: this.UserInfo});
  }

  gotoVisitorsBesties(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/visitors-besties-view'], {queryParams: this.UserInfo});
  }

  gotoVisitorsSquadList(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/visitors-squad-list-view'], {queryParams: this.UserInfo});
  }

  gotoVisitorsBestMoments(event,UserInfo) {
    this.common.navCtrl.navigateForward(['/best-moment-visitors-view'], {queryParams: this.UserInfo});
  }

  goToVisitorsOpenMatch(e, open, index: number) {
    this.UserInfo.personalMatchSlideIndex = index;
    this.UserInfo.fileType = open.sender_image_type;
    this.common.navCtrl.navigateForward(['visitors-open-match'], {queryParams: this.UserInfo});
  }

  gotoOngoingContest(e,UserInfo) {
    this.UserInfo.userStatus = "VISITOR";
    this.UserInfo.visitor_id  = this.userDetails.userid;
    this.common.navCtrl.navigateForward(['visitors-ongoing-match'], {queryParams: this.UserInfo});
  }

  goToPersonalMatch(e, match, index: number, cat) {
    this.UserInfo.userType = 'visitor';
    this.UserInfo.personalMatchSlideIndex = index;
    this.UserInfo.fileType = match.compare_data[0].image_type;
    this.UserInfo.category = cat;
    this.common.navCtrl.navigateForward(['/personal-match'], {queryParams: this.UserInfo});
  }

  toShowImageIcons() {
    this.showImageIcons = true;
  }

  toHideImageIcons() {
    this.showImageIcons = false;
  }

  gotoImageIcon(icon) {
    if (icon == 'image') {
      if (this.PersonalMatch != null && this.PersonalMatch.length!==0) {
        this.common.presentLoading();
        this.ionViewWillEnter();
        this.PersonalMatch = this.PersonalMatchImage;
        this.common.presentToast('Image Match is Successfully Displayed');

      } else if(this.PersonalMatch === null){
        // this.ionViewWillEnter();
        // this.PersonalMatch = this.PersonalMatchImage;
        this.common.presentToast('You are not having any image match');

      }

    } else if (icon == 'video') {

      if (this.PersonalMatch != null && this.PersonalMatch.length!==0) {

        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchVideo;
        this.common.presentToast('Video Match is Successfully Displayed');

      } else if (this.PersonalMatch === null) {
        // this.PersonalMatch = this.PersonalMatchVideo;

        this.common.presentToast('You are not having any video match');

      }

    } else if (icon == 'audio') {

      if (this.PersonalMatch != null && this.PersonalMatch.length!==0) {

        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchAudio;
        this.common.presentToast('Audio Match is Successfully Displayed');

      } else if (this.PersonalMatch === null){
        // this.PersonalMatch = this.PersonalMatchAudio;

        this.common.presentToast('You are not having any audio match');

      }

    } else if (icon == 'attachment') {

      if (this.PersonalMatch != null && this.PersonalMatch.length!==0) {

        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchText;
        this.common.presentToast('Text Match is Successfully Displayed');

      } else if (this.PersonalMatch === null){
        // this.PersonalMatch = this.PersonalMatchText;

        this.common.presentToast('You are not having any text match');

      }

    } else if (icon == 'link') {

      if (this.PersonalMatch != null && this.PersonalMatch.length!==0) {

        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchLink;

        this.common.presentToast('Link Match is Successfully Displayed');

      } else if (this.PersonalMatch===null) {
        // this.PersonalMatch = this.PersonalMatchLink;
        this.common.presentToast('You are not having any link match');

      }

    }
  }

  toShareProfile() {

    const msg = 'Share iMatch with your friends:';
    const userName = this.UserInfo.username
    const img = 'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Youtube-icon.png'
    const content = 'Hai friend ... I am '

    this.socialSharing.share(img,content,userName,msg).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  async Popover(ev:any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      componentProps: {key:this.userArray},
      event: ev,
      mode: "ios",
      translucent: true
    });
    return await popover.present();
  }
}

@Component({
  template: `
        <ion-list mode="ios">
            <ion-item (click)="onDismiss('message')">Send Message</ion-item>
            <ion-item (click)="onDismiss('favourite')">Make as Favourite Person</ion-item>
            <ion-item (click)="onDismiss('squad')">Invite to Squad</ion-item>
            <ion-item (click)="onDismiss('bestie')">Add as Bestie</ion-item>
            <ion-item (click)="onDismiss('match')">Call For A Match</ion-item>
            <ion-item (click)="onDismiss('service')">Request for Service</ion-item>
        </ion-list>
    `
})

export class PopoverComponent {

  UserInfo: any = [];
  userDetails: any = [];

  constructor(
    public popoverController: PopoverController,
    public storageservice: StorageService,
    private common: CommonService,
    public navParams: NavParams
    ) {
      this.UserInfo = this.navParams.get('key');
    }

    ionViewWillEnter(){
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });
      }

    async onDismiss(val) {
      try {
        this.popoverController.dismiss(val);

        if(val=='message'){
          this.toSendMessage();
        } else if(val=='favourite') {
          this.toAddAsFavourite();
        } else if(val=='squad') {
          this.toAddAsSquad();
        } else if(val=='bestie') {
          this.toAddAsBestie();
        } else if (val=='match') {
          this.common.presentLoading();
          this.common.navCtrl.navigateForward(['before-match-invitation'], {queryParams: this.UserInfo});
        } else if (val=='service') {
          this.common.presentToast('This Functionality is still in development');
        }
        
      } catch (e) {
        console.log(e);
          //click more than one time popover throws error, so ignore...
      }
      
    }

    toSendMessage() {
      let params = {
        userid_from : this.userDetails.userid,
        userid_to : this.UserInfo.userid,
        message : 'Hai !'
      }
      this.common.postMethod('Chat',params).then((res:any) => {
        if (res.status == true) {

          this.common.presentLoading();
          this.common.presentToast(' Message Send Successful ');
          this.common.router.navigate(['/chat']);

        } else {

          this.common.presentLoading();
          this.common.presentToast(' Message Sending Failed ... Try After Sometime ! ');

        }

      }, (err) => {

        console.log('Error:',err);
        this.common.presentToast(' Message Sending Failed ... Try After Sometime ! ');

      });
    }

    toAddAsFavourite(){
      let params = {
        req_from : this.userDetails.userid,
        req_to : this.UserInfo.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if (res.status == true) {

          this.common.presentLoading();
          this.common.presentToast('This User is Successfully Added To Your Fan List');
          this.common.router.navigate(['/fans'], {queryParams: this.userDetails});

        } else if (res.message= 'Already added' ){

          this.common.presentToast('This User is Already added to your Fan List');

        }
      }, (err) => {
        console.log('Error:',err);
        this.common.presentToast('Adding this user to your fan list failed');
      });

    }

    toAddAsBestie() {
      let params = {
        from : this.userDetails.userid,
        to : this.UserInfo.userid,
        category : 'bestie'
      }
      this.common.postMethod('add_bestie',params).then((res:any) => {
        if (res.status == true) {
          this.common.presentLoading();
          this.common.presentToast('This User is Successfully Added To Your Bestie List');
          this.common.router.navigate(['/besties-before']);
        } else if (res.message='Already added') {
          this.common.presentToast('This User is Already added to your Bestie List');
        }

      }, (err) => {
        console.log('Error:',err);
        this.common.presentToast('Adding this user to your Bestie list failed');
        });

    }

    toAddAsSquad() {
      let params = {
        from : this.userDetails.userid,
        to : this.UserInfo.userid,
        category : 'squad'
      }
      this.common.postMethod('add_bestie',params).then((res:any) => {
        if (res.status == true) {
          this.common.presentLoading();
          this.common.presentToast('This User is Successfully Added To Your Squad List');
          this.common.router.navigate(['/bestie']);
        } else if (res.message='Already added') {
          this.common.presentToast('This User is Already added to your Squad List');
        }

      }, (err) => {
        this.common.presentToast('Adding this user to your Squad list failed');
        console.log('Error:',err);
      });
    }


}
