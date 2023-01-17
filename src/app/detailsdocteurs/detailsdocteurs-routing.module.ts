import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsdocteursPage } from './detailsdocteurs.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsdocteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsdocteursPageRoutingModule {}
