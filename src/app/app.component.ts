import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Users, UsersService } from './services/users.service';
import { CurrentUserService } from './services/currentuser.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //private todosCollection: AngularFirestoreCollection<Geo>;
  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private usersService: UsersService,
    public currentUser: CurrentUserService,
    db: AngularFirestore
  )
  {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
    this.initializeApp();
  }

  initializeApp() {
    var self = this;
    this.platform.ready().then(() => {
      this.afAuth.authState.subscribe(auth => {
        if (!auth) {
          console.log('Non connecté');
        } else {
          console.log('Connecté: ' + auth.uid);
          this.currentUser.subscribeToCurrentUser(auth.uid);
          console.log('fin de la maj')
          this.geolocation.getCurrentPosition().then((resp) => {
            console.log('latitude = ' + resp.coords.latitude);
            console.log('longitude = ' + resp.coords.longitude);
            //update user
            this.user.latitude = resp.coords.latitude;
            this.user.longitude = resp.coords.longitude;
            this.usersService.updateUserDB(this.user, this.user.id);
           }).catch((error) => {
             console.log('Error getting location', error);
           });
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
