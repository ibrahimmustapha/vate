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
            <View style={styles.searchButtonContainer}>
                <Icon name="search" size={20} style={styles.searchIcon} />
            </View>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>
                    <View style={styles.cat1}></View>
                    <View style={styles.cat1}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
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
        flexDirection: 'row',
        width: '73%',
    },
    searchButtonContainer: {
        backgroundColor: Colors.blue,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    searchIcon: {
        color: Colors.white,
        flex: 1,
        paddingTop: 5,
    },
    categoryContainer: {
        marginRight: 20,
        marginLeft: 20,
    },
    category: {
        flexDirection: 'row',
        gap: 10,
    },
    cat1: {
        backgroundColor: Colors.light,
        width: '100%',
        height: 50,
        marginRight: 20,
    }
})

export default Home