import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlerteService } from '../alerte.service';
import { Availability } from '../Classes/Availability/availability';
import { Docteur } from '../Classes/docteur/docteur';
import { RendezVous } from '../Classes/rendez-vous/rendez-vous';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { ObjetService } from '../_services/objet/objet.service';
import { PatientService } from '../_services/Patient/patient.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-prendrerdv',
  templateUrl: './prendrerdv.page.html',
  styleUrls: ['./prendrerdv.page.scss'],
})
export class PrendrerdvPage implements OnInit {
  availabilityRequest = {medecinId: 0 , date: ''};
  medecinSelectHasError = false;
  popupResult!: boolean;
  popupMessage = '';



  // -----
  medecins: any;
  availabilities: any;
  availabilityData: RendezVous = { date: '', shiftTimeId: 0, medecinId: 0};
  user: any;
  
  objets:any
  obj:any;
  id:any
  doctors: any;
  nom: any;



  constructor(private patientService: PatientService,private storage:StorageService,private objetService:ObjetService,private route : ActivatedRoute,
    private alertService:AlerteService,private router:Router,
    private docteurService:DocteursService) { }

  ngOnInit() {

    console.log(this.user)
    console.log(this.id)
    this.user = this.storage.getUser().id;
    this.id = this.route.snapshot.params['id']
    // On init get today Date.
    this.availabilityRequest.date = new Date().toISOString().slice(0, 10);
    this.availabilityData.date = this.availabilityRequest.date;
    this.getMedecin();


    this.objetService.getAllObjet().subscribe(data => {
      this.objets = data;
      this.obj=data.idobjet
      console.log(data)
     
    });

    this.id = this.route.snapshot.params['id']

    this.docteurService.getProfessionnelById(this.id).subscribe(data => {
      console.log(data)
      this.doctors = data;
    
      this.nom = data.nom
     
    });


  }

  getMedecin() {
    this.patientService.getAllMedecin()
    .subscribe(
      res => {
        this.medecins = res;
        console.log(this.medecins);
      },
      err => {
        // location.reload();
    }
    );
  }

  getAvailabilities() {
    this.patientService.getAllAvailabilities(this.availabilityRequest)
    .subscribe(
      res => {
        this.availabilities = res;
        console.log(this.availabilities)
      },
      err => {
        // alert('Erreur durant la prise de rendez-vous, veuillez r??essayer plus tard.');
        this.alertService.presentToast(
          "Erreur durant la prise de rendez-vous, veuillez r??essayer plus tard.",
          "danger"
        );
    }
    );
  }



  previousDate(value: string) {
    let dt = new Date(value);
    dt.setDate( dt.getDate() - 1 );
    this.availabilityRequest.date = dt.toISOString().slice(0, 10);
    this.availabilityData.date = this.availabilityRequest.date;
    this.getAvailabilities();
  }
  toDay(medecinId: number) {
    this.availabilityRequest.medecinId = medecinId;
    this.getAvailabilities();
  }
  nextDay(value: string) {
    let dt = new Date(value);
    dt.setDate( dt.getDate() + 1 );
    this.availabilityRequest.date = dt.toISOString().slice(0, 10);
    this.availabilityData.date = this.availabilityRequest.date;
    this.getAvailabilities();
  }



  sendAppointment() {

  
    if (this.availabilityData.shiftTimeId === 0) {
      this.alertService.presentToast(
        "Merci de choisir un docteur!!.",
        "danger"
      );
    } else {

    this.patientService.PrendreRdv(this.availabilityData,this.user,this.obj)
    .subscribe(
      res => {
        // alert("Evenement cr??er avec succ??s.");
        // location.reload();
        // this.popupResult = true;
        // this.popupMessage = 'Evenement cr??er avec succ??s.';
        this.alertService.presentToast(
          "Evenement cr??er avec succ??s!!.",
          "success"
        );
        this.reloadPage();
          },
      err => {
        // this.popupMessage = err.error.message;
        // this.popupResult = err.error.success;
        this.alertService.presentToast(
          // "Une erreur est survenu lors de la cr??ation de l'evenement ...",
          "Merci de choisir l'objet du rendez-vous!!.",
          "danger"
        );
        
            }

            
    );

    
  } 
  }

  back(): void {
    window.history.back()
  }

  reloadPage() {
    this.router.navigateByUrl('/tabs/rendezvous', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/tabs/rendezvous']);
    });
  }


  
}
