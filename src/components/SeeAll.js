import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { ICONS } from "../constants/icons"
import { SIZES } from "../constants/sizes";
import { COLORS } from "../constants/colors";
import HoverAnimation from "./HoverAnimation";
import { useState, useRef } from "react";
export default function SeeAll({ text })
{
    const [hovPosition, setHovPosition] = useState({x:0, y:0});
    const [showCircle, setShowCircle] = useState(false);
    const circleSize = useRef(new Animated.Value(25)).current;
    const handlePress = (event) =>
    {
        const { locationX, locationY } = event.nativeEvent;
        setHovPosition({x:locationX, y:locationY});
        setShowCircle(true);
        Animated.timing(circleSize, {
            toValue: 1000, // rozmiar ekranu
            duration: 1000, // czas trwania animacji
            useNativeDriver: false,
          }).start();
    }
    return (
        <>
            <View style={styles.underline}></View>
            <TouchableWithoutFeedback onLongPress={handlePress} onPressOut={()=>setShowCircle(false)}>
                <View style={styles.textBox}>
                    <HoverAnimation pos_x={hovPosition.x} pos_y={hovPosition.y} show={showCircle} size={circleSize} />
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
        paddingVertical: SIZES.margBig / 2,
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