import { React, useCallback, useState, useEffect } from "react"
import { View, Text, SafeAreaView, VirtualizedList, ScrollView, StatusBar } from "react-native"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/firstSStyle.js"
import { DATA } from "../data/DATA.js"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Item, getItem, getItemCount } from "../components/Item.js"
import Container from "../components/Container.js"
import SeeAll from "../components/SeeAll.js"
import Finder from "../components/Finder.js"
import BannerList from "../components/BannerList.js"
import HotShot from "../components/HotShot.js"
import UnBox from "../components/UnBox.js"

export default function MainPage({ navigation })
{
    const renderItem = ({ item }) => <Item title={item.title} imageUri={item.imageUri} index={item.id} navigation={navigation} />;
    const [fontsLoaded, fontError] = useFonts({
        'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'JetBrainsMono-Regular': require("../../assets/fonts/JetBrainsMono-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () =>
    {
        if (fontsLoaded || fontError)
        {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError)
    {
        return null;
    }

    const getCurrentTimeInPoland = () =>
    {
        const currentTime = new Date();
        currentTime.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
        const hours = currentTime.getHours();
        return `${hours}`;
    };

    //setting NavBarColor on Android
    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar translucent backgroundColor="transparent" barStyle={"dark-content"}/>
            <ScrollView>
                <Container onLayout={onLayoutRootView}>
                    <View style={styles.boxOne}>
                        <Text style={styles.boxOneText}>{4 <= getCurrentTimeInPoland() && getCurrentTimeInPoland() <= 18 ? "Dzień dobry" : "Dobry wieczór"}</Text>
                        <Text>{ICONS.bellIcon}</Text>
                    </View>
                    <Finder />
                    <BannerList />
                    <SeeAll text="Wszystkie promocje" navigation={navigation}/>
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
                            initialNumToRender={4}
                        />
                    </View>
                    <SeeAll text="Wszystkie kategorie" navigation={navigation}/>
                </Container>
                <Container>
                    <HotShot />
                </Container>
                <Container>
                    <UnBox></UnBox>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}



