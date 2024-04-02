import { Animated, Easing } from "react-native"
export const animationHoverHandle = (event, setAnimPosition, setShowAnim, hoverAnimation, duration, toValue) =>
{
    const { locationX, locationY } = event.nativeEvent
    setAnimPosition({ x: Math.floor(locationX), y: Math.floor(locationY) })
    setShowAnim(true)
    Animated.timing(hoverAnimation, {
        toValue: toValue,
        duration: duration,
        delay:100,
        easing: Easing.bezier(1, 1, 0.3, 0.2),
        useNativeDriver: false
    }).start();
}