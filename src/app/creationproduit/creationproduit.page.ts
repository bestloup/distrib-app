import { Produit, ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';

//import { TodoDetailsPage } from './../pages/todo-details/todo-details.page'; //..

@Component({
  selector: 'app-creationproduit',
  templateUrl: './creationproduit.page.html',
  styleUrls: ['./creationproduit.page.scss'],
})
export class CreationproduitPage implements OnInit {

  produit: Produit = {
    nom: '',
    idMarchand: '', //idCurrentUser
    quantite: 0,
    prix: '',
    grandeur: ''
  };

  produitId = null;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private produitService: ProduitService,
    private loadingController: LoadingController,
    public currentUser: CurrentUserService
  )
  {

  }

  ngOnInit() {
    this.produitId = this.route.snapshot.params['id'];
    if (this.produitId)  {
      this.loadProduit();
    }
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


  async loadProduit() {
    const loading = await this.loadingController.create({
      message: 'Loading Produit...'
    });
    await loading.present();

    this.produitService.getProduit(this.produitId).subscribe(res => {
      loading.dismiss();
      this.produit = res;
    });
  }


  async saveProduit() {
    console.log('ici')
    console.log(this.idCurrentUser)
    this.produit.idMarchand = this.idCurrentUser;

    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Produit...'
    });
    await loading.present();

    if (this.produitId) {
      this.produitService.updateProduit(this.produit, this.produitId).then(() => {
        loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestioncommande']);
      });
    } else {
      this.produitService.addProduit(this.produit).then(() => {
        loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestioncommande']);
      });
    }
  }
}
