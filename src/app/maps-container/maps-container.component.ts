import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-maps-container',
  templateUrl: './maps-container.component.html',
  styleUrls: ['./maps-container.component.scss']
})
export class MapsContainerComponent implements OnInit{
  title = "google-maps";

  private map?: google.maps.Map;

  @ViewChild('map', { static: true }) mapElement!: ElementRef;
  ngOnInit() {
    let loader = new Loader({
      apiKey: 'AIzaSyAn3Dt6Bnq1kDHa_tZc0mHWHCFWAwgSN7w',
    })
    loader.load().then(() => {
      console.log("Map Loaded");
      //47.59194026728252, 7.559004682040808
      const location = {
        lat: 47.59194026728252,
        lng: 7.559004682040808
      };
      const element: HTMLElement = document.getElementById('map')!;
      this.map = new google.maps.Map(element, {
          center: location,
          zoom: 12
      });

      const marker = new google.maps.Marker({
        position:location,
        map:this.map,
      })
    });
  }

}
