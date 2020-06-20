import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore"
// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase

//Configuracion firebase de PickUP
// const firebaseConfig = {
//     apiKey: "AIzaSyAzpCvoXPlnvcRT3Cod8aS6saQ9nDmAZO0",
//     authDomain: "pick-up-a3469.firebaseapp.com",
//     databaseURL: "https://pick-up-a3469.firebaseio.com",
//     projectId: "pick-up-a3469",
//     storageBucket: "pick-up-a3469.appspot.com",
//     messagingSenderId: "1093410536288",
//     appId: "1:1093410536288:web:6e78fe9933be67a7babc05",
//     measurementId: "G-CTZP30YZRW"
//   };

var firebaseConfig = {
  apiKey: "AIzaSyDrXTRaxJSVpAOV3pG0ua4N82awblIhZVQ",
  authDomain: "prueba-14742.firebaseapp.com",
  databaseURL: "https://prueba-14742.firebaseio.com",
  projectId: "prueba-14742",
  storageBucket: "prueba-14742.appspot.com",
  messagingSenderId: "1049417512620",
  appId: "1:1049417512620:web:515ec86a16a0b0c9221109"
};


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
export const dataBase = firebase.firestore();

export default auth
