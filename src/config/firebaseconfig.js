import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage"



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjSCgev2wTKwM-nekvEL-ItuLx-XZk4Y",
  authDomain: "unibe-3841a.firebaseapp.com",
  projectId: "unibe-3841a",
  storageBucket: "unibe-3841a.appspot.com",
  messagingSenderId: "343200053499",
  appId: "1:343200053499:web:9df7924e8a5836c894185e"
};

firebase.initializeApp(firebaseConfig);

export default firebase
