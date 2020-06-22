
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

    const [name, onChangeName] = useState("");
    const [lastName, onChangeLastName] = useState("");
    const [age, onChangeAge] = useState("");
    const [description, setDescription] = useState("");
    


    function saveData () {  
        console.log("savng data...");
        console.log("the state is ", name, lastName, age, description);
        //const texto = getUserData()
    }  

    function singOut() {
        UserService.singOut()
        navigation.navigate("loginFlow")
    }

    
    

        return  (
           <ScrollView 
                style={styles.container}
                contentInset={{top: 0, left: 0, bottom: 300, right: 0}}
           >

                    <View style={     {   alignItems: "center"}}>
                    <ProfileImage tamaño={130} imagen={true}  />
                    </View>

                    <Text style={styles.infoText}> Informacion</Text>

                    <EditableInfo onChangeText={onChangeName} value={name} placeholder="Nombre y Apellido" saveData={saveData}/>

                    <EditableInfo onChangeText={onChangeLastName} value={lastName} placeholder="Email" saveData={saveData}/>

                    <EditableInfo onChangeText={onChangeAge} value={age} placeholder="Auto" saveData={saveData}/>

                    <EditableInfo onChangeText={setDescription} value={description} placeholder="Patente" saveData={saveData}/>

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
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#7D57FE',
        },       
    }
}


const styles = StyleSheet.create({
    container: {
      paddingTop: "5%",
    },
    infoText: {
        color: "black",
        fontSize: 38,
        fontWeight: '500',
    },
    buttonLogOut: {
        marginTop: 70,
        marginHorizontal: 100,
        width: '50%',
        paddingTop: 10,
        backgroundColor: '#3CB9F9',
    },
   
  
})


export default Profile
