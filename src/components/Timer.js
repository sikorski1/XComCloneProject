import { View, Text } from "react-native"
import { useState, useEffect } from "react"
import { styles } from "../styles/hotShotStyyle.js"
import { SIZES } from "../constants/sizes.js"
export default function Timer()
{
    const [remainingTime, setRemainingTime] = useState([0, 0, 0]);
    const timerData = ["godzin", "minut", "sekund"]
    const calculateRemainingTime = () =>
    {
        const now = new Date();
        const target = new Date(now);
        target.setDate(now.getDate() + 1);
        target.setHours(0, 0, 0, 0);
        const difference = target.getTime() - now.getTime();
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return [hours, minutes, seconds]
    }
    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setRemainingTime(calculateRemainingTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.boxTimer}>
            <Text style={styles.boxTimerText}>Śpiesz się, oferta kończy się za:</Text>
            <View style={styles.timer}>
                {timerData.map((data, index) => (
                    <View style={[styles.timerRect, { marginLeft: index !== 0 ? 18 : 0 }]} key={index}>
                        <Text style={[styles.white, { fontSize: SIZES.fontBig + 5 }]}>{remainingTime[index]}</Text>
                        <Text style={[styles.white, { fontSize: SIZES.fontSmall }]}>{data}</Text>
                    </View>
                ))}
                <View style={[styles.whiteLine, { left: "37%" }]}></View>
                <View style={[styles.whiteLine, { left: "74%" }]}></View>
            </View>
        </View>
    )
}