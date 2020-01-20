import { Produit, ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detailsproduit',
  templateUrl: './detailsproduit.page.html',
  styleUrls: ['./detailsproduit.page.scss'],
})
export class DetailsproduitPage implements OnInit {

  produit: Produit = {
    nom: '',
    idMarchand: '',
    quantite: 0,
    grandeur: '',
    prix: ''
  };

  produitId = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private produitService: ProduitService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.produitId = this.route.snapshot.params['id'];
    if (this.produitId)  {
      this.loadProduit();
    }
  }

  async loadProduit() {
    const loading = await this.loadingController.create({
      message: 'Loading Produit..'
    });
    await loading.present();

    this.produitService.getProduit(this.produitId).subscribe(res => {
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
      this.produitService.updateProduit(this.produit, this.produitId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestionstock');
      });
    } else {
      this.produitService.addProduit(this.produit).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestionstock');
      });
    }
  }

}
