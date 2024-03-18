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
<<<<<<< HEAD
        marginBottom: 10,
        backgroundColor: COLORS.containerColor

=======
        marginBottom: 20,
        paddingVertical: 0,
        backgroundColor: COLORS.containerColor,
>>>>>>> main
    }
})