import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docteur } from '../Classes/docteur/docteur';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { PatientService } from '../_services/Patient/patient.service';
import { StorageService } from '../_services/storage/storage.service';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-profilmodif',
  templateUrl: './profilmodif.page.html',
  styleUrls: ['./profilmodif.page.scss'],
})
export class ProfilmodifPage implements OnInit {
  modifs:any
  modif: any = {
    nom: null,
    numero: null,
    email: null,
    password: null,
    confirmpassword: null,
    adresse: null,
  };

  

  imageprofil:any
  user:any
  modifpatients:any

  professionnel!: Docteur;
  id!: number;
  constructor(private storage :StorageService,private userService:UserService,
    private route:  ActivatedRoute,private professionnelService:DocteursService,private patientService:PatientService) { }

  ngOnInit() {
    this.user = this.storage.getUser().id;
    //this.id = this.route.snapshot.params['id']
    console.log(this.user)
    

   
  }

  chargeImageProfil(evente: any){
    this.imageprofil = evente.target["files"][0]
    console.log(this.imageprofil);
  }
  
  onSubmit(): void {
    const { nom,numero, email,adresse } = this.modif;

    this.professionnelService.Modifierprofessionnels(nom,this.imageprofil,numero, email,adresse,this.user).subscribe(data =>{
      this.modifs=data;
      console.log(data)
    })
     this.patientService.ModifierPatient(nom,this.imageprofil,numero, email,adresse,this.user).subscribe(data =>{
      this.modifpatients=data;
      console.log(data)
    })
  }

  back(): void {
    window.history.back()
  }

  
}
