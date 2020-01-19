import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsmarchandPage } from './tabsmarchand.page';

const routes: Routes = [
  {
    path: 'tabsmarchand',
    component: TabsmarchandPage,
    children: [
      {
        path: 'gestioncommande',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gestioncommande/gestioncommande.module').then(m => m.GestioncommandePageModule)
          }
        ]
      },
      {
        path: 'gestionstock',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gestionstock/gestionstock.module').then(m => m.GestionstockPageModule)
          }
        ]
      },
      {
        path: 'parametres',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../parametres/parametres.module').then(m => m.ParametresPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
