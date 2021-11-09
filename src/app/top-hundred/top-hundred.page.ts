import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.page.html',
  styleUrls: ['./top-hundred.page.scss'],
})
export class TopHundredPage implements OnInit {

  userDetails: any = [];
  TopHundred: any;

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
   let params = {
     userid : this.userDetails.userid
   }
   this.common.postMethod('Top100',params).then((res:any) => {
    this.TopHundred = res.details;
   });
  }

}
