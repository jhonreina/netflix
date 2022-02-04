import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApxXh70aDDHaqZ40LIZCZDabn0UXO1OmI",
  authDomain: "netflix-71f2b.firebaseapp.com",
  projectId: "netflix-71f2b",
  storageBucket: "netflix-71f2b.appspot.com",
  messagingSenderId: "108037365596",
  appId: "1:108037365596:web:80ac0d5d1b2c7824af6b99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 

export {auth }