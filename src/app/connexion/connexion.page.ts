import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  dataUser = {
    email: '',
    password: ''
 };
 connected: boolean;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  )
  { this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.router.navigateByUrl('/tabs/annonces');
      }
    });
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
       email: '',
       password: ''
    };
    this.router.navigateByUrl('/tabs/annonces');
  }

  signUp() {
    this.router.navigateByUrl('/infouser');
 }
}
