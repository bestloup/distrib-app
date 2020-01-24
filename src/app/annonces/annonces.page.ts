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
  users: Users[];
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private usersService: UsersService,
    public currentUser: CurrentUserService,
  ) {
    this.usersService.getUsersDB().subscribe(res => {
      this.users = res;
      if (this.users.role == 'marchand'){
        this.router.navigateByUrl('/tabsmarchand');
      }
      else if (this.users.role == 'client'){
        console.log('reste la poto')
      }
      else {
        console.log("c'est puant")
      }
    })
          //this.currentUser.subscribeToCurrentUser(auth.uid);
         
        //console.log('Connecté: ' + auth.uid);
      
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


}
