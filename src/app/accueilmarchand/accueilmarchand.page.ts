import { Component, OnInit } from '@angular/core';
import { Produit, ProduitsService } from '../services/produits.service';
import { MarchandEnCoursService } from './../services/marchandencours.service';


@Component({
  selector: 'app-accueilmarchand',
  templateUrl: 'accueilmarchand.page.html',
  styleUrls: ['accueilmarchand.page.scss'],
})
export class AccueilmarchandPage implements OnInit {

  produits: Produit[];
  //marchand: Marchand;


  constructor(private produitsService: ProduitsService, public marchandEnCoursService: MarchandEnCoursService) { }

  ngOnInit() {
    this.produitsService.getProduits().subscribe(res => {
      this.produits = res;
    });

    console.log("accueilmarchand\n" + this.idMarchandEnCours)
  }

  remove(item) {
    this.produitsService.removeProduit(item.id);
  }

  get idMarchandEnCours():string { //marchandEnCours
    return this.marchandEnCoursService.idMarchandEnCours;
  }

  set idMarchandEnCours(value: string) { //marchandEnCours
    this.marchandEnCoursService.idMarchandEnCours = value;
  }

}
