import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurStoryPage } from './our-story.page';

const routes: Routes = [
  {
    path: '',
    component: OurStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurStoryPageRoutingModule {}
