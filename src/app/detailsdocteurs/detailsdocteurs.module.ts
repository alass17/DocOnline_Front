import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsdocteursPageRoutingModule } from './detailsdocteurs-routing.module';

import { DetailsdocteursPage } from './detailsdocteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsdocteursPageRoutingModule
  ],
  declarations: [DetailsdocteursPage]
})
export class DetailsdocteursPageModule {}
