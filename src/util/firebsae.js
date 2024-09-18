// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { auth, getAnalytics, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQXLiEekjw0AbeXvpuQXub03esfs95yw",
  authDomain: "ecommerce-app-329fc.firebaseapp.com",
  projectId: "ecommerce-app-329fc",
  storageBucket: "ecommerce-app-329fc.appspot.com",
  messagingSenderId: "838570549369",
  appId: "1:838570549369:web:c8d6bceca3833795b2b4a8",
  measurementId: "G-KLGF8PH8HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}