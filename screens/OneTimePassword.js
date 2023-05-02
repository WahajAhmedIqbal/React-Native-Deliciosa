import React, { useState } from 'react'

import { ScrollView, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


const OneTimePassword = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: 54, textAlign: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 800 }}>
                    Otp Verification
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: 5, color: '#64748B', fontSize: 15, lineHeight: 15 }}>
                    We have sent a verification {'\n'}code on your email.
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 64 }}>
                <Image
                    style={{ width: '100%', height: 123, maxWidth: 143 }}
                    source={require('../assets/images/logo.png')} />
            </View>
            <View style={{ marginTop: 40, marginHorizontal: 37, }}>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 35 }}>
                    <TextInput
                        min={1}
                        keyboardType="numeric"
                        style={{ fontFamily: 'Poppins-Regular', borderColor: '#D9D9D9', borderWidth: 1.5, borderRadius: 20, width: 53, height: 42, textAlign: 'center', fontSize: 20, color: 'black', paddingBottom: 2 }}>
                        5
                    </TextInput>
                    <TextInput
                        min={1}
                        keyboardType="numeric"
                        style={{ fontFamily: 'Poppins-Regular', borderColor: '#D9D9D9', borderWidth: 1.5, borderRadius: 20, width: 53, height: 42, textAlign: 'center', fontSize: 20, color: 'black', paddingBottom: 2 }}>

                    </TextInput>
                    <TextInput
                        min={1}
                        keyboardType="numeric"
                        style={{ fontFamily: 'Poppins-Regular', borderColor: '#D9D9D9', borderWidth: 1.5, borderRadius: 20, width: 53, height: 42, textAlign: 'center', fontSize: 20, color: 'black', paddingBottom: 2 }}>

                    </TextInput>
                    <TextInput
                        min={1}
                        keyboardType="numeric"
                        style={{ fontFamily: 'Poppins-Regular', borderColor: '#D9D9D9', borderWidth: 1.5, borderRadius: 20, width: 53, height: 42, textAlign: 'center', fontSize: 20, color: 'black', paddingBottom: 2 }}>

                    </TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={[styles.btn]}>
                    <Text style={styles.btnText}>
                        Confirm Otp
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ textAlign: 'center' }}>
                    <Text
                        style={{ fontFamily: 'Poppins-Regular', color: '#D9D9D9', fontSize: 20, fontWeight: 400, marginTop: 10, textAlign: 'center' }}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
};

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
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    }
})

export default OneTimePassword

