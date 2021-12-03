import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-besties-comment',
  templateUrl: './besties-comment.page.html',
  styleUrls: ['./besties-comment.page.scss'],
})
export class BestiesCommentPage implements OnInit {

  userDetails: any = [];
  commentDetails: any = [];
  userComment: string;
  BestiesDetails: any = [];
  userReply: string;
  doReply : boolean = false;
  ReplyUserDetails: any = [];
  userEditedComment: string;
  ReplyComments: any = [];
  doEditComment: {[key: number]: boolean} = {};
  Comment: any = [];
  isReplyComments: {[key: number]: boolean} = {};
  doEditReplyComment: {[key: number]: boolean} = {};
  CommentReply: any;
  
  constructor(
    private common: CommonService,
    public storageservice: StorageService,
  ) { 

    this.common.route.queryParams.subscribe((resp:any) => {
      this.BestiesDetails = resp;
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.StorageUserDetails();
    this.GetBestiesComments();
    this.Comment = [];
  }

  // To fetch user stored details in device
  StorageUserDetails () {
    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
    });
  }

  GetBestiesComments () {
    let params = {
      bestieid : this.BestiesDetails.userid
    }
    this.common.postMethod('GetBestieComment',params).then((res:any) => {
      this.commentDetails = res.details;
      for ( let i=0; i < this.commentDetails.length; i++) {
        this.doEditComment[i] = false;
      }
    }, err => {
      console.log('Error:',err);
    });
  }

  ToAddComment () {

    if (this.userComment!="" && this.userComment!=undefined) {
      console.log(this.BestiesDetails);
      let params = {
        userid : this.userDetails.userid,
        bestieid : this.BestiesDetails.tableid,
        comment : this.userComment,
        commentid : ''
      }
      this.common.postMethod('BestieComment',params).then((res:any) => {
        if (res.status == true) {
          this.GetBestiesComments();
          this.userComment = '';
        }
      }, err =>{
        console.log('Error:',err);
      });

    } else {
      this.common.presentToast('You cannot send an empty message !');
    }

  }

  ToEditComments (e, comment, i:number) {
    this.doEditComment[i] = true;
    this.userEditedComment = comment.comment;
  }

  ToSaveEdit (e, comment, i:number, Type) {
    this.Comment = comment;
    if (Type === "COMMENT") {

      if (this.userEditedComment!="" && this.userEditedComment!=undefined) {

        this.doEditComment[i] = false;
  
        let params = {
          commentid : this.Comment.id,
          comment : this.userEditedComment
        }
        this.common.postMethod('UpdateBestieComment',params).then((res:any) => {
          if (res.status == true) {
            this.common.showAlertSuccess('Your edited comment saved successfully');
            this.GetBestiesComments();
          }
        } , err => {
          console.log('Error:',err);
        });
  
      } else {
        this.common.showAlert('You cannot save an empty message!');
      }
    } else {
      this.ToSaveReplyComment(e, comment, i, Type);
    }

  }

  ToCancelEdit (e, i){
    this.doEditComment[i] = false;
    this.doEditReplyComment[i] = false;
  }

  ToDeleteComments (e, comment) {
    let params = {
      commentid : comment.id,
    }
    this.common.postMethod('DeleteBestieComment',params).then((res:any) => {
      if (res.status == true) {
        this.GetBestiesComments();
      }
    }, err => {
      console.log('Error:',err);
    });
  }

  ToLikeComments (e, comment, i:number) {
    this.Comment = comment;
    let params = {
      commentid : this.Comment.id,
      userid : this.userDetails.userid
    }
    this.common.postMethod('BestieCommentLike',params).then((res:any) => {
      if (res.status == true) {
        this.GetBestiesComments();
      }
    }, err => {
      console.log('Error:',err);
    });
  }

  ToAddReply (e, comment) {
    this.doReply = true;
    comment.commentType = 'COMMENT';
    this.ReplyUserDetails = comment;
  }

  ToSendReply () {
    if (this.ReplyUserDetails.commentType === 'COMMENT') {
      if (this.userReply!="" && this.userReply!=undefined) {
        let params = {
          userid : this.userDetails.userid,
          bestieid : this.BestiesDetails.userid,
          comment : this.userReply,
          commentid : this.ReplyUserDetails.id
        }
        this.common.postMethod('BestieComment',params).then((res:any) => {
          if ( res.status == true ) {
            this.GetBestiesComments();
            this.userReply = '';
          }
        }, err => {
          console.log('Error:',err);
        })
      } else {
        this.common.presentToast('You cannot send empty reply !');
      }
    } else {
      this.ToCommentReplyComment();
    }

  }

  ToViewReplyComments (e, comment, i:number) {
    this.Comment = comment
    if (this.Comment.replied_comments.length!==0) {
      this.isReplyComments = {} = {};
      this.ReplyComments = this.Comment.replied_comments;
      this.isReplyComments[i] = !this.isReplyComments[i];
    } else {
      this.common.presentToast('This comment has no reply comments');
    }
  }

  ToLikeReplyComment (e, reply, i:number) {
    this.Comment = reply;
    let params = {
      commentid : this.Comment.id,
      userid : this.userDetails.userid
    }
    this.common.postMethod('BestieCommentLike',params).then((res:any) => {
      if (res.status == true) {
        this.GetBestiesComments();
      }
    }, err => {
      console.log('Error:',err);
    })
  }

  ToReplyToReplyComment (e, reply, i) {
    this.doReply = true;
    reply.commentType = 'REPLY';
    this.ReplyUserDetails = reply;
  }

  ToCommentReplyComment() {

    if (this.userReply!="" && this.userReply!=undefined) {
      let params = {
        userid : this.userDetails.userid,
        bestieid : this.BestiesDetails.userid,
        comment : 'Replied to '+this.ReplyUserDetails.commented_username+'`s comment 👉 '+this.userReply,
        commentid : this.ReplyUserDetails.id
      }
      this.common.postMethod('BestieComment',params).then((res:any) => {
        if ( res.status == true ) {
          this.GetBestiesComments();
          this.userReply = '';
        }
      }, err => {
        console.log('Error:',err);
      })
    } else {
      this.common.presentToast('You cannot send empty reply !');
    }

  }

  ToEditReplyComment (e, reply, i:number) {
    this.doEditReplyComment[i] = true;
    this.CommentReply = reply;
    this.userEditedComment = reply.comment;
  }

  ToSaveReplyComment (e, reply, i:number, Type) {
    if (this.userEditedComment!="" && this.userEditedComment!=undefined) {

      let params = {
        commentid : this.CommentReply.id,
        comment : this.userEditedComment
      }
      this.common.postMethod('UpdateBestieComment',params).then((res:any) => {
        if (res.status == true) {
          this.userEditedComment = '';
          this.doEditReplyComment[i] = false;
          this.common.showAlertSuccess('Your edited comment saved successfully');
          this.GetBestiesComments();
        }
      } , err => {
        console.log('Error:',err);
      });

    } else {
      this.common.showAlert('You cannot save an empty message!');
    }
  }

  ToCancelReplyEdit (e, i){
    this.doEditReplyComment[i] = false;
  }

  ToDeleteReplyComment (e, reply, i:number) {
    this.Comment = reply;
    let params = {
      commentid : this.Comment.id,
    }
    this.common.postMethod('DeleteBestieComment',params).then((res:any) => {
      if (res.status == true) {
        this.GetBestiesComments();
      }
    }, err => {
      console.log('Error:',err);
    });
  }
}

