import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-besties-actions',
  templateUrl: './besties-actions.page.html',
  styleUrls: ['./besties-actions.page.scss'],
})
export class BestiesActionsPage implements OnInit {

  userDetails: any = [];
  BestiesAction: any = [];

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
  ) { 

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.storageservice.storage.get('userDetails').then((val) => {
     this.userDetails = val;

      if (this.userDetails.userid != '') {

        let params = {
          userid : this.userDetails.userid
        }

        this.common.postMethod('BestieAction',params).then((res:any) => {
         this.BestiesAction = res.details;

        });

      }
      
   });

  }

}
