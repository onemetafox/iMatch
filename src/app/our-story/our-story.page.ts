import { Component, OnInit } from "@angular/core";
import { CommonService } from "./../services/common.service";
import { StorageService } from "./../services/storage.service";
@Component({
  selector: "app-our-story",
  templateUrl: "./our-story.page.html",
  styleUrls: ["./our-story.page.scss"],
})
export class OurStoryPage implements OnInit {
  userDetails: any = [];
  bestieDetails: any = [];
  userStory: string;

  constructor(
    public storageservice: StorageService,
    public common: CommonService
  ) {
    this.common.route.queryParams.subscribe((resp: any) => {
      this.bestieDetails = resp;
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.GetStoredUserDetails();
  }

  GetStoredUserDetails() {
    this.storageservice.storage.get("userDetails").then((val) => {
      this.userDetails = val;
      this.GetUserStory();
    });
  }

  GetUserStory() {
    let params = {
      userid: this.userDetails.userid,
      senderid: this.bestieDetails.userid,
    };
    this.common.postMethod("GetStatus", params).then(
      (res: any) => {
        this.userStory = res.details.story[0].text;
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  SubmitUserStory() {
    if (this.userStory != "" && this.userStory != undefined) {
      let params = {
        userid: this.userDetails.userid,
        category: "story",
        text: this.userStory,
        send_to: this.bestieDetails.userid,
      };
      this.common.postMethod("statusbar", params).then(
        (res: any) => {
          if (res.status == true) {
            this.userStory = "";
            this.common.presentToast(
              " ✅  Your Our Story Content Updated Successfully ..."
            );
            this.common.router.navigate(["besties"], {
              queryParams: this.bestieDetails,
            });
          }
        },
        (err) => {
          console.log("Error:", err);
        }
      );
    } else {
      this.common.showAlert("You cannot send an empty story!");
    }
  }
}
