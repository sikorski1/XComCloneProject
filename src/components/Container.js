import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors.js";

export default function Container({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
            {/* musi byc prop, tresc wsadzona do kontenera bedzie w tym miejscu */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: COLORS.containerColor

    }
})