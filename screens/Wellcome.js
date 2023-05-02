import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Wellcome = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/images/logo.png')}   style={{marginBottom: 23, width: 143, height: 123}}/>
      <Text style={styles.welcomeStyle}>
            Hey!
      </Text>
      <Text style={[styles.welcomeStyle, {marginTop: -8}]}>
        Welcome to the App 
      </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={[styles.btn, styles.btnWrapper]}>
        <Text style={styles.btnText}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Signup')}
      style={styles.btnTow}>
        <Text style={styles.btnTextTwo}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcomeStyle: {
        fontSize: 20,
        fontWeight: 600,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontWeight: 800,
        letterSpacing: 0.8
    },
    btn: {
      backgroundColor: '#54B848',
      borderRadius: 50,
      paddingHorizontal: 64,
      paddingVertical: 9,
    },
    btnTow: {
      borderColor: '#54B848',
      borderWidth: 1,
      color: '#54B848',
      borderRadius: 50,
      paddingHorizontal: 50,
      paddingVertical: 9,
      marginTop: 12,
      fontFamily: 'Poppins-Regular',
    },
    btnText: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Poppins-Regular',
      letterSpacing: 0.8
    },
    btnWrapper: {
      marginTop: 27
    },
    btnTextTwo: {
      fontSize: 20,
      color: '#54B848',
      fontFamily: 'Poppins-Regular',
      letterSpacing: 0.8
    }
})

export default Wellcome
