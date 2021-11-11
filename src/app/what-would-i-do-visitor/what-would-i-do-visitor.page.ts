import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-what-would-i-do-visitor',
  templateUrl: './what-would-i-do-visitor.page.html',
  styleUrls: ['./what-would-i-do-visitor.page.scss'],
})
export class WhatWouldIDoVisitorPage implements OnInit {

  userArray: any = [];
  message: any;
  answers: any;
  MyiQuery: any;
  showCommentBox: boolean = false;

  constructor(
    public common: CommonService,
  ) { 
    this.common.route.queryParams.subscribe((resp:any) => {
      this.userArray = resp;
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
      let params = {
        userid : this.userArray.userid,
      }
      this.common.postMethod('GetAdminMessage',params).then((res:any) => {
        this.message = res.details.adminmessage;
        this.answers = res.details.answers;
        this.MyiQuery = res.details.MyiQuery;
      });
  }

  toCommentiQuery1(event,Query) {
    this.common.navCtrl.navigateForward(['/i-query-comments'],{queryParams: Query});
  }

  toCommentiQuery2(event,Query) {
    this.common.navCtrl.navigateForward(['/i-query2-comments'],{queryParams: Query});
  }

  toLikeiQuery1(event,Query) {
    let params = {
      userid : this.userArray.userid,
      queryid : Query.queryid,
      querynum : 'query1',
      status : 'like'
    }
    this.common.postMethod('Myiquerylike',params).then((res:any) => {
      this.ionViewWillEnter();
    });
  }

  toLikeiQuery2(event,Query) {
    let params = {
      userid : this.userArray.userid,
      queryid : Query.queryid,
      querynum :'query2',
      status : 'like'
    }
    this.common.postMethod('Myiquerylike',params).then((res:any) => {
      this.ionViewWillEnter();
    });
  }


}