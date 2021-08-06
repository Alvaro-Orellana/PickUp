
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions} from 'react-native';

import MapComponent from '../components/MapComponent'
import DestinationBar from "../components/DestinationBar"
import BuscarConductorButton from "../components/BuscarConductorButton"
import CancelDestinationButton from "../components/CancelDestinationButton"



function Home({ navigation }) {
   
    //Usado para obtner el texto que escriba el usuario en DestinationBar
    const [texto, setTexto] = useState("");

    //El objeto que va a pasar a WaitingScreen con toda la informacion necesaria
    //para hacer llamada a Backend
    const [datosCliente, setDatosCliente] = useState({});


    //Usado para marcar la ruta en el mapa, es un string codificado
    //que representa la direccion que elegio el usuario
    const [destinationId, setDestinationId] = useState("")


    //Se activa cuado el usuario presiona enter en el teclado.
    //Guarda el texto que habia en el text input y arma un objeto 
    //con todos los datos del del usuario
    const guardarDireccionEscrita = (placeId) => {
         
        const datosAEnviar = {
            usuario : {
                nombre: "Mariano",
                apellido: "Villarroel",
                imagen: ""
            }, 
            direccion: texto,
            //Aca tengo que obtener las coordenadas correctas
            //Por ahora van a estar hardcodeadas
            coordenadas: {                 
                latitud: -34.60860283754747,
                longitud: -58.39069747121322,
            }
        }
        console.log("El usuario apreto enter y los datos son", datosAEnviar);
        setDatosCliente(datosAEnviar)

        //Usada para genetar la ruta en el mapa
        setDestinationId(placeId)
    }


    //Si el usuaario selecciono una direccion, mostrar la ruta, junto a botones
    //para aceptar o cancelar el viaje
    if(destinationId){
        return(
            <View style={styles.container}>
            
                <BuscarConductorButton top={55}
                    datosCliente={datosCliente}
                /> 
              
                <CancelDestinationButton top={135}
                    action={ () => {
                        setDestinationId("")
                        setTexto("")
                    }}
                /> 
                   
                <MapComponent destinationId={destinationId}/>

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
        headerShown: false,
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
