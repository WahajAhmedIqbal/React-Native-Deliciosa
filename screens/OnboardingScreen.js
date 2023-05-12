import React, { useRef, useState } from 'react'
import { View, FlatList, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'


const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null)

    console.log('ref', currentIndex)

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

    const handleNextSlide = (nextIndex) => {
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
    };

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
                    {item.desc}
                </Text>
                <TouchableOpacity style={[currentIndex == 2 ? {display:'block'}: null]} onPress={() => handleNextSlide(index + 1)}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

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
                // onScroll={handleScroll}
                snapToInterval={width}
                snapToAlignment="start"
                decelerationRate="fast"

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
