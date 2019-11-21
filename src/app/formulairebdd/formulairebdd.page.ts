import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from '../services/users.service';

@Component({
  selector: 'app-formulairebdd',
  templateUrl: './formulairebdd.page.html',
  styleUrls: ['./formulairebdd.page.scss'],
})
export class FormulairebddPage implements OnInit {

  user: Users[];

  constructor(private todoService: UsersService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.user = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
