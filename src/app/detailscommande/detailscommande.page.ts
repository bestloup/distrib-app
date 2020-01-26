import { Commande, CommandeService, ProduitCommande } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { Produit, ProduitService } from './../services/produit.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-detailscommande',
  templateUrl: './detailscommande.page.html',
  styleUrls: ['./detailscommande.page.scss'],
})
export class DetailscommandePage {

  commande: Commande = {
    id: '',
    idClient: '',
    idMarchand: '',
    nomClient: '',
    accepted: false,
    payed: false,
    realized: false,
    dictProduits: [],
    prixTotal: 0,
    nomMarchand: '',
  };

  client: Users = {
    id: '',
    nom: '',
    prenom: '',
    photo: '',
    photoEtal: '',
    role: '',
    email: '',
    latitude: 0,
    longitude: 0,
    paypal: '',
    rcs: '',
    bio: false,
    biographie: ''
  };

  produit: Produit = {
    nom: '',
    idMarchand: '',
    quantiteStock: 0,
    prix: 0,
    grandeurPrix: '',
    grandeurStock: '',
    bio: false,
    origine: ''
  }

  commandeId = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private commandeService: CommandeService,
    private produitService: ProduitService,
    private usersService: UsersService,
    private currentUser: CurrentUserService,
    private loadingController: LoadingController
  )
  {
    this.commandeId = this.route.snapshot.params['id'];
    if (this.commandeId)  {
      this.loadCommande();
    }
  }



  async loadCommande() {
    const loading = await this.loadingController.create({
      message: 'Loading Commande..'
    });
    await loading.present();

    this.commandeService.getCommande(this.commandeId).subscribe((res: any) => {
      loading.dismiss();
      this.commande = res;
      console.log(this.commande);
      this.usersService.getUserDB(this.commande.idClient).subscribe((user: any) => {
        this.client = user;
        //console.log("lalalalalalneflczelkfjnefkezfj");
        //console.log(this.client);
      });
    });
  }

  async saveCommande() {

    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Commande...'
    });
    await loading.present(); // pour creation commande

    if (this.commandeId) {
      this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestioncommande');
      });
    } else {
      this.commandeService.addCommande(this.commande).then(() => { // add custom id
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestioncommande');
      });
    }
  }

  accept() {
    console.log("accept");
    console.log(this.commande);
    console.log("boucle for");

    var productTableInStock = [];

    for (let produit of this.commande.dictProduits) {
      console.log(produit);
      this.produitService.getProduit(produit.idProduit).pipe(first()).subscribe((product: any) => {
        this.produit = product;
        console.log(this.produit);
        var stockBackup = this.produit.quantiteStock;
        if (this.produit.grandeurStock == produit.grandeurPourPrix) {
          console.log(this.produit.quantiteStock);
          this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit;
          console.log(this.produit.quantiteStock);
        } else {
          if (this.produit.grandeurStock == 'kg' && produit.grandeurPourPrix == 'g'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit / 1000;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'g' && produit.grandeurPourPrix == 'kg'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit * 1000;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'L' && produit.grandeurPourPrix == 'mL'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit / 1000;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'mL' && produit.grandeurPourPrix == 'L'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit * 1000;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'm' && produit.grandeurPourPrix == 'cm'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit / 100;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'cm' && produit.grandeurPourPrix == 'm'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit * 100;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'm²' && produit.grandeurPourPrix == 'cm²'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit / 100;
            console.log(this.produit.quantiteStock);
          } else if (this.produit.grandeurStock == 'cm²' && produit.grandeurPourPrix == 'm²'){
            console.log(this.produit.quantiteStock);
            this.produit.quantiteStock = this.produit.quantiteStock - produit.quantiteAchatProduit * 100;
            console.log(this.produit.quantiteStock);
          }
        }
        if (this.produit.quantiteStock >= 0) {
          console.log('update du stock acceptée pour le produit' + this.produit.nom);
          this.produitService.updateProduit(this.produit, produit.idProduit);
          console.log(productTableInStock);
          productTableInStock.push(produit);
          console.log(productTableInStock);
        } else {
          this.produit.quantiteStock = stockBackup;
          console.log('erreur stock insuffisant ... je supprime le produit correspondant de la commande');
        }
      });

    }


    this.commande.accepted = true;
    this.commande.dictProduits = productTableInStock;
    this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
      console.log(this.commande);
      this.router.navigateByUrl('/tabsmarchand/gestioncommande');
    });
  }

  deliver() {
    console.log("deliver");
    console.log(this.commande);
    this.commande.realized = true;
    this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
      console.log(this.commande);
      this.router.navigateByUrl('/tabsmarchand/gestioncommande');
    });
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
