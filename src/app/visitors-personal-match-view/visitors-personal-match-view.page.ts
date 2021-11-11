import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-visitors-personal-match-view',
  templateUrl: './visitors-personal-match-view.page.html',
  styleUrls: ['./visitors-personal-match-view.page.scss'],
})
export class VisitorsPersonalMatchViewPage implements OnInit {

  userDetails: any = [];
  PersonalMatch: any = [];
  UserInfo: any = [];

  constructor(
    public storageservice: StorageService,
    public popoverController: PopoverController,
    private common: CommonService, 
  ) { 

    this.common.route.queryParams.subscribe(resp => {
      this.UserInfo = resp;
  });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){

   let params = {
     userid : this.UserInfo.userid
   }

   this.common.postMethod('PersonalMatch',params).then((res:any) => {
     this.PersonalMatch = res.details.image;
    }, (err) => {
      console.log('Error:',err);
    });
  }

  gotoPersonalMatchComments(e,m) {

  }

  toShowMatchHistory(e,m) {

  }

  toLikePersonalMatch(e,m) {

  }

  toDisLikePersonalMatch(e,m) {

  }

  toCommentPersonalMatch(e,m) {

  }

  toViewReceiverMatchImage(e,m) {

  }

  toViewSenderMatchImage(e,m) {

  }

}
