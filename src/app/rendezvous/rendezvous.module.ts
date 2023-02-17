import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezvousPageRoutingModule } from './rendezvous-routing.module';

import { RendezvousPage } from './rendezvous.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezvousPageRoutingModule,
  ],
  declarations: [RendezvousPage]
})
export class RendezvousPageModule {}
