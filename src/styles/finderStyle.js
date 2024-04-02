import { StyleSheet } from "react-native";
import { SIZES } from "../constants/sizes";
import { COLORS } from "../constants/colors";
export const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
    },

    boxContainer: {
        paddingVertical: 3,
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width * 0.9,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 16,
    },

    boxLoupIcon: {
        marginLeft: 15,
    },

    boxInput: {
        marginHorizontal: 5,
        flex: 1,
    },

    boxQRIcon: {
        marginLeft: "auto",
        marginRight: 15,
    },
})