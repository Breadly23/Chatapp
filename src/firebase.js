// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-mMeGJUdNMO55rkbw4VOM2yIaHWwVyAI",
  authDomain: "demochat-a6131.firebaseapp.com",
  projectId: "demochat-a6131",
  storageBucket: "demochat-a6131.appspot.com",
  messagingSenderId: "43769930807",
  appId: "1:43769930807:web:bd344d2a06aae617970bb2",
  measurementId: "G-Y118MVDCXD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app.js);
