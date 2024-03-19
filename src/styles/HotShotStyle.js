import { StyleSheet } from "react-native";
import { SIZES } from '../constants/sizes.js';
import { COLORS } from '../constants/colors.js';
import { FONTS } from "../constants/fonts.js";
export const styles = StyleSheet.create({
    white: {
        color: COLORS.containerColor,
        fontFamily: FONTS.LatoRegular
    },

    box: {
        paddingVertical: SIZES.margBig,
        paddingHorizontal: SIZES.width * 0.05,
    },

    boxHeader: {
        flexDirection: "row"
    },
    boxTitle: {
        marginBottom: SIZES.margBig,
        fontSize: SIZES.fontBig,
        fontWeight: "bold",

    },

    boxSave: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignSelf: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.shadowLight,
        borderRadius: 5,
    },

    boxTimer: {
        position: "absolute",
        top: SIZES.margBig,
        right: SIZES.width * 0.05,
        alignItems: "flex-end"
    },

    boxTimerText: {
        marginBottom: 2,
        fontSize: SIZES.fontSmall,
        fontFamily: FONTS.LatoRegular
    },

    timer: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: COLORS.shadowLight,
        borderRadius: 6
    },

    timerRect: {
        alignItems: "center"
    },

    whiteLine: {
        position: "absolute",
        width: 1,
        alignSelf: "center",
        height: "75%",
        backgroundColor: COLORS.containerColor
    },

    boxMain: {
        alignItems: "center",
    },

    boxMainImg: {
        width: SIZES.width * 0.7,
        height: SIZES.height * 0.45
    },

    boxImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

    boxMainText: {
        fontSize: SIZES.fontBig - 4,
        fontFamily: FONTS.LatoRegular
    },

    boxMainPrice: {
        marginVertical: 10,
        fontSize: SIZES.fontBig - 2,
        color: COLORS.specialRed,
        fontFamily: FONTS.LatoRegular
    },

    boxMainPriceDeleted: {
        fontSize: SIZES.fontSmall + 4,
        color: COLORS.textColor,
        textDecorationLine: "line-through",
    },

    boxAmountBar: {
        paddingVertical: 7,
        paddingHorizontal:14,
        width: SIZES.width * 0.9,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: 15
    },

    boxAmountBarLeft: {
        color: COLORS.bgColor,
        fontFamily: FONTS.LatoRegular
    },

    boxAmountBarSold: {
        marginLeft: "auto",
        color: COLORS.bgColor,
        fontFamily: FONTS.LatoRegular
    },

    boxAmountBarShadow: {
        position: "absolute",
        top:0,
        left:0,
        bottom:0,
        right:"70%",
        borderRadius:15,
        backgroundColor: "plum"
    }
})