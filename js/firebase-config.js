// ============================================================
//  firebase-config.js — تهيئة Firebase
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCF5WQXu7c17SalqemvGGsywRpA6Cyog8",
  authDomain: "ecpc-967a8.firebaseapp.com",
  projectId: "ecpc-967a8",
  storageBucket: "ecpc-967a8.firebasestorage.app",
  messagingSenderId: "232739819994",
  appId: "1:232739819994:web:6db066b75c14fd8efbb0e3",
  measurementId: "G-V4JEG74GEM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
