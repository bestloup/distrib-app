import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';
import { delay, first } from 'rxjs/operators';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  dataUser = {
    email: '',
    password: ''
  };



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

  connected: boolean;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private usersService: UsersService,
    public currentUser: CurrentUserService
  )
  {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        //console.log('non connecté');
        this.connected = false;
      } else {
        //console.log('connecté: ' + auth.uid);
        this.connected = true;
        //
        // if (this.user.role == 'marchand') {
        //   this.router.navigateByUrl('/accueilmarchand');
        // } else if (this.user.role == 'client') {
        //   this.router.navigateByUrl('/tabs/annonces');
        // }
        //this.router.navigateByUrl('/tabs/annonces'); // ???????????????????????????????????????????????????????????
      }
    });
  }


  login() {
    var self = this;
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(function(firebaseUser) {
      self.usersService.getUserDB(firebaseUser.user.uid).pipe(first()).subscribe((user: Users) => {
         self.currentUser.subscribeToCurrentUser(firebaseUser.user.uid);
         if (user.role == 'marchand') {
           console.log('marchand par ici')
           self.router.navigateByUrl('/tabsmarchand');
         } else if (user.role == 'client') {
           console.log('client par la')
           self.router.navigateByUrl('/tabs/annonces');
         }

      });

    }).catch(function(error) {
        console.error("ERROR: ", error);
    });

    this.dataUser = {
       email: '',
       password: ''
    };
  }



}
