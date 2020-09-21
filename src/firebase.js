import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDuFcNK0SqUXV7mOuY7npup5gElVtbFVTA",
    authDomain: "react-crud-b9ba2.firebaseapp.com",
    databaseURL: "https://react-crud-b9ba2.firebaseio.com",
    projectId: "react-crud-b9ba2",
    storageBucket: "react-crud-b9ba2.appspot.com",
    messagingSenderId: "835087938805",
    appId: "1:835087938805:web:ae08b5487841a9e7f841bc"
  };
  
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();