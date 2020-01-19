import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from '../services/produit.service';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';


@Component({
  selector: 'app-gestionstock',
  templateUrl: 'gestionstock.page.html',
  styleUrls: ['gestionstock.page.scss'],
})
export class GestionstockPage implements OnInit {

  produits: Produit[];


  constructor(private produitService: ProduitService, public currentUser: CurrentUserService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe(res => {
      this.produits = res;
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
