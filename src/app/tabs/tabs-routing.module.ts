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
        path: 'annonces',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../annonces/annonces.module').then(m => m.AnnoncesPageModule)
          }
        ]
      },
      {
        path: 'marchands',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../marchands/marchands.module').then(m => m.MarchandsPageModule)
          }
        ]
      },
      {
        path: 'coursiers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../coursiers/coursiers.module').then(m => m.CoursiersPageModule)
          }
        ]
      },
      {
        path: 'favoris',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favoris/favoris.module').then(m => m.FavorisPageModule)
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
