import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import CustomButton from "../components/CustomButton";
import UserService  from "../services/UserService"


function Login({ navigation }) {


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


  const signIn = async () => {
    try{
        console.log("SIGN IN PRESSED")
        const user = await UserService.singIn(mail, password)        
        // navigation.navigate("mainFlow")

    } catch(error) {
      console.log(error)
        alert(error)
    }
  }


  if (!fontsAreLoaded) {
    return <AppLoading />;

  } else {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>Ingresa a tu Cuenta</Text>

        <TextInput
          placeholder="Mail"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.mailInputText}
          onChangeText={(text) => onChangeMail(text)}
          value={mail}
        />


        <TextInput
          secureTextEntry={true}
          placeholder="Constraseña"
          placeholderTextColor="gray"
          style={styles.mailInputPassword}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 20,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity style={{ marginRight: "8%" }}>
            <Text style={{ color: "#fff", fontFamily: "SF_Pro_Text" }}>
              Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton onPress={signIn} style={styles.buttonLogin}>
          Ingresar
        </CustomButton>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              color: "#DBDBDB",
              marginRight: 10,
              fontFamily: "SF_Pro_Text",
            }}
          >
            Todavia no te has registrado?
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#fff",
                fontFamily: "SF_Pro_Text",
              }}
            >
              Hazlo Aca
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
  titleText: {
    fontFamily: "SF_Pro_Text",
    color: "#fff",
    fontSize: 24,
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
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonLogin: {
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
    fontSize: 24,
  },
});

export default Login;
