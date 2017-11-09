import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import * as moment from 'moment';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

        public lat;
        public lon;

  constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

    platform.ready().then(() => {
      
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();
    
      
    }
    
    )}
  
  
  now = moment().format("dddd, MMMM Do YYYY"); 
  nowTime = moment().format("h:mm:ss a")
}
  
