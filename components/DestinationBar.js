import React, {useState, Component} from "react";
import { StyleSheet, View ,TextInput, Text, Dimensions} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import lodash from "lodash"

const WIDTH = Dimensions.get("window").width;

//no subir a esta key a github
const GOOGLE_PLACES_API_KEY = "AIzaSyDt27gaF6Taw7YIgHtAxpYIFzfHPYx2kVQ"
const latitude = -34.6211276
const longitude = -58.4309524



//const DestinationBar = ({ texto, onTextChange, onTextSubmit}) => {
class DestinationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
           destination: "",
            googlePredictions: []
        }
        this.onChangeDestinationDebounced = lodash.debounce(this.fetchGooglePredictions, 1000)
    }


    async fetchGooglePredictions(destination) {
        console.log("-------------- SE LLAMO A LA API y el texto pasado es", destination)
        //onTextChange(destination)
        const googlePLacesAPI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?`
        const parameters = `key=${GOOGLE_PLACES_API_KEY}&input=${destination}&location=${latitude}, ${longitude}&radius=10000&language=es`
        const finalURL = googlePLacesAPI + parameters

        try {
            const result = await fetch(finalURL)
            const json = await result.json()
            //setGooglePredictions(json.predictions)
            this.setState({ googlePredictions: json.predictions})
            console.log(this.state.googlePredictions)
            
        } catch(error) {
            console.log("Error fetching places from google", error)
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

                            //this.setState({destination})


                            this.props.onTextChange(destination)
                            this.onChangeDestinationDebounced(destination)
                        }}                 
                        //onEndEditing={ (destination) =>  this.props.onTextSubmit(destination)}
                        onEndEditing={this.props.onTextSubmit}
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
                    
                    <View style={styles.predictionsStyle} key={prediction.id}>
                        <Text 

                            style={{padding: 6, marginLeft: 15, fontSize: 17, color: "white"}}
                        >
                            {prediction.description}
                        </Text>
                     </View>
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
        top: 35,
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