import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalItemSlider } from './personal-item-slider.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalItemSlider
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalMatchPageRoutingModule {}
