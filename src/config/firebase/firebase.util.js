import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsJigOVBkRAXbL5UXU-uwE2vJtCAbxECM",
  authDomain: "our-resto.firebaseapp.com",
  projectId: "our-resto",
  storageBucket: "our-resto.appspot.com",
  messagingSenderId: "982113736661",
  appId: "1:982113736661:web:26ed0082fa4a3873928f5c",
  measurementId: "G-X5CF869DW7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore(); // Get firestore from firebase

export default firebase;
