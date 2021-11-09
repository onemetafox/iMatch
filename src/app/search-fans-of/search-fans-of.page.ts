import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
// import { StorageService } from './../services/storage.service';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router';
// import { PopoverController } from '@ionic/angular';
// import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-search-fans-of',
  templateUrl: './search-fans-of.page.html',
  styleUrls: ['./search-fans-of.page.scss'],
})
export class SearchFansOfPage implements OnInit {

  public searchTerm: string = "";
  public searchControl: FormControl;
  searching: any = false;
  userDetails : any = [];
  public allUsers: any =[];

  constructor(
    // private storageservice: StorageService,
    private common: CommonService,
  ) { 

    this.searchControl = new FormControl();
    this.common.route.queryParams.subscribe(resp => {
      this.userDetails = resp;
  });

  }

  ngOnInit() {
    this.setFilteredItems();
    this.searchControl.valueChanges
    .pipe(debounceTime(700),
      distinctUntilChanged()
    )
    .subscribe(search => {
      this.searching = false;
      this.searchTerm = search;
      this.setFilteredItems();
    });

  }

  ionViewWillEnter(){

    this.common.showLoader();

    let params = {
      userid : this.userDetails.userid
    }
    this.common.listUsers('Listusers',params).subscribe((res:any) => {
      this.allUsers = res.details.name;
      this.common.hideLoader();
    }, err => {
    });

  }
  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.allUsers = this.filterItems(this.searchTerm);
  }

  public addToList(event,name,user) {
    
    if( user.userid != '' ) {
      let params = {
        from : this.userDetails.userid,
        to : user.userid,
        category : 'fan_of'
      }
      this.common.postMethod('add_fan',params).then((res:any) => {
        if(res.status == true) {
          this.common.presentToast(name + ' is successfully added to your fans of list ...');
          this.common.navCtrl.navigateForward(['fans-of'], {queryParams: this.userDetails});
        } else if (res.message == "Already added ") {
          this.common.presentToast(name + ' is already added to your fans of list ...');
        }
      });
    } else {
      /////
    }

  }

  filterItems(searchTerm) {
    return this.allUsers.filter(user => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
