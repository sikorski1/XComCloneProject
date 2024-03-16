import { View, Text, TextInput, FlatList, Image } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/firstSStyle.js"
import bannerList from "../data/firstSData.json"
import Container from "./Container.js"
export default function FirstSection()
{
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
                    <Text style={styles.boxTwoQRIcon}>{ICONS.barcodeIcon} {bannerList.id}</Text>
                </View>
            </View>

            <FlatList style={styles.boxThree}
                data={bannerList}
                renderItem={({ item }) =>
                {
                    return (
                        <Image style={styles.boxThreeImg} source={{ uri: item.img }} key={item.id}
                        />
                    )
                }}
                horizontal />

        </Container>

    )
}



