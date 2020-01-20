import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreationcommandePage } from './creationcommande.page';

//import { CreationcommandeRoutingModule } from './creationcommande-routing.module';

const routes: Routes = [
  {
    path: '',
    component: CreationcommandePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreationcommandePage]
})
export class CreationcommandePageModule {}
