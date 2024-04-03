import { View, Animated, Easing, TouchableWithoutFeedback } from "react-native"
import { stylesAnim } from "../styles/animationHoverStyle.js"
export const animationHoverHandle =
    (event, setAnimPosition, setShowAnim, hoverAnimation, duration, toValue) =>
    {
        hoverAnimation.setValue(0)
        const { locationX, locationY } = event.nativeEvent
        setAnimPosition({ x: Math.floor(locationX), y: Math.floor(locationY) })
        Animated.timing(hoverAnimation, {
            toValue: toValue,
            duration: duration,
            delay: 100,
            easing: Easing.bezier(1, 1, 0.3, 0.2),
            useNativeDriver: false
        }).start();
        setShowAnim(true)
    }

export const animationHoverDropHandle = (hoverDrop) =>
{
    Animated.timing(hoverDrop, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
    }).start()
}

export const AnimComponent =
    ({ animPosition, showAnim, hoverAnimation, hoverDropAnimation, styles, shiftX, shiftY }) => (
        <View style={[stylesAnim.animationLayer]}>
            {showAnim && (<Animated.View
                style={[
                    styles,
                    {
                        top: animPosition.y - shiftY, left: animPosition.x - shiftX, opacity: hoverDropAnimation,
                        transform: [{ scale: hoverAnimation }],
                    }
                ]}
            />)}
        </View>
    )