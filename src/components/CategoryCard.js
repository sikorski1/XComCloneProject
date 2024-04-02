import { View, Text, TouchableWithoutFeedback, Animated, Image } from "react-native"
import { useState, useRef } from "react"
import { ICONS } from "../constants/icons.js";
import { styles } from "../styles/categoriesFinderStyles"
import { stylesAnim } from "../styles/animationHoverStyle.js";
import { animationHoverHandle } from "../animations/animationHoverHandle.js";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
export default function CategoryCard({ data, index })
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const itemData = data[index]
    return (
        <>
            <View style={styles.cardBox}>
                <TouchableWithoutFeedback
                    onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 200, 4)}
                    onPressOut={() =>
                    {
                        animationHoverDropHandle(hoverDropAnimation)
                        setTimeout(() =>
                        {
                            hoverAnimation.setValue(0)
                            setShowAnim(false)
                            hoverDropAnimation.setValue(1)
                        }, 200)
                    }}>
                    <View style={styles.animationLayer}>
                        {showAnim && (<Animated.View
                            style={[
                                stylesAnim.hoverCategoriesFinder,
                                { top: AnimPosition.y - 30, left: AnimPosition.x - 100, opacity: hoverDropAnimation, 
                                    transform: [{ scale: hoverAnimation}] }
                            ]}
                        />)}
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.cardImgBox}>
                    <Image style={styles.cardImg} source={itemData.img} />
                </View>
                <Text style={styles.cardText}>{itemData.name}</Text>
                <Text style={styles.cardIcon}>{ICONS.rightArrowIcon2}</Text>
            </View>
            <View style={styles.cardUnderline}></View>
        </>
    )
}