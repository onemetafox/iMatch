import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CommonService } from '../services/common.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  FormSubmit : boolean = false;
  userDetails: any = [];
  matchDetails: any = [];
  commentDetails: any = [];

  public OpenMatchCommentForm: FormGroup;
  public ReplyCommentForm: FormGroup;

  comment: AbstractControl;
  reply: AbstractControl;

  userComment = {
    "comment" : ""
  }

  userReply = {
    "reply" : ""
  }

  doReply: boolean = false;
  ReplyArray: any;
  ReplyComments: any = [];
  showReplyComment: {[key: number]: boolean} = {};
  commentId: any;
  ReplyCommentArray: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService,
    public formbuilder: FormBuilder,
  ) 
  {

    this.OpenMatchCommentForm = formbuilder.group({
      comment: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.ReplyCommentForm = formbuilder.group({
      reply: ['', Validators.compose([Validators.required,Validators.minLength(2)])]
    });

    this.comment = this.OpenMatchCommentForm.controls['comment'];

    this.reply = this.ReplyCommentForm.controls['reply'];

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });

    this.common.route.queryParams.subscribe(resp => {
      this.matchDetails = resp;
  });
   }

  ngOnInit() {
  }

  ionViewWillEnter(){

    if (this.matchDetails.matchType === 'PERSONAL' || this.matchDetails.matchType === 'ONGOING') {
      let params = {
        userid : '0',
        matchid : this.matchDetails.match_id
      }
      this.common.postMethod('GetComment',params).then((res:any) => {
        this.commentDetails = res.details;
        this.ReplyComments = res.reply_comment;

      }, err => {
        console.log('Error:',err);
      })
    } else {
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
  
        if (this.userDetails.userid != '') {
  
          let params = {
            userid : this.userDetails.userid,
            matchid : this.matchDetails.match_id
          }
  
          this.common.postMethod('GetComment',params).then((res:any) => {
            this.commentDetails = res.details;
            this.ReplyComments = res.reply_comment;
            // if (this.commentDetails.replied_comment != "0") {
            //   this.ReplyComments = res.details;
            //   console.log('ReplyComments:',this.ReplyComments);
            // } else {
            //   this.common.presentToast(' 🛑 Something went wrong !!! ');
            // }
          });
        }
      });
    }

  }

  toAddComment() {
    if (this.OpenMatchCommentForm.valid && this.matchDetails.match_status=='1') {

      let params = {
        userid : this.userDetails.userid,
        matchid : this.matchDetails.match_id,
        comment : this.userComment.comment,
        contestentid : '0'
      }
      this.common.postMethod('Comment',params).then((res:any) => {
        if (res.status == true) {
          this.OpenMatchCommentForm.reset();
          this.ionViewWillEnter();
        } else {
          this.common.presentToast(' 🛑 Something went wrong !!! ');
        }
      }, (err) => {
        console.log('Error:',err);
        this.common.presentToast(' 🛑 A Network error occured ...');
      });

    } else {

      this.OpenMatchCommentForm.reset();
      this.common.presentToast('The match you are trying to comment is got finished, so you cann`t comment here' );
    
    }

  }

  toLikeComment(e,comment) {
    let params = {
      commentid: comment.id,
      userid: this.userDetails.userid,
    }
    this.common.postMethod('MatchCommentLike',params).then((res:any )=> {
      if(res.status == true) {
        this.ionViewWillEnter();
      } else{
        this.common.presentToast(' 🛑 Something went wrong !!! ');
      }
    }, (err) => {
      this.common.presentToast(' 🛑 A Network error occured ...');
    });
  }

  toLikeReplyComment(e,comment) {
    let params = {
      commentid: comment.id,
      userid : this.userDetails.userid,
    }
    this.common.postMethod('MatchCommentLike',params).then((res:any )=> {
      if (res.status == true) {
        this.ionViewWillEnter();
      } else {
        this.common.presentToast(' 🛑 Something went wrong !!! ');
      }
    }, (err) => {
      console.log('Error:',err);
    });
  }

  toShowReplyField(e,comment) {
    this.doReply = true;
    this.ReplyArray = comment;
  }

  toAddReply(e,ReplyArray) {

    if (this.ReplyCommentForm.valid) {

      let params = {
        userid: this.userDetails.userid,
        matchid: this.matchDetails.match_id,
        comment: this.userReply.reply,
        contestentid: '0',
        replied_commentid: ReplyArray.id,
      }

      this.common.postMethod('ReplyComment',params).then((res:any) => {
        if (res.status == true) {
          this.OpenMatchCommentForm.reset();
          this.ReplyCommentForm.reset();
          this.ionViewWillEnter();
        } else {
          this.common.presentToast(' 🛑 Something went wrong !!! ');
        }
      }, (err) => {
      });

    } else {
      this.common.presentToast('Cannot Send Empty Messages ...');
    }

  }

  toShowReplyComment(e, comment , i:number) {
    this.ReplyCommentArray = [];
    this.commentId = comment.id;
    this.showReplyComment[i] = true;
    if (this.ReplyComments?.length!=0) {
        for (let i=0; i<this.ReplyComments.length; i++) {
          const includesCommentId = this.ReplyComments[i].replied_comment.includes(this.commentId);
          if (includesCommentId===true) {
            this.ReplyCommentArray.push(this.ReplyComments[i]);
          } else {
            this.showReplyComment[i] = false;
          }
        }
    } else {
      this.showReplyComment[i] = false;
      this.common.presentToast(comment.commented_username + ' comment have no reply comments to display');
    }

  }

  toHideReplyComment(e, comment, i:number) {
    this.showReplyComment[i] = false;
  }

}
