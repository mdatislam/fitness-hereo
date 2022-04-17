// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zuU9iX7b5js_sJUFtF7k4cWKZ2_3EAg",
  authDomain: "fitness-heroes-684e6.firebaseapp.com",
  projectId: "fitness-heroes-684e6",
  storageBucket: "fitness-heroes-684e6.appspot.com",
  messagingSenderId: "819384681058",
  appId: "1:819384681058:web:a7da5c4aca2e304eff873b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;