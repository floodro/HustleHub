import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../environments/environment';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private alertController: AlertController,
  ) {}

  async login() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);

      // Check if the user exists in Firestore
      const userDocRef = doc(getFirestore(), 'users', userCredential.user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        // User not found in Firestore, trigger an alert
        await this.presentAlert('Login Unsuccessful', 'Wrong email / password.');
        // Sign out the user
        await auth.signOut();
        return;
      }

      // User exists in Firestore, proceed with navigation
      console.log('Login successful', userCredential);
      await this.presentAlert('Login Successful', 'Welcome back!');
      this.router.navigate(['/']);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login failed', errorCode, errorMessage);
      // TODO: Handle login failure, show an error message, etc.
      await this.presentAlert('Login Failed', 'An error occurred during login.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
