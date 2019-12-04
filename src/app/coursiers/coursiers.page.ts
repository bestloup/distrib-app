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
    this.map = new Map('mapId').setView([45.75, 4.85], 13);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    const markPoint = marker([45.75, 4.85]);
    markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
    this.map.addLayer(markPoint);
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
