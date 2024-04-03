import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBsbWDgcnPy89JruzHV4RXx5i-6udhbBbs",
    authDomain: "database-learn-a629f.firebaseapp.com",
    projectId: "database-learn-a629f",
    storageBucket: "database-learn-a629f.appspot.com",
    messagingSenderId: "17093392051",
    appId: "1:17093392051:web:81d67f4e170b3410baa2c6"
};

// Initialize Firebase


 
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 
 // Get a list of cities from your database
 async function getCities(db) {
    const citiesCol = collection(db, 'cafe');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
 }
  
 