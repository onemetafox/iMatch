import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-squad-list-invitation',
  templateUrl: './squad-list-invitation.page.html',
  styleUrls: ['./squad-list-invitation.page.scss'],
})
export class SquadListInvitationPage implements OnInit {

  showMessage = false;
  userDetails : any = [];
  interval: any;
  invitations: any = [];

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
  ) { 

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.userDetails = resp;
      this.GetInvitation();
    });

  }

  // ionViewWillEnter(){
  //   this.storageservice.storage.get('userDetails').then((val) => {
  //     this.userDetails = val;
  //       if (this.userDetails.userid!=null) {
  //         this.GetInvitation();
  //       } 
  //   });
  // }

  GetInvitation () {

    let params = {
      req_to : this.userDetails.id,
      category : 'squad',
      req_status: '0'
    }
    this.common.postMethod('getBestieRequest',params).then((res:any) => {
      this.invitations = res.details;
    }, err => {
      console.log('err:',err);
    });
  }

  ngOnInit() {
    
  }
  changeStatus(bestie_id, status){
    let params = {
      bestie_id : bestie_id,
      req_status : status,
    }
    this.common.postMethod('changeBestieStatus',params).then((res:any) => {
      this.invitations = res.details;
    }, err => {
      console.log('err:',err);
    });
  }

}
