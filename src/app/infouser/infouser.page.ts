import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Users, UsersService } from './../services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.page.html',
  styleUrls: ['./infouser.page.scss'],
})
export class InfouserPage implements OnInit {

  user: Users = {
    id: '',
    Nom: '',
    Prenom: '',
    sexe: '',
    role: ''
  };

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private usersService: UsersService
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigateByUrl('/connexion');
      } else {
        this.user.id = auth.uid;
        console.log(this.user.id);
        if (this.usersService.getTodo(this.user.id)) {
          console.log("info déjà connue")
          this.router.navigateByUrl('/tabs/annonces');
        }
      }
    });
  }

  ngOnInit() {

  }


  push() {
    this.usersService.addTodo(this.user);
  }
}
