import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { GeolocationPage } from './geolocation.page';
import { GeolocationPipe } from '../geolocation.pipe';

const routes: Routes = [
  {
    path: '',
    component: GeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeolocationPage, GeolocationPipe],
  providers: [Geolocation]
})
export class GeolocationPageModule {}
