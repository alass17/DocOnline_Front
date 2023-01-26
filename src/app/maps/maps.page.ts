import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage  {
  map!:L.Map;

  constructor() { }

  // ngOnInit() {

    
  // }
  ionViewDidEnter(){
    this.map=L.map('mapId').setView([35.76943, -5.80081], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const markPoint=L.marker([35.76943, -5.80081]);
    
    markPoint.bindPopup('<p>Mosquee</p>');
    this.map.addLayer(markPoint);
    

  }

}
