import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Geo {
  id: string;
  latitude: Float32Array;
  longitude: Float32Array;
}

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private todosCollection: AngularFirestoreCollection<Geo>;

  constructor(db: AngularFirestore) { 
    this.todosCollection = db.collection<Geo>('geolocalisation');
  }

  getTodo(id) {
    return this.todosCollection.doc<Geo>(id).valueChanges();
  }

  updateTodo(todo: Geo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Geo) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}
