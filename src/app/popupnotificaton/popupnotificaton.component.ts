import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Notification } from '../Classes/notification';

import { NotificationService } from '../_services/notification/notification.service';
import { StorageService } from '../_services/storage/storage.service';
@Component({
  selector: 'app-popupnotificaton',
  templateUrl: './popupnotificaton.component.html',
  styleUrls: ['./popupnotificaton.component.scss'],
})
export class PopupnotificatonComponent implements OnInit {
  // notifications: any;
  // user: any;
  // isRead=false

  notifications: any;
  user: any;
  hiddenNotifications = [];
  notificationsprof: any;
  role: any;
  constructor(private notification:NotificationService,private storage:StorageService) { }

  ngOnInit() {
    this.user=this.storage.getUser()
this.role=this.user.roles
    this.notification.AffichernotificationforPatient(this.user.id).subscribe(data =>{
      this.notifications=data
      
    })

    this.notification.AffichernotificationforProfessionnel(this.user.id).subscribe(data =>{
      this.notificationsprof=data
      
    })

  }

  hideNotification(notification: Notification) {
    // Remove the notification from the notifications list
    this.notifications = this.notifications.filter((n: Notification) => n !== notification);
  }

  markAsRead(notification:Notification) {
    notification.isRead = true;
    this.hideNotification(notification);
  }

}
