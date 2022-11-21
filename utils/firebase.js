// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCEMSJbUFl4hDJoT50tUqsCVWgjSC4g2Do",
  authDomain: "next-13-blog-app.firebaseapp.com",
  projectId: "next-13-blog-app",
  storageBucket: "next-13-blog-app.appspot.com",
  messagingSenderId: "278346897070",
  appId: "1:278346897070:web:96fa28e53068700eb2bf3f",
  measurementId: "G-VLQTETL2LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);