import firebase from firebase/compat/app;
import 'firebase/compat/auth';
import 'firebase/compat/firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP_uxUCA5NwVt8I6vA1VirHKPMr8FCDrc",
    authDomain: "to-do-list-87a2f.firebaseapp.com",
    projectId: "to-do-list-87a2f",
    storageBucket: "to-do-list-87a2f.appspot.com",
    messagingSenderId: "166836045340",
    appId: "1:166836045340:web:dee9d47bb1c6b9f12c41d9",
    measurementId: "G-7MVD9BWE7P"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);      
  }

  export {firebase};