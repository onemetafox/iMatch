import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-visitors-besties-view',
  templateUrl: './visitors-besties-view.page.html',
  styleUrls: ['./visitors-besties-view.page.scss'],
})
export class VisitorsBestiesViewPage implements OnInit {

  UserInfo: any = [];
  mybesties: any = [];

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
        this.mybesties = res.details.besties;
      }, (err) => {
        console.log('Error:',err);
      });
  });
  }

}
