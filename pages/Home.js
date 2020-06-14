
import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

function Home({ navigation }){

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // The screen is focused
          // Call any action
          console.log("asdssssss")
          navigation.setOptions({ title: 'asd' })
        });
      
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    
    return  <Text>Home</Text>
}

export default Home
