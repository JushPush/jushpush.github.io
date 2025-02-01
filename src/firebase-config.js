import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDc9S41pwhz_Mp3YsGKVwZ6AmR2sxwdFAs",
  authDomain: "karaportfolioblog.firebaseapp.com",
  projectId: "karaportfolioblog",
  storageBucket: "karaportfolioblog.firebasestorage.app",
  messagingSenderId: "183969525499",
  appId: "1:183969525499:web:cce704a4df674072520a5e",
  measurementId: "G-9Z1HL6RPX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();