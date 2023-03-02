import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupnotificatonComponent } from 'src/app/popupnotificaton/popupnotificaton.component';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';
import { NotificationService } from 'src/app/_services/notification/notification.service';
import { RendezVousService } from 'src/app/_services/rendez-vous/rendez-vous.service';
import { AuthService } from '../../_services/auth/auth.service';
import { StorageService } from '../../_services/storage/storage.service';

@Component({
  selector: 'app-rendezvousprof',
  templateUrl: './rendezvousprof.page.html',
  styleUrls: ['./rendezvousprof.page.scss'],
})
export class RendezvousprofPage implements OnInit {

  
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

  constructor(private authService:AuthService,private storage:StorageService,private route:Router,private docteurService:DocteursService
    ,private rdvService:RendezVousService,private popoverController: PopoverController,
    private notification:NotificationService,private router:ActivatedRoute) { }


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

    this.user = this.storage.getUser();
    this.rdvService.getAllRendezvousForProfessionnel(this.user.id).subscribe(data =>{
      this.mesrdv=data
      console.log(data)

    })

   ///::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

   this.rdvService.affichertouslesrendezvousProf(this.user.id).subscribe(data =>{
    this.tous=data
   })

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

  goToDetailsDocteur(id:Number){
    return this.route.navigate(['/rdvdetails', id])
  }
}
