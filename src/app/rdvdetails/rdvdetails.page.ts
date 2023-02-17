import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-rdvdetails',
  templateUrl: './rdvdetails.page.html',
  styleUrls: ['./rdvdetails.page.scss'],
})
export class RdvdetailsPage implements OnInit {
  id: any;
  rendezvous: any;
  nomprof: any;
  email: any;
  numero: any;
  heuredebut: any;
  heurefIN: any;
  odjet: any;
  date: any;
  user: any;
  role: any;
  nompatient: any;
  numeropatient: any;
  emailpatient: any;

  constructor(private rdv:RendezVousService,private route:ActivatedRoute,private storage:StorageService) { }

  ngOnInit() {

    this.user=this.storage.getUser()
    this.role=this.user.roles
    this.id = this.route.snapshot.params['id']

    this.rdv.getRendezvousById(this.id).subscribe(data => {
      console.log(data)
      this.rendezvous = data;
      this.nomprof=data.professionnel.nom
      this.numero = data.professionnel.numero
      this.email = data.professionnel.email
      this.heuredebut = data.fuseauHoraire.timeStart
      this.heurefIN = data.fuseauHoraire.timeEnd
      this.odjet = data.objetRdv.libelle;
      this.date=data.date

      this.nompatient=data.patient.nom
      this.numeropatient = data.patient.numero
      this.emailpatient = data.patient.email
      
    
     
    });
  }









  back(): void {
    window.history.back()
  }

}
