import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-goodies',
  templateUrl: './goodies.page.html',
  styleUrls: ['./goodies.page.scss'],
})
export class GoodiesPage implements OnInit {

  userDetails: any = [];
  showWinners = false;
  headliners = [{
    name: 'Ebond Gold'
  },
  {
    name: 'Sally Brint'
  },
  {
    name: 'Pritty Kavitha'
  },
  {
    name: 'Linne Craig'
  },
  {
    name: 'Layla'
  },
  ];
  WinnerDetails: any;
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
     userid : this.userDetails.userid,
   }
   this.common.postMethod('winners_of_the_moment',params).then((res:any) => {
     this.WinnerDetails = res.details;
   });
  }

  winnersMoment() {
    this.showWinners = !this.showWinners;
  }
}
