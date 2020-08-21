import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService} from '../services/produit.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-desmarchand',
  templateUrl: './desmarchand.page.html',
  styleUrls: ['./desmarchand.page.scss'],
})
export class DesmarchandPage implements OnInit {
  produit: Produit[];
  marchandid = null;
  constructor(
    private produitService: ProduitService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.marchandid = this.route.snapshot.params['id'];
    this.produitService.getProduits().subscribe(res => {
      this.produit = res;
      for (let entry of this.produit) {
        if (entry.idMarchand == 'QzSsgLGy1ZQbGFWRb0867d5Vn0f2'){
        }
    }
    });
  }

}
