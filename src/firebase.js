import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA8dq4qW4eiD5OSg19iWWMho0VcCgnriJg',
  authDomain: 'cosa-1.firebaseapp.com',
  databaseURL: 'https://cosa-1.firebaseio.com',
  projectId: 'cosa-1',
  storageBucket: 'cosa-1.appspot.com',
  messagingSenderId: '356231479406',
  appId: '1:356231479406:web:197cbffa7e51e88cd2267f'
});

export { firebaseConfig as firebase };
