import auth from "./Firebase/Firebase";
import {dataBase} from "./Firebase/Firebase"

//Funcionalidad de conexion con Firebase. Estas funciones permiten que
//las pantallas que necesiten puedan realizar una operacion con firebase
//abstrayendp la responsabilidad a las funciones de este archivo



//Ocupada en Login.js
export async function signInWithFirebase(email, password) {
  try {
    const firebaseUser =  await auth.signInWithEmailAndPassword(email, password);
    console.log("Success singing in with Firebase");
    return firebaseUser;

  } catch (error) {
    console.log("Error signing in with Firebase", error);
    throw error
  }
}


//Ocupada en Register.js
export async function registerWithFirebase(email, password) {
  try {
    const firebaseUser =  await auth.createUserWithEmailAndPassword(email, password);
    console.log("Success registering new user in Firebase");
    return firebaseUser

  } catch (error) {
    console.log("Error registering user in Firebase", error);
    throw error
  }
}



export async function singOutOfFireBase() {
  
  try{
    await auth.signOut()
    console.log("Success signing out of Firebase");
  
  } catch(error){
    console.log(error);  
  }
}





//Ocupada en RegisterData.js cuando el usuario elige Pasajero
export async function savePassengerData(passenger){

  try {
    const snapshot = await dataBase.collection(`testUsers`).add(passenger)
    console.log("exito guardando datos pasajero ");
  
  } catch (error) {
     console.log(error); 
  }
}


//Ocupada en RegisterData.js cuando el usuario elige Conductor
export async function saveDriverData(driver){
  
  try{
    const snapshot = await dataBase.collection(`testUsers`).add(driver)
    console.log("exito guardando datos conductor");
 
  } catch (error) {
    console.log(error); 
  }
}


//Ocupada en Profile.js par obtener los datos del usuario
export async function getUserData(){

  let userID = auth.currentUser.uid
  
  try{
    const userInfo = await dataBase.collection(`testUsers`).doc(userID).get()

    console.log("DATOS OBTENIDOS");
    console.log(userInfo.docs);
    console.log(userInfo.data());
    
  } catch (error) {
    console.log(error); 
  }
}



/**
 * 
 * 
 * let user = this.afAuth.auth.currentUser;
uid = user.uid;


this.afs.firestore.collection('posts').where('user', '==', uid).get().then(posts => {
  postsCreatedByUser = posts.docs.map(e => {
    return {
      Author: e.data()['author'],
      Description: e.data()['desc'],
    };
  }))
})
 */