import { View, Text, Image, FlatList } from "react-native"
import { styles } from "../styles/HotShotStyle.js"
import { SIZES } from "../constants/sizes.js"
const timerData = ["godzin", "minut", "sekund"]
export default function HotShot()
{
    return (
        <View style={styles.box}>
            <Text style={styles.boxTitle}>Gorący strzał</Text>
            <View style={styles.boxSave}>
                <Text style={[styles.white]}>Oszczędź</Text>
                <Text style={[styles.white, { fontSize: SIZES.fontBig - 2, fontWeight: "bold" }]}>200zł</Text>
            </View>
            <View style={styles.boxTimer}>
                <Text style={styles.boxTimerText}>Śpiesz się, oferta kończy się za:</Text>
                <View style={styles.timer}>
                    {timerData.map((data, index) => (
                        <View style={[styles.timerRect, { marginLeft: index !== 0 ? 18 : 0 }]} key={index}>
                            <Text style={[styles.white, { fontSize: SIZES.fontBig + 5 }]}>10</Text>
                            <Text style={[styles.white, { fontSize: SIZES.fontSmall }]}>{data}</Text>
                        </View>
                    ))}
                    <View style={[styles.whiteLine, { left: "37%" }]}></View>
                    <View style={[styles.whiteLine, { left: "74%" }]}></View>
                </View>
            </View>
            <View style={styles.boxMain}>
                <View style={styles.boxMainImg}><Image style={styles.boxImg} source={{ uri: "https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2024_3_18_13_47_7.PNG" }} /></View>
                <Text style={styles.boxMainText}>Ale sprzencior wow mega 😲</Text>
                <Text style={styles.boxMainPrice}>999,00 zł  <Text style={styles.boxMainPriceDeleted}>1 199,00 zł</Text></Text>
                <View style={styles.boxAmountBar}>
                    <View style={styles.boxAmountBarShadow}></View>
                    <Text style={styles.boxAmountBarLeft}>Pozostało: 93</Text>
                    <Text style={styles.boxAmountBarSold}>Sprzedano: 107</Text>
                </View>
            </View>
        </View>
    )
}