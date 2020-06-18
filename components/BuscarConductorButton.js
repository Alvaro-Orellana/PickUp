import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import {withNavigation} from "react-navigation"
import { Fontisto } from "@expo/vector-icons";


const WIDTH =  Dimensions.get('window').width;

const BuscarConductorButton = ({navigation, datosCliente}) => {

    
    //Datos cliente me lo pasa MapScreen
    const datosPasadosDeMapScreen = datosCliente



   
    //TODO: aca tengo que colocar bien el buton enla pantalla. modificar el top
    //puede que se arregle solo si logo scar el titulo de la barra de navegacion
    return(
        <View style={[style.container, {top: 30}]}>
           <Fontisto
                name={"taxi"}
                color={"#ffffff"}
                size={25}
                onPress={ () => {
                    navigation.navigate("Loader", { datosCliente: datosPasadosDeMapScreen})
                }}
           
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        zIndex: 9,
        position: "absolute",
        width: 67,
        height:67,
        backgroundColor: `#7D57FE`,
        left: WIDTH - 75, 
        borderRadius: 50,
        elevation: 7,
        shadowOpacity: 1.0,
        justifyContent: `space-around`,
        alignItems: "center"
    }
})


export default withNavigation(BuscarConductorButton)