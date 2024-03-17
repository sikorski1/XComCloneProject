import { View, Text } from "react-native";
import { ICONS } from "../constants/icons"

import { seeAllStyles } from "../styles/seeAllStyles";

export default function ({ text }) {
    return (
        <>
            <View style={seeAllStyles.underline}></View>
            <View style={seeAllStyles.textBox}>
                <Text style={seeAllStyles.text}>{text}</Text>
                <Text style={seeAllStyles.icon}>{ICONS.rightArrowIcon}</Text>
            </View>
            <View style={seeAllStyles.underlineBottom}></View>
        </>
    )
}