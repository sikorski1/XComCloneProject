import { View, Text } from "react-native";
import { ICONS } from "../constants/icons";
import Finder from "./Finder";
export default function CategoriesFinder({data}) {
    return (
        <View>
            <View>
                <Text>{ICONS.leftArrowIconBig}</Text>
                <Text>Rampampam</Text>
                <Text>{ICONS.balanceIcon}</Text>
            </View>
            <Finder/>
        </View>
    )
}