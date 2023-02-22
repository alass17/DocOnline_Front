import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { DocteursService } from '../_services/docteur/docteurs.service';
import { AnySrvRecord } from 'dns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
  providers: [
    Geolocation]
})
export class MapsPage {
  map!: L.Map;
  professionnels: any


  constructor(private geolocalisation: Geolocation, private professionnelService: DocteursService
    , private router: Router) { }


  ionViewDidEnter() {
    //Afficher la crate dans l'element avec l'id mapId 
    this.map = L.map('mapId').setView([12.72686, -8.05997], 6);

    //permet d'afficher la vue en plusieur forme de map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
    ).addTo(this.map);

    //creer un marqueur
    // const markPoint=L.marker([12.72686,-8.05997],)

    // this.map.addLayer(markPoint); 



    // Récupérer tous les professionnels depuis le service Angular
    this.professionnelService.getAllProfessionnel()
      .subscribe((professionnels: any) => {
        // Itérer sur chaque professionnel pour ajouter un marqueur
        for (var i = 0; i < professionnels.length; i++) {
          var professionnel = professionnels[i];
          var marker = L.marker([professionnel.latitude, professionnel.longitude]).addTo(this.map);
          marker.bindPopup(professionnel.nom); // Afficher le nom du professionnel dans la popup

          // marker.on('click', () => {
          //   this.router.navigate(['/prendrerdv']);
          // });

          marker.on('click', (event: L.LeafletEvent) => {
            const marker = event.target;
            const popup = marker.getPopup();
            if (popup) {
              const popupElement = popup.getElement();
              if (popupElement) {
                popupElement.addEventListener('click', () => {
                  this.router.navigate(['/prendrerdv']);
                });
              }
            }
          });
        }
      });



  }

}

