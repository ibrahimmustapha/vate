import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native' 
import Colors from '../../assets/colors/Colors'

const Login = ({ navigation }) => {
    return (
        <View style={{backgroundColor: Colors.white}}>
            <Image style={styles.imgStyle} source={require('../../assets/images/med3.png')} />
            <View style={styles.container}>
            <TextInput style={styles.emailStyle} placeholder="Please enter email" />
            <TextInput style={styles.passStyle}  placeholder="Please enter password" secureTextEntry={true}/>
            </View>
            <View style={styles.authBtnContainer}>
                <Pressable onPress={() => navigation.navigate('BottomNavigator', {name: 'BottomNavigator'})}>
                <View style={styles.loginContainer}>
                    <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Login</Text>
                </View>
                </Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: Colors.grey}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>or</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: Colors.grey}} />
                        </View>
                <View style={styles.signinStyle}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Sign up</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    imgStyle: {
        width: '100%',
        height: 350,
        marginBottom: -20,
    },
    emailStyle: {
        borderBottomWidth: 1,
        borderColor: Colors.blue,
    },
    passStyle: {
        borderBottomWidth: 1,
        borderColor: Colors.blue,
        marginTop: 10,   
    },
    authBtnContainer: {
        margin: 20,
    },
    loginContainer: {
        backgroundColor: Colors.blue,
        padding: 15,
        marginBottom: 15,
    },
    signinStyle: {
        borderWidth: 1,
        borderColor: Colors.grey,
        padding: 15,
        marginTop: 15,
    }
})

export default Login 