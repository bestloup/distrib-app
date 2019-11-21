import { Users, UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { User } from 'firebase';

@Component({
  selector: 'app-testbdd',
  templateUrl: './testbdd.page.html',
  styleUrls: ['./testbdd.page.scss'],
})
export class TestbddPage implements OnInit {

  todo: Users = {
    Nom: 'titi',
    Prenom: 'toto',
    age: 12,
    photo: 'je connais pas le format de stockage',
    createdAt: new Date().getTime(),
  };

  todoId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: UsersService, private loadingController: LoadingController) { }

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
