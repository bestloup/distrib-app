import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsmarchandPage } from './tabsmarchand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsmarchandPage]
})
export class TabsmarchandPageModule {}
