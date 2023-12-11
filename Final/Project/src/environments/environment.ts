import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig =  {
  apiKey: "AIzaSyCa2DbjJGB0j8m32ebMxoWLZ_KgfAokjoE",
  authDomain: "hustlehub-3fa19.firebaseapp.com",
  projectId: "hustlehub-3fa19",
  storageBucket: "hustlehub-3fa19.appspot.com",
  messagingSenderId: "406838897118",
  appId: "1:406838897118:web:9f7d9afa25c6126227d54f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {firebaseConfig, auth, db};