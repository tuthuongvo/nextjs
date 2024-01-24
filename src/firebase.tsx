// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1TwUKYIbTMw41Jz-kdQPkqQwG_avKryI",
  authDomain: "sitepointbooks-969ea.firebaseapp.com",
  projectId: "sitepointbooks-969ea",
  storageBucket: "sitepointbooks-969ea.appspot.com",
  messagingSenderId: "776775702563",
  appId: "1:776775702563:web:61c04d9c7bfbf0c3563996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const auth = getAuth(app);
export { db }