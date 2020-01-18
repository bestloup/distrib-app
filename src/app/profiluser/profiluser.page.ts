import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';


@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.page.html',
  styleUrls: ['./profiluser.page.scss'],
})
export class ProfiluserPage {

  connected: boolean;

  //userId: string;
  //mail: string;
  //method: any;


  user: Users = {
    id: '',
    nom: '',
    prenom: '',
    role: '',
    email: ''
  };
  /*
  */

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    db: AngularFirestore,
    public usersService: UsersService,
    public currentUser: CurrentUserService
    //private todosCollection: AngularFirestoreCollection<Users>
  ) {
    //this.todosCollection = db.collection<Users>('user');
    //console.log(this.todosCollection.doc<Users>(this.userId));
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else { //
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.usersService.getUserDB(auth.uid).subscribe(user => { //this.disposable =
           this.user = user;
        });
      }
    });

   }





  logout() {
    this.afAuth.auth.signOut();
    this.currentUser.unsubscribeAtLogout();
    this.router.navigateByUrl('/connexion');
  }

  updateProfile() {
    console.log(this.user);
    this.usersService.updateUser(this.user, this.currentUser.idCurrentUser);
  }
}
