import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAGuci5rORT1gqKehV3Jtftsjy3dUg_opA",
  authDomain: "hustlehub-f7c85.firebaseapp.com",
  databaseURL: "https://hustlehub-f7c85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hustlehub-f7c85",
  storageBucket: "hustlehub-f7c85.appspot.com",
  messagingSenderId: "686190705372",
  appId: "1:686190705372:web:c0b76e61fdc4cf3c3c1219",
  measurementId: "G-1XGPGYD41K"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app: FirebaseApp = initializeApp(config);
  auth = getAuth(this.app);
  db: Firestore = getFirestore(this.app);
}
