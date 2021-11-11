import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import * as BaseConfig from '../services/config';
const { Camera } = Plugins;

@Component({
  selector: 'app-best-moments-add',
  templateUrl: './best-moments-add.page.html',
  styleUrls: ['./best-moments-add.page.scss'],
})
export class BestMomentsAddPage implements OnInit {

  FormSubmit: boolean = false;
  ShowButtons: boolean = false;
  userDetails: any = [];
  BestMomentDetails: any = [];

  public BestMomentForm: FormGroup;
  caption: AbstractControl;

  userCaption = {
    "caption" : ""
  }
  momentid: string;

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
    public formbuilder: FormBuilder,
  ) { 

    this.BestMomentForm = formbuilder.group({
      caption: ['', Validators.compose([Validators.required,Validators.minLength(1)])]
    });

    this.caption = this.BestMomentForm.controls['caption'];

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.BestMomentDetails = resp;
  });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storageservice.storage.get('userDetails').then((val) => {
     this.userDetails = val;
    });
    this.momentid = this.BestMomentDetails.momentid;
   }

  toAddCaption() {
    this.FormSubmit = true;
    if (this.BestMomentForm.valid) {
      let params = {
        userid : this.userDetails.userid,
        Caption : this.userCaption.caption
      }
      this.common.postMethod('BestMoment',params).then((res:any) => {
        if (res.status == true ) {
          this.momentid = res.moment_id;
          this.common.presentToast(' ✅  Best Moment Caption Added Successfully');
        } else {
          this.common.presentToast(' 🛑 Something went wrong !!! ');
        }
      }, (err) => {
        console.log('Error:',err)
      });
    }
  }

  async toUploadFromGallery() {

    if (this.BestMomentForm.valid) {

    const image = await Camera.getPhoto ({
      quality: 50,
      height: 200,
      width: 200,
      correctOrientation: true,
      saveToGallery: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
  
    this.uploadImage(blobData, image.format).subscribe((newImage) => {
      this.common.router.navigate(['/best-moments']);
    }, err => {
      console.log(err);
    });

  } else {

    this.common.showAlert('Please upload a caption for your <strong> Best Moments </strong>');

    // this.common.alertCtrl.create({
    //   header: 'Message',
    //   message: 'Please upload a caption for your <strong> Best Moments </strong>',
    //   buttons: ['OK']
    // });

  }

  }

  async toUploadFromCamera() {

    if (this.BestMomentForm.valid) {

    const image = await Camera.getPhoto ({
      quality: 50,
      height: 200,
      width: 200,
      allowEditing: true,
      correctOrientation: true,
      saveToGallery: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
  
    this.uploadImage(blobData, image.format).subscribe((newImage) => {
      this.common.router.navigate(['/best-moments']);
    }, err => {
      console.log(err);
    });

  } else {

    this.common.showAlert('Please upload a caption for your <strong> Best Moments </strong>');
    // this.common.alertCtrl.create({
    //   header: 'Alert',
    //   message: 'Please upload a caption for your <strong> Best Moments </strong>',
    //   buttons: ['OK']
    // });

  }

  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  uploadImage(blobData, ext) {
    const formData = new FormData();
    formData.append('userfile', blobData, `myimage.${ext}`);
    formData.append('momentid', this.momentid);

    this.common.presentLoading();
    return this.common.http.post(`${BaseConfig.baseUrl + '/iMatch/api/v1/UploadBestieMomentFile'}`, formData);
  }

  toShowButtons() {
    this.ShowButtons = !this.ShowButtons;
  }

}
