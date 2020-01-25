import { Commande, CommandeService, ProduitCommande } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';

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
    prixTotal: 0
  };

  client: Users = {
    id: '',
    nom: '',
    prenom: '',
    photo: '',
    role: '',
    email: '',
    latitude: 0,
    longitude: 0,
    paypal: '',
    rcs: '',
    bio: ''
  };

  commandeId = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private commandeService: CommandeService,
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
    await loading.present();

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

    this.router.navigateByUrl('/tabsmarchand/gestioncommande');
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
