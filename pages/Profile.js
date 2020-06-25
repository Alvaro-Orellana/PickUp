
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';

import CustomButton from '../components/CustomButton';
import ProfileImage from "../components/ProfileImage"
import UserService from "../services/UserService"
import EditableInfo from '../components/EditableInfo';


function Profile({ navigation }){


    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       // The screen is focused
    //       // Call any action
    //       console.log("asdssssss")
    //       navigation.setOptions({ title: 'asd' })
    //     });
      
    //     // Return the function to unsubscribe from the event so it gets removed on unmount
    //     return unsubscribe;
    //   }, [navigation]);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    


    function saveData () {  
        alert("Se han guardado los cambios")
        console.log("saving data...");
        console.log("the new state is ", name, lastName, carBrand, carModel);
        //TODO: Desarrollar funcion para guardar cambios de datos 
    }  

    function singOut() {
        UserService.singOut()
        navigation.navigate("loginFlow")
    }

    
        return  (
           <ScrollView 
                style={styles.container}
                contentInset={{top: 0, left: 0, bottom: 300, right: 0}}
                showsVerticalScrollIndicator={false}
           >

                    <View style={     {   alignItems: "center"}}>
                    <ProfileImage tamaño={130} imagen={true}  />
                    </View>

                    <Text style={styles.infoText}>Informacion Usuario</Text>

                    <EditableInfo onChangeText={setName} value={name} placeholder="Nombre" saveData={saveData}/>

                    <EditableInfo onChangeText={setLastName} value={lastName} placeholder="Apellido" saveData={saveData}/>
                    
                    <EditableInfo onChangeText={setEmail} value={email} placeholder="Correo electronico" saveData={saveData}/>

                    <Text style={styles.infoText}>Informacion Vehiculo</Text>


                    <EditableInfo onChangeText={setCarBrand} value={carBrand} placeholder="Marca Vehiculo" saveData={saveData}/>

                    <EditableInfo onChangeText={setCarModel} value={carModel} placeholder="Modelo Vehiculo" saveData={saveData}/>

                    <EditableInfo onChangeText={setLicensePlate} value={licensePlate} placeholder="Patente" saveData={saveData}/>

                    <CustomButton
                        onPress={singOut}
                        style={styles.buttonLogOut}
                    >
                        Salir de mi cuenta
                    </CustomButton>
           </ScrollView>
        )
   
    
}


Profile.navigationOptions = () => {
    return {
        headerTitle: "Mi Perfil",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#7D57FE',
        },       
    }
}


const styles = StyleSheet.create({
    container: {
      paddingTop: "5%",
      marginHorizontal: 20,
    },
    infoText: {
        color: "black",
        fontSize: 38,
        fontWeight: '500',
        marginTop: 30,
    },
    buttonLogOut: {
        marginTop: 70,
        marginHorizontal: 90,
        width: '50%',
        paddingTop: 10,
        backgroundColor: '#3CB9F9',
    },
   
  
})


export default Profile
