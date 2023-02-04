import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifprofilprofPageRoutingModule } from './modifprofilprof-routing.module';

import { ModifprofilprofPage } from './modifprofilprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifprofilprofPageRoutingModule
  ],
  declarations: [ModifprofilprofPage]
})
export class ModifprofilprofPageModule {}
