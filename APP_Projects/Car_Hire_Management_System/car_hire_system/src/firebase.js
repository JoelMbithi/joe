// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//export NODE_OPTIONS=--openssl-legacy-provider

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2k0iEHTafCgCeP7x2PYQRqm0cJBus_dA",
  authDomain: "carhiresystem-5013d.firebaseapp.com",
  projectId: "carhiresystem-5013d",
  storageBucket: "carhiresystem-5013d.appspot.com",
  messagingSenderId: "1037847912386",
  appId: "1:1037847912386:web:c534049e518d3f4b57005b",
  measurementId: "G-D6YHXLK212"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};