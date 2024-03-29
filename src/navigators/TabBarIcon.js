import { useState, useRef } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated } from "react-native";
import { animationHoverHandle } from "../animations/animationHoverHandle.js";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import { stylesAnim } from "../styles/animationHoverStyle.js";
import { ICONS } from "../constants/icons.js";
export default function TabBarIcon(prop)
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <View>
            <Animated.View></Animated.View>
            <View>{prop.focused ? prop.iconSharp : prop.iconOutline}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        position: "absolute",
        width: 70,
        height: 70,
        overflow: "hidden",
        borderRadius: 35
    }
})