import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "moviedb-2-1f539.firebaseapp.com",
  projectId: "moviedb-2-1f539",
  storageBucket: "moviedb-2-1f539.appspot.com",
  messagingSenderId: "387655191524",
  appId: "1:387655191524:web:aed4859aba77b7c8ee95f1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
