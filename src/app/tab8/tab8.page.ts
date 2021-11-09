import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  slideOpts = {
    effect: 'flip',
    autoplay: {
      delay: 3000
    }
  };

  @ViewChild('mySlider')  slides: IonSlides;
  buttonName = "NEXT"
  selectedSlide: any;

  userDetails: any = [];
  ongoingDetails: any = [];
  allUsers: any = [];
  showIcons: boolean = false; 
  SlideFirst: any;
  SlideSecond: any;

  SlideThird: any;
  SlideFourth: any;
  SlideFifth: any;
  SlideSixth: any;
  SlideSeventh: any;
  SlideEighth: any;
  SlideNinth: any;
  SlideTenth: any;
  ImageIcons: boolean;
  RecommendedForYou: any;
  HashTagOptions: { name: any; image: any; }[];
  ongoingDetailsAudio: any = [];
  ongoingDetailsImage: any = [];
  ongoingDetailsLink: any = [];
  ongoingDetailsText: any = [];
  ongoingDetailsVideo: any = [];
  // userArray: any;

  constructor(
    public storageservice: StorageService,
    private common: CommonService
    ) {

      this.storageservice.storage.get('userDetails').then((val) => {
        console.log('Storage Value of userDetails:', val);
        this.userDetails = val;
      });        
     }

     ionSlideChanges(slides) {
      this.selectedSlide = slides;
      console.log('slides:',slides);
      console.log('selectedSlide:',this.selectedSlide);

      // slides.getActiveIndex().then(
      //   (slidesIndex) => {
      //     if (slidesIndex == 2) {
      //       this.buttonName = "GET STARTED";
      //     } else {
      //       this.buttonName = "NEXT";
      //     }
      //   });
     }

     nextSlide() {
      console.log('Next Button Clicked');
      // this.slides.slideNext();
     }

     ionViewWillEnter() {
       console.log('Entered Into Home Page');
       this.ongoingDetails = [];
      // this.storageservice.storage.get('userDetails').then((val) => {
      //   this.userDetails = val;

        // if (this.userDetails.userid != '') {
          let params = {
            userid : ''
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
            console.log('res:',res);

            if (res.status == true) {
              this.ongoingDetails = res.details;
            }
          });
          this.common.postMethod('Recommended_for_you',params).then((res:any) => {
            console.log('res:',res);
            this.RecommendedForYou = res.details;
          });
        // }
      // });

      this.slideOpts = {
        effect: 'flip',
        autoplay: {
          delay: 2000
        }
      };

     }

    ngOnInit() {

      this.HashTagOptions = [
        {
          name : 'Funny',
          image : '../../assets/icon/funny.png'
        },
        {
          name : 'Art & Entertainment',
          image : '../../assets/icon/arts.png'
        },
        {
          name : 'Beauty & Fashion',
          image : '../../assets/icon/beauty.png'
        },
        {
          name : 'Health & Food',
          image : '../../assets/icon/health.png'
        },
        {
          name : 'Education',
          image : '../../assets/icon/schol.png'
        },
        {
          name : 'Events and others',
          image : '../../assets/icon/events.png'
        },
        {
          name : 'Home and decors',
          image : '../../assets/icon/decor.png'
        },
        {
          name : 'Luxuries',
          image : '../../assets/icon/dimond.png'
        },
        {
          name : 'Business',
          image : '../../assets/icon/business.png'
        },
        {
          name : 'Charity',
          image : '../../assets/icon/charity.png'
        },
        {
          name : 'iMatch top 100',
          image : '../../assets/icon/top100.png'
        },
        {
          name : 'News',
          image : '../../assets/icon/news.png'
        },
        {
          name : 'Blog',
          image : '../../assets/icon/blog.png'
        },
      ]

      console.log('HashTagOptions:',this.HashTagOptions);

    }

    goDetail(id){
      this.common.router.navigate(['/ongoing-match-detail'], {queryParams: {matchid: id}});
    }

    goToPage(page: string) {
      const p = 'tabs/tab8/' + page;
      this.common.router.navigate([p]);
    }

    goToOngoingContestPage(e, details, i: number, userType) {
      // this.common.router.navigate(['/tabs/tab2']);
      // this.userArray = this.userDetails;
      this.userDetails.userStatus = userType;
      this.userDetails.visitor_id = this.userDetails.userid;
      this.userDetails.personalMatchSlideIndex = i;
      this.common.navCtrl.navigateForward(['visitors-ongoing-match'] , {queryParams: this.userDetails});
    }

    toShowImageIcons() {
      console.log('Show Images Icons Button Clicked');
      this.ImageIcons = true;
    }

    toHideImageIcons() {
      console.log('Show Images Icons Button Clicked');
      this.ImageIcons = false;
    }

    gotoSearchUsers() {
      this.common.navCtrl.navigateForward(['/search-users'], {queryParams: this.userDetails});
    }

    toOpenIconsPanel() {
      console.log('To Open Icons Panel Clicked');
      this.showIcons = !this.showIcons;
      console.log('showIcons:',this.showIcons);
    }

    gotoProfile() {
      this.common.router.navigate(['/tabs/tab7']);
    }

    gotoImageIcon(icon) {
      console.log('icon:',icon);
      if (icon == 'image') {

        this.common.presentLoading();
        let params = {
          userid : '',
          visitorid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          console.log('res:',res);

          if (res.details.image.length!=0) {
            this.ongoingDetails = res.details.image;
            this.common.presentToast('Ongoing Image Match is Successfully Displayed');
            console.log('OngoingMatch:',this.ongoingDetails);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Image Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });

      } else if (icon == 'video') {

        this.common.presentLoading();
        let params = {
          userid : '',
          visitorid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          console.log('res:',res);
          if (res.details.video.length!=0) {
            this.ongoingDetails = res.details.video;
            this.common.presentToast('Ongoing Video Match is Successfully Displayed');
            console.log('OngoingMatch:',this.ongoingDetails);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Video Matches');
          }
          this.common.hideLoader();
        }, err=> {
          this.common.hideLoader();
          console.log('Error:',err);
        });
      } else if (icon == 'audio') {

        // this.common.showLoader();
        this.common.presentLoading();
        let params = {
          userid : '',
          visitorid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          console.log('res:',res);

          if (res.details.audio.length!=0) {
            this.ongoingDetails = res.details.audio;
            this.common.presentToast('Ongoing Audio Match is Successfully Displayed');
            console.log('OngoingMatch:',this.ongoingDetails);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Audio Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });
      } else if (icon == 'attachment') {

        this.common.presentLoading();
        let params = {
          userid : '',
          visitorid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          console.log('res:',res);

          if (res.details.text.length!=0) {
            this.ongoingDetails = res.details.text;
            this.common.presentToast('Ongoing Text Match is Successfully Displayed');
            console.log('OngoingMatch:',this.ongoingDetails);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Text Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });
      } else if (icon == 'link') {

        this.common.presentLoading();
        let params = {
          userid : '',
          visitorid : this.userDetails.userid
        }
        console.log('params:',params);
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          console.log('res:',res);

          if (res.details.link.length!=0) {
            this.ongoingDetails = res.details.link;
            this.common.presentToast('Ongoing Link Match is Successfully Displayed');
            console.log('OngoingMatch:',this.ongoingDetails);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Link Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });
      }
    }

    swipeNext() {
      console.log('Swipe Next Icon Clicked');
      // this.slides.slideNext(speed?: 400 | , runCallbacks?: false | undefined) => Promise<void>;
    }

    gotoFunny() {
      console.log('Funny Button Clicked');
      this.common.router.navigate(['/funny']);
    }

    gotoArtAndEntertainment() {
      console.log('Art And Entertainment Button clicked');
      this.common.router.navigate(['/art-entertainment']);
    }

    gotoBeautyAndFashion() {
      console.log('Beauty And Fashion Button Clicked');
      this.common.router.navigate(['/beauty-fashion']);
    }

    gotoiMatchTop100() {
      console.log('iMatch Top 100 Button Clicked');
      this.common.router.navigate(['/top-hundred']);
    }

    gotoNews() {
      console.log('News Button Clicked');
      // this.common.router.navigate(['/']);
    }

    gotoBlog() {
      console.log('Blog Button Clicked');
      this.common.router.navigate(['/blog']);
    }

    gotoUserProfile(event,user) {
      console.log('Clicked On A user');
      console.log('user:',user);
      this.common.navCtrl.navigateForward(['/visitors-view-activity'] ,{queryParams: user} );
    }

}
