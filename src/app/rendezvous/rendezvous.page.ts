import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.page.html',
  styleUrls: ['./rendezvous.page.scss'],
})
export class RendezvousPage implements OnInit {

  p:number=1
  rdvs:any
  user:any
  mesrdvs:any
  delrdv: any;
  constructor(private rendezvousService:RendezVousService,private storage:StorageService, private router : Router
  ) { 
    
  }
  

  ngOnInit() {
    console.log("je recharge:::::::::::::::::::::")
    this.getAllrendezVous()

  }


  goToDetailsRdv(id:Number){
    return this.router.navigate(['/rdvdetails', id])
  }

  


  getAllrendezVous(){
    this.user = this.storage.getUser().id;
    this.rendezvousService.getMyRendezVous(this.user).subscribe(data =>{
     this.mesrdvs=data;
     console.log(data)
  });

  

  }

   DeleteRdv(idrdv:number){
    this.rendezvousService.supprimerRendezVous(idrdv).subscribe(data=>{
    
      console.log("je suis cliquer")
      this.delrdv=data
     
      
      console.log(data)

      this.router.navigate(['/tabs/rendezvous']);
        })
      
    
    }

}
