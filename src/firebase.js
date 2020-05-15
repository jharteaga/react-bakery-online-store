import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCeBWG8d9vyy8hpvhlDOAecTjdfZ02S1CY',
  authDomain: 'bakery-online-store.firebaseapp.com',
  databaseURL: 'https://bakery-online-store.firebaseio.com',
  projectId: 'bakery-online-store',
  storageBucket: 'bakery-online-store.appspot.com',
  messagingSenderId: '668149766002',
  appId: '1:668149766002:web:6f416db0557e91278befeb',
  measurementId: 'G-6170QTEVE4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
