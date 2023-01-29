import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  id:any
  user:any

  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
    ,private router:ActivatedRoute,private storage:StorageService) {}
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.route.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }
   ngOninit(){

    this.user = this.storage.getUser();
    console.log(this.user)
    // this.id = this.router.snapshot.params['id']

    // this.userService.getAllUsers().subscribe(data => {
    //   console.log(data)
    //   this.util = data;
    // });
  }
  
}


 

//  goToMonProfil(id:Number){
//   return this.route.navigate(['/monprofil', id])
// }


