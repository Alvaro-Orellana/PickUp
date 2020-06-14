
import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';



const CustomButton = props => {

    return (
        <TouchableOpacity
            onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={{...styles.buttonText, ...props.textStyling}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: '#3CB9F9',
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


export default CustomButton



