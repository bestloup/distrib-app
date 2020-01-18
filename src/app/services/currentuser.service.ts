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
    email: ''
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
}
