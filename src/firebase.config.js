// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBfdz53jRw6KSzRRp7-w9NJlHA01YwO8s",
  authDomain: "todo-cc2df.firebaseapp.com",
  projectId: "todo-cc2df",
  storageBucket: "todo-cc2df.appspot.com",
  messagingSenderId: "652987440263",
  appId: "1:652987440263:web:53d033b768ee31db8aec22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
