import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../assets/colors/Colors'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
            <TextInput placeholder="search here" />
            </View>
            </View>
            <View style={styles.categoryContainer}>
            <View style={styles.category}>
                    <View style={{flex: 1, backgroundColor: Colors.light, height: 105, marginRight: 10, width: '100%', elevation: 3, borderRadius: 5}}></View>
                    <View style={{flex: 1, backgroundColor: Colors.light, height: 105, width: '100%', elevation: 3, borderRadius: 5}}></View>
                </View>
                <View style={styles.category1}>
                    <View style={{flex: 2, backgroundColor: Colors.light, height: 105, marginRight: 10, width: '100%', elevation: 3, borderRadius: 5}}></View>
                    <View style={{flex: 1.5, backgroundColor: Colors.light, height: 105, width: '100%', elevation: 3, borderRadius: 5}}></View>
                </View>
                <View style={styles.category1}>
                    <View style={{flex: 1.5, backgroundColor: Colors.light, height: 105, marginRight: 10, width: '100%', elevation: 3, borderRadius: 5}}></View>
                    <View style={{flex: 2, backgroundColor: Colors.light, height: 105, width: '100%', elevation: 3, borderRadius: 5}}></View>
                </View>
                <View style={styles.category1}>
                    <View style={{flex: 2, backgroundColor: Colors.light, height: 105, marginRight: 10, width: '100%', elevation: 3, borderRadius: 5}}></View>
                    <View style={{flex: 1.5, backgroundColor: Colors.light, height: 105, width: '100%', elevation: 3, borderRadius: 5,}}></View>
                </View>
                <View style={styles.category1}>
                    <View style={{flex: 1.5, backgroundColor: Colors.light, height: 105, marginRight: 10, width: '100%', elevation: 3, borderRadius: 5}}></View>
                    <View style={{flex: 2, backgroundColor: Colors.light, height: 105, width: '100%', elevation: 3, borderRadius: 5}}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    textStyle: {
        textAlign: 'center',
        color: Colors.grey,
    },
    searchInputContainer: {
        backgroundColor: Colors.light,
        width: '100%',
        paddingLeft: 10,
        marginRight: 5,
        margin: 20,
    },
    searchContainer: {
        width: '90%',
        marginTop: 15,
    },
    categoryContainer: {
        marginRight: 20,
        marginLeft: 20,
    },
    category: {
        flexDirection: 'row',
    },
    category1: {
        flexDirection: 'row',
        marginTop: 15,
    },
})

export default Home