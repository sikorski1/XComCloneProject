import { StyleSheet } from "react-native";
import { SIZES } from '../constants/sizes.js';
import { COLORS } from '../constants/colors.js';
import { FONTS } from "../constants/fonts.js";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const styles = StyleSheet.create({
    white: {
        color: COLORS.containerColor,
    },

    box: {
        paddingVertical: SIZES.margBig,
        paddingHorizontal: SIZES.width * 0.05,
        overflow: "hidden"
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
        fontSize: SIZES.fontSmall
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
        fontSize: SIZES.fontBig - 6,
    },

    boxMainPrice: {
        marginVertical: 10,
        fontSize: SIZES.fontBig - 2,
        color: COLORS.specialRed,
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
    },

    boxAmountBarSold: {
        marginLeft: "auto",
        color: COLORS.bgColor,
    },

    boxAmountBarShadow: {
        position: "absolute",
        top:0,
        left:0,
        bottom:0,
        borderRadius:15,
        backgroundColor: COLORS.purpleUnBox
    }
})