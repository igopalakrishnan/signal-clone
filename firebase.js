import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhfLXBvHiQm_Z-HyEsYlL2o43N8hwuUq8",
  authDomain: "signal-clone-7dd70.firebaseapp.com",
  projectId: "signal-clone-7dd70",
  storageBucket: "signal-clone-7dd70.appspot.com",
  messagingSenderId: "771932868528",
  appId: "1:771932868528:web:d951945c9fd8da150d1075"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };