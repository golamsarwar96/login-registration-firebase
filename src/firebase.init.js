// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB98Ko_tI11NmFg_mlX3PbC1v0UE9jnfkQ",
  authDomain: "login-registration-fireb-297cb.firebaseapp.com",
  projectId: "login-registration-fireb-297cb",
  storageBucket: "login-registration-fireb-297cb.firebasestorage.app",
  messagingSenderId: "840398810640",
  appId: "1:840398810640:web:df224dce5477f1b418a495",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
