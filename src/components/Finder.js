import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/finderStyle.js"
import { useNavigation } from "@react-navigation/native";

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
                    <Text style={styles.boxQRIcon}>{ICONS.barcodeIcon}</Text>
                </View>
            </View>
        </>
    );

}