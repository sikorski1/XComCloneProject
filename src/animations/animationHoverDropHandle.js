import { Animated } from "react-native";
export const animationHoverDropHandle = (hoverDrop) => {
    Animated.timing(hoverDrop, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
    }).start()
}