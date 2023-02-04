import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezvousprofPageRoutingModule } from './rendezvousprof-routing.module';

import { RendezvousprofPage } from './rendezvousprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezvousprofPageRoutingModule
  ],
  declarations: [RendezvousprofPage]
})
export class RendezvousprofPageModule {}
