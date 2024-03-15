import { View, StyleSheet, Text, TextInput } from "react-native"
import { useState } from "react"
import { ICONS} from "../constants/icons.js"
import {styles} from "../styles/firstSStyle.js"
import Container from "./Container.js"
export default function FirstSection()
{
    const [text, setText] = useState('');
    return (
        <Container>
            <View style={styles.boxOne}>
                <Text style={styles.boxOneText}>Dzień dobry</Text>
                <Text style={styles.boxOneBellIcon}>{ICONS.bellIcon}</Text>
            </View>
            <View style={styles.boxTwo}>
                <Text style={styles.boxTwoText}>{ICONS.magnifierIcon}</Text>
                <TextInput
                    placeholder="Czego szukasz?"
                    onChangeText={newText => setText(newText)}
                    value={text}
                />
                <Text style={styles.boxTwoQRIcon}>{ICONS.barcodeIcon}</Text>
            </View>
        </Container>

    )
}



