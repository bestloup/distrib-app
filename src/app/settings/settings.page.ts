import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from '../services/users.service';
import { CurrentUserService } from '../services/currentuser.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private usersService: UsersService,
    public currentUser: CurrentUserService,
  ) { }

  ngOnInit() {
    this.usersService.updateUserDB(this.user, this.user.id);
  }

  get user():Users {
    return this.currentUser.user;
  }
}
