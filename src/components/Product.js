import { View, Text, Image, Pressable, ScrollView, TouchableWithoutFeedback } from "react-native";
import { ICONS } from "../constants/icons";
import { styles } from "../styles/productStyle"
import { COLORS } from "../constants/colors";
import ProductInfoCard from "./ProductInfoCard";
export default function Product({ route, navigation })
{
    const data = route.params
    const infoData = [
        {
            id: 1,
            icon: ICONS.checkIcon,
            title: "Dostępny",
            more: "Dowiedz się więcej"
        },
        {
            id: 2,
            icon: ICONS.truckIcon,
            title: "Darmowy odbiór w sklepie",
            more: "Koszt dostawy"
        },
        {
            id: 3,
            icon: ICONS.storeIcon,
            title: "Dostępny w salonach",
            more: "Wybierz salon"
        }]

    return (
        <ScrollView style={styles.box}
            showsVerticalScrollIndicator={false}>
            <View style={styles.headerIconBox}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.arrowIcon}>{ICONS.leftArrowIcon}</View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.shareIcon}>
                    <View style={styles.shareIcon}>{ICONS.shareIcon}</View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.contentBox}>
                <View style={styles.imgBox}>
                    <Image style={styles.img} source={{ uri: data.img }} />
                </View>
                <Text style={styles.productName}>{data.name}</Text>
                <Text style={styles.productPrice}>{data.price}</Text>
                <View style={styles.btnSection}>
                    <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed ? COLORS.shadowVeryLight : "transparent",
                        transform: pressed ? [{scale:0.98}]: [{scale:1}]
                    }, styles.btnPressable]}>
                        <View style={styles.btn}>
                            <Text>{ICONS.balanceProductIcon}</Text>
                            <Text style={styles.textBtn}>Do porównania</Text>
                        </View>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed ? COLORS.shadowVeryLight : "transparent",
                        transform: pressed ? [{scale:0.98}]: [{scale:1}]
                    }, styles.btnPressable]}>
                        <View style={styles.btn}>
                            <Text >{ICONS.heartIcon}</Text>
                            <Text style={styles.textBtn}>Do listy</Text>
                        </View>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{
                        backgroundColor: pressed ? COLORS.darkGreen : COLORS.green,
                        transform: pressed ? [{scale:0.98}]: [{scale:1}]
                    }, styles.btnPressable]}>
                        <View style={[styles.btn, styles.basketBtn]}>
                            <Text>{ICONS.basketIcon}</Text>
                            <Text style={[styles.textBtn, styles.textLastBtn]}>Do koszyka</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.infoSection}>
                    {infoData.map((item, index) => (
                        <View key={item.id}>
                            <ProductInfoCard item={item} index={index}></ProductInfoCard>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView >
    )
}