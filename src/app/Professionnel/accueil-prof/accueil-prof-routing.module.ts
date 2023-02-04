import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilProfPage } from './accueil-prof.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilProfPageRoutingModule {}
