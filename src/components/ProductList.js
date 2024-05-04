import { View, Text, FlatList, Pressable } from "react-native"
import { COLORS } from "../constants/colors";
import { ICONS } from "../constants/icons"
import { styles } from "../styles/productListStyle";
import ProductListCard from "./ProductListCard";
export default function ProductList({ route, navigation })
{
    const productsData = route.params.products;
    const sectionTitle = route.params.name
    const productsText = productsData.length === 1 ? "produkt" : (productsData.length >= 5 ? "produktów" : "produkty")
    return (
        <View style={styles.box}>
            <View style={styles.headerBox}>
                <View onPress={() => navigation.goBack()} style={styles.arrowIcon}>
                    <Pressable onPress={() => navigation.goBack()} android_ripple={{ color: COLORS.shadowVeryLight, radius: 25, borderless: true }}
                        style={{ padding: 12 }}>
                        {ICONS.leftArrowIcon}
                    </Pressable>
                </View>
                <Text numberOfLines={1} style={styles.headerTitle}>{sectionTitle}</Text>
                <View style={styles.magnifierIcon}>
                    <Pressable android_ripple={{ color: COLORS.shadowVeryLight, radius: 18, borderless: true }}
                    style={{ padding: 9 }}>
                        {ICONS.magnifierIconBig}
                    </Pressable>
                </View>
                <View style={styles.balanceIcon}>
                    <Pressable android_ripple={{ color: COLORS.shadowVeryLight, radius: 18, borderless: true }}
                    style={{ padding: 9 }}>
                        {ICONS.balanceIcon}
                    </Pressable>
                </View>
            </View>
            <Text style={styles.sectionText}>Wyszukaliśmy {productsData.length} {productsText}</Text>
            <View style={styles.underline}></View>
            <FlatList
                data={productsData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ProductListCard key={item.id} data={productsData[index]} navigation={navigation} ></ProductListCard>
                )}
            />
        </View>
    )
}