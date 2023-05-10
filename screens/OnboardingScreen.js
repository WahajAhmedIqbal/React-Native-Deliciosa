import React from 'react'
import { View, FlatList, Text, Image, Dimensions, StyleSheet } from 'react-native'


const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {

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

    const onBordingSlides = ({ item }, index) => {
        return (
            <View key={index} style={{ flex: 1, height: height, backgroundColor: '#fff', width: width }}>
                <Image style={[{
                    height: height * .5,
                }, styles.onbdImage]} source={item.img} />
                <Text style={{ textAlign: 'center', color: '#000', marginTop: 25, fontFamily: 'Poppins-Regular', fontSize: 20, fontWeight: 'bold', }}>
                    {item.title}
                </Text>
                <Text style={{ textAlign: 'center', maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 5, fontSize: 16, fontFamily: 'Poppins-Regular',  }}>
                    {item.desc}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                style={{}}
                data={onBardingData}
                renderItem={onBordingSlides}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

                snapToInterval={width}
                snapToAlignment="center"
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
