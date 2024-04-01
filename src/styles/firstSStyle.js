import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../constants/colors.js";
import { SIZES } from "../constants/sizes.js";
import { FONTS } from "../constants/fonts.js";
export const styles = StyleSheet.create({
    //boxOne
    boxOne: {
        marginVertical: 25,
        marginTop: 25 + StatusBar.currentHeight,
        marginHorizontal: SIZES.margBig,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    boxOneText: {
        fontSize: SIZES.fontBig,
    },

    //boxTwo
    boxTwo: {
        justifyContent: "center",
        alignItems: "center",
    },

    boxTwoContainer: {
        paddingVertical: 3,
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width * 0.9,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 16,
    },

    boxTwoLoupIcon: {
        marginLeft: 15,
    },

    boxTwoInput: {
        marginHorizontal: 5,
        flex: 1,
    },

    boxTwoQRIcon: {
        marginLeft: "auto",
        marginRight: 15,
    },

    //boxThree

    boxThree: {
        marginTop: 25,
    },

    boxThreeImgContainer: {
        marginLeft: SIZES.spacing,
        width: SIZES.width * 0.85,
        height: 180,
        borderRadius: 3,
        shadowColor: COLORS.black,
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3,
        overflow: "hidden",

    },

    boxThreeImg: {
        width: SIZES.width * 0.9,
        height: 180,
    },

    boxFour: {
        marginTop: 12,
        marginLeft: 12,
    },

    item: {
        width: 100,
        backgroundColor: COLORS.containerColor,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 4,
        padding: 6,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        shadowRadius: 4,
        shadowOpacity: 50,
        shadowColor: COLORS.black,
        shadowOffset: 4,
        elevation: 4, // Shadow depth
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 6,
        marginTop: 6,
        justifyContent: 'center',
    },
    title: {
        marginTop: 6,
        fontSize: 12,
        textAlign: 'center',
        overflow: 'hidden',
    },
    container: {
        flex: 1,
    },
})