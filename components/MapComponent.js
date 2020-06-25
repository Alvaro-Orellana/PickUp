import React, { Component } from 'react';
import {StyleSheet, Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions"

import {CurrentLocationButton} from "./CurrentLocationButton"
import Conductor from "./Conductor"
import { GOOGLE_PLACES_API_KEY } from "../constants/api-helper";


export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position : {
                //Cordenadas de Buenos Aires
                latitude:-34.6211276,  
                longitude: -58.4309524,
                //Los delta se refieren al zoom que va a hacer el mapa en la pantalla
                latitudeDelta: 0.17,
                longitudeDelta: 0.17
            
            },
            mapa: null,
            watchID : null,
            routeCoordinates: []
        }
    }


    async componentDidMount() {        
       await this.obtenerLocalizacion()    
    }

    //Obtiene y setea la posicion actual
    obtenerLocalizacion = async () => {
        //Esto puede servirme en el futuro para validar el permiso a acceder a
        // la localizacion del usuario para usarla tendria que usar el siguiente import
        //import { Constants, Location, Permissions } from 'expo';
        //
        // let { status } = await Permissions.askAsync(Permissions.LOCATION);
        // if (status !== 'granted') {
        //   this.setState({
        //     locationResult: 'Permission to access location was denied',
        //   });
        // }
        
        //Devuelve un objeto con la latitud y longitud
         navigator.geolocation.getCurrentPosition(position => {

            var latitud = parseFloat(position.coords.latitude);
            var longitud = parseFloat(position.coords.longitude);

            //objeto con coordenadas necesarias para ocupar MapView
            const currentPosition = {
                latitude: latitud,
                longitude: longitud,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }

            //Actualizo el estado con los datos obtenidos
            this.setState({position : currentPosition});
                
        }, error => {
                alert("No se pudo obtener la localizacion")
                console.log("Error obteniendo la localizacion del dispoditivo.  cloneUber/geolocalizacion/componentDidMount()");
        }, {enableHighAccuracy: true});

        //TODO: Mejorar este codigo porque me centra la pantalla continuamente
        // y no me deja moverme por el mapa
        //
        // this.watchID = navigator.geolocation.watchPosition( nuevaPosicion => {

        //     console.log("watch position se esta llamando");
            
        //     var latitud = parseFloat(nuevaPosicion.coords.latitude);
        //     var longitud = parseFloat(nuevaPosicion.coords.longitude);

        //     const ultimaPosicion = {
        //         latitude: latitud,
        //         longitude: longitud,
        //         latitudeDelta: 0.01,
        //         longitudeDelta: 0.01
        //     }

        //     this.setState({position : ultimaPosicion})
        // }, {enableHighAccuracy: true,timeOut: 20000, maximumAge: 10000})
    }

    componentWillUnmount(){
       // navigator.geolocation.clearWatch(this.watchID)
    }


    centrarMapa() {        
        this.mapa.animateToRegion(this.state.position)
    }

    render(){
        //Si el usuario elegio una direccion de las sugerencias de google
        // se muestra la ruta marcada en el mapa
        if(this.props.destinationId) {
            
            return(
                < MapView
                    //initialRegion={this.state.position}
                    ref={map => this.mapa = map}
                    region={this.state.position}
                    showsUserLocation={true}
                    showsCompass={true}
                    rotateEnabled={true}
                    style={styles.mapStyle}
                >    
                    <MapViewDirections
                        origin={this.state.position}
                        destination={"place_id:" + this.props.destinationId}
                        apikey={GOOGLE_PLACES_API_KEY}
                        strokeWidth={5}
                        strokeColor="#7D57FE"
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
                            console.log(params);
                            
                        }}
                        onReady={result => {
                            this.setState({routeCoordinates: result.coordinates})                            
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
              
                            this.mapa.fitToCoordinates(result.coordinates);
                          }}
                    />

                    <Marker coordinate={this.state.routeCoordinates[this.state.routeCoordinates.length-1]}/>
                    <CurrentLocationButton  callBack={ () => this.centrarMapa()}/>

                </MapView>

            )
        } else {
            
            return(
                < MapView
                    initialRegion={this.state.position}
                    ref={map => this.mapa = map}
                    region={this.state.position}
                    showsUserLocation={true}
                    showsCompass={false}
                    rotateEnabled={true}
                    style={styles.mapStyle}
                >    
                    <CurrentLocationButton  callBack={ () => this.centrarMapa()}/>

                    <Conductor conductor={{position: { latitude: -34.60, longitude: -58.39}}}/>
                </MapView>

             )
        }
    }

     //Conductor tiene hardcodeado las coordenadas iniciales es ahi donde despues al recibir las coordenadas
    // del conductor real se van a actualizar

    //tengo que ver como lo actualizo a conductor cuando lo reciba
}


const styles = StyleSheet.create({
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });








