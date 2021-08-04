import React, { useState, useEffect, Component } from 'react'
import { createMaterialBottomTabNavigator, Image } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import Home from '../pages/Home';
import History from '../pages/History';
import Profile from '../pages/Profile';

//   const MainNavigator = createStackNavigator({
//     // Splash: {screen: Splash, navigationOptions:{ header: null, title: 'Splash'}},
//     // Login: {screen: Login, navigationOptions:{ header: null, title: 'Login'}},
//     // Home: {screen: Home, navigationOptions:{ title: 'Home'}}
//     Root: {
//       screen: TabNav
//     }
//   });
  

const Tab = createMaterialBottomTabNavigator()


function BottomNavigator({navigation}) {
   
    return (
            <Tab.Navigator            
             activeColor="white"
             barStyle={{ backgroundColor: '#694fad' }}
            > 
                <Tab.Screen name="Home" component={Home}                 
                options={{                   
                    title: 'My home',
                    headerStyle: {backgroundColor : '#7D57FE'},
                    tabBarColor:'#7D57FE',
                    tabBarLabel:"Home",
                    tabBarOptions: { 
                        showIcon:
                         true 
                     },
                    tabBarIcon: ({ color, focused }) => {
                        return <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    },
                    
                }}/>
                <Tab.Screen name="History" component={History} 
                options={{
                    title:"Historial",
                    headerStyle: {backgroundColor : '#7D57FE'},
                    tabBarColor:'#7D57FE',
                    tabBarLabel:"History",
                    tabBarOptions: { 
                        showIcon: true ,
                        
                     },
                     
                    tabBarIcon: ({ color, focused }) => {
                        return <MaterialCommunityIcons name="clipboard-text" color={color} size={26} />
                    },
                    
                }}/>
                 <Tab.Screen name="Profile" component={Profile} 
                options={{
                    headerStyle: {backgroundColor : '#7D57FE'},
                    tabBarColor:'#7D57FE',
                    tabBarLabel:"Profile",
                    tabBarOptions: { 
                        showIcon: true 
                     },
                    tabBarIcon: ({ color, focused }) => {
                        return <MaterialCommunityIcons name="account" color={color} size={26} />
                    },
                    
                }}/>
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
      width: 26,
     height: 26,
    },
   });

export default BottomNavigator
