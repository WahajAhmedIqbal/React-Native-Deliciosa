import React from 'react'

import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, } from 'react-native'

const CardInfo = (props) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 20, marginTop: 42, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../assets/images/Group24.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <View style={{ width: 24, height: 24, }} >
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/ic24-menu.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 26, marginBottom: 25, fontWeight: 'bold', color: 'black', fontFamily: 'Poppins-Regular', marginLeft: 28, marginTop: 22 }}>
                Add Credit Card,
            </Text>
            <View style={{ marginHorizontal: 37, }}>
                <View style={{ marginBottom: 19 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        Email
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='random@gmail.com' />
                </View>
                <View style={{ marginBottom: 19 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        Credit Card No
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='****************' />
                </View>
                <View style={{ marginBottom: 19 }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        Expire
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='19/10/2023' />
                </View>
                <View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#D9D9D9', paddingHorizontal: 15, }}>
                        CVV
                    </Text>
                    <TextInput
                        style={{ fontFamily: 'Poppins-Regular', borderWidth: 1.5, borderColor: '#D9D9D9', borderRadius: 50, width: '100%', paddingHorizontal: 30, paddingVertical: 12 }}
                        placeholder='Enter CVV' />
                </View>
                <View style={{ position: 'relative' }}>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '43%', height: 1, left: 0, bottom: 13 }} />
                    <Text style={{ fontFamily: 'Poppins-Regular', alignSelf: 'center', paddingHorizontal: 5, textAlign: 'center', fontSize: 15, color: '#D9D9D9', letterSpacing: 1.12, marginTop: 27 }}>OR</Text>
                    <View style={{ alignSelf: 'center', position: 'absolute', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, width: '43%', height: 1, right: 0, bottom: 13 }} />
                </View>
                <View style={{ backgroundColor: '#000', borderRadius: 20, width: 138, height: 42, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image style={{ width: 17, height: 17 }} source={require('../assets/images/ic24-border-horizontal.png')} />
                    <Text style={{ marginLeft: 7, color: '#fff', fontSize: 15, fontFamily: 'Poppins-Regular' }}>
                        Scan Card
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 70, marginBottom: 20, backgroundColor: '#54B848', borderRadius: 20, alignItems: 'center', paddingTop: 7, width: 215, height: 42 }}
                    onPress={() => props.navigation.navigate('Card Info')}
                >
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Regular', }}>Proceed Payment</Text>
                </TouchableOpacity>
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

export default CardInfo
