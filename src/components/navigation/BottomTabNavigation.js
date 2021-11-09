import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Colors from '../../assets/colors/Colors'

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
            <Tab.Screen name="Home" component={Home}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="home" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} />
            <Tab.Screen name="Settings" component={Settings}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="settings" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} /> 
            <Tab.Screen name="Account" component={Settings}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color, size}) => (
                            <Icon name="user" color={Colors.grey} size={20} />
                            ),
                            tabBarLabelStyle: {fontSize: 13},
                            }} /> 
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