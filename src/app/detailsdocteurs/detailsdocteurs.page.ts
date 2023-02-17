import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Availability } from '../Classes/Availability/availability';
import { Docteur } from '../Classes/docteur/docteur';
import { Objet } from '../Classes/objet/objet';
import { Patient } from '../Classes/patient/patient';
import { RendezVous } from '../Classes/rendez-vous/rendez-vous';

import { DocteursService } from '../_services/docteur/docteurs.service';
import { ObjetService } from '../_services/objet/objet.service';
import { PatientService } from '../_services/Patient/patient.service';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-detailsdocteurs',
  templateUrl: './detailsdocteurs.page.html',
  styleUrls: ['./detailsdocteurs.page.scss'],
})
export class DetailsdocteursPage implements OnInit {
  doctors: any
  id: any
  professionnels: any
  specialites: any
  objets: any
  obj:any

  // Objet: RendezVous = {
  //   idrdv: 0,
  //   // jour: '',
  //   // heure: '',
  //   objet:new Objet,
  //   professionnel: new Docteur,
  //   patient: new Patient
  // }
  nom: any = ''
  numero: any = ''
  email: any = ''
  adresse: any = ''
  profession: any = ''
  iddocteur: any;
  user: any;
  imageprofil:any=''

  jourRdv: any
  heureRdv: any
  objetRdv: any

  idrdv!: number
  jour!: any
  heure!: any
  objet!: any
  professionnel!: any
  patient!: any

  rdvs: any






  constructor(private docteurService: DocteursService, private route: ActivatedRoute, private routers: Router, private specialiteService: SpecialiteService, private objetService: ObjetService, private storage: StorageService
    , private rdvservice: RendezVousService,private patientService:PatientService) { }

  ngOnInit() {

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    this.user = this.storage.getUser().id;
    this.id = this.route.snapshot.params['id']

    this.docteurService.getProfessionnelById(this.id).subscribe(data => {
      console.log(data)
      this.doctors = data;
      this.imageprofil=data.imageprofil
      this.nom = data.nom
      this.numero = data.numero
      this.email = data.email
      this.adresse = data.adresse
      this.iddocteur = data.id;
      this.profession = data.specialites  
      console.log("user +" + this.user)
      console.log("docteur +" + this.iddocteur)
    });

    this.docteurService.getAllProfessionnel().subscribe(data => {
      console.log(data)
      this.professionnels = data;
    });

    this.specialiteService.getAllSpecialite().subscribe(data => {
      console.log(data)
      this.specialites = data;
    });


    this.objetService.getAllObjet().subscribe(data => {
      this.objets = data;
      console.log(data)
      console.log(data.idobjet)
    });


    console.log("heure" + this.heure)
    console.log("jour" + this.jour)
    console.log("objet" + this.objet)
    console.log("erzerze" + this.rdvs)

  }

  back(): void {
    window.history.back()
  }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

}




  // AjouterRendezVous() {
  //   this.Objet.heure = this.heure;
  //   this.Objet.jour = this.jour;
  //   this.Objet.objet = this.objet;
  //   console.log("ertyutryu"+this.objet);  console.log("heure" + this.heure)
  //   console.log("jour" + this.jour)
  //   console.log("user" + this.user)
  //   console.log("docteur" + this.iddocteur)
  //   console.log("obj " + this.obj)
  //   this.rdvservice.PrendreRdv(this.jour, this.heure, this.obj, this.iddocteur, this.user).subscribe(data => {

  //     this.rdvs = data;
  //     console.log(this.jour)
  //     console.log(this.rdvs);

  //   })
  // }

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  

