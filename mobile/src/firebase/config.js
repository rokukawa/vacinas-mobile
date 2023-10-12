import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBTrUjG_gGASYn2gt2DGX4mXrBhMzZlPYc",
  authDomain: "mobile-9a5e2.firebaseapp.com",
  databaseURL: "https://mobile-9a5e2-default-rtdb.firebaseio.com",
  projectId: "mobile-9a5e2",
  storageBucket: "mobile-9a5e2.appspot.com",
  messagingSenderId: "610662405076",
  appId: "1:610662405076:web:4569f11bc74105c488fc41",
  measurementId: "G-PZVE37FTZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db }