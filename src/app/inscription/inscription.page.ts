import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import Swal from 'sweetalert2';
import { AlerteService } from '../alerte.service';
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
  imageprofil: any

  inscriptionPatients: any


  userLatitude: any;
  userLongitude: any;
  geoAddress: any;
  // LOCATION
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }

  constructor(private patientService: PatientService, private nativeGeocoder: NativeGeocoder, private alertService: AlerteService) { }


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
  }

  chargeImageProfil(evente: any) {
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


  CreerComptePatient() {
    this.patientService.inscriptionPatient(this.formInscription.nom,
      this.imageprofil, this.formInscription.numero, this.formInscription.email,
      this.formInscription.password, this.formInscription.confirmpassword, this.formInscription.adresse,
      this.userLongitude, this.userLatitude).subscribe(data => {
        this.inscriptionPatients = data;
        console.log(data)
        // this.popup();
        this.alertService.presentToast(
          "Inscription effectuée avec succès!!.",
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

  // popup(){
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }
}
