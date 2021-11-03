import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnGoingMatchDetailPage} from './ongoing-match-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OnGoingMatchDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnGoingMatchDetailPageRoutingModule {}
