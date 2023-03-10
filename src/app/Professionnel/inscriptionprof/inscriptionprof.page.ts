import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SpecialiteService } from 'src/app/_services/specialite/specialite.service';
import { DocteursService } from 'src/app/_services/docteur/docteurs.service';

import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlerteService } from 'src/app/alerte.service';
@Component({
  selector: 'app-inscriptionprof',
  templateUrl: './inscriptionprof.page.html',
  styleUrls: ['./inscriptionprof.page.scss'],
})
export class InscriptionprofPage implements OnInit {

specialites:any
  professionnel:any
  

  inscriptionModel:any={
    nom:null,
    numero: null,
    email: null,
    password:null,
    confirmpassword: null,
    adresse:null,
    specialite:null,
    biographie:null
  }

  imageprofil:any
  document:any

  inscriptions:any
  spec:any
//:::::::::::::::::::::::::Bore::::::::::::::::::::::::::::::::::://

  // nom!: string;
  // imageprofil!:File;
  // numero!: string;
  // email!: string;
  // password!: string;
  // confirmpassword!: string;
  // adresse!: string;
  // document!: File;
  // idspec!: number
  // imageprofil!: File;
//:::::::::::::::::::::::::Bore::::::::::::::::::::::::::::::::::://


//::::::::::::::::::::::::::::nouveau:::::::::::::::::::::
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  file!:File
  profs:any
  registerForm: any;
  error: any;
  userLatitude: any;
  userLongitude: any;
  
  geoAddress: any;
// LOCATION
options: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
}


  // constructor(private authService:AuthService,private docteurService:DocteursService) { }
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient, private docteurService:DocteursService
    ,private formBuilder: FormBuilder,private router: Router,private specialiteService:SpecialiteService, private nativeGeocoder: NativeGeocoder,
    private alertService:AlerteService) {

  }

  // Location debut
  async fetchLocation() {
    const location = await Geolocation.getCurrentPosition();
    console.log('location = ', location);
    this.nativeGeocoder.reverseGeocode(location.coords.latitude,
      location.coords.longitude,
      this.options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('result = ', result);
        console.log('result 0 = ', result[0]);

        this.geoAddress = this.generateAddress(result[0]);
        console.log('location address = ', this.geoAddress);
      });

      this.userLatitude = location.coords.latitude
      this.userLongitude = location.coords.longitude

  }

  generateAddress(addressObj: any) {
    let obj: any[] = [];
    let uniqueNames: any[] = [];
    let address = "";
    for (let key in addressObj) {
      if (key !== 'areasOfInterest') {
        obj.push(addressObj[key]);
      }
    }

    let i = 0;
    obj.forEach(value => {
      if (uniqueNames.indexOf(obj[i]) === -1) {
        uniqueNames.push(obj[i]);
      }
      i++;
    });

    uniqueNames.reverse();
    for (const val of uniqueNames) {
      if (uniqueNames[val].length > 0) {
        address += uniqueNames[val] + ', ';
      }
    }
    return address.slice(0, -2);
  }
  // fin location
  
  ngOnInit() {
 
this.fetchLocation()
this.specialiteService.getAllSpecialite().subscribe(data => {
  
  this.specialites = data;
  console.log(this.specialites[0])
});



}

chargeDocument(event: any){
  this.document = event.target["files"][0]
  console.log(this.document);
}

chargeImageProfil(evente: any){
  this.imageprofil = evente.target["files"][0]
  console.log(this.imageprofil);
}
  
    //   onFileChange(event: any) {
    //     this.form.document = event.target.files[0];
    //     // this.document = file;
    //     console.log(event)
    // }

 
//:::::::::::::::::::::::::Bore::::::::::::::::::::::::::::::::::://

    // CreerCompteProf() {
    //   console.log("nom" +this.form.nom);
    //       console.log("DOCUMENT " +this.form.document);
    //       console.log("numero" +this.form.numero);
    //       console.log("email" +this.form.email);
    //       console.log("password" +this.form.password);
    //       console.log("confirmpassword" +this.form.confirmpassword);
    //       console.log("adresse" +this.form.adresse);
    //       console.log("idspec " +this.specialites.idspec);
    //       const{
    //         nom, document, numero, email, password, confirmpassword, adresse, idspec, imageprofil
    //       } = this.form;
    //       console.log(idspec);
    //   this.docteurService.Incrireprofs(nom,imageprofil, numero, email, password, confirmpassword, adresse, document,this.specialites.idspec)
    //    .subscribe(data => {
    //       this.professionnel = data;
    //       console.log(data)
    //       // console.log("nom" +this.nom);
    //       // console.log("imageprofil" +this.imageprofil);
    //       // console.log("numero" +this.numero);
    //       // console.log("email" +this.email);
    //       // console.log("password" +this.password);
    //       // console.log("confirmpassword" +this.confirmpassword);
    //       // console.log("adresse" +this.adresse);
    //       // console.log("idspec" +this.idspec);

    //   }
    //   );
    // }
   //:::::::::::::::::::::::::Bore::::::::::::::::::::::::::::::::::://

   CreerCompteProf(){
    this.docteurService.Inscriptionprofessionnels(this.inscriptionModel.nom,
      this.imageprofil,this.inscriptionModel.numero,this.inscriptionModel.email,
      this.inscriptionModel.password,this.inscriptionModel.confirmpassword,this.inscriptionModel.adresse,
      this.document,this.spec,this.userLatitude,this.userLongitude,this.inscriptionModel.biographie).subscribe(data =>{
      this.inscriptions=data;
      console.log(data)

  this.alertService.presentToast(
          "Inscription effectu??e avec succ??s!!.",
          "success"
        );
      }, error => {
        console.log(error);
        //Une alerte d'erreur
        this.alertService.presentToast(
          "Une erreur est survenu lors de l'inscription ...",
          "danger"
        );
      })

  }


  }



  

 

 



