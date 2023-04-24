import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA2v7RsHd8Le3ECjvb4NzOmPxUw4pTPu0U",
    authDomain: "react-crud-146a9.firebaseapp.com",
    projectId: "react-crud-146a9",
    storageBucket: "react-crud-146a9.appspot.com",
    messagingSenderId: "443889306284",
    appId: "1:443889306284:web:a1732caee528d40d006d09",
    measurementId: "G-63XR7JLB1Q"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);