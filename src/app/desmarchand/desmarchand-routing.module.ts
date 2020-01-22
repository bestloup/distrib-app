import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesmarchandPage } from './desmarchand.page';

const routes: Routes = [
  {
    path: '',
    component: DesmarchandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesmarchandPageRoutingModule {}
