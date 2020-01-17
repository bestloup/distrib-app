import { Produit, ProduitsService } from './../services/produits.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { NavController, LoadingController } from '@ionic/angular';
import { MarchandEnCoursService } from './../services/marchandencours.service';

import { TodoDetailsPage } from './../pages/todo-details/todo-details.page'; //..

@Component({
  selector: 'produits-details',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  produit: Produit = {
    nom: '',
    idMarchand: '', //idMarchandEnCours
    quantite: 0,
    grandeur: ''
  };

  produitId = null;

  constructor(private route: ActivatedRoute, private router: Router, private nav: NavController, private produitsService: ProduitsService, private loadingController: LoadingController, public marchandEnCoursService: MarchandEnCoursService) { }

  ngOnInit() {
    this.produitId = this.route.snapshot.params['id'];
    if (this.produitId)  {
      this.loadProduit();
    }
  }

  get idMarchandEnCours():string { //marchandEnCours
    return this.marchandEnCoursService.idMarchandEnCours;
  }

  set idMarchandEnCours(value: string) { //marchandEnCours
    this.marchandEnCoursService.idMarchandEnCours = value;
  }

  async loadProduit() {
    const loading = await this.loadingController.create({
      message: 'Loading Produit...'
    });
    await loading.present();

    this.produitsService.getProduit(this.produitId).subscribe(res => {
      loading.dismiss();
      this.produit = res;
    });
  }

  async saveProduit() {

    this.produit.idMarchand = this.idMarchandEnCours

    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Produit...'
    });
    await loading.present();

    if (this.produitId) {
      this.produitsService.updateProduit(this.produit, this.produitId).then(() => {
        loading.dismiss();
        //this.nav.goForward('accueilmarchand/123');
        //this.nav.back(); //error here
        this.router.navigate(['/accueilmarchand']);
        //this.idMarchand = this.route.snapshot.paramMap.get('id');
      });
    } else {
      this.produitsService.addProduit(this.produit).then(() => {
        loading.dismiss();
        this.router.navigate(['/accueilmarchand']);
        //this.nav.goForward('accueilmarchand/123');
        //this.nav.back(); //error here
        //this.idMarchand = this.route.snapshot.paramMap.get('id');
      });
    }
  }
}
