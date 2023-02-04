import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrendrerdvPageRoutingModule } from './prendrerdv-routing.module';

import { PrendrerdvPage } from './prendrerdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrendrerdvPageRoutingModule
  ],
  declarations: [PrendrerdvPage]
})
export class PrendrerdvPageModule {}
