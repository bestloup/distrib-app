import { Component } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Marche , MarcheService } from './../services/marche.service';


@Component({
  selector: 'app-coursiers',
  templateUrl: 'coursiers.page.html',
  styleUrls: ['coursiers.page.scss']
})

export class CoursiersPage {
  map: Map;
  lat: any;
  lng: any;

  marche: Marche[];
  constructor(
    private marchesService: MarcheService,
    private geolocation: Geolocation,
  ) {
    this.geolocation.getCurrentPosition().then((resp) => {
      //console.log('latitude = ' + resp.coords.latitude);
      //console.log('longitude = ' + resp.coords.longitude);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.map = new Map('mapId').setView([this.lat, this.lng], 13);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ionViewDidEnter() {
     this.delay(300);
     this.leafletMap();
   }
  leafletMap() {

    //this.map = new Map('mapId').setView([45.77233909078429, 4.865949285583477], 13);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    this.marchesService.getMarches().subscribe(res => {
      this.marche = res;
      for (let entry of this.marche) {
        //console.log(entry.nom + '   ' + entry.longitude + ' ' + entry.latitude ); // 1, "string", false
        const markPoint = marker([entry.latitude, entry.longitude]);
        //const toto = '<p>'+entry.nom+'<p><br> <a href="https://www.google.fr/maps/@' + entry.latitude + ',' + entry.longitude + ',18z">carte du marché ici</a>'
        markPoint.bindPopup(entry.nom);
        this.map.addLayer(markPoint);
    }
    });

    // const markPoint = marker([45.77233909078429, 4.865949285583477]);
    // markPoint.bindPopup('<p>Place Wilson</p>');
    // const mark = marker([45.78067042784339, 4.88337291534422]);
    // mark.bindPopup('<p>Croix-Luzet</p>');
    // const marche = marker([45.76824653667622, 4.880164160621652]);
    // marche.bindPopup('<p>Gratte-ciel</p>');
    // this.map.addLayer(markPoint);
    // this.map.addLayer(mark);
    // this.map.addLayer(marche);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
