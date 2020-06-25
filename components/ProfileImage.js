import React from "react";
import {View, Image, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const ProfileImage = ({imagen, tamaño, imageURL}) => {

   //Esto es nuevo, hay que modificarlo para que funcione con imagenes dinamicas
    if(imageURL){
        return(
            <View 
            style={{ width: tamaño,
                    height: tamaño,
                    borderRadius: 200,
                    overflow: "hidden",
                    borderWidth: 4,
                    borderColor: "#4CD964"
                    }}
            >
                <Image 
                    //Aca en vez de require, averiguar como mostrar una imagen
                    //pasada por json
                    source={{uri: imageURL}}  
                    style={{width: tamaño, height: tamaño, borderRadius: 200}} 
                />
            </View>
        )


    //Si el props imagen existe muestra esa imagen, sino muestra
    //una por default
    } else if(imagen){
        return(
            <View 
            style={{ width: tamaño,
                    height: tamaño,
                    borderRadius: 200,
                    overflow: "hidden",
                    borderWidth: 4,
                    borderColor: "#4CD964"
                    }}
            >
                <Image 
                    //Aca en vez de require, averiguar como mostrar una imagen
                    //pasada por json
                    source={require('../assets/imagen-de-prueba.jpeg')}  
                    style={{width: tamaño, height: tamaño, borderRadius: 200}} 
                />
            </View>
        )
    }  else {
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
    },
    profileImgContainer: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
      },
})


export default ProfileImage;