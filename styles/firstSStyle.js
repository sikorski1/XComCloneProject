import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors.js";
import { FONTS } from "../constants/fonts.js"


export const styles = StyleSheet.create({
    //boxOne
    boxOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
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
    }

})