import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SIZES } from "../constants/sizes";

export const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: COLORS.containerColor
    },

    headerBox: {
        marginTop: SIZES.statusBarHeight + SIZES.margBig / 2,
        marginHorizontal: SIZES.width * 0.04,
        marginBottom: SIZES.margBig,
        flexDirection: "row",
        alignItems: "center",
    },

    arrowIcon: {
        marginRight: SIZES.width * 0.08,
        padding:3,
    },

    headerText: {
        fontSize: SIZES.fontBig,
        fontWeight: "bold"
    },

    balanceIcon: {
        marginLeft: "auto",
        padding:3,
    },

    underline: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.borderColor
    },

    cardBox: {
        paddingHorizontal: SIZES.width * 0.05,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },

    cardImgBox: {
        marginRight: SIZES.width * 0.05,
        width: 30,
        height: 30
    },

    cardImg: {
        width: "100%",
        height: "100%"
    },

    cardText: {
        fontWeight: "300"
    },

    cardIcon: {
        marginLeft: "auto"
    },

    cardUnderline: {
        width: "90%",
        height: 1,
        alignSelf: "center",
        backgroundColor: COLORS.borderColor
    },

    animationLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
    }

})