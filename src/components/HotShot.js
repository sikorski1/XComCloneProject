import { View, Text, Image } from "react-native"
import { styles } from "../styles/HotShotStyle.js"
import { SIZES } from "../constants/sizes.js"
import Timer from "./Timer.js";
import hotShotdata from "../data/hotShotData.json";
export default function HotShot()
{
    const today = new Date().getDate();
    const todayData = hotShotdata[today%hotShotdata.length]
    const amountbar = Math.floor(Math.random()*100)
    const amount = 200;
    return (
        <View style={styles.box}>
            <Text style={styles.boxTitle}>Gorący strzał</Text>
            <View style={styles.boxSave}>
                <Text style={[styles.white]}>Oszczędź</Text>
                <Text style={[styles.white, { fontSize: SIZES.fontBig - 2, fontWeight: "bold" }]}>200zł</Text>
            </View>
            <Timer></Timer>
            <View style={styles.boxMain}>
                <View style={styles.boxMainImg}><Image style={styles.boxImg} source={{ uri: todayData.img }} /></View>
                <Text style={styles.boxMainText}>{todayData.name}</Text>
                <Text style={styles.boxMainPrice}>{todayData.price}  <Text style={styles.boxMainPriceDeleted}>{todayData.fromPrice}</Text></Text>
                <View style={styles.boxAmountBar}>
                    <View style={[styles.boxAmountBarShadow, {right: amountbar + "%"}]}></View>
                    <Text style={styles.boxAmountBarLeft}>Pozostało: {amount-(amountbar/100)*amount}</Text>
                    <Text style={styles.boxAmountBarSold}>Sprzedano: {amount*(amountbar/100)}</Text>
                </View>
            </View>
        </View>
    )
}