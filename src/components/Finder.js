import { View, Text, TextInput, TouchableWithoutFeedback, Pressable } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/finderStyle.js"
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors.js";

export default function Finder()
{
    const [text, setText] = useState('');
    const navigation = useNavigation();

    const handlePressIn = () =>
    {
        navigation.navigate("Search");
    };

    return (
        <>
            <View style={styles.box}>
                <View style={styles.boxContainer}>
                    <Text style={styles.boxLoupIcon}>{ICONS.magnifierIcon}</Text>
                    <TouchableWithoutFeedback onPress={handlePressIn}>
                        <TextInput style={styles.boxInput}
                            placeholder="Czego szukasz?"
                            onChangeText={setText}
                            value={text}
                            showSoftInputOnFocus={false}
                            onPressIn={() => navigation.navigate("Search")}
                        />
                    </TouchableWithoutFeedback>
                    <View style={styles.boxQRIcon}>
                        <Pressable android_ripple={{ color: COLORS.shadowVeryLight, radius: 15, borderless: true }}>
                            {ICONS.barcodeIcon}
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    );

}