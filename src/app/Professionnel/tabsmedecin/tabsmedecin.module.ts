import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsmedecinPageRoutingModule } from './tabsmedecin-routing.module';

import { TabsmedecinPage } from './tabsmedecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsmedecinPageRoutingModule
  ],
  declarations: [TabsmedecinPage]
})
export class TabsmedecinPageModule {}
