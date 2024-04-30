import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SIZES } from "../constants/sizes"

export const styles = StyleSheet.create({

    headerIconBox: {
        marginTop: SIZES.statusBarHeight + SIZES.margBig / 2,
        marginHorizontal: SIZES.width * 0.03,
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 100
    },

    arrowIcon: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 25
    },

    shareIcon: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        width: 50,
        height: 50,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 50
    },

    box: {
        flex: 1,
        backgroundColor: COLORS.containerColor
    },

    contentBox: {
        flex: 1,
        marginTop: SIZES.statusBarHeight + SIZES.margBig / 2,
        marginHorizontal: SIZES.width * 0.04,
        marginBottom: SIZES.margBig,
    },

    imgBox: {
        justifyContent: "center",
        width: SIZES.width,
        height: SIZES.height * 0.5,
    },

    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

    productName: {
        marginBottom: SIZES.margBig / 2,
        fontSize: SIZES.fontBig,
        fontWeight: "bold"
    },

    productPrice: {
        marginBottom: SIZES.margBig / 2,
        fontSize: SIZES.fontBig - 5,
        fontWeight: "bold"
    },

    btnSection: {
        marginBottom: SIZES.margBig/2,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginBottom: SIZES.margBig / 2,
        width: SIZES.width * 0.4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 18
    },

    basketBtn: {
        width: SIZES.width * 0.8 + 10,
        paddingHorizontal: 14,
        paddingVertical: 7,
        color: COLORS.containerColor,
        backgroundColor: COLORS.green
    },

    textBtn: {
        marginLeft: 5,
    },

    textLastBtn: {
        fontSize: SIZES.fontBig - 3,
        color: COLORS.containerColor
    },

    infoSection: {
        marginBottom: SIZES.margBig/2
    },

    infoElem: {
        flexDirection: "row",
        borderLeftWidth: 2
    }
})