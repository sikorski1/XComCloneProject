import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors.js";
import { SIZES } from "../constants/sizes.js";

export default function Container({ children, style })
{
    return (

        <View style={[styles.container, style]}>
            <View style={styles.underline}></View>
            {children}
            {/* musi byc prop, tresc wsadzona do kontenera bedzie w tym miejscu */}
            <View style={styles.underline}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingVertical: 0,
        backgroundColor: COLORS.containerColor,
    },

    underline: {
        height: 1,
        width: SIZES.width,
        backgroundColor: COLORS.borderColor,
    },
})