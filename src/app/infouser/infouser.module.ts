import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfouserPage } from './infouser.page';
import { FileSizeFormatPipe } from './file-size-format.pipe';
const routes: Routes = [
  {
    path: '',
    component: InfouserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfouserPage,FileSizeFormatPipe]
})
export class InfouserPageModule {}
