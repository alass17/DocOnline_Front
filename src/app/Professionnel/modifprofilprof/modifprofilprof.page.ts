import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifprofilprof',
  templateUrl: './modifprofilprof.page.html',
  styleUrls: ['./modifprofilprof.page.scss'],
})
export class ModifprofilprofPage implements OnInit {
  informations:string="information"
  constructor() { }

  ngOnInit() {
  }
  back(): void {
    window.history.back()
  }
}
