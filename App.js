/*
* Developed by Ibrahim Mustapha 
* Date 04 - 10 - 2021
* App name: Vate
* Purpose: motivational quote mobile app
* language: JavaScript
 */

import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello JavaScript!</Text>
    </View>
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
    color: 'orange',
  }
})

export default App;
