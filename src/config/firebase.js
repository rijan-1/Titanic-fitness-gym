// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXVhtitJtGGj2J-BOg1Vr0POUubqwT3zc",
  authDomain: "react-course-5e180.firebaseapp.com",
  projectId: "react-course-5e180",
  storageBucket: "react-course-5e180.appspot.com",
  messagingSenderId: "558460041611",
  appId: "1:558460041611:web:b87700f33bb6f939d0578e",
  measurementId: "G-EB0ED8CMJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

