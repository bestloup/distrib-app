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
            loadChildren: '../gestioncommande/gestioncommande.module#GestioncommandePageModule'
          }
        ]
      },

      {
        path: 'gestionstock',
        children: [
          {
            path: '',
            loadChildren: '../gestionstock/gestionstock.module#GestionstockPageModule'
          }
        ]
      },

      {
        path: 'profilmarchand',
        children: [
          {
            path: '',
            loadChildren: '../profilmarchand/profilmarchand.module#ProfilmarchandPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabsmarchand/gestioncommande',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsmarchand/gestioncommande',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsmarchandPageRoutingModule {}
