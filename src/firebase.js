
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdrJGsRjAreMRutD1KwCiZZFcZPXPE-9M",
  authDomain: "hospitalbooking-8b8c2.firebaseapp.com",
  projectId: "hospitalbooking-8b8c2",
  storageBucket: "hospitalbooking-8b8c2.appspot.com",
  messagingSenderId: "263405636633",
  appId: "1:263405636633:web:1bff4b32285d2f22e5ee88"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);