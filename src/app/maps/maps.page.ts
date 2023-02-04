import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { DocteursService } from '../_services/docteur/docteurs.service';
import { AnySrvRecord } from 'dns';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
  providers: [
    Geolocation]
})
export class MapsPage {
  map!:L.Map;
  professionnels:any


  constructor(private geolocalisation:Geolocation ,private professionnelService:DocteursService) { }

  
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

  getProfessionnels() {
    this.professionnelService.getAllProfessionnel()
      .subscribe(professionnels => {
        this.professionnels = professionnels;
        this.markProfessionnels();
      });
  }

  markProfessionnels() {
    this.professionnels.forEach((professionnel: { latitude: any; longitude: any; }) => {
      const lat = professionnel.latitude;
      const lng = professionnel.longitude;
      const marker = L.marker([lat, lng]);
      this.map.addLayer(marker)
    

})

  }

}
