import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCPD3klhjfIoSSdj-vAR7FZaaWu6e0Z4wc",
  authDomain: "bookmart-9295e.firebaseapp.com",
  projectId: "bookmart-9295e",
  databaseURL: "gs://bookmart-9295e.appspot.com",
  storageBucket: "bookmart-9295e.appspot.com",
  messagingSenderId: "230517459682",
  appId: "1:230517459682:web:d81d0f43392aa391cfacbb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
