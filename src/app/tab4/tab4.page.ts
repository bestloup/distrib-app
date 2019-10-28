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
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
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
          lat: 43.610769,
          lng: 3.876716
        },
        zoom: 12,
        tilt: 30
      }
    });
  }
}

