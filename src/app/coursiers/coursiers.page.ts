import { Component } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-coursiers',
  templateUrl: 'coursiers.page.html',
  styleUrls: ['coursiers.page.scss']
})

export class CoursiersPage {
  map: GoogleMap;
  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform,
    ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
    }

  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyD29NPr_VCstyuxj13L3Dg9oAjBG0Cw3x8',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyD29NPr_VCstyuxj13L3Dg9oAjBG0Cw3x8'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 45.75,
          lng: 4.85
        },
        zoom: 12,
        tilt: 30
      }
    });
  }
}

