import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilprofPage } from './profilprof.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilprofPageRoutingModule {}
