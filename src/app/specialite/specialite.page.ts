import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.page.html',
  styleUrls: ['./specialite.page.scss'],
})
export class SpecialitePage implements OnInit {

  user:any
  id:any
  specialites: any;
  spec1: any;
  dentiste: any;
  constructor(private docteurService:DocteursService,
    private storage:StorageService,private route: ActivatedRoute,
    private specialiteService:SpecialiteService) { 

      
     
    }

  ngOnInit() {
    
    this.user=this.storage.getUser()
    this.id = this.route.snapshot.params['id']
    this.specialiteService.getAllSpecialite().subscribe(data=>{
      this.specialites=data
      console.log(this.specialites)
    
      // this.spec1=this.specialites[0]
      this.docteurService.afficherprofparSpecialite(this.id).subscribe(data=>{
        this.dentiste=data
        console.log(data)
  
      })
    })
  }

  back(): void {
    window.history.back()
  }

}
