import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { useState, useRef } from 'react';
import { DATA } from '../data/DATA';
import { dataCategoryFinder } from "../data/categoriesFinderData"
import { styles } from '../styles/firstSStyle'
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { stylesAnim } from "../styles/animationHoverStyle"
import { animationHoverHandle, animationHoverDropHandle } from '../animations/animationHoverHandle.js';
export const getItem = (data, index) => ({
    id: data[index].id,
    title: data[index].title,
    imageUri: data[index].image,
});

export const getItemCount = () => DATA.length;

export const Item = ({ title, imageUri, index, navigation }) =>
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const dataCategory = dataCategoryFinder[index];
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Categories", dataCategory)}
            onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 200, 6)}
            onPressOut={() =>
            {
                animationHoverDropHandle(hoverDropAnimation)
                setTimeout(() =>
                {
                    setShowAnim(false)
                    hoverDropAnimation.setValue(1)
                }, 200)
            }}>
            <View style={[styles.item, { marginRight: index == DATA.length - 1 ? 12 : 0, marginLeft: index == 0 ? 12 : 6 }]}>
                <AnimComponent
                    animPosition={animPosition}
                    showAnim={showAnim}
                    hoverAnimation={hoverAnimation}
                    hoverDropAnimation={hoverDropAnimation}
                    styles={stylesAnim.hoverItems}
                    shiftX={25}
                    shiftY={25}
                />
                <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.title, { color: index == DATA.length - 1 ? "#be0064" : "black" }]}>{title}</Text>
                <Image source={imageUri} style={styles.image} />
            </View>
        </TouchableWithoutFeedback>
    )

}
