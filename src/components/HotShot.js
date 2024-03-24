import { View, Text, Image, Animated, TouchableWithoutFeedback } from "react-native"
import { useState, useRef } from "react";
import { animationHoverHandle } from "../animations/animationHoverHandle.js";
import { animationHoverDropHandle } from "../animations/animationHoverDropHandle"
import { styles } from "../styles/hotShotStyyle.js"
import { stylesAnim } from "../styles/animationHoverStyle.js"
import { SIZES } from "../constants/sizes.js"
import Timer from "./Timer.js";
import hotShotdata from "../data/hotShotData.json";
export default function HotShot()
{
    const today = new Date().getDate();
    const todayData = hotShotdata[today % hotShotdata.length];
    const [AnimPosition, setAnimPosition] = useState({ x: 0, y: 0 });
    const [showAnim, setShowAnim] = useState(false);
    const hoverAnimation = useRef(new Animated.Value(1)).current
    const hoverDropAnimation = useRef(new Animated.Value(1)).current;
    const save = todayData.fromPrice.substring(0, todayData.fromPrice.indexOf(" ")).replace(",", ".") - todayData.price.substring(0, todayData.price.indexOf(" ")).replace(",", ".")
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
            <View style={styles.box}>
                {showAnim && (<Animated.View style={[stylesAnim.hoverHotShot, { top: AnimPosition.y, left: AnimPosition.x }, { opacity: hoverDropAnimation }, { transform: [{ scale: hoverAnimation }] }]}></Animated.View>)}
                <Text style={styles.boxTitle}>Gorący strzał</Text>
                <View style={styles.boxSave}>
                    <Text style={[styles.white]}>Oszczędź</Text>
                    <Text style={[styles.white, { fontSize: SIZES.fontBig - 2, fontWeight: "bold" }]}>{save}</Text>
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