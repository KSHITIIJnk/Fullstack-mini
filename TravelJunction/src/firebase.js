// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABR5eMv4fy61S7rCA3n-SgqFz4c6HgCeM",
    authDomain: "traveljunction-54cd9.firebaseapp.com",
    projectId: "traveljunction-54cd9",
    storageBucket: "traveljunction-54cd9.appspot.com",
    messagingSenderId: "1006064773622",
    appId: "1:1006064773622:web:79530329e3f9cad9053fd7",
    measurementId: "G-YCVDLXWF7H"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default firebaseApp;
export { auth };















// const firebaseConfig = {
//     apiKey: "AIzaSyABR5eMv4fy61S7rCA3n-SgqFz4c6HgCeM",
//     authDomain: "traveljunction-54cd9.firebaseapp.com",
//     projectId: "traveljunction-54cd9",
//     storageBucket: "traveljunction-54cd9.appspot.com",
//     messagingSenderId: "1006064773622",
//     appId: "1:1006064773622:web:79530329e3f9cad9053fd7",
//     measurementId: "G-YCVDLXWF7H"
//   };