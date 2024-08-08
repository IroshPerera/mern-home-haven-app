// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-haven-9a5d6.firebaseapp.com",
  projectId: "home-haven-9a5d6",
  storageBucket: "home-haven-9a5d6.appspot.com",
  messagingSenderId: "1018427278388",
  appId: "1:1018427278388:web:616b535e908d152476b661"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);