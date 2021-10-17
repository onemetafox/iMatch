import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'pending-open-matches',
  templateUrl: 'pending-open-matches.page.html',
  styleUrls: ['pending-open-matches.page.scss']
})
export class PendingOpenMatchesPage implements OnInit {

  userDetails: any = [];
  pendingMatches: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService,    
    public popoverController: PopoverController,
    public socialSharing: SocialSharing,
  ) {
      this.storageservice.storage.get('userDetails').then((val) => {
        console.log('Storage Value of userDetails:', val);
        this.userDetails = val;
        const Api = 'get_pending_match/';
        this.common.http.get(this.common.ajx.BaseUrl+Api+this.userDetails.userid).subscribe((res:any) => {
          this.pendingMatches = res.details;
          console.log(this.pendingMatches);
        }, err => {
          console.log('err:',err);
        });
      });
    }

    ngOnInit() {

    }
  
    ionViewWillEnter() {
      
      console.log('in ionViewWillEnter');
  
      // this.storageservice.storage.get('userDetails').then((val) => {
      //   console.log('Storage Value of userDetails:', val);
      //   this.userDetails = val;
      //   if (this.userDetails.userid!=undefined) {
  
      //     this.listAllUsers();
      //     this.toGetUsersCategory();
  
      //   } else {
      //     console.log('*** UserId undefined ***');
      //   }
      // });
  
    }

    togoBack() {
      this.common.router.navigate(['tabs/tab5']);
    }

    startMatch(id) {
      this.common.showLoader();
      this.common.postMethod('startPendingMatch', {matchId: id}).then((res:any) => {
        this.common.hideLoader();
        this.common.router.navigate(['/tabs/tab6']);
      });
    }
  
}
