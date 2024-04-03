import { View, Text, FlatList, Image, TouchableWithoutFeedback, Animated } from "react-native";
import { useState, useRef } from "react";
import { ICONS } from "../constants/icons";
import { styles } from "../styles/categoriesFinderStyles"
import { stylesAnim } from "../styles/animationHoverStyle.js";
import { animationHoverHandle } from "../animations/animationHoverHandle.js";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import Finder from "./Finder";
import CategoryCard from "./CategoryCard.js";
export default function CategoriesFinder({ route, navigation })
{
    const data = route.params
    const dataProductsList = route.params.productsList
    return (
        <View style={styles.box}>
            <View style={styles.headerBox}>
                <Text onPress={() => navigation.goBack()} style={styles.arrowIcon}>{ICONS.leftArrowIcon}</Text>
                <Text style={styles.headerText}>{data.name}</Text>
                <Text style={styles.balanceIcon}>{ICONS.balanceIcon}</Text>
            </View>
            <Finder />
            <View style={styles.underline}></View>
            <FlatList
                data={data.productsList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                {
                    return (
                        <CategoryCard key={item.id} data={dataProductsList} index={index}></CategoryCard>
                    )
                }}
            />
        </View>
    )
}