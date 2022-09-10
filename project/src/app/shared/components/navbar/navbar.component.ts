import { Component, OnInit } from '@angular/core';
import { environment } from 'project/src/environments/environment';

@Component({
  selector: 'hf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appName?: string = environment.applicationName;
  constructor() {}

  ngOnInit(): void {}
}
