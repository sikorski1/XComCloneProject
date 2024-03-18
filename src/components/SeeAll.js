import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { ICONS } from "../constants/icons"
import { SIZES } from "../constants/sizes";
import { COLORS } from "../constants/colors";
import { useState, useRef } from "react";
export default function SeeAll({ text })
{
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [showCircle, setShowCircle] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const handlePress = (event) =>
    {
        const { locationX, locationY } = event.nativeEvent
        setCirclePosition({ x: Math.floor(locationX), y: Math.floor(locationY) })
        setShowCircle(true)
        Animated.timing(hoverAnimation, {
            toValue: 10,
            duration: 230,
            delay: 100,
            easing:  Easing.bezier(1, 1, 0.3, 0.2),
            useNativeDriver: false
        }).start();
    }
    return (
        <>
            <View style={styles.underline}></View>
            <TouchableWithoutFeedback onPressIn={handlePress} onPressOut={() =>
            {
                setShowCircle(false);
                hoverAnimation.setValue(0);
            }}>
                <View style={styles.textBox}>
                    {showCircle && (<Animated.View style={[styles.hover, { top: circlePosition.y, left: circlePosition.x }, { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
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
        paddingVertical: SIZES.margBig / 2+3,
        paddingHorizontal: SIZES.width * 0.05,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },

    icon: {
        marginLeft: "auto",
        marginBottom: 3
    },

    hover: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "25%",
        height: "150%",
        borderRadius: 30
    }
})
