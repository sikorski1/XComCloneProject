import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { useState, useRef } from "react";
import { styles } from "../styles/unBoxStyle";
import { stylesAnim } from "../styles/animationHoverStyle";
import { ICONS } from "../constants/icons";
import { animationHoverHandle } from "../animations/animationHoverHandle";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"

export default function UnBox()
{
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
        <TouchableWithoutFeedback onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 230, 7.5)} onPressOut={() =>
        {
            animationHoverDropHandle(hoverDropAnimation);
            setTimeout(() =>
            {
                hoverAnimation.setValue(0)
                setShowAnim(false)
                hoverDropAnimation.setValue(1)
            }, 200)
        }}>
            <View style={styles.box}>
                {showAnim && (<Animated.View style={[stylesAnim.hoverUnBox,
                { top: AnimPosition.y, left: AnimPosition.x }, { opacity: hoverDropAnimation }, { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
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