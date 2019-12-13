import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.page.html',
  styleUrls: ['paypal.page.scss'],
})
export class PaypalPage {
  constructor(private payPal: PayPal) {

  }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  payWithPaypal() {
    console.log('Pay ????');
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
}