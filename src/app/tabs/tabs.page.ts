
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { PatientService } from '../_services/Patient/patient.service';
import { StorageService } from '../_services/storage/storage.service';
import { Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopupnotificatonComponent } from '../popupnotificaton/popupnotificaton.component';
import { NotificationService } from '../_services/notification/notification.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  // @ViewChild('popover')
  // popover!: { event: Event; };

  // isOpen = false;

  // presentPopover(e: Event) {
  //   this.popover.event = e;
  //   this.isOpen = true;
  // }




  
  id:any
  user:any
  imageprofil: any;
  patients:any
  nom: any;
  roleMsg = '';
  notifications: any;
  total: any;
  
  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
   ,private patientService:PatientService,public popoverController: PopoverController,private notification:NotificationService) {
    this.user = this.storageService.getUser();
    this.nom=this.user.nom
    
   }

   async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopupnotificatonComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }
  
    ngOninit(){
     
      this.nom=this.user.nom
      this.user = this.storageService.getUser();
      console.log(this.user)

      this.notification.AffichernotificationforPatient(this.user.id).subscribe(data =>{
        this.notifications=data
        this.total=this.notifications.length
       
      })
      
      // this.id = this.router.snapshot.params['id']
  
      // this.userService.getAllUsers().subscribe(data => {
      //   console.log(data)
      //   this.util = data;
      // });
  
  
      this.patientService.getPatientById(this.user.id).subscribe(data => {
        console.log(data)
        this.patients=data
        this.imageprofil=data.imageprofil
      })
    }
    logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.route.navigate(['/connexion'])
      },
      error: err => {
        console.log(err);
      }
    });
  }


   
  
}


 

//  goToMonProfil(id:Number){
//   return this.route.navigate(['/monprofil', id])
// }


