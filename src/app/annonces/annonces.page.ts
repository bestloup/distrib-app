import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Users, UsersService } from '../services/users.service';
import { CurrentUserService } from '../services/currentuser.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private usersService: UsersService,
    public currentUser: CurrentUserService,
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecté');
        this.router.navigateByUrl('/connexion');
      } else {
          //this.currentUser.subscribeToCurrentUser(auth.uid);
          console.log('le this.user qui pose problème')
          console.log(this.user)
          if (this.user.role == 'marchand'){
            this.router.navigateByUrl('/tabsmarchand');
          }
          else if (this.user.role == 'client'){
            console.log('reste la poto')
          }
          else {
            console.log("c'est puant")
          }
        //console.log('Connecté: ' + auth.uid);
      }
    });
  }

  get user(): Users {
    return this.currentUser.user;
  }

  set user(value: Users) {
    this.currentUser.user = value;
  }

  get idCurrentUser(): string {
    return this.currentUser.idCurrentUser;
  }

  set idCurrentUser(value: string) {
    this.currentUser.idCurrentUser = value;
  }

  n() {

    }


}
