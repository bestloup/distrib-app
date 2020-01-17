import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Marchand {
  id?: string;
  nom: string;
  prenom: string;
  biographie: string;
  adresse : string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class MarchandService {
  private marchandsCollection: AngularFirestoreCollection<Marchand>;

  private marchands: Observable<Marchand[]>;

  constructor(db: AngularFirestore) {
    this.marchandsCollection = db.collection<Marchand>('Marchand');

    this.marchands = this.marchandsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

// Permet de voir l'intégralité des marchands
  getMarchands() {
    return this.marchands;
  }
// Permet de selectionner le marchand avec un ID spécifique
  getMarchand(id) {
    return this.marchandsCollection.doc<Marchand>(id).valueChanges();
  }

  updateMarchand(marchand: Marchand, id: string) {
    return this.marchandsCollection.doc(id).update(marchand);
  }

  addMarchand(marchand: Marchand) {
    return this.marchandsCollection.add(marchand);
  }

  removeMarchand(id) {
    return this.marchandsCollection.doc(id).delete();
  }
}
