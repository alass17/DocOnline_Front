import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailspatientsPageRoutingModule } from './detailspatients-routing.module';

import { DetailspatientsPage } from './detailspatients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailspatientsPageRoutingModule
  ],
  declarations: [DetailspatientsPage]
})
export class DetailspatientsPageModule {}
