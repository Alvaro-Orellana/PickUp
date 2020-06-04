import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './pages/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/Login';
import Register from './pages/Register';

const Stack = createStackNavigator()

export default function App() {


  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} 
          options={{title:'', headerBackTitleVisible:false, headerTintColor:'#fff', headerStyle: {backgroundColor : '#7D57FE'}}} />
        <Stack.Screen name="Register" component={Register}
        options={{title:'', headerBackTitleVisible:false, headerTintColor:'#fff', headerStyle: {backgroundColor : '#7D57FE'}}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

