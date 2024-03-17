import { StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"
import { SIZES } from "../constants/sizes"

export const seeAllStyles = StyleSheet.create({
    underline: {
        marginTop: SIZES.margBig,
        marginHorizontal: "auto",
        alignSelf: "center",
        height: 1,
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.borderColor,
    },

    underlineBottom: {
        marginTop: SIZES.margBig / 2,
        alignSelf: "center",
        height: 1,
        width: SIZES.width,
        backgroundColor: COLORS.borderColor,
    },

    textBox: {
        marginTop: SIZES.margBig / 2,
        marginHorizontal: SIZES.width * 0.05,
        flexDirection: "row",
        alignItems: "center",

    },

    text: {
        fontFamily: 'JetBrainsMono-Regular',
    },

    icon: {
        marginLeft: "auto",
        marginBottom: 3
    }
})