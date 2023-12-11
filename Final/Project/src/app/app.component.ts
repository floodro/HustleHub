import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/landing', icon:'home'},
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Registration', url: '/registration', icon: 'pencil' },
  ];
  constructor() {}
}