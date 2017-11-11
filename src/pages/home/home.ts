import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import * as moment from 'moment';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { HTTP } from '@ionic-native/http';

// ionic cordova run browser - use this

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public locationlat;
  public locationlng;

  constructor(public navCtrl: NavController, public http: HTTP, private platform: Platform, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    
     platform.ready().then(() => {

      this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
      .then((result: NativeGeocoderReverseResult)=>{
      console.log("working");
  }).catch((error: any) => console.log(error));


    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      console.log(resp.coords.latitude+", "+resp.coords.longitude);
      this.locationlat = (resp.coords.latitude);
      this.locationlng = (resp.coords.longitude);
        }
    )

  })

 }
    

  now = moment().format("dddd, MMMM Do YYYY"); 
  nowTime = moment().format("h:mm:ss a")
}
  
