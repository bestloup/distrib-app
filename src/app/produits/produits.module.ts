import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProduitsPage } from './produits.page';

import { ProduitsRoutingModule } from './produits-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ProduitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProduitsPage]
})
export class ProduitsPageModule {}
