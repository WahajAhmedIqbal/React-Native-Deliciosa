import React from 'react'
import { Text, View, Image, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const FavoritesDish = (props) => {

    const mealItems = [
        {
            id: 1,
            title: 'Jumbo Buger',
            image: require('../assets/images/pngimg.png'),
            rating: '',
            price: 30.99
        },
        {
            id: 2,
            title: 'Large Buger',
            image: require('../assets/images/Healthy-Meal-PNG.png'),
            rating: '',
            price: 19.99
        },
        {
            id: 3,
            title: 'Large Pizze',
            image: require('../assets/images/pngimg.png'),
            rating: '',
            price: 19.99
        },
        {
            id: 4,
            title: 'Extra Largee Buger',
            image: require('../assets/images/Healthy-Meal-PNG.png'),
            rating: '',
            price: 29.99
        },
        {
            id: 5,
            title: 'Burger',
            image: require('../assets/images/pngimg.png'),
            rating: '',
            price: 5.99
        },
        {
            id: 8,
            title: 'Large Pizze',
            image: require('../assets/images/pngimg.png'),
            rating: '',
            price: 14.99
        },
        {
            id: 9,
            title: 'Burger',
            image: require('../assets/images/pngimg.png'),
            rating: '',
            price: 5.99
        },
    ]

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 20, marginTop: 42, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../assets/images/Group24.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <View style={{ width: 24, height: 24, }} onPress={() => props.navigation.toggleDrawer()}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/ic24-menu.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Poppins-Regular', marginLeft: 28, marginTop: 22 }}>
                Favorites Dishes
            </Text>
            <View style={{ marginHorizontal: 20, display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', }}>
                {mealItems.map((item, index) => (<View key={index}
                    style={{
                        elevation: 8, marginBottom: 20,
                        paddingVertical: 7, 
                        display: 'flex', justifyContent: 'space-between',
                        flexDirection: 'column', alignItems: 'center',
                        marginTop: 19, height: 180, width: 165,
                        backgroundColor: 'white', borderRadius: 13,
                        position: 'relative',
                    }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Favorites Dish')} style={{ position: 'absolute', top: -13, right: -10, alignItems: 'center', paddingTop: 8, backgroundColor: '#54B848', borderRadius: 50, width: 31, height: 31, zIndex: 2, }}>
                        <Image style={{ zIndex: 5, position: 'relative', width: 16, height: 15, }} source={require('../assets/images/ic24-heart.png')} />
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Image style={{ height: 91, width: 100 }} source={item.image} />
                        <Text style={{ lineHeight: 17, marginTop: 5, textAlign: 'center', fontFamily: 'Poppins-Regular', fontWeight: '400', color: 'black', fontSize: 15, letterSpacing: .8 }}>
                            {item.title}
                            {/* Testing Title */}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
                            <Image style={{ width: 7, height: 7, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 7, height: 7, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 7, height: 7, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 7, height: 7, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                            <Image style={{ width: 7, height: 7, marginRight: 2 }} source={require('../assets/images/Star.png')} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 11, paddingLeft: 12, paddingRight: 8 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('MealDetails')} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image style={{ width: 15, height: 15 }} source={require('../assets/images/Vector.png')} />
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#54B848', marginLeft: 4 }}>Add</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontFamily: 'Poppins-Regular', fontWeight: '600', fontSize: 10, letterSpacing: .5 }}>
                            ${item.price}
                        </Text>
                    </View>
                </View>))}

            </View>
        </ScrollView>
    )
}

export default FavoritesDish
