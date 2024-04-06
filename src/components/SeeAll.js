import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { stylesAnim } from "../styles/animationHoverStyle"
import { styles } from "../styles/seeAllStyle";
import { useState, useRef } from "react";
import { ICONS } from "../constants/icons";
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { animationHoverHandle, animationHoverDropHandle } from '../animations/animationHoverHandle.js';
export default function SeeAll({ text, navigation, data })
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <>
            <View style={styles.underline}></View>
            <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Categories", data)}
                onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 230, 8.5)} onPressOut={() =>
                {
                    animationHoverDropHandle(hoverDropAnimation);
                    setTimeout(() =>
                    {
                        setShowAnim(false)
                        hoverDropAnimation.setValue(1)
                    }, 200)
                }}
            >
                <View style={styles.textBox}>
                    <AnimComponent
                        animPosition={animPosition}
                        showAnim={showAnim}
                        hoverAnimation={hoverAnimation}
                        hoverDropAnimation={hoverDropAnimation}
                        styles={stylesAnim.hoverSeeAll}
                        shiftX={50}
                        shiftY={12}/>
                    <Text style={styles.text}>{text}</Text>
                    <Text style={styles.icon}>{ICONS.rightArrowIcon}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

