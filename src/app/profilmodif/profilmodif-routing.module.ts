import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilmodifPage } from './profilmodif.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilmodifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilmodifPageRoutingModule {}
