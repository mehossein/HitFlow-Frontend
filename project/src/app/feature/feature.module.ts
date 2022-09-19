import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
    FeatureComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
