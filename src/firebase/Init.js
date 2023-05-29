import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFOwcmswX9Kyv07Gkuxy--JhGfq651BoU",
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
