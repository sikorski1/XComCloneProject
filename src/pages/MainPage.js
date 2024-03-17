import { View, Text, TextInput, FlatList, Image, Dimensions } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { SIZES } from "../constants/sizes.js"
import { styles } from "../styles/firstSStyle.js"
import bannerList from "../../data/firstSData.json"
import Container from "../components/Container.js"
import SeeAll from "../components/SeeAll.js"
import Finder from "../components/Finder.js"

export default function MainPage() {

    const CARD_WIDTH_SPACING = Dimensions.get("window").width * 0.85 + SIZES.spacing;

    return (
        <Container>
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

    )
}



