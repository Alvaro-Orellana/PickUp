import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Picker} from "react-native";

import CustomButton from "../components/CustomButton";
import {savePassengerData, saveDriverData} from "../services/UserService"


function RegisterData({ navigation }) {
  
  const [name, onChangeName] = useState("");
  const [lastName, onChangeLastName] = useState("");


  //Default value of the picker is Conductor, if the user doesnt move it
  const [userType, onChangeUserType] = useState("Pasajero");

  //These 3 values are only used if the user selects Conductor
  const [vehiculeBrand, onChangeVehiculeBrand] = useState("");
  const [vehiculeModel, onChangeVehiculeModel] = useState("");
  const [licensePlate, onChangeLicensePlate] = useState("");


  //Guarda los datos escritos por el usuario a Firebase
  async function saveUserData() {
    try{
        if(userType == "Pasajero") {
            let passenger = {
                name: name,
                lastName: lastName,
                userType: userType
            }

            //funcion para guardar pasajeros
            await savePassengerData(passenger)            
        
        } else {
            //El usuario selecciono conductor
            let driver = {
                name: name,
                lastName: lastName,
                userType: userType,
                vehiculeData : {
                    brand: vehiculeBrand,
                    model: vehiculeModel,
                    licensePlate: licensePlate
                }
            }

            //funcion para guardar conductores
            await saveDriverData(driver)
            
        }
        
        navigation.navigate("mainFlow")
        // const firebaseUser = await registerWithFirebase(mail, password)        
        // navigation.navigate("BottomNavigator")

    } catch(error) {
        alert(error)
    }
  }




  //Si el picker esta en pasajero
  if (userType == "Pasajero") {
    return (
        <ScrollView 
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            contentInset={{top: 0, left: 0, bottom: 150, right: 0}}
            style={{ backgroundColor: '#7D57FE'}}
            >
            <View style={styles.container}>

                <Text style={styles.titleText}>Ingresa tus datos</Text>
    
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="gray"
                    style={styles.inputText}
                    onChangeText={onChangeName}
                    value={name}
                />

                <TextInput
                    placeholder="Apellido"
                    placeholderTextColor="gray"
                    style={styles.inputText}
                    onChangeText={onChangeLastName}
                    value={lastName}
                />

                <Text style={styles.subtitle}>Soy :</Text>

                <Picker
                    selectedValue={userType}
                    style={styles.pickerStyle}
                    onValueChange={onChangeUserType}
                    selectedValue={userType}
                >
                    <Picker.Item color="white" label="Pasajero" value="Pasajero"/>
                    <Picker.Item color="white" label="Conductor" value="Conductor"/>
                </Picker>

        

                <CustomButton 
                    style={styles.buttonRegister}
                    onPress={saveUserData}
                >
                    Guardar Datos
                </CustomButton>
            </View>
        </ScrollView>
    )

  } else {
    //Si el picker esta en conductor
     return (
        <ScrollView   
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            contentInset={{top: 0, left: 0, bottom: 250, right: 0}}
            style={{ backgroundColor: '#7D57FE'}}
         >
            <View style={styles.container}>
                <Text style={styles.titleText}>Ingresa tus datos</Text>

                <TextInput
                placeholder="Nombre"
                placeholderTextColor="gray"
                style={styles.inputText}
                onChangeText={onChangeName}
                value={name}
                />

                <TextInput
                placeholder="Apellido"
                placeholderTextColor="gray"
                style={styles.inputText}
                onChangeText={onChangeLastName}
                value={lastName}
                />

                <Text style={styles.subtitle}>Soy :</Text>

                <Picker
                    userType={userType}
                    style={styles.pickerStyle}
                    onValueChange={onChangeUserType}
                    selectedValue={userType}
                >
                    <Picker.Item color="white" label="Pasajero" value="Pasajero"/>
                    <Picker.Item color="white" label="Conductor" value="Conductor"/>
                </Picker>

                <Text style={styles.subtitle}>Datos Vehiculo :</Text>

                <TextInput
                placeholder="Marca Vehiculo"
                placeholderTextColor="gray"
                style={styles.inputText}
                onChangeText={onChangeVehiculeBrand}
                value={vehiculeBrand}
                /> 
                <TextInput
                    placeholder="Modelo Vehiculo"
                    placeholderTextColor="gray"
                    style={styles.inputText}
                    onChangeText={onChangeVehiculeModel}
                    value={vehiculeModel}
                />

                <TextInput
                placeholder="Patente"
                placeholderTextColor="gray"
                style={styles.inputText}
                onChangeText={onChangeLicensePlate}
                value={licensePlate}
                />

                <CustomButton 
                    style={styles.buttonRegister}
                    onPress={saveUserData}
                >
                    Guardar Datos
                </CustomButton>
            </View>
        
        </ScrollView>

     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D57FE",
    alignItems: 'center',
    paddingTop: "10%",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonRegister: {
    height: 50,
    width: 330,
    paddingTop: 15,
    margin: 40,
    backgroundColor: "black",
    borderRadius: 20,
    borderWidth: 0,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  inputText: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#433088",
    width: "90%",
    marginTop: "5%",
    color: "#fff",
    borderRadius: 8,
    paddingLeft: 15,
  },
  titleText: {
    color: "#fff",
    fontSize: 27,
  },
  subtitle: {
     color: "#fff",
     fontSize: 20,
     textAlign: 'left', 
     alignSelf: 'stretch',
     paddingLeft: 20,
     paddingVertical: 15
  },
  pickerStyle : {
    height: 170, 
    width: 300,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,

  }
});

export default RegisterData;
