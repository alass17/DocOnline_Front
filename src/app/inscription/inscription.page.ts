import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { PatientService } from '../_services/Patient/patient.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  formInscription: any = {
    nom: null,
    numero: null,
    email: null,
    password: null,
    confirmpassword: null,
    adresse: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  imageprofil:any

  inscriptionPatients:any

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  chargeImageProfil(evente: any){
    this.imageprofil = evente.target["files"][0]
    console.log(this.imageprofil);
  }

  // onSubmit(): void {
  //   const { nom,numero, email, password,confirmpassword,adresse } = this.form;

  //   this.authService.inscription(nom,this.imageprofil,numero, email, password,confirmpassword,adresse).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  // }


  CreerComptePatient(){
    this.patientService.inscriptionPatient(this.formInscription.nom,
      this.imageprofil,this.formInscription.numero,this.formInscription.email,
      this.formInscription.password,this.formInscription.confirmpassword,this.formInscription.adresse,
     ).subscribe(data =>{
      this.inscriptionPatients=data;
      console.log(data)
    })

}
}
