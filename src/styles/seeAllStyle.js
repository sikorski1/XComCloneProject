import { StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"
import { SIZES } from "../constants/sizes"
import {FONTS} from "../constants/fonts.js"
export const styles = StyleSheet.create({
    
    underline: {
        marginTop: SIZES.margBig,
        marginHorizontal: "auto",
        alignSelf: "center",
        height: 1,
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.borderColor,
    },

    textBox: {
        paddingVertical: SIZES.margBig / 2 + 5,
        paddingHorizontal: SIZES.width * 0.05,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },


    icon: {
        marginLeft: "auto",
        marginBottom: 3
    }
})