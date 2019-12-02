import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;
  map: Map;
  constructor(private geolocation: Geolocation) { }

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
