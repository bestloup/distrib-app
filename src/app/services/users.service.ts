import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Users {
  id: string;
  nom: string;
  prenom: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private todosCollection: AngularFirestoreCollection<Users>;

  private todos: Observable<Users[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Users>('user');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id) {
    return this.todosCollection.doc<Users>(id).valueChanges();
  }

  updateTodo(todo: Users, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Users) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
