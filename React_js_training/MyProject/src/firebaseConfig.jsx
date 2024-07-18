import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpH_53W-Eltt_JqdPgEkfRcOpKIa_7sMo",
  authDomain: "fbreactjs-d8891.firebaseapp.com",
  projectId: "fbreactjs-d8891",
  storageBucket: "fbreactjs-d8891.appspot.com",
  messagingSenderId: "466793487124",
  appId: "1:466793487124:web:c43134bc27a8940bdc0001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};