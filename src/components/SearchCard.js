import { View, Text, Animated, Image, TouchableWithoutFeedback } from "react-native"
import { useState, useRef } from "react"
import { ICONS } from "../constants/icons.js";
import { styles } from "../styles/categoriesFinderStyles"
import { stylesAnim } from "../styles/animationHoverStyle.js";
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { animationHoverHandle, animationHoverDropHandle } from '../animations/animationHoverHandle.js';

export default function SearchCard({ data, index, navigation }) {
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const itemData = data[index]
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Product", data[index])}
                onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 200, 6)}
                onPressOut={() => {
                    animationHoverDropHandle(hoverDropAnimation)
                    setTimeout(() => {
                        setShowAnim(false)
                        hoverDropAnimation.setValue(1)
                    }, 200)
                }}>
                <View style={styles.cardBox}>
                    <AnimComponent
                        animPosition={animPosition}
                        showAnim={showAnim}
                        hoverAnimation={hoverAnimation}
                        duration={200}
                        toValue={5}
                        hoverDropAnimation={hoverDropAnimation}
                        styles={stylesAnim.hoverCategoriesFinder}
                        shiftX={60}
                        shiftY={10} />
                    <View style={styles.cardImgBox}>
                        <Image style={styles.cardImg} source={{ uri: itemData.img }} />
                    </View >
                    <View style={styles.textBox}>
                        <Text style={styles.cardText}>{itemData.name}</Text>
                    </View>
                    <Text style={styles.cardIcon}>{ICONS.rightArrowIcon2}</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.cardUnderline}></View>
        </>
    )
}