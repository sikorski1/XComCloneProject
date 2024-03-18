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
        paddingTop: SIZES.margBig,
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
        alignItems:"flex-end"
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
        width:1,
        alignSelf: "center",
        height: "75%",
        backgroundColor: COLORS.containerColor
    },

    boxMain: {
        alignItems: "center"
    },

    boxMainImg: {
        width:SIZES.width*0.7,
        height:SIZES.height*0.45
    },

    boxImg: {
        width:"100%",
        height:"100%",
        resizeMode: "contain"
    },

    boxMainText: {
        marginVertical: 3,
        fontSize: SIZES.fontBig-4,
        fontFamily: FONTS.LatoRegular
    },

    boxMainPrice: {
        marginVertical:3,
        fontSize: SIZES.fontBig-2,
        color: COLORS.specialRed,
        fontFamily: FONTS.LatoRegular
    },

    boxMainPriceDeleted: {
        fontSize: SIZES.fontSmall+4,
        color: COLORS.textColor,
        textDecorationLine: "line-through",
    }
})