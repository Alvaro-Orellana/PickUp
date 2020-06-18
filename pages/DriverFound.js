import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ProfileImage from "../components/ProfileImage"

const DriverFound = ({navigation}) => {

    //Obtengo esto de WaitingScreen
    const datosRecibidos = navigation.getParam("datosConductor")
    const datosConductor = datosRecibidos.infoConductor
   

    return(
        <View style={styles.container}>
            
            <Text style={{ color: `white`, fontSize: 26,}}>Conductor encontrado!</Text>

            <ProfileImage imagen={true} tamaño={170}/>

            <View style={styles.info}>
                <Text>Hola, mi nombre es</Text>
                <Text style={styles.name}>{datosConductor.nombre} </Text>
                <Text style={styles.name}> {datosConductor.apellido}</Text>
                <Text>y estoy a {datosConductor.kmDeDistancia} Km de distancia</Text>
            </View>

            <Text style={styles.infoVehiculo}>
                <Text>Patente:  </Text>
                <Text>{datosConductor.auto.patente}</Text>
            </Text>

            <Text style={styles.infoVehiculo}>
                <Text>Vehiculo:  </Text>
                <Text>{datosConductor.auto.marca} {datosConductor.auto.modelo}</Text>
            </Text>

        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D57FE',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    info :{
        alignItems: "center",
        justifyContent: 'space-around',
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 50,
        height: 180,
        width: 340,

    },
    name: {
        fontSize: 40,
        color: "#3CB9F9"    
    },
    infoVehiculo: {
        color: "white",
    }
})


export default DriverFound