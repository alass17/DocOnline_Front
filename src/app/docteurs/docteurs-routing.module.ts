import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocteursPage } from './docteurs.page';

const routes: Routes = [
  {
    path: '',
    component: DocteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocteursPageRoutingModule {}
