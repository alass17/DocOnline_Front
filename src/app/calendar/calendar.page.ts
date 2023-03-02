import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { StorageService } from '../_services/storage/storage.service';
import { Calendar } from './Models/calendar';
import { Event } from './Models/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  popupResult!: boolean;
  popupMessage = '';
  calendarForm:any={
    date:null,
    medecinId:null
  }
  

  calendar: Calendar = {date: '', size: 0, events: []};
  events: Event[] = [];
  user: any;
  constructor(private privateService: DocteursService, private router: Router, private authService: AuthService,private storage:StorageService) { }

  ngOnInit() {
    this.user=this.storage.getUser()
    // On init get today Date.
    this.calendarForm.date = new Date().toISOString().slice(0, 10);
    this.getAppointment();
  }

  previousDate(value: string) {
    let dt = new Date(value);
    dt.setDate( dt.getDate() - 1 );
    this.calendarForm.date = dt.toISOString().slice(0, 10);
    this.calendar.date = this.calendarForm.date;
    this.getAppointment();
  }
  nextDay(value: string) {
    let dt = new Date(value);
    dt.setDate( dt.getDate() + 1 );
    this.calendarForm.date = dt.toISOString().slice(0, 10);
    this.calendar.date = this.calendarForm.date;
    this.getAppointment();
  }
  getAppointment() {
    this.privateService.calendarEvent(this.calendarForm.date,this.user.id)
    .subscribe(
      res => {
        this.calendar = res;
        this.events = res.events;
        console.log('Success =>' + res.body);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 500) {

            this.authService.logout();
          } else if (err.status === 404) {
            location.reload();
          }
        }
    }
    );
  }

  deleteEvent(event: Event) {
    if(confirm('Êtes-vous sûr de vouloir supprimer le rendez-vous ? (Un email d\'information sera envoyer au client)')) {
      this.privateService.deleteEvent(event.appointmentId).subscribe(
        res => {
          let indexOfEvent = this.events.indexOf(event);
          this.events.splice(indexOfEvent, 1 );
          this.calendar.size--;
        },
        err => {
          alert('Could not delete Event');
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 500) {
                this.router.navigate(['/login']);
            }
          }
        }
      );
    }
  }


  updateEventStatus(event: Event) {
    const status = (event.status) ? 'Activer' : 'Annuler';
    if (confirm('Vous allez ' + status + ' le rendez-vous | Mr.' + event.patientName  + ' sera notifer par email. ')) {
      this.privateService.changeEventStatus(event.appointmentId).subscribe(
        res => {

        },
        err => {
              alert('Une erreur s\'est produite lors de la mise à jour de l\'événement.');
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401 || err.status === 500) {
                    this.router.navigate(['/login']);
                }
              }
      }
      );
    }
  }


  back(): void {
    window.history.back()
  }


}
