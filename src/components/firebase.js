// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Bjr44zgE1BH6ogSixRt69ZwqiO2ayKs",
  authDomain: "fir-react-auth-ab2b0.firebaseapp.com",
  projectId: "fir-react-auth-ab2b0",
  storageBucket: "fir-react-auth-ab2b0.appspot.com",
  messagingSenderId: "530174036732",
  appId: "1:530174036732:web:e6a6f43bf649b514aa2579",
  measurementId: "G-R6TEER8FDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider  = new GoogleAuthProvider(app);



