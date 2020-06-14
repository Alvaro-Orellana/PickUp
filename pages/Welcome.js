
import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';

function Welcome({ navigation }) {
    const imageSrc = require('../assets/background.png')
   

    return (
        <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover" source={imageSrc}>
            <View style={styles.bottomView}>
                <CustomButton 
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Login')}>
                    Ingresar
                </CustomButton>

                   <CustomButton 
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('Register')}>
                    Registrarse
                </CustomButton>              

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
    bottomView: { flexDirection: 'row', flex: 2, position:'absolute', bottom: 0, marginBottom: 50},
    buttonLogin: {
        marginTop: 10,
        width: '100%',
        paddingTop: 10,
        marginLeft: 15,
        marginRight: '25%',
        backgroundColor: '#3CB9F9',
    },
     buttonRegister: {
        width: '100%',
        marginTop: 10,
        paddingTop: 10,
        marginLeft: 25,
        marginRight: '20%',
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