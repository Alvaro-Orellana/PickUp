import React from "react";
import { StyleSheet, View ,TextInput, Text, Dimensions} from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import GooglePlacesAutocomplete from "react-native-google-places-autocomplete"


const WIDTH = Dimensions.get("window").width;


// var config = require('../../config'); 
// const GOOGLE_PLACES_API_KEY = config.googlePlacesAPI.key; 
// console.log("mi llave de google es ", GOOGLE_PLACES_API_KEY);





const DestinationBar = ({text, onTextChange, onTextSubmit}) => {
    
    return(
        <View 
            style={styles.container}>
             <View  
                style={styles.leftColumn}> 
                <Text style={{fontSize: 8, color: `white`}}>{`\u25A0`}</Text>
            </View>

            
            <TextInput
                style={{fontSize: 21, color: `white`}}
                placeholder="Hacia donde quieres ir?"
                placeholderTextColor="white"
                value={text}
                onChangeText={onTextChange}
                onEndEditing={onTextSubmit}
            >
            </TextInput>
            
            <View                 
                style={styles.rightColumn}> 
                <Ionicons
                    name={`md-car`} 
                    size={25}   
                    color={`#FFFFFF`}  
                    style={{alignSelf: `center`}}
                />
            </View>
        </View>

    )

}



/* 
    Barra de busqueda de google places api, integrar aca despues




 
    return(
        <View style={styles.container}>
      <GooglePlacesAutocomplete
            query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'es', // language of the results
            }}
            onPress={(data, details = null) => console.log(data)}
            onFail={error => console.error(error)}
            minLenght={3} 

            styles={{
            textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 0,
            },
            textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
            },
            predefinedPlacesDescription: {
                color: '#1faadb',
            },
            }}
      />
    </View>

    )

*/





const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: "absolute",
        flexDirection: "row",
        width: (WIDTH-40),
        height: 60,
        top: 30,
        left: 20,
        borderRadius:15,
        backgroundColor: "#7D57FE",
        alignItems: "center",
        shadowColor: "#000000",
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    leftColumn: {
        flex: 1,
        alignItems: "center",
    },
    centerColumn: {
        flex: 4,
    },
    rightColumn: {
        flex: 1,
        borderRadius: 1,
        borderColor: "#ededed"
    }
})



export default DestinationBar;