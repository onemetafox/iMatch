import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-visitors-ongoing-match',
  templateUrl: './visitors-ongoing-match.page.html',
  styleUrls: ['./visitors-ongoing-match.page.scss'],
})
export class VisitorsOngoingMatchPage implements OnInit {

  userDetails: any;
  ongoingDetails: any = [];
  showPersonalScores: boolean = false;
  hideValue: boolean = true;

  RemainingTime: number;
  interval: any;
  HoursAgo: number;
  userArray: any;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  personalMatchSlideIndex: any;
  RemainingDuration : number;

  constructor(

    public storageservice: StorageService,
    private common: CommonService,    
    public popoverController: PopoverController,

  ) {

      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

      this.common.route.queryParams.subscribe(resp => {
        this.userArray = resp;
      });

   }

  ngOnInit() {
  }


  ionViewWillEnter(){

    this.common.presentLoading();
    this.ongoingDetails = [];
    let params = {
      userid : this.userArray.userid,
      visitorid : this.userArray.visitor_id
    }

    this.common.postMethod('OngoingMatch',params).then((res:any) => {
      if (res.status == true) {
        this.ongoingDetails = res.details;
      } 
    }, err => {
     console.log('Error:',err);
    });
 
   }


    Timer() {
      if (this.ongoingDetails!==undefined || this.ongoingDetails.length!=0) {

        for (let i=0; i<this.ongoingDetails.length; i++) {
          let StartTime = new Date(this.ongoingDetails[i]?.match_start).getTime();
          let EndTime = new Date(this.ongoingDetails[i]?.match_end).getTime();
          let LeftTime = new Date(this.ongoingDetails[i]?.remaining_time).getTime();
          let CurrentTime = new Date().getTime();
          var difference = LeftTime - CurrentTime;
          var daysDifference = Math.floor(difference/1000/60/60/24);
          difference -= daysDifference*1000*60*60*24
          var hoursDifference = Math.floor(difference/1000/60/60);
          difference -= hoursDifference*1000*60*60
      
          var minutesDifference = Math.floor(difference/1000/60);
          difference -= minutesDifference*1000*60
      
          var secondsDifference = Math.floor(difference/1000);
        }
      }
    }

    toLikeForReceiver(e, details, i) {
      // i = this.personalMatchSlideIndex;
      this.slides.slideTo(this.personalMatchSlideIndex);

      let params = {
        userid : this.userDetails.userid,
        matchid : details.match_id,
        contestentid : details.receiverid,
        status : 'like',
                }
      this.common.postMethod('Like',params).then((res:any) => {
        if (res.status == true) {
          // this.slides.slideTo(this.personalMatchSlideIndex);
          this.ionViewWillEnter();
        } else {
          this.common.presentToast('You had already liked this Ongoing Match');
        }
      }, err => {
        this.common.presentLoading();
        this.ionViewWillEnter();
        // this.common.presentToast(' A Network Error Occured... Please Try Once Again');
      });
     }

     toLikeForSender(e, details, i) {
      // i = this.personalMatchSlideIndex;
      this.slides.slideTo(this.personalMatchSlideIndex);

      let params = {
        userid : this.userDetails.userid,
        matchid : details.match_id,
        contestentid : details.senderid,
       status : 'like'
      }
      this.common.postMethod('Like',params).then((res:any) => {
        if (res.status == true) {
          // this.slides.slideTo(this.personalMatchSlideIndex);
         this.ionViewWillEnter();
       } else {
         this.common.presentToast('You had already liked this Ongoing Match');
       }
      }, err => {
       console.log('Error:',err);
       this.common.presentLoading();
       this.ionViewWillEnter();
      //  this.common.presentToast(' A Network Error Occured... Please Try Once Again');
      });
    }

    openComments(e,details) {
      // this.common.router.navigate(['/comments'], {queryParams : details});
      details.matchType = 'ONGOING';
      this.common.navCtrl.navigateForward(['comments'], {queryParams: details});
    }

    toshowPersonalScores(e,details) {
      this.showPersonalScores = !this.showPersonalScores;
    }

    toHidePopover () {
      this.showPersonalScores = false;
    }

    gotoImageIcon(icon) {

      if (this.userArray.userStatus==='VISITOR') {

        if (icon == 'image') {

          this.common.presentLoading();
          let params = {
            userid : '',
            visitorid : this.userArray.visitor_id
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
  
            if (res.details.image.length!=0) {
              this.ongoingDetails = res.details.image;
              this.common.presentToast('Ongoing Image Match is Successfully Displayed');
              // this.slides.slideTo(this.personalMatchSlideIndex);
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
            visitorid : this.userArray.visitor_id
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
            if (res.details.video.length!=0) {
              this.ongoingDetails = res.details.video;
              this.common.presentToast('Ongoing Video Match is Successfully Displayed');
              // this.slides.slideTo(this.personalMatchSlideIndex);
            } else  {
              this.common.presentToast('Currently You Are Having No Ongoing Video Matches');  
            }
          }, err=> {
            console.log('Error:',err);
          });
  
        } else if (icon == 'audio') {
            this.common.presentLoading();
  
          let params = {
            userid : '',
            visitorid : this.userArray.visitor_id
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
  
            if (res.details.audio.length!=0) {
              this.ongoingDetails = res.details.audio;
              this.common.presentToast('Ongoing Audio Match is Successfully Displayed');
              // this.slides.slideTo(this.personalMatchSlideIndex);
  
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
            visitorid : this.userArray.visitor_id
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
  
            if (res.details.text.length!=0) {
              this.ongoingDetails = res.details.text;
              this.common.presentToast('Ongoing Text Match is Successfully Displayed');
              // this.slides.slideTo(this.personalMatchSlideIndex);
  
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
            visitorid : this.userArray.visitor_id
          }
          this.common.postMethod('OngoingMatch',params).then((res:any) => {
  
            if (res.details.link.length!=0) {
              this.ongoingDetails = res.details.link;
              this.common.presentToast('Ongoing Link Match is Successfully Displayed');
              // this.slides.slideTo(this.personalMatchSlideIndex);
  
            } else  {
              this.common.presentToast('Currently You Are Having No Ongoing Link Matches');  
            }
          }, err=> {
            console.log('Error:',err);
          });
  
        }
      } else {

      if (icon == 'image') {

        this.common.presentLoading();
        let params = {
          userid : this.userArray.userid,
          visitorid : this.userArray.visitor_id
        }
        this.common.postMethod('OngoingMatch',params).then((res:any) => {

          if (res.details.image.length!=0) {
            this.ongoingDetails = res.details.image;
            this.common.presentToast('Ongoing Image Match is Successfully Displayed');
            // this.slides.slideTo(this.personalMatchSlideIndex);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Image Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });

      } else if (icon == 'video') {

        this.common.presentLoading();

        let params = {
          userid : this.userArray.userid,
          visitorid : this.userArray.visitor_id
        }
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          if (res.details.video.length!=0) {
            this.ongoingDetails = res.details.video;
            this.common.presentToast('Ongoing Video Match is Successfully Displayed');
            // this.slides.slideTo(this.personalMatchSlideIndex);

          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Video Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });

      } else if (icon == 'audio') {

        this.common.presentLoading();

        let params = {
          userid : this.userArray.userid,
          visitorid : this.userArray.visitor_id
        }
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          if (res.details.audio.length!=0) {
            this.ongoingDetails = res.details.audio;
            this.common.presentToast('Ongoing Audio Match is Successfully Displayed');
            // this.slides.slideTo(this.personalMatchSlideIndex);
          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Audio Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });

      } else if (icon == 'attachment') {

        this.common.presentLoading();

        let params = {
          userid : this.userArray.userid,
          visitorid : this.userArray.visitor_id
        }
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          if (res.details.text.length!=0) {
            this.ongoingDetails = res.details.text;
            this.common.presentToast('Ongoing Text Match is Successfully Displayed');
            // this.slides.slideTo(this.personalMatchSlideIndex);
          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Text Matches');
          }
        }, err=> {
          console.log('Error:',err);
        });

      } else if (icon == 'link') {

        this.common.presentLoading();

        let params = {
          userid : this.userArray.userid,
          visitorid : this.userArray.visitor_id
        }
        this.common.postMethod('OngoingMatch',params).then((res:any) => {
          if (res.details.link.length!=0) {
            this.ongoingDetails = res.details.link;
            this.common.presentToast('Ongoing Link Match is Successfully Displayed');
            // this.slides.slideTo(this.personalMatchSlideIndex);
          } else  {
            this.common.presentToast('Currently You Are Having No Ongoing Link Matches');
          }

          // this.ongoingDetails = res.details.link;
          // if (this.ongoingDetails===undefined) {
          //   this.common.presentToast('Currently You Are Having No Ongoing Matches');
          // } else {
          //   this.common.presentToast('Ongoing Link Match is Successfully Displayed');
          // }
          // console.log('OngoingMatch:',this.ongoingDetails);
          // this.common.hideLoader();
        }, err=> {
          // this.common.hideLoader();
          console.log('Error:',err);
        });

      }
    }
    }

    goDetail(id){
      this.common.router.navigate(['/ongoing-match-detail'], {queryParams: {matchid: id}});
    }
}
