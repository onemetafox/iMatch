import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

import { PersonalMatchPageRoutingModule } from './personal-item-slider-routing.module';

import { PersonalItemSlider} from './personal-item-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonalMatchPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [PersonalItemSlider]
})
export class PersonalMatchPageModule {}
