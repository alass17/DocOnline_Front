import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdvdetailsPageRoutingModule } from './rdvdetails-routing.module';

import { RdvdetailsPage } from './rdvdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdvdetailsPageRoutingModule
  ],
  declarations: [RdvdetailsPage]
})
export class RdvdetailsPageModule {}
