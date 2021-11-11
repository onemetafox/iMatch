import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-headliners',
  templateUrl: './headliners.page.html',
  styleUrls: ['./headliners.page.scss'],
})
export class HeadlinersPage implements OnInit {

  headliners = [{
    name: 'Ebond Gold'
  },
  {
    name: 'Sally Brint'
  },
  {
    name: 'Pritty Kavitha'
  },
  {
    name: 'Linne Craig'
  },
  {
    name: 'Layla'
  },
  ];

  windowHeight: any;
  userDetails: any = [];
  FirstHeadliner: any;
  SecondHeadliner: any;
  ThirdHeadliner: any;
  FourthHeadliner: any;
  FifthHeadliner: any;
  SixthHeadliner: any;

  constructor(
    public storageservice: StorageService,
    private common: CommonService) { 

      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

    }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  ionViewWillEnter(){
   let params = {
     userid : this.userDetails.userid,
   }
   this.common.postMethod('Headline',params).then((res:any) => {
    this.FirstHeadliner = res.details.first_headline;
    this.SecondHeadliner = res.details.second_headline;
    this.ThirdHeadliner = res.details.Third_headline;
    this.FourthHeadliner = res.details.Fourth_headline;
    this.FifthHeadliner = res.details.Fifth_headline;
    this.SixthHeadliner = res.details.Sixth_headline;
   });
  }

  toAddFirstUserasFan(event,FirstHeadliner) {
    if (FirstHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : FirstHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(FirstHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(FirstHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

  toAddSecondUserasFan(event,SecondHeadliner) {
    if (SecondHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : SecondHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(SecondHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(SecondHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

  toAddThirdUserasFan(event,ThirdHeadliner) {
    if (ThirdHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : ThirdHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(ThirdHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(ThirdHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

  toAddFourthUserasFan(event,FourthHeadliner) {
    if (FourthHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : FourthHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(FourthHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(FourthHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

  toAddFifthUserasFan(event,FifthHeadliner) {
    if (FifthHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : FifthHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(FifthHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(FifthHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

  toAddSixthUserasFan(event,SixthHeadliner) {
    if (SixthHeadliner.userid != '') {
      let params  = {
        from : this.userDetails.userid,
        to : SixthHeadliner.userid,
        category : 'fan'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(SixthHeadliner.name + ' is added to your fan list');
        } else if (res.message == "Already added ") {
          this.common.presentToast(SixthHeadliner.name + ' is already added to your fans list ...');
        } else {
          ///////////////
        }
      });
    } else {
      this.common.presentToast('Here is no headliner to add as fan');
    }
  }

}