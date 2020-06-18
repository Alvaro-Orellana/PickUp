import React from "react";
import { Image } from "react-native";

import  { AnimatedRegion, Marker }from "react-native-maps";

export default class Conductor extends React.Component {
    
    constructor(props){
        super(props)

        //Si paso props al componente seteo el conductor, sino le doy un objeto hardcodeado
        const conductor = this.props.conductor ? 
            this.props.conductor : 
            {
                //uid: "noDriversPassed",
                position: { latitude: -34.608955861208756, longitude: -58.39071147141918 }
            }


        const coordenadas = new AnimatedRegion({
            latitude: conductor.position.latitude,
            longitude: conductor.position.longitude,
        })   


        this.state = {
            conductor: conductor,
            coordenadas: coordenadas,   
        }
    }


    render() {
        return (                      
            <Marker  
                coordinate={this.state.conductor.position}   
                style={{width: 50, height: 50}} 
                anchor={{x: 0.35, y: 0.32}}
                ref={ marker => this.marker = marker }
            >
                <Image
                    source={require("../assets/imagen-auto.png")} 
                    style={{height: 60, width: 60 }}
                />      
            </Marker>
                    
            // <MapView.Marker.Animated
            //     coordinate={ this.state.coordenadas }
            //     anchor={{x: 0.35, y: 0.32}}
            //     ref={ marker => this.marker = marker }
            //     style={{width: 50, height: 50}} >
                
            //     <Image>
            //         source={require("../assets/imagenes/imagen-auto.png")}
            //         style={{width: 32, height: 32}}
            //     </Image>

            // </MapView.Marker.Animated>
        )
        
    }
}