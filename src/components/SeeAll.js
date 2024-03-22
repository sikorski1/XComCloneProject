import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { stylesAnim } from "../styles/animationHoverStyle"
import { ICONS } from "../constants/icons"
import { SIZES } from "../constants/sizes";
import { COLORS } from "../constants/colors";
import { useState, useRef } from "react";
import { animationHoverHandle } from "../animations/animationHoverHandle";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
export default function SeeAll({ text })
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <>
            <View style={styles.underline}></View>
            <TouchableWithoutFeedback onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 230, hoverDropAnimation)} onPressOut={() =>
            {
                animationHoverDropHandle(hoverDropAnimation);
                setTimeout(() => {
                    hoverAnimation.setValue(0)
                }, 200);
            }}>
                <View style={styles.textBox}>
                    {showAnim && (<Animated.View style={[stylesAnim.hoverSeeAll, { top: AnimPosition.y, left: AnimPosition.x }, { opacity: hoverDropAnimation },  { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
                    <Text>{text}</Text>
                    <Text style={styles.icon}>{ICONS.rightArrowIcon}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({
    underline: {
        marginTop: SIZES.margBig,
        marginHorizontal: "auto",
        alignSelf: "center",
        height: 1,
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.borderColor,
    },

    textBox: {
        paddingVertical: SIZES.margBig / 2 + 3,
        paddingHorizontal: SIZES.width * 0.05,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },

    icon: {
        marginLeft: "auto",
        marginBottom: 3
    }
})
