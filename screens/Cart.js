import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, } from 'react-native'

const Cart = (props) => {
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
                Cart,
            </Text>
            <View style={{
                paddingHorizontal: 10,
                elevation: 8, marginBottom: 20,
                backgroundColor: 'white',
                position: 'relative', elevation: 8, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ width: 112, height: 104, marginRight: 5 }}>
                        <Image style={styles.image} source={require('../assets/images/pngimg1.png')} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16 }}>
                            Jumbo Buger
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#000', marginRight: 5 }}>
                                Size
                            </Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#000' }}>
                                12"
                            </Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 2 }}>
                            <Image style={{ width: 15, height: 15 }} source={require('../assets/images/ic24-time.png')} />
                            <Text style={{ color: 'black', fontSize: 13, marginLeft: 4 }}>
                                15 to 25 min
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ marginBottom: 40, fontSize: 15, color: '#000', fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>
                        $30.99
                    </Text>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#54B848', borderRadius: 20, width: 46, height: 26 }}>
                        <Text style={{ color: '#fff', fontSize: 15, marginRight: 3 }}>
                            2
                        </Text>
                        <Image style={{ width: 8, height: 8 }} source={require('../assets/images/Vector-white.png')} />
                    </View>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 10,
                elevation: 8, marginBottom: 20,
                backgroundColor: 'white',
                position: 'relative', elevation: 8, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ width: 112, height: 104, marginRight: 5 }}>
                        <Image style={styles.image} source={require('../assets/images/pngimg1.png')} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#000', fontSize: 16 }}>
                            Jumbo Buger
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 12, height: 12, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#000', marginRight: 5 }}>
                                Size
                            </Text>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#000' }}>
                                12"
                            </Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 2 }}>
                            <Image style={{ width: 15, height: 15 }} source={require('../assets/images/ic24-time.png')} />
                            <Text style={{ color: 'black', fontSize: 13, marginLeft: 4 }}>
                                15 to 25 min
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ marginBottom: 40, fontSize: 15, color: '#000', fontFamily: 'Poppins-Regular', fontWeight: 'bold' }}>
                        $30.99
                    </Text>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#54B848', borderRadius: 20, width: 46, height: 26 }}>
                        <Text style={{ color: '#fff', fontSize: 15, marginRight: 3 }}>
                            2
                        </Text>
                        <Image style={{ width: 8, height: 8 }} source={require('../assets/images/Vector-white.png')} />
                    </View>
                </View>
            </View>
            <View style={{ borderWidth: .4, marginTop: 20, borderColor: '#D9D9D9', }}></View>
            <View style={{ marginTop: 18, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 1.2, fontFamily: 'Poppins-Regular', fontSize: 20 }}>
                    Total
                </Text>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 1.2, fontFamily: 'Poppins-Regular', fontSize: 20 }}>
                    $61.98
                </Text>
            </View>
            <TouchableOpacity
                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 70, marginBottom: 20, backgroundColor: '#54B848', borderRadius: 20, alignItems: 'center', paddingTop: 7, width: 190, height: 42 }}
                onPress={() => props.navigation.navigate('Card Info')}
            >
                <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Regular', }}>Add Credit Card</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
})

export default Cart
