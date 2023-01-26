import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const PATIENT_API = 'http://localhost:8080/patient/';
const PROF_API = 'http://localhost:8080/prof/signup/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  connexion(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        numeroOrEmail,
        password,
      },
      httpOptions
    );
  }

  inscription(nom: string,numero:string,email:string,password: string,confirmpassword: string, adresse: string): Observable<any> {
    return this.http.post(
      PATIENT_API + 'signup',
      {
        nom,
        numero,
        email,
        password,
        confirmpassword,
        adresse,
      },
      httpOptions
    );
  }

  inscriptionProfessionnel(nom: string,numero:string,email:string,password: string,confirmpassword: string, adresse: string,document:string): Observable<any> {
    return this.http.post(
      PROF_API + 'signup',
      {
        nom,
        numero,
        email,
        password,
        confirmpassword,
        adresse,
        document
      },
      httpOptions
    );
  }


  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }
  logout(): Observable<any> {
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }
}
