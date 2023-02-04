import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezvousprofPage } from './rendezvousprof.page';

const routes: Routes = [
  {
    path: '',
    component: RendezvousprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezvousprofPageRoutingModule {}
