import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdvdetailsPage } from './rdvdetails.page';

const routes: Routes = [
  {
    path: '',
    component: RdvdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdvdetailsPageRoutingModule {}
