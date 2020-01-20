import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationproduitPage } from './creationproduit.page';

const routes: Routes = [
  {
    path: '',
    component: CreationproduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationproduitPageRoutingModule {}
