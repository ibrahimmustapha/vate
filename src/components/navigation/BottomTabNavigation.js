import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Home Screen Here</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Home Screen Here</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <NavigationContainer independent={true} >
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Settings} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        textAlign: 'center',
    }
})

export default BottomNavigator