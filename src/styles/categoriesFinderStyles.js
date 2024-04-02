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
        marginHorizontal: SIZES.width * 0.05,
        marginBottom: SIZES.margBig,
        flexDirection: "row",
        alignItems: "center",
    },

    arrowIcon: {
        marginRight:"auto"
    },

    headerText: {
        fontSize: SIZES.fontBig,
        fontWeight: "bold"
    },

    balanceIcon: {
        marginLeft: "auto"
    }
})