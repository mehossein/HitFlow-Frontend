import { Provider } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkeletonCardComponent } from './skeleton/skeleton-card/skeleton-card.component';
import { SkeletonTextComponent } from './skeleton/skeleton-text/skeleton-text.component';

export const COMPONENTS: Provider[] = [
  NavbarComponent,
  CardComponent,
  ButtonComponent,
  SkeletonTextComponent,
  SkeletonCardComponent
];
