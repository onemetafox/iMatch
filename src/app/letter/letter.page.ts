import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
@Component({
  selector: 'app-letter',
  templateUrl: './letter.page.html',
  styleUrls: ['./letter.page.scss'],
})
export class LetterPage implements OnInit {
  
  userDetails : any = [];
  bestieDetails: any = [];
  userLetter: string;

  constructor(
    public storageservice: StorageService,
    public common: CommonService,
  ) { 

    this.common.route.queryParams.subscribe((resp: any) => {
      this.bestieDetails = resp;
    });

  }

  ngOnInit() {}

  ionViewWillEnter(){
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
        this.userLetter = res.details.letter[0]?.text;
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }

  SubmitUserLetter() {
    if (this.userLetter != "" && this.userLetter != undefined) {
      let params = {
        userid: this.userDetails.userid,
        category: "letter",
        text: this.userLetter,
        send_to: this.bestieDetails.userid,
      };
      this.common.postMethod("statusbar", params).then(
        (res: any) => {
          if (res.status == true) {
            this.userLetter = "";
            this.common.presentToast(
              " ✅  Your Our Letter Content Updated Successfully ..."
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
      this.common.showAlert("You cannot send an empty Letter!");
    }
  }

}
