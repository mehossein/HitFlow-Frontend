import { Injectable, Optional } from '@angular/core';
import { ApplicationConfig } from '../class/application-config.class';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(@Optional() appConfig: ApplicationConfig) {}
}
