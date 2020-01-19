import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsmarchandPage } from './tabsmarchand.page';

const routes: Routes = [
  {
    path: 'tabsmarchand',
    component: TabsmarchandPage,
    children: [
      /*
      {
        path: 'GestionCommande',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../GestionCommande/GestionCommande.module').then(m => m.GestionCommandePageModule)
          }
        ]
      },*/


      {
        path: 'accueilmarchand',
        children: [
          {
            path: '',
            loadChildren: '../accueilmarchand/accueilmarchand.module#AccueilmarchandPageModule'
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


      /*
      {
        path: 'accueilmarchand',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../accueilmarchand/accueilmarchand.module').then(m => m.AccueilmarchandPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      }*/
      {
        path: '',
        redirectTo: '/tabsmarchand/accueilmarchand',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsmarchand/accueilmarchand',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsmarchandPageRoutingModule {}
