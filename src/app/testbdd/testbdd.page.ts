import { Todo, MarchandService } from './../services/marchand.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-testbdd',
  templateUrl: './testbdd.page.html',
  styleUrls: ['./testbdd.page.scss'],
})
export class TestbddPage implements OnInit {

  todo: Todo = {
    task: 'test',
    createdAt: new Date().getTime(),
    priority: 2
  };

  todoId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: MarchandService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        //this.nav.back('formulairebdd');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        //this.nav.back('formulairebdd');
      });
    }
  }

}
