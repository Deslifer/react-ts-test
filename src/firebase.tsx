import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtyJ5isud4Zrkm6uE12Y91fUBH8x2ThxM',
  authDomain: 'reactdb-d88e2.firebaseapp.com',
  projectId: 'reactdb-d88e2',
  storageBucket: 'reactdb-d88e2.appspot.com',
  messagingSenderId: '1053475704728',
  appId: '1:1053475704728:web:169e7c06dad8588d27a5ed',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

export { auth, db };
