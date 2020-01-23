import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from '../services/users.service';

@Component({
  selector: 'app-marchands',
  templateUrl: './marchands.page.html',
  styleUrls: ['./marchands.page.scss'],
})
export class MarchandsPage implements OnInit {
  users: Users[];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsersDB().subscribe(res => {
      this.users = res;
    })
  }

}
