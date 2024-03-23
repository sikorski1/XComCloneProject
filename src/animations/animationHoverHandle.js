import { Animated, Easing } from "react-native"
export const animationHoverHandle = (event, setAnimPosition, setShowAnim, hoverAnimation, duration) =>
{
    const { locationX, locationY } = event.nativeEvent
    console.log(locationX, locationY);
    setAnimPosition({ x: Math.floor(locationX), y: Math.floor(locationY) })
    setShowAnim(true)
    Animated.timing(hoverAnimation, {
        toValue: 10,
        duration: duration,
        delay: 0,
        easing: Easing.bezier(1, 1, 0.3, 0.2),
        useNativeDriver: false
    }).start();
}