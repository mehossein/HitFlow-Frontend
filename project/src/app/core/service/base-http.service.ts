import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { ApplicationConfig } from '../class/application-config.class';
import { catchError, map, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { UserService } from './user.service';
import { LoadingService } from './loading.service';
import { NotificationsService } from './notifications.service';
import { Response } from '../interface/response.interface';
@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private appConfig?: ApplicationConfig;
  constructor(
    private readonly _http: HttpClient,
    private readonly _userSrv: UserService,
    private readonly _loadingSrv: LoadingService,
    private readonly _notificationSrv: NotificationsService,
    @Optional() appConfig: ApplicationConfig
  ) {
    if (appConfig) this.appConfig = appConfig;
  }

  private _getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Token ' + this._userSrv.getToken,
    });
  }

  httpRequest<T = any>(
    url: string,
    httpVerb: HttpMethod,
    body?: Object
  ): Observable<Response<T>> {
    let request$: Observable<Response<T>>;
    const URL = `${this.appConfig?.environment.baseUrl}${url}`;
    const headers = this._getHttpHeaders();
    switch (httpVerb) {
      case 'GET':
        request$ = this._http.get<Response<T>>(
          `${URL}${this.paramGenerator(body)}`,
          {
            headers,
          }
        );
        break;
      case 'DELETE':
        request$ = this._http.delete<Response<T>>(
          `${URL}${this.paramGenerator(body)}`,
          {
            headers,
          }
        );
        break;
      case 'POST':
        request$ = this._http.post<Response<T>>(URL, body, { headers });
        break;

      case 'PUT':
        request$ = this._http.put<Response<T>>(URL, body, { headers });
        break;
    }
    return request$.pipe(catchError((err) => this._errorHandler(err)));
  }

  private _errorHandler(error: HttpErrorResponse) {
    const { status, message } = error;
    this._notificationSrv.showError(message, `Status: ${status}`);
    this._loadingSrv.stop();
    return throwError(error);
  }

  private paramGenerator(model?: any): string {
    let path: string = '';
    if (model) {
      let keys = Object.keys(model);
      let value = Object.values(model);
      keys.forEach((element, index = 0) => {
        if ((index = 0)) {
          path = path + '?' + element + '=' + value[index];
        } else {
          path = path + '&' + element + '=' + value[index];
        }
      });
    }
    return path;
  }
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
