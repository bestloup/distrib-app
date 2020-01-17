import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'mpaimment', loadChildren: './mpaimment/mpaimment.module#MpaimmentPageModule' },
  { path: 'annonces', loadChildren: './annonces/annonces.module#AnnoncesPageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'profiluser', loadChildren: './profiluser/profiluser.module#ProfiluserPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' },
  { path: 'favoris', loadChildren: './favoris/favoris.module#FavorisPageModule' },
  { path: 'marchands', loadChildren: './marchands/marchands.module#MarchandsPageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'desmarchand', loadChildren: './desmarchand/desmarchand.module#DesmarchandPageModule' },
  { path: 'initcommande', loadChildren: './initcommande/initcommande.module#InitcommandePageModule' },
  { path: 'confcommande', loadChildren: './confcommande/confcommande.module#ConfcommandePageModule' },
  { path: 'histcommande', loadChildren: './histcommande/histcommande.module#HistcommandePageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'formulairebdd', loadChildren: './formulairebdd/formulairebdd.module#FormulairebddPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'creationmarchand', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'geo', loadChildren: './geo/geo.module#GeoPageModule' },
  { path: 'paypal', loadChildren: './paypal/paypal.module#PaypalPageModule' },
  { path: 'detailsProduct', loadChildren: './pages/produit-details/produit-details.module#ProduitDetailsPageModule' },
  { path: 'accueilmarchand', loadChildren: './accueilmarchand/accueilmarchand.module#AccueilmarchandPageModule' },
  { path: 'produits', loadChildren: './produits/produits.module#ProduitsPageModule' },
  { path: 'picupload', loadChildren: './picupload/picupload.module#PicuploadPageModule' },
  { path: 'infouser', loadChildren: './infouser/infouser.module#InfouserPageModule' },  { path: 'tabsmarchand', loadChildren: './tabsmarchand/tabsmarchand.module#TabsmarchandPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
