import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Users, UsersService } from './../services/users.service';
import { CurrentUserService } from './../services/currentuser.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  dataUser = {
    email: '',
    password: ''
  };

  user: Users = {
    id: '',
    nom: '',
    prenom: '',
    role: '',
    email: ''
  };

  connected: boolean;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    //private user: Users,
    private usersService: UsersService,
    public currentUser: CurrentUserService
  )
  {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.router.navigateByUrl('/tabs/annonces'); // ???????????????????????????????????????????????????????????
      }
    });
  }

  ngOnInit() {
  }

  login() {
    var self = this;
    //this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(function(firebaseUser) {
      self.usersService.getUserDB(firebaseUser.user.uid).subscribe(user => { // removed var userdb =
         //console.log(user);
         self.user = user;
         self.currentUser.subscribeToCurrentUser(firebaseUser.user.uid);

         if (self.user.role == 'marchand') {
           console.log('marchand par ici')
           self.router.navigateByUrl('/accueilmarchand');
         } else if (self.user.role == 'client') {
           console.log('client par la')
           self.router.navigateByUrl('/tabs/annonces');
         }
      });






      //var that = self;
      /*
      self.usersService.getUser(auth_id).subscribe(user => {
        self.user = user
        console.log('user retrieved with id ' + self.user.id + ' and mail ' + self.user.email);

        if (self.user.role == 'marchand') {
          console.log('marchand par ici')
          self.router.navigateByUrl('/accueilmarchand');
        } else if (self.user.role == 'client') {
          console.log('client par la')
          self.router.navigateByUrl('/tabs/annonces');
        }
      });
      */
    }).catch(function(error) {
        console.error("ERROR: ", error);
    });

    this.dataUser = {
       email: '',
       password: ''
    };




    // inserer redirection vers chemin client ou chemin marchand selon le role du user récuperé au moment de l'authentification

    /*
    */

  }

}
