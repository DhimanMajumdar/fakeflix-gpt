// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you needant to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVEF4hNzxWgIFe7Bg2DbjwkdgaZL1bglY",
  authDomain: "fakeflixgpt-44c97.firebaseapp.com",
  projectId: "fakeflixgpt-44c97",
  storageBucket: "fakeflixgpt-44c97.appspot.com",
  messagingSenderId: "295051094634",
  appId: "1:295051094634:web:e56efe3ed48b96ad5fb813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();