// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtloiRErTvCRC0Hb--tzB6xr7m_H-1tqc",
  authDomain: "chatapp-tutorial-41b7f.firebaseapp.com",
  projectId: "chatapp-tutorial-41b7f",
  storageBucket: "chatapp-tutorial-41b7f.appspot.com",
  messagingSenderId: "664529030400",
  appId: "1:664529030400:web:245fdd6a0f4468725277e5",
  measurementId: "G-PS7GF9TH9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getFirestore();