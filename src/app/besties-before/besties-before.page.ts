import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-besties-before',
  templateUrl: './besties-before.page.html',
  styleUrls: ['./besties-before.page.scss'],
})
export class BestiesBeforePage implements OnInit {

  userDetails: any = [];
  mybesties: any = [];
  showContent: {[key: number]: boolean} = {};
  ourStory: any = [];
  ourSlogan: any = [];
  ourLetter: any = [];

  constructor(
    public storageservice: StorageService,
    public common: CommonService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetStoredUserDetails();
    this.GetStatusContent();
  }

  GetStoredUserDetails () {
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
      this.GetBestiesList();
    });
  }

  async GetBestiesList () {
    let params = {
      id : this.userDetails.userid
    }
    await this.common.showLoader();
    this.common.postMethod('getBestieList',params).then((res:any) => {
     this.common.hideLoader();

     this.mybesties = res.details;

     if (this.mybesties.length==0) {
       this.common.presentToast('You are having no `Besties` to show');
       return;
      }
    }, err => {

      console.log('Error:',err);

    });
  }

  GetStatusContent () {
    this.ourLetter = [];
    this.ourSlogan = [];
    this.ourStory = [];
  }

  ToRemoveBestie (e, bestie) {
    let params = {
      userid : this.userDetails.userid,
      besiteid : bestie.tableid
    }
    this.common.postMethod('RemoveBesties',params).then((res:any) => {
      if (res.status == true) {
        this.GetBestiesList();
        this.common.presentToast( bestie.name + 'is successfully removed from your besties list');
      }
    }, err => {
      console.log('Error:',err);
    });
  }

  ToViewBestiesContent (e, bestie , i, type) {
    if (type==='show') {
      this.showContent = {} = {};
      this.showContent[i] = true;
      this.ToGetContents(bestie, i);
    } else {
      this.showContent[i] = false;
      // this.ToGetContents(bestie, i);
    }

  }

  ToGetContents (bestie, i) {
    let params = {
      userid : this.userDetails.userid,
      senderid : bestie.userid
    }

    this.common.postMethod('GetStatus',params).then((res:any) => {
      this.ourStory = res.details.story;
      this.ourSlogan = res.details.slogan;
      this.ourLetter = res.details.letter;
    });
  }

  goToBestiesDetails(event,bestie){
    this.common.navCtrl.navigateForward(['besties'], {queryParams : bestie});
  }

  gotoProfile() {
    this.common.router.navigate(['tabs/tab7']);
  }

  addMoreBesties() {
    this.common.navCtrl.navigateForward(['besties-search']);
  }

}
