import { StyleSheet } from "react-native"
export const stylesAnim = StyleSheet.create({
    hoverSeeAll: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "25%",
        height: "150%",
        borderRadius: 30,
        zIndex: 100
    },

    hoverItems: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        width: "25%",
        height: "150%",
        borderRadius: 30,
        zIndex: 100
    },

    hoverHotShot: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "25%",
        height: "40%",
        borderRadius:50,
        zIndex: 100
    }
})