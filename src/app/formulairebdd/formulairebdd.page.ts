import { Component, OnInit } from '@angular/core';
import { Todo, MarchandService } from '../services/marchand.service';

@Component({
  selector: 'app-formulairebdd',
  templateUrl: './formulairebdd.page.html',
  styleUrls: ['./formulairebdd.page.scss'],
})
export class FormulairebddPage implements OnInit {

  todos: Todo[];

  constructor(private todoService: MarchandService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
