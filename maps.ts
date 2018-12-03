import { Component, ViewChild } from '@angular/core';
import { Platform } from "ionic-angular";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { MapsService } from '../../services/maps.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class MapsPage {
  @ViewChild('map') element;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, 
    public nav: NavController, 
    public mapsServ : MapsService) {
  }

  ionViewDidLoad() {
    this.mapsServ.getMaps()
      .subscribe(res => {
        console.log(res);
      });
  }
  
  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.mapsServ.getMaps()
      .subscribe(restaurants => this.initMap(restaurants));
    });
  }

  initMap (restaurants) {

    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let cameraCoordinates: LatLng = new LatLng(restaurants[0].position.lat, restaurants[0].position.lgn);
      let cameraPosition = {
        target: cameraCoordinates,
        zoom: 17
      };

      map.animateCamera(cameraPosition);

      restaurants.forEach((restaurant) => {

        let coordinates: LatLng = new LatLng(restaurant.position.lat, restaurant.position.lgn)
        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: "assets/imgs/local.png",
          title: restaurant.title
        };

        const marker = map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.showInfoWindow();
          });
      });
    })
  }
}
