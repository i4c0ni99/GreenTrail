import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare let google;

@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  map:any;
constructor(private router: Router) {
  }

  ionViewDidEnter() {
    this.loadMap();
    this.translateSearchDiv();
  }
   translateSearchDiv() {
     const searchDiv: HTMLElement = document.getElementById('searchDiv');
     const searchButton: HTMLElement=document.getElementById('searchButton');

     // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
     searchButton.addEventListener('click',function() {
       searchDiv.classList.remove('close');
       searchDiv.classList.add('open');
     });
     const map: HTMLElement = document.getElementById('map');
     // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
     map.addEventListener('click', function(){
       searchDiv.classList.remove('open');
       searchDiv.classList.add('close');
     });


   }
   caricaMieiPercorsi(){
   this.router.navigate(['i-miei-precorsi']);
   }
   login(){
  this.router.navigate(['login']);
   }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');

    const myLatLng = {lat: 42.3506978, lng: 13.3999338};
    this.map = new google.maps.Map(mapEle, {
      center:myLatLng,
      zoom: 12,
      disableDefaultUI:true,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');

    });


  }

  ngOnInit(): void {
  }


}
