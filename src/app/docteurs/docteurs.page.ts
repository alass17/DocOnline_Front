import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DocteursService } from '../_services/docteur/docteurs.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';

@Component({
  selector: 'app-docteurs',
  templateUrl: './docteurs.page.html',
  styleUrls: ['./docteurs.page.scss'],
})
export class DocteursPage implements OnInit {

  professionnels:any;
  specialites:any;
  idprof:any
  image: any;

  constructor(private docteurService:DocteursService,private specialiteService:SpecialiteService, private router : Router) { }

  ngOnInit() {

    this.docteurService.getAllProfessionnel().subscribe(data =>{
      console.log(data)
      this.professionnels=data;
      this.image=this.professionnels.imageprofil
   });

   this.specialiteService.getAllSpecialite().subscribe(data =>{
    console.log(data)
    this.specialites=data;
 });


 

  }

  goToDetailsDocteur(id:Number){
    return this.router.navigate(['/detailsdocteurs', id])
  }

  back(): void {
    window.history.back()
  }
}
