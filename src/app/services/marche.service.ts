import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Marche {
  id?: string;
  nom: string;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})


export class MarcheService {

  private marchesCollection: AngularFirestoreCollection<Marche>;

  private marches: Observable<Marche[]>;

  constructor(db: AngularFirestore) {
    this.marchesCollection = db.collection<Marche>('marche');

    this.marches = this.marchesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getMarches() {
    return this.marches;
  }

}
