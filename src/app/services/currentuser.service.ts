import { Injectable } from '@angular/core';
import { Users, UsersService } from './users.service';

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
    latitude: 0,
    longitude: 0
  };

  constructor(private usersService: UsersService) {
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
      console.log('Current user :');
      console.log(this.user);

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
