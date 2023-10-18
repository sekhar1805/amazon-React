// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnhvKugO_ez_FPfX-sjMeL4NhR7ODPn38",
  authDomain: "react-10c19.firebaseapp.com",
  projectId: "react-10c19",
  storageBucket: "react-10c19.appspot.com",
  messagingSenderId: "204299963940",
  appId: "1:204299963940:web:eb5db1bf1f86ee8fec52b1",
  measurementId: "G-57HGF6K26R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
