import { CommonService } from './../services/common.service';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.page.html',
  styleUrls: ['./squad-list.page.scss'],
})
export class SquadListPage implements OnInit {

  userDetails: any = [];
  mysquads: any = [];

  constructor(
    public storageservice: StorageService,
    private common: CommonService,
    ) { 
      
      this.storageservice.storage.get('userDetails').then((val) => {
        this.userDetails = val;
      });

    }

    ionViewWillEnter(){
      this.storageservice.storage.get('userDetails').then((val) => {

        this.userDetails = val ;

        if (this.userDetails.userid != '') {

          let params = {
            id : this.userDetails.userid
          }

          this.common.presentLoading();
          this.common.postMethod('Listbesties',params).then((res:any) => {

            this.mysquads = res.details.squad;

              if (this.mysquads.length==0) {

                  this.common.presentToast('You are having no `Squads` to show');

              } else {

                  this.common.presentToast('You are having '+ res.details.squad.length + ' squad list members to show');
              
                }

          }, err => {
            console.log('Error:',err);
          });

        } else {

          this.common.presentToast('Something Went Wrong !!!');

        }

      });


    }

  ngOnInit() {
  }

  ToUserSearch() {
    this.common.router.navigate(['/squad-search']);
  }

}
