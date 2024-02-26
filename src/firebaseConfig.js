import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyBkdWpUZqRxdHKWoevLXLqmFVx9o8A0byY',
  authDomain: 'todo-react-mobx.firebaseapp.com',
  projectId: 'todo-react-mobx',
  storageBucket: 'todo-react-mobx.appspot.com',
  messagingSenderId: '287717456122',
  appId: '1:287717456122:web:97cd037420570881e9b143',
  measurementId: 'G-6KHSZXCBK3'
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);
