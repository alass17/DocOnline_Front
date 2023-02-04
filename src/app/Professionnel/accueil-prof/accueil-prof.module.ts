import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilProfPageRoutingModule } from './accueil-prof-routing.module';

import { AccueilProfPage } from './accueil-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilProfPageRoutingModule
  ],
  declarations: [AccueilProfPage]
})
export class AccueilProfPageModule {}
