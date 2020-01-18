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
    this.usersService.getUserDB(id).subscribe(user => { //this.disposable =
       this.user = user;
       console.log('CURRENT user in service :');
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
