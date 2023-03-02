import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import Swal from 'sweetalert2';
import { AlerteService } from '../alerte.service';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  form1!: FormGroup;
  form: any = {
    numeroOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any = [];

  constructor(private authService: AuthService, private storageService: StorageService, private route: Router,
    private alerteService:AlerteService) { }

  ngOnInit() {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }


  }
  onSubmit(): void {
    const { numeroOrEmail, password } = this.form;

    this.authService.connexion(numeroOrEmail, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
         this.roles = this.storageService.getUser().roles;
       // this.reloadPage();
        console.log(this.roles[0])
        if (this.roles[0]=='ROLE_PROFESSIONNEL') {
          
          
          this.route.navigate(['/tabsmedecin/accueil-prof']);
        }else if(this.roles[0]=='ROLE_PATIENT'){
            this.route.navigate(['/tabs/accueil']);
          }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.alerteService.presentToast(' <ion-icon name="warning" size="large"></ion-icon> Email ou mot de passe incorrect',"danger")
        this.isLoginFailed = true;
      }

      
      
    });

    
  }

  reloadPage(): void {
    window.location.reload();
  }


  
}
