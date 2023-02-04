import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../_services/rendez-vous.service';
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
  constructor(private rendezvousService:RendezVousService,private storage:StorageService) { }
  

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

}
