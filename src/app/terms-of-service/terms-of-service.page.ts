import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.page.html',
  styleUrls: ['./terms-of-service.page.scss'],
})
export class TermsOfServicePage implements OnInit {

  myBoolean_Terms : true;
  myBoolean_Policy : true;

  checkedbtn : boolean = false ;

  constructor(
    private common: CommonService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      // Do nothing
    }, false);
    this.common.menu.swipeGesture(false);
}

  onMyBooleanChange(event) {
    if(this.myBoolean_Terms && this.myBoolean_Policy == true){
      // this.common.presentToast('You have successfully registered , Please SIGN In to continue to app ...');
      this.checkedbtn = true;
    }else{
      this.checkedbtn = false;
    }
  }

  onDecline() {
    this.common.presentToast('Please read and confirm Terms of service');
    }

    onAccept() {
      this.common.router.navigate(['/login']);
      this.common.presentToast('You have successfully registered , Please SIGN In to continue to app ...');
    }

  }
