import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitDetailsPage } from './produit-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitDetailsPageRoutingModule {}
