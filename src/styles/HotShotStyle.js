import { StyleSheet } from "react-native";
import { SIZES } from '../constants/sizes.js';
import { COLORS } from '../constants/colors.js';
export const styles = StyleSheet.create({
    white: {
        color: COLORS.containerColor
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
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignSelf: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.shadowLight,
        borderRadius: 5,
    },

    boxTimer: {
        position: "absolute",
        top: SIZES.margBig,
        right: SIZES.width * 0.05

    },

    timer: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "flex-end",
        backgroundColor: COLORS.shadowLight,
        borderRadius: 3
    },

    timerRect: {
        alignItems: "center"
    },

    whiteLine: {
        position: "absolute",
        width:1,
        alignSelf: "center",
        left: "24.5%",
        height: "85%",
        backgroundColor: COLORS.containerColor
    }
})