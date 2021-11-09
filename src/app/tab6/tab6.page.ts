import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { MediaCapture} from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  userDetails: any = [];
  userArray: any = [];
  PersonalMatch: any = [];
  closedMatch: any = [];
  showPersonalMatch: boolean = false;
  showOpenMatch: boolean = false;
  OpenMatch: any;
  showImageIcons: boolean = false;
  closedMatchAudio: any;
  closedMatchLink: any;
  closedMatchText: any;
  categorize: any;
  closedMatchVideo: any;
  PersonalMatchAudio: any;
  PersonalMatchVideo: any;
  PersonalMatchLink: any;
  PersonalMatchText: any;
  isDisableOtherCategory: boolean = true;
  PersonalMatchImage: any;
  OpenMatchImage: any = [];
  OpenMatchAudio: any = [];
  OpenMatchVideo: any = [];
  OpenMatchLink: any = [];
  OpenMatchText: any = [];
  closedMatchImage: any = [];

  constructor(private common: CommonService, public popoverController: PopoverController, public storageservice: StorageService, private platform: Platform) 
  {
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.userDetails = resp;
      this.ionViewWillEnter();
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });

    const Video_Ext = ['mp4','webm','mpg','mp2','mpeg','mpe','mpv','ogg','m4p','m4v','avi','wmv','mov','qt','flv','swf','avchd'];
  }

  toOpenPersonalMatch() {
    this.showOpenMatch = false;
    this.showPersonalMatch = !this.showPersonalMatch;
  }

  toShowOpenMatch() {
    this.showPersonalMatch = true;
    this.showOpenMatch = !this.showOpenMatch;
  }

  ionViewWillEnter(){
    this.OpenMatch = [];
    this.closedMatch = [];
    this.storageservice.storage.get('userDetails').then((val) => {
      if (val!=null) {
        this.userDetails = val;
        const userid = this.userDetails.userid;
        const name = 'get_profile_pic/';
        this.common.http.get(this.common.ajx.BaseUrl+name+userid).subscribe((res:any) => {
          this.userArray = res.details[0];
          this.userDetails = this.userArray;
          this.storageservice.setStorage('userDetails', res.details[0]);
        });
      }
      if (this.userDetails.userid != '') {
        let params = {
          userid : this.userDetails.userid
        }
        this.common.postMethod('PersonalMatch',params).then((res:any) => {
          if(res)
            this.PersonalMatch = res.details;
        });
        this.common.postMethod('ClosedMatch',params).then((res:any) => {
          if(res)
            this.closedMatch = res.details;
        });
        this.common.postMethod('OpenMatch',params).then((res:any) => {
          if(res)
            this.closedMatch = res.details;
        });
      } else {
        console.log('UserId is Empty');
      }
      });
      this.isDisableOtherCategory = true;
    }

    doRefresh(event) {
      this.ionViewWillEnter();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

  ngOnInit() {
  }

  OnOffButton(name) {
    if (name=='Ongoing') {
      this.common.presentToast('Your `Ongoing Matches` Box view is disabled from Visitors');
    } else if (name=='What-would') {
      this.common.presentToast('Your `What Would I Do` Box view is disabled from Visitors');
    } else if (name=='My-Faves') {
      this.common.presentToast('Your `My Faves/Luxury Items & Where To Get` Box view is disabled from Visitors');
    } else if (name=='Best-Moments') {
      this.common.presentToast('Your `Best Moments` Box view is disabled from Visitors');
    } else if (name=='Besties-Action') {
      this.common.presentToast('Your `Besties Action` Box view is disabled from Visitors');
    } else if (name='Last') {
      this.common.presentToast('Your `Besties Action` Box view is disabled from Visitors');
    }
  }

  gotoProfile() {
    this.common.router.navigate(['/tabs/tab7']);
  }

  gotoOnGoingMatch() {
    this.userArray.userStatus;
    this.userArray.visitor_id = this.userDetails.userid;
    this.common.navCtrl.navigateForward(['visitors-ongoing-match'], {queryParams: this.userArray});
  }
  goToPage(page: string) {
    const p = 'tabs/tab6/' + page;
    this.common.router.navigate([p]);
  }

  toShowImageIcons() {
    this.showImageIcons = true;
  }

  toHideImageIcons() {
    this.showImageIcons = false;
  }

  gotoImageIcon(icon) {
    console.log('Icon:',icon);
    this.isDisableOtherCategory = false;
    if (icon == 'image') {

      if (this.PersonalMatch.length!==0) {

        this.common.showLoader();
        this.common.presentLoading();
        // this.ionViewWillEnter();
        this.PersonalMatch = this.PersonalMatchImage;
        console.log('PersonalMatchImage',this.PersonalMatch);
        this.common.presentToast('Image Match is Successfully Displayed');
        this.common.hideLoader();

      } else {

        this.common.showLoader();
        // this.closedMatch = this.closedMatch;
        this.common.presentToast('You are not having any image match');
        this.common.hideLoader();

      }

    } else if (icon == 'video') {

      if (this.PersonalMatch.length!==0) {

        this.common.showLoader();
        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchVideo;
        console.log('PersonalMatchVideo',this.PersonalMatch);

        // this.closedMatch = this.closedMatchVideo;
        this.common.presentToast('Video Match is Successfully Displayed');
        this.common.hideLoader();

      } else {

        this.common.showLoader();
        // this.closedMatch = this.closedMatch;
        this.common.presentToast('You are not having any video match');
        this.common.hideLoader();

      }

      // this.common.presentToast('You are not having any Video Match');
    } else if (icon == 'audio') {

      if (this.PersonalMatch.length!==0) {

        // this.common.showLoader();
        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchAudio;
        console.log('PersonalMatchAudio',this.PersonalMatch);

        // this.closedMatch = this.closedMatchAudio;
        this.common.presentToast('Audio Match is Successfully Displayed');
        // this.common.hideLoader();

      } else {

        this.common.showLoader();
        // this.closedMatch = this.closedMatch;
        this.common.presentToast('You are not having any audio match');
        this.common.hideLoader();

      }

      // this.common.presentToast('You are not having any Audio Match');
    } else if (icon == 'attachment') {

      if (this.PersonalMatch.length!==0) {

        // this.common.showLoader();
        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchText;
        console.log('PersonalMatchText',this.PersonalMatch);

        // this.closedMatch = this.closedMatchText;
        this.common.presentToast('Text Match is Successfully Displayed');
        // this.common.hideLoader();

      } else {

        // this.common.showLoader();
        // this.closedMatch = this.closedMatch;
        this.common.presentToast('You are not having any text match');
        // this.common.hideLoader();

      }

      // this.common.presentToast('You are not having any Attachment Match');

    } else if (icon == 'link') {

      if (this.PersonalMatch.length!==0) {

        // this.common.showLoader();
        this.common.presentLoading();
        this.PersonalMatch = this.PersonalMatchLink;
        console.log('PersonalMatchLink',this.PersonalMatch);

        // this.closedMatch = this.closedMatchLink;
        this.common.presentToast('Link Match is Successfully Displayed');
        // this.common.hideLoader();

      } else {

        // this.common.showLoader();
        // this.closedMatch = this.closedMatch;
        this.common.presentToast('You are not having any link match');
        // this.common.hideLoader();

      }

      // this.common.presentToast('You are not having any Link Match');
    }
  }

  goToBestiesList() {
    this.common.navCtrl.navigateForward(['/besties-before'], {queryParams: this.userDetails});
  }

  gotoCallForAMatch() {
    this.common.router.navigate(['/tabs/tab3']);
  }

  goToFansPage() {
    this.userDetails.userType = 'USER';
    this.common.navCtrl.navigateForward(['fans'] , {queryParams: this.userDetails});
  }

  goToFansOfPage() {
    this.common.navCtrl.navigateForward(['fans-of'] , {queryParams: this.userDetails});
  }

  goToSquadListPage() {
    this.common.navCtrl.navigateForward(['squad-list'] , {queryParams: this.userDetails});
  }

  goToOpenMatch(event, open, index: number, cat) {
    console.log('Entered into Open Match page');
    console.log('open:',open);
    this.userDetails.userType = 'owner';
    this.userDetails.personalMatchSlideIndex = index;
    this.userDetails.fileType = open.sender_image_type;
    this.userDetails.category = cat;
    this.common.navCtrl.navigateForward(['open-match'], {queryParams: this.userDetails});
  }

  goToPersonalMatch(e, match, index: number, cat) {
    this.userDetails.userType = 'owner';
    this.userDetails.personalMatchSlideIndex = index;
    this.userDetails.fileType = match.compare_data[0].image_type;
    this.userDetails.category = cat;
    this.common.navCtrl.navigateForward(['personal-match'], {queryParams: this.userDetails});
  }

  goToPersonalMatch1(e, match, index: number, cat) {
    this.userDetails.userType = 'owner';
    this.userDetails.personalMatchSlideIndex = index;
    this.userDetails.fileType = 'image'
    this.userDetails.category = cat;
    this.common.navCtrl.navigateForward(['personal-match'], {queryParams: this.userDetails});
  }

  gotoSearchUsers() {
    this.common.navCtrl.navigateForward(['/search-users'], {queryParams: this.userDetails});
  }

  gotoBestiesAction() {
    this.common.router.navigate(['/besties-actions']);
  }

  gotoWhatWouldIDoIf() {
    this.common.router.navigate(['/what-would-i-do']);
  }

  gotoBestMoments() {
    this.common.router.navigate(['/best-moments']);
  }

  scrollTo(elementId: string) {

    // const x = document.getElementById(elementId).offsetTop;
    // this.content.scrollToPoint(0, 220);

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      mode: "ios",
      translucent: true
    });
    return await popover.present();
  }

  gotoPersonalMatchUpload() {
    this.common.navCtrl.navigateForward(['personal-match-media-upload'], {queryParams: this.userDetails});
  }

  gotoSettings() {
    this.common.navCtrl.navigateForward(['settings']);
  }
}

@Component({
  template: `
        <ion-list mode="ios">
            <ion-item (click)="onDismiss('editprofile')">Edit Profile</ion-item>
            <ion-item (click)="onDismiss('addbesties')">Add Besties</ion-item>
            <ion-item (click)="onDismiss('addsquadlist')">Add to squad list</ion-item>
            <ion-item (click)="onDismiss('fans-of')">Booking</ion-item>
        </ion-list>
    `
})
export class PopoverComponent {
  userDetails: any;
  constructor(
    public popoverController: PopoverController,
    public storageservice: StorageService,
    private common: CommonService,
    ) {
      this.storageservice.storage.get('userDetails').then((val) => {
        console.log('Storage Value of userDetails:', val);
        this.userDetails = val;
      });
    }

  async onDismiss(val) {
    try {
    
      this.popoverController.dismiss(val);
      if(val=='editprofile'){
            this.common.router.navigate(['/profile'], {queryParams: this.userDetails});
      }else if(val=='addbesties'){
            this.common.router.navigate(['/besties'], {queryParams: this.userDetails}); 
      }else if(val=='addsquadlist'){
            this.common.router.navigate(['/squad-list'], {queryParams: this.userDetails});
      }else if(val=='fans-of'){
            // this.common.router.navigate(['/fans-of']);
      }
      
    } catch (e) {
      console.log(e);
        //click more than one time popover throws error, so ignore...
    }

  }
}
