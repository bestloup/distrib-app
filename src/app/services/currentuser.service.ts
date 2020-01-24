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
    latitude: 0,
    longitude: 0
  };

  constructor(
    public afAuth: AngularFireAuth,
    private usersService: UsersService
  )
  {

  }


  subscribeToCurrentUser(id: string) {

    //var self = this;
    this.idCurrentUser = id;
    this.usersService.getUserDB(id).subscribe((user :any) => { //this.disposable =
      //this.user = user;
      this.user.id = user.id;
      this.user.nom = user.nom;
      this.user.prenom = user.prenom;
      this.user.role = user.role;
      this.user.email = user.email;
      this.user.latitude = user.latitude;
      this.user.longitude = user.longitude;
      //console.log('Current user :');
      //console.log(this.user);
    });
    return this.usersService.getUserDB(id);
  }

  userAuthenticated() {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecté');
        var obs = of('non connecté');
        /*
        const myObservable = of(1, 2, 3);

        // Create observer object
        const myObserver = {
          next: x => console.log('Observer got a next value: ' + x),
          error: err => console.error('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification'),
        };

        // Execute with the observer object
        myObservable.subscribe(myObserver);
        */

        //return new Observable(observer => observer.complete());
        //return obs;

        //return empty();
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
