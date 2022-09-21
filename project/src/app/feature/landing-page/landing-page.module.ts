import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule,
  ]
})
export class LandingPageModule { }
