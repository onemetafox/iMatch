import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-art-entertainment',
  templateUrl: './art-entertainment.page.html',
  styleUrls: ['./art-entertainment.page.scss'],
})
export class ArtEntertainmentPage implements OnInit {

  userDetails: any = [];
  ArtEntertainmentDetails: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService
  ) { 

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
      if (this.userDetails.userid != '' ) {
        this.ionViewWillEnter();
      }
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let params = {
      userid : this.userDetails.userid ,
      category : 'art',
    }
    this.common.postMethod('BannerSearch',params).then((res:any) => {
      this.ArtEntertainmentDetails = res.details;
    });
   }

}
