
import React, { useEffect, useState, Component } from 'react'
import { View, Text,Image, FlatList, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import ProfileImage from "../components/ProfileImage"
import { List, ListItem, SearchBar } from "react-native-elements";
import CardView from 'react-native-cardview';


const dimensions = Dimensions.get('window');

const WIDTH = dimensions.width;
const HEIGHT = dimensions.height;


class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
    }
           

    componentDidMount() {
        this.getHistorialData()
    }


    async  getHistorialData() {

        //url servidor falso en github
        const url = "https://my-json-server.typicode.com/Alvaro-Orellana/json_Fake_server/posts"
        const secondUrl = ""

        const response = await fetch(url)
        const json = await response.json()        
        this.setState({data : json})
        this.setState({isLoading: false}) 
    }


    render(){
        if(this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: "center"}}>
                    <ActivityIndicator size="large" animating />
                </View>
            )
        } else {

            return (
                        <FlatList
                        style={{ width: WIDTH, height: HEIGHT}}
                        data={this.state.data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={ ({item}) => { 
                            return (
                               <View style={styles.container}>
                                    <ProfileImage 
                                        imageURL={item.imageURL} 
                                        tamaño={65}
                                    />

                                    <View style={{flex: 1, justifyContent: "center", marginLeft: 5}}>
                                        <Text style={styles.textStyle}>{item.userName} {item.userLastName}</Text>
                                        <Text >{item.date}</Text>   

                                    </View>
                                
                                </View>                            
                            )
                        }}
                        />
            )
        }
    }
  
    
}


History.navigationOptions = () => {
    return {
        headerTitle: "Mis Viajes",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#7D57FE',
        },       
    }
}



const styles = StyleSheet.create({
 
    container: {
        flexDirection: "row",
        width: WIDTH - 30,
        height: 85,
        top: 10,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius:20,
        backgroundColor: "white",
        alignItems: "center",
        shadowRadius: 3,
        shadowOpacity: 1.0,
        borderWidth: 2,
        borderColor: "red"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        
    },
})

export default History
