import { React, useCallback, useState } from "react"
import { View, Text, SafeAreaView, VirtualizedList, ScrollView, } from "react-native"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/firstSStyle.js"
import Container from "../components/Container.js"
import SeeAll from "../components/SeeAll.js"
import Finder from "../components/Finder.js"
import { useFonts} from 'expo-font';
import { DATA } from "../constants/DATA.js"
import * as SplashScreen from 'expo-splash-screen';
import { Item, getItem, getItemCount } from "../components/Item.js"
import BannerList from "../components/BannerList.js"
import HotShot from "../components/HotShot.js"


export default function MainPage() {
    const renderItem = ({ item }) => <Item title={item.title} imageUri={item.imageUri} index={item.id}/>;
    const [fontsLoaded, fontError] = useFonts({
        'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'JetBrainsMono-Regular': require("../../assets/fonts/JetBrainsMono-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const getCurrentTimeInPoland = () => {
        const currentTime = new Date();
        currentTime.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
        const hours = currentTime.getHours();
        return `${hours}`;
      };

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <ScrollView>
                <Container onLayout={onLayoutRootView}>
                    <View style={styles.boxOne}>
                        <Text style={styles.boxOneText}>{4<=getCurrentTimeInPoland() && getCurrentTimeInPoland()<=18 ? "Dzień Dobry": "Dobry Wieczór"}</Text>
                        <Text>{ICONS.bellIcon}</Text>
                    </View>
                    <Finder />
                    <BannerList />
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
                    <SeeAll text="Wszystkie kategorie"/>
                </Container>
                <Container>
                    <HotShot/>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}



