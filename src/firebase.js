import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

//import {  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCwVzUOECn7pyAKKcwXiGj_k3fkCqCDLyA",
  authDomain: "challange-dc130.firebaseapp.com",
  projectId: "challange-dc130",
  storageBucket: "challange-dc130.appspot.com",
  messagingSenderId: "201536772027",
  appId: "1:201536772027:web:04c733f9b1dc4b8511d69e",
  measurementId: "G-7DWT27LGCD",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export {
  auth,
  analytics,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
