import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Users {
  id: string;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersCollection: AngularFirestoreCollection<Users>;
  private firedb: AngularFireDatabase;

  private users: Observable<Users[]>;
  private usersdb: AngularFireObject<Users[]>;

  constructor(db: AngularFirestore, firedb: AngularFireDatabase) {
    this.usersCollection = db.collection<Users>('user');

    this.firedb = firedb; // utile ?
    //this.usersdb = this.db.list(products/${this.userId}).valueChanges()
    //this.usersdb = this.firedb.list('/user').valueChanges();



    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsersDB() {
    return this.usersdb;
  }



  getUserDB(id: string) {
    return this.firedb.object('user/' + id).valueChanges();
  }

  updateUserDB(user: Users, id: string) {
    return this.firedb.object('user/' + id).update(user);
  }

  addUserDB(user: Users, id: string) {
    return this.firedb.object('user/' + id).set(user);
  }

  removeUserDB(id: string) {
    return this.firedb.object('user/' + id).remove();
  }



  getUsers() {
    return this.users;
  }

  /*

  getUser(id) {
    return this.usersCollection.doc<Users>(id).valueChanges();
  }

  updateUser(user: Users, id: string) {
    return this.usersCollection.doc(id).update(user);
  }

  addUser(user: Users) {
    return this.usersCollection.add(user);
  }

  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }
  */
}
