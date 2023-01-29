import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
  providers: [
    Geolocation]
})
export class MapsPage {
  map!:L.Map;

  constructor(private geolocalisation:Geolocation) { }

  
   ionViewDidEnter(){
    //Afficher la crate dans l'element avec l'id mapId 
    this.map=L.map('mapId').setView([12.72686,-8.05997],6);
  
    //permet d'afficher la vue en plusieur forme de map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
    ).addTo(this.map);
  
        //creer un marqueur
        const markPoint=L.marker([12.72686,-8.05997],)
  
        this.map.addLayer(markPoint); 
  }
  

}
