// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9eY3kqFVEU8Lt3suK81L1ebdGfRJnMA",
  authDomain: "commerce-site-1c6e7.firebaseapp.com",
  projectId: "commerce-site-1c6e7",
  storageBucket: "commerce-site-1c6e7.appspot.com",
  messagingSenderId: "712934255209",
  appId: "1:712934255209:web:4a5096f335dfc9630010f8",
  measurementId: "G-C6RSFLW9TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);