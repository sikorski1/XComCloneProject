import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native";
import { useState, useRef } from "react";
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { styles } from "../styles/unBoxStyle";
import { stylesAnim } from "../styles/animationHoverStyle";
import { ICONS } from "../constants/icons";

export default function UnBox()
{
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    return (
            <View style={styles.box}>
                <AnimComponent
                animPosition={animPosition}
                setAnimPosition={setAnimPosition}
                showAnim={showAnim}
                setShowAnim={setShowAnim}
                hoverAnimation={hoverAnimation}
                duration={200}
                toValue={5}
                hoverDropAnimation={hoverDropAnimation}
                styles={stylesAnim.hoverUnBox}
                shiftX = {0}
                shiftY = {0} />
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
    )
}