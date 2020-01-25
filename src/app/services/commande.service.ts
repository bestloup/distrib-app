import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Commande {
  id?: string;
  idClient: string;
  idMarchand: string;
  nomClient: string;
  accepted: boolean;
  payed: boolean;
  done: boolean;
  dictProduits: ProduitCommande[];
  prixTotal: number;
}

export interface ProduitCommande {
   idProduit: string;
   nomProduit: string;
   quantiteAchatProduit: number;
   prixProduitParGrandeur: number;
   grandeurPourPrix: string;
   //isChecked: boolean; //
}

@Injectable({
  providedIn: 'root'
})

export class CommandeService {

  private commandesCollection: AngularFirestoreCollection<Commande>;
  private firedb: AngularFireDatabase;
  private commandes: Observable<Commande[]>;
  private commandesdb: Observable<any[]>;

  constructor(
    db: AngularFirestore,
    firedb: AngularFireDatabase
  )
  {
    this.commandesCollection = db.collection<Commande>('commande');

    this.firedb = firedb;
    this.commandesdb = this.firedb.list('/commande').valueChanges();

    this.commandes = this.commandesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  /*
  getCommandes() {
    return this.commandesdb;
  }

  getCommande(id: string) {
    return this.firedb.object('commande/' + id).valueChanges();
  }

  updateCommande(commande: Commande, id: string) {
    return this.firedb.object('commande/' + id).update(commande);
  }

  addCommande(commande: Commande, id: string) {
    return this.firedb.object('commande/' + id).set(commande);
  }

  addCommandeWithRandomID(commande: Commande, id: string) {
    return this.firedb.object('commande/' + id).push(commande);
  }

  removeCommande(id: string) {
    return this.firedb.object('commande/' + id).remove();
  }
  */



  getCommandes() {
    return this.commandes;
  }


  getCommande(id) {
    return this.commandesCollection.doc<Commande>(id).valueChanges();
  }

  updateCommande(commande: Commande, id: string) {
    return this.commandesCollection.doc(id).update(commande);
  }

  addCommande(commande: Commande) {
    return this.commandesCollection.add(commande);
  }

  removeCommande(id) {
    return this.commandesCollection.doc(id).delete();
  }


  }
