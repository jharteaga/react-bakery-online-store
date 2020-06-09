import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: 'e',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
