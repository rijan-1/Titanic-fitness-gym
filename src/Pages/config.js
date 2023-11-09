// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA45gwdo3D9wLoMmqJR7QhHCh8GwyqL_6M",
  authDomain: "fir-api-49a76.firebaseapp.com",
  projectId: "fir-api-49a76",
  storageBucket: "fir-api-49a76.appspot.com",
  messagingSenderId: "600540671822",
  appId: "1:600540671822:web:eda0f5518290bb76a3f81f",
  measurementId: "G-ZBXCNPKK64"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

export const provider = new GoogleAuthProvider()
