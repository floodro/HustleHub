import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../environments/environment';
import { AlertController } from '@ionic/angular'; // Assuming you are using Ionic

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  selectedJobType: string;

  jobTypes = [
    { label: 'Administrative Work', value: 'admin' },
    { label: 'Hospitality', value: 'hospitality' },
  ];

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private alertController: AlertController,
  ) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      await this.presentAlert('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Registered successfully', userCredential);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration failed', errorCode, errorMessage);
      });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
