import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {searchDriver} from "../services/searchDriver"

import { Entypo, FontAwesome} from "@expo/vector-icons";
import LottieView from "lottie-react-native"



const Loader = ({navigation}) => {

  //Datos que obtengo de BuscarConductorButton cuando llama a navigation.navigate()
  const datosPasajero = navigation.getParam("datosCliente")
  console.log("Los datos del cliente son " , datosPasajero);
  


  const [resultados, setResultados] = useState(null)
   
  //Hace que la llamada a la API solo se ejecute una vez
  useEffect(() => {
    llamadaAPI()
  }, [])


  const llamadaAPI = async () => {
      //Hace la llamada al servidor y le paso los datos del pasajero
      const datosConductor = await searchDriver(datosPasajero)
     
      //Si datos a conductor es null informo a Cliente
      if(!datosConductor){
        alert("Error buscando a conductor")
     
      } else {
        setResultados(datosConductor)
      }

  }

  //Solo se deberia llamar a este metodo si la llamada fue exitosa
  const navegarAPantallaConductor =  () => {    
      navigation.navigate("DriverFound", { datosConductor: resultados})
  }


  //Si la llamada a la API fue exitosa este componente se rednerizará,
  //y este if si parará. Averiguar si se puede hacer de mejor manera
  //porque me aparece un warning
  if(resultados) {navegarAPantallaConductor()}

  return(
    <View style={styles.container}>
      <Entypo 
        name="location" 
        style={{color: `white`}} 
        size={40}
      />
      <Text  style={styles.textStyle}>Buscando Conductor</Text>

      <View style={styles.animationStyle}>
        <LottieView
              source={require("../assets/animations/4543-loader-to-resolve.json")} 
              autoPlay  
        />
      </View>
    
      <View style={styles.label}>
        <Text style={{color: "white"}}>Origen</Text>
      </View>
      <FontAwesome name="long-arrow-down" size={70} color="black" />

      <View style={styles.label}>
        <Text style={{color: "white"}}>Destino</Text>
      </View>

      <Text style={{fontSize: 13, color: "white", textAlign: "center"}}>Al pedir un auto estas aceptando nuestros terminos y condiciones de servicio</Text>

    </View>
  )

}


Loader.navigationOptions = () => {
  return {
      headerShown: false
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7D57FE',
      alignItems: "center",
      flexDirection: "column",
      justifyContent: 'space-around',
    },
    animationStyle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      paddingBottom:10,
      backgroundColor: "#3CB9F9"

    },
    textStyle: {
      color: `white`,
      fontSize: 26,
    },
    label: {
      backgroundColor: "black",
      borderRadius:50,      
      padding: 17,
      paddingLeft: 130,
      paddingRight: 130,
      margin: 17,
    }
   

  });

export default Loader;