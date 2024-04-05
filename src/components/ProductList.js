import { View, Text, FlatList, Image } from "react-native"
import { ICONS } from "../constants/icons"
import { styles } from "../styles/productListStyle";
export default function ProductList({ route, navigation })
{
    const productsData = route.params.products;
    const sectionTitle = route.params.name
    return (
        <View style={styles.box}>
            <View style={styles.headerBox}>
                <Text onPress={() => navigation.goBack()}style={styles.arrowIcon}>{ICONS.leftArrowIcon}</Text>
                <Text numberOfLines={1} style={styles.headerTitle}>{sectionTitle}</Text>
                <Text style={styles.magnifierIcon}>{ICONS.magnifierIconBig}</Text>
                <Text style={styles.balanceIcon}>{ICONS.balanceIcon}</Text>
            </View>
            <Text style={styles.sectionText}>Wyszukaliśmy {productsData.length} {productsData.length > 1 ? "produkty" : "produkt"}</Text>
            <FlatList
                data={productsData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.productCard}>
                        <View style={styles.imgBox}>
                            <Image style={styles.productImg}></Image>
                        </View>
                        <View style={styles.infoBox}>
                            {item.info.map((data, index) => (
                                <Text style={styles.productInfo} key={index}>{data}</Text>
                            ))}
                        </View>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                )}
            />
        </View>
    )
}