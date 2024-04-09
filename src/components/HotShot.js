import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native"
import { useState, useRef } from "react";
import { styles } from "../styles/hotShotStyyle.js"
import { stylesAnim } from "../styles/animationHoverStyle.js"
import { SIZES } from "../constants/sizes.js"
import Timer from "./Timer.js";
import hotShotdata from "../data/hotShotData.json";
import { AnimComponent } from "../animations/animationHoverHandle.js"
import { animationHoverHandle, animationHoverDropHandle } from '../animations/animationHoverHandle.js';
export default function HotShot({navigation})
{
    const today = new Date().getDate();
    const todayData = hotShotdata[today % hotShotdata.length];
    const [animPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const save = todayData.fromPrice.substring(0, todayData.fromPrice.indexOf(" ")).replace(",", ".") - todayData.price.substring(0, todayData.price.indexOf(" ")).replace(",", ".")
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Product", todayData)}
            onPressIn={(event) => animationHoverHandle(event, setAnimPosition, setShowAnim, hoverAnimation, 280, 7.5)}
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
                    styles={stylesAnim.hoverHotShot}
                    shiftX={100}
                    shiftY={100} />
                <Text style={styles.boxTitle}>Gorący strzał</Text>
                <View style={styles.boxSave}>
                    <Text style={[styles.white]}>Oszczędź</Text>
                    <Text style={[styles.white, { fontSize: SIZES.fontBig - 2, fontWeight: "bold" }]}>{save} zł</Text>
                </View>
                <Timer></Timer>
                <View style={styles.boxMain}>
                    <View style={styles.boxMainImg}><Image style={styles.boxImg} source={{ uri: todayData.img }} /></View>
                    <Text style={styles.boxMainText}>{todayData.name}</Text>
                    <Text style={styles.boxMainPrice}>{todayData.price}  <Text style={styles.boxMainPriceDeleted}>{todayData.fromPrice}</Text></Text>
                    <View style={styles.boxAmountBar}>
                        <View style={[styles.boxAmountBarShadow, { right: todayData.sold / todayData.amount * 100 + "%" }]}></View>
                        <Text style={styles.boxAmountBarLeft}>Pozostało: {todayData.amount - todayData.sold}</Text>
                        <Text style={styles.boxAmountBarSold}>Sprzedano: {todayData.sold}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}