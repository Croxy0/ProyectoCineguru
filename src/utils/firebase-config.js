import { initializeApp }from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA9dsrUGBr6VAuYfqO54oGTi6kr7lpfXvs",
    authDomain: "cineguru-2ab96.firebaseapp.com",
    projectId: "cineguru-2ab96",
    storageBucket: "cineguru-2ab96.appspot.com",
    messagingSenderId: "327880370238",
    appId: "1:327880370238:web:b851e40ae969adb721c96f",
    measurementId: "G-V1BQM3WJJC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);
  