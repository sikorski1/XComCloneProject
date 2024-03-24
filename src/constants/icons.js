import FontAwesome from "react-native-vector-icons/FontAwesome.js";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommutnityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export const ICONS = {
    bellIcon: <FontAwesome name={"bell-o"} size={18}></FontAwesome>,
    magnifierIcon: <SimpleLineIcons name={"magnifier"}></SimpleLineIcons>,
    barcodeIcon: <MaterialCommutnityIcons name={"barcode-scan"} size={15}></MaterialCommutnityIcons>,
    rightArrowIcon: <EvilIcons name={"chevron-right"} size={25}></EvilIcons>,
    rightArrowIconBig: <EvilIcons name={"chevron-right"} size={60}></EvilIcons>
}