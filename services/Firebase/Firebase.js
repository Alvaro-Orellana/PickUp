import * as firebase from 'firebase';
import "firebase/auth";
// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAzpCvoXPlnvcRT3Cod8aS6saQ9nDmAZO0",
    authDomain: "pick-up-a3469.firebaseapp.com",
    databaseURL: "https://pick-up-a3469.firebaseio.com",
    projectId: "pick-up-a3469",
    storageBucket: "pick-up-a3469.appspot.com",
    messagingSenderId: "1093410536288",
    appId: "1:1093410536288:web:6e78fe9933be67a7babc05",
    measurementId: "G-CTZP30YZRW"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth