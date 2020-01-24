import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ActivatedRoute, Router} from '@angular/router'; // Router
import { Commande, CommandeService } from './../services/commande.service';


@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.page.html',
  styleUrls: ['paypal.page.scss'],
})



export class PaypalPage {
  commande: Commande = {
    idClient: '',
    idMarchand: '',
    nomClient: '',
    accepted: false,
    dictProduits: [],
    prixTotal: 0,
    payed: false,
    realized: false,
  };

  commandeid = '';
  paymentAmount: string;
  constructor(
    private payPal: PayPal,
    private route: ActivatedRoute,
    private commandeService: CommandeService,
    private router: Router
    ) {
      this.commandeid = this.route.snapshot.params['id'];
      console.log('commandeid : ' + this.commandeid);
      this.commandeService.getCommande(this.commandeid).subscribe( res => {
        console.log(res);
        this.commande = res;
        this.paymentAmount = res.prixTotal;
      })
  }


  //paymentAmount: string = '3.33';
  currency: string = 'EUR';
  currencyIcon: string = '€';

  payWithPaypal() {
    console.log('Pay ????');
    this.commande.payed = true;
    this.commandeService.updateCommande(this.commande, this.commandeid);
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AdRsm5a_QtZBQiMPIU6NSfThuO_td7t94-Pm37QHcfrxD0eFRrPl5QysWk3LLIJ4d7t3nlp4OEy-fiTG'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          console.log('Error or render dialog closed without being successful');
        });
      }, () => {
        console.log('Error in configuration');
      });
    }, (err) => {
      // Error in initialization, maybe PayPal isn't supported or something else
      console.log("Error", " Error in initialization, maybe PayPal isn't supported or something else. Error: " + JSON.stringify(err));
    });
  }

  removecommande(){
    this.commandeService.removeCommande(this.commandeid);
    this.router.navigate(['/tabs/annonces']);
  }

}