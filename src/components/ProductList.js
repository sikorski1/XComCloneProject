import { View, Text, FlatList, Image } from "react-native"
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
                <Text onPress={() => navigation.goBack()} style={styles.arrowIcon}>{ICONS.leftArrowIcon}</Text>
                <Text numberOfLines={1} style={styles.headerTitle}>{sectionTitle}</Text>
                <Text style={styles.magnifierIcon}>{ICONS.magnifierIconBig}</Text>
                <Text style={styles.balanceIcon}>{ICONS.balanceIcon}</Text>
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