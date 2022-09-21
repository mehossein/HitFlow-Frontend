import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
