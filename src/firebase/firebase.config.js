// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7OZnmPbUlRgtEkkmyycor822egPRp8wU",
  authDomain: "green-nest-plant-care-442cc.firebaseapp.com",
  projectId: "green-nest-plant-care-442cc",
  storageBucket: "green-nest-plant-care-442cc.firebasestorage.app",
  messagingSenderId: "815767852477",
  appId: "1:815767852477:web:d46c124f90a3075aac6ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;