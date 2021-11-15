import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../../assets/colors/Colors'

const Account = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Account Screen Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    textStyle: {
        textAlign: 'center',
        color: Colors.grey,
    }
})

export default Account