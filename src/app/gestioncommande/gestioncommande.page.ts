import { Component, OnInit } from '@angular/core';
import { Commande, CommandeService } from './../services/commande.service';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';

@Component({
  selector: 'app-gestioncommande',
  templateUrl: './gestioncommande.page.html',
  styleUrls: ['./gestioncommande.page.scss'],
})
export class GestioncommandePage implements OnInit {

    commandes: Commande[];


    constructor(
      private commandeService: CommandeService,
      public currentUser: CurrentUserService
    )
    {

    }

    ngOnInit() {

      this.commandeService.getCommandes().subscribe(res => {
        this.commandes = res;
      });

    }

    remove(item) {
      this.commandeService.removeCommande(item.id);
    }

    get user():Users {
      return this.currentUser.user;
    }

    set user(value: Users) {
      this.currentUser.user = value;
    }
    

    get idCurrentUser():string {
      return this.currentUser.idCurrentUser;
    }

    set idCurrentUser(value: string) {
      this.currentUser.idCurrentUser = value;
    }

  }
