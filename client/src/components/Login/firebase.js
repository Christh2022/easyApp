// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpUVDHgVnEpPXlrEv33Npj5uV35OK2bp0",
  authDomain: "easystudy-dd95f.firebaseapp.com",
  projectId: "easystudy-dd95f",
  storageBucket: "easystudy-dd95f.appspot.com",
  messagingSenderId: "726768826290",
  appId: "1:726768826290:web:fbe34820a048daf9fa56ab",
  measurementId: "G-MRFSS77PWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth (app);
