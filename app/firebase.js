// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU7Pg69FlXB2Y6UZSxt5pMX8tEiWhinhk",

  authDomain: "auth-lienfy.firebaseapp.com",

  projectId: "auth-lienfy",

  storageBucket: "auth-lienfy.appspot.com",

  messagingSenderId: "41792572718",

  appId: "1:41792572718:web:e6811cb02bbcee409dbebf"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);