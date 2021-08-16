# PickUp

Copy of the client side functionality of ride-sharing apps like uber or cabify

<p align="center">
 <img  src="https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/background_image.png" width="590" height="400">
</p>

# About

PickUp is a prototype mobile application for the user-side functionality of a ridesharing app. This means all the features a user would find
in this type of app are present. Things like a map view, geolocation, places search, route generation and relevant information about the ride for the user.
What it doesn't do (at least yet) is actually using a backend service to connect to a driver.

This app made with React Native, Expo, Node and services from the google cloud platform.
<br>

# Features
<img  align="left" src= "https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/app_intro.gif">


<p>
 <!-- These symbols are for html to make spaces and dots -->
 &emsp;&emsp; &#8226; Register and Login  <br><br>
 &emsp;&emsp; &#8226; Google maps  <br><br>
 &emsp;&emsp; &#8226; Places search (like in uber, cabify, etc) <br><br>
 &emsp;&emsp; &#8226; Geolocalization  <br><br>
 &emsp;&emsp; &#8226; Route generation  <br><br>
 &emsp;&emsp; &#8226; Travel data: distance, time, price <br><br>
 &emsp;&emsp; &#8226; Profile data <br><br>
 &emsp;&emsp; &#8226; Trips history (not complete, uses hardcoded test data)<br><br>
</p>

<!-- This is to position the text under the demo gif otherwise it gets put on the side -->
<br><br><br><br><br><br><br><br><br><br><br>

## Context
This was the final project assignment for the class "New Technologies II" of the Technological Institute of Higher Education ORT Argentina. 
The development was made under the supervision of our teacher <a href="https://github.com/dguzman-ort"> Daniel Guzman </a>.
<br><br>

## Screens 
The app has 3 screen: Home, Travels and Profile. 

Home is the main screen with google maps and a search bar, Travels shows the history of trips taken by the user, and Profile shows
the user info.

<br>

Home Screen             |  Travels screen         | Profile Screen
:-------------------------:|:-------------------------: |:-------------------------:
![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/home_screen.gif)  |  ![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/mis_viajes_screen.gif) | ![](https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/perfil_screen.gif)

<br>

# App Demo

This is a sample gif provided to show what PickUp looks like in action.

First the user types in where he wants to go. Different options appear, then the user tap on 
one of them and a route from the current location to the selected destination is generated. Along with the route other information about the trip appear:
the distance, time, and price. Finally with this preview of the trip the to user can decide to confirm the trip and the app
will start "looking" for a driver.
<br><br>


<p align="center">
  <img src="https://github.com/Alvaro-Orellana/PickUp/blob/main/assets/images_for_readme/route_demo.gif" alt="animated" />
</p>

<br>


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
This project is <a href="https://github.com/Alvaro-Orellana/PickUp/blob/main/LICENSE">MIT licensed. </a>
