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
  rdvs:any
  user:any
  mesrdvs:any
  constructor(private rendezvousService:RendezVousService,private storage:StorageService, private router : Router
  ) { }
  

  ngOnInit() {
    this.user = this.storage.getUser().id;

    this.rendezvousService.getAllRendezVous().subscribe(data =>{
      this.rdvs=data;
      console.log(data)
   });   
   this.rendezvousService.getMyRendezVous(this.user).subscribe(data =>{
    this.mesrdvs=data;
    console.log(data)
 });

  }


  goToDetailsRdv(id:Number){
    return this.router.navigate(['/rdvdetails', id])
  }

  
}
