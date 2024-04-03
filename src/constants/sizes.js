import { Dimensions } from "react-native"
import { StatusBar } from "react-native"
export const SIZES = {
    margBig: 20,
    fontBig: 20,
    fontSmall: 10,
    spacing: 10,
    statusBarHeight: StatusBar.currentHeight,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}