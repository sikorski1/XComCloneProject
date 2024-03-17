import { View, StyleSheet, Animated } from "react-native";
import { useRef } from "react";
export default function HoverAnimation({pos_x, pos_y, show, size})
{
    return (
        (show && <Animated.View style={[styles.hover, {top: pos_y, left:pos_x, height:size, width:size}]}></Animated.View>)
    )
}


const styles = StyleSheet.create({
    hover: {
        position: "absolute",
        borderRadius: 12.5,
        backgroundColor: "red",
    }
})

