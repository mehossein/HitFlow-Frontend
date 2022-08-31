import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  constructor(private readonly _loadingSercive: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loadingSercive.start();
    return next.handle(req).pipe(finalize(() => this._loadingSercive.stop()));
  }
}
