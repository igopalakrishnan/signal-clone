import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD52GPmOk9fH4bFD1mNH94mUspZThbbB4E",
  authDomain: "signal-clone-55678.firebaseapp.com",
  projectId: "signal-clone-55678",
  storageBucket: "signal-clone-55678.appspot.com",
  messagingSenderId: "564751718412",
  appId: "1:564751718412:web:a9ac1d856c61583d2d7629"
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