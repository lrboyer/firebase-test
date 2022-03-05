import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOHbqFSYG6ufhOOzxb0Xmt6of4JgOu1Ak",
  authDomain: "crud-test-29d90.firebaseapp.com",
  projectId: "crud-test-29d90",
  storageBucket: "crud-test-29d90.appspot.com",
  messagingSenderId: "646633375341",
  appId: "1:646633375341:web:712dacb7db47fa4b45e164",
  measurementId: "G-E1ZW4FR8DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();