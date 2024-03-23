import { View, Text, Image } from "react-native";
import { styles } from "../styles/unBoxStyle";
import {ICONS} from "../constants/icons";

export default function UnBox()
{
    return (
        <View style={styles.box}>
            <View style={styles.boxImgContainer}><Image style={styles.boxImg} source={require("../../assets/pictures/box.png")}/></View>
            <View style={styles.boxMain}>
                <View style={styles.boxMainAddon}>
                    <Text style={styles.boxMainAddonText}>Produkty nawet za 1 zł</Text>
                </View>
                <Text style={styles.boxMainTextBig}>un.Box</Text>
                <Text style={styles.boxMainTextSmall}>Codziennie losuj nowe okazje</Text>
            </View>
            <View style={styles.boxArrowContainer}>
                <Text style={styles.boxArrowIcon}>{ICONS.rightArrowIcon}</Text>
            </View>
        </View>
    )
}