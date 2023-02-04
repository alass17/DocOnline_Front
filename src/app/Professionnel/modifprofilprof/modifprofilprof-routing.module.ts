import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifprofilprofPage } from './modifprofilprof.page';

const routes: Routes = [
  {
    path: '',
    component: ModifprofilprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifprofilprofPageRoutingModule {}
