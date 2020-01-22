import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService} from '../services/produit.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-initcommande',
  templateUrl: './initcommande.page.html',
  styleUrls: ['./initcommande.page.scss'],
})
export class InitcommandePage implements OnInit {

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
      //console.log('on a fait la requetes :' + this.marche);
      for (let entry of this.produit) {
        //console.log(entry.nom + '   ' + entry.longitude + ' ' + entry.latitude ); // 1, "string", false
        if (entry.idMarchand == 'QzSsgLGy1ZQbGFWRb0867d5Vn0f2'){
          console.log(entry)
        }
    }
    });
  }

}
