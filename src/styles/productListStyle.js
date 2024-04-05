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
        padding: 3,
    },

    balanceIcon: {
        marginLeft: "auto",
        padding:3,
    },

    magnifierIcon: {
        marginHorizontal: SIZES.margBig/2,
        padding: 3,
    },

    headerTitle: {
        width:SIZES.width*0.55,
        fontSize: SIZES.fontBig,
        fontWeight: "bold"
    },


})