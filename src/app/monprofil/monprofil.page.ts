import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage/storage.service';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.page.html',
  styleUrls: ['./monprofil.page.scss'],
})
export class MonprofilPage implements OnInit {

  nom: any = ''
  numero: any = ''
  email: any = ''
  adresse: any = ''

  user: any;

id:any

utilisateurs:any
allusers:any
  constructor(private storage :StorageService,private userService:UserService,
    private route:  ActivatedRoute) { }

  ngOnInit() {
    this.user = this.storage.getUser();
    console.log(this.user)
    // this.id = this.route.snapshot.params['id']

    // this.userService.getUsersById(this.id).subscribe(data => {
    //   console.log(data)
    //   this.utilisateurs = data;
    //   this.nom = data.nom
    //   this.numero = data.numero
    //   this.email = data.email
    //   this.adresse = data.adresse
    //   console.log("user +" + this.user)
      
    // });

    // this.userService.getAllUsers().subscribe(data =>{
    //   console.log(data)
    //   this.allusers=data
    // })
  }

  back(): void {
    window.history.back()
  }
}
