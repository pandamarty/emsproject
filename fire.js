import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBo8sJZ2arn18wMCPjWuwdGr0hYkqY32TA",
  authDomain: "my-kitchen-app-83e5e.firebaseapp.com",
  databaseURL: "https://my-kitchen-app-83e5e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-kitchen-app-83e5e",
  storageBucket: "my-kitchen-app-83e5e.appspot.com",
  messagingSenderId: "114473372197",
  appId: "1:114473372197:web:2899839b74be64a4758dcc",
  measurementId: "G-F95J6MDFPX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);