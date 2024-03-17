import { StyleSheet, StatusBar } from "react-native";
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
        fontSize: 20,
        fontFamily: 'JetBrainsMono-Regular',
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
        width: "90%",
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 15,
        fontFamily: 'JetBrainsMono-Regular',
    },

    boxTwoLoupIcon: {
        marginLeft: 15,
    },

    boxTwoInput: {
        marginHorizontal: 5,
        flex: 1,
        fontFamily: 'JetBrainsMono-Regular',
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
        marginTop: 4,
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
        fontFamily: 'JetBrainsMono-Regular',
    },
    container: {
        marginTop: 4,
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
},
)