import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const WIDTH =  Dimensions.get('window').width;

const CancelDestinationButton = ({ action, top}) => {

    //TODO: aca tengo que colocar bien el buton enla pantalla. modificar el top
    //puede que se arregle solo si logo scar el titulo de la barra de navegacion
    return(
        <View style={[style.container, {top: top}]}>
           <MaterialIcons
                name="cancel"
                color="#ffffff"
                size={40}
                onPress={action}
           
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
        backgroundColor: `red`,
        left: WIDTH - 75, 
        borderRadius: 50,
        elevation: 7,
        shadowOpacity: 1.0,
        justifyContent: `space-around`,
        alignItems: "center"
    }
})


export default CancelDestinationButton