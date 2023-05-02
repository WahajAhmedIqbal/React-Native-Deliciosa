import React, { useState } from 'react'

import { ScrollView, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


const Signup = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: 54, textAlign: 'center' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 800 }}>
                    Signup
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: 5, color: '#64748B', fontSize: 15, }}>
                    Let’ create your account
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
                        Username
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='Enter your username' />
                </View>
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
                <View style={{ marginTop: 8, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 11, height: 11, backgroundColor: '#2B2B2B', borderRadius: 3 }}></View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', fontSize: 11, marginLeft: 6 }}>
                            Agree to all
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TermsandCondition')}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#54B848' }}> Term & Conditions </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OneTimePassword')}
                    style={[styles.btn]}>
                    <Text style={styles.btnText}>
                        Sign up
                    </Text>
                </TouchableOpacity>

                <View style={{ position: 'relative' }}>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '30%', height: 1, left: 0, bottom: 12 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'center', paddingHorizontal: 5, textAlign: 'center', fontSize: 15, color: '#D9D9D9', marginTop: 27 }}>or connect with </Text>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '30%', height: 1, right: 0, bottom: 12 }} />
                </View>

                <View style={{ marginTop: 29, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../assets/images/Facebook.png')} />
                    <Image style={{ marginHorizontal: 20 }} source={require('../assets/images/Google.png')} />
                    <Image source={require('../assets/images/Applelogo.png')} />
                </View>

                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: 'black', textAlign: 'center', marginTop: 24, marginBottom: 25 }}>
                    Don’t have an account? <Text style={{ color: '#54B848' }} onPress={() => navigation.navigate('Login')}> Login </Text>
                </Text>
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
        width: 185,
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
        , fontFamily: 'Poppins-Regular',
    }
})

export default Signup

