// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDviNVEsAimgEMz70lC7SVz2FTqN-OYzMg",
  authDomain: "americanaxle-tire-manufacturer.firebaseapp.com",
  projectId: "americanaxle-tire-manufacturer",
  storageBucket: "americanaxle-tire-manufacturer.appspot.com",
  messagingSenderId: "93256906887",
  appId: "1:93256906887:web:f32cbf09587efa07fd2022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
