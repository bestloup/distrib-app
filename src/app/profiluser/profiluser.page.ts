import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Users {
  id: string;
  Nom: string;
  Prenom: string;
  sexe: string;
  role: string;
}

@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.page.html',
  styleUrls: ['./profiluser.page.scss'],
})
export class ProfiluserPage {
  connected: boolean;

  userId: string;
  mail: string;
  method: any;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    db: AngularFirestore,
    //private todosCollection: AngularFirestoreCollection<Users>
  ) {
    //this.todosCollection = db.collection<Users>('user');
    //console.log(this.todosCollection.doc<Users>(this.userId));
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
      }
    });

   }





  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/connexion');
  }
}
