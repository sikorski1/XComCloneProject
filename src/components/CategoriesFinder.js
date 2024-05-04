import { View, Text, FlatList, Pressable } from "react-native";
import { ICONS } from "../constants/icons";
import { COLORS } from "../constants/colors.js";
import { styles } from "../styles/categoriesFinderStyles"
import Finder from "./Finder";
import CategoryCard from "./CategoryCard.js";

export default function CategoriesFinder({ route, navigation })
{
    const data = route.params
    const dataProductsList = route.params.productsList
    return (
        <View style={styles.box}>
            <View style={styles.headerBox}>
                <View style={styles.arrowIcon}>
                    <Pressable onPress={() => navigation.goBack()} android_ripple={{ color: COLORS.shadowVeryLight, radius: 25, borderless: true }}
                        style={{ padding: 12 }}>
                        {ICONS.leftArrowIcon}
                    </Pressable>
                </View>
                <Text style={styles.headerText}>{data.name ? data.name : "Wszystkie kategorie"}</Text>
                <View style={styles.balanceIcon}>
                    <Pressable android_ripple={{ color: COLORS.shadowVeryLight, radius: 20, borderless: true }}>
                        {ICONS.balanceIcon}
                    </Pressable>
                </View>
            </View>
            <Finder />
            <View style={styles.underline}></View>
            <FlatList
                data={data.productsList ? dataProductsList : data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                {
                    if (dataProductsList)
                    {
                        return (
                            <CategoryCard key={item.id} data={dataProductsList} index={index} navigation={navigation} condition={true}></CategoryCard>
                        )
                    }

                    else
                    {
                        return (
                            <CategoryCard key={item.id} data={data} index={index} navigation={navigation} condition={false}></CategoryCard>
                        )
                    }
                }}
            />
        </View >
    )
}