import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { CommonService } from '../services/common.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-best-moment-visitors-comment',
  templateUrl: './best-moment-visitors-comment.page.html',
  styleUrls: ['./best-moment-visitors-comment.page.scss'],
})

export class BestMomentVisitorsCommentPage implements OnInit {

  FormSubmit : boolean = false;

  public BestMomentCommentForm: FormGroup;
  comment: AbstractControl;

  userComment = {
    "comment" : ""
  }

  userDetails: any = [];
  MomentDetails: any = [];
  commentDetails: any = [];

  constructor(

    private common: CommonService,
    public storageservice: StorageService,
    public formbuilder: FormBuilder,

  ) { 

    this.BestMomentCommentForm = formbuilder.group({
      comment: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.comment = this.BestMomentCommentForm.controls['comment'];

  }

  ngOnInit() {

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe((resp:any) => {
      this.MomentDetails = resp;
    });

  }

  ionViewWillEnter(){
   let params = {
        momentid : this.MomentDetails.momentid
    }
   this.common.postMethod('GetMomentComment',params).then((res:any) => {
     this.commentDetails = res.details;
   }, (err) => {
     console.log('Error:',err);
   });

  }

  toAddComment() {

    let params = {
      userid : this.userDetails.userid,
      momentid : this.MomentDetails.momentid,
      comment : this.userComment.comment
    }
    this.common.postMethod('MomentComment',params).then((res:any) => {
      if (res.status == true) {

        this.BestMomentCommentForm.reset();
        this.ionViewWillEnter();
      } else {
        this.common.presentToast(' 🛑 You Cannot send An Empty Comment !!! ');
      }
    }, (err) => {
      console.log('Error:',err);
    });
    
  }

}
