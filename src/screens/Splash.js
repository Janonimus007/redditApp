import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
const Splash = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/splash.jpeg')}
      style={styles.containerImage}>

    </ImageBackground>
  )
}

export default Splash
const styles = StyleSheet.create({
  containerImage:{
    flex:1
  }
})