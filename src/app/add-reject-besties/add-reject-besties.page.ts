import { Component, OnInit } from "@angular/core";
import { CommonService } from "./../services/common.service";
import { StorageService } from "./../services/storage.service";
@Component({
  selector: "app-add-reject-besties",
  templateUrl: "./add-reject-besties.page.html",
  styleUrls: ["./add-reject-besties.page.scss"],
})
export class AddRejectBestiesPage implements OnInit {
  BestiesInvitaion: any = [];
  userDetails: any = [];

  constructor(
    public storageservice: StorageService,
    public common: CommonService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.GetStoredUserDetails();

    this.BestiesInvitaion = [
      {
        name: "Ravi",
      },
      {
        name: "Balu",
      },
      {
        name: "Ravi",
      },
      {
        name: "Balu",
      },
      {
        name: "Ravi",
      },
      {
        name: "Balu",
      },
      {
        name: "Ravi",
      },
      {
        name: "Balu",
      },
    ];
  }

  GetStoredUserDetails() {
    this.storageservice.storage.get("userDetails").then((val) => {
      console.log("Storage Value of userDetails:", val);
      this.userDetails = val;
      this.GetBestieInvitations();
    });
  }

  GetBestieInvitations() {
    let params = {
      userid: this.userDetails.userid,
    };
    console.log("params:", params);
    this.common.postMethod("abc", params).then(
      (res: any) => {
        console.log("res:", res);
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  ViewUserProfile(e, invitaion, i) {
    let params = {
      userid: this.userDetails.userid,
    };
    console.log("params:", params);
    this.common.postMethod("abc", params).then(
      (res: any) => {
        console.log("res:", res);
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  AddAsBestie(e, invitaion, i) {
    let params = {
      request_id: '',
      status : 'accept'
    };
    console.log("params:", params);
    this.common.postMethod("accept_or_reject", params).then(
      (res: any) => {
        console.log("res:", res);
        if (res.status === true) {
          this.GetBestieInvitations();
        }
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  RejectBestieInvitation(e, invitaion, i) {
    let params = {
      request_id: '',
      status : 'reject'
    };
    console.log("params:", params);
    this.common.postMethod("accept_or_reject", params).then(
      (res: any) => {
        console.log("res:", res);
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
    console.log("params:", params);
    this.common.postMethod("abc", params).then(
      (res: any) => {
        console.log("res:", res);
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
