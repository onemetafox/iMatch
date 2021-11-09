import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { CommonService } from './../services/common.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-what-would-i-do',
  templateUrl: './what-would-i-do.page.html',
  styleUrls: ['./what-would-i-do.page.scss'],
})
export class WhatWouldIDoPage implements OnInit {

  FormSubmit : boolean = false;
  userDetails: any = [];
  showTextArea : boolean = false;
  showEditArea : boolean = false;

  public commentForm: FormGroup;
  public answerForm: FormGroup;
  public iQueryForm: FormGroup;

  comment: AbstractControl;
  answer1: AbstractControl;
  answer2: AbstractControl;
  iQuery1: AbstractControl;
  iQuery2: AbstractControl;

  userAnswer = {
    "answer1" : "",
    "answer2" : ""
  }

  userComment = {
    "comment" : ""
  }

  useriQuery = {
    "iQuery1" : "",
    "iQuery2" : ""
  }

  MyiQuery : any;
  Like1: any;
  Like2: any;
  SingleQuery: any;
  AdminQuestions: any = [];
  Answers: any = [];

  constructor(
    public common: CommonService,
    public storageservice: StorageService,
    public formbuilder:FormBuilder,
  ) { 

    this.answerForm = formbuilder.group({
      answer1: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
      answer2: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.commentForm = formbuilder.group({
      comment: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.iQueryForm = formbuilder.group({
      iQuery1: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
      iQuery2: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.answer1 = this.answerForm.controls['answer1'];
    this.answer2 = this.answerForm.controls['answer2'];
    this.comment = this.commentForm.controls['comment'];
    this.iQuery1 = this.iQueryForm.controls['iQuery1'];
    this.iQuery2 = this.iQueryForm.controls['iQuery2'];


    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.iQueryForm.reset();

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;

      if (this.userDetails.userid != '') {
        let params = {
          userid : this.userDetails.userid,
        }
        this.common.postMethod('GetAdminMessage',params).then((res:any) => {
          this.AdminQuestions = res.details.adminmessage;
          this.Answers = res.details.answers;
          this.MyiQuery = res.details.MyiQuery;
          this.Like1 = res.details.Like[0];
          this.Like2 = res.details.Like[1];
        });
      }
    });
  }

  toSendComment(event,messages) {
    this.FormSubmit = true;
      let params = {
        userid : this.userDetails.userid,
        comment : this.userComment.comment,
      }
      this.common.postMethod('CommentAnswer',params).then((res:any) => {
        if (res.status == true) {
          this.commentForm.reset();
          this.common.presentToast(' ✅ Your comment successfully send');
        } else {
          this.common.presentToast(' 🛑 Something went wrong');
        }
      });

    // } else {
    //   this.common.showAlert('You had reached the maximum count of this week`s iQuery');
    // }


  }

  toSendAnswer(event,AdminQuestions) {
    this.FormSubmit = true;
    let params = {
      userid : this.userDetails.userid,
      answer1 : this.userAnswer.answer1,
      answer2 : this.userAnswer.answer2,
      questionnum : AdminQuestions.id
    }
    this.common.postMethod('AnswerMessage',params).then((res:any) => {
      if (res.status == true) {
        this.ionViewWillEnter();
        this.common.presentToast(' ✅ Your answers successfully send ');
      } else {
        this.common.presentToast(' 🛑 Something went wrong ');
      }
    });
  }

  toLikeAnswer1(event,AdminQuestions) {
    let params = {
      userid : this.userDetails.userid,
      questionid : this.AdminQuestions.id,
      answerid: 'answer1',
      status: 'like'
    }
    this.common.postMethod('CommentLike',params).then((res:any) => {
      this.ionViewWillEnter();
    });

  }

  toLikeAnswer2(event,AdminQuestions) {
    let params = {
      userid : this.userDetails.userid,
      questionid : this.AdminQuestions.id,
      answerid: 'answer2',
      status: 'like'
    }
    this.common.postMethod('CommentLike',params).then((res:any) => {
      this.ionViewWillEnter();
    });
  }

  toSendiQuery(event,messages) {
    this.FormSubmit = true;
    this.showTextArea = false;
    if (this.MyiQuery.length!=7 && this.MyiQuery.length>7) {

    let params = {
      userid : this.userDetails.userid,
      query1 : this.useriQuery.iQuery1,
      query2 : this.useriQuery.iQuery2,
      queryid : ''
    }
    this.common.postMethod('MyiQuery',params).then((res:any) => {
      if (res.status == true) {
        this.common.presentToast(' ✅ Your new iQuery successfully added ');
      } else {
        this.common.presentToast(' 🛑 Something went wrong ');
      }
    });
    this.ionViewWillEnter();
  } else {
      this.common.showAlert('You had reached the maximum count of this week`s iQuery, so you cann`t add no more iQuery this week');
  }
  }

  toRemoveiQuery(event,iQuery) {
    let params = {
      queryid : iQuery.queryid
    }
    this.common.postMethod('RemoveiQuery',params).then((res:any) => {
      if (res.status == true) {
        this.ionViewWillEnter();
        this.common.presentToast(' ✅ iQuery successfully removed ');
      } else {
        this.common.presentToast(' 🛑 Something went wrong ');
      }
    });
  }

  toEditiQuery(event,iQuery) {
    this.showEditArea = true;
    this.SingleQuery = iQuery;
  }

  toSendEditediQuery(event,SingleQuery) {
    let params = {
      userid : this.userDetails.userid,
      queryid : SingleQuery.queryid,
      query1 : this.useriQuery.iQuery1,
      query2 : this.useriQuery.iQuery2
    }
    this.common.postMethod('MyiQuery',params).then((res:any) => {
      if (res.status == true) {
        this.ionViewWillEnter();
        this.common.presentToast(' ✅ Your iQuery successfully updated ');
      } else {
        this.common.presentToast(' 🛑 Something went wrong ');
      }
    });
  }

  toCloseEditArea() {
    this.showEditArea = false;
  }

  toShowTextArea() {
    this.showTextArea = true;
  }

}
