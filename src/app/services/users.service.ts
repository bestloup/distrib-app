import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Users {
  id: string;
  nom: string;
  prenom: string;
  role: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersCollection: AngularFirestoreCollection<Users>;
  private firedb: AngularFireDatabase;

  private users: Observable<Users[]>;

  constructor(db: AngularFirestore) {//, firedb: AngularFireDatabase) {
    this.usersCollection = db.collection<Users>('user');
    //this.firedb = firedb; // utile ?
    //this.users = firedb.list('/user'); // utile ?


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




  getUsers() {
    return this.users;
  }


  getUser(id) {
    return this.usersCollection.doc<Users>(id).valueChanges();
  }

  updateUser(user: Users, id: string) {
    return this.usersCollection.doc(id).update(user);
  }

  /*
  // fonctionne et retourne id de user dans la base users
  addUser(user: Users) {
    this.usersCollection.add(user)
    .then(function(docRef) {
        console.log("User written with ID: ", docRef.id);
        return docRef.id
    })
    .catch(function(error) {
        console.error("Error adding user: ", error);
    });
    //return this.usersCollection.add(user);
  }
  */


  addUser(user: Users) {
    return this.usersCollection.add(user);
  }



  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }
}
