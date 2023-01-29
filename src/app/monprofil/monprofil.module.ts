import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonprofilPageRoutingModule } from './monprofil-routing.module';

import { MonprofilPage } from './monprofil.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonprofilPageRoutingModule,
    RouterModule
  ],
  declarations: [MonprofilPage]
})
export class MonprofilPageModule {}
