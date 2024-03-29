import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { animationHoverHandle } from "../animations/animationHoverHandle.js";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import { stylesAnim } from "../styles/animationHoverStyle.js";
export default function TabBarIcon(icon)
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <TouchableWithoutFeedback onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 280, hoverDropAnimation)} onPressOut={() =>
        {
            animationHoverDropHandle(hoverDropAnimation)
            setTimeout(() =>
            {
                hoverAnimation.setValue(0)
                setShowAnim(false)
                hoverDropAnimation.setValue(1)
            }, 200)
        }}>
            <View style={styles.iconBox}>
                {showAnim && (<Animated.View style={
                    [stylesAnim.hoverNavIcon,
                    { top: AnimPosition.y, left: AnimPosition.x },
                    { opacity: hoverDropAnimation },
                    { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        position:"absolute",
        width:50,
        height:50
    }
})