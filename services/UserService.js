import auth from "./Firebase/Firebase";

//Abstraigo en estas dos funciones la logica de conectarse con Firebase,
//para que sean ocupadas en Login.js y Register.js y que estas solo
//se preocupen de mostrar la siguiente pantalla, o mostrar el error

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
