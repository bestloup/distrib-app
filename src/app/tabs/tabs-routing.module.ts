import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
        redirectTo: '/tabs/annonces',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/annonces',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
