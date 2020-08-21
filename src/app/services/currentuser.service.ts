import { Injectable } from '@angular/core';
import { Users, UsersService } from './users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, empty } from 'rxjs'; //
//import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';
//import { EmptyObservable } from 'rxjs/observable/EmptyObservable';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  idCurrentUser: string;

  user: Users = {
    id: '',
    nom: '',
    prenom: '',
    role: '',
    email: '',
    photo: '',
    photoEtal: '',
    latitude: 0,
    longitude: 0,
    paypal: '',
    rcs: '',
    bio: false,
    biographie: ''
  };

  constructor(
    public afAuth: AngularFireAuth,
    private usersService: UsersService
  )
  {

  }


  subscribeToCurrentUser(id: string) {

    //var self = this; (can resolve loss of scope with 'this')
    this.idCurrentUser = id;
    this.usersService.getUserDB(id).subscribe((user :any) => {
      this.user.id = user.id;
      this.user.nom = user.nom;
      this.user.prenom = user.prenom;
      this.user.role = user.role;
      this.user.email = user.email;
      this.user.latitude = user.latitude;
      this.user.longitude = user.longitude;
    });
    return this.usersService.getUserDB(id);
  }

  userAuthenticated() {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecté');
        var obs = of('non connecté');

        return of();

      } else {
        console.log('Connecté: ' + auth.uid);
        return this.subscribeToCurrentUser(auth.uid);
      }
    });
  }

  unsubscribeAtLogout() {
    //this.disposable.unsubscribe();
    this.idCurrentUser = '';
    this.user = {
      id: '',
      nom: '',
      prenom: '',
      role: '',
      email: '',
      photo: '',
      photoEtal: '',
      latitude: 0,
      longitude: 0,
      paypal: '',
      rcs: '',
      bio: false,
      biographie: ''
    };
  }

  /*

  get user():Users {
    return this.user;
  }

  set user(value: Users) {
    this.user = value;
  }

  get idCurrentUser():string {
    return this.idCurrentUser;
  }

  set idCurrentUser(value: string) {
    this.idCurrentUser = value;
  }
  */
}
