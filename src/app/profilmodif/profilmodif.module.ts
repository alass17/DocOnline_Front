import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilmodifPageRoutingModule } from './profilmodif-routing.module';

import { ProfilmodifPage } from './profilmodif.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilmodifPageRoutingModule,
    RouterModule
  ],
  declarations: [ProfilmodifPage]
})
export class ProfilmodifPageModule {}
