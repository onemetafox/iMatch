import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-open-match-comments',
  templateUrl: './open-match-comments.page.html',
  styleUrls: ['./open-match-comments.page.scss'],
})
export class OpenMatchCommentsPage implements OnInit {

  FormSubmit : boolean = false;
  userDetails: any = [];
  MatchDetails: any = [];
  CommentDetails: any = [];

  public OpenMatchCommentForm: FormGroup;
  comment: AbstractControl;

  userComment = {
    "comment" : ""
  }

  constructor(
    public storageservice: StorageService,
    private common: CommonService,
    public formbuilder: FormBuilder,
  ) {

    this.OpenMatchCommentForm = formbuilder.group({
      comment: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.comment = this.OpenMatchCommentForm.controls['comment'];

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.MatchDetails = resp;
  });

   }

  ngOnInit() {
  }

  ionViewWillEnter(){

    let params = {
      userid: 0,
      matchid : this.MatchDetails.match_id,
    }
    this.common.postMethod('GetComment',params).then((res:any) => {
      this.CommentDetails = res.details;
    }, (err) => {
      this.ionViewWillEnter();
    });

  }

  toAddComment() {
    let params = {
      userid : this.userDetails.userid,
      matchid : this.MatchDetails.match_id,
      comment : this.userComment.comment,
      contestentid : ''
    }
    this.common.postMethod('Comment',params).then((res:any) => {
      this.OpenMatchCommentForm.reset();
      this.ionViewWillEnter();
    }, (err) => {
      console.log('Error:',err);
    });
  }

}
