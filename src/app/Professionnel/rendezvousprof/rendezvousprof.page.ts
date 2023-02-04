import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from 'src/app/_services/rendez-vous.service';
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

  constructor(private authService:AuthService,private storage:StorageService,private route:Router
    ,private rdvService:RendezVousService) { }

  ngOnInit() {

    this.user = this.storage.getUser();
    this.rdvService.getAllPatientForProfessinnel(this.user.id).subscribe(data =>{
      this.mesrdv=data
      console.log(data)

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

}
