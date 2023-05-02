import React, { useState } from 'react'

import { Text, View, TouchableOpacity, ScrollView, Image, FlatList, } from 'react-native'


const MealDetails = (props) => {

    const [isActiveSize, setIsActiveSize] = useState(2)

    const selectedData = [
        {
            img: require('../assets/images/pngimg1.png')
        },
        {
            img: require('../assets/images/burger-png-png-images-yellow-images.png')
        },
        {
            img: require('../assets/images/pngimg1.png')
        },
        {
            img: require('../assets/images/burger-png-png-images-yellow-images.png')
        }
    ]

    const mealSize = [
        {
            inch: '8"',
        },
        {
            inch: '10"',
        },
        {
            inch: '12"',
        },
        {
            inch: '14"',
        }
    ]

    const selectedItem = ({ item, index }) => {
        return (
            <View key={index} style={{}}>
                <Image style={{ width: 250, height: 230, objectFit: 'contain' }} source={item.img} />
            </View>
        )
    }

    const handleMealSize = (index) => {
        setIsActiveSize(index)
    }

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
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', fontFamily: 'Poppins-Regular', marginLeft: 28, marginTop: 22 }}>
                Meal Details,
            </Text>
            <FlatList
                data={selectedData}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={selectedItem}
                contentContainerStyle={{ paddingLeft: 20 }}
            />
            <View style={{ marginBottom: -10, marginHorizontal: 20, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{}}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 25, color: 'black', fontWeight: '600' }}>
                        Jumbo Burger
                    </Text>
                </View>
                <Text style={{ color: '#54B848', fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 20 }}>
                    $30.99
                </Text>
            </View>
            <View style={{ marginHorizontal: 20, display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                <Image style={{ width: 15, height: 15, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                <Image style={{ width: 15, height: 15, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                <Image style={{ width: 15, height: 15, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                <Image style={{ width: 15, height: 15, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                <Image style={{ width: 15, height: 15, marginRight: 2 }} source={require('../assets/images/Star.png')} />
            </View>
            <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', letterSpacing: 1, color: 'black', fontFamily: 'Poppins-Regular', }}>
                    Size
                </Text>
                <View style={{ marginTop: 4, display: 'flex', flexDirection: 'row' }}>
                    {mealSize.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleMealSize(index)} style={[{ borderWidth: 1.5, marginRight: 7, borderColor: '#D9D9D9', borderRadius: 20, alignItems: 'center', paddingTop: 2, width: 40, height: 30 }, isActiveSize == index ? { backgroundColor: '#54B848', color: 'white' } : {}]}>
                            <Text style={{ color: '#D9D9D9', fontSize: 17 }}>
                                {item.inch}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View>
                    <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins-Regular', marginTop: 12, fontWeight: '600' }}>Description
                    </Text>
                    <Text style={{ color: '#000000A6', fontSize: 15, marginTop: -1, fontFamily: 'Poppins-Regular', letterSpacing: 1.2 }}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim,
                        metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit
                        sed risus.
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../assets/images/ic24-time.png')} />
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 4 }}>
                            15 to 25 min
                    </Text>
                </View>
                <TouchableOpacity 
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 21, backgroundColor: '#54B848', borderRadius: 20, alignItems: 'center', paddingTop: 7, width: 190, height: 42 }}
                    onPress={() => props.navigation.navigate('Cart')}
                    >
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Regular',  }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MealDetails
