import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  globalUsername: string[] = ['admin'];
  globalPassword: string[] = ['admin'];



  constructor() { }
}
