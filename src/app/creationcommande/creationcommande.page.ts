import { Commande, CommandeService, ProduitCommande } from './../services/commande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { Produit, ProduitService } from './../services/produit.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { isEmpty, first } from 'rxjs/operators';
import { PickerController } from '@ionic/angular';



//import { TodoDetailsPage } from './../pages/todo-details/todo-details.page'; //..

@Component({
  selector: 'app-creationcommande',
  templateUrl: './creationcommande.page.html',
  styleUrls: ['./creationcommande.page.scss'],
})
export class CreationcommandePage {

  commande: Commande = {
    id: '',
    idClient: '',
    idMarchand: '',
    nomClient: '',
    accepted: false,
    payed: false,
    realized: false,
    dictProduits: [],
    prixTotal: 0
  };

  marchand: Users = {
    id: '',
    nom: '',
    prenom: '',
    photo: '',
    photoEtal: '',
    role: '',
    email: '',
    latitude: 0,
    longitude: 0,
    paypal: '',
    rcs: '',
    bio: false,
    biographie: ''
  };

  produitsencommande: string[];

  produits: Produit[];

  produitsDisponibles: ProduitCommande[]; //{nomProduit: "Patate"} //= []



  commandeId = null;
  marchandid = null;
  constructor
  (
    public afAuth: AngularFireAuth,
    public pickerCtrl: PickerController,
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private commandeService: CommandeService,
    private loadingController: LoadingController,
    private produitService: ProduitService,
    private usersService: UsersService,
    public currentUser: CurrentUserService
  )
  {

    //this.router.navigateByUrl('/tabsmarchand/creationcommande/' + this.route.snapshot.params['id'];);

    this.loadAvailableProducts();



    if (this.commandeId)  {
      this.loadCommande();
    }

    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Erreur : non connecté');
      } else {
        console.log('Connecté: ' + auth.uid);
        this.currentUser.subscribeToCurrentUser(auth.uid).pipe(first()).subscribe((user :any) => {
          console.log("je charge le user, promis");
          console.log(user);
          this.user = user;
        });
      }
    });
  }



  async loadAvailableProducts() {
    const loading = await this.loadingController.create({
      message: 'Chargement des produits disponibles...'
    });
    await loading.present();

    this.marchandid = this.route.snapshot.params['id'];

    this.usersService.getUserDB(this.marchandid).pipe(first()).subscribe((user: any) => {
      this.marchand = user;

      this.produitService.getProduits().pipe(first()).subscribe(res => {
        console.log("je charge les produits, promis");
        this.produits = res;
        this.produitsDisponibles = [];
        for (let produit of this.produits) { // est-ce que je mets ce for à l'intérieur ou à l'extérieur du subscribe ? j'ai peur que si le marchand met un nouveau produit dans la base, ça rechange et nique la commande en cours du client...
          if (produit.idMarchand == this.marchandid && this.marchandid != null) {
            //console.log(produit);
            this.produitsDisponibles.push({
              idProduit: produit.id,
              nomProduit: produit.nom,
              quantiteAchatProduit: 0,
              prixProduitParGrandeur: produit.prix,
              grandeurPourPrix: produit.grandeurPrix
            });
          }
        }
        console.log("je charge les produits dispo, promis");
        loading.dismiss();
      });
    });
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



  defaultColumnOptions: Number[][] = [
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  ];

  multiColumnOptions: Number[][] = [
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  ];

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) { //
    //const pickerController = document.querySelector('ion-picker-controller');
    const picker = await this.pickerCtrl.create({
    //const picker = await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: (value) => {
            console.log(`Got Value ${value}`);
            console.log(value);
          }
        }
      ]
    });

    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

  async openPickerForOrderQuantity(numColumns = 1, numOptions = 20, columnOptions = this.defaultColumnOptions, grandeur, index) { //
    //const pickerController = document.querySelector('ion-picker-controller');
    const picker = await this.pickerCtrl.create({
    //const picker = await pickerController.create({
      columns: this.getColumnsForNumber(numColumns, numOptions, columnOptions, grandeur),
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
            var quantityString = value.entier.text.toString() + '.' + value.decimal.text.toString();
            var quantityNumber = parseFloat(quantityString);
            console.log(quantityNumber);
            this.produitsDisponibles[index].quantiteAchatProduit = quantityNumber;
            console.log("ici");
            console.log(this.produitsDisponibles[index])
            //return quantityNumber;
          }
        }
      ]
    });

    await picker.present();
  }

  getColumnsForNumber(numColumns, numOptions, columnOptions, grandeur) {
    let columns = [];
    columns.push({
      name: `entier`,
      options: this.getColumnOptions(0, 21, columnOptions)
    });

    columns.push({
      name: 'virgule',
      options: [{
        text: ',',
        value: 1
      }]
    });

    columns.push({
      name: `decimal`,
      options: this.getColumnOptions(1, 10, columnOptions)
    });

    columns.push({
      name: 'grandeur',
      options: [{
        text: grandeur,
        value: 1
      }]
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



  async loadCommande() {
    const loading = await this.loadingController.create({
      message: 'Chargement de la commande...'
    });
    await loading.present();

    this.commandeService.getCommande(this.commandeId).subscribe(res => {
      loading.dismiss();
      this.commande = res;
    });
  }

  async saveCommande() {
    console.log("\n\n\nPotato\n\n");
    console.log(this.produitsDisponibles);
    var productTable = [];
    //dictProduits
    var prixTotal = 0;
    for (let produit of this.produitsDisponibles) {
      if (produit.quantiteAchatProduit != 0) {
        productTable.push(produit);
        var prixTotalstr = prixTotal + parseFloat((produit.quantiteAchatProduit*produit.prixProduitParGrandeur).toFixed(2));
        prixTotal = parseFloat(prixTotalstr.toString());
      }
    }
    prixTotal = parseFloat(prixTotal.toFixed(2));
    console.log(productTable);
    this.commande.idMarchand = this.marchandid; // à changer pour mettre le marchand de la page en question
    this.commande.accepted = false;
    this.commande.idClient = this.user.id;
    this.commande.dictProduits = productTable;
    this.commande.prixTotal = prixTotal;

    if (this.commande.dictProduits == []) {
      return;
    } else {
      this.usersService.getUserDB(this.commande.idClient).pipe(first()).subscribe((user: any) => {
        this.commande.nomClient = user.prenom + ' ' + user.nom;
        console.log(this.commande);
        if (this.commandeId) {
          this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
            //loading.dismiss();
            this.router.navigate(['/paypal/' + this.commandeId.toString()]); // à changer vers panier
            this.commandeId = null;
            this.commande = {
              id: '',
              idClient: '',
              idMarchand: '',
              nomClient: '',
              accepted: false,
              payed: false,
              realized: false,
              dictProduits: [],
              prixTotal: 0
            };
          });
        } else {
          this.commandeService.addCommande(this.commande).then(res => {
            this.commandeId = res.id;
            this.commande.id = res.id;
            this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
              this.router.navigate(['/paypal/' + this.commandeId.toString()]); // à changer vers panier
              this.commandeId = null;
              this.commande = {
                id: '',
                idClient: '',
                idMarchand: '',
                nomClient: '',
                accepted: false,
                payed: false,
                realized: false,
                dictProduits: [],
                prixTotal: 0
              };
            });
          });
        }
      });
    }


    /*
    const loading = await this.loadingController.create({
      message: 'Sauvegarde de la commande...'
    });
    await loading.present();
    */

    /*
    if (this.commandeId) {
      this.commandeService.updateCommande(this.commande, this.commandeId).then(() => {
        //loading.dismiss();
        this.router.navigate(['/tabsmarchand/gestioncommande']); // à changer vers panier
      });
    } else {
      this.commandeService.addCommande(this.commande).then(res => {
        this.commandeId = res.id;
        //loading.dismiss();
        this.router.navigate(['/paypal', this.commandeId]); // à changer vers panier
      });
    }
    */
  }
}
