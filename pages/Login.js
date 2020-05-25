

import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';


function Login({ navigation }) {
    const imageSrc = require('../assets/background.png')
   

    return (
       <View style={styles.container}>
           <Text>Login</Text>
       </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D57FE',
      },
    background: {
        width: '100%',
        height: '100%',
        
        flex: 1
    },
    bottomView: { flexDirection: 'row', flex: 1, position:'absolute', bottom: 0, marginBottom: 50},
    buttonLogin: {
        height: 40,
        width: '42%',
        marginTop: 10,
        paddingTop: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#3CB9F9',
        borderRadius: 20,
        borderWidth: 0,
        borderColor: '#fff'
    },
     buttonRegister: {
        height: 40,
        width: '42%',
        marginTop: 10,
        paddingTop: 10,
        marginLeft: 15,
        marginRight: 20,
        backgroundColor: '#7D57FE',
        borderRadius: 20,
        borderWidth: 0,
        borderColor: '#fff'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    }
})



export default Login

