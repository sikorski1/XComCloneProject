import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../constants/colors.js"; 
export default function Container({children})
{
    return (
        <View style={styles.container}>
            {children}
            {/* musi byc prop, tresc wsadzona do kontenera bedzie w tym miejscu */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        paddingVertical: 10,
        backgroundColor: COLORS.containerColor

    }
})