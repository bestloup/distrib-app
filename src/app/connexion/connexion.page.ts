import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Users, UsersService } from './../services/users.service';


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
    private usersService: UsersService
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
    var auth_id;
    var self = this;
    //this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(function(firebaseUser) {
      auth_id = firebaseUser.user.uid;
      console.log('je me suis reconnecté avec cet id : ' + auth_id)
      self.user.id = firebaseUser.user.uid;
      var that = self;

      self.usersService.getUser(auth_id).subscribe(user => {
        that.user = user
        console.log('user retrieved with id ' + that.user.id + ' and mail ' + that.user.email);

        if (that.user.role == 'marchand') {
          console.log('marchand par ici')
          that.router.navigateByUrl('/accueilmarchand');
        } else if (that.user.role == 'client') {
          console.log('client par la')
          that.router.navigateByUrl('/tabs/annonces');
        }
      });
    }).catch(function(error) {
        console.error("ERROR: ", error);
    });

    this.dataUser = {
       email: '',
       password: ''
    };

    console.log('et en dehor jai encore cet id : ' + auth_id)



    // inserer redirection vers chemin client ou chemin marchand selon le role du user récuperé au moment de l'authentification

    /*
    */

  }

}
