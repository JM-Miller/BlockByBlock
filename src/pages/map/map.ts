import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.initializeMap();
  }
  initializeMap() {
 
    let locationOptions = {timeout: 20000, enableHighAccuracy: true};
 
    navigator.geolocation.getCurrentPosition(
 
        (position) => {
 
            let options = {
              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
 
            this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
        },
 
        (error) => {
            console.log(error);
        }, locationOptions
    );
}
}
