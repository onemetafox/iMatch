import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

import { OnGoingMatchDetailPageRoutingModule } from './ongoing-match-detail-routing.module';

import { OnGoingMatchDetailPage } from './ongoing-match-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OnGoingMatchDetailPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [OnGoingMatchDetailPage]
})
export class OnGoingMatchDetailPageModule {}
