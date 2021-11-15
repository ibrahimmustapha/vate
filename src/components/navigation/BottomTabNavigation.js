import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../assets/colors/Colors'
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <NavigationContainer independent={true} >
        <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: Colors.white }}} >
            <Tab.Screen name="Categories" component={Home}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="dashboard" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} />
            <Tab.Screen name="Favorites" component={Favorites}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="favorite-border" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} /> 
            <Tab.Screen name="Account" component={Account}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="person-outline" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} /> 
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigator