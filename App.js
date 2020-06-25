import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator} from "react-navigation-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// Todas las paginas que muestra la app
import WelcomePage from './pages/Welcome'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import RegisterDataPage from "./pages/RegisterData"
import HomePage from './pages/Home';
import HistoryPage from "./pages/History";
import ProfilePage from "./pages/Profile"
import LoaderPage from "./pages/Loader"
import DriverFoundPage from "./pages/DriverFound"




const BottomTabNavigatorConfig = {
  defaultNavigationOptions : ({navigation}) => {
    return {
      tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "#C7C7CC",
        tabStyle: {
          backgroundColor: '#7D57FE',
        },
      },

      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state
        let currentIcon
        if(routeName == "Home") {
          currentIcon = "magnify"

        } else if (routeName == "Viajes") {
          currentIcon = "clipboard-text"
        
        } else {
          currentIcon = "account"
        }
        return <MaterialCommunityIcons name={currentIcon} color={tintColor} size={26} />
      }  
    } 
  }
}



//----------Estructura de la App-----------------------------------------------

//SwitchNavigator servira para decidir que flujo toma la app. La primera vez
//que alguien ingresa, lo llevara a Welcome, Login o Register. Pero si ya
//ingreso con su cuenta lo llevara directamente Home
const switchNavigator = createSwitchNavigator({

  // loginFlow: createStackNavigator({
  //   Welcome: WelcomePage,
  //   Register: RegisterPage,
  //   RegisterData: RegisterDataPage,
  //   Login: LoginPage
  // }),


  mainFlow: createBottomTabNavigator({
    
    Home: createStackNavigator({
      Home: HomePage,
      Loader: LoaderPage,
      DriverFound: DriverFoundPage
    }),

    Viajes: createStackNavigator({
      History: HistoryPage
    }),

    Perfil: createStackNavigator({
      Profile: ProfilePage,
    })

  }, BottomTabNavigatorConfig)

})


export default createAppContainer(switchNavigator)



