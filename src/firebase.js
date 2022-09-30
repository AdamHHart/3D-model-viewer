import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
var firebaseui = require('firebaseui');
import "firebaseui/dist/firebaseui.css";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4FAuXjh_uKALLfZbHM9U3Ci4Wmcu2bIE",
  authDomain: "d-viewer-93e8f.firebaseapp.com",
  projectId: "d-viewer-93e8f",
  storageBucket: "d-viewer-93e8f.appspot.com",
  messagingSenderId: "438852291171",
  appId: "1:438852291171:web:8506e01c31f69d06228656",
  measurementId: "G-Q1QMDC6Y5B"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var storage = firebase.storage().ref();

// export utils/refs
export {
  db,
  auth,
  storage,
  ui
}