import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Produit {
  id?: string;
  nom: string;
  idMarchand: string;
  quantite: number;
  grandeur: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitsCollection: AngularFirestoreCollection<Produit>;

  private produits: Observable<Produit[]>;

  constructor(db: AngularFirestore) {
    this.produitsCollection = db.collection<Produit>('Produit');

    this.produits = this.produitsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

// Permet de voir l'intégralité des Produit
  getProduits() {
    return this.produits;
  }
// Permet de selectionner le Produit avec un ID spécifique
  getProduit(id) {
    return this.produitsCollection.doc<Produit>(id).valueChanges();
  }

  updateProduit(produit: Produit, id: string) {
    return this.produitsCollection.doc(id).update(produit);
  }

  addProduit(produit: Produit) {
    return this.produitsCollection.add(produit);
  }

  removeProduit(id) {
    return this.produitsCollection.doc(id).delete();
  }
}
