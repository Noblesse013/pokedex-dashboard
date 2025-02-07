
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD394IiYFp7vUE585gRc7BmAUQhzFLrerU",
  authDomain: "pokedex-d0ab2.firebaseapp.com",
  projectId: "pokedex-d0ab2",
  storageBucket: "pokedex-d0ab2.firebasestorage.app",
  messagingSenderId: "604641548982",
  appId: "1:604641548982:web:0e5a64d9cd304bbeba2417",
  measurementId: "G-18P7TNTFRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);