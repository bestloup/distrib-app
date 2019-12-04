import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';

declare const L: any;

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {
  latitude: any;
  longitude: any;
  map: any;
  constructor() {

  }

  ngOnInit(): void {
    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('mapId').setView([-0.1836298, -78.4821206], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);

    var drawnItems = new L.FeatureGroup().addTo(this.map);
    var drawControl = new L.Control.Draw({
      draw: {
        polygon: {
        showArea: true,
        shapeOptions: {
          color: 'red'
        },
        },
        polyline: {
        shapeOptions: {
          color: 'red'
        },
        },
        rect: {
        shapeOptions: {
          color: 'green'
        },
        },
        circle: {
        shapeOptions: {
          color: 'steelblue'
        },
        },
      },
      edit: {
        featureGroup: drawnItems
      }
    });
    this.map.addControl(drawControl);
    this.map.on(L.Draw.Event.CREATED, function(event) {
      const layer = event.layer;

      drawnItems.addLayer(layer);
      this.data = drawnItems.toGeoJSON();
      console.log(this.data);
      });

    Leaflet.polygon([
        [-0.126332, -78.491907],
        [-0.12878, -78.48856],
        [-0.13922, -78.485727],
        [-0.147082, -78.483796],
        [-0.156362, -78.485341],
        [-0.154815, -78.48753],
        [-0.14734, -78.489847],
        [-0.145536, -78.491521],
        [-0.135096, -78.493323],
        [-0.126332, -78.491907]
    ]).addTo(this.map);

    var map = this.map;

     // web location
    map.locate({ setView: true});

     // when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      var radius = e.accuracy / 2;
      
      Leaflet.circle(e.latlng, radius).addTo(map);
     }
    map.on('locationfound', onLocationFound);

    // alert on location error
    function onLocationError(e) {
      alert(e.message);
    }

    this.map.on('locationerror', onLocationError);

  }
}
