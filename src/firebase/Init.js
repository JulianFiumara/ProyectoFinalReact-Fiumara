import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4WYnZB5P-1uobSnnDZZMnlGhUS3LSZWw",
  authDomain: "proyectofinalreact-fiumara.firebaseapp.com",
  projectId: "mscarpinteria-7b1a4",
  storageBucket: "proyectofinalreact-fiumara.appspot.com",
  messagingSenderId: "918753274294",
  appId: "1:918753274294:web:f15b654b438679257e3917",
  measurementId: "G-RLVY9VH57L",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
