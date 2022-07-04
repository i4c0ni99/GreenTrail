import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare let google: any;
/// <reference path="<relevant path>/node_modules/@types/googlemaps/index.d.ts" />
/// <reference types="@types/googlemaps" />

@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map: google.maps.Map;

  constructor(private router: Router) {
    let map: google.maps.Map, infoWindow: google.maps.InfoWindow, popup, Popup;
  }

  ionViewDidEnter() {
    this.initMap();
    this.translateSearchDiv();
  }

  translateSearchDiv() {
    const searchDiv: HTMLElement = document.getElementById('searchDiv');
    const searchButton: HTMLElement = document.getElementById('searchButton');

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    searchButton.addEventListener('click', function () {
      searchDiv.classList.remove('close');
      searchDiv.classList.add('open');
    });
    const map: HTMLElement = document.getElementById('map');
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    map.addEventListener('click', function () {
      searchDiv.classList.remove('open');
      searchDiv.classList.add('close');
    });


  }

  caricaMieiPercorsi() {
    this.router.navigate(['i-miei-precorsi']);
  }

  login() {
    this.router.navigate(['login']);
  }

  function

  initMap(): void {
    const myLatLng = {lat: 42.34977851929018, lng: 13.400034728096433};
    const ABRUZZO_BOUNDS = {
      north: 42.89199921795653,
      south: 41.75940595741888,
      west: 13.018346937320848,
      east: 14.71233312411765,
    };

    let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: new google.maps.LatLng(myLatLng),
      restriction: {
        latLngBounds: ABRUZZO_BOUNDS,
        strictBounds: false,
      },
      zoom: 12,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      suppressInfoWindows:true
    });

    const features = [
      {
        position: new google.maps.LatLng(42.17632, 13.96273),
      },
      {
        position: new google.maps.LatLng(42.3500456, 13.4004023),
      },
      {
        position: new google.maps.LatLng(42.35422330100687, 13.353005860856896),
      }
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
        },
        draggable: false,
        map: map,
      });
    }

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.38418139745604, 13.369048983870183),
      map,
      title: "Clicca per zoommare",
    });
/*
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(marker.getPosition() as google.maps.LatLng);
      }, 3000);
    });
/*
    marker.addListener("click", () => {
      map.setZoom(14);
      map.setCenter(marker.getPosition() as google.maps.LatLng);
    });
*/
    /* Info Window Marker
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">MAXII</h1>' +
        '<div id="bodyContent">' +
        "<p>Risultato di ricerca</p>" +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(42.353277017351395, 13.400095419554324),
      map,
      title: "MAXXI L'Aquila",
    });

    marker1.addListener("click", () => {
      infowindow.open({
        anchor: marker1,
        map,
        shouldFocus: false,
      });
    });
    */

    class Popup extends google.maps.OverlayView {
      position: google.maps.LatLng;
      containerDiv: HTMLDivElement;

      constructor(position: google.maps.LatLng, content: HTMLElement) {
        super();
        this.position = position;

        content.classList.add("popup-bubble");

        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement("div");

        bubbleAnchor.classList.add("popup-bubble-anchor");
        bubbleAnchor.appendChild(content);

        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);

        // Optionally stop clicks, etc., from bubbling up to the map.
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      }

      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes()!.floatPane.appendChild(this.containerDiv);
      }

      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }

      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
            this.position
        )!;

        // Hide the popup when it is far out of view.
        const display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                ? "block"
                : "none";

        if (display === "block") {
          this.containerDiv.style.left = divPosition.x + "px";
          this.containerDiv.style.top = divPosition.y + "px";
        }

        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }
      }

    }
    /*
    let popup = new Popup(
        new google.maps.LatLng(42.3500456, 13.4004023),
        document.getElementById("content") as HTMLElement
    );
    popup.setMap(map);
    */

  }

  ngOnInit(): void {

  }

}
