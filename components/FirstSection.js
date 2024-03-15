import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../constants/colors.js";
import Container from "./Container.js"
export default function FirstSection()
{
    return (
        <Container>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </Container>

    )
}



const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    }
})