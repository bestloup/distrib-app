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
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabsmarchand/gestionstock',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsmarchand/gestionstock',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsmarchandPageRoutingModule {}
