import { Commande, CommandeService, ProduitCommande } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { Produit, ProduitService } from './../services/produit.service';

//import { TodoDetailsPage } from './../pages/todo-details/todo-details.page'; //..

@Component({
  selector: 'app-creationcommande',
  templateUrl: './creationcommande.page.html',
  styleUrls: ['./creationcommande.page.scss'],
})
export class CreationcommandePage implements OnInit {

  commande: Commande = {
    id: '',
    idClient: '',
    idMarchand: '',
    dictProduits: {}
  };

  produitsencommande: string[];

  produits: Produit[];


  commandeId = null;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private commandeService: CommandeService,
    private loadingController: LoadingController,
    private produitService: ProduitService,
    public currentUser: CurrentUserService
  )
  {

  }

  ngOnInit() {
    this.commandeId = this.route.snapshot.params['id'];
    if (this.commandeId)  {
      this.loadCommande();
    }
    this.produitService.getProduits().subscribe(res => {
      this.produits = res;
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

  async loadCommande() {
    const loading = await this.loadingController.create({
      message: 'Chargement de la commande...'
    });
    await loading.present();

    this.commandeService.getCommande(this.commandeId).subscribe(res => {
      loading.dismiss();
      this.commande = res;
    });
  }

  async saveCommande() {
    console.log()
    console.log(this.produitsencommande)
    //this.commande.idMarchand = this.idCurrentUser;
    /*
    const loading = await this.loadingController.create({
      message: 'Sauvegarde de la commande...'
    });
    await loading.present();

    if (this.commandeId) {
      this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
        loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestionstock']);
      });
    } else {
      this.commandeService.addCommande(this.commande).then(() => {
        loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestionstock']);
      });
    }
    */
  }
}
