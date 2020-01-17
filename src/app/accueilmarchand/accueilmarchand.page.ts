import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from '../services/produit.service';
import { MarchandEnCoursService } from './../services/marchandencours.service';


@Component({
  selector: 'app-accueilmarchand',
  templateUrl: 'accueilmarchand.page.html',
  styleUrls: ['accueilmarchand.page.scss'],
})
export class AccueilmarchandPage implements OnInit {

  produits: Produit[];
  //marchand: Marchand;


  constructor(private produitService: ProduitService, public marchandEnCoursService: MarchandEnCoursService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe(res => {
      this.produits = res;
    });

    console.log("accueilmarchand\n" + this.idMarchandEnCours)
  }

  remove(item) {
    this.produitService.removeProduit(item.id);
  }

  get idMarchandEnCours():string { //marchandEnCours
    return this.marchandEnCoursService.idMarchandEnCours;
  }

  set idMarchandEnCours(value: string) { //marchandEnCours
    this.marchandEnCoursService.idMarchandEnCours = value;
  }

}
