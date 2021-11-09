import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native'
import Colors from '../../assets/colors/Colors'

const Authentication = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={Colors.transparent} />
            <Image style={styles.imageStyle} source={require('../../assets/images/med.jpg')} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome to Vate</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <View>
                    <View style={styles.loginbtn}>
                        <Text style={{textAlign: 'center', color: Colors.white, fontWeight: 'bold'}}>Log in</Text>
                    </View>
                    <View style={styles.signinbtn}>
                        <Text style={{textAlign: 'center', color: Colors.dark, fontWeight: 'bold'}}>Sign in</Text>
                    </View>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    imageStyle: {
        width: '100%',
        height: 310,
        marginBottom: 110,
    },
    textContainer: {
        margin: 20,
        fontSize: 12,
    },
    loginbtn: {
        marginTop: 30,
        backgroundColor: Colors.blue,
        padding: 15,
        borderRadius: 10,
    },
    signinbtn: {
        marginTop: 15,
        padding: 15,
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 10,
    }
})

export default Authentication