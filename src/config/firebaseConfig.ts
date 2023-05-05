// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvCU3su4wVDMYDkNTXuQKOat8xczbHcdc",
  authDomain: "whoget-platform.firebaseapp.com",
  projectId: "whoget-platform",
  storageBucket: "whoget-platform.appspot.com",
  messagingSenderId: "1041431862852",
  appId: "1:1041431862852:web:db804b5e7f786e3d93e611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;