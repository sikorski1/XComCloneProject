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
        marginBottom: SIZES.margBig-5,
        flexDirection: "row",
        alignItems: "center",
    },

    arrowIcon: {
        marginLeft:-SIZES.width*0.015,
        marginRight: SIZES.width * 0.08,
    },

    balanceIcon: {
        marginLeft: "auto",
    },

    magnifierIcon: {
        marginHorizontal: -5,
    },

    headerTitle: {
        width: SIZES.width * 0.55,
        fontSize: SIZES.fontBig,
        fontWeight: "bold"
    },

    sectionText: {
        marginVertical: SIZES.margBig / 2,
        alignSelf: "center"

    },

    productCard: {
        flexDirection: "row",
        paddingHorizontal: SIZES.width * 0.04,
        paddingVertical: SIZES.width * 0.03,
        overflow: "hidden"
    },

    imgBox: {
        width: 100,
        height: 120,
        marginRight: SIZES.margBig
    },

    productImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

    infoBox: {
        marginBottom: SIZES.margBig + 7
    },

    cardTitle: {
        marginBottom: SIZES.margBig / 2,
        width: SIZES.width*0.45,
        fontSize: SIZES.fontBig - 5,

    },

    productInfo: {
        width: SIZES.width*0.45,
        fontWeight: "300",
        fontSize: SIZES.fontBig/2 + 2
    },

    productPrice: {
        alignSelf: "flex-end",
        marginLeft: "auto"
    },

    underline: {
        alignSelf: "center",
        width: SIZES.width*0.9,
        height: 1,
        backgroundColor: COLORS.borderColor
    }
})