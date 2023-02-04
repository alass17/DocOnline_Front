import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { PatientService } from '../_services/Patient/patient.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  id:any
  user:any
  imageprofil1: any;
  patients:any
  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
    ,private storage:StorageService,private patientService:PatientService) {}
  
    ngOninit(){

      this.user = this.storage.getUser();
      console.log(this.user)
      
      // this.id = this.router.snapshot.params['id']
  
      // this.userService.getAllUsers().subscribe(data => {
      //   console.log(data)
      //   this.util = data;
      // });
  
  
      this.patientService.getPatientById(this.user.id).subscribe(data => {
        console.log(data)
        this.patients=data
        this.imageprofil1=data.imageprofil
      })
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


 

//  goToMonProfil(id:Number){
//   return this.route.navigate(['/monprofil', id])
// }


