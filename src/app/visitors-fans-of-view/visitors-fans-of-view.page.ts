import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-visitors-fans-of-view',
  templateUrl: './visitors-fans-of-view.page.html',
  styleUrls: ['./visitors-fans-of-view.page.scss'],
})
export class VisitorsFansOfViewPage implements OnInit {

  UserInfo: any = [];
  myfanof: any = [];

  constructor(
    public storageservice: StorageService,
    public common: CommonService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.common.route.queryParams.subscribe(resp => {
      this.UserInfo = resp;

      let params = {
        id: this.UserInfo.userid,
      }
      this.common.presentLoading();
      this.common.postMethod('getBestieList',params).then((res:any) => {
        this.myfanof = res.details.fan_of;
      }, (err) => {
        console.log('Error:',err);
      });
  });
  }

}
