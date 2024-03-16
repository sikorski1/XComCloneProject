import { View, StyleSheet, Text, TextInput } from "react-native"
import { useState } from "react"
import { ICONS } from "../constants/icons.js"
import { styles } from "../styles/firstSStyle.js"
import Container from "./Container.js"
export default function FirstSection()
{
    const [text, setText] = useState('');
    return (
        <Container>
            <View style={styles.boxOne}>
                <Text style={styles.boxOneText}>Dzień dobry</Text>
                <Text>{ICONS.bellIcon}</Text>
            </View>
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
        </Container>

    )
}


