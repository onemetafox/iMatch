import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
// import { StorageService } from './../services/storage.service';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.page.html',
  styleUrls: ['./search-users.page.scss'],
})
export class SearchUsersPage implements OnInit {

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

    // this.storage();

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

  async ionViewWillEnter(){
    await this.common.showLoader();

    let params = {
      userid : this.userDetails.userid
    }
    this.common.listUsers('Listusers',params).subscribe((res:any) => {
      this.allUsers = res.details.name;
      this.common.hideLoader();
    }, err => {
      this.common.hideLoader();
      console.log('err:',err);
    });
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.allUsers = this.filterItems(this.searchTerm);
  }

  filterItems(searchTerm) {
    return this.allUsers.filter(user => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  gotoVisitorsActivity(event,user){
    this.common.navCtrl.navigateForward(['/visitors-view-activity'], {queryParams: user});
  }

}