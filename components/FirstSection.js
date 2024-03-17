import { View, Text, TextInput, FlatList, Image, Dimensions } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { SIZES } from "../constants/sizes.js"
import { styles } from "../styles/firstSStyle.js"
import bannerList from "../data/firstSData.json"
import Container from "./Container.js"
import SeeAll from "./SeeAll.js"

export default function FirstSection() {

    const CARD_WIDTH_SPACING = Dimensions.get("window").width * 0.85 + SIZES.spacing;

    const [text, setText] = useState('');
    return (
        <Container>
            <View style={styles.boxOne}>
                <Text style={styles.boxOneText}>Dzień dobry</Text>
                <Text>{ICONS.bellIcon}</Text>
            </View>

            <View style={styles.boxTwo}>
                <View style={styles.boxTwoContainer}>
                    <Text style={styles.boxTwoLoupIcon}>{ICONS.magnifierIcon}</Text>
                    <TextInput style={styles.boxTwoInput}
                        placeholder="Czego szukasz?"
                        onChangeText={setText}
                        value={text}
                    />
                    <Text style={styles.boxTwoQRIcon}>{ICONS.barcodeIcon}</Text>
                </View>
            </View>
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



