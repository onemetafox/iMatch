import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.page.html',
  styleUrls: ['./fans.page.scss'],
})
export class FansPage implements OnInit {

  userDetails: any = [];
  myfans: any = [];

  constructor(
    public storageservice: StorageService,
    public common: CommonService,
  ) {

      this.common.route.queryParams.subscribe(resp => {
        this.userDetails = resp;
        console.log('userDetails:',this.userDetails);
    });

    // this.storageservice.storage.get('userDetails').then((val) => {
    //   console.log('Storage Value of userDetails:', val);
    //   this.userDetails = val;
    // });

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('Entered into Fans Page');
    this.common.showLoader();

    // this.storageservice.storage.get('userDetails').then((val) => {

    //   this.userDetails = val;

      // if (this.userDetails.userid != '') {

        let params = {
          id : this.userDetails.userid
        }

        console.log('params:',params);
        // this.common.presentLoading();
        this.common.postMethod('Listbesties',params).then((res:any) => {
          console.log('res:',res);

          this.myfans = res.details.fan;
          console.log('myfans:',this.myfans);
          this.common.hideLoader();

          if (this.myfans.length==0) {

            this.common.presentToast('You are having no `Fans` to show');

        } else {

            this.common.presentToast('You are having '+ res.details.fan.length + ' fan list members to show');
        
          }
        }, err => {
          this.ionViewWillEnter();
          console.log('Error:',err);

        });

      // } else {

      //   this.common.presentToast('Something Went Wrong !!!');

      // }

    // });

  }


  gotoSearchFans() {
    console.log('Fans Search Icon Clicked');
    this.common.navCtrl.navigateForward(['/search-fans'], {queryParams: this.userDetails});
  }

  gotoProfile() {
    this.common.navCtrl.navigateForward(['/tabs/tab7'] , {queryParams: this.userDetails});
  }

  toRemoveFan(event,fan) {
    console.log('Remove Fan Button clicked');
    console.log('fan:',fan);

        let params = {
          fanid : fan.tableid,    
        }
        console.log('params:',params);
        this.common.postMethod('RemoveFans',params).then((res:any) => {
          console.log('res:',res);

          if (res.status == true) {
            this.common.presentToast('✅ ' + fan.name + ' is successfully removed from your fans list ' );
            this.ionViewWillEnter();
          } else {
            // this.common.presentToast(' 🛑 Something went wrong ');
            this.ionViewWillEnter();
          }
        });
  }
}
