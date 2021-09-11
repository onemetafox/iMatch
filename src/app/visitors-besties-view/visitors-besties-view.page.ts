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
    console.log('Entered Into Visitors Besties View Page');
    this.common.route.queryParams.subscribe(resp => {
      this.UserInfo = resp;
      console.log('UserInfo:',this.UserInfo);

      let params = {
        id: this.UserInfo.userid,
      }
      console.log('params:',params);
      this.common.presentLoading();
      this.common.postMethod('Listbesties',params).then((res:any) => {
        console.log('res:',res);
        this.mybesties = res.details.besties;
        console.log('mybesties:',this.mybesties);
      }, (err) => {
        console.log('Error:',err);
        console.log(err.headers);
      });
  });
  }

}
