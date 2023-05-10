import React, { useState, useRef } from 'react'
import { Text, View, Image, TextInput, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const Home = (props) => {
    const [isSelectedMeal, setIsSeletedMeal] = useState(0);

    const data = [
        {
            isActive: true,
            title: "Breakfast"
        },
        {
            isActive: false,
            title: "Meals"
        },
        {
            isActive: false,
            title: "Desserts"
        },
        {
            isActive: false,
            title: "Pizza"
        },
        {
            isActive: false,
            title: "Burger"
        },
        {
            isActive: false,
            title: "Dinner"
        }
    ]

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
        }
    ]

    const mainMeal = [
        {
            img: require('../assets/images/Meal-PNG-Download-Image.png'),
            bgColor: '#C70039'
        },
        {
            img: require('../assets/images/burger-png-png-images-yellow-images.png'),
            bgColor: '#E7492D'
        },
        {
            img: require('../assets/images/Meal-PNG-Download-Image.png'),
            bgColor: '#191970'
        },
        {
            img: require('../assets/images/burger-png-png-images-yellow-images.png'),
            bgColor: '#000'
        },
    ]

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', }}
            onPress={() => handleMealTag(index)}
        >
            <Text key={item} style={[isSelectedMeal == index ? { marginRight: 20, color: 'white', borderRadius: 20, height: 32, paddingTop: 5, textAlign: 'center', width: 94, backgroundColor: '#54B848', fontSize: 15, fontFamily: 'Poppins-Regular', letterSpacing: 0.8 } : { marginRight: 20, borderRadius: 20, height: 32, paddingTop: 5, textAlign: 'center', fontFamily: 'Poppins-Regular', letterSpacing: 0.8 }]}> {item.title}</Text>
        </TouchableOpacity>
    );

    const renderMealItem = ({ item }) => (
        <View style={{
            elevation: 8, marginBottom: 20, paddingVertical: 7, marginRight: 25, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', marginTop: 19, height: 180, width: 148, backgroundColor: 'white', borderRadius: 13, position: 'relative'
        }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Favorites Dish')} style={{ position: 'absolute', top: -13, right: -10, alignItems: 'center', paddingTop: 8, backgroundColor: '#54B848', borderRadius: 50, width: 31, height: 31, zIndex: 2, }}>
                {/* <View > */}
                <Image style={{ zIndex: 5, position: 'relative', width: 16, height: 15, }} source={require('../assets/images/ic24-heart.png')} />
                {/* </View>  */}
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Image style={{ height: 91, width: 100 }} source={item.image} />
                <Text style={{ lineHeight: 17, marginTop: 5, textAlign: 'center', fontFamily: 'Poppins-Regular', fontWeight: '400', color: 'black', fontSize: 15, letterSpacing: .8 }}>
                    {item.title}
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
        </View>
    )

    const handleMealTag = (item) => {
        setIsSeletedMeal(item)
    }

    const renderC = ({ item }) => (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: item.bgColor, marginRight: 22, borderRadius: 15, width: 258, height: 149, marginVertical: 20, }}>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 10, }}>
                    Get Special Discount
                </Text>
                <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 18, fontWeight: 'bold' }}>
                    Up to 30%
                </Text>
                <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 15, fontWeight: 'bold' }}>
                    off on your {'\n'}  first meal
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('MealDetails')} style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 5, width: 104, height: 29, alignItems: 'center', paddingTop: 3 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: '#000', fontWeight: '600', }}>
                        Order Now!
                    </Text>
                </TouchableOpacity>
            </View>
            <Image style={[styles.myImages, { marginLeft: 10 }]} source={item.img} />
        </View>
    )

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 20, marginTop: 42, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/Ellipse.png')} />
                    <Image style={{ marginLeft: 10, marginRight: 8, width: 12, height: 14 }} source={require('../assets/images/location.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#C9C6C6', fontSize: 12 }}>
                            Delivery to
                        </Text>
                        <View style={{ marginTop: -7, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 4, color: 'black' }}>
                                Mangura, BD
                            </Text>
                            <Image source={require('../assets/images/VectorArrow.png')} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <View style={{ width: 24, height: 24, }} onPress={() => props.navigation.toggleDrawer()}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/images/ic24-menu.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 14, marginHorizontal: 20, }}>
                <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', fontSize: 20, fontWeight: 800, letterSpacing: 1.12 }}>
                    Hi John,
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', letterSpacing: 0.8, fontSize: 12, fontWeight: 600 }}>
                    Welcome, let’s plan meal for you
                </Text>
            </View>
            <View style={{ marginTop: 15, paddingHorizontal: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginRight: 20, borderColor: '#D9D9D9', borderWidth: 1.5, borderRadius: 20, height: 42 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../assets/images/ic24-search.png')} />
                    <TextInput style={{ fontFamily: 'Poppins-Regular', width: '85%', marginLeft: 10, paddingBottom: 5 }} placeholder='Find Meal & Restaurent' />
                </View>
                <Image style={{ width: 13, height: 22 }} source={require('../assets/images/material-symbols_settings-voice-outline-rounded.png')} />
            </View>
            <View>
                <FlatList
                    style={{}}
                    data={mainMeal}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderC}
                    contentContainerStyle={{ paddingLeft: 20 }}
                />
            </View>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 15, color: 'black', fontFamily: 'Popping-Regular', fontWeight: 800, letterSpacing: 1.12, fontSize: 20, }}>
                    Meal Items
                </Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={data}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingLeft: 20 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={mealItems}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderMealItem}
                        contentContainerStyle={{ paddingLeft: 20, }}
                    />
                </View>

            </View>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 15, color: 'black', fontFamily: 'Popping-Regular', fontWeight: 800, letterSpacing: 1.12, fontSize: 20, }}>
                    Popular Items
                </Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={data}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingLeft: 20 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={mealItems}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderMealItem}
                        contentContainerStyle={{ paddingLeft: 20, }}
                    />
                </View>
            </View>
            <View>
                <Text style={{ marginLeft: 20, marginTop: 15, color: 'black', fontFamily: 'Popping-Regular', fontWeight: 800, letterSpacing: 1.12, fontSize: 20, }}>
                    Popular Items
                </Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={data}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingLeft: 20 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ marginTop: 10, }}
                        data={mealItems}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderMealItem}
                        contentContainerStyle={{ paddingLeft: 20, }}
                    />
                </View>
            </View>
        </ScrollView>
    )
};


const sliderWidth = 400;
const itemWidth = 200;
const styles = StyleSheet.create({
    notselected: {
        color: '#D9D9D9', fontSize: 15, fontFamily: 'Poppins-Regular', marginHorizontal: 10
    },
    slide: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height: 150,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    myImages: {
        width: 115,
        height: 115,
        objectFit: 'cover'
    }
})


export default Home
