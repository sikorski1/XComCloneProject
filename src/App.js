import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "./constants/colors.js";
import MainPage from "./pages/MainPage.js";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
      <MainPage />
    </View>
  )
}
