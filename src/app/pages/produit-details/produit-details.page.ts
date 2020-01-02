import { Marchand, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './produit-details.page.html',
  styleUrls: ['./produit-details.page.scss'],
})
export class ProduitDetailsPage implements OnInit {

  todo: Marchand = {
    createdAt: new Date().getTime(),
    Nom: '',
    bio: '',
    adresse: ''
  };

  todoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }

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
      message: 'Sauvegarde du Marchand...'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        //this.nav.back('home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        //this.nav.back('home');
      });
    }
  }

}
