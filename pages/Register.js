import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StyleSheet, View, Text, TouchableOpacity , TextInput} from "react-native";
import CustomButton from "../components/CustomButton";
import {registerWithFirebase} from "../services/UserService"


function Register({ navigation }) {
  
  const [mail, onChangeMail] = useState("");
  const [password, onChangePassword] = useState("");
  const [fontsAreLoaded, setFontAreLoaded] = useState(false);


  useEffect(() => {
    (async function loader() {
      await Font.loadAsync({
        SF_Pro_Text: require("../assets/fonts/SFProText.ttf"),
      });

      setFontAreLoaded(true);
    })();
  });


  async function register() {
    try{
        //Guardo firebaseUser por si despues necesitamos pasarlo a otra pantalla
        const firebaseUser = await registerWithFirebase(mail, password)        
        navigation.navigate("RegisterData")

    } catch(error) {
        alert(error)
    }
  }


  if (!fontsAreLoaded) {
    return <AppLoading />;

  } else {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>Crear Nueva Cuenta</Text>

        <TextInput
          placeholder="Mail"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.mailInputText}
          onChangeText={(text) => onChangeMail(text)}
          value={mail}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="gray"
          secureTextEntry
          autoCapitalize="none"
          style={styles.mailInputPassword}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />

        <CustomButton 
            style={styles.buttonRegister}
            onPress={register}
        >
            Crear Cuenta
        </CustomButton>

        <View style={{ paddingTop: "5%" }}>
          <Text style={styles.terminos}>
            Al crear una cuenta estas aceptando nuestros terminos y condiciones
            de servicio
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              color: "#DBDBDB",
              marginRight: 10,
              fontFamily: "SF_Pro_Text",
            }}
          >
            Ya te registraste?
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#fff",
                fontFamily: "SF_Pro_Text",
              }}
            >
              Ingresar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7D57FE",
    flexDirection: "column",
    paddingTop: "10%",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  terminos: {
    fontFamily: "SF_Pro_Text",
    fontSize: 13,
    textAlign: "center",
    letterSpacing: -0.08,
    color: "#FFFFFF",
  },
  buttonRegister: {
    height: 50,
    width: 330,
    marginTop: "5%",
    paddingTop: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#000000",
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  mailInputText: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#433088",
    width: "90%",
    marginTop: "10%",
    color: "#fff",
    borderRadius: 8,
    paddingLeft: 15,
  },
  mailInputPassword: {
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
    fontFamily: "SF_Pro_Text",
    color: "#fff",
    fontSize: 24,
  },
});

export default Register;
