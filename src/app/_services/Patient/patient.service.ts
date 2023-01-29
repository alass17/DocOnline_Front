import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  ModifierPatient(nom:any,imageprofil:File,numero:any,email:any,adresse:any,id:any){
    const data=new FormData();
    data.append("nom",nom)
    data.append("imageprofil",imageprofil)
    data.append("numero",numero)
    data.append("email",email)
    data.append("adresse",adresse)
  

    return this.http.put(`http://localhost:8080/patient/modifierpatient/${id}`,data)

  }
}
