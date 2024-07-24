// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUm_eMFpyVI7v3pomLrritICvqEQ8D2b0",
  authDomain: "hng-stage5a-link-sharing-app.firebaseapp.com",
  projectId: "hng-stage5a-link-sharing-app",
  storageBucket: "hng-stage5a-link-sharing-app.appspot.com",
  messagingSenderId: "115953517669",
  appId: "1:115953517669:web:c930e2f571e0e9627e728c",
  measurementId: "G-EFML5EXCX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);