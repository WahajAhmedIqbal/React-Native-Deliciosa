import React, { useState } from 'react'

import { ScrollView, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


const Login = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: 54, textAlign: 'center' }}>
                <Text style={{ fontWeight: 800, fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 20, color: 'black', letterSpacing: 0.8 }}>
                    Login
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: 5, color: '#64748B', fontSize: 15, letterSpacing: 1.12 }}>
                    Login into your account
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 64 }}>
                <Image
                    style={{ width: '100%', height: 123, maxWidth: 143 }}
                    source={require('../assets/images/logo.png')} />
            </View>
            <View style={{ marginTop: 40, marginHorizontal: 37, }}>
                <View style={{ marginBottom: 19 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        Email
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='random@gmail.com' />
                </View>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='Enter your password' />
                </View>
                <View style={{ marginTop: 8, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ width: 11, height: 11, backgroundColor: '#2B2B2B', borderRadius: 3 }}></View>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontFamily: 'Poppins-Regular', color: 'black', fontSize: 11, marginLeft: 6 }}>
                                Remeber Me
                            </Text>
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', fontSize: 11, }} onPress={() => navigation.navigate('ForgotPassword')} > Forgot Password? </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={[styles.btn]}>
                    <Text style={styles.btnText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={{ position: 'relative' }}>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '28%', height: 1, left: 0, bottom: 13 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'center', paddingHorizontal: 5, textAlign: 'center', fontSize: 15, color: '#D9D9D9', letterSpacing: 1.12, marginTop: 27 }}>or connect with </Text>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '28%', height: 1, right: 0, bottom: 13 }} />
                </View>

                <View style={{ marginTop: 29, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../assets/images/Facebook.png')} />
                    <Image style={{ marginHorizontal: 20 }} source={require('../assets/images/Google.png')} />
                    <Image source={require('../assets/images/Applelogo.png')} />
                </View>

                <Text style={{ letterSpacing: 0.8, fontFamily: 'Poppins-Regular', fontSize: 15, color: 'black', textAlign: 'center', marginTop: 24, marginBottom: 25 }}>
                    Don’t have an account? <Text style={{ color: '#54B848' }} onPress={() => navigation.navigate('Signup')}> Sign Up </Text>
                </Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#54B848',
        borderRadius: 50,
        paddingHorizontal: 64,
        paddingVertical: 9,
        maxWidth: 185,
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center', letterSpacing: 0.8
    }
})

export default Login

