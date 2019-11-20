import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Marchand {
  id?: string;
  Nom: string;
  bio: string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Marchand>;

  private todos: Observable<Marchand[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Marchand>('todos');

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
    return this.todosCollection.doc<Marchand>(id).valueChanges();
  }

  updateTodo(todo: Marchand, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Marchand) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
