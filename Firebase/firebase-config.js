// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore-compat.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth-compat.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltzMJnS3n6LJ4o1obLpu526WZdHixjwk",
  authDomain: "fir-sirmaacademy.firebaseapp.com",
  projectId: "fir-sirmaacademy",
  storageBucket: "fir-sirmaacademy.appspot.com",
  messagingSenderId: "995403328988",
  appId: "1:995403328988:web:274a995504ea5606bc7319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);