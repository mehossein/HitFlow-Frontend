import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(private readonly NotificationsSrv : NotificationsService) {}
}
