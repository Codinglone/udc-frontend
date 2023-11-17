// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVgxlVJfJHyPv-8DU8aCz2w41bdOjh7k0",
  authDomain: "udc-website-10a7f.firebaseapp.com",
  projectId: "udc-website-10a7f",
  storageBucket: "udc-website-10a7f.appspot.com",
  messagingSenderId: "1037833706717",
  appId: "1:1037833706717:web:3a8ca8104936538a0b0f34",
  measurementId: "G-KG0PZRL4JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);