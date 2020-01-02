import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccueilmarchandPage } from './accueilmarchand.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilmarchandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccueilmarchandPage]
})
export class AccueilmarchandPageModule {}
