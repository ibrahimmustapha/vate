/*
* Developed by Ibrahim Mustapha 
* Date 04 - 10 - 2021
* App name: Vate
* Purpose: motivational quote mobile app
* language: JavaScript
 */

import React from 'react'
import BottomNavigator from './src/components/navigation/BottomTabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Authentication from './src/components/main_components/Authentication'
import Login from './src/components/main_components/Login'

const Stack = createNativeStackNavigator()

// Navigation from one screen to the other 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
