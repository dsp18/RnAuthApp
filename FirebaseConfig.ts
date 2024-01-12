// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYexxoAw7DwUyO7n4BpOxtMy2847txrZk",
  authDomain: "rnauth-f6132.firebaseapp.com",
  projectId: "rnauth-f6132",
  storageBucket: "rnauth-f6132.appspot.com",
  messagingSenderId: "626360707644",
  appId: "1:626360707644:web:252bfbab347b0b8b343139",
  measurementId: "G-9SG5WT1VY7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);