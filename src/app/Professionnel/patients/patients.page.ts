import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupnotificatonComponent } from 'src/app/popupnotificaton/popupnotificaton.component';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';
import { NotificationService } from 'src/app/_services/notification/notification.service';
import { RendezVousService } from 'src/app/_services/rendez-vous/rendez-vous.service';
import { StorageService } from 'src/app/_services/storage/storage.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  user: any;
  mesrdv: any;
  mesrdvs1: any;
  tous: any;


  total: any;
  nom: any;

  notifications: any;
  roleMsg = '';
  imageprofil: any;
  docteurs: any;
  patients: any;

  constructor(private router : Router,private authService:AuthService
    ,private storage:StorageService,
    private route:Router,private docteurService:DocteursService

    ,private rdvService:RendezVousService,private popoverController: PopoverController,private notification:NotificationService,
    private rendezService:RendezVousService) { }

    async presentPopover(e: Event) {
      const popover = await this.popoverController.create({
        component: PopupnotificatonComponent,
        event: e,
      });
  
      await popover.present();
  
      const { role } = await popover.onDidDismiss();
      this.roleMsg = `Popover dismissed with role: ${role}`;
    }
    
  ngOnInit() {
      this.user=this.storage.getUser()

    this.rdvService.affichertouslesrendezvousProf(this.user.id).subscribe(data =>{
      this.tous=data
     })
  
     this.notification.AffichernotificationforProfessionnel(this.user.id).subscribe(data =>{
      this.notifications=data
      this.total=this.notifications.length
  
  
    })


    this.rendezService.getAllRendezvousForProfessionnel(this.user.id).subscribe(data =>{
      this.patients=data
      console.log(data)
  
  
    })
  
  
     this.docteurService.getProfessionnelById(this.user.id).subscribe(data => {
        console.log(data)
        this.docteurs=data
        this.imageprofil=data.imageprofil
      })
  
  }

  goToDetailsPatients(id:Number){
    return this.router.navigate(['/detailspatients', id])
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storage.clean();
        this.route.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
