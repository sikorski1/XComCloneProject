import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors.js";
import { SIZES } from "../constants/sizes.js";

export const styles = StyleSheet.create({
    //boxOne
    boxOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: SIZES.margBig,
        marginVertical: 25,
    },

    boxOneText: {
        fontSize: 20
    },

    //boxTwo
    boxTwo: {
        justifyContent: "center",
        alignItems: "center"
    },

    boxTwoContainer: {
        paddingVertical: 3,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 15
    },

    boxTwoLoupIcon: {
        marginLeft: 15,
    },

    boxTwoInput: {
        marginHorizontal: 5,
        flex: 1
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
        overflow: "hidden"

    },

    boxThreeImg: {
        width: SIZES.width * 0.9,
        height: 180,
    }

})