import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { useState, useRef } from "react";
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { styles } from "../styles/unBoxStyle";
import { stylesAnim } from "../styles/animationHoverStyle";
import { ICONS } from "../constants/icons";
import { animationHoverHandle, animationHoverDropHandle } from '../animations/animationHoverHandle.js';
export default function UnBox()
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <TouchableWithoutFeedback
            onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 280, 6)}
            onPressOut={() =>
            {
                animationHoverDropHandle(hoverDropAnimation)
                setTimeout(() =>
                {
                    setShowAnim(false)
                    hoverDropAnimation.setValue(1)
                }, 200)
            }}>
            <View style={styles.box}>
                <AnimComponent
                    animPosition={animPosition}
                    showAnim={showAnim}
                    hoverAnimation={hoverAnimation}
                    hoverDropAnimation={hoverDropAnimation}
                    styles={stylesAnim.hoverUnBox}
                    shiftX={90}
                    shiftY={60} />
                <View style={styles.boxImgContainer}><Image style={styles.boxImg} source={require("../../assets/pictures/magic-box.png")} /></View>
                <View style={styles.boxMain}>
                    <View style={styles.boxMainAddon}>
                        <Text style={styles.boxMainAddonText}>Produkty nawet za 1 zł</Text>
                    </View>
                    <Text style={styles.boxMainTextBig}>un.Box</Text>
                    <Text style={styles.boxMainTextSmall} >Codziennie losuj nowe okazje</Text>
                </View>
                <View style={styles.boxArrowContainer}>
                    <Text style={styles.boxArrowIcon}>{ICONS.rightArrowIconBig}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}