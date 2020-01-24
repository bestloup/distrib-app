import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilmarchandPage } from './profilmarchand.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilmarchandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilmarchandPage]
})
export class ProfilmarchandPageModule {}
