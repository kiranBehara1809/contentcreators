import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB8jfSw4OwTQGdhLYnEgD5MC4A7PTQYiiU",
  authDomain: "contentcrerators.firebaseapp.com",
  projectId: "contentcrerators",
  storageBucket: "contentcrerators.appspot.com",
  messagingSenderId: "128021425074",
  appId: "1:128021425074:web:a8ab9bd2333d8e34fe52ab",
  measurementId: "G-0X7P18XHGT"
});

export const auth = app.auth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
