import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntermediairePage } from './intermediaire.page';

const routes: Routes = [
  {
    path: '',
    component: IntermediairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntermediairePageRoutingModule {}
