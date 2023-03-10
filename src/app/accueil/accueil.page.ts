import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  user:any
  id:any
  specialites: any;
  spec1: any;
  dentiste: any;
  searhText!: string;

  constructor(private docteurService:DocteursService,
    private storage:StorageService,private route:Router,
    private specialiteService:SpecialiteService) { }

  ngOnInit() {
    
    // this.user=this.storage.getUser()

    this.specialiteService.getAllSpecialite().subscribe(data=>{
      this.specialites=data
      console.log(this.specialites)
      console.log(this.specialites[0])
      // this.spec1=this.specialites[0]
      this.docteurService.afficherprofparSpecialite(this.specialites.idspec).subscribe(data=>{
        this.dentiste=data
        console.log(data)
  
      })
    })
   
  }

}
