import { Component } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.page.html',
  styleUrls: ['inscription.page.scss']
})
export class InscriptionPage {
  hasVerifiedEmail = true;
  sentTimestamp;

  constructor(public afAuth: AngularFireAuth,) {

    this.afAuth.authState.subscribe(user => {
      if (user)
        this.hasVerifiedEmail = this.afAuth.auth.currentUser.emailVerified;
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification();
    this.sentTimestamp = new Date();
  }

  reload() {
    window.location.reload();
  }


}
