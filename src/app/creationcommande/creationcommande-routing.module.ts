import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationcommandePage } from './creationcommande.page';

const routes: Routes = [
  {
    path: '',
    component: CreationcommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationcommandePageRoutingModule {}
