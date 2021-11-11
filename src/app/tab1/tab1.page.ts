import { StorageService } from './../services/storage.service';
import { CommonService } from './../services/common.service';
// import { PopoverController } from '@ionic/angular';
import { Component} from '@angular/core';
// import { NavParams} from '@ionic/angular';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userDetails: any = [];
  // opponentDetails: any;
  // Users: any = [];
  // user: string;

  constructor(
    public common: CommonService,
    // public socialSharing: SocialSharing,
    // public popoverController: PopoverController,
    public storageservice: StorageService,
  ) 
    { 

      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

    //   this.common.route.queryParams.subscribe(resp => {
    //     this.opponentDetails = resp;
    //     console.log('opponentDetails:',this.opponentDetails);
    // });

    // this.Users = null;
    
    }

  ngOnInit() {
  }

  ionViewWillEnter(){}


  gotoSearchUser() {
    this.common.router.navigate(['/search-match-users']);
  }

  togoBack() {
    this.common.router.navigate(['/tabs/tab6']);
  }
  
}
