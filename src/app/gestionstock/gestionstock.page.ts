import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from './../services/produit.service';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-gestionstock',
  templateUrl: 'gestionstock.page.html',
  styleUrls: ['gestionstock.page.scss'],
})
export class GestionstockPage {

  produits: Produit[];

  constructor
  (
    private produitService: ProduitService,
    private loadingController: LoadingController,
    public currentUser: CurrentUserService
  )
  {
    this.loadProduits();
  }


  async loadProduits() {
    const loading = await this.loadingController.create({
      message: 'Chargement des produits disponibles...'
    });
    await loading.present();
    this.produitService.getProduits().subscribe(res => {
      this.produits = res;
      loading.dismiss();
    });
  }

  remove(item) {
    this.produitService.removeProduit(item.id);
  }

  get user():Users {
    return this.currentUser.user;
  }

  set user(value: Users) {
    this.currentUser.user = value;
  }

  get idCurrentUser():string {
    return this.currentUser.idCurrentUser;
  }

  set idCurrentUser(value: string) {
    this.currentUser.idCurrentUser = value;
  }

}
