import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userData: any = {
    name: '',
    email: '',
    profilePicture: '',
  };

  getUserData() {
    return this.userData;
  }

  saveUserData(data: any) {
    this.userData = { ...data };
  }
}
