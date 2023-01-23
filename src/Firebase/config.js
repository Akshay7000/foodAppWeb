// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyCm536G0RJbIq2chRGruJuwikxKQ-c70OQ",
//   authDomain: "dkns-384ae.firebaseapp.com",
//   projectId: "dkns-384ae",
//   storageBucket: "dkns-384ae.appspot.com",
//   messagingSenderId: "1036386638534",
//   appId: "1:1036386638534:web:d3c53f5ad1866fd79c55c7",
// };
const firebaseConfig = {
  apiKey: "AIzaSyC-g5ce9VdKok0sCXmBa0mMZ-kVoB-Lb74",
  authDomain: "avyayahealth-9f67d.firebaseapp.com",
  projectId: "avyayahealth-9f67d",
  storageBucket: "avyayahealth-9f67d.appspot.com",
  messagingSenderId: "303314992075",
  appId: "1:303314992075:web:b05af320eddafdc55ed44e",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();
const auth = app.auth();
export { app, auth, firestore };
