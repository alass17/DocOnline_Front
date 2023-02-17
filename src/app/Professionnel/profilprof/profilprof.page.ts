import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';
import { PatientService } from 'src/app/_services/Patient/patient.service';
import { StorageService } from 'src/app/_services/storage/storage.service';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-profilprof',
  templateUrl: './profilprof.page.html',
  styleUrls: ['./profilprof.page.scss'],
})
export class ProfilprofPage implements OnInit {
  nom: any = ''
  numero: any = ''
  email: any = ''
  adresse: any = ''

  user: any;

  docteurs:any=''

id:any

utilisateurs:any
allusers:any
  imageprofil: any;
  constructor(private storage :StorageService,private userService:UserService,
    private route:  ActivatedRoute,private docteurService:DocteursService) { }

  ngOnInit() {
     this.user = this.storage.getUser();
    console.log(this.user)


    this.docteurService.getProfessionnelById(this.user.id).subscribe(data => {
      console.log(data)
      this.docteurs=data
      this.imageprofil=data.imageprofil
    })
  }

  back(): void {
    window.history.back()
  }
}