import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'moyen-de-paimment', loadChildren: './moyen-de-paimment/moyen-de-paimment.module#MoyenDePaimmentPageModule' },
  { path: 'mpaimment', loadChildren: './mpaimment/mpaimment.module#MpaimmentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
