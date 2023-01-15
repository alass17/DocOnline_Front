import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocteursPageRoutingModule } from './docteurs-routing.module';

import { DocteursPage } from './docteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocteursPageRoutingModule
  ],
  declarations: [DocteursPage]
})
export class DocteursPageModule {}
