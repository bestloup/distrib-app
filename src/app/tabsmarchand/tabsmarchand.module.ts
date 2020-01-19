import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsmarchandPageRoutingModule } from './tabsmarchand-routing.module';
import { TabsmarchandPage } from './tabsmarchand.page';
//import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsmarchandPageRoutingModule//, RouterModule.forChild(routes)
  ],
  declarations: []//[TabsmarchandPage]
})
export class TabsmarchandPageModule {}

/*
const routes: Routes = [
  {
    path: '',
    component: TabsmarchandPage
  }
];
*/
