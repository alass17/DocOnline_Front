import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionprofPage } from './inscriptionprof.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionprofPageRoutingModule {}
