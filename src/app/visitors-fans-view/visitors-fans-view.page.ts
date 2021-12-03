import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-visitors-fans-view',
  templateUrl: './visitors-fans-view.page.html',
  styleUrls: ['./visitors-fans-view.page.scss'],
})
export class VisitorsFansViewPage implements OnInit {

  UserInfo: any = [];
  myfans: any = [];

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
        this.myfans = res.details.fan;
      }, (err) => {
        console.log('Error:',err);
      });
  });
  }

}
