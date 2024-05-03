import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { useState, useRef } from "react";
import { styles } from "../styles/productStyle"
import { stylesAnim } from "../styles/animationHoverStyle";
import { animationHoverHandle, animationHoverDropHandle, AnimComponent } from "../animations/animationHoverHandle";
import { COLORS } from "../constants/colors";
import { ICONS } from "../constants/icons";


export default function ProductInfoCard({item, index})
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;

    return (
        <>
            <TouchableWithoutFeedback
                onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 200, 5)}
                onPressOut={() =>
                {
                    animationHoverDropHandle(hoverDropAnimation)
                    setTimeout(() =>
                    {
                        setShowAnim(false)
                        hoverDropAnimation.setValue(1)
                    }, 200)
                }}>
                <View style={{overflow: "hidden", borderTopLeftRadius:index === 0 ? 8:0, borderTopRightRadius: index === 0 ? 8:0, borderBottomLeftRadius:index === 2 ? 8:0, borderBottomRightRadius:index === 2 ? 8:0}}>
                    <AnimComponent
                        animPosition={animPosition}
                        showAnim={showAnim}
                        hoverAnimation={hoverAnimation}
                        duration={200}
                        toValue={5}
                        hoverDropAnimation={hoverDropAnimation}
                        styles={stylesAnim.hoverCategoriesFinder}
                        shiftX={80}
                        shiftY={10} />
                    <View style={styles.infoElem}>
                        <Text style={styles.infoIcon}>{item.icon}</Text>
                        <View style={styles.infoBox}>
                            <Text style={[styles.infoTitle, { color: index === 0 ? COLORS.green : COLORS.black }]}>{item.title}</Text>
                            <Text style={styles.infoMore}>{item.more}</Text>
                        </View>
                        <Text style={styles.infoArrow}>{ICONS.rightArrowIcon2}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {index === 2 ? null : <View style={styles.underline}></View>}
        </>
    )
}