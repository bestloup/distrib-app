import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) }, //ligne initiale mais fonctionne comme celle en-dessous
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }, //fonctionne comme celle au-dessus
  
  { path: 'mpaimment', loadChildren: './mpaimment/mpaimment.module#MpaimmentPageModule' },
  { path: 'annonces', loadChildren: './annonces/annonces.module#AnnoncesPageModule' }, //vitrine
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'favoris', loadChildren: './favoris/favoris.module#FavorisPageModule' },
  { path: 'marchands', loadChildren: './marchands/marchands.module#MarchandsPageModule' },
  { path: 'desmarchand', loadChildren: './desmarchand/desmarchand.module#DesmarchandPageModule' },
  { path: 'initcommande', loadChildren: './initcommande/initcommande.module#InitcommandePageModule' },
  { path: 'confcommande', loadChildren: './confcommande/confcommande.module#ConfcommandePageModule' },
  { path: 'histcommande', loadChildren: './histcommande/histcommande.module#HistcommandePageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'paypal', loadChildren: './paypal/paypal.module#PaypalPageModule' },
  { path: 'picupload', loadChildren: './picupload/picupload.module#PicuploadPageModule' },

  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' }, //inutile
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' }, //inutile
  { path: 'role', loadChildren: './role/role.module#RolePageModule' }, //?
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, //inutile

  { path: 'profiluser', loadChildren: './profiluser/profiluser.module#ProfiluserPageModule' },
  { path: 'infouser', loadChildren: './infouser/infouser.module#InfouserPageModule' }, //inscription
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' }, //connexion
  { path: 'produits', loadChildren: './produits/produits.module#ProduitsPageModule' },
  { path: 'detailsProduct/:id', loadChildren: './pages/produit-details/produit-details.module#ProduitDetailsPageModule' },

  { path: 'gestioncommande', loadChildren: './gestioncommande/gestioncommande.module#GestioncommandePageModule' }, // gestion des commandes
  { path: 'gestionstock', loadChildren: './gestionstock/gestionstock.module#GestionstockPageModule' },   { path: 'mapperso', loadChildren: './mapperso/mapperso.module#MappersoPageModule' }
// gestion des stocks
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
