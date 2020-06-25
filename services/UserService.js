import { API_URL } from "../constants/api-helper";
import StoreService from "./StoreService";


//Funcionalidad de conexion con Firebase. Estas funciones permiten que
//las pantallas que necesiten puedan realizar una operacion con firebase
//abstrayendp la responsabilidad a las funciones de este archivo

export default class UserService {
//Ocupada en Login.js
  static async  singIn(email, password) {
  try {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    const response =  await fetch(`${API_URL}/public/auth/login`, requestOptions);
    console.log(response);
    if(response.code == 200){
      console.log("Success singing in");
      const { data } = response;
      StoreService.SaveData("access_token", data.access_token);
      StoreService.SaveData("user", data.user);
      return data.user;
    }

    return null;

  } catch (error) {
    console.log("Error signing", error);
    throw error
  }
}


//Ocupada en Register.js
static async  register(user) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const response =  await fetch(`${API_URL}/public/register`, requestOptions);
    
        if(response.code == 200){
            console.log("Success registering");
            const { data } = response;
            StoreService.SaveData("access_token", data.access_token);
            StoreService.SaveData("user", data.user);
            return data.user;
        }
    
        return null;
    
      } catch (error) {
        console.log("Error registering", error);
        throw error
      }
}



static async singOut() {
  
  try{
    await StoreService.Clear()
    console.log("Success signing out");
  
  } catch(error){
    console.log(error);  
  }
}





//Ocupada en RegisterData.js cuando el usuario elige Pasajero
static async savePassengerData(passenger){

  try {
    const snapshot = await dataBase.collection(`testUsers`).add(passenger)
    console.log("exito guardando datos pasajero ");
  
  } catch (error) {
     console.log(error); 
  }
}


//Ocupada en RegisterData.js cuando el usuario elige Conductor
static async saveDriverData(driver){
  
  try{
    const snapshot = await dataBase.collection(`testUsers`).add(driver)
    console.log("exito guardando datos conductor");
 
  } catch (error) {
    console.log(error); 
  }
}


//Ocupada en Profile.js par obtener los datos del usuario
static async getUserData(){

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
}

