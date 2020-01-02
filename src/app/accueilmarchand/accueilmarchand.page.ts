import { Component, OnInit } from '@angular/core';
import { Produit, ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-accueilmarchand',
  templateUrl: 'accueilmarchand.page.html',
  styleUrls: ['accueilmarchand.page.scss'],
})
export class AccueilmarchandPage implements OnInit {

  produits: Produit[];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit() {
    this.produitsService.getProduits().subscribe(res => {
      this.produits = res;
    });
  }

  remove(item) {
    this.produitsService.removeProduit(item.id);
  }
}
