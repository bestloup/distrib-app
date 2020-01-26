import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from '../services/users.service';
import { CurrentUserService } from '../services/currentuser.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private usersService: UsersService,
    public currentUser: CurrentUserService,
  ) { }



  get user():Users {
    return this.currentUser.user;
  }

  set user(value: Users) {
    this.currentUser.user = value;
  }
}
