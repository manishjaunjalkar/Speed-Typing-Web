import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCjG4oqgmrJPN3bD3zYG_u0zO3afHCh88U",
  authDomain: "acciojob-project-d219d.firebaseapp.com",
  projectId: "acciojob-project-d219d",
  storageBucket: "acciojob-project-d219d.appspot.com",
  messagingSenderId: "193966133432",
  appId: "1:193966133432:web:62252b63af6096020be44d",
  measurementId: "G-0PTKK8FTMQ"
};
  
 // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 const db = firebaseApp.firestore();
 
 export {auth, db}