import React, { useRef, useState } from 'react'
import { View, FlatList, Text, Image, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'


const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState();
    const flatListRef = useRef(null);

    const onBardingData = [
        {
            id: 1,
            img: require('../assets/images/Group2.png'),
            title: `PLAN YOUR ${"\n"} BREAK FAST IN SECONDS!'`,
            desc: 'Plan your breakfast in seconds with Deliciosa. Browse, customize, and enjoy a delicious breakfast with ease.',
        },
        {
            id: 2,
            img: require('../assets/images/Group3.png'),
            title: `PLAN YOUR ${"\n"} LUNCH IN SECONDS!`,
            desc: "Quickly plan your lunch with Deliciosa. Browse, customize and enjoy a delicious meal in no time."
        },
        {
            id: 3,
            img: require('../assets/images/Group6.png'),
            title: `PLAN YOUR ${"\n"} DINNER IN SECONDS!`,
            desc: "Effortlessly plan your dinner with Deliciosa. Browse, customize and enjoy a delicious meal in seconds."
        },
    ];

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffset / width); // assuming each item occupies the full screen width
        setCurrentIndex(index);
        console.log('currentIndex', width)
    };

    const handleNextSlide = (nextIndex) => {
        // setCurrentIndex(nextIndex);
        // flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
    };

    const handleSkip = () => {
        flatListRef.current.scrollToIndex({ animated: true, index: 2 });
    }

    const onBordingSlides = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1, height: height, backgroundColor: '#fff', width: width }}>
                <Image style={[{
                    height: height * .5,
                }, styles.onbdImage]} source={item.img} />
                <Text style={{ textAlign: 'center', color: '#000', marginTop: 25, fontFamily: 'Poppins-Regular', fontSize: 20, fontWeight: 'bold', }}>
                    {item.title}
                </Text>
                <Text style={{ textAlign: 'center', maxWidth: 270, marginLeft: 'auto', marginRight: 'auto', marginTop: 5, fontSize: 16, fontFamily: 'Poppins-Regular', }}>
                    {item.desc}  {currentIndex}
                </Text>
                <View style={{ marginHorizontal: 10, marginTop: 'auto', marginBottom: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={{ width: 120, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#54B848', borderRadius: 5, }}
                        onPress={handleSkip}
                    >
                        <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Poppins-Regular' }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={currentIndex == 0 ? true : false}
                        style={{ width: 120, height: 50, alignItems: 'center', justifyContent: 'center', borderColor: '#54B848', borderRadius: 5, borderWidth: 1 }}
                    // onPress={() => handleNextSlide(index - 1)}
                    >
                        <Text style={[styles.buttonText, { color: '#000', fontSize: 14, fontFamily: 'Poppins-Regular' }]}>Perivous</Text>
                    </TouchableOpacity>
                    {
                        currentIndex <= 1 ? (<TouchableOpacity
                            style={{ width: 120, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#54B848', borderRadius: 5, }}
                        // onPress={() => handleNextSlide(index + 1)}
                        >
                            <Text style={[styles.buttonText, { color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 14 }]}>Next</Text>
                        </TouchableOpacity>) : <Text>Hello world</Text>
                    }
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                ref={flatListRef}
                style={{}}
                data={onBardingData}
                renderItem={onBordingSlides}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={handleScroll}
                snapToInterval={width}
                snapToAlignment="start"
                decelerationRate="normal"

            />
        </View>
    );
};


const styles = StyleSheet.create({
    onbdImage: {
        objectFit: 'fill',
        width: '100%',
    }
})

export default OnboardingScreen
