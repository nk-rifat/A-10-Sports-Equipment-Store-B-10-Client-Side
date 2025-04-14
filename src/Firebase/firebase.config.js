// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJWZKqIcteA85b7WGrz3kT7W9lrih1NA",
  authDomain: "equip-zone-65e15.firebaseapp.com",
  projectId: "equip-zone-65e15",
  storageBucket: "equip-zone-65e15.firebasestorage.app",
  messagingSenderId: "659665733474",
  appId: "1:659665733474:web:05598c211d426dde3fce3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
