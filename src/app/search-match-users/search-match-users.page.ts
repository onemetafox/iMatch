import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-search-match-users',
  templateUrl: './search-match-users.page.html',
  styleUrls: ['./search-match-users.page.scss'],
})

export class SearchMatchUsersPage implements OnInit {

  public searchControl: FormControl;

  public searchTerm: string = "";
  searching: any = false;
  showCategory: boolean = true;

  userDetails : any = [];
  allUsers: any = [];
  BestiesList: any = [];
  SquadList: any = [];
  Fans: any = [];
  FansOf: any = [];

  constructor(
    private storageservice: StorageService,
    private common: CommonService,
    public socialSharing: SocialSharing,
  ) {

    this.searchControl = new FormControl();

   }

  ngOnInit() {

    this.listAllUsers();
    this.setFilteredItems();

    this.searchControl.valueChanges
    .pipe(debounceTime(700),
      distinctUntilChanged()
    )
    .subscribe(search => {
      this.searching = false;
      this.showCategory = false;
      this.searchTerm = search;
      this.setFilteredItems();
    });

  }

  ionViewWillEnter(){

    this.storageservice.storage.get('userDetails').then((val) => {
      this.userDetails = val;
      if (this.userDetails.userid!=undefined) {
        this.listAllUsers();
        this.toGetUsersCategory();
      }


    });

  }

  listAllUsers() {

    let params = {
      userid : this.userDetails.userid
    }

    this.common.listUsers('Listusers',params).subscribe((res:any) => {
      this.allUsers = res.details.name;
    });

  }

  onSearchInput(e) {
    this.searching = true;
    this.setFilteredItems();
    this.listAllUsers();
  }

  setFilteredItems() {
    this.allUsers = this.filterItems(this.searchTerm);
  }

  addToMatch(event,user) {
    this.common.navCtrl.navigateForward(['/before-match-invitation'], {queryParams: user});
  }

  filterItems(searchTerm) {
    return this.allUsers.filter(user => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  toListCategory(val) {
        if (val=='bestie') {

          this.common.presentLoading();
            this.allUsers = this.BestiesList ;
            this.common.presentToast('Your Bestie List is Successfully Fetched ...');

        } else if (val=='squad') {

          this.common.presentLoading();
            this.allUsers = this.SquadList;
            this.common.presentToast('Your Squad List is Successfully Fetched ...');

        } else if (val=='fan') {

          this.common.presentLoading();
            this.allUsers = this.Fans;
            this.common.presentToast('Your Fan List is Successfully Fetched ...');

        } else if (val=='fan-of') {

          this.common.presentLoading();
            this.allUsers = this.FansOf;
            this.common.presentToast('Your Fan Of List is Successfully Fetched ...');

        } else if (val=='invite') {

            this.toShare();

        } else if (val=='') {

          this.common.presentLoading();
          this.listAllUsers();
        }

  }

  toGetUsersCategory() {

    let params = {
      id : this.userDetails.userid
    }
    this.common.postMethod('Listbesties',params).then((res:any) => {
      if (res.status == true) {
        this.BestiesList = res.details.besties;
        this.SquadList = res.details.squad;
        this.Fans = res.details.fan;
        this.FansOf = res.details.fan_of;
      } else {
        this.common.presentToast(' Error Loading Categories ');
      }
    } , err => {
      console.log('Error:',err);

    });

  }

  toShare() {

    const msg = 'Share iMatch with your friends:';

    this.socialSharing.share(msg).then(() => {
    }).catch(() => {
    });

  }

}
