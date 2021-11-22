import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  showMessage = false;
  userDetails : any = [];
  interval: any;
  NotificationDetails: any = [];

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
  ) { 

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.userDetails = resp;
      this.GetNotificationDetails();
  });

    // this.interval = setInterval(() => {
    // this.GetNotificationDetails();
    // },3000);

  }

  ionViewWillEnter(){
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
        if (this.userDetails.userid!=null) {
          this.GetNotificationDetails();
        } 
    });
  }

  GetNotificationDetails () {
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
      const userid = this.userDetails.userid;
      const Api = 'getNotification/';
      this.common.http.get(this.common.ajx.BaseUrl+Api+userid).subscribe((res:any) => {
          this.NotificationDetails = res.details;
          this.userDetails = res.details.user;
          this.userDetails.userid = this.userDetails.id;
      }, err => {
        console.log('err:',err);
      });
    });
  }

  ngOnInit() {
  }

  openListFans() {
    let params = {
      receiver_id : this.userDetails.id,
      notification_status : 'Add_fan',
      read_status: '1'
    }
    this.common.postMethod('setNotificationRead',params).then((res:any) => {
      if(!res.status) {
        this.common.presentToast(res.message);
      }
    });
    this.common.navCtrl.navigateForward(['fans-of'], {queryParams: this.userDetails});
  }

  openListSquad() {
    this.common.navCtrl.navigateForward(['squad-list-invitation'], {queryParams: this.userDetails});
  }

  openListBesties() {
    this.common.navCtrl.navigateForward(['add-reject-besties'], {queryParams: this.userDetails});
  }

  openFavourite() {
  }

  openNewMessages() {
    this.common.navCtrl.navigateForward(['chat'], {queryParams: this.userDetails});
  }

  openGroupInvitation() {
  }

  openTagged() {
  }

  openTop100() {
    this.common.router.navigate(['/top-hundred']);
  }

  openHeadliners() {
    this.common.router.navigate(['/headliners']);
  }

  openTrending() {
    this.common.router.navigate(['/trending']);
  }

  openGoodies() {
    this.common.router.navigate(['/goodies']);
  }

  dismissMessage(){
    this.showMessage = false;
  }

  openMessage() {
    this.showMessage = !this.showMessage;
  }

  OpenMatchInvitation() {
    this.common.navCtrl.navigateForward(['invitation'] , {queryParams: this.userDetails});
  }

  openOpenMatches() {
    this.common.router.navigate(['/pending-open-matches']);
  }

  togoBack() {
    this.common.router.navigate(['tabs/tab6']);
  }

}
