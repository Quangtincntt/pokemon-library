import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdQb0pY9qfmTvI8pPp4QaLi2_ArI9bM1w",
  authDomain: "login--authencation.firebaseapp.com",
  projectId: "login--authencation",
  storageBucket: "login--authencation.appspot.com",
  messagingSenderId: "826986454070",
  appId: "1:826986454070:web:ca13ad9caa443a4502cc97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
