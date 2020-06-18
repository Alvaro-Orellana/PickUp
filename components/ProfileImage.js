import React from "react";
import {View, Image, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const ProfileImage = ({imagen, tamaño}) => {

    //Si el props imagen existe muestra esa imagen, sino muestra
    //una por default
    if(imagen){
        return(
             <Image 
                //Aca en vez de require, averiguar como mostrar una imagen
                //pasada por json
                source={require('../assets/imagen-de-prueba.jpeg')}  
                style={{width: tamaño, height: tamaño, borderRadius: 200}} 
            />
        )
    } else {
       return (     
            <View style={styles.container}>
                <Ionicons name="ios-person" size={tamaño} color="white" borderRadius={50}/>
            </View>
       )
    }
}

const styles = StyleSheet.create({
    container : {
        // borderRadius: 50, 
        // borderWidth: 10, 
        // borderColor: "white", 
    }
})


export default ProfileImage;