import { StyleSheet, View, Text } from "react-native";
import { ICONS } from "../constants/icons"
import { SIZES } from "../constants/sizes";
import { COLORS } from "../constants/colors";

export default function ({ text }) {
    return (
        <>
            <View style={styles.underline}></View>
            <View style={styles.textBox}>
                <Text>{text}</Text>
                <Text style={styles.icon}>{ICONS.rightArrowIcon}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    underline: {
        marginTop: SIZES.margBig,
        marginHorizontal: "auto",
        alignSelf: "center",
        height: 1,
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.borderColor,
    },

    textBox: {
        marginTop: SIZES.margBig / 2,
        marginHorizontal: SIZES.width * 0.05,
        flexDirection: "row",
        alignItems: "center",
    },

    icon: {
        marginLeft: "auto",
        marginBottom: 3
    }
})