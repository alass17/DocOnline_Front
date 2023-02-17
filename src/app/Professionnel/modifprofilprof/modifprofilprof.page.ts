import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docteur } from 'src/app/Classes/docteur/docteur';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';
import { PatientService } from 'src/app/_services/Patient/patient.service';
import { StorageService } from 'src/app/_services/storage/storage.service';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-modifprofilprof',
  templateUrl: './modifprofilprof.page.html',
  styleUrls: ['./modifprofilprof.page.scss'],
})
export class ModifprofilprofPage implements OnInit {
 
  modifs:any
  informations:string="information"
 

  modif1:any

  

  imageprofil:any
  user:any
  modifpatients:any
  modif:any

  professionnel!: Docteur;
  id!: number;
  changer: any;
  constructor(private storage :StorageService,private userService:UserService,

    private route:  ActivatedRoute,private professionnelService:DocteursService,
    private patientService:PatientService,private authService:AuthService) { 

      this.user = this.storage.getUser();
        
      this.modif = {
        nom: this.user.nom,
        numero: this.user.numero,
        email: this.user.email,
        password: null,
        confirmpassword: null,
        adresse: this.user.adresse,
      };

      this.modif1 = {
        numeroOrEmail:null,
        currentpassword: null,
        newpassword: null,
        confirmpassword: null,
      };
    }

    
nom:any
  ngOnInit() {
    //this.id = this.route.snapshot.params['id']
    console.log(this.user);
    this.nom = this.user.nom;    

   
  }

  chargeImageProfil(evente: any){
    this.imageprofil = evente.target["files"][0]
    console.log(this.imageprofil);
  }
    onSubmit(): void {
      const { nom,numero, email,adresse } = this.modif;
  
      this.professionnelService.Modifierprofessionnels(nom,this.imageprofil,numero, email,adresse,this.user.id).subscribe(data =>{
        this.modifs=data;
        console.log(data)
      })
  }
  back(): void {
    window.history.back()
  }

  ModifierMotdepasse(){
    this.authService.ChangerMdp(this.modif1.currentpassword,this.modif1.newpassword,this.modif1.confirmpassword,this.user.numero).subscribe(data=>{
      this.changer=data
      console.log(data)
    })
  }
}
