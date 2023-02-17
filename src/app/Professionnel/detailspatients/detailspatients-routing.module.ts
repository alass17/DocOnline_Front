import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailspatientsPage } from './detailspatients.page';

const routes: Routes = [
  {
    path: '',
    component: DetailspatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailspatientsPageRoutingModule {}
