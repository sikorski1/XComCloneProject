import { StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"
import { SIZES } from "../constants/sizes"

export const seeAllStyles = StyleSheet.create({
    
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