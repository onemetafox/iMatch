import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ongoing-match-detail',
  templateUrl: './ongoing-match-detail.page.html',
  styleUrls: ['./ongoing-match-detail.page.scss'],
})
export class OnGoingMatchDetailPage implements OnInit {
  ongoingData: any = [];
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
    this.ionViewWillEnter();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.common.presentLoading();
    this.common.route.queryParams.subscribe((resp:any) => {
      this.common.http.get(this.common.ajx.BaseUrl+'get_ongoing_match/'+resp.matchid).subscribe((res:any) => {
        this.ongoingData = res['data'];
        this.storageservice.storage.get('userDetails').then((val) => {
          this.userDetail = val;
        });
      }, err => {
        console.log('err:',err);
      });
    });

    

    // this.storageservice.storage.get('userDetails').then((val) => {
      // this.userDetails = val ;

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
        console.log('Error:',err);
        // this.common.presentToast('A Network Issue Occured !... Please Wait While We Fetch Again ...');
        this.common.hideLoader();
      });
    } else if (this.userDetails.category == "closed") {

    }

  }
}