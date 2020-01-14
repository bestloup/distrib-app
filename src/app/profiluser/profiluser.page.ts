import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.page.html',
  styleUrls: ['./profiluser.page.scss'],
})
export class ProfiluserPage implements OnInit {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/connexion');
  }
}
