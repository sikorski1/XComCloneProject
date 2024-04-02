import { View, Text } from "react-native";
import { ICONS } from "../constants/icons";
import {styles} from "../styles/categoriesFinderStyles"
import Finder from "./Finder";
export default function CategoriesFinder({data}) {
    return (
        <View style={styles.box}>
            <View style={styles.headerBox}>
                <Text style={styles.arrowIcon}>{ICONS.leftArrowIcon}</Text>
                <Text style={styles.headerText}>Rampam pam rampampam</Text>
                <Text style={styles.balanceIcon}>{ICONS.balanceIcon}</Text>
            </View>
            <Finder/>
        </View>
    )
}