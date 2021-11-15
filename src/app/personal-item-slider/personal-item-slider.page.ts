import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { PopoverController } from '@ionic/angular';
import { NavParams, IonSlides } from '@ionic/angular';
import {
	FormBuilder,
	FormGroup,
  	Validators,
    AbstractControl,
} from '@angular/forms';
import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, CameraPhoto, Capacitor, PhotosAlbumType, FilesystemEncoding } from '@capacitor/core';
import { NavigationExtras } from '@angular/router';
import * as BaseConfig from '../services/config';


@Component({
  selector: 'app-personal-item-slider',
  templateUrl: './personal-item-slider.page.html',
  styleUrls: ['./personal-item-slider.page.scss'],
})
export class PersonalItemSlider implements OnInit {

  userDetails: any = [];
  PersonalMatch: any = [];
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  personalMatchSlideIndex: any;
  PersonalMatchImage: any;
  PersonalMatchAudio: any;
  PersonalMatchLink: any;
  PersonalMatchVideo: any;
  slideIndex: number = 1;
  PersonalMatchText: any;
  userDetail: any;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(
    public storageservice: StorageService,
    public popoverController: PopoverController,
    public modalController: ModalController,
    private common: CommonService, 
  ) { 
    
    this.common.route.queryParams.subscribe((resp:any) => {
      this.PersonalMatch = JSON.parse(resp.match);
    });

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetail = val;
    });
    this.sliderOne =
          {
            isBeginningSlide: true,
            isEndSlide: true,
            slidesItems: this.PersonalMatch
          };

  }

  ngOnInit() {
  }

  SlideDidChange(object, slideView) {
    slideView.getActiveIndex().then((index: number) => {
      this.slideIndex = index + 1;
    })
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
