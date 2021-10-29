import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingOpenMatchesPage } from './pending-open-matches.page';

const routes: Routes = [
  {
    path: '',
    component: PendingOpenMatchesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingOpenMatchesPageRoutingModule {}
