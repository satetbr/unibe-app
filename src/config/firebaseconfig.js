import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage"



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUNhqP_gescy2XNrcBb74GzdeBlgYJmOA",
  authDomain: "unibe-app.firebaseapp.com",
  projectId: "unibe-app",
  storageBucket: "unibe-app.appspot.com",
  messagingSenderId: "965522441011",
  appId: "1:965522441011:web:829b383db788544f19b446"
};

firebase.initializeApp(firebaseConfig);

export default firebase
