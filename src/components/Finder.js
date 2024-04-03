import { View, Text, TextInput } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/finderStyle.js"

export default function Finder() {
    const [text, setText] = useState('');
    return (
        <>
            <View style={styles.box}>
                <View style={styles.boxContainer}>
                    <Text style={styles.boxLoupIcon}>{ICONS.magnifierIcon}</Text>
                    <TextInput style={styles.boxInput}
                        placeholder="Czego szukasz?"
                        onChangeText={setText}
                        value={text}
                    />
                    <Text style={styles.boxQRIcon}>{ICONS.barcodeIcon}</Text>
                </View>
            </View>
        </>
    );

}