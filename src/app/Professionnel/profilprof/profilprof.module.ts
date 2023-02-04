import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilprofPageRoutingModule } from './profilprof-routing.module';

import { ProfilprofPage } from './profilprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilprofPageRoutingModule
  ],
  declarations: [ProfilprofPage]
})
export class ProfilprofPageModule {}
