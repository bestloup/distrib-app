import { Produit, ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { PickerController } from '@ionic/angular';

//import { TodoDetailsPage } from './../pages/todo-details/todo-details.page'; //..

@Component({
  selector: 'app-creationproduit',
  templateUrl: './creationproduit.page.html',
  styleUrls: ['./creationproduit.page.scss'],
})
export class CreationproduitPage {

  produit: Produit = {
    nom: '',
    idMarchand: '', //idCurrentUser
    quantiteStock: 0,
    prix: 0,
    grandeurPrix: '',
    grandeurStock: '',
    bio: false,
    origine: ''
  };

  produitId = null;

  constructor
  (
    public pickerCtrl: PickerController,
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private produitService: ProduitService,
    private loadingController: LoadingController,
    private currentUser: CurrentUserService
  )
  {
    this.produitId = this.route.snapshot.params['id'];
    if (this.produitId)  {
      this.loadProduit();
    }
    console.log("here");
    console.log(this.user);
    if (this.user.role == "marchand") {
      this.produit.bio = this.user.bio;
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
        this.router.navigate(['/tabsmarchand/gestionstock']);
      });
    } else {
      this.produitService.addProduit(this.produit).then(() => {
        loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestionstock']);
      });
    }
  }

  range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
  }




  priceColumnOptions: Number[][] = [
    this.range(0,100),
    this.range(0,99),
    [
      'kg',
      'g',
      'L',
      'mL',
      'unité',
      'm',
      'cm',
      'm²',
      'cm²'
    ]
  ];

  stockColumnOptions: Number[][] = [
    this.range(0,1000),
    this.range(0,9),
    [
      'kg',
      'g',
      'L',
      'mL',
      'unités',
      'm',
      'cm',
      'm²',
      'cm²'
    ]
  ];



  async openPickerForQuantity(columnOptions) { //
    //const pickerController = document.querySelector('ion-picker-controller');
    const picker = await this.pickerCtrl.create({
    //const picker = await pickerController.create({
      columns: this.getColumnsForQuantity(columnOptions),
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'/*,
          handler: (value) => {
            return 0;
          }*/
        },
        {
          text: 'Confirmer',
          handler: (value: any) => {
            console.log(value);
            var nbString = value.entier.text.toString() + '.' + value.decimal.text.toString();
            var nbNumber = parseFloat(nbString);
            console.log(nbNumber);
            this.produit.quantiteStock = nbNumber;
            this.produit.grandeurStock = value.grandeur.text;
            console.log("ici");
            console.log(this.produit)
            //return nbNumber;
          }
        }
      ]
    });

    await picker.present();
  }

  getColumnsForQuantity(columnOptions) {
    let columns = [];
    columns.push({
      name: 'entier',
      options: this.getColumnOptions(0, 1001, columnOptions)
    });

    columns.push({
      name: 'virgule',
      options: [{
        text: ',',
        value: 1
      }]
    });

    columns.push({
      name: 'decimal',
      options: this.getColumnOptions(1, 10, columnOptions)
    });

    columns.push({
      name: 'grandeur',
      options: this.getColumnOptions(2, 9, columnOptions)
    });


    return columns;
  }





  async openPickerForPrice(columnOptions) { //
    //const pickerController = document.querySelector('ion-picker-controller');
    const picker = await this.pickerCtrl.create({
    //const picker = await pickerController.create({
      columns: this.getColumnsForPrice(columnOptions),
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'/*,
          handler: (value) => {
            return 0;
          }*/
        },
        {
          text: 'Confirmer',
          handler: (value: any) => {
            console.log(value);
            var nbString = value.entier.text.toString() + '.' + value.decimal.text.toString();
            var nbNumber = parseFloat(nbString);
            console.log(nbNumber);
            this.produit.prix = nbNumber;
            this.produit.grandeurPrix = value.grandeur.text;
            console.log("ici");
            console.log(this.produit)
            //return nbNumber;
          }
        }
      ]
    });

    await picker.present();
  }

  getColumnsForPrice(columnOptions) {
    let columns = [];
    columns.push({
      name: 'entier',
      options: this.getColumnOptions(0, 101, columnOptions)
    });

    columns.push({
      name: 'virgule',
      options: [{
        text: ',',
        value: 1
      }]
    });

    columns.push({
      name: 'decimal',
      options: this.getColumnOptions(1, 100, columnOptions)
    });

    columns.push({
      name: 'monnaie',
      options: [{
        text: '€ /',
        value: 3
      }]
    });

    columns.push({
      name: 'grandeur',
      options: this.getColumnOptions(2, 9, columnOptions)
    });


    return columns;
  }



  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }
}
