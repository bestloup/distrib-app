import { Marchand, MarchandService } from './../../services/marchand.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { MarchandEnCoursService } from './../../services/marchandencours.service';

@Component({
  selector: 'app-marchand-details',
  templateUrl: './marchand-details.page.html',
  styleUrls: ['./marchand-details.page.scss'],
})
export class MarchandDetailsPage implements OnInit {

  marchand: Marchand = {
    createdAt: new Date().getTime(),
    nom: '',
    prenom: '',
    biographie: '',
    adresse: ''
  };




  marchandId = null;

  constructor(private route: ActivatedRoute, private router: Router, private nav: NavController, private marchandService: MarchandService, private loadingController: LoadingController, public marchandEnCoursService: MarchandEnCoursService) { }

  ngOnInit() {
    this.marchandId = this.route.snapshot.params['id'];
    if (this.marchandId)  {
      this.loadMarchand();
    }
  }

  async loadMarchand() {
    const loading = await this.loadingController.create({
      message: 'Loading Marchand...'
    });
    await loading.present();

    this.marchandService.getMarchand(this.marchandId).subscribe(res => {
      loading.dismiss();
      this.marchand = res;
    });
  }

  get idMarchandEnCours():string { //marchandEnCours
    return this.marchandEnCoursService.idMarchandEnCours;
  }

  set idMarchandEnCours(value: string) { //marchandEnCours
    this.marchandEnCoursService.idMarchandEnCours = value;
  }



  async saveMarchand() {


    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Marchand...'
    });
    await loading.present();

    if (this.marchandId) {
      this.marchandService.updateMarchand(this.marchand, this.marchandId);/*.then(docRef => {
        loading.dismiss();
        //if (docRef !== null) {

        if (typeof docRef !== 'undefined') { //typeof val !== 'undefined'
          if (docRef.hasOwnProperty('id')) {
            this.idMarchandEnCours = docRef.id
          } else {
            console.log('error if')
          }
        } else {
          console.log('error else')
        }
        console.log("if marchanddetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']);
      });*/
    } else {
      /*
      this.marchandService.addMarchand(this.marchand).then(() => {
        loading.dismiss();
        //this.setIdMarchandEnCours(this.marchandId);
        this.idMarchandEnCours = this.route.snapshot.params['id']
        //this.marchandEnCoursService.setIdMarchandEnCours('requin42');
        console.log("lalalalalala else marchanddetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']); //fonctionne
        //this.router.navigate(['/accueilmarchand', this.marchandId]);
      });
      */
      this.marchandService.addMarchand(this.marchand).then(docRef => {
        loading.dismiss();

        //console.log("Document written with ID: ", docRef.id);
        //if (docRef !== null) {
        if (typeof docRef !== 'undefined') {
          if (docRef.hasOwnProperty('id')) {
            this.idMarchandEnCours = docRef.id
          } else {
            console.log('error if')
          }
        } else {
          console.log('error else')
        }
        console.log("else marchanddetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']);
      });


    }
  }

}
