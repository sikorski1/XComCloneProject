import { StyleSheet } from "react-native"
import { SIZES } from "../constants/sizes"
import { COLORS } from "../constants/colors"
export const styles = StyleSheet.create({

    box: {
        flexDirection: "row",
        paddingVertical: SIZES.margBig,
        paddingHorizontal: SIZES.width * 0.05,
        overflow: "hidden"
    },

    boxImgContainer: {
        width: SIZES.width * .35,
        height: SIZES.height * .2,
        resizeMode: "contain"
    },

    boxImg: {
        width: "100%",
        height: "100%"
    },

    boxMain: {
        justifyContent: "center",
        marginHorizontal: 10
    },

    boxMainAddon: {
        marginRight: "auto",
        paddingHorizontal:5,
        borderWidth: 1,
        borderColor: COLORS.purpleUnBox,
        borderRadius: 5
    },

    boxMainAddonText: {
        color: COLORS.purpleUnBox
    },

    boxMainTextBig: {
        marginVertical: SIZES.margBig/2,
        fontSize: SIZES.fontBig+10,
        fontWeight: "bold"
    },
     
    boxMainTextSmall: {
        width: SIZES.width*0.3
    },

    boxArrowContainer: {
        position: "absolute",
        right: "5%",
        width: 50,
        height: 50,
        alignSelf: "center",
        backgroundColor: COLORS.purpleUnBox,
        borderRadius: 25,
    },

    boxArrowIcon: {
        color: COLORS.bgColor,
        top: "-8%",
        right: "5%"
    }

})