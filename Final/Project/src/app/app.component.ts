import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Landing', url: '/landing', icon:'rocket'},
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Registration', url: '/registration', icon: 'pencil' },
    { title: 'Main', url: '/main', icon:'home'},
    { title: 'Profile', url: '/profile', icon:'person'}
  ];
  constructor() {}
}
