import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { stylesAnim } from "../styles/animationHoverStyle"
import { styles } from "../styles/seeAllStyle";
import { useState, useRef } from "react";
import { animationHoverHandle } from "../animations/animationHoverHandle";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import { ICONS } from "../constants/icons";
export default function SeeAll({ text, navigation })
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <>
            <View style={styles.underline}></View>
            <TouchableWithoutFeedback
                onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 230, 7.5)} onPressOut={() =>
                {
                    animationHoverDropHandle(hoverDropAnimation);
                    setTimeout(() =>
                    {
                        hoverAnimation.setValue(0)
                        setShowAnim(false)
                        hoverDropAnimation.setValue(1)
                    }, 200)
                }}
                // onPress={() => navigation.navigate("Categories")}
                >
                <View style={styles.textBox}>
                    {showAnim && (<Animated.View style={[stylesAnim.hoverSeeAll, { top: AnimPosition.y, left: AnimPosition.x }, { opacity: hoverDropAnimation }, { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
                    <Text style={styles.text}>{text}</Text>
                    <Text style={styles.icon}>{ICONS.rightArrowIcon}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

