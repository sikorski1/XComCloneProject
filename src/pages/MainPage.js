import { React, useCallback, useState } from "react"
import { View, Text, FlatList, Image, Dimensions, SafeAreaView, VirtualizedList, ScrollView, TextInput } from "react-native"
import { ICONS } from "../constants/icons.js"
import { SIZES } from "../constants/sizes.js"
import { styles } from "../styles/firstSStyle.js"
import bannerList from "../../data/firstSData.json"
import Container from "../components/Container.js"
import SeeAll from "../components/SeeAll.js"
import Finder from "../components/Finder.js"
import { useFonts } from 'expo-font';
import { DATA } from "../constants/DATA.js"
import * as SplashScreen from 'expo-splash-screen';
import { Item, getItem, getItemCount } from "../components/Item.js"


export default function MainPage() {
    const renderItem = ({ item }) => <Item title={item.title} imageUri={item.imageUri} />;
    const [fontsLoaded, fontError] = useFonts({
        'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const CARD_WIDTH_SPACING = Dimensions.get("window").width * 0.85 + SIZES.spacing;

    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <Container onLayout={onLayoutRootView}>
                    <View style={styles.boxOne}>
                        <Text style={styles.boxOneText}>Dzień dobry</Text>
                        <Text>{ICONS.bellIcon}</Text>
                    </View>
                    <Finder />
                    <View style={styles.boxThree}>
                        <FlatList
                            data={bannerList}
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={CARD_WIDTH_SPACING}
                            decelerationRate="fast"
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={item.id}
                                        style={[styles.boxThreeImgContainer,
                                        { marginLeft: index === 0 ? 15 : 10, marginRight: index === bannerList.length - 1 ? 15 : 0 }
                                        ]}>
                                        <Image style={styles.boxThreeImg} source={{ uri: item.img }} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <SeeAll text="Wszystkie promocje" />
                </Container>
                <Container>
                    <View style={styles.boxFour}>
                        <VirtualizedList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            getItemCount={getItemCount}
                            getItem={getItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={4} />
                    </View>
                    <SeeAll text="Wszystkie katgorie" />
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}



