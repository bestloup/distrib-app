import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarchandDetailsPage } from './marchand-details.page';

const routes: Routes = [
  {
    path: '',
    component: MarchandDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarchandDetailsPageRoutingModule {}
