import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntermediairePageRoutingModule } from './intermediaire-routing.module';

import { IntermediairePage } from './intermediaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntermediairePageRoutingModule
  ],
  declarations: [IntermediairePage]
})
export class IntermediairePageModule {}
