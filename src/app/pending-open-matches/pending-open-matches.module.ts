import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PendingOpenMatchesPage } from './pending-open-matches.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PendingOpenMatchesPageRoutingModule } from './pending-open-matches-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PendingOpenMatchesPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PendingOpenMatchesPage }]),
  ],
  declarations: [PendingOpenMatchesPage]
})
export class PendingOpenMatchesPageModule {}
