import { StyleSheet } from "react-native"

const itemRadius = 25;
const seeAllRadius = 25;
const categoriesCardRadius = 20;
const hotShotRadius = 50;
const unBoxRadius = 30
const productListRadius = 30
export const stylesAnim = StyleSheet.create({

    animationLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },

    hoverSeeAll: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: seeAllRadius * 4,
        height: seeAllRadius,
        borderRadius: seeAllRadius,
        zIndex: 100
    },

    hoverItems: {
        position: "absolute",
        width: itemRadius * 2,
        height: itemRadius * 2,
        borderRadius: itemRadius,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        zIndex: 100,
        pointerEvents: "none"
    },

    hoverHotShot: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: hotShotRadius * 4,
        height: hotShotRadius * 4,
        borderRadius: hotShotRadius * 2,
        zIndex: 100
    },

    hoverUnBox: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: unBoxRadius * 6,
        height: unBoxRadius * 4,
        borderRadius: unBoxRadius * 2,
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
        width: categoriesCardRadius * 8,
        height: categoriesCardRadius,
        borderRadius: categoriesCardRadius,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        zIndex: 100
    },

    hoverProductList: {
        position: "absolute",
        width: productListRadius*6,
        height: productListRadius*2,
        borderRadius: productListRadius*2,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        zIndex: 100
    }
})