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
  /*
  */

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    db: AngularFirestore,
    public usersService: UsersService,
    public currentUser: CurrentUserService
    //private todosCollection: AngularFirestoreCollection<Users>
  ){
    //this.todosCollection = db.collection<Users>('user');
    //console.log(this.todosCollection.doc<Users>(this.userId));
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else { //
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }

  logout() {
   this.afAuth.auth.signOut();
   this.currentUser.unsubscribeAtLogout();
   this.router.navigateByUrl('/connexion');
  }

  updateProfile() { // reste la modification du mail ou du mot de passe à faire, parce que ici si je modifie le mail il n'est pas modifié dans la base auth
    console.log(this.user);
    console.log(this.user.id);
    this.usersService.updateUserDB(this.user, this.user.id);
    console.log('Profil enregistré pour le user id : ' + this.user.id);
    console.log('Avec les informations suivantes :');
    console.log(this.user);
  }
}
