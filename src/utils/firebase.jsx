// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXSRcaGv-QTnWJxD0IbpP8ds0q_Sqrdwg",
  authDomain: "fakeflix-gpt.firebaseapp.com",
  projectId: "fakeflix-gpt",
  storageBucket: "fakeflix-gpt.appspot.com",
  messagingSenderId: "1081253561342",
  appId: "1:1081253561342:web:3b33eda02b8f7e99da76af",
  measurementId: "G-EPJZ6VHDR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();