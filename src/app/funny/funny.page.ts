import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-funny',
  templateUrl: './funny.page.html',
  styleUrls: ['./funny.page.scss'],
})
export class FunnyPage implements OnInit {

  userDetails: any = [];
  FunnyDetails: any = [];

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

   this.storageservice.storage.get('userDetails').then((val) => {
    this.userDetails = val;
  });

   let params = {
     userid : this.userDetails.userid ,
     category : 'funny',
   }
   this.common.postMethod('BannerSearch',params).then((res:any) => {
     this.FunnyDetails = res.details;
   }, (err) => {
     console.log('Error:',err);
   });
  }

}
