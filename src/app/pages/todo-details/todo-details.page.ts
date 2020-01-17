import { Marchand, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { MarchandEnCoursService } from './../../services/marchandencours.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Marchand = {
    createdAt: new Date().getTime(),
    Nom: '',
    bio: '',
    adresse: ''
  };




  todoId = null;

  constructor(private route: ActivatedRoute, private router: Router, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController, public marchandEnCoursService: MarchandEnCoursService) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Marchand...'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  get idMarchandEnCours():string { //marchandEnCours
    return this.marchandEnCoursService.idMarchandEnCours;
  }

  set idMarchandEnCours(value: string) { //marchandEnCours
    this.marchandEnCoursService.idMarchandEnCours = value;
  }



  async saveTodo() {


    const loading = await this.loadingController.create({
      message: 'Sauvegarde du Marchand...'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(docRef => {
        loading.dismiss();
        if (docRef !== null) {
          this.idMarchandEnCours = docRef.id
        } else {
          console.log('error if')
        }
        console.log("if tododetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']);
      });
    } else {
      /*
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        //this.setIdMarchandEnCours(this.todoId);
        this.idMarchandEnCours = this.route.snapshot.params['id']
        //this.marchandEnCoursService.setIdMarchandEnCours('requin42');
        console.log("lalalalalala else tododetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']); //fonctionne
        //this.router.navigate(['/accueilmarchand', this.todoId]);
      });
      */
      this.todoService.addTodo(this.todo).then(docRef => {
        loading.dismiss();

        //console.log("Document written with ID: ", docRef.id);
        if (docRef !== null) {
          this.idMarchandEnCours = docRef.id
        } else {
          console.log('error else')
        }
        console.log("else tododetails\n" + this.idMarchandEnCours)
        this.router.navigate(['/accueilmarchand']);
      });


    }
  }

}
