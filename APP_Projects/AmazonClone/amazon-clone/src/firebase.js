// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//export NODE_OPTIONS=--openssl-legacy-provider

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYjWp4dkyfLvCh7XmM7a5GKbgkNIsyiic",
    authDomain: "clone-dda1b.firebaseapp.com",
    projectId: "clone-dda1b",
    storageBucket: "clone-dda1b.appspot.com",
    messagingSenderId: "629254315891",
    appId: "1:629254315891:web:30df86326c7ab4c8b0ef06",
    measurementId: "G-NSMH6B7BVM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};