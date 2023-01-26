import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../_services/rendez-vous.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.page.html',
  styleUrls: ['./rendezvous.page.scss'],
})
export class RendezvousPage implements OnInit {
  rdvs:any

  constructor(private rendezvousService:RendezVousService) { }

  ngOnInit() {

    this.rendezvousService.getAllRendezVous().subscribe(data =>{
      this.rdvs=data;
      console.log(data)
   });
  }

}
