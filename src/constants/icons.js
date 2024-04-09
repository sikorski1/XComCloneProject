import { COLORS } from "./colors"
import FontAwesome from "react-native-vector-icons/FontAwesome.js";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
export const ICONS = {
    bellIcon: <FontAwesome name={"bell-o"} size={18}></FontAwesome>,
    magnifierIcon: <SimpleLineIcons name={"magnifier"}></SimpleLineIcons>,
    magnifierIconBig: <SimpleLineIcons name={"magnifier"} size={16}></SimpleLineIcons>,
    barcodeIcon: <MaterialCommunityIcons name={"barcode-scan"} size={15}></MaterialCommunityIcons>,
    rightArrowIcon: <EvilIcons name={"chevron-right"} size={25}></EvilIcons>,
    rightArrowIconBig: <EvilIcons name={"chevron-right"} size={60}></EvilIcons>,
    rightArrowIcon2: <Entypo name={"chevron-thin-right"} size={14}></Entypo>,
    leftArrowIconBig: <EvilIcons name={"chevron-left"} size={50}></EvilIcons>,
    leftArrowIcon: <Entypo name={"chevron-thin-left"} size={25}></Entypo>,
    balanceIcon: <MaterialCommunityIcons name={"scale-unbalanced"} size={20}></MaterialCommunityIcons>,

    shareIcon: <MaterialCommunityIcons name={"share"} size={30}></MaterialCommunityIcons>,
    checkIcon: <Ionicons name={"checkmark-circle-outline"} size={30}></Ionicons>,
    truckIcon: <MaterialCommunityIcons name={"truck-outline"} size={30}></MaterialCommunityIcons>,
    storeIcon: <Ionicons name={"storefront-outline"} size={30}></Ionicons>,
    heartIcon: <Ionicons name={"heart-outline"} size={25} color={COLORS.black}></Ionicons>,
    basketIcon: <Ionicons name={"cart-outline"} size={25} color={COLORS.containerColor}></Ionicons>,
    balanceProductIcon: <MaterialCommunityIcons name={"scale-unbalanced"} size={25}></MaterialCommunityIcons>,

    homeNavIconOutline: <Ionicons name={"home-outline"} size={30} color={COLORS.textColor}></Ionicons>,
    homeNavIconSharp: <Ionicons name={"home-sharp"} size={30} color={COLORS.blueHover}></Ionicons>,
    searchNavIconOutline: <Ionicons name={"search-outline"} size={30} color={COLORS.black}></Ionicons>,
    searchNavIconSharp: <Ionicons name={"search"} size={30} color={COLORS.blueHover}></Ionicons>,
    shopListNavIconOutline: <Ionicons name={"heart-outline"} size={30} color={COLORS.black}></Ionicons>,
    shopListNavIconSharp: <Ionicons name={"heart"} size={30} color={COLORS.blueHover}></Ionicons>,
    basketNavIconOutline: <Ionicons name={"cart-outline"} size={30} color={COLORS.black}></Ionicons>,
    basketNavIconSharp: <Ionicons name={"cart-sharp"} size={30} color={COLORS.blueHover}></Ionicons>,
    signUpNavIconOutline: <Ionicons name={"person-outline"} size={26} color={COLORS.black}></Ionicons>,
    signUpNavIconSharp: <Ionicons name={"person"} size={26} color={COLORS.blueHover}></Ionicons>,

}