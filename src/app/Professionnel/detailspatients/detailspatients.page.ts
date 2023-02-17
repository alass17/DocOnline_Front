import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailspatients',
  templateUrl: './detailspatients.page.html',
  styleUrls: ['./detailspatients.page.scss'],
})
export class DetailspatientsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  back(): void {
    window.history.back()
  }
}
