import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-visitors-squad-list-view',
  templateUrl: './visitors-squad-list-view.page.html',
  styleUrls: ['./visitors-squad-list-view.page.scss'],
})
export class VisitorsSquadListViewPage implements OnInit {

  UserInfo: any = [];
  mysquads: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService,
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
        this.mysquads = res.details.squad;
      }, (err) => {
        console.log('Error:',err);
      });
  });
  }

}
