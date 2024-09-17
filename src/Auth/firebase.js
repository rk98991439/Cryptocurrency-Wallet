// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9d2BwA-sqC50UEcYrM83yk5ZXFCSnqYg",
  authDomain: "crypto-wallet-736b2.firebaseapp.com",
  projectId: "crypto-wallet-736b2",
  storageBucket: "crypto-wallet-736b2.appspot.com",
  messagingSenderId: "321751462908",
  appId: "1:321751462908:web:9a1198244ca45c7ceab879",
  measurementId: "G-1NZ28WFVS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
