import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrendrerdvPage } from './prendrerdv.page';

const routes: Routes = [
  {
    path: '',
    component: PrendrerdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrendrerdvPageRoutingModule {}
