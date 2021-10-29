import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnGoingMatchDetailPage, PopoverComponent, SenderPopoverComponent, ReceiverPopoverComponent,
          SendMatchComponent, RevealedCountComponent, CountComponent } from './ongoing-match-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OnGoingMatchDetailPage
  },
  {
    path: '',
    component: PopoverComponent,
  },
  {
    path: '',
    component: SenderPopoverComponent,
  },
  {
    path: '',
    component: ReceiverPopoverComponent,
  },
  {
    path: '',
    component: SendMatchComponent,
  },
  {
    path: '',
    component: RevealedCountComponent,
  },
  {
    path: '',
    component: CountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnGoingMatchDetailPageRoutingModule {}
