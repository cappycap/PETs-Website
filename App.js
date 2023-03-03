import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'

// Import pages.
import Home from './Scripts/Home.js'
import BasicEncryption from './Scripts/BasicEncryption.js'
import WebTracking from './Scripts/WebTracking.js'
import Anonymity from './Scripts/Anonymity.js'

// Linking configuration.
const linking = {
  prefixes: ['https://pets.adambullard.com'],
  config: {
    screens: {
      Home: '',
      BasicEncryption: '/basic-encryption',
      WebTracking: '/web-tracking',
      Anonymity: '/anonymity',
    }
  }
}

const Stack = createStackNavigator()

export default function App() {

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsItalic: require('./assets/fonts/Poppins-Italic.ttf'),
    OCRA: require('./assets/fonts/OCRA.ttf')
  })

  return (<NavigationContainer linking={linking}>
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title:'Privacy Enhancing Technologies'}} />
      <Stack.Screen name="BasicEncryption" component={BasicEncryption} options={{title:'PETs - Basic Encryption'}} />
      <Stack.Screen name="WebTracking" component={WebTracking} options={{title:'PETs - Web Tracking'}} />
      <Stack.Screen name="Anonymity" component={Anonymity} options={{title:'PETs - Anonymity'}} />
    </Stack.Navigator>
  </NavigationContainer>)

}

