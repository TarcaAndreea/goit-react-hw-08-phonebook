import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDB0qQkb-U6d2IppS94t6N82PmEo7667PE',
  authDomain: 'phonebook-c3e88.firebaseapp.com',
  projectId: 'phonebook-c3e88',
  storageBucket: 'phonebook-c3e88.appspot.com',
  messagingSenderId: '266698673325',
  appId: '1:266698673325:web:4df0b4831b46b45c47ca24',
  measurementId: 'G-9GZDTT775G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export default app;
