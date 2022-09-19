import { Provider } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';

export const COMPONENTS: Provider[] = [NavbarComponent, CardComponent,ButtonComponent];
