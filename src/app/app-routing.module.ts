import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'mpaimment', loadChildren: './mpaimment/mpaimment.module#MpaimmentPageModule' },
  { path: 'annonces', loadChildren: './annonces/annonces.module#AnnoncesPageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' }

<<<<<<< HEAD
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'mpaimment', loadChildren: './mpaimment/mpaimment.module#MpaimmentPageModule' },
  { path: 'annonces', loadChildren: './annonces/annonces.module#AnnoncesPageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'profiluser', loadChildren: './profiluser/profiluser.module#ProfiluserPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> be8b57325ad08daff30bf150f127dcdc894f1550
