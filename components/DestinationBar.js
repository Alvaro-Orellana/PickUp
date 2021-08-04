import React, {Component} from "react";
import { StyleSheet, View ,TextInput, Text, Dimensions, TouchableHighlight} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GOOGLE_PLACES_API_KEY } from "../constants/api-helper";
import lodash from "lodash"

const WIDTH = Dimensions.get("window").width;

//Por ahora estan hardcodeadas, hay que pasar las de verdad desde Home
const latitude = -34.6211276
const longitude = -58.4309524


class DestinationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            googlePredictions: [],
            destinationId: ""
        }
        //Retraza el llamado de la funcion por 1.5 segundos, asi no se llama a la api cada 
        //vez que se ingresa una letra, sino cuando se deja de escribir
        this.handleChangeText = lodash.debounce(this.fetchGooglePredictions, 1500)
    }


    async fetchGooglePredictions(destination) {
    
        //Este if hace que si el usuario borra todo lo que escribio no haga una llamda 
        //innecesaria a la api con un texto vacio
        if(destination) {
            const googlePLacesAPI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?`
            const parameters = `key=${GOOGLE_PLACES_API_KEY}&input=${destination}&location=${latitude}, ${longitude}&radius=10000&language=es`
            const finalURL = googlePLacesAPI + parameters
    
            try {
                const result = await fetch(finalURL)
                //Array con todas las sugerencias de google en base al lugar que escribe el usuario
                const json = await result.json()
                this.setState({ googlePredictions: json.predictions})
                console.log("Se llamo a la API de google places--------------------------------");
                
            } catch(error) {
                console.log("Error fetching places from google", error)
            }
        }
    }
    

    render() {
        return(
            <View style={styles.container}>
                <View  style={styles.container2}> 
                
                    <View  
                        style={styles.leftColumn}> 
                        <Text style={{fontSize: 8, color: `white`}}>{`\u25A0`}</Text>
                    </View> 
    
                    <TextInput
                        style={{fontSize: 21, color: `white`}}
                        placeholder="Hacia donde quieres ir?"
                        placeholderTextColor="white"
                        value={this.props.texto}
                        onChangeText={destination => {            

                            this.props.onTextChange(destination)
                            this.handleChangeText(destination)
                        }}                 
                        //onEndEditing={this.props.onTextSubmit}
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

                {this.state.googlePredictions.map(prediction =>
                    
                  <TouchableHighlight 
                    key={prediction.id}
                    onPress={ () => this.props.onTextSubmit(prediction.place_id)}
                  >
                    <View style={styles.predictionsStyle}>
                        <Text 
                            style={{padding: 6, marginLeft: 15, fontSize: 17, color: "white"}}
                        >
                            {prediction.description}
                        </Text>
                    </View>
                  </TouchableHighlight>
                )}

            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: "absolute",
        width: (WIDTH-40),
        height: 60,
        top: 40,
        left: 20,
        borderRadius:15,
        backgroundColor: "#7D57FE",
        alignItems: "center",
        shadowColor: "#000000",
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    container2 : {
       flexDirection: "row",
       height: 60, 
       alignItems: "center",
       
    },
    predictionsStyle: {
        borderColor: "white",
        borderWidth: 0.5, 
        borderRadius: 15, 
        backgroundColor: "#7D57FE", 
        width: (WIDTH-40)

    },
    leftColumn: {
        alignItems: "center",
        padding: 20,
        flex: 1
    },
    centerColumn: {
        flex: 4,
        alignItems: "center",
    },
    rightColumn: {
        flex: 1,
        alignItems: "flex-end",
        padding: 20
    }
})



export default DestinationBar;