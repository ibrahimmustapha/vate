import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native' 
import Colors from '../../assets/colors/Colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Login = ({ navigation }) => {
    return (
        <View style={{backgroundColor: Colors.white}}>
            <Image style={styles.imgStyle} source={require('../../assets/images/med9.png')} />
            <View style={styles.container}>
            <View style={styles.emailContainer}>
            <Icon name="user" size={15} color={Colors.grey} />
            <Text style={{ paddingLeft: 10, color: Colors.grey}}>Email</Text>
            </View>
            <TextInput style={styles.emailStyle} placeholder="example@mail.com" placeholderTextColor={Colors.grey} />
          <View style={styles.passwordContainer}>
            <Icon name="lock" size={15} color={Colors.grey} />
            <Text style={{ paddingLeft: 10, color: Colors.grey }}>Password</Text>
          </View>
            <TextInput style={styles.passStyle}  placeholder="8+ characters" placeholderTextColor={Colors.grey} secureTextEntry={true}/>
            <Text style={styles.resetBtnStyle}>Forgot password?</Text>
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
                        <Text style={{width: 50, textAlign: 'center', color: Colors.grey}}>or</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: Colors.grey}} />
                        </View>
                <View style={styles.signinStyle}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', color: Colors.grey}}>Sign up</Text>
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
        height: 280,
    },
    emailStyle: {
        borderBottomWidth: 1,
        borderColor: Colors.blue,
    },
    passStyle: {
        borderBottomWidth: 1,
        borderColor: Colors.blue,
        color: Colors.grey,
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
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    emailContainer: {
        flexDirection: 'row', 
    },
    resetBtnStyle: {
        fontWeight: 'bold',
        color: Colors.blue,
        marginTop: 5,
        textAlign: 'right',
        marginBottom: -20,
    }
})

export default Login 