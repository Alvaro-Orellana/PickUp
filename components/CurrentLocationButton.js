import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const WIDTH =  Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = (props) => {

    const callBack = props.callBack ? props.callBack : () => console.log("Callback fucntion not passed to CurrentLocationButton");
    
    const bottom = props.bottom ? props.bottom : 70;

    //TODO: aca tengo que colocar bien el buton enla pantalla. modificar el top
    //puede que se arregle solo si logo scar el titulo de la barra de navegacion
    return(
        <View style={[style.container, {top: HEIGHT - bottom-80}]}>
           <MaterialIcons
                name={"my-location"}
                color={"#000000"}
                size={25}
                onPress={ () => {callBack()}}
                containerStyle
                
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        zIndex: 9,
        position: "absolute",
        width: 55,
        height:55,
        backgroundColor: `#fff`,
        left: WIDTH - 75, 
        borderRadius: 50,
        elevation: 7,
        shadowRadius: 20,
        shadowOpacity: 1.0,
        justifyContent: `space-around`,
        alignItems: "center",
        //top: HEIGHT -1000
    }
})
