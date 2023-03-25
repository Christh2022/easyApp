import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDZXq6YJs-1OpgMLPKY8UfdQY07JGnk43Y",
    authDomain: "easystudy-23d36.firebaseapp.com",
    projectId: "easystudy-23d36",
    storageBucket: "easystudy-23d36.appspot.com",
    messagingSenderId: "119535271373",
    appId: "1:119535271373:web:025951aed94d38d8065884",
    measurementId: "G-2SMR3394FF"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);