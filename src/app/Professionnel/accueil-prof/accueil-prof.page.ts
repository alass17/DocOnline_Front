import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupnotificatonComponent } from 'src/app/popupnotificaton/popupnotificaton.component';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';
import { NotificationService } from 'src/app/_services/notification/notification.service';
import { RendezVousService } from 'src/app/_services/rendez-vous/rendez-vous.service';
import { AuthService } from '../../_services/auth/auth.service';
import { StorageService } from '../../_services/storage/storage.service';

@Component({
  selector: 'app-accueil-prof',
  templateUrl: './accueil-prof.page.html',
  styleUrls: ['./accueil-prof.page.scss'],
})
export class AccueilProfPage implements OnInit {
  user: any;
  mesrdv: any;
  total: any;
  nom: any;
  tous: any;
  notifications: any;
  roleMsg = '';
  imageprofil: any;
  docteurs: any;
  patients: any;

  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
    ,private rdvService:RendezVousService,private docteurService:DocteursService, private popoverController: PopoverController,private notification:NotificationService) { }
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

    this.user = this.storageService.getUser();
    this.nom= this.user.nom
    this.rdvService.getAllRendezvousForProfessionnel(this.user.id).subscribe(data =>{
      this.mesrdv=data
      this.total=this.mesrdv.length
      console.log(data)

    })

    this.rdvService.getAllRendezvousForProfessionnel(this.user.id).subscribe(data =>{
      this.patients=data
      console.log(data)
  
  
    })
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    this.rdvService.affichertouslesrendezvousProf(this.user.id).subscribe(data =>{
      this.tous=data
     })
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    this.notification.AffichernotificationforProfessionnel(this.user.id).subscribe(data =>{
      this.notifications=data
      this.total=this.notifications.length


    })

     this.docteurService.getProfessionnelById(this.user.id).subscribe(data => {
        console.log(data)
        this.docteurs=data
        this.imageprofil=data.imageprofil
      })
  }
  // Déclarons des variables
  mesSlides = {
    slidesPerView: 1,   // NOMBRE DE SLIDE PAR PAGE = 1
    centeredSlider: true,
    loop: true,
    spaceBetween: 5,
    autoplay: true


  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.route.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }



}
