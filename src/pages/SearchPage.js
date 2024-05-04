import { View, Text, TextInput, FlatList, SafeAreaView, Pressable } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { COLORS } from "../constants/colors.js"
import { styles } from "../styles/firstSStyle.js"
import { productSearch } from "../data/productSearch.js";
import filter from "lodash.filter";
import Container from "../components/Container.js";
import SearchCard from "../components/SearchCard.js";

export default function SearchPage({ navigation })
{
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(productSearch);

    const handleSearch = (query) =>
    {
        setSearchQuery(query);
        const formattedQuerry = query.toLowerCase();
        const filteredData = filter(productSearch, (item) =>
        {
            return contains(item, formattedQuerry);
        });
        setData(filteredData);
    };

    const contains = (item, query) =>
    {
        const { name } = item;
        if (name.toLowerCase().includes(query)) { return true; }
        return false
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: COLORS.containerColor }]}>
            <Container style={{marginBottom: 0}}>
                <View style={styles.box}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxLoupIcon}>{ICONS.magnifierIcon}</Text>
                        <TextInput style={styles.boxInput}
                            placeholder="Czego szukasz?"
                            value={searchQuery}
                            onChangeText={(query) => handleSearch(query)}
                        />
                        <View style={styles.boxQRIcon}>
                            <Pressable android_ripple={{ color: COLORS.shadowVeryLight, radius: 15, borderless: true }}>
                                {ICONS.barcodeIcon}
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Container>

            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <SearchCard key={item.id} data={data} index={index} navigation={navigation}></SearchCard>
                )}
            />
        </SafeAreaView>
    );

}