import { Component, OnInit } from "@angular/core";
import { CommonService } from "./../services/common.service";
import { StorageService } from "./../services/storage.service";
@Component({
  selector: "app-add-reject-besties",
  templateUrl: "./add-reject-besties.page.html",
  styleUrls: ["./add-reject-besties.page.scss"],
})
export class AddRejectBestiesPage implements OnInit {
  BestiesInvitation: any = [];
  userDetails: any = [];

  constructor(
    public storageservice: StorageService,
    public common: CommonService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.GetStoredUserDetails();
  }

  GetStoredUserDetails() {
    this.storageservice.storage.get("userDetails").then((val) => {
      this.userDetails = val;
      this.GetBestieInvitations();
    });
  }

  GetBestieInvitations() {
    let params = {
      receiver_id: this.userDetails.userid,
      notification_status: 'Add_bestie',
      read_status: '1'
    };
    this.common.postMethod("getNotifications", params).then(
      (res: any) => {
        this.BestiesInvitation = res.details;
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  updateInvitation(e, invitation, status) {
    let params = {
      request_id: invitation.request_id,
      read_status : "1",
      req_status : status,
      not_id : invitation.not_id,
      type: invitation.notification_status
    };
    this.common.postMethod("setNotificationRead", params).then(
      (res: any) => {
        if (res.status === true) {
          this.GetBestieInvitations();
        }
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  BlockTheUser(e, invitaion, i) {
    let params = {
      request_id: '',
      status : 'block'
    };
    this.common.postMethod("abc", params).then(
      (res: any) => {
        if (res.status === true) {
          this.GetBestieInvitations();
        }
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }
}
