# uber-clone

Copy of the client-side functionality of apps like uber or cabify

<p align="center">
 <img  src="https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/background_image.png" width="675" height="450">
</p>

# About
Mobile app made with React Native. It functions as a prototype of what a ride sharing app would be like exclunding the server side.   
Meaning that 

The app was made using React Native and Firebase and uses APIs from the Google cloud platform. ................


# Demo
<img  align="left" src= "https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/app_intro.gif">

## &emsp; Features 

<p>
 <!-- These symbols are for html to make spaces and dots -->
 &emsp;&emsp; &#8226; Register and Login  <br><br>
 &emsp;&emsp; &#8226; Geolocalization  <br><br>
 &emsp;&emsp; &#8226; Places search (the same found in apps like google maps, uber, cabify, etc) <br><br>
 &emsp;&emsp; &#8226; Route generation  <br><br>
 &emsp;&emsp; &#8226; Travel data (distance, time, price) <br><br>
 &emsp;&emsp; &#8226; Profile data <br><br>
 &emsp;&emsp; &#8226; Travel records (not complete, uses hardcoded test data)<br><br>
</p>

<!-- This is to position the text under the demo gif otherwise it gets put on the side -->
<br><br><br><br><br><br><br><br><br><br><br>

## Context
This was the final project assignment for the class "New Technologies II" of the Technological Institute of Higher Education ORT Argentina. 
The development was made under the supervision of our teacher <a href="https://github.com/dguzman-ort"> Daniel Guzman </a>.
<br><br>

## Screens 
The app has 3 main screen: Home, Viajes (my travels), and perfil (profile). <br><br><br>


Home Screen             |  Travels screen         | Profile Screen
:-------------------------:|:-------------------------: |:-------------------------:
![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/home_screen.gif)  |  ![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/mis_viajes_screen.gif) | ![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/perfil_screen.gif)

<br><br>

## Route and travel data generation demo
Example of how the app would work when different directions are typed. This example uses two known locations of the city of Buenos Aires

![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/route_demo.gif)

## Installation
Start installing expo. (Expo is a set of tools and services that allows building of iOS, Android and web apps using JavaScript)
```
npm install -g expo-cli
```

Then clone the repo and change directory
```
git clone https://github.com/Alvaro-Orellana/uber.git
cd uber
```

Install the dependencies using <a href="https://yarnpkg.com">yarn </a>
```
yarn install
```

Update expo, install the simulator, and start the app
```
expo update
expo client:install:ios    (i already had the simulator so im not 100% sure if this is the correct command. Let me know if it doesn't work tho!)
expo start --ios
```

## Members
- Alvaro Orellana
- Mauro Bazan
- Lautaro Cosso

## License
This project is MIT licensed.
