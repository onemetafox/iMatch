import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StorageService } from './../services/storage.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-logout-popover',
  templateUrl: './logout-popover.page.html',
  styleUrls: ['./logout-popover.page.scss'],
})
export class LogoutPopoverPage implements OnInit {

  userDetails: any;

  constructor(
    public popoverController: PopoverController,
    public storageservice: StorageService,
    private common: CommonService,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.storageservice.storage.get('userDetails').then((val) => {
    this.userDetails = val;
  });

  }

  async gotoForgotPassword() {
    const popover = await this.popoverController.create({
      component: LogoutPopoverPage,
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      animated: false,
      translucent: true
    });
    return await popover.present();
  }

  toCancel(e) {
    this.popoverController.dismiss();
  }

  toOkay(e) {
    if  (e.type == 'click') {
      let params = {
        status : '1',
        userid : this.userDetails.userid,
      }
      this.common.postMethod('Online_Offline_status',params).then((res:any) => {
        if (res.status == true && this.common.platform.is("capacitor"||"cordova")) {
          this.storageservice.storage.remove('userDetails');
          this.popoverController.dismiss();
          this.common.fb.logout();
          this.common.google.logout();
          this.common.twit.logout();
            this.common.presentToast('You are successfully Logged out from the iMatch');
            this.common.router.navigate(['/login']);
          // navigator['app'].exitApp();
          // window.close();
        } else {
          this.storageservice.storage.remove('userDetails');
          this.popoverController.dismiss();
          this.common.router.navigate(['/landing']);
          this.common.presentToast('You are successfully Logged out from the iMatch');
        }
      }, (err)=> {
        this.common.presentToast('A Network Error Occured !!!');
        console.log('Error:',err);
      });
    } else {
      this.common.presentToast('Something went wrong !!!');
    }

  }

}
