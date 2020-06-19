
import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import ProfileImage from "../components/ProfileImage"


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
    const [description, setDescription] = useState("")
    

    const [fontsAreLoaded, setFontAreLoaded] = useState(false);

  
    useEffect(() => {
      (async function loader() {
        await Font.loadAsync({
          SF_Pro_Text: require("../assets/fonts/SFProText.ttf"),
        });
        setFontAreLoaded(true);
      })();
    });


    if(fontsAreLoaded) {
        return  (
            <View style={styles.container}>
    
                <View style={{flexDirection: "row", }}> 
                    <ProfileImage tamaño={120} imagen={true} />
    
                    <View style={{ flex: 1}}>
                        <View                 
                            style={styles.leftColumn}> 
                            <Ionicons
                                name={`md-car`} 
                                size={25}   
                                color={`black`}  
                                style={{alignSelf: `center`}}
                            />
                        </View>
    
                        <TextInput
                            placeholder="Nombre"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            style={styles.inputText}
                            onChangeText={(text) => onChangeName(text)}
                            value={name}
                        />
                        
                        <TextInput
                            placeholder="Apellido"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            style={styles.inputText}
                            onChangeText={(text) => onChangeLastName(text)}
                            value={lastName}
                        />
                    </View>
                </View>
    
                <Text style={styles.titleText}> Informacion</Text>
    
               <TextInput
                    placeholder="Edad"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    style={styles.inputText}
                    onChangeText={(text) => onChangeAge(text)}
                    value={age}
                />
    
                <TextInput
                    placeholder="Descripcion"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    style={styles.inputText}
                    onSubmitEditing
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                />

                    <Text
                    style={{
                        textDecorationLine: "underline",
                        color: "black",
                        fontFamily: "SF_Pro_Text",
                    }}
                    >
                    texto de prueba
                    </Text>

            </View>
        )
    } else {
        return  <AppLoading/>
    }
    
}


Profile.navigationOptions = () => {
    return {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#7D57FE'
        },       
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      paddingTop: "5%",
    },
    titleText: {
      fontFamily: "SF_Pro_Text",
      color: "black",
      fontSize: 24,
      alignItems: "flex-start",


    },
    inputText: {
      height: 50,
      borderColor: "gray",
      borderWidth: 1,
      backgroundColor: "#EFEFF4",
      width: "90%",
      marginTop: "10%",
      color: "black",
      borderRadius: 8,
      paddingLeft: 15,
    },
    leftColumn: {
        flex: 1,
        alignItems: "center",
    },
})


export default Profile
