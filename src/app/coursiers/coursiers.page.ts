import { Component } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-coursiers',
  templateUrl: 'coursiers.page.html',
  styleUrls: ['coursiers.page.scss']
})

export class CoursiersPage {
  map: Map;
  geolocation: Geolocation;
  lat: any;
  lng: any;

  ionViewDidEnter() {
    this.leafletMap();
    //this.Recuppos();
  }

  leafletMap() {
    this.map = new Map('mapId').setView([45.78368573921658, 4.872815740661602], 13);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    const markPoint = marker([45.77233909078429, 4.865949285583477]);
    markPoint.bindPopup('<p>Place Wilson</p>');
    const mark = marker([45.78067042784339, 4.88337291534422]);
    mark.bindPopup('<p>Croix-Luzet</p>');
    const marche = marker([45.76824653667622, 4.880164160621652]);
    marche.bindPopup('<p>Gratte-ciel</p>');
    this.map.addLayer(markPoint);
    this.map.addLayer(mark);
    this.map.addLayer(marche);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  Recuppos() {
    console.log('toto');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(resp);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  /* idee2() {
    ngOnInit() {
      this.leafletMap();
    }

    ngAfterViewInit(): void {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        //console.log('latitude : ' + this.latitude + ' ,  longitude : ' + this.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

    leafletMap() {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        //console.log('latitude : ' + this.latitude + ' ,  longitude : ' + this.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      console.log(this.latitude);
      console.log(this.longitude);
      this.map = new Map('mapId').setView([45, 4.5], 13);

      tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    }
  }
*/
}
