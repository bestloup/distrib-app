import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsmarchandPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabsmarchand',
    component: TabsmarchandPage,
    children: [
      {
        path: 'GestionCommande',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../GestionCommande/GestionCommande.module').then(m => m.GestionCommandePageModule)
          }
        ]
      },
      {
        path: 'GestionStock',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../GestionStock/GestionStock.module').then(m => m.GestionStockPageModule)
          }
        ]
      },
      {
        path: 'Parametres',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Parametres/Parametres.module').then(m => m.ParametresPageModule)
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
