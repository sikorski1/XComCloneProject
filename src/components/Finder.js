import { View, Text, TextInput } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/firstSStyle.js"

export default function Finder() {
    const [text, setText] = useState('');
    return (
        <>
            <View style={styles.boxTwo}>
                <View style={styles.boxTwoContainer}>
                    <Text style={styles.boxTwoLoupIcon}>{ICONS.magnifierIcon}</Text>
                    <TextInput style={styles.boxTwoInput}
                        placeholder="Czego szukasz?"
                        onChangeText={setText}
                        value={text}
                    />
                    <Text style={styles.boxTwoQRIcon}>{ICONS.barcodeIcon}</Text>
                </View>
            </View>
        </>
    );

}