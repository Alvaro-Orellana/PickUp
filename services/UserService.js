import auth from "./Firebase/Firebase";

export default class UserService {

    static async login(email, password){
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials =>{

        }).catch(err => {
            console.log(err)
        })
    }

}