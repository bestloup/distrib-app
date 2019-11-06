import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'connexion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../connexion/connexion.module').then(m => m.ConnexionPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'inscription',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inscription/inscription.module').then(m => m.InscriptionPageModule)
          }
        ]
      },
      {
        path: 'mpaimment',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mpaimment/mpaimment.module').then(m => m.MpaimmentPageModule)
          }
        ]
      },
      {
        path: 'geolocation',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../geolocation/geolocation.module').then(m => m.GeolocationPageModule)
          }
        ]
      },
      {
        path: 'simple',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../simple/simple.module').then(m => m.SimplePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
