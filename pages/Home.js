
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions} from 'react-native';

import MapComponent from '../components/MapComponent'
import DestinationBar from "../components/DestinationBar"
import BuscarConductorButton from "../components/BuscarConductorButton"



function Home({ navigation }) {
   
    //Usado para obtner el texto que escriba el usuario en DestinationBar
    const [texto, setTexto] = useState("");

    //El objeto que va a pasar a WaitingScreen con toda la informacion necesaria
    //para hacer llamada a Backend
    const [datosCliente, setDatosCliente] = useState({});

    const [destinationIsWritten, setDestinationIsWrittten] = useState(false)

    //Se activa cuado el usuario presiona enter en el teclado.
    //Guarda el texto que habia en el text input y arma un objeto 
    //con todos los datos del del usuario
    const guardarDireccionEscrita = () => {
        
        
        const datosAEnviar = {
            usuario : {
                nombre: "Nombre Usuario",
                apellido: "Apellido Usuario",
                imagen: "Aca podria enviarse la imagen del usuario"
            }, 
            direccion: texto,
            //Aca tengo que obtener las coordenadas correctas
            //Por ahora van a estar hardcodeadas
            coordenadas: {                 
                latitud: -34.60,
                longitud: -58.39,
            }
        }
        console.log("El usuario apreto enter y los datos son", datosAEnviar);
        
        setDatosCliente(datosAEnviar)
        setDestinationIsWrittten(true)
    }

    if(destinationIsWritten){
        return(
            <View style={styles.container}>
                <DestinationBar 
                    texto={texto}
                    onTextChange={nuevoTexto => setTexto(nuevoTexto)}
                    onTextSubmit={guardarDireccionEscrita}
                />
            
                <BuscarConductorButton 
                    datosCliente={datosCliente}
                />              
                <MapComponent />

            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <DestinationBar 
                    texto={texto}
                    onTextChange={nuevoTexto => setTexto(nuevoTexto)}
                    onTextSubmit={guardarDireccionEscrita}
                />            
                <MapComponent />
            </View>
        )
    }
    //Cuando se presionaa BuscarConductorButton envia los datos del usuario
    //que genere en la funcion guardarDireccionEscrita y los envia a WaintingScreen
}



Home.navigationOptions = () => {
    return {
        headerShown: false      
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default Home
