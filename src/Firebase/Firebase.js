
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANPGoXx8uLaTMuqHaWe4GCORrq32LX4GE",
  authDomain: "wooden-olx.firebaseapp.com",
  projectId: "wooden-olx",
  storageBucket: "wooden-olx.appspot.com",
  messagingSenderId: "869922307127",
  appId: "1:869922307127:web:6fbe1738e5a645c601d3b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;