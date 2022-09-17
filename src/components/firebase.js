// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoeEybAVh-zdybcCLgmCvFJrgtXTBjmRo",
    authDomain: "book-managment-system-c0a3a.firebaseapp.com",
    projectId: "book-managment-system-c0a3a",
    storageBucket: "book-managment-system-c0a3a.appspot.com",
    messagingSenderId: "612063805364",
    appId: "1:612063805364:web:bf001c9ca01ca44ff73ce1",
    measurementId: "G-F37DY5P0BK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,  auth} 