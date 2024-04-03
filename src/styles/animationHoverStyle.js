import { StyleSheet } from "react-native"
export const stylesAnim = StyleSheet.create({

    animationLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
    },

    hoverSeeAll: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "35%",
        height: "150%",
        borderRadius: 30,
        zIndex: 100
    },

    hoverItems: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        width: "53%",
        height: "47%",
        borderRadius: 30,
        zIndex: 100
    },

    hoverHotShot: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "65%",
        height: "40%",
        borderRadius: 100,
        zIndex: 100
    },

    hoverUnBox: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "45%",
        height: "45%",
        borderRadius: 50,
        zIndex: 100
    },

    hoverNavIcon: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "45%",
        height: "45%",
        borderRadius: 50,
        zIndex: 100
    },

    hoverCategoriesFinder: {
        position: "absolute",
        width: "70%",
        height: "100%",
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        zIndex: 100
    }
})