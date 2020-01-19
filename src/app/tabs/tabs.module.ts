import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { TabsmarchandPage } from '../tabsmarchand/tabsmarchand.page'; //
import { TabsmarchandPageRoutingModule } from '../tabsmarchand/tabsmarchand-routing.module'; //

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TabsmarchandPageRoutingModule
  ],
  declarations: [TabsPage, TabsmarchandPage] //
})
export class TabsPageModule {}
