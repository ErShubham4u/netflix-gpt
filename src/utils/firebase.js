// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4g9VJn4Pcb4qrsaZrj5DLQIP_52zq_jg",
  authDomain: "netflixgpt-a04ce.firebaseapp.com",
  projectId: "netflixgpt-a04ce",
  storageBucket: "netflixgpt-a04ce.appspot.com",
  messagingSenderId: "276760930916",
  appId: "1:276760930916:web:d7519a7727af2d0f208d71",
  measurementId: "G-EB94J2H9G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();