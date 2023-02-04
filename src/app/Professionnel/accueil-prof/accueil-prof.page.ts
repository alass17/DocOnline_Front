import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth/auth.service';
import { StorageService } from '../../_services/storage/storage.service';

@Component({
  selector: 'app-accueil-prof',
  templateUrl: './accueil-prof.page.html',
  styleUrls: ['./accueil-prof.page.scss'],
})
export class AccueilProfPage implements OnInit {

  constructor(private authService:AuthService,private storageService:StorageService,private route:Router) { }

  ngOnInit() {
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
