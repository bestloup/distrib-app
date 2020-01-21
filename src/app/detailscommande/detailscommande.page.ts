import { Commande, CommandeService, ProduitCommande } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detailscommande',
  templateUrl: './detailscommande.page.html',
  styleUrls: ['./detailscommande.page.scss'],
})
export class DetailscommandePage implements OnInit {

  commande: Commande = {
    id: '',
    idClient: '',
    idMarchand: '',
    dictProduits: []
  };


  commandeId = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nav: NavController,
    private commandeService: CommandeService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.commandeId = this.route.snapshot.params['id'];
    if (this.commandeId)  {
      this.loadCommande();
    }
  }

  async loadCommande() {
    const loading = await this.loadingController.create({
      message: 'Loading Commande..'
    });
    await loading.present();

    this.commandeService.getCommande(this.commandeId).subscribe((res: any) => {
      loading.dismiss();
      this.commande = res;
    });
  }

  async saveCommande() {

    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Commande...'
    });
    await loading.present();

    if (this.commandeId) {
      this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestioncommande');
      });
    } else {
      this.commandeService.addCommande(this.commande).then(() => { // add custom id
        loading.dismiss();
        this.router.navigateByUrl('/tabsmarchand/gestioncommande');
      });
    }
  }

}
