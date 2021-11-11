import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-best-moments',
  templateUrl: './best-moments.page.html',
  styleUrls: ['./best-moments.page.scss'],
})

export class BestMomentsPage implements OnInit {

  userDetails: any = [];
  BestMoments: any = [];
  BestMomentsImages: any = [];

  constructor(

    public storageservice: StorageService,
    private common: CommonService

  ) { 

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });
    
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
  //  this.common.showLoader();
   this.storageservice.storage.get('userDetails').then((val) => {
    this.userDetails = val;

    let params = {
      userid : this.userDetails.userid
    }

    this.common.postMethod('GetBestMoment',params).then((res:any) => {
      // this.common.presentToast
      this.common.presentLoading();
      this.BestMoments = res.details.moments;
      this.BestMomentsImages = res.details.moments_files;

    });
    
  });

  }

  gotoAddBestMoments() {
    this.common.router.navigate(['/best-moments-add']);
  }

  gotoUserProfile() {
    this.common.router.navigate(['tabs/tab7'], {queryParams: this.userDetails});
  }

  toAddMedia(event,moments) {
    this.common.navCtrl.navigateForward(['/best-moments-add'], {queryParams: moments});
  }

  gotoBestMomentComments(e,moments) {
    this.common.navCtrl.navigateForward(['/best-moment-comment'], {queryParams: moments});
  }

  ToLikeBestMoment (e, moments) {

    let params = {
      userid : this.userDetails.userid,
      momentid : moments.momentid
    }
    this.common.postMethod('MomentLike',params).then((res:any) => {

      if (res.status == true) {
        this.ionViewWillEnter();
      }
    }, err => {
      console.log('Error:',err);
    });
  }

}
