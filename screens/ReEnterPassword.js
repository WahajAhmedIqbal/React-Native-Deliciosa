import React, { useState } from 'react'

import { ScrollView, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


const ReEnterPassword = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ marginTop: 54, textAlign: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 800 }}>
            New Password
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: 5, color: '#64748B', fontSize: 15,lineHeight: 15 }}>
            Enter your email and we will send {'\n'}you a reset instructions.
            </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 64 }}>
            <Image
                style={{ width: '100%', height: 123, maxWidth: 143 }}
                source={require('../assets/images/logo.png')} />
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 37, }}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                    Password
                </Text>
                <TextInput
                    style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                    placeholder='Enter your password' />
            </View>
            <View style={{  }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                Re-enter
                </Text>
                <TextInput
                    style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                    placeholder='Confirm your password' />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[styles.btn]}>
                <Text style={styles.btnText}>
                    Done
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{textAlign:'center'}}>
                <Text 
                style={{ fontFamily: 'Poppins-Regular',color: '#D9D9D9', fontSize: 20, fontWeight: 400, marginTop: 10, textAlign: 'center'}}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#54B848',
        borderRadius: 50,
        // paddingHorizontal: 64,
        paddingVertical: 9,
        maxWidth: 185,
        width: '100%',
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ReEnterPassword
