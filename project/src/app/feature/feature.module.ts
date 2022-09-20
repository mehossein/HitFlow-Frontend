import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';


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
