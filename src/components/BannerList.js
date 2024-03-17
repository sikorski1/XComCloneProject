import { React, } from "react"
import { View, FlatList, Image, Dimensions, } from "react-native"
import { SIZES } from "../constants/sizes.js"
import { styles } from "../styles/firstSStyle.js"
import bannerList from "../../data/firstSData.json"

export default function BannerList() {
    const CARD_WIDTH_SPACING = Dimensions.get("window").width * 0.85 + SIZES.spacing;
    return (
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
        </View>);
}