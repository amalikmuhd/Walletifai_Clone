// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhDmxezkBZ0Hz5LsSHIcCsTS-dm5mg7Q8",
  authDomain: "walletifaiclone-auth.firebaseapp.com",
  projectId: "walletifaiclone-auth",
  storageBucket: "walletifaiclone-auth.appspot.com",
  messagingSenderId: "606275759789",
  appId: "1:606275759789:web:78ba3528a94ffb41fe6024",
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}
const auth = firebase.auth;

export { auth };
