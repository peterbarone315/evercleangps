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

  public locationlat;
  public locationlng;

  constructor(public navCtrl: NavController, public http: HTTP, private platform: Platform, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private _GEOCODE  : NativeGeocoder) {
    
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      console.log(resp.coords.latitude+", "+resp.coords.longitude);
      this.locationlat = (resp.coords.latitude);
      this.locationlng = (resp.coords.longitude);
    }

  )}


    

  now = moment().format("dddd, MMMM Do YYYY"); 
  nowTime = moment().format("h:mm:ss a")
}
  
