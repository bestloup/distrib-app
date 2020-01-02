import { Produit, ProduitsService } from './../services/produits.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

import { TodoDetailsPage } from './pages/todo-details.page';

@Component({
  selector: 'produits-details',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  produit: Produit = {
    nom: '',
    idMarchand: '', //idMarchandEnCours
    quantite: '',
    grandeur: ''
  };

  produitId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private produitsService: ProduitsService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.produitId = this.route.snapshot.params['id'];
    if (this.produitId)  {
      this.loadProduit();
    }
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

    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Produit...'
    });
    await loading.present();

    if (this.produitId) {
      this.produitsService.updateProduit(this.produit, this.produitId).then(() => {
        loading.dismiss();
        this.nav.back('accueilmarchand');
      });
    } else {
      this.produitsService.addProduit(this.produit).then(() => {
        loading.dismiss();
        this.nav.back('accueilmarchand');
      });
    }
  }

}
