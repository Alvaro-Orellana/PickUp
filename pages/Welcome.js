
import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';


function Welcome({ navigation }) {
    const imageSrc = require('../assets/background.png')
   

    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover" source={imageSrc}>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    imgBackground: {
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



export default Welcome