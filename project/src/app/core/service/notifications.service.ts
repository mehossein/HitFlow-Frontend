import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(public toastr: ToastrService) {}

  showSuccess(
    message: string | undefined,
    header: string | undefined,
    timeOut: number = 5000
  ) {
    this.toastr.success(message, header, {
      timeOut: timeOut,
    });
  }
  showError(
    message: string | undefined,
    header: string | undefined,
    timeOut: number = 5000
  ) {
    this.toastr.error(message, header, {
      timeOut: timeOut,
    });
  }
  showInfo(
    message: string | undefined,
    header: string | undefined,
    timeOut: number = 5000
  ) {
    this.toastr.info(message, header, {
      timeOut: timeOut,
    });
  }
  showWarning(
    message: string | undefined,
    header: string | undefined,
    timeOut: number = 5000
  ) {
    this.toastr.warning(message, header, {
      timeOut: timeOut,
    });
  }
}
